const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/id="account-modal"[\s\S]{0,2000}/);
console.log(match ? match[0] : "Not found");
