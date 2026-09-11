const fs = require('fs');
let readme = fs.readFileSync('README.md', 'utf8');

const additionalSection = `
## 📖 Tài Liệu Nghiệp Vụ
Để hiểu rõ hơn về các luồng xử lý nghiệp vụ phức tạp của tính năng Tra cứu hợp đồng (đặc biệt là quy tắc định tuyến gửi mã OTP bảo mật dựa trên các phương thức tra cứu: CCCD, Mã hợp đồng, Số thuê bao, Số liên hệ), vui lòng xem tại file **[TAI_LIEU_NGHIEP_VU_OTP.md](./TAI_LIEU_NGHIEP_VU_OTP.md)**.
`;

readme += additionalSection;
fs.writeFileSync('README.md', readme, 'utf8');
console.log("Updated README.md");
