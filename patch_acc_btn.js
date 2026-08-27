const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const searchStr = `<button class="bg-white border border-slate-100 shadow-md rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 transition active:scale-95 text-viettel font-bold text-xs">
                            <i data-lucide="user-cog" class="w-4 h-4 text-viettel"></i>
                            <span class="text-[13px] text-slate-700">Quản lý tài khoản</span>
                        </button>`;

const newStr = `<button class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95">
                            <i data-lucide="git-merge" class="w-3.5 h-3.5 text-slate-700"></i>
                            <span class="text-[12px] font-bold text-slate-700">Quản lý tài khoản</span>
                        </button>`;

html = html.replace(searchStr, newStr);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched button");
