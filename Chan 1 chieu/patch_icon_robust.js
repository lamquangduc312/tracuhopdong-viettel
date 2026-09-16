const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const newBtn = `
                            <!-- Chặn 1 chiều -->
                            <button onclick="openChan1Chieu()" class="group flex flex-col items-center flex-shrink-0 snap-start w-[72px]">
                                <div class="w-10 h-10 flex items-center justify-center mb-1 relative">
                                    <i data-lucide="smartphone" class="w-6 h-6 text-slate-800 stroke-[1.5]"></i>
                                    <div class="absolute bottom-0 -left-1 bg-white rounded p-[1px] shadow-sm">
                                        <i data-lucide="lock" class="w-3 h-3 text-red-600 stroke-[2.5]"></i>
                                    </div>
                                </div>
                                <span class="text-[11px] font-bold text-slate-800 leading-tight text-center">Chặn 1<br>chiều</span>
                            </button>
`;

if (!content.includes('Chặn 1<br>chiều')) {
    content = content.replace(/(<!-- 2\. Xác thực thông tin TB -->)/, newBtn + "\\n                            $1");
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Icon injected!');
