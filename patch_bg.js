const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/bg-gradient-to-br from-white to-blue-50/g, 'bg-white');
html = html.replace(/bg-gradient-to-br from-white to-pink-50/g, 'bg-white');
html = html.replace(/bg-gradient-to-br from-white to-emerald-50/g, 'bg-white');
html = html.replace(/bg-gradient-to-br from-white to-purple-50/g, 'bg-white');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Changed card backgrounds to solid white");
