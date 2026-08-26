const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const ratingIdx = html.indexOf('id="modal-rating"');
console.log(html.substring(ratingIdx - 50, ratingIdx + 500));
