const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/id="account-modal"[\s\S]*?Tra hợp đồng[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log(match ? match[0] : "Not found");
