const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    '<span>Chọn <b>kỳ cước</b> cần tra cứu.</span>',
    '<span><b>Nhập thông tin</b> tương ứng.</span>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched instruction text");
