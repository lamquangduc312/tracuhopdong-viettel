const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetBlock = `            <button onclick="navigateToContractScreen()" class="flex flex-col items-center text-slate-400 hover:text-viettel flex-1">
                <i data-lucide="file-check" class="w-6 h-6"></i>
                <span class="text-[11px] font-medium mt-1">Hợp đồng</span>
            </button>`;

if(html.includes(targetBlock)) {
    html = html.replace(targetBlock, '');
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Successfully removed Hợp đồng from bottom nav.");
} else {
    console.log("Could not find the target block exactly. Doing a broader regex search.");
    // Fallback: replace using regex if spacing is different
    html = html.replace(/<button onclick="navigateToContractScreen\(\)" class="flex flex-col items-center text-slate-400 hover:text-viettel flex-1">[\s\S]*?<span class="text-\[11px\] font-medium mt-1">Hợp đồng<\/span>\s*<\/button>/, '');
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Replaced with regex.");
}
