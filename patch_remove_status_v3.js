const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove from standard view header
html = html.replace(/<span class="bg-emerald-100 text-emerald-800 font-bold text-\[11px\] px-3 py-1\.5 rounded-full flex items-center gap-1\.5 whitespace-nowrap">\s*<i data-lucide="check-circle-2" class="w-4 h-4"><\/i>\s*<span>Đang hoạt động<\/span>\s*<\/span>/g, '');

// 2. Remove from renderDocuments
const searchStr = "\${doc.cat === 'hd' ? `<span class=\"text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap \${badgeStyle}\">\\n                                ✓ \${doc.status}\\n                            </span>` : ''}";
html = html.replace(searchStr, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('UI updated: Removed active status');
