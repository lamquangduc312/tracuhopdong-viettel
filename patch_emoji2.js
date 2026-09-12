const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
    /if \(doc\.cat === 'bbnt'\) catIcon = "✅";/g,
    'if (doc.cat === \'bbnt\') catIcon = "☑️";'
);
fs.writeFileSync('index.html', html, 'utf8');
