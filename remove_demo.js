const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove Demo Switcher
const demoSwitcherStart = html.indexOf('<!-- DEMO SWITCHER -->');
if (demoSwitcherStart !== -1) {
    const demoSwitcherEnd = html.indexOf('<!-- SUMMARY CARD CONTAINER -->', demoSwitcherStart);
    if (demoSwitcherEnd !== -1) {
        html = html.substring(0, demoSwitcherStart) + html.substring(demoSwitcherEnd);
    }
}

// 2. Remove Document Search Bar
const searchBarStart = html.indexOf('<!-- Search Input - Enhanced for Mobile -->');
if (searchBarStart !== -1) {
    const searchBarEnd = html.indexOf('<!-- CATEGORY FILTER TABS - 2 Main Categories -->', searchBarStart);
    if (searchBarEnd !== -1) {
        html = html.substring(0, searchBarStart) + html.substring(searchBarEnd);
    }
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Removed demo switcher and search bar.");
