const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    'btnSubmit.className = "w-full mt-5 py-3.5 rounded-full bg-slate-900 text-white text-sm font-bold transition-all flex items-center justify-center hover:bg-slate-800 shadow-md";',
    'btnSubmit.className = "w-full mt-5 py-3.5 rounded-full bg-black text-white text-sm font-bold transition-all flex items-center justify-center hover:bg-slate-800 shadow-md";'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched 4 star btn");
