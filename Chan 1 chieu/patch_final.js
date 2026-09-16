const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const newIcons = `
                    <!-- TIỆN ÍCH DI ĐỘNG -->
                    <div class="mt-6">
                        <h3 id="title-tien-ich" class="text-[16px] font-bold text-slate-900 px-4 mb-3">Tiện ích Di động</h3>
                        
                        <!-- Scrollable Icons List -->
                        <div class="flex overflow-x-auto no-scrollbar px-4 pb-2 gap-4 snap-x">
                            
                            <!-- 1. Tra cứu hợp đồng -->
                            <button onclick="navigateToContractScreen()" class="group flex flex-col items-center min-w-[70px] snap-start relative">
                                <div class="w-12 h-12 rounded-[14px] bg-gradient-to-tr from-viettel to-rose-500 text-white flex items-center justify-center shadow-lg shadow-red-200 mb-2 group-hover:scale-105 transition">
                                    <i data-lucide="file-text" class="w-6 h-6"></i>
                                </div>
                                <span class="text-[11px] font-bold text-slate-800 text-center leading-tight group-hover:text-viettel transition">Tra cứu<br>hợp đồng</span>
                            </button>

                            <!-- 2. Tài khoản thanh toán -->
                            <button class="flex flex-col items-center min-w-[72px] snap-start group">
                                <div class="w-12 h-12 flex items-center justify-center relative mb-2">
                                    <div class="absolute inset-0 rounded-full border border-slate-300"></div>
                                    <i data-lucide="circle-user-round" class="w-6 h-6 text-slate-800 font-light"></i>
                                    <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-[1.5px] border-white flex items-center justify-center"><i data-lucide="asterisk" class="w-2 h-2 text-white"></i></span>
                                </div>
                                <span class="text-[11px] font-medium text-slate-700 text-center leading-tight">Tài khoản<br>thanh toán</span>
                            </button>

                            <!-- 3. Xác thực thông tin TB -->
                            <button class="flex flex-col items-center min-w-[72px] snap-start group">
                                <div class="w-12 h-12 flex items-center justify-center relative mb-2">
                                    <i data-lucide="clipboard-check" class="w-6 h-6 text-slate-800 font-light"></i>
                                    <div class="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
                                        <div class="bg-red-500 text-white rounded-full p-0.5">
                                            <i data-lucide="check" class="w-2.5 h-2.5 stroke-[3]"></i>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-[11px] font-medium text-slate-700 text-center leading-tight">Xác thực<br>thông tin TB</span>
                            </button>

                            <!-- 4. Chặn 1 chiều -->
                            <button id="btn-chan-1-chieu" onclick="openChan1Chieu()" class="flex flex-col items-center min-w-[72px] snap-start group cursor-pointer" style="display: none;">
                                <div class="w-12 h-12 flex items-center justify-center relative mb-2">
                                    <i data-lucide="smartphone" class="w-7 h-7 text-slate-800 font-light stroke-[1.5]"></i>
                                    <div class="absolute inset-0 flex items-center justify-center mt-0.5">
                                        <i data-lucide="arrow-right-left" class="w-3 h-3 text-slate-800 stroke-[2.5]"></i>
                                    </div>
                                    <div class="absolute -bottom-0.5 -left-1 bg-white rounded-md p-0.5 shadow-sm">
                                        <div class="text-red-600 bg-white rounded flex items-center justify-center">
                                            <i data-lucide="lock" class="w-3.5 h-3.5 stroke-[2.5]"></i>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-[11px] font-bold text-slate-800 text-center leading-tight">Chặn 1<br>chiều</span>
                            </button>

                            <!-- 5. Đổi eSIM -->
                            <button class="flex flex-col items-center min-w-[72px] snap-start group">
                                <div class="w-12 h-12 flex items-center justify-center relative mb-2">
                                    <i data-lucide="refresh-cw" class="w-5 h-5 text-red-500 font-bold stroke-[2.5]"></i>
                                </div>
                                <span class="text-[11px] font-medium text-slate-700 text-center leading-tight">Đổi eSIM</span>
                            </button>

                            <!-- 6. Thanh toán viễn thông -->
                            <button class="flex flex-col items-center min-w-[72px] snap-start group">
                                <div class="w-12 h-12 flex items-center justify-center relative mb-2 border border-slate-300 rounded-lg">
                                    <i data-lucide="receipt" class="w-5 h-5 text-slate-800 font-light"></i>
                                </div>
                                <span class="text-[11px] font-medium text-slate-700 text-center leading-tight">Thanh toán<br>viễn thông</span>
                            </button>
                        </div>
                    </div>`;

// Delete old block and insert new
let start = content.indexOf('<div class="mt-6">');
let end = content.indexOf('<div class="mt-4 mx-4 mb-4 bg-gradient-to-r from-pink-50');

if(start > -1 && end > -1) {
    let before = content.substring(0, start);
    // Find the end of the previous div before the banner
    let oldBlock = content.substring(start, end);
    // actually, there's `<!-- Đăng ký Internet Banner -->` right before it
    let endActual = content.lastIndexOf('<!-- Đăng ký', end);
    if(endActual > -1) end = endActual;
    before = content.substring(0, start);
    let after = content.substring(end);
    content = before + newIcons + '\\n\\n                    ' + after;
}

const jsCode = `
        function switchTab(type, el) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-viettel', 'font-bold', 'shadow-md', 'active-tab');
                btn.classList.add('text-white/80', 'hover:text-white');
            });
            if(el) {
                el.classList.add('bg-white', 'text-viettel', 'font-bold', 'shadow-md', 'active-tab');
                el.classList.remove('text-white/80', 'hover:text-white');
            }
            if(type === 'mobile') {
                document.getElementById('btn-chan-1-chieu').style.display = 'flex';
                document.getElementById('title-tien-ich').innerText = 'Tiện ích Di động';
            } else {
                document.getElementById('btn-chan-1-chieu').style.display = 'none';
                document.getElementById('title-tien-ich').innerText = 'Tiện ích khác';
            }
        }
`;

// Insert the JS code right before the `// Initialize Lucide Icons` part
if(!content.includes('function switchTab')) {
    content = content.replace('// Initialize Lucide Icons', jsCode + '\\n\\n        // Initialize Lucide Icons');
}

// Modify tabs to have onclick
content = content.replace('<button class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition">\\n                            <i data-lucide="smartphone"', '<button onclick="switchTab(\\'mobile\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\\n                            <i data-lucide="smartphone"');

content = content.replace('<button class="flex-1 py-1.5 px-2 rounded-full text-center bg-white text-viettel font-bold shadow-md transition">\\n                            <i data-lucide="home"', '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center bg-white text-viettel font-bold shadow-md transition tab-btn active-tab">\\n                            <i data-lucide="home"');

content = content.replace('<button class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition">\\n                            <i data-lucide="video"', '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\\n                            <i data-lucide="video"');

content = content.replace('<button class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition">\\n                            <i data-lucide="tv"', '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\\n                            <i data-lucide="tv"');


fs.writeFileSync('index.html', content, 'utf8');
console.log("Success");
