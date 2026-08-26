const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add id="tech-support-section" to the tech support block
html = html.replace(
    /<div>\s*<h3 class="text-\[11px\] font-semibold text-slate-500 mb-2">Nhân viên hỗ trợ kĩ thuật<\/h3>/g,
    '<div id="tech-support-section">\n                        <h3 class="text-[11px] font-semibold text-slate-500 mb-2">Nhân viên hỗ trợ kĩ thuật</h3>'
);

// 2. Update navigateToSupportScreen to accept source argument
html = html.replace(
    /function navigateToSupportScreen\(\) \{\s*document\.getElementById\('screen-home'\)\.classList\.add\('hidden'\);\s*document\.getElementById\('screen-support'\)\.classList\.remove\('hidden'\);\s*\}/g,
    `function navigateToSupportScreen(source) {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-support').classList.remove('hidden');
            const techSection = document.getElementById('tech-support-section');
            if (techSection) {
                if (source === 'mobile') {
                    techSection.classList.add('hidden');
                } else {
                    techSection.classList.remove('hidden');
                }
            }
        }`
);

// 3. Update the existing 'Nhân viên hỗ trợ' in Internet tab to pass 'internet'
html = html.replace(
    /onclick="navigateToSupportScreen\(\)" class="mt-4 bg-white rounded-2xl p-3\.5 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"/g,
    'onclick="navigateToSupportScreen(\'internet\')" class="mt-4 bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"'
);
// And also check if there are any others
html = html.replace(
    /onclick="navigateToSupportScreen\(\)"/g,
    'onclick="navigateToSupportScreen(\'internet\')"'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Success JS patch!");
