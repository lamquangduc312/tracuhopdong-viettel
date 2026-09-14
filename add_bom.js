const fs = require('fs');
let content = fs.readFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md');
// Check if it already has a BOM
if (content[0] !== 0xEF || content[1] !== 0xBB || content[2] !== 0xBF) {
    const bom = Buffer.from([0xEF, 0xBB, 0xBF]);
    content = Buffer.concat([bom, content]);
    fs.writeFileSync('TAI_LIEU_NGHIEP_VU_TRA_CUU_HOP_DONG.md', content);
    console.log('Added UTF-8 BOM');
} else {
    console.log('Already has BOM');
}
