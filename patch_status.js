const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/Đang hiệu lực/g, 'Đang hoạt động');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Replaced successfully!");
