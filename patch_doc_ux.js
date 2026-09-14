const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const oldText = `- **Trải nghiệm (UX):** Chuyển trực tiếp sang màn hình nhập OTP với thông báo: *"Mã xác thực đã được gửi về số điện thoại [Số vừa nhập]"*.`;
const newText = `- **Trải nghiệm (UX):** Hiển thị Popup nhập OTP trên app Viettel Tammi kèm nội dung: *"Vui lòng nhập OTP được gửi về số [Số vừa nhập] để tra cứu hợp đồng"*. Kèm thời gian nhắc nhở đếm ngược *"Mã OTP hết hạn sau xx:xx"*.`;

doc = doc.replace(oldText, newText);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Doc updated');
