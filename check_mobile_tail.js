const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const mobileStart = html.indexOf('id="home-mobile-content"');
console.log(html.substring(mobileStart + 900, mobileStart + 2500));
