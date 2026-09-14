const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const exceptionRule = `
## Phần 4: Xử lý ngoại lệ (Exception Handling)

### 1. Thuê bao di động trả trước
- **Quy tắc:** Tính năng "Tra cứu hợp đồng & hồ sơ" không áp dụng và không hiển thị dữ liệu hợp đồng đối với các thuê bao di động trả trước (do tính chất dịch vụ trả trước không ký kết hợp đồng cung cấp dịch vụ định kỳ như trả sau/cố định).
- **Trải nghiệm (UX):** 
  - Nếu khách hàng đang sử dụng thuê bao trả trước (luồng Đã đăng nhập tự động), màn hình tra cứu sẽ hiển thị trạng thái trống (Empty state) kèm thông báo: *"Tính năng tra cứu hợp đồng và hồ sơ chưa hỗ trợ cho thuê bao di động trả trước. Quý khách vui lòng truy cập mục 'Thông tin thuê bao' để xem chi tiết thông tin cá nhân của mình."*
  - Nếu khách hàng tra cứu số trả trước ở luồng Chưa đăng nhập hoặc Tra cứu hộ, hệ thống sẽ chặn ngay từ bước nhập thông tin và báo lỗi: *"Số thuê bao này là thuê bao trả trước, không có hợp đồng/hồ sơ để tra cứu. Vui lòng kiểm tra lại."*
`;

content = content.replace('---', exceptionRule + '\n---');

fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content, 'utf8');
console.log('Done');
