const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/const searchKey[\s\S]{0,1000}/);
console.log(match ? match[0] : "Not found");
