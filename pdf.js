import path, { dirname } from 'path';
import { mkdir } from 'fs/promises';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Navigate to the printable CV route
const url = 'http://localhost:5173/#/printable-cv';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  const distDir = path.join(__dirname, 'dist');
  const pdfPath = path.join(distDir, 'cv.pdf');
  
  // Create dist directory if it doesn't exist
  try {
    await mkdir(distDir, { recursive: true });
  } catch (error) {
    // Directory might already exist, ignore error
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  await page.pdf({ 
    path: pdfPath, 
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  });

  await browser.close();
  console.log(`PDF saved to ${pdfPath}`);
})();
