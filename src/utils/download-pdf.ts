export const downloadPdf = () => {
  const link = document.createElement('a');
  // In dev, pdf is under "/dist/cv-joonas-rautiainen.pdf" under root; in prod, it's at "/cv-joonas-rautiainen.pdf"
  link.href = '/cv-joonas-rautiainen.pdf';
  link.download = 'cv-joonas-rautiainen.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};