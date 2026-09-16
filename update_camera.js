const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Add the new card for Combo Internet Camera in the order list
const newCard = `
                <!-- Order Card: Chờ triển khai 3 (Combo Internet Camera) -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">09:00 • 31/09/2025</div>
                        <div class="bg-blue-50 border border-blue-100 text-blue-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>Chờ triển khai</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Combo Internet Camera</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                    </div>
                    <button onclick="openChiTietYeuCau('camera')" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">
                        Xác nhận lịch hẹn đơn từ Nhân viên
                    </button>
                </div>
`;
html = html.replace('<!-- Order Card: Chờ triển khai 1 -->', newCard + '\n                <!-- Order Card: Chờ triển khai 1 -->');

// 2. Add hidden camera fields into the Chi tiết yêu cầu flow
const cameraFields = `
                        <!-- Hidden Camera fields -->
                        <div id="detail-camera-fields" class="hidden flex-col space-y-3 pt-3 border-t border-slate-100 mt-3">
                            <div class="flex justify-between items-start">
                                <div class="text-slate-600 text-[13px]">Camera 1</div>
                                <div class="font-semibold text-slate-900 text-[13px] text-right">Trong nhà</div>
                            </div>
                            <div class="flex justify-between items-start">
                                <div class="text-slate-600 text-[13px]">Camera 2</div>
                                <div class="font-semibold text-slate-900 text-[13px] text-right">Ngoài trời</div>
                            </div>
                        </div>
`;
html = html.replace('<div class="flex justify-between items-start">\n                            <div class="text-slate-600 text-[13px]">Hình thức đóng cước</div>\n                            <div class="font-semibold text-slate-900 text-[13px] text-right">6 tháng</div>\n                        </div>', '<div class="flex justify-between items-start">\n                            <div class="text-slate-600 text-[13px]">Hình thức đóng cước</div>\n                            <div class="font-semibold text-slate-900 text-[13px] text-right">6 tháng</div>\n                        </div>' + cameraFields);


// 3. Update the openChiTietYeuCau logic
const newJs = `
        function openChiTietYeuCau(type) {
            const flow = document.getElementById('chitiet-yeucau-flow');
            
            const elLoaiDon = document.getElementById('detail-loai-don');
            const elGoiCuoc = document.getElementById('detail-goi-cuoc');
            const elCameraFields = document.getElementById('detail-camera-fields');
            
            if (type === 'combo') {
                if (elLoaiDon) elLoaiDon.innerText = 'Combo Internet - TV360';
                if (elGoiCuoc) elGoiCuoc.innerText = 'MESHVT01_GIAITRI';
                if (elCameraFields) elCameraFields.classList.replace('flex', 'hidden');
            } else if (type === 'camera') {
                if (elLoaiDon) elLoaiDon.innerText = 'Combo Internet - Camera';
                if (elGoiCuoc) elGoiCuoc.innerText = 'MESHVT1T_CAM';
                if (elCameraFields) elCameraFields.classList.replace('hidden', 'flex');
            } else {
                if (elLoaiDon) elLoaiDon.innerText = 'Đấu nối cố định FTTH';
                if (elGoiCuoc) elGoiCuoc.innerText = 'MESHVT1T';
                if (elCameraFields) elCameraFields.classList.replace('flex', 'hidden');
            }

            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }`;

// Replace the old function
// We will do a generic replacement since the string might have formatting differences.
const regex = /function openChiTietYeuCau\(type\) \{[\s\S]*?lucide\.createIcons\(\);\n\s*\}/;
html = html.replace(regex, newJs);

fs.writeFileSync('index.html', html);
console.log('done');
