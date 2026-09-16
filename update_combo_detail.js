const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Give IDs to the elements we want to change in the Chi tiết yêu cầu flow
html = html.replace('<div class="font-semibold text-slate-900 text-[13px] text-right">Đấu nối cố định FTTH</div>', '<div id="detail-loai-don" class="font-semibold text-slate-900 text-[13px] text-right">Đấu nối cố định FTTH</div>');
html = html.replace('<div class="font-semibold text-slate-900 text-[13px] text-right">MESHVT1T</div>', '<div id="detail-goi-cuoc" class="font-semibold text-slate-900 text-[13px] text-right">MESHVT1T</div>');

// Update JS functions to take type
const oldJs = `
        function openChiTietYeuCau() {
            const flow = document.getElementById('chitiet-yeucau-flow');
            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }`;

const newJs = `
        function openChiTietYeuCau(type) {
            const flow = document.getElementById('chitiet-yeucau-flow');
            
            const elLoaiDon = document.getElementById('detail-loai-don');
            const elGoiCuoc = document.getElementById('detail-goi-cuoc');
            
            if (type === 'combo') {
                if (elLoaiDon) elLoaiDon.innerText = 'Combo Internet - TV360';
                if (elGoiCuoc) elGoiCuoc.innerText = 'MESHVT01_GIAITRI';
            } else {
                if (elLoaiDon) elLoaiDon.innerText = 'Đấu nối cố định FTTH';
                if (elGoiCuoc) elGoiCuoc.innerText = 'MESHVT1T';
            }

            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }`;

html = html.replace(oldJs, newJs);

// Find the button for Combo Internet TV360 and add onclick
const comboBtnHTML = `<button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>`;
const newComboBtnHTML = `<button onclick="openChiTietYeuCau('combo')" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>`;

html = html.replace(comboBtnHTML, newComboBtnHTML);

// Update previous button to explicitly call openChiTietYeuCau('internet')
html = html.replace('openChiTietYeuCau()"', 'openChiTietYeuCau(\'internet\')"');

fs.writeFileSync('index.html', html);
console.log('done');
