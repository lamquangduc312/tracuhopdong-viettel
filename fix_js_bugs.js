const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix count-all crash
html = html.replace(
    /document\.getElementById\('count-all'\)\.innerText = filtered\.length;/g,
    "const countAll = document.getElementById('count-all'); if(countAll) countAll.innerText = filtered.length;"
);

// 2. Fix the hardcoded mobile_prepaid bug in confirmAccountSelection
html = html.replace(
    /\/\/ Giả lập dữ liệu trả về cho số mới tìm kiếm[\s\S]*?currentSubscriber = 'mobile_prepaid';[\s\S]*?document\.getElementById\('contract-number-text'\)\.innerText = "91827364";[\s\S]*?document\.getElementById\('subscriber-select'\)\.value = 'other';/g,
    ""
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed count-all and hardcoded prepaid bugs!');
