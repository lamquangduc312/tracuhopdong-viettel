# Tra cứu hợp đồng - Viettel Tammi

**🔗 Trải nghiệm thực tế (Live Demo):** [https://tracuhopdong-viettel.lamquangduc312.workers.dev/](https://tracuhopdong-viettel.lamquangduc312.workers.dev/)

**🔗 Kho mã nguồn (GitHub):** [https://github.com/lamquangduc312/tracuhopdong-viettel](https://github.com/lamquangduc312/tracuhopdong-viettel)

Dự án giao diện mô phỏng ứng dụng **Viettel Tammi** (Tính năng tra cứu hợp đồng và các tiện ích Internet) được xây dựng bằng HTML và Tailwind CSS. 

Dự án này được tối ưu để triển khai nhanh chóng (Deploy) trực tiếp lên nền tảng **Cloudflare Pages**.

## 🚀 Hướng dẫn đẩy mã nguồn lên GitHub (Tối ưu cho Cloudflare)

Để Cloudflare Pages tự động nhận diện và cập nhật giao diện mỗi khi có thay đổi, bạn hãy thực hiện theo quy trình chuẩn sau:

### 1. Thao tác lần đầu tiên (Khởi tạo kho lưu trữ)
Nếu bạn vừa tạo một repository mới tinh trên GitHub, hãy mở Terminal (PowerShell / CMD) tại thư mục chứa dự án và chạy các lệnh sau:

```bash
git init
git add .
git commit -m "Khởi tạo dự án Tra cứu hợp đồng Viettel Tammi"
git branch -M main
git remote add origin https://github.com/lamquangduc312/tracuhopdong-viettel.git
git push -u origin main
```

### 2. Quy trình cập nhật Code hàng ngày (Tự động kích hoạt Cloudflare)
Bất cứ khi nào bạn chỉnh sửa file `index.html` hoặc có sự thay đổi về giao diện, hãy chạy chuỗi 3 lệnh này. Cloudflare sẽ bắt được Webhook từ GitHub và tự động build lại trang web của bạn chỉ trong 10 - 20 giây:

```bash
git add .
git commit -m "Cập nhật giao diện: [Mô tả ngắn gọn nội dung bạn vừa sửa]"
git push
```

## 🛠 Hướng dẫn kết nối với Cloudflare Pages

Nếu bạn chưa kết nối kho GitHub này với Cloudflare Pages, hãy làm theo các bước sau:
1. Đăng nhập vào bảng điều khiển **Cloudflare**.
2. Chuyển sang mục **Workers & Pages** ở menu bên trái.
3. Chọn **Create application** -> Chuyển sang tab **Pages** -> Nhấn **Connect to Git**.
4. Chọn tài khoản GitHub của bạn và chọn kho lưu trữ `tracuhopdong-viettel`.
5. Trong phần **Build settings**, bạn hãy để trống các thông tin build (vì dự án này chỉ dùng thuần HTML/CSS, không cần lệnh build phức tạp).
6. Nhấn **Save and Deploy**. 

Xong! Giờ đây trang web của bạn đã sống (live) và có tốc độ tải siêu tốc nhờ hệ thống CDN toàn cầu của Cloudflare.

## 💡 Xử lý sự cố (Troubleshooting)

- **Đã push code lên GitHub nhưng Cloudflare chưa cập nhật giao diện mới?**
  - Hãy thử nhấn tổ hợp phím `Ctrl + F5` trên trình duyệt để xóa Cache.
  - Nếu vẫn chưa được, truy cập Cloudflare > Workers & Pages > Chọn Project của bạn > Tab Deployments > Chọn **Create deployment** để ép hệ thống build lại.
- **Sửa tên trang nhưng Zalo/Messenger chia sẻ vẫn hiển thị tên cũ?**
  - Do Zalo/Messenger lưu bộ nhớ đệm (cache) đường link rất lâu. Mẹo là hãy thêm một đuôi bất kỳ vào link khi gửi (Ví dụ: `https://ten-trang.pages.dev/?v=1` hoặc `?version=moi`).

---
*Dự án được xây dựng và hỗ trợ bởi Antigravity AI.*
