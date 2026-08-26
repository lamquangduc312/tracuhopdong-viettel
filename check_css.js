const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('input[type="radio"]');
console.log(html.substring(start - 200, start + 800));
