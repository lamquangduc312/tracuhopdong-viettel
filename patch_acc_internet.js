const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update JS logic for switchAccountTab
const jsLogicOld = `function navigateToAccountManagement() {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-account').classList.remove('hidden');
            lucide.createIcons();
        }`;
const jsLogicNew = `function navigateToAccountManagement(tab) {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-account').classList.remove('hidden');
            lucide.createIcons();
            switchAccountTab(tab);
        }

        function switchAccountTab(tab) {
            const tabs = ['mobile', 'internet', 'tv', 'tv360', 'camera', 'mysign'];
            tabs.forEach(t => {
                const btn = document.getElementById('btn-acc-tab-' + t);
                const content = document.getElementById('acc-content-' + t);
                if (btn) {
                    if (t === tab) {
                        btn.className = "pb-3 text-[14px] font-bold text-slate-900 border-b-2 border-viettel";
                    } else {
                        btn.className = "pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent";
                    }
                }
                if (content) {
                    if (t === tab) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                }
            });
        }`;

html = html.replace(jsLogicOld, jsLogicNew);

// 2. Update Tabs HTML in screen-account
const oldTabsHTML = `<button class="pb-3 text-[14px] font-bold text-slate-900 border-b-2 border-viettel">Di động</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Internet</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Truyền hình số</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">TV360</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">Camera</button>
                            <button class="pb-3 text-[14px] font-medium text-slate-500">MySign</button>`;

const newTabsHTML = `<button id="btn-acc-tab-mobile" onclick="switchAccountTab('mobile')" class="pb-3 text-[14px] font-bold text-slate-900 border-b-2 border-viettel">Di động</button>
                            <button id="btn-acc-tab-internet" onclick="switchAccountTab('internet')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">Internet</button>
                            <button id="btn-acc-tab-tv" onclick="switchAccountTab('tv')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">Truyền hình số</button>
                            <button id="btn-acc-tab-tv360" onclick="switchAccountTab('tv360')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">TV360</button>
                            <button id="btn-acc-tab-camera" onclick="switchAccountTab('camera')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">Camera</button>
                            <button id="btn-acc-tab-mysign" onclick="switchAccountTab('mysign')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">MySign</button>`;
html = html.replace(oldTabsHTML, newTabsHTML);

// 3. Update Content HTML in screen-account
const oldContentHTML = `<!-- Content -->
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
                </div>`;

const newContentHTML = `<!-- Content -->
                <div class="px-4 py-4 space-y-3">
                    
                    <!-- MOBILE TAB CONTENT -->
                    <div id="acc-content-mobile" class="space-y-3">
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

                    <!-- INTERNET TAB CONTENT -->
                    <div id="acc-content-internet" class="space-y-3 hidden">
                        <!-- Card 1 -->
                        <div class="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm border border-slate-100">
                            <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i data-lucide="house" class="w-4 h-4 text-viettel"></i>
                            </div>
                            <div>
                                <div class="text-[14px] font-bold text-slate-900 mb-1">Mã hợp đồng: 652144326</div>
                                <div class="text-[12px] text-slate-500 mb-0.5">Số liên hệ: 0989 858 785</div>
                                <div class="text-[12px] text-slate-500">Phường Hoàng Liệt Thành phố Hà Nội</div>
                            </div>
                        </div>
                    </div>

                </div>`;
html = html.replace(oldContentHTML, newContentHTML);

// 4. Update the Mobile button call
html = html.replace(`onclick="navigateToAccountManagement()" class="bg-white border border-slate-700`, `onclick="navigateToAccountManagement('mobile')" class="bg-white border border-slate-700`);

// 5. Update the Internet button style and call
const oldInternetBtnRegex = /<button class="bg-white border border-slate-100 shadow-md rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 transition active:scale-95 text-viettel font-bold text-xs">[\s\S]*?<i data-lucide="user-cog" class="w-4 h-4 text-viettel"><\/i>[\s\S]*?Quản lý tài khoản[\s\S]*?<\/button>/;
const newInternetBtnHTML = `<button onclick="navigateToAccountManagement('internet')" class="bg-white border border-slate-700 rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition active:scale-95">
                            <i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"></i>
                            <span class="text-[12px] font-bold text-slate-700">Quản lý tài khoản</span>
                        </button>`;
html = html.replace(oldInternetBtnRegex, newInternetBtnHTML);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched tab logic successfully!");
