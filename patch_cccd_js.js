const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldFunc = `        // Xử lý Gửi yêu cầu tra cứu thuê bao khác
        function handleSearchOther() {
            const inputVal = document.getElementById('other-input').value;
            if(!inputVal) return;
            
            // Chuyển sang màn hình OTP
            document.getElementById('other-search-form').classList.add('hidden');
            document.getElementById('otp-form').classList.remove('hidden');
            lucide.createIcons();
        }`;

const newFunc = `        // Xử lý Gửi yêu cầu tra cứu thuê bao khác
        function handleSearchOther() {
            const inputVal = document.getElementById('other-input').value;
            if(!inputVal) return;
            
            const selectedType = document.querySelector('input[name="searchType"]:checked').value;
            document.getElementById('other-search-form').classList.add('hidden');
            
            if (selectedType === 'CCCD') {
                // Chuyển sang màn hình chọn SĐT
                document.getElementById('select-phone-form').classList.remove('hidden');
            } else {
                // Chuyển sang màn hình OTP
                document.getElementById('otp-form').classList.remove('hidden');
            }
            lucide.createIcons();
        }`;

html = html.replace(oldFunc, newFunc);
fs.writeFileSync('index.html', html, 'utf8');
console.log('UI JS updated');
