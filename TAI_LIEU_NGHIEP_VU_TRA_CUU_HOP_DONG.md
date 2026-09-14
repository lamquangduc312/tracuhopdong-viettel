# Tài Liệu Nghiệp Vụ - Tính Năng Tra Cứu Hợp Đồng

Tài liệu này mô tả các luồng nghiệp vụ chính của tính năng Tra cứu Hợp đồng và Hồ sơ trên ứng dụng Viettel Tammi. Luồng tra cứu được thiết kế rẽ nhánh dựa trên trạng thái đăng nhập của khách hàng nhằm tối ưu trải nghiệm và bảo mật.

## Phần 1: Khách hàng CHƯA ĐĂNG NHẬP App Viettel Tammi (Khách vãng lai)

Khi khách hàng chưa đăng nhập, hệ thống không có ngữ cảnh về danh tính người dùng. Do đó, **bắt buộc phải qua bước xác thực OTP** để chứng minh quyền sở hữu đối với thông tin cần tra cứu.

### 1. Tra cứu bằng "Số thuê bao" hoặc "Số liên hệ"
- **Luồng xử lý:** Khách hàng nhập đích danh số điện thoại (Số thuê bao hoặc Số liên hệ). Hệ thống tự động gửi thẳng mã OTP về chính số điện thoại vừa nhập.
- **Trải nghiệm (UX):** Chuyển trực tiếp sang màn hình nhập OTP với thông báo: *"Mã xác thực đã được gửi về số điện thoại [Số vừa nhập]"*. 
- **Kết quả:** Sau khi nhập đúng OTP, hệ thống trả về hồ sơ của thuê bao đó (nếu tra Số thuê bao) hoặc trả về **tất cả** các hợp đồng gắn với số điện thoại đó (nếu tra Số liên hệ).

### 2. Tra cứu bằng "Mã hợp đồng"
- **Luồng xử lý:** Hệ thống trích xuất "Số điện thoại đại diện/liên hệ chính" được lưu trên hợp đồng đó và tự động gửi mã OTP về số điện thoại này.
- **Trải nghiệm (UX):** Chuyển sang màn hình nhập OTP, hiển thị số điện thoại nhận mã đã được che mờ (VD: `098***8785`). Không yêu cầu khách hàng thao tác chọn số để rút ngắn thời gian.

### 3. Tra cứu bằng "CCCD" (Căn cước công dân)
- **Đặc thù:** Một CCCD thường đứng tên nhiều hợp đồng và có thể đăng ký nhiều số điện thoại liên hệ khác nhau.
- **Luồng xử lý:**
  1. Khách hàng nhập CCCD và bấm Lấy thông tin.
  2. Hệ thống truy xuất và hiển thị **Màn hình chọn số nhận OTP** (danh sách các số liên hệ được che mờ, VD: `098***8785`, `034***1122`).
  3. Khách hàng chủ động chọn một số điện thoại đang cầm để nhận mã.
  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.


## Phần 3: Cấu trúc hiển thị Kết Quả Tra Cứu (Áp dụng chung cho cả luồng Đã đăng nhập và Chưa đăng nhập)

Dù khách hàng truy cập qua luồng Chưa đăng nhập (phải qua xác thực OTP) hay Đã đăng nhập (xem tự động), màn hình kết quả tra cứu đều sẽ tuân thủ cấu trúc hiển thị đồng nhất gồm 2 phần chính:

### 3.1. Phân loại Hồ sơ / Chứng từ (Tab Hợp đồng & Hồ sơ khác)
Bên dưới thông tin tổng quan, toàn bộ các hồ sơ, chứng từ liên quan đến dịch vụ sẽ được hệ thống tổ chức và phân loại rõ ràng thành 2 tab riêng biệt để khách hàng dễ dàng tìm kiếm:

- **Tab "Hợp đồng":** Chứa các hồ sơ pháp lý cốt lõi liên quan trực tiếp đến việc thiết lập và nghiệm thu dịch vụ. Bao gồm:
  - Hợp đồng cung cấp dịch vụ (Hợp đồng điện tử).
  - Các Phụ lục hợp đồng kèm theo.
  - Biên bản nghiệm thu.
  
- **Tab "Hồ sơ khác":** Chứa các tài liệu phát sinh trong quá trình sử dụng dịch vụ hoặc các yêu cầu của khách hàng. Bao gồm:
  - Phiếu yêu cầu (PYC) cung cấp/thay đổi dịch vụ.
  - Bằng chứng giao kết.
  - Dữ liệu cá nhân và các biên bản khác.

### 3.2. Thẻ Thông Tin Tổng Quan (Summary Card)
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
- **Thanh toán & Thông báo cước:** Tương tự Internet & Di động trả sau.

---

## Phần 2: Khách hàng ĐÃ ĐĂNG NHẬP App Viettel Tammi (Tài khoản chính chủ)

Khi khách hàng đã đăng nhập, hệ thống đã xác thực được danh tính thông qua thông tin phiên đăng nhập (SĐT đăng nhập và CCCD liên kết).

### 1. Luồng xem tự động (Auto-fetching) - Không cần OTP
- **Luồng xử lý:** Ngay khi khách hàng truy cập vào tính năng "Tra cứu hợp đồng & hồ sơ", hệ thống **tự động truy vấn** toàn bộ các hợp đồng, chứng từ thuộc sở hữu của số điện thoại đang đăng nhập và CCCD gắn với tài khoản đó.
- **Trải nghiệm (UX):** Khách hàng vào là thấy ngay danh sách hợp đồng của mình, được phân loại rõ ràng theo từng tab (Di động, Internet, Truyền hình...). **Hoàn toàn không bị làm phiền bởi các bước nhập mã hay OTP.**
- **Chuyển đổi tài khoản:** Tại màn hình kết quả tra cứu, hệ thống cung cấp nút thả xuống "Chọn tài khoản". Khách hàng có thể dễ dàng chuyển sang tra cứu các tài khoản/hợp đồng đã liên kết khác (ví dụ: đang xem hợp đồng Di động trả sau, có thể bấm chọn để chuyển sang màn hình kết quả của Internet, Truyền hình TV360, Camera) mà không cần phải thoát ra tra cứu lại.

### 2. Luồng tra cứu hộ / Tra cứu bằng tài khoản khác (Cần xác thực chéo)
- **Đặc thù:** Khách hàng muốn tra cứu hợp đồng của người thân (bố mẹ, vợ/chồng) hoặc một hợp đồng công ty không đứng tên cá nhân. Khách hàng sẽ chọn chức năng "Tra cứu tài khoản khác".
- **Luồng xử lý:** Khách hàng nhập các tiêu chí (CCCD, Số thuê bao, v.v.) của người thân.
  - **Kiểm tra thông minh (Smart Routing):** Hệ thống sẽ kiểm tra xem thông tin vừa nhập có vô tình trùng khớp với dữ liệu của người đang đăng nhập hay không. Nếu CÓ, bỏ qua OTP và hiện kết quả ngay.
  - **Xác thực OTP (Xuyên chéo):** Nếu KHÔNG trùng khớp, hệ thống áp dụng lại các quy tắc định tuyến OTP y hệt như Phần 1 (Gửi OTP về SĐT người thân hoặc cho phép chọn số). Người đang thao tác trên App phải liên hệ người thân để lấy mã OTP nhập vào.

---
*Cập nhật lần cuối: Tháng 9/2026*
