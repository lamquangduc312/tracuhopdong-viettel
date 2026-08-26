const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const ratingStart = html.indexOf('<!-- RATING MODAL -->');
const lucideStart = html.indexOf('<!-- Lucide Icons CDN -->');

if (ratingStart > -1 && lucideStart > ratingStart) {
    // Extract exactly the modals, which are right before the Lucide script
    let modalsHTML = html.substring(ratingStart, lucideStart).trim();
    
    // Remove the modals from head
    html = html.substring(0, ratingStart) + html.substring(lucideStart);
    
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
