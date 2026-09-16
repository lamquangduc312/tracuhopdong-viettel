const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const orderTrackingFlow = `
    <!-- TRA CỨU ĐƠN HÀNG FLOW -->
    <div id="tracuu-donhang-flow" class="absolute inset-0 z-50 bg-[#F2F2F7] flex-col hidden overflow-hidden rounded-[54px] pt-10">
        <div class="flex-1 flex flex-col w-full h-full bg-[#F2F2F7]">
            <!-- Header -->
            <div class="bg-white px-4 pt-4 pb-3 flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="closeTraCuuDonHang()" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="chevron-left" class="w-6 h-6 text-slate-800"></i>
                </button>
                <h2 class="text-base font-bold text-slate-900">Đơn hàng của tôi</h2>
                <button class="p-1.5 -mr-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="headphones" class="w-5 h-5 text-slate-800"></i>
                </button>
            </div>

            <!-- Search and Filters Section -->
            <div class="bg-white px-4 pb-3 shadow-sm z-10">
                <div class="relative">
                    <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
                    <input type="text" placeholder="Tìm kiếm" class="w-full h-9 pl-9 pr-4 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:border-slate-300">
                </div>
                <div class="flex space-x-2 mt-3 overflow-x-auto no-scrollbar">
                    <button class="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 rounded-full text-[13px] text-slate-700 whitespace-nowrap bg-white">
                        <span>Thời gian</span>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                    <button class="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 rounded-full text-[13px] text-slate-700 whitespace-nowrap bg-white">
                        <span>Trạng thái</span>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                    <button class="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 rounded-full text-[13px] text-slate-700 whitespace-nowrap bg-white">
                        <span>Loại dịch vụ</span>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>

            <!-- Orders List -->
            <div class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 pb-8">
                <!-- Order Card 1: Chờ hoàn thiện hồ sơ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">08:00 • 31/09/2025</div>
                        <div class="bg-yellow-100 text-yellow-600 px-2.5 py-0.5 rounded-md text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                            <span>Chờ hoàn thiện hồ sơ</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Mua SIM</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">250.000đ</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Hoàn thiện hồ sơ
                    </button>
                </div>

                <!-- Order Card 2: Hoàn thành -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">06:00 • 31/09/2025</div>
                        <div class="bg-green-50 border border-green-200 text-green-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <span>Hoàn thành</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đổi eSIM</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">250.000đ</div>
                    </div>
                </div>

                <!-- Order Card 3: Chờ thanh toán -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">04:30 • 31/09/2025</div>
                        <div class="bg-pink-50 border border-pink-100 text-pink-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            <span>Chờ thanh toán</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đấu nối cố định</h3>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">550.000đ</div>
                    </div>
                    <button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">
                        Thanh toán
                    </button>
                </div>
                
                <!-- Order Card 4: Chờ hỗ trợ -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">09:50 • 31/09/2025</div>
                        <div class="bg-purple-50 text-purple-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>Chờ hỗ trợ</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px]">Đấu nối cố định</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">550.000đ</div>
                    </div>
                </div>

                <!-- Order Card 5: Chờ Video call -->
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
                
                <!-- Order Card 6: Đã hủy -->
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
                        <div class="text-viettel font-bold text-[14px]">550.000đ</div>
                    </div>
                </div>

                <!-- Order Card 7: Đang thực hiện -->
                <div class="bg-white rounded-2xl p-4 shadow-sm">
                    <div class="flex justify-between items-start mb-2">
                        <div class="text-[12px] text-slate-500 font-medium">17:00 • 31/09/2025</div>
                        <div class="bg-blue-50 border border-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span>Đang thực hiện</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-bold text-slate-900 text-[15px] truncate max-w-[200px]">Đổi thiết bị Modem wifi 2 bă...</h3>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-[12px] text-slate-500">Mã đơn hàng: 6196411852</div>
                        <div class="text-viettel font-bold text-[14px]">180.000đ</div>
                    </div>
                </div>
                
                <div class="h-6"></div> <!-- Padding bottom -->
            </div>
        </div>
    </div>
`;

const jsInsertionPoint = html.lastIndexOf('<script>');
if (jsInsertionPoint !== -1) {
    html = html.slice(0, jsInsertionPoint) + orderTrackingFlow + '\n' + html.slice(jsInsertionPoint);
}

// Add the JS logic right after the <script> tag at jsInsertionPoint
const scriptLogic = `
        function openTraCuuDonHang() {
            const flow = document.getElementById('tracuu-donhang-flow');
            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }
        function closeTraCuuDonHang() {
            const flow = document.getElementById('tracuu-donhang-flow');
            if (flow) {
                flow.classList.add('hidden');
                flow.classList.remove('flex');
            }
        }
`;

html = html.replace('lucide.createIcons();\n        }', 'lucide.createIcons();\n        }\n' + scriptLogic);

// Wait, what if openTraCuuDonHang was already defined?
// I'll just write it over to index.html
fs.writeFileSync('index.html', html);
console.log('done');
