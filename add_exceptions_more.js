const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const additionalExceptions = `
### 2. Không tìm thấy dữ liệu hợp đồng
- **Quy tắc:** Khi khách hàng nhập các thông tin tra cứu (Mã hợp đồng, Số thuê bao, Số liên hệ, CCCD) nhưng hệ thống không ghi nhận bất kỳ dữ liệu nào tương ứng trên BCCS, hệ thống sẽ không thực hiện gửi OTP.
- **Trải nghiệm (UX):** Hiển thị cảnh báo lỗi (inline hoặc popup) ngay tại màn hình nhập: *"Không tìm thấy thông tin hợp đồng/hồ sơ với dữ liệu quý khách vừa nhập. Vui lòng kiểm tra lại."*

### 3. Nhập sai mã OTP quá số lần quy định
- **Quy tắc:** Để đảm bảo bảo mật và chống spam, nếu khách hàng nhập sai mã OTP quá 5 lần liên tiếp, hệ thống sẽ tạm khóa tính năng tra cứu (và gửi OTP) đối với phiên/số điện thoại đó trong vòng 15 phút.
- **Trải nghiệm (UX):** Khi nhập sai ở lần thứ 5, hiển thị thông báo: *"Bạn đã nhập sai mã OTP quá 5 lần. Vui lòng thử lại sau 15 phút."* Đồng thời vô hiệu hóa (disable) nút Xác nhận và nút Gửi lại mã.

### 4. Mã OTP hết hiệu lực (Timeout)
- **Quy tắc:** Mỗi mã OTP được gửi ra chỉ có hiệu lực trong vòng 120 giây. Thời gian đếm ngược (countdown) được hiển thị trên giao diện.
- **Trải nghiệm (UX):** Khi đồng hồ đếm ngược về 00:00, nếu khách hàng vẫn nhập mã cũ và bấm xác nhận, hệ thống báo lỗi: *"Mã OTP đã hết hạn, vui lòng yêu cầu gửi lại mã mới."*
`;

// Insert additionalExceptions right after the prepaid mobile section.
const anchor = `  - Nếu khách hàng tra cứu số trả trước ở luồng Chưa đăng nhập hoặc Tra cứu hộ, hệ thống sẽ chặn ngay từ bước nhập thông tin và báo lỗi: *"Số thuê bao này là thuê bao trả trước, không có hợp đồng/hồ sơ để tra cứu. Vui lòng kiểm tra lại."*`;

content = content.replace(anchor, anchor + '\n' + additionalExceptions);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content, 'utf8');
console.log('Done appending exceptions');
