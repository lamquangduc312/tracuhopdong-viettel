const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/g;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
    fs.writeFileSync(`test_script_${i}.js`, match[1], 'utf8');
    i++;
}
