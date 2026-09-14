const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\\$\\{doc\\.cat === 'hd' \\? `<span class="text-\\[11px\\] font-bold px-2\\.5 py-1 rounded-full border whitespace-nowrap \\$\\{badgeStyle\\}">[\\s\\S]*?<\\/span>` : ''\\}/g;

html = html.replace(regex, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('UI updated: Removed active status from render loop');
