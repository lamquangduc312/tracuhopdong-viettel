const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const oldStr = `### 3.2. Thẻ Thông Tin Tổng Quan (Summary Card)
Nằm ở vị trí trên cùng của màn hình kết quả, giúp khách hàng nắm bắt nhanh các thông tin quan trọng nhất về tình trạng dịch vụ. Dưới đây là đặc tả chi tiết các trường thông tin hiển thị trên Thẻ tổng quan đối với từng loại dịch vụ:

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
- **Thanh toán & Thông báo cước:** Tương tự Internet & Di động trả sau.`;

const newStr = `### 3.1. Thẻ Thông Tin Tổng Quan
Nằm ở vị trí trên cùng của màn hình kết quả, giúp khách hàng nắm bắt nhanh các thông tin quan trọng nhất về trạng thái dịch vụ. Dưới đây là đặc tả chi tiết các trường thông tin hiển thị trên Thẻ tổng quan đối với từng loại dịch vụ:

#### 3.1.1. Thuê bao Di động trả sau
- **Số hợp đồng:** (VD: 656190090)
- **Số đại diện:** hiển thị số
- **Địa chỉ thông báo cước:** hiển thị địa chỉ lắp đặt của thuê bao.
- **Hình thức thanh toán:** Hiển thị phương thức (VD: Thanh toán qua TK ngân hàng/Ví điện tử, Tại các điểm thu Viettel). Kèm link điều hướng "Đổi hình thức thanh toán".
- **Hình thức thông báo cước:** Hiển thị phương thức (Nhận thông báo cước qua SMS/Zalo; Nhận thông báo cước qua email; Nhận trực tiếp tại điểm giao dịch). Nếu qua email sẽ hiển thị kèm địa chỉ email của khách hàng đã điền. Kèm link điều hướng hiển thị tên là “Đổi hình thức thông báo” nhưng điều hướng đúng đến tính năng: " Đổi hình thức thanh toán" trên app vì tính năng này đang thực hiện cả 2 nghiệp vụ.

#### 3.1.2. Thuê bao Internet
- **Gói cước:** Tên gói cước đang dùng (VD: NETVT01_H - 500Mbps).
- **Số liên hệ:** hiển thị số kèm link điều hướng: "Đổi số liên hệ".
- **Địa chỉ lắp đặt:** hiển thị địa chỉ lắp đặt của thuê bao.
- **Thanh toán:** Tương tự di động trả sau, kèm link "Đổi hình thức thanh toán".
- **Thông báo cước:** Tương tự di động trả sau, kèm link *"Đổi thông báo cước".

#### 3.1.3. Thuê bao Camera
- **Thiết bị:** Số lượng và loại thiết bị.
- **Gói lưu trữ:** (VD: Cloud 7 ngày).
- **Số liên hệ:** hiển thị số.
- **Địa chỉ:** Địa chỉ lắp đặt.

#### 3.1.4. Thuê bao Truyền hình TV360
- **Gói cước:** (VD: TV360 Standard).
- **Thiết bị:** Thiết bị đang dùng (VD: 01 Smart Box 4K).
- **Tài khoản:** Số điện thoại đăng nhập.
- **Thanh toán & Thông báo cước:** Tương tự Internet & Di động trả sau.`;

doc = doc.replace(oldStr, newStr);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Document updated successfully.');
