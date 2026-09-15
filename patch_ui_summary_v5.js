const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\\n');

let startIdx = 2203;
let endIdx = -1;

for (let i = startIdx; i < lines.length; i++) {
    if (lines[i].includes("summaryCardContainer.innerHTML = summaryHTML;")) {
        endIdx = i;
        break;
    }
}

if (endIdx === -1) {
    console.error("End index not found!");
    process.exit(1);
}

const newLines = `            if (currentSubscriber === 'ftth') {
                summaryHTML = \`
                <div class="bg-white rounded-2xl py-3.5 px-3 shadow-sm border border-blue-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-viettel opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <i data-lucide="globe" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800 mt-2">Internet Cáp Quang</h3>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Gói cước:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-bold text-viettel block leading-tight">NETVT01_H - 500Mbps</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3">
                                <span class="text-[11px] font-bold text-slate-700">0989.858.785</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1" title="Đổi số liên hệ">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Địa chỉ lắp đặt:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">Phòng 302, Tòa A, Chung cư The Light, Trung Văn, Hà Nội</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thanh toán:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Tại các điểm thu Viettel</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thông báo cước:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Nhận thông báo cước qua SMS/email</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi thông báo cước">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'mobile_postpaid') {
                summaryHTML = \`
                <div class="bg-white rounded-2xl py-3.5 px-3 shadow-sm border border-red-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-viettel opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-viettel">
                            <i data-lucide="smartphone" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800 mt-2">Di động trả sau</h3>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">656190090</span>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Số đại diện:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700">0989.858.785</span>
                            </div>
                        </div>

                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Địa chỉ thông báo cước:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">Phòng 302, Tòa A, Chung cư The Light, Trung Văn, Hà Nội</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Hình thức thanh toán:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Tại các điểm thu Viettel</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Hình thức thông báo cước:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Nhận qua email (khachhang@gmail.com)</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi hình thức thông báo">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'camera') {
                summaryHTML = \`
                <div class="bg-white rounded-2xl py-3.5 px-3 shadow-sm border border-slate-200 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-slate-800 opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                            <i data-lucide="camera" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800 mt-2">Home Camera</h3>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Thiết bị:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">02 Camera trong nhà, 01 Camera ngoài trời</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Gói lưu trữ:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Cloud 7 ngày</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Địa chỉ:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">Phòng 302, Tòa A, Chung cư The Light, Trung Văn, Hà Nội</span>
                            </div>
                        </div>
                    </div>
                </div>\`;
            } else if (currentSubscriber === 'tv') {
                summaryHTML = \`
                <div class="bg-white rounded-2xl py-3.5 px-3 shadow-sm border border-purple-100 mb-2 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-purple-500 opacity-5 rounded-bl-full"></div>
                    <div class="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <i data-lucide="tv" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-800">Truyền hình TV360</h3>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Gói cước:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-bold text-purple-600 block leading-tight">TV360 Standard</span>
                            </div>
                        </div>

                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/4">Thiết bị:</span>
                            <div class="text-right w-3/4">
                                <span class="text-[11px] font-medium text-slate-700 block leading-tight">01 Smart Box 4K</span>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Tài khoản:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                            </div>
                        </div>
                        
                        <div class="w-full h-px bg-slate-100 my-1"></div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thanh toán:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Tại các điểm thu Viettel</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Thông báo cước:</span>
                            <div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Nhận thông báo cước qua SMS/email</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 -mr-1 flex-shrink-0" title="Đổi thông báo cước">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>\`;
            }
            summaryCardContainer.innerHTML = summaryHTML;`;

lines.splice(startIdx, endIdx - startIdx + 1, newLines);
fs.writeFileSync('index.html', lines.join('\\n'), 'utf8');
console.log('UI updated successfully.');
