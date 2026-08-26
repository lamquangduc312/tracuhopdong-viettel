const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const ratingStart = html.indexOf('<!-- RATING MODAL -->');
const headEnd = html.indexOf('</head>');

if (ratingStart > -1 && ratingStart < headEnd) {
    // Extract the modals
    let modalsHTML = html.substring(ratingStart, headEnd).trim();
    
    // Remove them from head
    html = html.substring(0, ratingStart) + html.substring(headEnd);
    
    // Find where to insert (before iPhone Home Bar, which is near the end of iphone-frame)
    const insertPos = html.indexOf('<!-- iPhone Home Bar -->');
    if (insertPos > -1) {
        html = html.substring(0, insertPos) + modalsHTML + '\n\n        ' + html.substring(insertPos);
        fs.writeFileSync('index.html', html, 'utf8');
        console.log('Moved modals successfully!');
    } else {
        console.log('Could not find insert position');
    }
} else {
    console.log('Modals not found in head');
}
