const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('value="mobile_postpaid" class="w-[18px] h-[18px] mt-0.5 text-viettel border-slate-300 focus:ring-viettel accent-viettel" checked>', 'value="mobile_postpaid" class="w-[18px] h-[18px] mt-0.5 text-viettel border-slate-300 focus:ring-viettel accent-viettel">');

html = html.replace('value="ftth" class="w-[18px] h-[18px] mt-0.5 text-viettel border-slate-300 focus:ring-viettel accent-viettel">', 'value="ftth" class="w-[18px] h-[18px] mt-0.5 text-viettel border-slate-300 focus:ring-viettel accent-viettel" checked>');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Fixed checked radio");
