const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find start of condition
const startIndex = html.indexOf("${doc.cat === 'hd' ?");
if (startIndex !== -1) {
    const endIndex = html.indexOf(" : ''}", startIndex) + 6;
    html = html.substring(0, startIndex) + html.substring(endIndex);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Successfully sliced out the status badge');
} else {
    console.log('Could not find the status badge string');
}
