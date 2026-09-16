const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Add IDs to labels and buttons that need to change
html = html.replace('<div class="text-slate-600 text-[13px]">Lịch hẹn</div>', '<div id="detail-lich-hen-label" class="text-slate-600 text-[13px]">Lịch hẹn</div>');
html = html.replace('<button class="w-full h-[46px] rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-black transition active:scale-95">\n                    Xác nhận lịch hẹn\n                </button>', '<button id="detail-footer-btn" class="w-full h-[46px] rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-black transition active:scale-95">\n                    Xác nhận lịch hẹn\n                </button>');

// Replace openChiTietYeuCau
const oldJsRegex = /function openChiTietYeuCau\(type\) \{[\s\S]*?lucide\.createIcons\(\);\n\s*\}/;

const newJs = `
        function openChiTietYeuCau(type, action = 'confirm') {
            const flow = document.getElementById('chitiet-yeucau-flow');
            
            const elLoaiDon = document.getElementById('detail-loai-don');
            const elGoiCuoc = document.getElementById('detail-goi-cuoc');
            const elCameraFields = document.getElementById('detail-camera-fields');
            const elLichHenLabel = document.getElementById('detail-lich-hen-label');
            const elFooterBtn = document.getElementById('detail-footer-btn');
            
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

            if (action === 'cancel') {
                if (elLichHenLabel) elLichHenLabel.innerText = 'Lịch hẹn huỷ';
                if (elFooterBtn) elFooterBtn.innerText = 'Xác nhận huỷ đơn';
            } else {
                if (elLichHenLabel) elLichHenLabel.innerText = 'Lịch hẹn';
                if (elFooterBtn) elFooterBtn.innerText = 'Xác nhận lịch hẹn';
            }

            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }`;

html = html.replace(oldJsRegex, newJs);

// Update all the onclicks in the list
// First, replace any openChiTietYeuCau('xxx') with openChiTietYeuCau('xxx', 'confirm')
html = html.replace(/openChiTietYeuCau\('camera'\)/g, "openChiTietYeuCau('camera', 'confirm')");
html = html.replace(/openChiTietYeuCau\('combo'\)/g, "openChiTietYeuCau('combo', 'confirm')");
html = html.replace(/openChiTietYeuCau\('internet'\)/g, "openChiTietYeuCau('internet', 'confirm')");

// Now we need some way to trigger the cancel. Let's add 3 new cards for the "cancel" flows, 
// just below the current "Chờ triển khai" cards, so they can test both confirm and cancel.

const cancelCards = `
                <!-- Order Card: Chờ triển khai (Internet) - Huỷ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">09:00 • 31/09/2025</div>
                        <div class="bg-blue-50 border border-blue-100 text-blue-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>Chờ triển khai</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Internet</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411853</div>
                    </div>
                    <button onclick="openChiTietYeuCau('internet', 'cancel')" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>
                </div>

                <!-- Order Card: Chờ triển khai (Combo TV360) - Huỷ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">09:00 • 31/09/2025</div>
                        <div class="bg-blue-50 border border-blue-100 text-blue-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>Chờ triển khai</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Combo Internet TV360</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411854</div>
                    </div>
                    <button onclick="openChiTietYeuCau('combo', 'cancel')" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>
                </div>

                <!-- Order Card: Chờ triển khai (Combo Camera) - Huỷ -->
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
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411855</div>
                    </div>
                    <button onclick="openChiTietYeuCau('camera', 'cancel')" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>
                </div>
`;

// Insert the cancel cards after the first 3 confirm cards.
// We will look for "<!-- Order Card: Chờ hoàn thiện hồ sơ -->" and inject before it.
html = html.replace('<!-- Order Card: Chờ hoàn thiện hồ sơ -->', cancelCards + '\n                <!-- Order Card: Chờ hoàn thiện hồ sơ -->');

fs.writeFileSync('index.html', html);
console.log('done');
