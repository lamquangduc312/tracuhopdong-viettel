const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add vContract and Viettel Post tabs
const searchTabsStr = `<button id="btn-acc-tab-mysign" onclick="switchAccountTab('mysign')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">MySign</button>`;
const insertTabsStr = `<button id="btn-acc-tab-mysign" onclick="switchAccountTab('mysign')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">MySign</button>
                            <button id="btn-acc-tab-vcontract" onclick="switchAccountTab('vcontract')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">vContract</button>
                            <button id="btn-acc-tab-vpost" onclick="switchAccountTab('vpost')" class="pb-3 text-[14px] font-medium text-slate-500 border-b-2 border-transparent">Viettel Post</button>`;
html = html.replace(searchTabsStr, insertTabsStr);

// 2. Add mysign to tabs array in js logic
const jsLogicSearch = `const tabs = ['mobile', 'internet', 'tv', 'tv360', 'camera', 'mysign'];`;
const jsLogicInsert = `const tabs = ['mobile', 'internet', 'tv', 'tv360', 'camera', 'mysign', 'vcontract', 'vpost'];`;
html = html.replace(jsLogicSearch, jsLogicInsert);

// 3. Add MySign tab content
const mysignContentHTML = `
                    <!-- MYSIGN TAB CONTENT -->
                    <div id="acc-content-mysign" class="space-y-3 hidden">
                        <!-- Card -->
                        <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-slate-100">
                            <i data-lucide="pen-tool" class="w-5 h-5 text-viettel fill-viettel"></i>
                            <div class="text-[14px] font-bold text-slate-900">Tài khoản 00108204XXXX</div>
                        </div>
                    </div>
`;

// Insert the MySign content right before the closing div of "Content" in screen-account
// Easiest is to search for TV360 tab content end and insert after
const searchString2 = `</div>
                    </div>
                </div>`; // The end of the last tab content and the end of the content container
// Better way: use regex to replace `<!-- INTERNET TAB CONTENT -->` but I just added tv360, so I can find `<!-- TV360 TAB CONTENT -->` block
const searchString3 = `<!-- TV360 TAB CONTENT -->`;
const insertPos3 = html.indexOf(searchString3);
if (insertPos3 !== -1) {
    html = html.substring(0, insertPos3) + mysignContentHTML + '\n                    ' + html.substring(insertPos3);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched MySign tab content successfully!");
