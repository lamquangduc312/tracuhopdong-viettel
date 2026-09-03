const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('id="document-detail-modal"');
console.log(html.substring(start, start + 2000));
