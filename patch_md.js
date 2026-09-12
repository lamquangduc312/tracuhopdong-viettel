const fs = require('fs');
let md = fs.readFileSync('TAI_LIEU_NGHIEP_VU_OTP.md', 'utf8');

md = md.replace(/Kèm link điều hướng: \*"([^"]+)"\./g, 'Kèm biểu tượng (icon) sửa, khi di chuột vào sẽ hiển thị tooltip: *"$1"*.');
md = md.replace(/kèm link điều hướng \*"([^"]+)"\./g, 'kèm biểu tượng sửa, khi di chuột vào sẽ hiển thị tooltip: *"$1"*.');
md = md.replace(/kèm link điều hướng: \*"([^"]+)"\./g, 'kèm biểu tượng sửa, khi di chuột vào sẽ hiển thị tooltip: *"$1"*.');
md = md.replace(/kèm link \*"([^"]+)"\./g, 'kèm biểu tượng sửa, hiển thị tooltip: *"$1"*.');

fs.writeFileSync('TAI_LIEU_NGHIEP_VU_OTP.md', md, 'utf8');
console.log("Updated documentation");
