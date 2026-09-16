const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/<button onclick="openChan1Chieu\(\)"/g, '<button id="btn-chan-1-chieu" style="display: flex;" onclick="openChan1Chieu()"');

content = content.replace(
    /<button class="flex-1 py-1\.5 px-2 rounded-full text-center text-white\/80 hover:text-white transition">\s*<i data-lucide="smartphone"/s,
    '<button onclick="switchTab(\\'mobile\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn active-tab bg-white text-viettel font-bold shadow-md">\n                            <i data-lucide="smartphone"'
);
content = content.replace(
    /<button class="flex-1 py-1\.5 px-2 rounded-full text-center bg-white text-viettel font-bold shadow-md transition">\s*<i data-lucide="home"/s,
    '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\n                            <i data-lucide="home"'
);
content = content.replace(
    /<button class="flex-1 py-1\.5 px-2 rounded-full text-center text-white\/80 hover:text-white transition">\s*<i data-lucide="video"/s,
    '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\n                            <i data-lucide="video"'
);
content = content.replace(
    /<button class="flex-1 py-1\.5 px-2 rounded-full text-center text-white\/80 hover:text-white transition">\s*<i data-lucide="tv"/s,
    '<button onclick="switchTab(\\'other\\', this)" class="flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition tab-btn">\n                            <i data-lucide="tv"'
);

// Fix syntax errors by using backticks without nested single quotes in replacement string
content = content.replace(
    "switchTab(\\'mobile\\', this)",
    "switchTab('mobile', this)"
).replace(
    "switchTab(\\'other\\', this)",
    "switchTab('other', this)"
).replace(
    "switchTab(\\'other\\', this)",
    "switchTab('other', this)"
).replace(
    "switchTab(\\'other\\', this)",
    "switchTab('other', this)"
);

if(!content.includes('function switchTab')) {
    const jsCode = \`function switchTab(type, el) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-viettel', 'font-bold', 'shadow-md', 'active-tab');
                btn.classList.add('text-white/80', 'hover:text-white');
            });
            if(el) {
                el.classList.add('bg-white', 'text-viettel', 'font-bold', 'shadow-md', 'active-tab');
                el.classList.remove('text-white/80', 'hover:text-white');
            }
            if(type === 'mobile') {
                document.getElementById('btn-chan-1-chieu').style.display = 'flex';
                document.getElementById('title-tien-ich').innerText = 'Tiện ích Di động';
            } else {
                document.getElementById('btn-chan-1-chieu').style.display = 'none';
                document.getElementById('title-tien-ich').innerText = 'Tiện ích khác';
            }
        }

        // Initialize\`;

    content = content.replace('// Initialize', jsCode);
    content = content.replace(/<h3 class="text-\\[16px\\] font-bold text-slate-900 px-4 mb-3">Tiện ích Di động<\\/h3>/g, '<h3 id="title-tien-ich" class="text-[16px] font-bold text-slate-900 px-4 mb-3">Tiện ích Di động</h3>');
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Tab switching logic added successfully.');
