const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const detailFlow = `
    <!-- CHI TIẾT YÊU CẦU FLOW -->
    <div id="chitiet-yeucau-flow" class="absolute inset-0 z-[60] bg-[#F2F2F7] flex-col hidden overflow-hidden rounded-[54px] pt-10">
        <div class="flex-1 flex flex-col w-full h-full bg-[#F2F2F7]">
            <!-- Header -->
            <div class="bg-white px-4 pt-4 pb-3 flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="closeChiTietYeuCau()" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="chevron-left" class="w-6 h-6 text-slate-800"></i>
                </button>
                <h2 class="text-base font-bold text-slate-900">Chi tiết yêu cầu</h2>
                <div class="w-6"></div>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-28 relative">
                
                <!-- Nhân viên kỹ thuật -->
                <div>
                    <h3 class="font-bold text-slate-900 text-[15px] mb-2">Nhân viên kỹ thuật</h3>
                    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
                        <div>
                            <div class="font-semibold text-slate-900 text-[14px]">Minh Ngọc Sơn</div>
                            <div class="text-slate-500 text-[13px] mt-0.5">0912345678</div>
                        </div>
                        <button class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">
                            <i data-lucide="phone" class="w-4 h-4 text-slate-700"></i>
                        </button>
                    </div>
                </div>

                <!-- Thông tin yêu cầu -->
                <div>
                    <h3 class="font-bold text-slate-900 text-[15px] mb-2">Thông tin yêu cầu</h3>
                    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                        <div class="flex justify-between items-center">
                            <div class="text-slate-600 text-[13px]">Lịch hẹn</div>
                            <div class="font-semibold text-slate-900 text-[13px]">9:00 25/12/2025</div>
                        </div>
                    </div>
                </div>

                <!-- Thông tin khách hàng -->
                <div>
                    <h3 class="font-bold text-slate-900 text-[15px] mb-2">Thông tin khách hàng</h3>
                    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Họ và tên</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">Nguyễn Văn A</div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Số điện thoại</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">09123456789</div>
                        </div>
                    </div>
                </div>

                <!-- Thông tin đơn hàng -->
                <div>
                    <h3 class="font-bold text-slate-900 text-[15px] mb-2">Thông tin đơn hàng</h3>
                    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Loại đơn hàng</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">Đấu nối cố định FTTH</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-slate-600 text-[13px]">Mã đơn hàng</div>
                            <div class="font-semibold text-slate-900 text-[13px]">6196411852</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-slate-600 text-[13px]">Trạng thái</div>
                            <div class="bg-blue-50 border border-blue-100 text-blue-500 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>Chờ triển khai</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Gói cước</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">MESHVT1T</div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Ngày tạo đơn</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">9:00-10:00 • 25/12/2025</div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px] flex-shrink-0 mr-4">Địa chỉ lắp đặt</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">Số 1 Giang Văn Minh<br>P. Giảng Võ, TP. Hà Nội</div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Hình thức ký</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">Trực tuyến</div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div class="text-slate-600 text-[13px]">Hình thức đóng cước</div>
                            <div class="font-semibold text-slate-900 text-[13px] text-right">6 tháng</div>
                        </div>
                    </div>
                </div>

                <!-- Cước phí -->
                <div>
                    <h3 class="font-bold text-slate-900 text-[15px] mb-2">Cước phí</h3>
                    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
                        <div class="space-y-3 mb-3 pb-3 border-b border-slate-100">
                            <div class="flex justify-between items-start">
                                <div class="text-slate-600 text-[13px]">Cước đóng trước</div>
                                <div class="font-semibold text-slate-900 text-[13px] text-right">1.170.000đ</div>
                            </div>
                            <div class="flex justify-between items-start">
                                <div class="text-slate-600 text-[13px]">Phí lắp đặt</div>
                                <div class="font-semibold text-slate-900 text-[13px] text-right">300.000đ</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="font-bold text-slate-900 text-[13px]">Tổng tiền (đã bao gồm VAT)</div>
                            <div class="font-bold text-slate-900 text-[14px]">1.470.000đ</div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Sticky Footer -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 pb-8">
                <button class="w-full h-[46px] rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-black transition active:scale-95">
                    Xác nhận lịch hẹn
                </button>
            </div>
        </div>
    </div>
`;

// Insert the new flow right before the end of the mobile device frame container
const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
if (insertPoint !== -1) {
    html = html.substring(0, insertPoint) + detailFlow + '\n    ' + html.substring(insertPoint);
}

// Add JS toggle logic
const jsLogic = `
        function openChiTietYeuCau() {
            const flow = document.getElementById('chitiet-yeucau-flow');
            if (flow) {
                flow.classList.remove('hidden');
                flow.classList.add('flex');
                lucide.createIcons();
            }
        }
        function closeChiTietYeuCau() {
            const flow = document.getElementById('chitiet-yeucau-flow');
            if (flow) {
                flow.classList.add('hidden');
                flow.classList.remove('flex');
            }
        }
`;

// Add JS right after closeTraCuuDonHang()
const jsInsert = html.indexOf('function closeTraCuuDonHang() {');
if (jsInsert !== -1) {
    // Find the closing brace of closeTraCuuDonHang
    const endBrace = html.indexOf('}', jsInsert + 31) + 1;
    html = html.substring(0, endBrace) + '\n' + jsLogic + html.substring(endBrace);
}

// Add onclick to the 'Xác nhận lịch hẹn' button in the order list
const buttonToReplace = '<button class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition">\n                        Xác nhận lịch hẹn\n                    </button>';
const buttonReplacement = '<button onclick="openChiTietYeuCau()" class="w-full h-10 border border-slate-300 rounded-full text-slate-800 text-[13px] font-bold hover:bg-slate-50 transition active:scale-95">\n                        Xác nhận lịch hẹn\n                    </button>';

html = html.replace(buttonToReplace, buttonReplacement);

fs.writeFileSync('index.html', html);
console.log('done');
