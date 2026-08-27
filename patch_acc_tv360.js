const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const tv360ContentHTML = `
                    <!-- TV360 TAB CONTENT -->
                    <div id="acc-content-tv360" class="space-y-3 hidden">
                        <!-- Card 1 -->
                        <div class="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-slate-100">
                            <div class="flex items-start gap-3 flex-1">
                                <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <i data-lucide="tv" class="w-4 h-4 text-viettel"></i>
                                </div>
                                <div class="pr-2">
                                    <div class="text-[14px] font-bold text-slate-900 mb-1">Mã hợp đồng: 652144326</div>
                                    <div class="text-[12px] text-slate-500 leading-snug max-w-[180px]">Phường Hoàng **** Thành phố Hà Nội</div>
                                </div>
                            </div>
                            <button class="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-800 transition active:scale-95">
                                Liên kết ngay
                            </button>
                        </div>
                    </div>
`;

// Insert the TV360 content right before the closing div of "Content" in screen-account
const searchString = `<!-- INTERNET TAB CONTENT -->`;
const insertPos = html.indexOf(searchString);

if (insertPos !== -1) {
    html = html.substring(0, insertPos) + tv360ContentHTML + '\n                    ' + html.substring(insertPos);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Patched TV360 tab content successfully!");
} else {
    console.log("Could not find insert point.");
}
