const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/currentCategory/g);
console.log(match);
const match2 = html.match(/.{0,50}currentCategory.{0,100}/g);
console.log(match2 ? match2.join('\n') : "Not found");
