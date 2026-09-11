const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Thêm Số liên hệ vào form tra cứu
const searchFormRegex = /<label class="flex items-center space-x-3 cursor-pointer">\s*<input type="radio" name="searchType" value="CCCD"/;
const newSearchForm = `<label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="searchType" value="Số liên hệ" class="w-3.5 h-3.5 text-viettel border-slate-300 focus:ring-viettel accent-viettel" onchange="updateSearchPlaceholder(this.value)">
                                    <span class="text-xs font-bold text-slate-700">Số liên hệ</span>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="searchType" value="CCCD"`;

html = html.replace(searchFormRegex, newSearchForm);

// 2. Sửa Hướng dẫn để bao gồm "Số liên hệ"
const instructionRegex = /<div><b>2\. Số thuê bao:<\/b> Số di động trả sau hoặc mã tài khoản DV Internet\.<\/div>/;
const newInstruction = `<div><b>2. Số thuê bao:</b> Số di động trả sau hoặc mã tài khoản DV Internet.</div>
                                    <div><b>3. Số liên hệ:</b> Số điện thoại liên hệ gắn trên các hợp đồng.</div>`;

html = html.replace(instructionRegex, newInstruction);

// Chỉnh lại số thứ tự CCCD thành 4
html = html.replace(/<div><b>3\. CCCD:<\/b>/, `<div><b>4. CCCD:</b>`);

// 3. Logic updateSearchPlaceholder() (cần thêm nếu chưa có)
// Tuy nhiên code hiện tại có onchange="updateSearchPlaceholder(this.value)", nên ta kiểm tra xem hàm đó có chưa.
// Ta chèn script vào cuối file hoặc tìm hàm đó.
if(!html.includes('function updateSearchPlaceholder(val)')) {
    const scriptInsert = `function updateSearchPlaceholder(val) {
            const input = document.getElementById('other-input');
            if (val === 'Mã hợp đồng') input.placeholder = 'Nhập mã hợp đồng *';
            else if (val === 'Số thuê bao') input.placeholder = 'Nhập số thuê bao *';
            else if (val === 'Số liên hệ') input.placeholder = 'Nhập số điện thoại liên hệ *';
            else if (val === 'CCCD') input.placeholder = 'Nhập CCCD *';
        }`;
    html = html.replace('function handleSearchOther()', scriptInsert + '\n\n        function handleSearchOther()');
} else {
    // Nếu có rồi thì sửa lại (nhưng file hiện tại chưa có nội dung cụ thể cho updateSearchPlaceholder, ta overwrite hàm)
    const oldFunc = /function updateSearchPlaceholder[\s\S]*?\}/;
    const newFunc = `function updateSearchPlaceholder(val) {
            const input = document.getElementById('other-input');
            if (val === 'Mã hợp đồng') input.placeholder = 'Nhập mã hợp đồng *';
            else if (val === 'Số thuê bao') input.placeholder = 'Nhập số thuê bao *';
            else if (val === 'Số liên hệ') input.placeholder = 'Nhập số điện thoại liên hệ *';
            else if (val === 'CCCD') input.placeholder = 'Nhập CCCD *';
        }`;
    html = html.replace(oldFunc, newFunc);
}

// 4. Sửa hàm handleVerifyOTP để giả lập luồng trả về nhiều loại hợp đồng nếu tra bằng Số liên hệ
const verifyOtpOld = `function handleVerifyOTP() {
            // Ẩn OTP, hiện lại view tiêu chuẩn
            document.getElementById('otp-form').classList.add('hidden');
            document.getElementById('standard-view').classList.remove('hidden');
            document.getElementById('contract-summary-box').classList.remove('hidden');
            
            
            updateDossierRequiredBanner();
            renderDocuments();
        }`;

const verifyOtpNew = `function handleVerifyOTP() {
            // Ẩn OTP
            document.getElementById('otp-form').classList.add('hidden');
            
            // Xử lý logic hiển thị
            const searchType = document.querySelector('input[name="searchType"]:checked').value;
            if (searchType === 'Số liên hệ') {
                // Giả lập hiển thị nhiều hợp đồng bằng cách báo cáo "Đã tìm thấy X hợp đồng"
                // và hiển thị view tổng hợp (tạm thời load view tiêu chuẩn với thông báo đặc biệt)
                document.getElementById('standard-view').classList.remove('hidden');
                document.getElementById('contract-summary-box').classList.remove('hidden');
                
                // Hiển thị thông báo (toast hoặc alert)
                const banner = document.createElement('div');
                banner.className = "bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-[12px] font-medium flex items-start gap-3 mt-4 mb-4 mx-4 shadow-sm";
                banner.innerHTML = \`<i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"></i> 
                                      <div><b>Tra cứu thành công!</b> Số liên hệ này đang gắn với <b>2 hợp đồng</b> (1 Di động trả sau, 1 Internet). Bạn có thể xem chứng từ bên dưới.</div>\`;
                
                const standardView = document.getElementById('standard-view');
                if(!standardView.querySelector('.bg-emerald-50')) {
                    standardView.insertBefore(banner, standardView.firstChild);
                }
                
                // Load dữ liệu
                currentSubscriber = 'ftth'; // Gán mặc định hoặc trộn
                updateDossierRequiredBanner();
                renderDocuments();
                lucide.createIcons();
            } else {
                document.getElementById('standard-view').classList.remove('hidden');
                document.getElementById('contract-summary-box').classList.remove('hidden');
                updateDossierRequiredBanner();
                renderDocuments();
            }
        }`;

html = html.replace(verifyOtpOld, verifyOtpNew);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched index.html for contact number search");
