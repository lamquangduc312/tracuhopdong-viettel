const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldBtn = `<div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center cursor-pointer">
                    <span class="font-bold text-slate-800">Danh sách hồ sơ</span>
                    <span class="text-viettel font-semibold text-sm">Xem chi tiết</span>
                </div>`;

const newBtn = `<div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center cursor-pointer" onclick="viewChan1ChieuDoc()">
                    <span class="font-bold text-slate-800">Danh sách hồ sơ</span>
                    <span class="text-viettel font-semibold text-sm">Xem chi tiết</span>
                </div>`;

content = content.replace(oldBtn, newBtn);

const docModal = `
        <!-- Popup Xem hồ sơ chặn 1 chiều -->
        <div id="popup-chan1chieu-doc" class="absolute inset-0 z-[60] bg-slate-900/40 hidden items-center justify-center p-6 backdrop-blur-sm">
            <div class="bg-white w-full h-[80%] rounded-[24px] flex flex-col shadow-xl overflow-hidden">
                <div class="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center sticky top-0">
                    <h3 class="font-bold text-slate-800">Biểu mẫu chặn 1 chiều</h3>
                    <button onclick="closePopup('popup-chan1chieu-doc')" class="p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600"><i data-lucide="x" class="w-4 h-4"></i></button>
                </div>
                <div class="flex-1 p-4 overflow-y-auto no-scrollbar bg-slate-100">
                    <!-- PDF Mockup -->
                    <div class="w-full bg-white shadow-sm border border-slate-200 p-4 mb-4">
                        <div class="text-center mb-4 border-b pb-2">
                            <h4 class="font-bold uppercase text-[12px]">Cộng hòa xã hội chủ nghĩa Việt Nam</h4>
                            <p class="text-[10px] font-semibold">Độc lập - Tự do - Hạnh phúc</p>
                            <h4 class="font-bold uppercase text-[13px] mt-3">Phiếu yêu cầu chặn 1 chiều</h4>
                        </div>
                        <div class="text-[10px] space-y-2 text-slate-700 leading-relaxed">
                            <p><b>1. Thông tin khách hàng:</b></p>
                            <p>- Số điện thoại yêu cầu chặn: <span id="doc-phone-num" class="font-bold">0987666888</span></p>
                            <p><b>2. Nội dung yêu cầu:</b></p>
                            <p>- Chặn 1 chiều (chiều đi) do khách hàng yêu cầu qua ứng dụng.</p>
                            <p>- Thời gian chặn: Từ ngày hôm nay.</p>
                            <p><b>3. Cam kết:</b> Khách hàng cam kết chịu trách nhiệm với yêu cầu trên.</p>
                            <div class="mt-6 flex justify-end">
                                <div class="text-center">
                                    <p class="mb-8">Khách hàng ký xác nhận</p>
                                    <p class="italic text-slate-400 text-[9px]">(Chữ ký điện tử bên ngoài)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

// Inject modal before "<!-- Overlays (Popups) -->"
content = content.replace('<!-- Overlays (Popups) -->', docModal + '\\n        <!-- Overlays (Popups) -->');

const docJs = `
        function viewChan1ChieuDoc() {
            let phone = document.getElementById('input-phone') ? document.getElementById('input-phone').value : '0987666888';
            if(!phone) phone = '0987666888';
            document.getElementById('doc-phone-num').innerText = phone;
            document.getElementById('popup-chan1chieu-doc').classList.remove('hidden');
            document.getElementById('popup-chan1chieu-doc').classList.add('flex');
            lucide.createIcons();
        }
`;

content = content.replace('function doBlock() {', docJs + '\\n        function doBlock() {');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Document viewer added!');
