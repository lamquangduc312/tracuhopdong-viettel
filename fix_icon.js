const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('data-lucide="house"', 'data-lucide="home"');
fs.writeFileSync('index.html', html, 'utf8');
