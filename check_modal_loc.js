const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('id="modal-rating"');
console.log(html.substring(idx - 500, idx + 500));
