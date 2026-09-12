const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('standard-view');
console.log(html.substring(start - 200, start + 1000));
