const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newScreenHTML = `
            <!-- SCREEN: ACCOUNT MANAGEMENT -->
            <div id="screen-account" class="hidden transition-all duration-300 bg-slate-50 min-h-screen">
                <!-- Header -->
                <div class="bg-white sticky top-0 z-50 pt-3">
                    <div class="flex items-center gap-3 px-4 pb-3">
                        <button onclick="navigateBackFromAccount()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">
                            <i data-lucide="chevron-left" class="w-5 h-5"></i>
                        </button>
                        <h2 class="text-[17px] font-bold text-slate-900">Quản lý tài khoản (3)</h2>
                    </div>
                    
                    <!-- Tabs -->
                    <div class="flex overflow-x-auto no-scrollbar border-b border-slate-200">
                        <div class="flex whitespace-nowrap px-4 space-x-6">
                            <button class="pb-3 text-[14px] font-bold text-slate-900 border-b-2 border-viettel">Di động</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Internet</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Truyền hình số</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">TV360</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Camera</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">MySign</button>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="px-4 py-4 space-y-3">
                    <!-- Card 1 -->
                    <div class="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm border border-slate-100">
                        <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i data-lucide="smartphone" class="w-4 h-4 text-viettel"></i>
                        </div>
                        <div>
                            <div class="text-[14px] font-bold text-slate-900 mb-1.5">Thuê bao 0981 047 468</div>
                            <span class="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-600 text-[11px] font-medium">Trả trước</span>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm border border-slate-100">
                        <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i data-lucide="smartphone" class="w-4 h-4 text-viettel"></i>
                        </div>
                        <div>
                            <div class="text-[14px] font-bold text-slate-900 mb-1.5">Thuê bao 0989 858 785</div>
                            <span class="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-600 text-[11px] font-medium">Trả trước</span>
                        </div>
                    </div>
                </div>
            </div>
`;

// Insert the screen
const screenSupportIdx = html.indexOf('<!-- SCREEN: SUPPORT STAFF -->');
html = html.substring(0, screenSupportIdx) + newScreenHTML + '\n' + html.substring(screenSupportIdx);

// Add JS logic
const jsLogic = `
        function navigateToAccountManagement() {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-account').classList.remove('hidden');
            lucide.createIcons();
        }

        function navigateBackFromAccount() {
            document.getElementById('screen-account').classList.add('hidden');
            document.getElementById('screen-home').classList.remove('hidden');
        }
`;

const jsInsertIdx = html.indexOf('function navigateToSupportScreen(source)');
html = html.substring(0, jsInsertIdx) + jsLogic + '\n        ' + html.substring(jsInsertIdx);

// Attach onclick to the Quản lý tài khoản button
html = html.replace(
    /<button class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95">[\s\S]*?<i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"><\/i>[\s\S]*?<span class="text-\[12px\] font-bold text-slate-700">Quản lý tài khoản<\/span>[\s\S]*?<\/button>/,
    `<button onclick="navigateToAccountManagement()" class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95">
                            <i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"></i>
                            <span class="text-[12px] font-bold text-slate-700">Quản lý tài khoản</span>
                        </button>`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched successfully!");
