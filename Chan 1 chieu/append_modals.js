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
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Chọn lý do chặn</label>
                    <div class="relative">
                        <select id="select-reason" class="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-base font-semibold text-slate-800 appearance-none focus:outline-none focus:border-viettel" onchange="validatePhone()">
                            <option value="">-- Chọn lý do --</option>
                            <option value="1">Mất máy</option>
                            <option value="2">Không có nhu cầu sử dụng</option>
                            <option value="3">Khác</option>
                        </select>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                    </div>
                </div>
            </div>

            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button id="btn-tieptuc-1" onclick="goToStep(2)" class="w-full h-12 rounded-xl bg-slate-200 text-slate-400 font-bold pointer-events-none transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 2: Chụp ảnh giấy tờ -->
        <div id="chan-step-2" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(1)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
                <h2 class="text-base font-bold text-slate-900">Chụp ảnh giấy tờ</h2>
                <div class="w-6"></div>
            </div>
            <div class="p-4 space-y-4">
                <div class="bg-blue-50 p-3 rounded-xl border border-blue-100 flex items-start gap-3">
                    <i data-lucide="info" class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"></i>
                    <p class="text-[13px] text-blue-800">Vui lòng chụp ảnh CMND/CCCD/Hộ chiếu trùng khớp với thông tin đăng ký thuê bao.</p>
                </div>
                <div class="space-y-4 mt-6">
                    <!-- Front -->
                    <div class="w-full h-40 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition" onclick="takePhoto(this, 'front')">
                        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2"><i data-lucide="camera" class="w-6 h-6 text-slate-600"></i></div>
                        <span class="text-sm font-semibold text-slate-700">Mặt trước CMND/CCCD</span>
                    </div>
                    <!-- Back -->
                    <div class="w-full h-40 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition" onclick="takePhoto(this, 'back')">
                        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2"><i data-lucide="camera" class="w-6 h-6 text-slate-600"></i></div>
                        <span class="text-sm font-semibold text-slate-700">Mặt sau CMND/CCCD</span>
                    </div>
                </div>
            </div>
            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button id="btn-tieptuc-2" onclick="goToStep(3)" class="w-full h-12 rounded-xl bg-slate-200 text-slate-400 font-bold pointer-events-none transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 3: Xác thực khuôn mặt -->
        <div id="chan-step-3" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(2)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
                <h2 class="text-base font-bold text-slate-900">Xác thực khuôn mặt</h2>
                <div class="w-6"></div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center p-6">
                <div class="w-48 h-48 rounded-full border-4 border-dashed border-slate-300 flex items-center justify-center relative bg-white cursor-pointer" onclick="takeFacePhoto(this)">
                    <div class="absolute inset-2 border border-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                        <i data-lucide="user" class="w-20 h-20 text-slate-300"></i>
                    </div>
                </div>
                <p class="text-center text-sm text-slate-600 mt-8">Vui lòng đưa khuôn mặt vào trong khung hình. Đảm bảo đủ ánh sáng và không đeo kính, khẩu trang.</p>
            </div>
            <div class="mt-auto p-4 bg-white border-t border-slate-100 pb-8">
                <button id="btn-tieptuc-3" onclick="goToStep(4)" class="w-full h-12 rounded-xl bg-slate-200 text-slate-400 font-bold pointer-events-none transition">Tiếp tục</button>
            </div>
        </div>

        <!-- Screen 3b: Xác nhận thông tin -->
        <div id="chan-step-3b" class="flex-1 flex flex-col w-full h-full bg-ios-bg hidden">
            <div class="bg-white px-4 pt-4 pb-3 shadow-sm flex items-center justify-between sticky top-0 z-10 rounded-t-[54px]">
                <button onclick="goToStep(3)" class="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
                <h2 class="text-base font-bold text-slate-900">Xác nhận thông tin</h2>
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
                <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center cursor-pointer" onclick="viewChan1ChieuDoc()">
                    <span class="font-bold text-slate-800">Danh sách hồ sơ chặn 1 chiều</span>
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

        <!-- Popup Xem hồ sơ chặn 1 chiều -->
        <div id="popup-chan1chieu-doc" class="absolute inset-0 z-[60] bg-slate-900/40 hidden items-center justify-center p-6 backdrop-blur-sm">
            <div class="bg-white w-full h-[80%] rounded-[24px] flex flex-col shadow-xl overflow-hidden">
                <div class="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center sticky top-0">
                    <h3 class="font-bold text-slate-800">Biểu mẫu chặn 1 chiều</h3>
                    <button onclick="closePopup('popup-chan1chieu-doc')" class="p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600"><i data-lucide="x" class="w-4 h-4"></i></button>
                </div>
                <div class="flex-1 p-4 overflow-y-auto no-scrollbar bg-slate-100">
                    <!-- PDF Mockup -->
                    <div class="w-full bg-white shadow-sm border border-slate-200 p-4 mb-4">
                        <div class="text-center mb-4 border-b pb-2">
                            <h4 class="font-bold uppercase text-[12px]">Cộng hòa xã hội chủ nghĩa Việt Nam</h4>
                            <p class="text-[10px] font-semibold">Độc lập - Tự do - Hạnh phúc</p>
                            <h4 class="font-bold uppercase text-[13px] mt-3">Phiếu yêu cầu chặn 1 chiều</h4>
                        </div>
                        <div class="text-[10px] space-y-2 text-slate-700 leading-relaxed">
                            <p><b>1. Thông tin khách hàng:</b></p>
                            <p>- Số điện thoại yêu cầu chặn: <span id="doc-phone-num" class="font-bold">0987666888</span></p>
                            <p><b>2. Nội dung yêu cầu:</b></p>
                            <p>- Chặn 1 chiều (chiều đi) do khách hàng yêu cầu qua ứng dụng.</p>
                            <p>- Thời gian chặn: Từ ngày hôm nay.</p>
                            <p><b>3. Cam kết:</b> Khách hàng cam kết chịu trách nhiệm với yêu cầu trên.</p>
                            <div class="mt-6 flex justify-end">
                                <div class="text-center">
                                    <p class="mb-8">Khách hàng ký xác nhận</p>
                                    <p class="italic text-slate-400 text-[9px]">(Chữ ký điện tử bên ngoài)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const jsCode = `
        function openChan1Chieu() {
            document.getElementById('chan1chieu-flow').classList.remove('hidden');
            document.getElementById('chan1chieu-flow').classList.add('flex');
            lucide.createIcons();
        }
        function closeChan1Chieu() {
            document.getElementById('chan1chieu-flow').classList.remove('flex');
            document.getElementById('chan1chieu-flow').classList.add('hidden');
            goToStep(1); // reset
            closePopup('popup-success');
        }
        function goToStep(step) {
            if(step === 4) {
                // If skipping 3b
                document.getElementById('chan-step-1').classList.add('hidden');
                document.getElementById('chan-step-2').classList.add('hidden');
                document.getElementById('chan-step-3').classList.add('hidden');
                document.getElementById('chan-step-3b').classList.add('hidden');
                document.getElementById('chan-step-4').classList.remove('hidden');
            } else if(step === 3.5) {
                // Go to step 3b
                document.getElementById('chan-step-3').classList.add('hidden');
                document.getElementById('chan-step-3b').classList.remove('hidden');
            } else {
                for(let i=1; i<=4; i++) {
                    const el = document.getElementById('chan-step-'+i);
                    if(el) {
                        if(i === step) el.classList.remove('hidden');
                        else el.classList.add('hidden');
                    }
                }
                document.getElementById('chan-step-3b').classList.add('hidden');
            }
        }
        function validatePhone() {
            const input = document.getElementById('input-phone');
            const btn = document.getElementById('btn-tieptuc-1');
            const err = document.getElementById('phone-error');
            const reason = document.getElementById('select-reason');
            
            const val = input.value.replace(/\\s+/g, '');
            if(val.length >= 10 && reason.value !== "") {
                btn.classList.remove('pointer-events-none', 'bg-slate-200', 'text-slate-400');
                btn.classList.add('bg-slate-900', 'text-white');
                err.classList.add('hidden');
            } else {
                btn.classList.add('pointer-events-none', 'bg-slate-200', 'text-slate-400');
                btn.classList.remove('bg-slate-900', 'text-white');
            }
        }
        function takePhoto(el, type) {
            el.innerHTML = '<div class="absolute inset-0 bg-slate-100 rounded-2xl flex flex-col items-center justify-center"><i data-lucide="image" class="w-8 h-8 text-slate-400 mb-2"></i><span class="text-xs text-slate-500">Đã tải ảnh lên</span></div>';
            el.classList.add('border-slate-400');
            lucide.createIcons();
            
            // Check if both photos are taken (mock)
            setTimeout(() => {
                const btn = document.getElementById('btn-tieptuc-2');
                btn.classList.remove('pointer-events-none', 'bg-slate-200', 'text-slate-400');
                btn.classList.add('bg-slate-900', 'text-white');
            }, 500);
        }
        function takeFacePhoto(el) {
            el.innerHTML = '<div class="absolute inset-2 border border-slate-200 rounded-full flex items-center justify-center overflow-hidden bg-slate-100"><i data-lucide="check" class="w-12 h-12 text-emerald-500"></i></div>';
            lucide.createIcons();
            
            setTimeout(() => {
                goToStep(3.5); // go to step 3b
            }, 1000);
        }
        function signDocument() {
            const pad = document.getElementById('signature-pad');
            pad.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_of_John_Hancock.svg" class="h-20 opacity-80" />';
            
            const btn = document.getElementById('btn-tieptuc-4');
            btn.classList.remove('pointer-events-none', 'bg-slate-200', 'text-slate-400');
            btn.classList.add('bg-slate-900', 'text-white');
        }
        function showConfirmPopup() {
            const phone = document.getElementById('input-phone').value || '0987666888';
            document.getElementById('confirm-phone-num').innerText = phone;
            document.getElementById('popup-confirm').classList.remove('hidden');
            document.getElementById('popup-confirm').classList.add('flex');
        }
        function closePopup(id) {
            document.getElementById(id).classList.remove('flex');
            document.getElementById(id).classList.add('hidden');
        }
        function doBlock() {
            closePopup('popup-confirm');
            const phone = document.getElementById('input-phone').value || '0987666888';
            document.getElementById('success-phone-num').innerText = phone;
            document.getElementById('popup-success').classList.remove('hidden');
            document.getElementById('popup-success').classList.add('flex');
        }
        function viewChan1ChieuDoc() {
            let phone = document.getElementById('input-phone') ? document.getElementById('input-phone').value : '0987666888';
            if(!phone) phone = '0987666888';
            document.getElementById('doc-phone-num').innerText = phone;
            document.getElementById('popup-chan1chieu-doc').classList.remove('hidden');
            document.getElementById('popup-chan1chieu-doc').classList.add('flex');
            lucide.createIcons();
        }
`;

let content = fs.readFileSync('index.html', 'utf8');

if (!content.includes('id="chan1chieu-flow"')) {
    content = content.replace('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->', htmlModals + '\\n    <!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
}

if (!content.includes('function openChan1Chieu()')) {
    content = content.replace('</body>', jsCode + '\\n</body>');
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Appended everything');
