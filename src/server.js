const app = require('./index')();
const fs = require('fs');
const pdf = require('html-pdf');

const generatePDF = (res) => {
  const html = fs.readFileSync('./src/index.html', 'utf8').toString();

  const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
  }

  pdf.create(html, options).toFile('./teste.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}

app.post('/generate-pdf', generatePDF);

app.listen(3000)