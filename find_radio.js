const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((line, i) => {
    if(line.includes('accountSelect')) {
        console.log(`Line ${i+1}: ${line}`);
    }
});
