export const downloadPdf = () => {
  const link = document.createElement('a');
  // In dev, pdf is under "/dist/cv.pdf" under root; in prod, it's at "/cv.pdf"
  const isDev =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  link.href = isDev ? '/dist/cv.pdf' : '/cv.pdf';
  link.download = 'cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};