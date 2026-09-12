const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('account-modal');
console.log(html.substring(start - 200, start + 2500));
