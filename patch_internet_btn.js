const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldInternetBtnRegex = /<button class="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition">[\s\S]*?<i data-lucide="user-cog" class="w-4 h-4 text-viettel"><\/i>[\s\S]*?Quản lý tài khoản[\s\S]*?<\/button>/;

const newInternetBtnHTML = `<button onclick="navigateToAccountManagement('internet')" class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95 mx-auto">
                            <i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"></i>
                            <span class="text-[12px] font-bold text-slate-700">Quản lý tài khoản</span>
                        </button>`;

html = html.replace(oldInternetBtnRegex, newInternetBtnHTML);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched internet button!");
