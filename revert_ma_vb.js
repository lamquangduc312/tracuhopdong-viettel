const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The occurrences of "Số hợp đồng:" to revert:
// 1. <p id="modal-doc-code" ...>Số hợp đồng:
// 2. <span ...>Số hợp đồng:</span>
// 3. .innerText = "Số hợp đồng: "
// 4. \nSố hợp đồng: ${found.code} (in downloadMsg)
// 5. replace('Số hợp đồng: '
// 6. \nSố hợp đồng: ${code} (in downloadMsg2)

// Revert string exactly:
html = html.replace('<p id="modal-doc-code" class="text-[9px] text-slate-300 font-medium">Số hợp đồng:', '<p id="modal-doc-code" class="text-[9px] text-slate-300 font-medium">Mã VB:');
html = html.replace('<span class="font-semibold text-slate-700 mr-1">Số hợp đồng:</span>', '<span class="font-semibold text-slate-700 mr-1">Mã VB:</span>');
html = html.replace('innerText = "Số hợp đồng: " + found.code', 'innerText = "Mã VB: " + found.code');
html = html.replace('Số hợp đồng: ${found.code}', 'Mã VB: ${found.code}');
html = html.replace('replace(\'Số hợp đồng: \', \'\')', 'replace(\'Mã VB: \', \'\')');
html = html.replace('Số hợp đồng: ${code}', 'Mã VB: ${code}');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Reverted label to Mã VB in lookup list.");
