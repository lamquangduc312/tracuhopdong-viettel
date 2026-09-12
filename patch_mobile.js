const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mobileTarget = `<div>
                            <h3 class="text-sm font-bold text-slate-800">Di động trả sau</h3>
                            <p class="text-xs font-medium text-slate-500 mt-1">Số HĐ: <span class="font-mono font-bold text-slate-700">656190090</span></p>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500">Hạn mức sử dụng:</span>`;

const mobileReplacement = `<div>
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
                        <div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500">Hạn mức sử dụng:</span>`;

html = html.replace(mobileTarget, mobileReplacement);
fs.writeFileSync('index.html', html, 'utf8');
console.log("Moved mobile postpaid contract code down");
