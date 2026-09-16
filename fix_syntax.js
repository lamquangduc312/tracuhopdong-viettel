const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace(/}\s*}\s*}\s*function closeChiTietYeuCau\(\) \{/, '}\n        function closeChiTietYeuCau() {');

fs.writeFileSync('index.html', html);
console.log('Fixed closeChiTietYeuCau');
