const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const targetStr = `## Phần 3: Cấu trúc hiển thị Thẻ Thông Tin Tổng Quan (Summary Card)

Sau khi xác thực thành công, hệ thống không chỉ liệt kê các chứng từ mà sẽ hiển thị một **Thẻ thông tin tổng quan** ở trên cùng, giúp khách hàng nắm bắt nhanh tình trạng dịch vụ. Bên dưới thẻ này, các chứng từ sẽ được chia làm 2 tab rõ ràng: **Hợp đồng** và **Hồ sơ khác**.

Dưới đây là đặc tả các trường thông tin hiển thị trên Thẻ tổng quan đối với từng loại dịch vụ:`;

const newStr = `## Phần 3: Cấu trúc hiển thị Kết Quả Tra Cứu (Áp dụng chung cho cả luồng Đã đăng nhập và Chưa đăng nhập)

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
Nằm ở vị trí trên cùng của màn hình kết quả, giúp khách hàng nắm bắt nhanh các thông tin quan trọng nhất về tình trạng dịch vụ. Dưới đây là đặc tả chi tiết các trường thông tin hiển thị trên Thẻ tổng quan đối với từng loại dịch vụ:`;

content = content.replace(targetStr, newStr);

fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content, 'utf8');
console.log('Done replacing doc');
