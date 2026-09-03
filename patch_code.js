const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let newHtml = html.replace(/652144326/g, '656190090');
fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Replaced 652144326 with 656190090');
