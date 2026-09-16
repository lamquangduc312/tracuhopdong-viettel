const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const confirmCancelModalHtml = `
    <!-- Modal Xác nhận huỷ đơn hàng -->
    <div id="xacnhan-huy-modal" class="absolute inset-0 z-[70] bg-black/60 hidden flex-col items-center justify-center p-4">
        <div class="bg-white w-full max-w-[340px] rounded-3xl p-6 relative">
            <button onclick="closeXacNhanHuyModal()" class="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 transition">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <h3 class="text-xl font-bold text-slate-900 mb-2 mt-2">Xác nhận hủy đơn hàng</h3>
            <p class="text-slate-600 text-[15px] mb-6">Bạn có chắc chắn muốn hủy yêu cầu đăng ký internet gói <strong id="modal-huy-goi-cuoc" class="text-slate-900 font-bold">MESHVT1T</strong> không?</p>
            
            <div class="flex space-x-3">
                <button onclick="closeXacNhanHuyModal()" class="flex-1 h-11 border border-slate-300 rounded-full text-slate-800 font-bold text-[14px] hover:bg-slate-50 transition">
                    Hủy
                </button>
                <button onclick="openThanhCongHuyModal()" class="flex-1 h-11 bg-[#1A1A1A] rounded-full text-white font-bold text-[14px] hover:bg-black transition active:scale-95">
                    Đồng ý
                </button>
            </div>
        </div>
    </div>
`;

// Insert modal just before END OF MOBILE DEVICE FRAME CONTAINER
const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
if (insertPoint !== -1) {
    html = html.substring(0, insertPoint) + confirmCancelModalHtml + '\n    ' + html.substring(insertPoint);
}

// Add JS
const jsLogic = `
        function openXacNhanHuyModal() {
            const modal = document.getElementById('xacnhan-huy-modal');
            const elGoiCuoc = document.getElementById('detail-goi-cuoc');
            const modalGoiCuoc = document.getElementById('modal-huy-goi-cuoc');
            
            if (modalGoiCuoc && elGoiCuoc) {
                modalGoiCuoc.innerText = elGoiCuoc.innerText;
            }
            
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }
        function closeXacNhanHuyModal() {
            const modal = document.getElementById('xacnhan-huy-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }
        function openThanhCongHuyModal() {
            closeXacNhanHuyModal();
            const modal = document.getElementById('huylich-modal');
            if (modal) {
                // Actually, the user's previous "Bạn đã huỷ lịch hẹn" is perfect for this success state as well.
                // Wait, previous prompt said "bạn đã hủy lịch hẹn giống như hình". Let's reuse that or we can make a specific one.
                // Reusing huylich-modal
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }
`;

const jsInsert = html.indexOf('function closeHuyLichModal() {');
if (jsInsert !== -1) {
    const endBrace = html.indexOf('}', jsInsert + 31) + 1;
    html = html.substring(0, endBrace) + '\n' + jsLogic + html.substring(endBrace);
}

// Update the alert logic in openXacNhanModal
const alertLogic = "alert('Tính năng huỷ đơn đang phát triển...');";
html = html.replace(alertLogic, 'openXacNhanHuyModal();');


fs.writeFileSync('index.html', html);
console.log('done');
