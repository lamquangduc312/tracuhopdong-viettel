const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetBlock = `<button onclick="navigateToHomeScreen()" class="flex flex-col items-center -mt-6 flex-1">
                <div class="w-14 h-14 rounded-full bg-viettel text-white font-black text-lg flex items-center justify-center shadow-lg border-2 border-white shadow-red-300">
                    V
                </div>
                <span class="text-[10px] font-extrabold text-viettel mt-1">My Viettel</span>
            </button>`;

const newBlock = `<button onclick="navigateToHomeScreen()" class="flex flex-col items-center text-slate-400 hover:text-slate-700 flex-1">
                <div class="w-6 h-6 rounded-md flex items-center justify-center border-2 border-current font-bold text-sm">
                    V
                </div>
                <span class="text-[11px] font-medium mt-1">My Viettel</span>
            </button>`;

// Try exact match first, but there might be spacing issues.
if (html.includes(targetBlock)) {
    html = html.replace(targetBlock, newBlock);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("UI updated successfully.");
} else {
    // If exact block doesn't match, use regex
    const regex = /<button onclick="navigateToHomeScreen\(\)" class="flex flex-col items-center -mt-6 flex-1">[\s\S]*?<span class="text-\[10px\] font-extrabold text-viettel mt-1">My Viettel<\/span>\s*<\/button>/;
    if (regex.test(html)) {
        html = html.replace(regex, newBlock);
        fs.writeFileSync('index.html', html, 'utf8');
        console.log("UI updated successfully using regex.");
    } else {
        console.error("Could not find the target block to replace.");
    }
}
