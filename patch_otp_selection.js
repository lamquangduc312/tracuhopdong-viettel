const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const selectPhoneFormHTML = `
                    <!-- SELECT PHONE FORM (CÁCH 1) -->
                    <div id="select-phone-form" class="hidden space-y-3">
                        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                            <div class="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <i data-lucide="smartphone" class="w-5 h-5"></i>
                            </div>
                            <h3 class="text-sm font-black text-slate-800 text-center mb-1">Chọn số nhận OTP</h3>
                            <p class="text-[11px] text-slate-500 text-center mb-4 leading-relaxed">
                                Vui lòng chọn một trong các số điện thoại liên hệ dưới đây để nhận mã xác thực.
                            </p>
                            
                            <div class="space-y-2 mb-4">
                                <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                                    <div class="flex items-center space-x-3">
                                        <input type="radio" name="otpPhone" value="098***8785" class="w-4 h-4 text-viettel border-slate-300 focus:ring-viettel accent-viettel" checked>
                                        <span class="text-[13px] font-bold text-slate-700">098***8785</span>
                                    </div>
                                    <div class="w-2 h-2 rounded-full bg-viettel"></div>
                                </label>
                                <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                                    <div class="flex items-center space-x-3">
                                        <input type="radio" name="otpPhone" value="034***1122" class="w-4 h-4 text-viettel border-slate-300 focus:ring-viettel accent-viettel">
                                        <span class="text-[13px] font-bold text-slate-700">034***1122</span>
                                    </div>
                                </label>
                                <label class="flex items-center justify-between p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                                    <div class="flex items-center space-x-3">
                                        <input type="radio" name="otpPhone" value="086***9999" class="w-4 h-4 text-viettel border-slate-300 focus:ring-viettel accent-viettel">
                                        <span class="text-[13px] font-bold text-slate-700">086***9999</span>
                                    </div>
                                </label>
                            </div>
                            
                            <button onclick="handleSendOTP()" class="w-full py-3 bg-viettel text-white text-sm font-bold rounded-xl shadow-md shadow-red-200 hover:bg-viettel-dark transition-all active:scale-95">
                                Gửi mã OTP
                            </button>
                        </div>
                    </div>
`;

// Insert the new form before otp-form
html = html.replace('<!-- OTP FORM -->', selectPhoneFormHTML + '\n                    <!-- OTP FORM -->');

// Replace handleSearchOther to show select-phone-form instead of otp-form
const handleSearchOtherOld = `// Chuyển sang màn hình OTP
            document.getElementById('other-search-form').classList.add('hidden');
            document.getElementById('otp-form').classList.remove('hidden');`;
const handleSearchOtherNew = `// CÁCH 1: Cho khách hàng tự chọn số nhận OTP
            const searchType = document.querySelector('input[name="searchType"]:checked').value;
            document.getElementById('other-search-form').classList.add('hidden');
            
            // Nếu tra bằng CCCD, hiển thị màn hình chọn số
            if (searchType === 'CCCD') {
                document.getElementById('select-phone-form').classList.remove('hidden');
            } else {
                // Nếu tra bằng mã hợp đồng / thuê bao thì gửi thẳng OTP (mặc định)
                document.getElementById('otp-phone-display').innerText = '098***888';
                document.getElementById('otp-form').classList.remove('hidden');
            }
            lucide.createIcons();
        }

        // Xử lý gửi OTP sau khi chọn số
        function handleSendOTP() {
            const selectedPhone = document.querySelector('input[name="otpPhone"]:checked').value;
            document.getElementById('select-phone-form').classList.add('hidden');
            document.getElementById('otp-form').classList.remove('hidden');
            
            // Update the OTP form text with the selected phone number
            const displayEl = document.getElementById('otp-phone-display');
            if (displayEl) {
                displayEl.innerText = selectedPhone;
            }`;

html = html.replace(handleSearchOtherOld, handleSearchOtherNew);

// Add an id to the phone number in otp-form so we can update it
html = html.replace('<b class="text-slate-700">098***888</b>', '<b id="otp-phone-display" class="text-slate-700">098***888</b>');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched UX for OTP selection");
