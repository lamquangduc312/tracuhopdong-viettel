const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Change the 'Hủy' button in xacnhan-huy-modal
const oldBtn = `<button onclick="closeXacNhanHuyModal()" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition">
                    Hủy
                </button>`;
const newBtn = `<button onclick="closeXacNhanHuyModal(); openHuyLichModal();" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition active:scale-95">
                    Hủy
                </button>`;

html = html.replace(oldBtn, newBtn);

fs.writeFileSync('index.html', html);
console.log('done');
