const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const targetStr = `- **Trải nghiệm (UX):** Khách hàng vào là thấy ngay danh sách hợp đồng của mình, được phân loại rõ ràng theo từng tab (Di động, Internet, Truyền hình...). **Hoàn toàn không bị làm phiền bởi các bước nhập mã hay OTP.**`;
const newStr = `- **Trải nghiệm (UX):** Khách hàng vào là thấy ngay danh sách hợp đồng của mình, được phân loại rõ ràng theo từng tab (Di động, Internet, Truyền hình...). **Hoàn toàn không bị làm phiền bởi các bước nhập mã hay OTP.**
- **Chuyển đổi tài khoản:** Tại màn hình kết quả tra cứu, hệ thống cung cấp nút thả xuống "Chọn tài khoản". Khách hàng có thể dễ dàng chuyển sang tra cứu các tài khoản/hợp đồng đã liên kết khác (ví dụ: đang xem hợp đồng Di động trả sau, có thể bấm chọn để chuyển sang màn hình kết quả của Internet, Truyền hình TV360, Camera) mà không cần phải thoát ra tra cứu lại.`;

content = content.replace(targetStr, newStr);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content, 'utf8');
console.log('Done');
