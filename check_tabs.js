const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const mobileStart = html.indexOf('id="home-mobile-content"');
console.log("MOBILE TAB:\n", html.substring(mobileStart, mobileStart + 1500));

const internetStart = html.indexOf('id="home-internet-content"');
console.log("\n\nINTERNET TAB:\n", html.substring(internetStart, internetStart + 1500));
