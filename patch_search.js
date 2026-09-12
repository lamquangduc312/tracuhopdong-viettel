const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    "const searchKey = document.getElementById('document-search').value.toLowerCase();",
    "const searchInput = document.getElementById('document-search'); const searchKey = searchInput ? searchInput.value.toLowerCase() : '';"
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched searchKey logic in renderDocuments");
