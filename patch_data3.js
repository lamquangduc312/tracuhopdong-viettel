const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newDocs = `,
                {
                    id: "DOC-MS05",
                    cat: "bbnt",
                    action: "dau_noi_ts",
                    title: "Biên bản nghiệm thu",
                    code: "BBNT/0988123456-2023",
                    date: "10/01/2023",
                    status: "Đã hoàn thành",
                    statusColor: "slate",
                    typeText: "Biên bản nghiệm thu",
                    desc: "Biên bản nghiệm thu bàn giao thiết bị và dịch vụ viễn thông",
                    pdfTitle: "BIÊN BẢN NGHIỆM THU DỊCH VỤ VIỄN THÔNG"
                },
                {
                    id: "DOC-MS06",
                    cat: "dlcn",
                    action: "dau_noi_ts",
                    title: "Biên bản xác nhận xử lý dữ liệu cá nhân",
                    code: "XNDLCN/0988123456-2023",
                    date: "10/01/2023",
                    status: "Đã xác nhận",
                    statusColor: "emerald",
                    typeText: "Xử lý dữ liệu cá nhân",
                    desc: "Biên bản xác nhận sự đồng ý của khách hàng về việc xử lý dữ liệu cá nhân",
                    pdfTitle: "BIÊN BẢN XÁC NHẬN XỬ LÝ DỮ LIỆU CÁ NHÂN"
                }`;

const start = html.indexOf('id: "DOC-MS04"');
const endObj = html.indexOf('}', start);

if (start > -1 && endObj > -1) {
    html = html.substring(0, endObj + 1) + newDocs + html.substring(endObj + 1);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Inserted successfully!');
} else {
    console.log('Not found');
}
