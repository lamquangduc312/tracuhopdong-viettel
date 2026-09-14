const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldOtpFormRegex = /<div id="otp-form" class="hidden bg-white rounded-2xl p-5 shadow-sm border border-slate-200 text-center space-y-4">[\s\S]*?<\/div>\s*<!-- STANDARD VIEW CONTAINER -->/m;

const newOtpForm = `<div id="otp-form" class="hidden bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-4 relative max-w-sm mx-auto">
                        <button onclick="document.getElementById('otp-form').classList.add('hidden'); document.getElementById('other-search-form').classList.remove('hidden');" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                        <h3 class="text-[20px] font-bold text-slate-900 text-left pt-2">Nhập mã xác nhận</h3>
                        <p class="text-[14px] text-slate-600 text-left leading-relaxed mt-1">
                            Vui lòng nhập OTP được gửi về số <b id="otp-phone-display" class="text-slate-900 font-bold">098***888</b> để tra cứu hợp đồng.
                        </p>
                        
                        <div class="flex justify-between gap-2 mt-6 mb-4">
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal" autofocus>
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal">
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal">
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal">
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal">
                            <input type="text" maxlength="1" inputmode="numeric" placeholder="-" class="w-[14%] aspect-square text-center text-xl font-bold bg-slate-100/80 border-none rounded-2xl focus:bg-white focus:border-2 focus:border-viettel focus:ring-4 focus:ring-viettel/10 outline-none transition-all placeholder:text-slate-400 placeholder:font-normal">
                        </div>
                        
                        <div class="flex justify-between items-center text-[13px] mt-2 mb-6">
                            <span class="text-slate-600 font-medium">Mã OTP hết hạn sau <span class="font-bold text-slate-800">04:05</span></span>
                            <span class="text-slate-500 font-medium">Gửi lại OTP <span class="text-viettel font-bold">(00:52)</span></span>
                        </div>
                        
                        <div class="flex gap-3 mt-6">
                            <button onclick="document.getElementById('otp-form').classList.add('hidden'); document.getElementById('other-search-form').classList.remove('hidden');" class="flex-1 py-3.5 bg-white text-slate-800 border border-slate-800 text-[15px] font-bold rounded-[14px] transition active:scale-95">
                                Đóng
                            </button>
                            <button onclick="handleVerifyOTP()" class="flex-1 py-3.5 bg-[#e5e5e5] text-[#999999] text-[15px] font-bold rounded-[14px] transition active:scale-95 pointer-events-none" id="btn-verify-otp">
                                Xác nhận
                            </button>
                        </div>
                    </div>

                    <!-- STANDARD VIEW CONTAINER -->`;

html = html.replace(oldOtpFormRegex, newOtpForm);
fs.writeFileSync('index.html', html, 'utf8');
console.log('UI updated');
