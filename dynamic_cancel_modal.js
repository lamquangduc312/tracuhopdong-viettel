const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Give an ID to the title of huylich-modal
html = html.replace('<h3 class="text-xl font-bold text-slate-900 mb-2">Bạn đã hủy lịch hẹn</h3>', '<h3 id="huylich-modal-title" class="text-xl font-bold text-slate-900 mb-2">Bạn đã hủy lịch hẹn</h3>');

// Update JS for openHuyLichModal
const oldJs = `
        function openHuyLichModal() {
            closeXacNhanModal();
            const modal = document.getElementById('huylich-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }`;
        
const newJs = `
        function openHuyLichModal(isCancelOrder = false) {
            closeXacNhanModal();
            const modal = document.getElementById('huylich-modal');
            const title = document.getElementById('huylich-modal-title');
            if (title) {
                if (isCancelOrder) {
                    title.innerText = 'Bạn không xác nhận huỷ đơn hàng';
                } else {
                    title.innerText = 'Bạn đã hủy lịch hẹn';
                }
            }
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                lucide.createIcons();
            }
        }`;

html = html.replace(oldJs, newJs);

// Update the onclick in the Cancel order modal
html = html.replace('openHuyLichModal();', 'openHuyLichModal(true);');

fs.writeFileSync('index.html', html);
console.log('done');
