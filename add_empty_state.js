const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const emptyStateHTML = `
            <!-- Empty State (Hidden by default) -->
            <div id="tracuu-donhang-empty" class="hidden flex-col items-center justify-center flex-1 mt-20">
                <div class="relative w-28 h-28 mb-4">
                    <div class="absolute inset-0 bg-gradient-to-tr from-viettel to-pink-400 rounded-2xl opacity-20 blur-xl"></div>
                    <div class="w-full h-full flex items-center justify-center relative">
                        <i data-lucide="folder-search" class="w-20 h-20 text-viettel drop-shadow-md"></i>
                    </div>
                </div>
                <div class="text-[15px] font-bold text-slate-800">Không tìm thấy kết quả</div>
            </div>
`;

// Add id to Orders List
html = html.replace('<div class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 pb-8">', '<div id="tracuu-donhang-list" class="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 pb-8">');

// Insert Empty state right before the Orders List
html = html.replace('<div id="tracuu-donhang-list"', emptyStateHTML + '\n            <div id="tracuu-donhang-list"');

// Add a toggle function to the JS
const toggleScript = `
        function toggleOrderEmptyState() {
            const list = document.getElementById('tracuu-donhang-list');
            const empty = document.getElementById('tracuu-donhang-empty');
            if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
                empty.classList.add('hidden');
                empty.classList.remove('flex');
            } else {
                list.classList.add('hidden');
                empty.classList.remove('hidden');
                empty.classList.add('flex');
            }
        }
`;

html = html.replace('function closeTraCuuDonHang() {', toggleScript + '\n        function closeTraCuuDonHang() {');

// Add a secret button to toggle empty state for demo purposes
// We'll add it on the "Đơn hàng của tôi" title click
html = html.replace('<h2 class="text-base font-bold text-slate-900">Đơn hàng của tôi</h2>', '<h2 class="text-base font-bold text-slate-900 cursor-pointer" onclick="toggleOrderEmptyState()">Đơn hàng của tôi</h2>');

fs.writeFileSync('index.html', html);
console.log('done');
