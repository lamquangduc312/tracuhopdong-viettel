const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// I also need to update the color of the active stars and the text "Bình thường" to match the screenshot.
// The screenshot shows orange-yellow stars. "text-yellow-400" is fine.
// The text "Bình thường" is orange.
// Let's modify the stars container a bit if needed.

html = html.replace(
    /if \(stars === 0\) \{[\s\S]*?\} else \{/,
    `if (stars === 0) {
                textEl.classList.add('opacity-0');
                btnSubmit.disabled = true;
                btnSubmit.className = "w-full mt-4 py-3.5 rounded-full bg-slate-100 text-slate-400 text-sm font-bold transition-all flex items-center justify-center disabled:opacity-70";
                if(reasonBlock) reasonBlock.classList.add('hidden');
            } else {`
);

// We need to change the checkmark class to peer-checked:bg-[#EE0033] peer-checked:border-[#EE0033] 
html = html.replace(/peer-checked:bg-viettel peer-checked:border-viettel/g, 'peer-checked:bg-white peer-checked:border-viettel');
// Wait, the checkboxes in the image are empty squares with grey borders. When checked they probably get a checkmark.
// But the user image shows them unchecked. So `bg-white` is fine.

fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched setRating btnSubmit class");
