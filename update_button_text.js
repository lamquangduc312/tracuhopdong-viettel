const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace('Xác nhận huỷ đơn từ Nhân viên', 'Xác nhận lịch hẹn đơn từ Nhân viên');

// Need to update the sticky footer button text for this specific flow?
// The image shows the sticky footer button as "Xác nhận lịch hẹn". This is already the default for both.
// Wait, the prompt says "khi click vào sẽ hiển thị giống giao diện file đính kèm", and the image attached shows the footer button is "Xác nhận lịch hẹn". So it doesn't need to change.

fs.writeFileSync('index.html', html);
console.log('done');
