const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const targetStr = `### 4. Mã OTP hết hiệu lực (Timeout)
- **Quy tắc:** Mỗi mã OTP được gửi ra chỉ có hiệu lực trong vòng 5 phút (300 giây). Thời gian đếm ngược (countdown) được hiển thị trên giao diện.
- **Trải nghiệm (UX):** Khi đồng hồ đếm ngược về 00:00, nếu khách hàng vẫn nhập mã cũ và bấm xác nhận, hệ thống báo lỗi: *"Mã OTP đã hết hạn, vui lòng yêu cầu gửi lại mã mới."*`;

const appendStr = `

### 5. Hợp đồng đã chấm dứt (Thanh lý/Hủy)
- **Quy tắc (Đối với Khách hàng đã đăng nhập):** Khi tự động truy vấn danh sách hợp đồng, hệ thống lọc bỏ các hợp đồng có trạng thái "Đã chấm dứt/Thanh lý" (Terminated/Cancelled). Nếu khách hàng chỉ có hợp đồng đã hủy, hiển thị thông báo trạng thái trống (Empty State): *"Hiện tại quý khách không có hợp đồng/dịch vụ nào đang hoạt động."*
- **Trải nghiệm (UX) (Đối với Tra cứu thủ công / Tra cứu hộ):** Nếu khách hàng nhập thông tin của hợp đồng đã chấm dứt, hệ thống ghi nhận trạng thái từ BCCS và chặn không gửi mã OTP. Ngay khi bấm Lấy thông tin tra cứu, hiển thị thông báo lỗi: *"Hợp đồng/Thuê bao này đã chấm dứt hoạt động nên không thể tra cứu thông tin chứng từ. Vui lòng kiểm tra lại hoặc gọi 198 để được hỗ trợ."*`;

doc = doc.replace(targetStr, targetStr + appendStr);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Doc updated with exception 5');
