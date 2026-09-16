const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const newListHtml = `
            <div id="tracuu-donhang-list" class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 pb-8">
                <!-- Order Card: Chờ triển khai 1 -->
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
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Xác nhận lịch hẹn
                    </button>
                </div>

                <!-- Order Card: Chờ triển khai 2 -->
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
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Xác nhận huỷ đơn từ Nhân viên
                    </button>
                </div>

                <!-- Order Card: Chờ hoàn thiện hồ sơ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">08:00 • 31/09/2025</div>
                        <div class="bg-yellow-100 text-yellow-600 px-2.5 py-0.5 rounded-md text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                            <span>Chờ hoàn thiện hồ sơ</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Combo Internet Camera</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">250.000đ</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Hoàn thiện hồ sơ
                    </button>
                </div>

                <!-- Order Card: Hoàn thành -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">06:00 • 31/09/2025</div>
                        <div class="bg-green-50 border border-green-200 text-green-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <span>Hoàn thành</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Internet</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">250.000đ</div>
                    </div>
                </div>

                <!-- Order Card: Chờ thanh toán -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">04:30 • 31/09/2025</div>
                        <div class="bg-pink-50 border border-pink-100 text-pink-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            <span>Chờ thanh toán</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Internet</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">550.000đ</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Thanh toán
                    </button>
                </div>
                
                <!-- Order Card: Chờ hỗ trợ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">09:50 • 31/09/2025</div>
                        <div class="bg-purple-50 text-purple-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>Chờ hỗ trợ</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đăng ký Internet</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">550.000đ</div>
                    </div>
                </div>

                <!-- Order Card: Chờ Video call -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">19:20 • 31/09/2025</div>
                        <div class="bg-cyan-50 text-cyan-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            <span>Chờ Video call</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Mua SIM</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">180.000đ</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Gọi Video
                    </button>
                </div>
                
                <!-- Order Card: Đã hủy -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">15:20 • 31/09/2025</div>
                        <div class="bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                            <span>Đã hủy</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px] truncate max-w-[200px]">Đổi thiết bị Modem wifi 2 bă...</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                    </div>
                </div>

                <div class="h-6"></div> <!-- Padding bottom -->
            </div>
`;

const startTag = '<div id="tracuu-donhang-list"';
const endTag = '<!-- Padding bottom -->\n            </div>';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag) + endTag.length;

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + newListHtml + html.substring(endIndex);
    fs.writeFileSync('index.html', html);
    console.log('Replaced list successfully.');
} else {
    console.log('Could not find start or end index.');
}
