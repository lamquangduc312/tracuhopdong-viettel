# Tài Liệu Nghiệp Vụ - Tính Năng Tra Cứu Hợp Đồng

Tài liệu này mô tả các luồng nghiệp vụ chính của tính năng Tra cứu Hợp đồng và Hồ sơ trên ứng dụng Viettel Tammi.

## 1. Các hình thức tra cứu hỗ trợ
Khách hàng có thể tra cứu thông tin hợp đồng và hồ sơ điện tử thông qua 3 hình thức:
- **Mã hợp đồng:** Dành cho hợp đồng DV di động trả sau hoặc DV Internet.
- **Số thuê bao:** Số di động trả sau hoặc mã tài khoản DV Internet.
- **CCCD:** Số căn cước công dân hòa mạng DV di động hoặc DV Internet.
- **Số liên hệ:** Số điện thoại được đăng ký làm số liên hệ cho các hợp đồng Viettel.

## 2. Quy tắc định tuyến Mã Xác Thực (OTP)

Nhằm đảm bảo tính bảo mật (xác thực chính chủ) và tối ưu hóa trải nghiệm người dùng, hệ thống áp dụng các quy tắc gửi OTP linh hoạt tùy theo phương thức tra cứu mà khách hàng lựa chọn:

### 2.1. Tra cứu bằng "Số thuê bao"
- **Luồng xử lý:** Hệ thống tự động gửi thẳng mã OTP về chính **Số thuê bao** mà khách hàng vừa nhập.
- **Giao diện:** Chuyển trực tiếp sang màn hình nhập OTP với thông báo: *"Mã xác thực đã được gửi về số điện thoại [Số thuê bao đang nhập]"*.

### 2.2. Tra cứu bằng "Số liên hệ"
- **Đặc thù:** Một số điện thoại liên hệ có thể được dùng chung cho nhiều hợp đồng khác nhau (Ví dụ: 1 hợp đồng di động trả sau, 1 hợp đồng Internet, 1 Camera).
- **Luồng xử lý:** Tương tự Số thuê bao, hệ thống gửi thẳng mã OTP về chính **Số liên hệ** mà khách hàng vừa nhập.
- **Sau khi xác thực thành công:** Hệ thống sẽ truy vấn và trả về danh sách **TẤT CẢ** các hợp đồng và hồ sơ có gắn với Số liên hệ này (bao gồm cả Di động, Internet...). Khách hàng có thể xem tập trung trên một giao diện danh sách mà không cần tra cứu nhiều lần.

### 2.3. Tra cứu bằng "Mã hợp đồng"
- **Luồng xử lý (Hướng A):** Hệ thống lấy thông tin **"Số điện thoại đại diện/liên hệ chính"** được lưu trên hợp đồng đó và tự động gửi mã OTP về số điện thoại đại diện này.
- **Giao diện:** Chuyển sang màn hình nhập OTP, hiển thị số điện thoại nhận mã đã được che mờ (VD: `098***8785`) để khách hàng nhận biết. Không yêu cầu khách hàng thao tác chọn số nhằm rút ngắn thời gian.

### 2.4. Tra cứu bằng "CCCD" (Căn cước công dân)
- **Đặc thù:** Một CCCD thường đứng tên nhiều hợp đồng và có thể có nhiều số điện thoại liên hệ khác nhau.
- **Luồng xử lý:** 
  1. Khách hàng nhập CCCD và bấm Lấy thông tin.
  2. Hệ thống hiển thị **Màn hình chọn số nhận OTP** (danh sách các số liên hệ được che mờ, VD: `098***8785`, `034***1122`).
  3. Khách hàng chủ động click chọn một số điện thoại mà họ đang cầm để nhận mã.
  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.
- **Ưu điểm:** Khách hàng chủ động hoàn toàn, tránh trường hợp gửi OTP vào một sim phụ mà khách hàng không mang theo bên người.

---
*Cập nhật lần cuối: Tháng 9/2026*
