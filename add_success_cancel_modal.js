const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const successCancelModalHtml = `
    <!-- Modal Huỷ đơn hàng thành công -->
    <div id="thanhcong-huydon-modal" class="absolute inset-0 z-[70] bg-black/60 hidden flex-col items-center justify-center p-4">
        <div class="bg-white w-full max-w-[340px] rounded-3xl p-6 relative">
            <button onclick="closeThanhCongHuyDonModal()" class="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 transition">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <div class="mb-4">
                <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-green-400 flex items-center justify-center shadow-lg shadow-green-200">
                    <i data-lucide="check" class="w-8 h-8 text-white drop-shadow-md"></i>
                </div>
            </div>
            <h3 class="text-[17px] font-bold text-slate-900 mb-6 mt-1">Huỷ đơn hàng thành công</h3>
            
            <button onclick="closeThanhCongHuyDonModal(); closeChiTietYeuCau();" class="w-full h-11 bg-[#1A1A1A] rounded-full text-white font-bold text-[14px] hover:bg-black transition active:scale-95">
                Đóng
            </button>
        </div>
    </div>
`;

// Insert modal just before END OF MOBILE DEVICE FRAME CONTAINER
const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
if (insertPoint !== -1) {
    html = html.substring(0, insertPoint) + successCancelModalHtml + '\n    ' + html.substring(insertPoint);
}

// Add JS
const jsLogic = `
        function closeThanhCongHuyDonModal() {
            const modal = document.getElementById('thanhcong-huydon-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }
`;

const jsInsert = html.indexOf('function openThanhCongHuyModal() {');
if (jsInsert !== -1) {
    const endBrace = html.indexOf('}', html.indexOf('}', jsInsert) + 1); // find the end of openThanhCongHuyModal()
    
    // Replace the body of openThanhCongHuyModal
    const oldFuncBody = `
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
        }`;
    
    const newFuncBody = `
        function openThanhCongHuyModal() {
            closeXacNhanHuyModal();
            const modal = document.getElementById('thanhcong-huydon-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }`;
    
    html = html.replace(oldFuncBody, newFuncBody + '\n' + jsLogic);
}

fs.writeFileSync('index.html', html);
console.log('done');
