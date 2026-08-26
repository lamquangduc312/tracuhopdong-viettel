const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update filter logic
html = html.replace(
    /matchCat = doc\.cat === 'hd' \|\| doc\.cat === 'pl';/g,
    "matchCat = doc.cat === 'hd' || doc.cat === 'pl' || doc.cat === 'bbnt';"
);

// 2. Add catIcon for bbnt
html = html.replace(
    /if \(doc\.cat === 'dlcn'\) catIcon = "🔒";/g,
    "if (doc.cat === 'dlcn') catIcon = \"🔒\";\n                if (doc.cat === 'bbnt') catIcon = \"✔️\";"
);

// 3. Add categoryColor for bbnt
html = html.replace(
    /if \(doc\.cat === 'dlcn'\) categoryColor = "bg-rose-50 text-rose-700 border-rose-200";/g,
    "if (doc.cat === 'dlcn') categoryColor = \"bg-rose-50 text-rose-700 border-rose-200\";\n                if (doc.cat === 'bbnt') categoryColor = \"bg-teal-50 text-teal-700 border-teal-200\";"
);

// 4. Add data to mobile_postpaid
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

// Insert into mobile_postpaid array before the closing bracket
const pycEnd = html.indexOf('PHIẾU YÊU CẦU THAY ĐỔI DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ SAU (BM01.TĐTS.CN)"\n                }');
if (pycEnd > -1) {
    const insertPoint = pycEnd + 'PHIẾU YÊU CẦU THAY ĐỔI DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ SAU (BM01.TĐTS.CN)"\n                }'.length;
    html = html.substring(0, insertPoint) + newDocs + html.substring(insertPoint);
} else {
    console.log("Could not find insert point for mobile_postpaid data.");
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Patched JS logic and data!');
