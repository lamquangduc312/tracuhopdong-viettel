const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The string currently in the code is: Mã hợp đồng: 656190090
html = html.replace(/Mã hợp đồng: 656190090/g, 'Số hợp đồng: 656190090/APP_VIETTEL/30082026');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Replaced Mã hợp đồng: 656190090 with Số hợp đồng: 656190090/APP_VIETTEL/30082026');
