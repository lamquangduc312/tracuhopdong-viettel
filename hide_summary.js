const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Hide contract-summary-box by adding 'hidden' to its class
html = html.replace(
    'id="contract-summary-box" class="pt-3',
    'id="contract-summary-box" class="hidden pt-3'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Hid contract-summary-box");
