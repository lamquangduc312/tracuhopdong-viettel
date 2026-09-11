const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('otp-form');
console.log(html.substring(start - 200, start + 2000));
