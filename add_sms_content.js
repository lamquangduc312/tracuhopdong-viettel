const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const anchor = '  4. Hệ thống gửi OTP về số đã chọn và chuyển sang màn hình nhập OTP.';
const newSection = `

### 4. Cấu hình nội dung tin nhắn OTP (Brandname VTSHOP)
- Khi khách hàng thực hiện các thao tác yêu cầu xác thực ở luồng chưa đăng nhập, hệ thống sẽ gửi SMS từ đầu số (brandname) **VTSHOP**.
- **Cấu trúc nội dung SMS:** 
  > \`[VTSHOP] <Mã_OTP> la ma xac thuc de tra cuu Hop dong tren ung dung Viettel Tammi. Ma co hieu luc trong 2 phut. Vui long khong cung cap ma nay cho bat ky ai.\`
- **Thời gian chờ (Timeout):** 120 giây.`;

content = content.replace(anchor, anchor + newSection);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content, 'utf8');
console.log('done');
