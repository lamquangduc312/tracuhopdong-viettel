const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<span id="selected-account-text" class="truncate">Di động trả sau_0988 123 456</span>', '<span id="selected-account-text" class="truncate">Internet_0989 858 785</span>');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Fixed initial text");
