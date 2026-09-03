const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the data
html = html.replace(/0989858785\/2022\/HĐ-VT/g, '656190090/APP_VIETTEL/30082026');

// Replace "Mã VB:" with "Số hợp đồng:" in render logic
html = html.replace(/Mã VB:/g, 'Số hợp đồng:');

// Replace "Số:" with "Số hợp đồng:" in modal subheading if necessary, but the user only asked for Mã VB:
// Wait, the user specifically mentioned "Mã VB: 0989858785/2022/HĐ-VT". I'll just change the data and the "Mã VB:" labels.

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched Mã VB and contract code");
