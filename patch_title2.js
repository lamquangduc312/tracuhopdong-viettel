const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<h2 class="text-sm font-extrabold text-slate-900">Tra cứu Hợp đồng & Hồ sơ</h2>', '<h2 class="text-[15px] font-extrabold text-slate-900 mt-1">Tra cứu Hợp đồng</h2>');
html = html.replace(/<p class="text-\[10px\] text-slate-500">\s*Quản lý chứng từ điện tử Viettel\s*<\/p>/, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('done');
