const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Insert summary-card-container
if (!html.includes('id="summary-card-container"')) {
    html = html.replace(
        '<!-- Search Input - Enhanced for Mobile -->',
        `<!-- SUMMARY CARD CONTAINER -->\n                        <div id="summary-card-container"></div>\n\n                        <!-- Search Input - Enhanced for Mobile -->`
    );
}

// 2. Define the templates and inject logic into renderDocuments
const logicToInject = `
        const summaryCardContainer = document.getElementById('summary-card-container');
        if (summaryCardContainer) {
            let summaryHTML = '';
            if (currentSubscriber === 'ftth') {
                summaryHTML = \`
                <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 shadow-sm border border-blue-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <i data-lucide="wifi" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">Internet cáp quang</h3>
                            <p class="text-xs font-medium text-slate-500">Gói cước: <span class="font-bold text-blue-600">NETVT01_H - 500Mbps</span></p>
                        </div>
                    </div>
                    
                    <div class="space-y-2.5">
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Đổi số liên hệ</a>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Địa chỉ:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">Phòng 302, Tòa A, Chung cư The Light, Trung Văn, Nam Từ Liêm, Hà Nội</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thanh toán:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Thanh toán qua TK ngân hàng/Ví điện tử</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi hình thức thanh toán</a>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thông báo cước:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Nhận thông báo cước qua SMS/Zalo</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi thông báo cước</a>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'mobile_postpaid') {
                summaryHTML = \`
                <div class="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-4 shadow-sm border border-red-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-viettel opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-viettel">
                            <i data-lucide="smartphone" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">Di động trả sau</h3>
                            <p class="text-xs font-medium text-slate-500">Số HĐ: <span class="font-mono font-bold text-slate-700">656190090</span></p>
                        </div>
                    </div>
                    
                    <div class="space-y-2.5">
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500">Hạn mức sử dụng:</span>
                            <div class="text-right">
                                <span class="text-xs font-bold text-viettel">500.000 VNĐ</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Thay đổi hạn mức')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Thay đổi hạn mức sử dụng</a>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thanh toán:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Thanh toán qua TK ngân hàng/Ví điện tử</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi hình thức thanh toán</a>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thông báo cước:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Nhận thông báo cước qua email</span>
                                <span class="text-[10px] text-slate-500 block">nguyenvana@gmail.com</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi thông báo cước</a>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'camera') {
                summaryHTML = \`
                <div class="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-4 shadow-sm border border-emerald-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-500 opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <i data-lucide="video" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">Home Camera</h3>
                            <p class="text-xs font-medium text-slate-500">Thiết bị: <span class="font-bold text-emerald-600">02 Camera (1 Trong, 1 Ngoài)</span></p>
                        </div>
                    </div>
                    
                    <div class="space-y-2.5">
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Gói lưu trữ:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Cloud 7 ngày</span>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Địa chỉ:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">Phòng 302, Tòa A, Chung cư The Light, Trung Văn, Hà Nội</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Đổi số liên hệ</a>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'tv360') {
                summaryHTML = \`
                <div class="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-4 shadow-sm border border-purple-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-purple-500 opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <i data-lucide="tv" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">Truyền hình TV360</h3>
                            <p class="text-xs font-medium text-slate-500">Gói cước: <span class="font-bold text-purple-600">TV360 Standard</span></p>
                        </div>
                    </div>
                    
                    <div class="space-y-2.5">
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Tài khoản:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Đổi số liên hệ</a>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Thiết bị:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">01 Smart Box 4K</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thanh toán:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Tại các điểm thu Viettel</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi hình thức thanh toán</a>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thông báo cước:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Nhận thông báo cước qua SMS/Zalo</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi thông báo cước</a>
                            </div>
                        </div>
                    </div>
                </div>\`;
            }
            summaryCardContainer.innerHTML = summaryHTML;
        }
`;

// Insert the logic into renderDocuments
const insertPoint = `const container = document.getElementById('document-list');`;
html = html.replace(insertPoint, logicToInject + '\n' + insertPoint);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched index.html with Summary Cards");
