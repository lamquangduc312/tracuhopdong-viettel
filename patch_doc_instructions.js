const fs = require('fs');
let doc = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', 'utf8');

const insertionPoint = `## Phần 1: Khách hàng CHƯA ĐĂNG NHẬP App Viettel Tammi (Khách vãng lai)`;

const newSection = `## Phần 0: Giao diện Form Nhập Thông Tin Tra Cứu (Trang chủ)

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

## Phần 1: Khách hàng CHƯA ĐĂNG NHẬP App Viettel Tammi (Khách vãng lai)`;

doc = doc.replace(insertionPoint, newSection);
fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', doc, 'utf8');
console.log('Doc updated with Part 0');
