const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Add ids to camera and tv360 home buttons
html = html.replace('<button class="flex-1 py-2.5 px-3 rounded-full text-center text-white/80 hover:text-white transition">\n                            <i data-lucide="video" class="w-4 h-4 inline mr-1"></i>Camera\n                        </button>', '<button id="tab-btn-camera" onclick="switchHomeTab(\'camera\')" class="flex-1 py-2.5 px-3 rounded-full text-center text-white/80 hover:text-white transition">\n                            <i data-lucide="video" class="w-4 h-4 inline mr-1"></i>Camera\n                        </button>');

html = html.replace('<button class="flex-1 py-2.5 px-3 rounded-full text-center text-white/80 hover:text-white transition">\n                            <i data-lucide="tv" class="w-4 h-4 inline mr-1"></i>TV360\n                        </button>', '<button id="tab-btn-tv360" onclick="switchHomeTab(\'tv360\')" class="flex-1 py-2.5 px-3 rounded-full text-center text-white/80 hover:text-white transition">\n                            <i data-lucide="tv" class="w-4 h-4 inline mr-1"></i>TV360\n                        </button>');

// 2. Add Tra cứu đơn hàng to Mobile and Internet
const utilityBtn = `
                            <!-- Tra cứu đơn hàng (New feature) -->
                            <button onclick="openTraCuuDonHang()" class="group flex flex-col items-center flex-shrink-0 snap-start w-[72px]">
                                <div class="w-11 h-11 rounded-lg bg-[#FFF0F2] text-viettel flex items-center justify-center mb-2 shadow-sm border border-red-100 relative">
                                    <i data-lucide="file-search" class="w-6 h-6 text-viettel"></i>
                                </div>
                                <span class="text-[11px] font-bold text-slate-800 leading-tight text-center">Tra cứu<br>đơn hàng</span>
                            </button>
`;

html = html.replace('<!-- 1. Tra cứu hợp đồng (moved to top) -->', utilityBtn + '\n                            <!-- 1. Tra cứu hợp đồng (moved to top) -->');
html = html.replace('<!-- 1. Tra cứu hợp đồng (New feature) -->', utilityBtn + '\n                            <!-- 1. Tra cứu hợp đồng (New feature) -->');

// 3. Clone internet content for Camera and TV360
const internetContentStart = html.indexOf('<div id="home-internet-content"');
const internetContentEnd = html.indexOf('<!-- ACCOUNT MANAGEMENT SCREEN (Slide in from right) -->');
if (internetContentStart > -1 && internetContentEnd > -1) {
    let internetContent = html.substring(internetContentStart, internetContentEnd);
    
    let cameraContent = internetContent.replace('id="home-internet-content"', 'id="home-camera-content" class="px-4 -mt-10 relative z-10 hidden"');
    cameraContent = cameraContent.replace(/>Internet</g, '>Camera<');
    cameraContent = cameraContent.replace(/>Tiện ích Internet</g, '>Tiện ích Camera<');
    cameraContent = cameraContent.replace(/>Internet_0989 858 785</g, '>Camera_0989 858 785<');
    
    let tvContent = internetContent.replace('id="home-internet-content"', 'id="home-tv360-content" class="px-4 -mt-10 relative z-10 hidden"');
    tvContent = tvContent.replace(/>Internet</g, '>TV360<');
    tvContent = tvContent.replace(/>Tiện ích Internet</g, '>Tiện ích TV360<');
    tvContent = tvContent.replace(/>Internet_0989 858 785</g, '>TV360_0989 858 785<');
    
    html = html.replace('<!-- ACCOUNT MANAGEMENT SCREEN (Slide in from right) -->', cameraContent + '\n\n' + tvContent + '\n\n<!-- ACCOUNT MANAGEMENT SCREEN (Slide in from right) -->');
}

// 4. Update switchHomeTab logic
const switchLogic = `function switchHomeTab(tab) {
            const tabs = ['mobile', 'internet', 'camera', 'tv360'];
            tabs.forEach(t => {
                const btn = document.getElementById('tab-btn-' + t);
                const content = document.getElementById('home-' + t + '-content');
                if (btn) {
                    if (t === tab) {
                        btn.className = 'flex-1 py-2.5 px-3 rounded-full text-center bg-white text-viettel font-bold shadow-md transition';
                    } else {
                        btn.className = 'flex-1 py-2.5 px-3 rounded-full text-center text-white/80 hover:text-white transition';
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
            return;`;

html = html.replace(/function switchHomeTab\(tab\) \{[\s\S]*?\}\n/, switchLogic + '\n}\n');

// 5. Add UI logic for "Tra cứu đơn hàng"
const orderTrackingFlow = `
    <!-- TRA CỨU ĐƠN HÀNG FLOW -->
    <div id="tracuu-donhang-flow" class="absolute inset-0 z-50 bg-ios-bg flex-col hidden overflow-hidden rounded-[54px] pt-10">
        <div class="flex-1 flex flex-col w-full h-full bg-ios-bg">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="closeTraCuuDonHang()" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="chevron-left" class="w-6 h-6 text-slate-800"></i>
                </button>
                <h2 class="text-base font-bold text-slate-900">Tra cứu đơn hàng</h2>
                <div class="w-6"></div>
            </div>
            <div class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-5 flex flex-col items-center justify-center">
                <i data-lucide="file-search" class="w-16 h-16 text-slate-300 mb-2"></i>
                <p class="text-slate-500 font-medium text-center">Tính năng đang được phát triển</p>
            </div>
        </div>
    </div>
    
    <script>
        function openTraCuuDonHang() {
            document.getElementById('tracuu-donhang-flow').classList.remove('hidden');
            document.getElementById('tracuu-donhang-flow').classList.add('flex');
            lucide.createIcons();
        }
        function closeTraCuuDonHang() {
            document.getElementById('tracuu-donhang-flow').classList.add('hidden');
            document.getElementById('tracuu-donhang-flow').classList.remove('flex');
        }
    </script>
`;
html = html.replace('<!-- CHẶN 1 CHIỀU FLOW -->', orderTrackingFlow + '\n    <!-- CHẶN 1 CHIỀU FLOW -->');

fs.writeFileSync('index.html', html);
console.log('done');
