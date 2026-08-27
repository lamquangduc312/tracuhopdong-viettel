const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/peer-checked:bg-white peer-checked:border-viettel/g, 'peer-checked:bg-viettel peer-checked:border-viettel');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched checkboxes");
