const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const modalHtml = `
    <!-- Modal Xác nhận lịch hẹn -->
    <div id="xacnhan-modal" class="absolute inset-0 z-[70] bg-black/60 hidden flex-col items-center justify-center p-4">
        <div class="bg-white w-full max-w-[340px] rounded-3xl p-6 relative">
            <button onclick="closeXacNhanModal()" class="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 transition">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <h3 class="text-xl font-bold text-slate-900 mb-2 mt-2">Xác nhận lịch hẹn</h3>
            <p class="text-slate-600 text-[15px] mb-1">Bạn đồng ý xác nhận lịch hẹn vào lúc</p>
            <p class="text-slate-900 font-bold text-[15px] mb-6">14:30 21/10/2025.</p>
            
            <div class="flex space-x-3">
                <button onclick="closeXacNhanModal()" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition">
                    Không đồng ý
                </button>
                <button onclick="closeXacNhanModal(); alert('Đã xác nhận lịch hẹn thành công!');" class="flex-1 h-11 bg-[#1A1A1A] rounded-full text-white font-bold text-[14px] hover:bg-black transition">
                    Đồng ý
                </button>
            </div>
        </div>
    </div>
`;

// Insert modal just before END OF MOBILE DEVICE FRAME CONTAINER
const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
if (insertPoint !== -1) {
    html = html.substring(0, insertPoint) + modalHtml + '\n    ' + html.substring(insertPoint);
}

// Add JS
const jsLogic = `
        function openXacNhanModal() {
            const footerBtn = document.getElementById('detail-footer-btn');
            // Only open if action is confirm (not cancel)
            if (footerBtn && footerBtn.innerText === 'Xác nhận lịch hẹn') {
                const modal = document.getElementById('xacnhan-modal');
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    lucide.createIcons();
                }
            } else if (footerBtn && footerBtn.innerText === 'Xác nhận huỷ đơn') {
                alert('Tính năng huỷ đơn đang phát triển...');
            }
        }
        function closeXacNhanModal() {
            const modal = document.getElementById('xacnhan-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }
`;

const jsInsert = html.indexOf('function closeChiTietYeuCau() {');
if (jsInsert !== -1) {
    const endBrace = html.indexOf('}', jsInsert + 31) + 1;
    html = html.substring(0, endBrace) + '\n' + jsLogic + html.substring(endBrace);
}

// Update the footer button to call openXacNhanModal
html = html.replace('<button id="detail-footer-btn" class="w-full h-[46px] rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-black transition active:scale-95">\n                    Xác nhận lịch hẹn\n                </button>', '<button id="detail-footer-btn" onclick="openXacNhanModal()" class="w-full h-[46px] rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-black transition active:scale-95">\n                    Xác nhận lịch hẹn\n                </button>');

fs.writeFileSync('index.html', html);
console.log('done');
