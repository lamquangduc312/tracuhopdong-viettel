const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add id="tech-support-section" to the tech support block
html = html.replace(
    /<div>\s*<h3 class="text-\[11px\] font-semibold text-slate-500 mb-2">Nhân viên hỗ trợ kĩ thuật<\/h3>/g,
    '<div id="tech-support-section">\n                        <h3 class="text-[11px] font-semibold text-slate-500 mb-2">Nhân viên hỗ trợ kĩ thuật</h3>'
);

// 2. Update navigateToSupportScreen to accept source argument
html = html.replace(
    /function navigateToSupportScreen\(\) \{\s*document\.getElementById\('screen-home'\)\.classList\.add\('hidden'\);\s*document\.getElementById\('screen-support'\)\.classList\.remove\('hidden'\);\s*\}/g,
    `function navigateToSupportScreen(source) {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-support').classList.remove('hidden');
            const techSection = document.getElementById('tech-support-section');
            if (techSection) {
                if (source === 'mobile') {
                    techSection.classList.add('hidden');
                } else {
                    techSection.classList.remove('hidden');
                }
            }
        }`
);

// 3. Update the existing 'Nhân viên hỗ trợ' in Internet tab to pass 'internet'
html = html.replace(
    /onclick="navigateToSupportScreen\(\)" class="mt-4 bg-white rounded-2xl p-3\.5 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"/g,
    'onclick="navigateToSupportScreen(\'internet\')" class="mt-4 bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"'
);
// And also check if there are any others
html = html.replace(
    /onclick="navigateToSupportScreen\(\)"/g,
    'onclick="navigateToSupportScreen(\'internet\')"'
);

// 4. Add the Quản lý tài khoản button and Nhân viên hỗ trợ của bạn block to the Mobile tab
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

// Insert it right after the dashboard card inside mobile tab
// The dashboard card ends with:
//                             <div class="pt-2 flex items-center justify-center gap-3">
//                                     <button class="px-6 py-2.5 bg-pink-50 text-viettel text-xs font-bold rounded-full w-full">Tra cước</button>
//                                     <button class="px-6 py-2.5 bg-viettel text-white text-xs font-bold rounded-full shadow-md shadow-red-200 w-full hover:bg-viettel-dark transition">Nạp tiền</button>
//                             </div>
//                         </div>
//                     </div>
const searchInsertStr = 'w-full hover:bg-viettel-dark transition">Nạp tiền</button>\n                            </div>\n                        </div>\n                    </div>';
const insertIdx = html.indexOf(searchInsertStr);
if (insertIdx > -1) {
    html = html.substring(0, insertIdx + searchInsertStr.length) + newContent + html.substring(insertIdx + searchInsertStr.length);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Success!");
} else {
    console.log("Could not find insert point.");
}
