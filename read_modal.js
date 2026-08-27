const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('id="modal-rating"');
const end = html.indexOf('id="modal-rating-success"');
console.log(html.substring(start, end));
