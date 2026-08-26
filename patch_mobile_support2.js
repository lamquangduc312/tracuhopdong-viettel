const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newContent = `
                    <div class="px-4 mt-5 mb-5 flex justify-center relative z-20">
                        <button class="bg-white border border-slate-100 shadow-md rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 transition active:scale-95 text-viettel font-bold text-xs">
                            <i data-lucide="user-cog" class="w-4 h-4 text-viettel"></i>
                            <span class="text-[13px] text-slate-700">Quản lý tài khoản</span>
                        </button>
                    </div>

                    <div class="px-4 mt-2">
                        <div onclick="navigateToSupportScreen('mobile')" class="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-sm border border-slate-100 active:scale-98 transition-all cursor-pointer">
                            <div class="flex items-center gap-4">
                                <div class="w-[50px] h-[50px] rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="headphones" class="w-6 h-6 text-viettel"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="text-[14px] font-bold text-slate-800">Nhân viên hỗ trợ của Bạn</div>
                                    <div class="text-[11px] text-slate-500 mt-1 line-clamp-1">Đội ngũ kỹ thuật viên khu vực Hà Nội</div>
                                </div>
                            </div>
                            <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
                        </div>
                    </div>
`;

// Find where to insert using Regex
// Look for <!-- Tiện ích Di động --> which is right below the dashboard card
const insertIdx = html.indexOf('<!-- Tiện ích Di động -->');
if (insertIdx > -1) {
    html = html.substring(0, insertIdx) + newContent + '\n                    ' + html.substring(insertIdx);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Success!");
} else {
    console.log("Could not find insert point.");
}
