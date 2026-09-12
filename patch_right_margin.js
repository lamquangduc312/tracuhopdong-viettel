const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Reduce card horizontal padding
html = html.replace(/p-3\.5/g, 'py-3.5 px-3');

// 2. Add -mr-1 to buttons to offset their p-1 padding
html = html.replace(/transition p-1"/g, 'transition p-1 -mr-1"');
html = html.replace(/transition p-1 flex-shrink-0"/g, 'transition p-1 -mr-1 flex-shrink-0"');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched right margin alignment");
