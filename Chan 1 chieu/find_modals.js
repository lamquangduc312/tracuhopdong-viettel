const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id="modal') || lines[i].includes('id="popup')) {
        console.log(i + ' ' + lines[i].trim());
    }
}
