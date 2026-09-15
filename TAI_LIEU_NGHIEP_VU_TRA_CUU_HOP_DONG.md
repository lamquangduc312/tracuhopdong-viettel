# Tài Liệu Nghiệp Vụ - Tính Năng Tra Cứu Hợp Đồng

Tài liệu này mô tả các luồng nghiệp vụ chính của tính năng Tra cứu Hợp đồng và Hồ sơ trên ứng dụng Viettel Tammi. Luồng tra cứu được thiết kế rẽ nhánh dựa trên trạng thái đăng nhập của khách hàng nhằm tối ưu trải nghiệm và bảo mật.

## Phần 0: Giao diện Form Nhập Thông Tin Tra Cứu (Trang chủ)

Để hỗ trợ khách hàng thao tác dễ dàng và minh bạch, ngay trên giao diện màn hình Tra cứu Hợp đồng, hệ thống sẽ hiển thị một khối **Hướng dẫn** với nội dung cụ thể như sau:

> **Hướng dẫn**
> - Bạn nhập 1 trong các thông tin sau để tra cứu thông tin hợp đồng:
>   1. **Mã hợp đồng:** Mã hợp đồng DV di động trả sau hoặc DV Internet.
>   2. **Số thuê bao:** Số di động trả sau hoặc mã tài khoản DV Internet.
>   3. **Số liên hệ:** Số điện thoại liên hệ gắn trên các hợp đồng.
>   4. **CCCD:** Số căn cước công dân hòa mạng DV di động hoặc DV Internet.
> - **Nhập thông tin** tương ứng.
> - Xác thực **OTP**.

Quy tắc UX: Khối hướng dẫn này hiển thị cố định bên dưới ô nhập liệu để khách hàng luôn có thể tham chiếu mà không cần rời khỏi màn hình.

---

## Phần 1: Khách hàng CHƯA ĐĂNG NHẬP App Viettel Tammi (Khách vãng lai)

Khi khách hàng chưa đăng nhập, hệ thống không có ngữ cảnh về danh tính người dùng. Do đó, **bắt buộc phải qua bước xác thực OTP** để chứng minh quyền sở hữu đối với thông tin cần tra cứu.

### 1. Tra cứu bằng "Số thuê bao" hoặc "Số liên hệ"
- **Luồng xử lý:** Khách hàng nhập đích danh số điện thoại (Số thuê bao hoặc Số liên hệ). Hệ thống tự động gửi thẳng mã OTP về chính số điện thoại vừa nhập.
- **Trải nghiệm (UX):** Hiển thị Popup nhập OTP trên app Viettel Tammi kèm nội dung: *"Vui lòng nhập OTP được gửi về số [Số vừa nhập] để tra cứu hợp đồng"*. Kèm thời gian nhắc nhở đếm ngược *"Mã OTP hết hạn sau xx:xx"*. 
- **Kết quả:** Sau khi nhập đúng OTP, hệ thống trả về hồ sơ của thuê bao đó (nếu tra Số thuê bao) hoặc trả về **tất cả** các hợp đồng gắn với số điện thoại đó (nếu tra Số liên hệ).

### 2. Tra cứu bằng "Mã hợp đồng"
- **Luồng xử lý:** Hệ thống trích xuất "Số điện thoại đại diện/liên hệ chính" được lưu trên hợp đồng đó và tự động gửi mã OTP về số điện thoại này.
- **Trải nghiệm (UX):** Chuyển sang màn hình nhập OTP, hiển thị số điện thoại nhận mã đã được che mờ (VD: `098***8785`). Không yêu cầu khách hàng thao tác chọn số để rút ngắn thời gian.

### 3. Tra cứu bằng "CCCD" (Căn cước công dân)
- **Đặc thù:** Một CCCD thường đứng tên nhiều hợp đồng và có thể đăng ký nhiều số điện thoại liên hệ khác nhau.
- **Luồng xử lý:**
  1. Khách hàng nhập CCCD và bấm *Lấy thông tin tra cứu*.
  2. Hệ thống truy xuất từ BCCS và hiển thị **Màn hình chọn số nhận OTP**.
  3. Khách hàng chủ động chọn một số điện thoại để nhận mã.
  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.
- **Trải nghiệm (UX) - Lựa chọn số điện thoại:** 
  - Giao diện hiển thị một danh sách (dạng Radio button list) gồm các số điện thoại được gắn với CCCD đó.
  - Các số điện thoại được che mờ một phần ở giữa để đảm bảo bảo mật (VD: `098***8785`, `034***1122`). 
  - Khách hàng chạm (tap) để tick chọn vào số điện thoại mình đang sở hữu, sau đó bấm nút *Gửi mã OTP*. Thiết kế này giúp trải nghiệm mượt mà, minh bạch, chuyên nghiệp và đặc biệt an toàn về mặt thông tin người dùng.

### 4. Cấu hình nội dung tin nhắn OTP (Brandname VTSHOP)
- Khi khách hàng thực hiện các thao tác yêu cầu xác thực ở luồng chưa đăng nhập, hệ thống sẽ gửi SMS từ đầu số (brandname) **VTSHOP**.
- **Cấu trúc nội dung SMS:** 
  > `[VTSHOP] <Mã_OTP> la ma xac thuc de tra cuu Hop dong tren ung dung Viettel Tammi. Ma co hieu luc trong 5 phut. Vui long khong cung cap ma nay cho bat ky ai.`
- **Thời gian hiệu lực OTP (Timeout):** 5 phút (300 giây).
- **Thời gian chờ gửi lại mã (Resend cooldown):** 60 giây.


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

### 3.1. Thẻ Thông Tin Tổng Quan
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
- **Thanh toán & Thông báo cước:** Tương tự Internet & Di động trả sau.


## Phần 4: Xử lý ngoại lệ (Exception Handling)

### 1. Thuê bao di động trả trước
- **Quy tắc:** Tính năng "Tra cứu hợp đồng & hồ sơ" không áp dụng và không hiển thị dữ liệu hợp đồng đối với các thuê bao di động trả trước (do tính chất dịch vụ trả trước không ký kết hợp đồng cung cấp dịch vụ định kỳ như trả sau/cố định).
- **Trải nghiệm (UX):** 
  - Nếu khách hàng đang sử dụng thuê bao trả trước (luồng Đã đăng nhập tự động), màn hình tra cứu sẽ hiển thị trạng thái trống (Empty state) kèm thông báo: *"Tính năng tra cứu hợp đồng và hồ sơ chưa hỗ trợ cho thuê bao di động trả trước. Quý khách vui lòng truy cập mục 'Thông tin thuê bao' để xem chi tiết thông tin cá nhân của mình."*
  - Nếu khách hàng tra cứu số trả trước ở luồng Chưa đăng nhập hoặc Tra cứu hộ, hệ thống sẽ chặn ngay từ bước nhập thông tin và báo lỗi: *"Số thuê bao này là thuê bao trả trước, không có hợp đồng/hồ sơ để tra cứu. Vui lòng kiểm tra lại."*

### 2. Không tìm thấy dữ liệu hợp đồng
- **Quy tắc:** Khi khách hàng nhập các thông tin tra cứu (Mã hợp đồng, Số thuê bao, Số liên hệ, CCCD) nhưng hệ thống không ghi nhận bất kỳ dữ liệu nào tương ứng trên BCCS, hệ thống sẽ không thực hiện gửi OTP.
- **Trải nghiệm (UX):** Hiển thị cảnh báo lỗi (inline hoặc popup) ngay tại màn hình nhập: *"Không tìm thấy thông tin hợp đồng/hồ sơ với dữ liệu quý khách vừa nhập. Vui lòng kiểm tra lại."*

### 3. Nhập sai mã OTP quá số lần quy định
- **Quy tắc:** Để đảm bảo bảo mật và chống spam, nếu khách hàng nhập sai mã OTP quá 5 lần liên tiếp, hệ thống sẽ tạm khóa tính năng tra cứu (và gửi OTP) đối với phiên/số điện thoại đó trong vòng 15 phút.
- **Trải nghiệm (UX):** Khi nhập sai ở lần thứ 5, hiển thị thông báo: *"Bạn đã nhập sai mã OTP quá 5 lần. Vui lòng thử lại sau 15 phút."* Đồng thời vô hiệu hóa (disable) nút Xác nhận và nút Gửi lại mã.

### 4. Mã OTP hết hiệu lực (Timeout)
- **Quy tắc:** Mỗi mã OTP được gửi ra chỉ có hiệu lực trong vòng 5 phút (300 giây). Thời gian đếm ngược (countdown) được hiển thị trên giao diện.
- **Trải nghiệm (UX):** Khi đồng hồ đếm ngược về 00:00, nếu khách hàng vẫn nhập mã cũ và bấm xác nhận, hệ thống báo lỗi: *"Mã OTP đã hết hạn, vui lòng yêu cầu gửi lại mã mới."*

### 5. Hợp đồng đã chấm dứt (Thanh lý/Hủy)
- **Quy tắc (Đối với Khách hàng đã đăng nhập):** Khi tự động truy vấn danh sách hợp đồng, hệ thống lọc bỏ các hợp đồng có trạng thái "Đã chấm dứt/Thanh lý" (Terminated/Cancelled). Nếu khách hàng chỉ có hợp đồng đã hủy, hiển thị thông báo trạng thái trống (Empty State): *"Hiện tại quý khách không có hợp đồng/dịch vụ nào đang hoạt động."*
- **Trải nghiệm (UX) (Đối với Tra cứu thủ công / Tra cứu hộ):** Nếu khách hàng nhập thông tin của hợp đồng đã chấm dứt, hệ thống ghi nhận trạng thái từ BCCS và chặn không gửi mã OTP. Ngay khi bấm Lấy thông tin tra cứu, hiển thị thông báo lỗi: *"Hợp đồng/Thuê bao này đã chấm dứt hoạt động nên không thể tra cứu thông tin chứng từ. Vui lòng kiểm tra lại hoặc gọi 198 để được hỗ trợ."*


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
