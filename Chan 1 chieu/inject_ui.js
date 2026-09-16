const fs = require('fs');

const htmlModals = `
    <!-- CHẶN 1 CHIỀU FLOW -->
    <div id="chan1chieu-flow" class="absolute inset-0 z-50 bg-ios-bg flex-col hidden overflow-hidden rounded-[54px] pt-10">
        
        <!-- Screen 1: Chọn thuê bao -->
        <div id="chan-step-1" class="flex-1 flex flex-col w-full h-full bg-ios-bg">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="closeChan1Chieu()" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="chevron-left" class="w-6 h-6 text-slate-800"></i>
                </button>
                <h2 class="text-base font-bold text-slate-900">Chọn thuê bao</h2>
                <div class="w-6"></div>
            </div>

            <div class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-5">
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Nhập SĐT Viettel</label>
                    <div class="relative">
                        <input type="tel" id="input-phone" 
                            class="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-base font-semibold focus:outline-none focus:border-viettel transition-colors"
                            placeholder="Nhập số điện thoại"
                            oninput="validatePhone()"
                            value="">
                    </div>
                    <p id="phone-error" class="text-viettel text-xs mt-1.5 hidden font-medium">Số thuê bao nhập là số điện thoại Viettel.</p>
                </div>
                
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-3">Gợi ý thuê bao</label>
                    <div class="bg-white rounded-xl p-3.5 flex items-center justify-between shadow-sm border border-slate-100 cursor-pointer hover:border-viettel transition" onclick="selectPhone('0987666888')">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <i data-lucide="user" class="w-5 h-5 text-slate-600"></i>
                            </div>
                            <div>
                                <div class="font-bold text-slate-900">0987 666 888</div>
                                <div class="text-xs text-slate-500 mt-0.5">Trả trước</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 bg-white border-t border-slate-100 pb-8">
                <button id="btn-tieptuc-1" onclick="goToStep(2)" class="w-full h-12 rounded-xl bg-slate-200 text-slate-400 font-bold pointer-events-none transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 2: Xác thực thông tin -->
        <div id="chan-step-2" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(1)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition">
                    <i data-lucide="chevron-left" class="w-6 h-6 text-slate-800"></i>
                </button>
                <h2 class="text-base font-bold text-slate-900">Xác thực thông tin</h2>
                <div class="w-6"></div>
            </div>
            <div class="p-4 bg-white m-4 rounded-xl shadow-sm border border-slate-100">
                <h3 class="font-bold mb-3 text-slate-800">Chọn phương thức xác thực</h3>
                <div class="border border-viettel rounded-xl p-3 flex items-center justify-between mb-4 bg-viettel-light cursor-pointer">
                    <div class="flex items-center space-x-3"><i data-lucide="credit-card" class="text-slate-700"></i><span class="font-semibold text-slate-800 text-sm">Quét CCCD gắn chip - NFC</span></div>
                    <div class="w-4 h-4 rounded-full border-[5px] border-viettel bg-white"></div>
                </div>
                
                <div class="border border-slate-200 rounded-xl p-3 flex items-center justify-between mb-5 cursor-pointer hover:bg-slate-50 transition">
                    <div class="flex items-center space-x-3">
                        <div class="w-6 h-6 rounded bg-slate-100 flex items-center justify-center"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i></div>
                        <span class="font-semibold text-slate-800 text-sm">Đối chiếu dữ liệu trên VNeID</span>
                    </div>
                    <div class="w-4 h-4 rounded-full border border-slate-300 bg-white"></div>
                </div>

                <ul class="text-sm space-y-2.5 text-slate-600">
                    <li class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mr-2"></i> Vui lòng chuẩn bị CCCD gắn chip còn hạn.</li>
                    <li class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mr-2"></i> Chụp mặt trước/mặt sau CCCD.</li>
                    <li class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mr-2"></i> Chụp ảnh chân dung.</li>
                </ul>
            </div>
            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button onclick="goToStep(3)" class="w-full h-12 rounded-xl bg-slate-900 text-white font-bold transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 3: eKYC & NFC Result -->
        <div id="chan-step-3" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(2)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
                <h2 class="text-base font-bold text-slate-900">Xác thực thông tin</h2>
                <div class="w-6"></div>
            </div>
            <div class="p-4 space-y-4 flex-1 overflow-y-auto no-scrollbar">
                <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="font-bold text-slate-800">Ảnh giấy tờ</h3>
                        <span class="text-viettel text-sm font-medium cursor-pointer hover:underline">Chụp lại</span>
                    </div>
                    <div class="flex gap-3">
                        <div class="flex-1 h-[80px] bg-slate-200 rounded-xl overflow-hidden relative border border-slate-200">
                            <div class="absolute inset-0 flex items-center justify-center"><i data-lucide="image" class="w-6 h-6 text-slate-400"></i></div>
                            <div class="absolute top-1 left-2 text-[10px] font-bold text-white drop-shadow-md">Mặt trước</div>
                            <div class="absolute bottom-1 right-1 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"><i data-lucide="camera" class="w-3 h-3 text-white"></i></div>
                        </div>
                        <div class="flex-1 h-[80px] bg-slate-200 rounded-xl overflow-hidden relative border border-slate-200">
                            <div class="absolute inset-0 flex items-center justify-center"><i data-lucide="image" class="w-6 h-6 text-slate-400"></i></div>
                            <div class="absolute top-1 left-2 text-[10px] font-bold text-white drop-shadow-md">Mặt sau</div>
                            <div class="absolute bottom-1 right-1 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"><i data-lucide="camera" class="w-3 h-3 text-white"></i></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 class="font-bold mb-3 text-slate-800">Ảnh chân dung</h3>
                    <div class="w-full h-[180px] bg-slate-200 rounded-xl overflow-hidden relative border border-slate-200">
                        <div class="absolute inset-0 flex items-center justify-center"><i data-lucide="user" class="w-10 h-10 text-slate-400"></i></div>
                        <div class="absolute bottom-2 right-2 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"><i data-lucide="camera" class="w-4 h-4 text-white"></i></div>
                    </div>
                </div>
            </div>
            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button onclick="goToStep(4)" class="w-full h-12 rounded-xl bg-slate-900 text-white font-bold transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 4: Thông tin hợp đồng & Ký -->
        <div id="chan-step-4" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(3)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
                <h2 class="text-base font-bold text-slate-900">Thông tin hợp đồng</h2>
                <div class="w-6"></div>
            </div>
            <div class="p-4 space-y-4">
                <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center cursor-pointer">
                    <span class="font-bold text-slate-800">Danh sách hồ sơ</span>
                    <span class="text-viettel font-semibold text-sm">Xem chi tiết</span>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 class="font-bold mb-3 text-slate-800">Chữ ký xác nhận</h3>
                    <div id="signature-pad" class="w-full h-40 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 relative flex items-center justify-center cursor-pointer hover:bg-slate-100 transition" onclick="signDocument()">
                        <span class="text-slate-400 text-sm font-medium pointer-events-none">Chạm để ký xác nhận</span>
                    </div>
                </div>
            </div>
            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button id="btn-tieptuc-4" onclick="showConfirmPopup()" class="w-full h-12 rounded-xl bg-slate-200 text-slate-400 font-bold pointer-events-none transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Overlays (Popups) -->
        <div id="popup-confirm" class="absolute inset-0 z-50 bg-slate-900/40 hidden items-center justify-center p-6 backdrop-blur-sm">
            <div class="bg-white w-full rounded-[24px] p-6 text-center shadow-xl transform scale-100">
                <div class="w-[60px] h-[60px] bg-gradient-to-tr from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                    <span class="text-white text-3xl font-extrabold pb-1">!</span>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-900">Thông báo</h3>
                <p class="text-slate-600 mb-6 text-sm">Xác nhận thực hiện chặn 1 chiều với thuê bao <strong id="confirm-phone-num">"0987666888"</strong></p>
                <div class="flex gap-3">
                    <button onclick="closePopup('popup-confirm')" class="flex-1 h-11 rounded-xl border border-slate-300 font-bold text-slate-800 text-sm hover:bg-slate-50">Hủy</button>
                    <button onclick="doBlock()" class="flex-1 h-11 rounded-xl bg-slate-900 text-white font-bold text-sm">Xác nhận</button>
                </div>
            </div>
        </div>

        <div id="popup-success" class="absolute inset-0 z-50 bg-slate-900/40 hidden items-center justify-center p-6 backdrop-blur-sm">
            <div class="bg-white w-full rounded-[24px] p-6 text-center shadow-xl">
                <div class="w-[60px] h-[60px] bg-gradient-to-tr from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-100">
                    <i data-lucide="check" class="text-white w-8 h-8 stroke-[4]"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-900">Chặn 1 chiều thành công</h3>
                <p class="text-slate-600 mb-6 text-[13px] leading-relaxed">Quý khách đã thực hiện chặn 1 chiều cho thuê bao <span id="success-phone-num">0987666888</span><br><br>Vui lòng liên hệ <span class="text-viettel font-bold">18008098</span> (miễn phí) để được hỗ trợ.</p>
                <button onclick="closeChan1Chieu()" class="w-full h-11 rounded-xl bg-slate-900 text-white font-bold text-sm">Về trang chủ</button>
            </div>
        </div>
    </div>
`;

const jsCode = `
        // CHAN 1 CHIEU LOGIC
        function openChan1Chieu() {
            document.getElementById('chan1chieu-flow').classList.remove('hidden');
            document.getElementById('chan1chieu-flow').classList.add('flex');
            lucide.createIcons();
            goToStep(1);
        }
        function closeChan1Chieu() {
            document.getElementById('chan1chieu-flow').classList.add('hidden');
            document.getElementById('chan1chieu-flow').classList.remove('flex');
            document.getElementById('popup-success').classList.replace('flex', 'hidden');
            document.getElementById('popup-confirm').classList.replace('flex', 'hidden');
            document.getElementById('input-phone').value = '';
            validatePhone();
            resetSignature();
        }
        function goToStep(step) {
            for(let i=1; i<=4; i++) {
                let el = document.getElementById('chan-step-'+i);
                if(el) {
                    if(i===step) {
                        el.classList.remove('hidden');
                        el.classList.add('flex');
                    } else {
                        el.classList.add('hidden');
                        el.classList.remove('flex');
                    }
                }
            }
        }
        function validatePhone() {
            const input = document.getElementById('input-phone');
            const error = document.getElementById('phone-error');
            const btn = document.getElementById('btn-tieptuc-1');
            const val = input.value.replace(/\s+/g, '');
            const isViettel = /^(098|097|096|086|03[2-9]|09[0-9]|08[0-9])/.test(val);
            if (val.length >= 3 && !isViettel) {
                input.classList.add('border-viettel', 'text-viettel', 'ring-1', 'ring-viettel');
                error.classList.remove('hidden');
                btn.classList.replace('bg-slate-900', 'bg-slate-200');
                btn.classList.replace('text-white', 'text-slate-400');
                btn.classList.add('pointer-events-none');
            } else {
                input.classList.remove('border-viettel', 'text-viettel', 'ring-1', 'ring-viettel');
                error.classList.add('hidden');
                if (val.length >= 10 && isViettel) {
                    btn.classList.replace('bg-slate-200', 'bg-slate-900');
                    btn.classList.replace('text-slate-400', 'text-white');
                    btn.classList.remove('pointer-events-none');
                    // update modals text
                    document.getElementById('confirm-phone-num').innerText = '"' + val + '"';
                    document.getElementById('success-phone-num').innerText = val;
                } else {
                    btn.classList.replace('bg-slate-900', 'bg-slate-200');
                    btn.classList.replace('text-white', 'text-slate-400');
                    btn.classList.add('pointer-events-none');
                }
            }
        }
        function selectPhone(phone) { document.getElementById('input-phone').value = phone; validatePhone(); }
        
        function signDocument() {
            const el = document.getElementById('signature-pad');
            el.innerHTML = '<span class="text-[40px] leading-none text-slate-800" style="font-family: cursive; transform: rotate(-5deg);">Miss Emerald</span><button class="absolute bottom-3 right-3 px-3 py-1.5 bg-white border border-slate-300 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm text-slate-700 hover:bg-slate-50" onclick="event.stopPropagation(); resetSignature()"><i data-lucide="pen-line" class="w-3.5 h-3.5"></i> Ký lại</button>';
            lucide.createIcons();
            const btn = document.getElementById('btn-tieptuc-4');
            btn.classList.replace('bg-slate-200', 'bg-slate-900');
            btn.classList.replace('text-slate-400', 'text-white');
            btn.classList.remove('pointer-events-none');
        }
        function resetSignature() {
            const el = document.getElementById('signature-pad');
            el.innerHTML = '<span class="text-slate-400 text-sm font-medium pointer-events-none">Chạm để ký xác nhận</span>';
            const btn = document.getElementById('btn-tieptuc-4');
            btn.classList.replace('bg-slate-900', 'bg-slate-200');
            btn.classList.replace('text-white', 'text-slate-400');
            btn.classList.add('pointer-events-none');
        }
        
        function showConfirmPopup() {
            document.getElementById('popup-confirm').classList.remove('hidden');
            document.getElementById('popup-confirm').classList.add('flex');
        }
        function closePopup(id) {
            document.getElementById(id).classList.add('hidden');
            document.getElementById(id).classList.remove('flex');
        }
        function doBlock() {
            closePopup('popup-confirm');
            document.getElementById('popup-success').classList.remove('hidden');
            document.getElementById('popup-success').classList.add('flex');
        }
`;

const filePath = 'G:/VIETTEL TAMMI/CDBR_DÐ_PYC xay dung tinh nang tra cuu hop dong tren app Tammi/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Insert HTML
if (!content.includes('CHẶN 1 CHIỀU FLOW')) {
    content = content.replace('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->', htmlModals + '\n    <!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
}

// Insert JS
if (!content.includes('// CHAN 1 CHIEU LOGIC')) {
    content = content.replace('</script>\\n</body>', jsCode + '\\n</script>\\n</body>'); // Might need to regex this properly
    // Fallback if replace doesn't work well due to line endings
    content = content.replace(/<\/script>\s*<\/body>/, jsCode + '\n</script>\n</body>');
}

// Add onclick to button.
content = content.replace(
    /(<button class="flex flex-col items-center min-w-\[72px\] snap-start group")([^>]*>.*?Chặn<br>một chiều<\/span>\s*<\/button>)/s,
    (match, p1, p2) => {
        if (!match.includes('onclick="openChan1Chieu()"')) {
            return p1 + ' onclick="openChan1Chieu()"' + p2;
        }
        return match;
    }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Inject done!");
