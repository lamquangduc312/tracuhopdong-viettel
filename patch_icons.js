const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replacement for 'ftth'
html = html.replace(
    `<div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">0989.858.785</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Đổi số liên hệ</a>
                            </div>`,
    `<div class="flex items-center justify-end gap-1.5 w-2/3">
                                <span class="text-[11px] font-bold text-slate-700">0989.858.785</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="text-blue-600 hover:text-blue-800 transition p-1" title="Đổi số liên hệ">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

html = html.replace(
    `<div class="text-right w-2/3">
                                <span class="text-[11px] font-bold text-slate-700 block">Thanh toán qua TK ngân hàng/Ví điện tử</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-[10px] text-blue-600 font-medium underline mt-0.5 inline-block">Đổi hình thức thanh toán</a>
                            </div>`,
    `<div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Thanh toán qua TK ngân hàng/Ví điện tử</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// This matches `ftth` and `tv360` "Thông báo cước"
html = html.replace(
    /<div class="text-right w-2\/3">\s*<span class="text-\[11px\] font-bold text-slate-700 block">Nhận thông báo cước qua SMS\/Zalo<\/span>\s*<a href="#" onclick="alert\('Đang phát triển tính năng Đổi thông báo cước'\)" class="text-\[10px\] text-blue-600 font-medium underline mt-0\.5 inline-block">Đổi thông báo cước<\/a>\s*<\/div>/g,
    `<div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Nhận thông báo cước qua SMS/email</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-blue-600 hover:text-blue-800 transition p-1 flex-shrink-0" title="Đổi thông báo cước">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// For mobile_postpaid
html = html.replace(
    `<div class="text-right">
                                <span class="text-xs font-bold text-viettel">500.000 VNĐ</span>
                                <a href="#" onclick="alert('Đang phát triển tính năng Thay đổi hạn mức')" class="block text-[10px] text-blue-600 font-medium underline mt-0.5">Thay đổi hạn mức sử dụng</a>
                            </div>`,
    `<div class="flex items-center justify-end gap-1.5 text-right">
                                <span class="text-xs font-bold text-viettel">500.000 VNĐ</span>
                                <button onclick="alert('Đang phát triển tính năng Thay đổi hạn mức')" class="text-blue-600 hover:text-blue-800 transition p-1" title="Thay đổi hạn mức sử dụng">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// Replace any remaining "Đổi hình thức thanh toán" text link pattern
html = html.replace(
    /<div class="text-right w-2\/3">\s*<span class="text-\[11px\] font-bold text-slate-700 block">Thanh toán qua TK ngân hàng\/Ví điện tử<\/span>\s*<a href="#" onclick="alert\('Đang phát triển tính năng Đổi hình thức thanh toán'\)" class="text-\[10px\] text-blue-600 font-medium underline mt-0\.5 inline-block">Đổi hình thức thanh toán<\/a>\s*<\/div>/g,
    `<div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Thanh toán qua TK ngân hàng/Ví điện tử</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// Replace remaining "Đổi số liên hệ" block pattern
html = html.replace(
    /<div class="text-right w-2\/3">\s*<span class="text-\[11px\] font-bold text-slate-700 block">0989\.858\.785<\/span>\s*<a href="#" onclick="alert\('Đang phát triển tính năng Đổi số liên hệ'\)" class="block text-\[10px\] text-blue-600 font-medium underline mt-0\.5">Đổi số liên hệ<\/a>\s*<\/div>/g,
    `<div class="flex items-center justify-end gap-1.5 w-2/3">
                                <span class="text-[11px] font-bold text-slate-700">0989.858.785</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi số liên hệ')" class="text-blue-600 hover:text-blue-800 transition p-1" title="Đổi số liên hệ">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// Replace mobile_postpaid "Thông báo cước"
html = html.replace(
    /<div class="text-right w-2\/3">\s*<span class="text-\[11px\] font-bold text-slate-700 block">Nhận thông báo cước qua email<\/span>\s*<span class="text-\[10px\] text-slate-500 block">nguyenvana@gmail\.com<\/span>\s*<a href="#" onclick="alert\('Đang phát triển tính năng Đổi thông báo cước'\)" class="text-\[10px\] text-blue-600 font-medium underline mt-0\.5 inline-block">Đổi thông báo cước<\/a>\s*<\/div>/g,
    `<div class="flex items-start justify-end gap-1.5 w-2/3 text-right">
                                <div>
                                    <span class="text-[11px] font-bold text-slate-700 block">Nhận thông báo cước qua email</span>
                                    <span class="text-[10px] text-slate-500 block">nguyenvana@gmail.com</span>
                                </div>
                                <button onclick="alert('Đang phát triển tính năng Đổi thông báo cước')" class="text-blue-600 hover:text-blue-800 transition p-1 flex-shrink-0" title="Đổi thông báo cước">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);

// Replace tv360 "Thanh toán tại các điểm thu Viettel"
html = html.replace(
    /<div class="text-right w-2\/3">\s*<span class="text-\[11px\] font-bold text-slate-700 block">Tại các điểm thu Viettel<\/span>\s*<a href="#" onclick="alert\('Đang phát triển tính năng Đổi hình thức thanh toán'\)" class="text-\[10px\] text-blue-600 font-medium underline mt-0\.5 inline-block">Đổi hình thức thanh toán<\/a>\s*<\/div>/g,
    `<div class="flex items-center justify-end gap-1.5 w-2/3 text-right">
                                <span class="text-[11px] font-bold text-slate-700 block text-right">Tại các điểm thu Viettel</span>
                                <button onclick="alert('Đang phát triển tính năng Đổi hình thức thanh toán')" class="text-blue-600 hover:text-blue-800 transition p-1 flex-shrink-0" title="Đổi hình thức thanh toán">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>`
);


fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched text links to icon buttons");
