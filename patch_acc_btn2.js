const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('data-lucide="git-merge"', 'data-lucide="share-2"');

fs.writeFileSync('index.html', html, 'utf8');
