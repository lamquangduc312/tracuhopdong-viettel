const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const oldText = `### 3. Tra cứu bằng "CCCD" (Căn cước công dân)
- **Đặc thù:** Một CCCD thường đứng tên nhiều hợp đồng và có thể đăng ký nhiều số điện thoại liên hệ khác nhau.
- **Luồng xử lý:**
  1. Khách hàng nhập CCCD và bấm Lấy thông tin.
  2. Hệ thống truy xuất và hiển thị **Màn hình chọn số nhận OTP** (danh sách các số liên hệ được che mờ, VD: \`098***8785\`, \`034***1122\`).
  3. Khách hàng chủ động chọn một số điện thoại đang cầm để nhận mã.
  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.`;

const newText = `### 3. Tra cứu bằng "CCCD" (Căn cước công dân)
- **Đặc thù:** Một CCCD thường đứng tên nhiều hợp đồng và có thể đăng ký nhiều số điện thoại liên hệ khác nhau.
- **Luồng xử lý:**
  1. Khách hàng nhập CCCD và bấm *Lấy thông tin tra cứu*.
  2. Hệ thống truy xuất từ BCCS và hiển thị **Màn hình chọn số nhận OTP**.
  3. Khách hàng chủ động chọn một số điện thoại để nhận mã.
  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.
- **Trải nghiệm (UX) - Lựa chọn số điện thoại:** 
  - Giao diện hiển thị một danh sách (dạng Radio button list) gồm các số điện thoại được gắn với CCCD đó.
  - Các số điện thoại được che mờ một phần ở giữa để đảm bảo bảo mật (VD: \`098***8785\`, \`034***1122\`). 
  - Khách hàng chạm (tap) để tick chọn vào số điện thoại mình đang sở hữu, sau đó bấm nút *Gửi mã OTP*. Thiết kế này giúp trải nghiệm mượt mà, minh bạch, chuyên nghiệp và đặc biệt an toàn về mặt thông tin người dùng.`;

doc = doc.replace(oldText, newText);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Doc updated');
