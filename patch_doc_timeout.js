const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

doc = doc.replace('Ma co hieu luc trong 2 phut', 'Ma co hieu luc trong 5 phut');
doc = doc.replace('- **Thời gian chờ (Timeout):** 120 giây.', '- **Thời gian hiệu lực OTP (Timeout):** 5 phút (300 giây).\n- **Thời gian chờ gửi lại mã (Resend cooldown):** 60 giây.');
doc = doc.replace('chỉ có hiệu lực trong vòng 120 giây', 'chỉ có hiệu lực trong vòng 5 phút (300 giây)');

fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Doc updated');
