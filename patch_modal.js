const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startStr = '<!-- Content -->';
const endStr = '<!-- Submit Button -->';
const startIdx = html.indexOf(startStr, html.indexOf('id="modal-rating"'));
const endIdx = html.indexOf(endStr, startIdx);

const newContent = `<!-- Content -->
            <div class="px-4 sm:px-5 pb-4 sm:pb-6 max-h-[65vh] overflow-y-auto no-scrollbar space-y-4">
                
                <!-- Box 1: Chất lượng phục vụ -->
                <div class="bg-[#F3F3F3] rounded-2xl p-3 border border-slate-100 mt-2">
                    <div class="flex items-center gap-2 mb-3">
                        <i data-lucide="award" class="w-4 h-4 text-viettel"></i>
                        <span class="text-[14px] font-bold text-slate-900">Chất lượng phục vụ</span>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4">
                        <p class="text-[13px] text-slate-800 font-medium mb-4 leading-relaxed">
                            Bạn vui lòng đánh giá chất lượng phục vụ của Nhân viên hỗ trợ bằng cách chọn số sao tương ứng với mức độ hài lòng:
                        </p>

                        <!-- Stars -->
                        <div class="flex justify-center gap-3 mb-2 px-1" id="rating-stars-container">
                            <button onclick="setRating(1)" class="transition flex-shrink-0"><i data-lucide="star" class="w-10 h-10 text-slate-300 fill-slate-300 star-icon"></i></button>
                            <button onclick="setRating(2)" class="transition flex-shrink-0"><i data-lucide="star" class="w-10 h-10 text-slate-300 fill-slate-300 star-icon"></i></button>
                            <button onclick="setRating(3)" class="transition flex-shrink-0"><i data-lucide="star" class="w-10 h-10 text-slate-300 fill-slate-300 star-icon"></i></button>
                            <button onclick="setRating(4)" class="transition flex-shrink-0"><i data-lucide="star" class="w-10 h-10 text-slate-300 fill-slate-300 star-icon"></i></button>
                            <button onclick="setRating(5)" class="transition flex-shrink-0"><i data-lucide="star" class="w-10 h-10 text-slate-300 fill-slate-300 star-icon"></i></button>
                        </div>
                        <div class="text-center h-4">
                            <span id="rating-text" class="text-[12px] font-medium text-orange-500 opacity-0 transition-opacity">Bình thường</span>
                        </div>
                    </div>
                </div>

                <!-- Box 2: Nguyên nhân chưa hài lòng (Hidden by default unless rating <= 3) -->
                <div id="rating-reason-block" class="bg-[#F3F3F3] rounded-2xl p-3 border border-slate-100 hidden">
                    <div class="flex items-center gap-2 mb-3">
                        <i data-lucide="award" class="w-4 h-4 text-viettel"></i>
                        <span class="text-[14px] font-bold text-slate-900">Nguyên nhân chưa hài lòng</span>
                    </div>
                    
                    <div class="bg-white rounded-xl p-4">
                        <p class="text-[13px] text-slate-500 mb-4">Điều gì khiến bạn chưa hài lòng?</p>

                        <div class="space-y-3">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <div class="relative flex items-center justify-center flex-shrink-0">
                                    <input type="checkbox" class="peer sr-only" name="rating-reason">
                                    <div class="w-5 h-5 rounded border border-slate-300 peer-checked:bg-viettel peer-checked:border-viettel transition flex items-center justify-center">
                                        <i data-lucide="check" class="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 stroke-[3]"></i>
                                    </div>
                                </div>
                                <span class="text-[14px] text-slate-800">Thái độ phục vụ chưa tốt</span>
                            </label>
                            
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <div class="relative flex items-center justify-center flex-shrink-0">
                                    <input type="checkbox" class="peer sr-only" name="rating-reason">
                                    <div class="w-5 h-5 rounded border border-slate-300 peer-checked:bg-viettel peer-checked:border-viettel transition flex items-center justify-center">
                                        <i data-lucide="check" class="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 stroke-[3]"></i>
                                    </div>
                                </div>
                                <span class="text-[14px] text-slate-800">Chưa hỗ trợ được khách hàng</span>
                            </label>

                            <label class="flex items-center gap-3 cursor-pointer group">
                                <div class="relative flex items-center justify-center flex-shrink-0">
                                    <input type="checkbox" class="peer sr-only" name="rating-reason">
                                    <div class="w-5 h-5 rounded border border-slate-300 peer-checked:bg-viettel peer-checked:border-viettel transition flex items-center justify-center">
                                        <i data-lucide="check" class="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 stroke-[3]"></i>
                                    </div>
                                </div>
                                <span class="text-[14px] text-slate-800">Phục vụ chậm</span>
                            </label>

                            <label class="flex items-center gap-3 cursor-pointer group">
                                <div class="relative flex items-center justify-center flex-shrink-0">
                                    <input type="checkbox" class="peer sr-only" name="rating-reason" onchange="toggleOtherReason(this)">
                                    <div class="w-5 h-5 rounded border border-slate-300 peer-checked:bg-viettel peer-checked:border-viettel transition flex items-center justify-center">
                                        <i data-lucide="check" class="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 stroke-[3]"></i>
                                    </div>
                                </div>
                                <span class="text-[14px] text-slate-800">Lý do khác</span>
                            </label>
                        </div>
                        
                        <div id="other-reason-input" class="mt-3 hidden transition-all">
                            <input type="text" placeholder="Nhập lý do..." class="w-full text-sm px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-viettel focus:ring-1 focus:ring-viettel text-slate-800 bg-white">
                        </div>
                    </div>
                </div>

                `;

if (startIdx > -1 && endIdx > -1) {
    html = html.substring(0, startIdx) + newContent + html.substring(endIdx);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Success rewrite content!");
} else {
    console.log("Could not find insert point.");
}
