const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const noComments = html.replace(/<!--[\s\S]*?-->/g, '');

const start = noComments.indexOf('rounded-[54px] iphone-frame');
const startIndex = noComments.lastIndexOf('<div', start);
console.log('iphone-frame start:', noComments.substring(startIndex, startIndex + 50));

let count = 0;
const regex = /<\/?div[^>]*>/gi;
regex.lastIndex = startIndex;

let match;
while ((match = regex.exec(noComments)) !== null) {
    if (match[0].startsWith('</div')) {
        count--;
        if (count === 0) {
            console.log('iphone-frame closed early at index:', match.index);
            console.log(noComments.substring(match.index - 100, match.index + 50));
            break;
        }
    } else {
        count++;
    }
}
console.log('Final count:', count);
