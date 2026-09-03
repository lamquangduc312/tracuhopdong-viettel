const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="text-\[14px\] font-bold text-slate-900 mb-1">Số hợp đồng: 656190090\/APP_VIETTEL\/30082026<\/div>/g;
const replacementStr = `<div class="text-[14px] font-bold text-slate-900 mb-0.5">Mã hợp đồng: 656190090</div>
                                <div class="text-[13px] font-bold text-slate-700 mb-1">Số hợp đồng: 656190090/APP_VIETTEL/30082026</div>`;

html = html.replace(regex, replacementStr);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched to include both Mã hợp đồng and Số hợp đồng");
