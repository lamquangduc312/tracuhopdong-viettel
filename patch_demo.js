const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const demoSwitcherHTML = `
                        <!-- DEMO SWITCHER -->
                        <div class="flex overflow-x-auto no-scrollbar gap-2 mb-4 bg-yellow-50 p-2.5 rounded-xl border border-yellow-200">
                            <span class="text-[10px] font-bold text-yellow-700 uppercase tracking-wider flex items-center shrink-0 mr-1">
                                <i data-lucide="flask-conical" class="w-3.5 h-3.5 mr-1"></i> Xem Mẫu:
                            </span>
                            <button onclick="switchDemo('mobile_postpaid')" class="demo-btn px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100 transition whitespace-nowrap">Di động</button>
                            <button onclick="switchDemo('ftth')" class="demo-btn active-demo px-3 py-1.5 bg-viettel border border-viettel rounded-lg text-xs font-bold text-white shadow-sm transition whitespace-nowrap">Internet</button>
                            <button onclick="switchDemo('camera')" class="demo-btn px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100 transition whitespace-nowrap">Camera</button>
                            <button onclick="switchDemo('tv')" class="demo-btn px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100 transition whitespace-nowrap">TV360</button>
                        </div>
`;

// Insert the demo switcher right after <!-- SUMMARY CARD CONTAINER -->
const target = '<!-- SUMMARY CARD CONTAINER -->';
html = html.replace(target, demoSwitcherHTML + '\n                        ' + target);

// Insert the JS function
const jsFunction = `
        function switchDemo(type) {
            currentSubscriber = type;
            
            // Update active button styling
            const btns = document.querySelectorAll('.demo-btn');
            btns.forEach(btn => {
                btn.classList.remove('bg-viettel', 'text-white', 'border-viettel', 'shadow-sm', 'active-demo');
                btn.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
            });
            
            if (event && event.currentTarget) {
                event.currentTarget.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
                event.currentTarget.classList.add('bg-viettel', 'text-white', 'border-viettel', 'shadow-sm', 'active-demo');
            }
            
            // Re-render
            renderDocuments();
            lucide.createIcons();
        }
`;

html = html.replace('function renderDocuments() {', jsFunction + '\n        function renderDocuments() {');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched demo switcher.");
