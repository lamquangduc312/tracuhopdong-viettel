const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace spacing
html = html.replace(/<div class="space-y-2\.5">/g, '<div class="space-y-2">');

// Add "Mã hợp đồng" for FTTH
const ftthTarget = `<div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>`;
const ftthReplacement = `<div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Số liên hệ:</span>`;
html = html.replace(ftthTarget, ftthReplacement);

// Add "Mã hợp đồng" for Camera (above Gói lưu trữ)
const cameraTarget = `<div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Gói lưu trữ:</span>`;
const cameraReplacement = `<div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Gói lưu trữ:</span>`;
html = html.replace(cameraTarget, cameraReplacement);

// Add "Mã hợp đồng" for TV360 (above Tài khoản)
const tvTarget = `<div class="flex justify-between items-start">
                            <span class="text-xs text-slate-500 w-1/3">Tài khoản:</span>`;
const tvReplacement = `<div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Mã hợp đồng:</span>
                            <div class="text-right w-2/3">
                                <span class="text-[12px] font-mono font-bold text-slate-700">88572102</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-500 w-1/3">Tài khoản:</span>`;
html = html.replace(tvTarget, tvReplacement);

// Also change items-start to items-center for the rows that just have 1 line, like "Số liên hệ"
// Actually, let's just make the text larger slightly and padding tighter.
html = html.replace(/<div class="bg-gradient-to-br from-white to-([^"]+) rounded-2xl p-4 shadow-sm/g, '<div class="bg-gradient-to-br from-white to-$1 rounded-2xl p-3.5 shadow-sm');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched UI layout and added contract codes");
