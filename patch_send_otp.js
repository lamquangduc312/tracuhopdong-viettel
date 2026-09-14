const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldFunc = `        // Xử lý đếm ngược (Mô phỏng)
        // Trong thực tế sẽ chạy timer khi mở OTP form`;

const newFunc = `        function handleSendOTP() {
            // Lấy số điện thoại đã chọn
            const selectedPhone = document.querySelector('input[name="otpPhone"]:checked').value;
            // Hiển thị lên màn hình OTP
            document.getElementById('otp-phone-display').innerText = selectedPhone;
            
            // Chuyển màn hình
            document.getElementById('select-phone-form').classList.add('hidden');
            document.getElementById('otp-form').classList.remove('hidden');
            lucide.createIcons();
        }

        // Xử lý đếm ngược (Mô phỏng)
        // Trong thực tế sẽ chạy timer khi mở OTP form`;

html = html.replace(oldFunc, newFunc);
fs.writeFileSync('index.html', html, 'utf8');
console.log('UI handleSendOTP updated');
