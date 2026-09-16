const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const startTag = '<!-- TRA CỨU ĐƠN HÀNG FLOW -->';
const endTagStr = '<!-- Padding bottom -->\n            </div>\n        </div>\n    </div>';

const startIdx = html.indexOf(startTag);
const endIdx = html.indexOf(endTagStr) + endTagStr.length;

if (startIdx !== -1 && endIdx !== -1) {
    const flowHtml = html.substring(startIdx, endIdx);
    
    // Remove it from current location
    html = html.substring(0, startIdx) + html.substring(endIdx);
    
    // Insert before END OF MOBILE DEVICE FRAME CONTAINER
    const insertPoint = html.indexOf('<!-- END OF MOBILE DEVICE FRAME CONTAINER -->');
    if (insertPoint !== -1) {
        html = html.substring(0, insertPoint) + flowHtml + '\n    ' + html.substring(insertPoint);
        fs.writeFileSync('index.html', html);
        console.log('Moved flow inside container');
    } else {
        console.log('Could not find insert point');
    }
} else {
    console.log('Could not find flow start/end');
}
