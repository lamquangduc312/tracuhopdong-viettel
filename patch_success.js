const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startStr = '<!-- RATING SUCCESS MODAL -->';
const endStr = '<!-- iPhone Home Bar -->';
const startIdx = html.indexOf(startStr);
const endIdx = html.indexOf(endStr, startIdx);

if (startIdx > -1 && endIdx > -1) {
    const newModal = `<!-- RATING SUCCESS MODAL -->
    <div id="modal-rating-success" class="absolute inset-0 z-[110] hidden flex items-center justify-center px-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm modal-backdrop" onclick="closeRatingSuccessModal()"></div>
        <!-- Popup -->
        <div class="bg-white rounded-3xl w-full max-w-sm p-6 relative z-10 shadow-2xl" id="rating-success-popup">
            <button onclick="closeRatingSuccessModal()" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition active:scale-95">
                <i data-lucide="x" class="w-6 h-6 text-slate-500"></i>
            </button>

            <div class="flex justify-center mb-6 pt-2">
                <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-[#38C617] to-[#80E812] flex items-center justify-center shadow-lg shadow-green-200">
                    <i data-lucide="check" class="w-12 h-12 text-white stroke-[3]"></i>
                </div>
            </div>

            <h3 class="text-[20px] font-bold text-slate-900 mb-3 text-center">Cảm ơn bạn đã phản hồi</h3>
            <p class="text-[14px] text-slate-600 leading-relaxed mb-8 text-center px-2">
                Viettel trân trọng ý kiến của bạn và sẽ tiếp tục nỗ lực để phục vụ bạn tốt hơn mỗi ngày.
            </p>

            <button onclick="closeRatingSuccessModal()" class="w-full py-3.5 rounded-full bg-black text-white text-[15px] font-bold hover:bg-slate-800 transition active:scale-95">
                Kết thúc
            </button>
        </div>
    </div>

    `;
    
    html = html.substring(0, startIdx) + newModal + html.substring(endIdx);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Success patched success modal");
} else {
    console.log("Could not find start/end.");
}
