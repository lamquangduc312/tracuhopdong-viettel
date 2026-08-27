const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    /<button class="bg-white border border-slate-100 shadow-md rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 transition active:scale-95 text-viettel font-bold text-xs">[\s\S]*?<i data-lucide="user-cog" class="w-4 h-4 text-viettel"><\/i>[\s\S]*?<span class="text-\[13px\] text-slate-700">Quản lý tài khoản<\/span>[\s\S]*?<\/button>/,
    `<button class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95">
                            <i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"></i>
                            <span class="text-[12px] font-bold text-slate-700">Quản lý tài khoản</span>
                        </button>`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched correctly");
