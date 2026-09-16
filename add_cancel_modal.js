const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const cancelModalHtml = `
    <!-- Modal Huỷ lịch hẹn -->
    <div id="huylich-modal" class="absolute inset-0 z-[70] bg-black/60 hidden flex-col items-center justify-center p-4">
        <div class="bg-white w-full max-w-[340px] rounded-3xl p-6 relative">
            <button onclick="closeHuyLichModal()" class="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 transition">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <div class="mb-4">
                <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-red-500 to-pink-400 flex items-center justify-center shadow-lg shadow-red-200">
                    <i data-lucide="x" class="w-8 h-8 text-white drop-shadow-md"></i>
                </div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Bạn đã hủy lịch hẹn</h3>
            <p class="text-slate-600 text-[15px] mb-6">Nhân viên Viettel sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            
            <button onclick="closeHuyLichModal(); closeChiTietYeuCau();" class="w-full h-11 bg-[#1A1A1A] rounded-full text-white font-bold text-[14px] hover:bg-black transition active:scale-95">
                Đóng
            </button>
        </div>
    </div>
`;

// Insert modal just before END OF MOBILE DEVICE FRAME CONTAINER
const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
if (insertPoint !== -1) {
    html = html.substring(0, insertPoint) + cancelModalHtml + '\n    ' + html.substring(insertPoint);
}

// Add JS
const jsLogic = `
        function openHuyLichModal() {
            closeXacNhanModal();
            const modal = document.getElementById('huylich-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }
        function closeHuyLichModal() {
            const modal = document.getElementById('huylich-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }
`;

const jsInsert = html.indexOf('function closeThanhCongModal() {');
if (jsInsert !== -1) {
    const endBrace = html.indexOf('}', jsInsert + 32) + 1;
    html = html.substring(0, endBrace) + '\n' + jsLogic + html.substring(endBrace);
}

// Update the Không đồng ý button to call openHuyLichModal
const oldButton = `<button onclick="closeXacNhanModal()" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition">
                    Không đồng ý
                </button>`;
const newButton = `<button onclick="openHuyLichModal()" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition active:scale-95">
                    Không đồng ý
                </button>`;

html = html.replace(oldButton, newButton);

fs.writeFileSync('index.html', html);
console.log('done');
