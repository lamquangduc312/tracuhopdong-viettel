const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace for FTTH
html = html.replace(
    '<p class="text-xs font-medium text-slate-500">Gói cước: <span class="font-bold text-blue-600">',
    '<p class="text-xs font-medium text-slate-500 mt-1">Gói cước: <span class="font-bold text-blue-600">'
);

// Replace for Mobile Postpaid
html = html.replace(
    '<p class="text-xs font-medium text-slate-500">Số HĐ: <span class="font-mono font-bold text-slate-700">',
    '<p class="text-xs font-medium text-slate-500 mt-1">Số HĐ: <span class="font-mono font-bold text-slate-700">'
);

// Replace for Camera
html = html.replace(
    '<p class="text-xs font-medium text-slate-500">Thiết bị: <span class="font-bold text-emerald-600">',
    '<p class="text-xs font-medium text-slate-500 mt-1">Thiết bị: <span class="font-bold text-emerald-600">'
);

// Replace for TV360
html = html.replace(
    '<p class="text-xs font-medium text-slate-500">Gói cước: <span class="font-bold text-purple-600">',
    '<p class="text-xs font-medium text-slate-500 mt-1">Gói cước: <span class="font-bold text-purple-600">'
);


fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched margin top for subtitle");
