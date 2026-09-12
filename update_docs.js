const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_OTP.md', 'utf8');

const newSection = `
## Phần 3: Cấu trúc hiển thị Thẻ Thông Tin Tổng Quan (Summary Card)

Sau khi xác thực thành công, hệ thống không chỉ liệt kê các chứng từ mà sẽ hiển thị một **Thẻ thông tin tổng quan** ở trên cùng, giúp khách hàng nắm bắt nhanh tình trạng dịch vụ. Bên dưới thẻ này, các chứng từ sẽ được chia làm 2 tab rõ ràng: **Hợp đồng** và **Hồ sơ khác**.

Dưới đây là đặc tả các trường thông tin hiển thị trên Thẻ tổng quan đối với từng loại dịch vụ:

### 1. Thuê bao Di động trả sau
- **Số hợp đồng:** (VD: 656190090)
- **Hạn mức sử dụng:** Hiển thị số tiền (VD: 500.000 VNĐ). Kèm link điều hướng: *"Thay đổi hạn mức sử dụng"*.
- **Hình thức thanh toán:** Hiển thị phương thức (VD: Thanh toán qua TK ngân hàng/Ví điện tử, Tại các điểm thu Viettel). Kèm link điều hướng: *"Đổi hình thức thanh toán"*.
- **Hình thức thông báo cước:** Hiển thị phương thức (Nhận thông báo cước qua SMS/Zalo; Nhận thông báo cước qua email; Nhận trực tiếp tại điểm giao dịch). Nếu qua email sẽ hiển thị kèm địa chỉ email. Kèm link điều hướng: *"Đổi thông báo cước"*.

### 2. Thuê bao Internet cáp quang
- **Gói cước:** Tên gói cước đang dùng (VD: NETVT01_H - 500Mbps). *(Lưu ý: Không hiển thị Mã Account)*.
- **Số liên hệ:** Kèm link điều hướng: *"Đổi số liên hệ"*.
- **Địa chỉ:** Địa chỉ lắp đặt.
- **Thanh toán:** Tương tự di động trả sau, kèm link *"Đổi hình thức thanh toán"*.
- **Thông báo cước:** Tương tự di động trả sau, kèm link *"Đổi thông báo cước"*.

### 3. Thuê bao Home Camera
- **Thiết bị:** Số lượng và loại thiết bị.
- **Gói lưu trữ:** (VD: Cloud 7 ngày).
- **Số liên hệ:** Kèm link điều hướng *"Đổi số liên hệ"*.
- **Địa chỉ:** Địa chỉ lắp đặt.

### 4. Thuê bao Truyền hình TV360
- **Gói cước:** (VD: TV360 Standard).
- **Thiết bị:** Thiết bị mượn kèm (VD: 01 Smart Box 4K).
- **Tài khoản:** Số điện thoại đăng nhập. Kèm link điều hướng *"Đổi số liên hệ"*.
- **Thanh toán & Thông báo cước:** Tương tự Internet & Di động trả sau.
`;

content = content.replace('---', newSection + '\n---');

fs.writeFileSync('TAI_LIEU_NGHIEP_VU_OTP.md', content, 'utf8');
console.log("Updated TAI_LIEU_NGHIEP_VU_OTP.md with UI layout specs");
