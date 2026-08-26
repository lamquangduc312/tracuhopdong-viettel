
        // Initialize Lucide Icons
        lucide.createIcons();

        function toggleHistoryLog() {
            alert("Lịch sử thao tác xem trước:\n- 09:16:10 - Xem giao diện Trang chủ My Viettel\n- 09:16:15 - Chọn tra cứu thuê bao FTTH Cố định\n- 09:16:22 - Xem trước Hợp đồng cung cấp dịch vụ (PDF)");
        }

        // Action options list according to Viettel business requirements
        const actionOptions = {
            fixed: [
                { value: "all", label: "-- Tất cả tác động Cố định --" },
{ value: "dau_noi_moi", label: "Đấu nối mới" },
                { value: "chuyen_doi_cong_nghe", label: "Chuyển đổi công nghệ" },
                { value: "chuyen_chu_quyen", label: "Chuyển chủ quyền" }
            ],
            mobile: [
                { value: "all", label: "-- Tất cả tác động Di động --" },
                { value: "dk_thong_tin", label: "Đăng ký thông tin" },
                { value: "dau_noi_tt", label: "Đấu nối thuê bao trả trước" },
                { value: "dau_noi_ts", label: "Đấu nối thuê bao trả sau" },
                { value: "chuyen_tt_sang_ts", label: "Chuyển trả trước sang trả sau" },
                { value: "chuyen_ts_sang_tt", label: "Chuyển trả sau sang trả trước" },
                { value: "chuyen_nhuong_hd", label: "Chuyển nhượng hợp đồng" },
                { value: "thay_doi_tt_hd", label: "Thay đổi thông tin hợp đồng" },
                { value: "doi_sim", label: "Đổi SIM" },
                { value: "thay_doi_tt_kh", label: "Thay đổi thông tin khách hàng" },
                { value: "chuan_hoa_tt", label: "Chuẩn hóa thông tin" },
                { value: "chuyen_nhuong_tb_tt", label: "Chuyển nhượng thuê bao TT" },
                { value: "sua_sai_tt_kh", label: "Sửa sai thông tin khách hàng" },
                { value: "chan_1_chieu", label: "Chặn 1 chiều" },
                { value: "tach_gop_hd", label: "Tách/gộp hợp đồng" }
            ]
        };

        // Complete document mock database
        const documentsData = {
            ftth: [
                {
                    id: "DOC-F01",
                    cat: "hd",
                    action: "dau_noi_moi",
                    title: "Hợp đồng cung cấp và sử dụng dịch vụ viễn thông, truyền hình",
                    code: "0989858785/2022/HĐ-VT",
                    date: "15/10/2022",
                    status: "Đang hiệu lực",
                    statusColor: "emerald",
                    typeText: "Hợp đồng",
                    desc: "Hợp đồng cung cấp và sử dụng dịch vụ viễn thông, truyền hình (BM08.HĐTTCĐ.CN)",
                    pdfTitle: "HỢP ĐỒNG CUNG CẤP VÀ SỬ DỤNG DỊCH VỤ VIỄN THÔNG, TRUYỀN HÌNH (BM08.HĐTTCĐ.CN)"
                },
                {
                    id: "DOC-F02",
                    cat: "pl",
                    action: "chuyen_doi_cong_nghe",
                    title: "Phụ lục Hợp đồng",
                    code: "PL-2023/SN1-300M",
                    date: "20/05/2023",
                    status: "Đã ký MySign",
                    statusColor: "blue",
                    typeText: "Phụ lục hợp đồng",
                    desc: "Phụ lục mô tả chi tiết các dịch vụ viễn thông, truyền hình và quy định về chất lượng dịch vụ",
                    pdfTitle: "PHỤ LỤC MÔ TẢ CHI TIẾT CÁC DỊCH VỤ VIỄN THÔNG, TRUYỀN HÌNH VÀ QUY ĐỊNH VỀ CHẤT LƯỢNG DỊCH VỤ"
                },
                {
                    id: "DOC-F03",
                    cat: "pyc",
                    action: "chuyen_chu_quyen",
                    title: "Phiếu yêu cầu thay đổi dịch vụ viễn thông cố định mặt đất (Hình thức trả trước)",
                    code: "PYC-CCQ/2024-0012",
                    date: "05/01/2024",
                    status: "Đã duyệt",
                    statusColor: "emerald",
                    typeText: "Phiếu YC thay đổi DV cố định",
                    desc: "Phiếu yêu cầu thay đổi dịch vụ viễn thông cố định mặt đất (Hình thức trả trước) (BM08.TĐTTCĐ.CN)",
                    pdfTitle: "PHIẾU YÊU CẦU THAY ĐỔI DỊCH VỤ VIỄN THÔNG CỐ ĐỊNH MẶT ĐẤT (HÌNH THỨC TRẢ TRƯỚC) (BM08.TĐTTCĐ.CN)"
                },
                {
                    id: "DOC-F04",
                    cat: "pyc",
                    action: "huy_dich_vu",
                    title: "Phiếu yêu cầu hủy dịch vụ viễn thông cố định",
                    code: "PYC-HUY/2024-0089",
                    date: "20/02/2024",
                    status: "Đã xử lý",
                    statusColor: "blue",
                    typeText: "Phiếu YC hủy dịch vụ",
                    desc: "Phiếu yêu cầu hủy dịch vụ viễn thông cố định mặt đất (BM08.TĐTTCĐ.CN)",
                    pdfTitle: "PHIẾU YÊU CẦU HỦY DỊCH VỤ VIỄN THÔNG CỐ ĐỊNH MẶT ĐẤT (BM08.TĐTTCĐ.CN)"
                }
            ],
            mobile_prepaid: [
                {
                    id: "DOC-MP01",
                    cat: "hd",
                    action: "dau_noi_tt",
                    title: "Hợp đồng cung cấp và sử dụng dịch vụ di động mặt đất hình thức thanh toán trả trước",
                    code: "HĐ-MOBI-TT/0986668888",
                    date: "12/03/2023",
                    status: "Hoàn thành",
                    statusColor: "emerald",
                    typeText: "Hợp đồng Mobile trả trước",
                    desc: "Hợp đồng cung cấp và sử dụng dịch vụ di động mặt đất hình thức thanh toán trả trước (BM02.HĐTT.CN)",
                    pdfTitle: "HỢP ĐỒNG CUNG CẤP VÀ SỬ DỤNG DỊCH VỤ DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ TRƯỚC (BM02.HĐTT.CN)"
                },
                {
                    id: "DOC-MP02",
                    cat: "pyc",
                    action: "dk_thong_tin",
                    title: "Bản xác nhận thông tin thuê bao khi đăng ký dịch vụ viễn thông di động mặt đất hình thức trả trước",
                    code: "PYC-TT/0986668888-2023",
                    date: "12/03/2023",
                    status: "Đã duyệt eKYC",
                    statusColor: "emerald",
                    typeText: "Phiếu yêu cầu cung cấp dịch vụ trả trước",
                    desc: "Bản xác nhận thông tin thuê bao khi đăng ký dịch vụ viễn thông di động mặt đất hình thức trả trước (BM03.ĐKTT.CN)",
                    pdfTitle: "BẢN XÁC NHẬN THÔNG TIN THUÊ BAO KHI ĐĂNG KÝ DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC TRẢ TRƯỚC (BM03.ĐKTT.CN)"
                },
                {
                    id: "DOC-MP03",
                    cat: "pyc",
                    action: "thay_doi_tt_kh",
                    title: "Phiếu yêu cầu thay đổi dịch vụ viễn thông di động mặt đất hình thức thanh toán trả trước",
                    code: "PYC-TD-TT/2024-88",
                    date: "10/01/2024",
                    status: "Đã xử lý",
                    statusColor: "blue",
                    typeText: "Phiếu YC thay đổi dịch vụ trả trước",
                    desc: "Phiếu yêu cầu thay đổi dịch vụ viễn thông di động mặt đất hình thức thanh toán trả trước (BM02.YCTT.CN)",
                    pdfTitle: "PHIẾU YÊU CẦU THAY ĐỔI DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ TRƯỚC (BM02.YCTT.CN)"
                }
            ],
            mobile_postpaid: [
                {
                    id: "DOC-MS01",
                    cat: "hd",
                    action: "dau_noi_ts",
                    title: "Hợp đồng cung cấp và sử dụng dịch vụ viễn thông, truyền hình",
                    code: "HD-DIĐONG/0988123456",
                    date: "10/01/2023",
                    status: "Đang hiệu lực",
                    statusColor: "emerald",
                    typeText: "Hợp đồng",
                    desc: "Hợp đồng cung cấp và sử dụng dịch vụ viễn thông, truyền hình (BM01.HĐTS.CN)",
                    pdfTitle: "HỢP ĐỒNG CUNG CẤP VÀ SỬ DỤNG DỊCH VỤ VIỄN THÔNG, TRUYỀN HÌNH (BM01.HĐTS.CN)"
                },
                {
                    id: "DOC-MS02",
                    cat: "pl",
                    action: "dau_noi_ts",
                    title: "Phụ lục hợp đồng di động trả sau",
                    code: "PL-HDDD/0988123456-2023",
                    date: "10/01/2023",
                    status: "Đang hiệu lực",
                    statusColor: "blue",
                    typeText: "Phụ lục hợp đồng di động trả sau",
                    desc: "Phụ lục mô tả chi tiết các dịch vụ di động trả sau và quy định chất lượng dịch vụ (BM01.YCTS.CN)",
                    pdfTitle: "PHỤ LỤC HỢP ĐỒNG CÁC DỊCH VỤ VIỄN THÔNG DI ĐỘNG HÌNH THỨC THANH TOÁN TRẢ SAU"
                },
                {
                    id: "DOC-MS03",
                    cat: "pyc",
                    action: "dau_noi_ts",
                    title: "Phiếu yêu cầu cung cấp dịch vụ viễn thông di động mặt đất hình thức thanh toán trả sau",
                    code: "PYC-TS/0988123456-2023",
                    date: "10/01/2023",
                    status: "Đã duyệt",
                    statusColor: "emerald",
                    typeText: "Phiếu YC cung cấp dịch vụ trả sau",
                    desc: "Phiếu yêu cầu cung cấp dịch vụ viễn thông di động mặt đất hình thức thanh toán trả sau (BM01.YCTS.CN)",
                    pdfTitle: "PHIẾU YÊU CẦU CUNG CẤP DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ SAU (BM01.YCTS.CN)"
                },
                {
                    id: "DOC-MS04",
                    cat: "pyc",
                    action: "thay_doi_dv",
                    title: "Phiếu yêu cầu thay đổi dịch vụ viễn thông di động mặt đất hình thức thanh toán trả sau",
                    code: "PYC-TĐTS/2023-882",
                    date: "10/01/2023",
                    status: "Đã duyệt",
                    statusColor: "emerald",
                    typeText: "Phiếu YC thay đổi dịch vụ trả sau",
                    desc: "Phiếu yêu cầu thay đổi dịch vụ viễn thông di động mặt đất hình thức thanh toán trả sau (BM01.TĐTS.CN)",
                    pdfTitle: "PHIẾU YÊU CẦU THAY ĐỔI DỊCH VỤ VIỄN THÔNG DI ĐỘNG MẶT ĐẤT HÌNH THỨC THANH TOÁN TRẢ SAU (BM01.TĐTS.CN)"
                },
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
                }
            ],
            tv: [
                {
                    id: "DOC-TV01",
                    cat: "hd",
                    action: "dau_noi_moi",
                    title: "Hợp đồng Cung cấp và Sử dụng Dịch vụ Viễn thông, Truyền hình",
                    code: "HD-TV360/2023-098",
                    date: "10/03/2023",
                    status: "Đang hiệu lực",
                    statusColor: "emerald",
                    typeText: "Hợp đồng",
                    desc: "Hợp đồng cung cấp và sử dụng dịch vụ viễn thông, truyền hình (BM08.HĐTTCĐ.CN)",
                    pdfTitle: "HỢP ĐỒNG CUNG CẤP VÀ SỬ DỤNG DỊCH VỤ VIỄN THÔNG, TRUYỀN HÌNH (BM08.HĐTTCĐ.CN)"
                },
                {
                    id: "DOC-TV02",
                    cat: "dlcn",
                    action: "dau_noi_moi",
                    title: "Bản xác nhận Xử lý Dữ liệu Cá nhân (Dịch vụ TV360)",
                    code: "XNDLCN-TV360/2023",
                    date: "10/03/2023",
                    status: "Đã xác nhận",
                    statusColor: "emerald",
                    typeText: "Bản xác nhận dữ liệu",
                    desc: "Xác nhận xử lý thông tin tài khoản TV360 theo Nghị định 13",
                    pdfTitle: "BẢN XÁC NHẬN CHẤP THUẬN XỬ LÝ DỮ LIỆU CÁ NHÂN"
                }
            ],
            camera: [
                {
                    id: "DOC-CAM01",
                    cat: "hd",
                    action: "dau_noi_moi",
                    title: "Hợp đồng Dịch vụ Viettel Home Camera Cloud",
                    code: "0989858785/2023/HĐ-CAM",
                    date: "05/08/2023",
                    status: "Đang hiệu lực",
                    statusColor: "emerald",
                    typeText: "Hợp đồng gốc",
                    desc: "Hợp đồng giám sát camera an ninh Cloud Viettel",
                    pdfTitle: "HỢP ĐỒNG DỊCH VỤ CAMERA CLOUD"
                },
                {
                    id: "DOC-CAM02",
                    cat: "dlcn",
                    action: "dau_noi_moi",
                    title: "Bản xác nhận Xử lý Dữ liệu Cá nhân (Camera Cloud)",
                    code: "XNDLCN-CAM/2023",
                    date: "05/08/2023",
                    status: "Đã xác nhận",
                    statusColor: "emerald",
                    typeText: "Bản xác nhận dữ liệu",
                    desc: "Bản đồng ý xử lý hình ảnh và dữ liệu lưu trữ đám mây theo NĐ 13/2023/NĐ-CP",
                    pdfTitle: "BẢN XÁC NHẬN CHẤP THUẬN XỬ LÝ DỮ LIỆU CÁ NHÂN"
                }
            ]
        };

        let currentSubscriber = 'ftth';
        let currentAction = 'all';
        let currentCategory = 'hopdong';

        // Initialize contract screen components
        function initContractScreen() {
            populateActionDropdown(currentSubscriber);
            updateDossierRequiredBanner();

            // Set first tab as active
            const catButtons = document.querySelectorAll('.cat-btn');
            catButtons.forEach((btn, idx) => {
                if (idx === 0) {
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                    btn.classList.add('bg-viettel', 'text-white', 'border-viettel', 'shadow-md');
                } else {
                    btn.classList.remove('bg-viettel', 'text-white', 'border-viettel', 'shadow-md');
                    btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                }
            });

            renderDocuments();
        }

        // Populate action type dropdown based on subscriber category
        function populateActionDropdown(subType) {
            const actionSelect = document.getElementById('action-select');
            if (!actionSelect) return; // Bỏ qua nếu element đã bị xoá khỏi UI
            
            let isMobile = (subType === 'mobile_prepaid' || subType === 'mobile_postpaid');
            let optionsList = isMobile ? actionOptions.mobile : actionOptions.fixed;

            actionSelect.innerHTML = optionsList.map(opt => `
                <option value="${opt.value}">${opt.label}</option>
            `).join('');
            currentAction = 'all';
        }

        // Update legal dossier requirements banner
        function updateDossierRequiredBanner() {
            const contractNum = document.getElementById('contract-number-text');

            if (currentSubscriber === 'mobile_prepaid') {
                contractNum.innerText = "27384910";
            } else if (currentSubscriber === 'mobile_postpaid') {
                contractNum.innerText = "59203814";
            } else {
                contractNum.innerText = "88572102";
            }
        }

        // Switch subscriber selection
        function switchSubscriber(val) {
            currentSubscriber = val;
            
            const stdView = document.getElementById('standard-view');
            const searchForm = document.getElementById('other-search-form');
            const summaryBox = document.getElementById('contract-summary-box');
            const otpForm = document.getElementById('otp-form');

            if (val === 'other') {
                stdView.classList.add('hidden');
                summaryBox.classList.add('hidden');
                searchForm.classList.remove('hidden');
                otpForm.classList.add('hidden');
            } else {
                stdView.classList.remove('hidden');
                summaryBox.classList.remove('hidden');
                searchForm.classList.add('hidden');
                otpForm.classList.add('hidden');
                
                populateActionDropdown(val);
                updateDossierRequiredBanner();
                renderDocuments();
            }
        }

        function confirmAccountSelection() {
            const selectedRadio = document.querySelector('input[name="accountSelect"]:checked');
            if(selectedRadio) {
                const val = selectedRadio.value;
                let text = "";
                if(val === 'mobile_prepaid') text = "Di động trả trước_0986 668 888";
                else if(val === 'mobile_postpaid') text = "Di động trả sau_0988 123 456";
                else if(val === 'ftth') text = "Internet_0989 858 785";
                else if(val === 'tv') text = "TV360_0989 858 785";
                else if(val === 'camera') text = "Camera_0989 858 785";
                else if(val === 'other') text = "Tài khoản khác";

                document.getElementById('selected-account-text').innerText = text;
                document.getElementById('account-modal').classList.add('hidden');
                
                switchSubscriber(val);
            }
        }

        // Xử lý đổi Placeholder khi chọn radio
        function updateSearchPlaceholder(val) {
            const input = document.getElementById('other-input');
            input.placeholder = "Nhập " + val.toLowerCase() + " *";
            checkFormValid();
        }

        // Bật/tắt nút Tra cứu nếu có nhập liệu
        function checkFormValid() {
            const input = document.getElementById('other-input');
            const btn = document.getElementById('btn-search-other');
            if(input.value.trim().length > 0) {
                btn.disabled = false;
                btn.classList.remove('bg-slate-200', 'text-slate-400');
                btn.classList.add('bg-viettel', 'text-white', 'shadow-md', 'shadow-red-200', 'hover:bg-viettel-dark');
            } else {
                btn.disabled = true;
                btn.classList.add('bg-slate-200', 'text-slate-400');
                btn.classList.remove('bg-viettel', 'text-white', 'shadow-md', 'shadow-red-200', 'hover:bg-viettel-dark');
            }
        }

        // Xử lý Gửi yêu cầu tra cứu thuê bao khác
        function handleSearchOther() {
            const inputVal = document.getElementById('other-input').value;
            if(!inputVal) return;
            
            // Chuyển sang màn hình OTP
            document.getElementById('other-search-form').classList.add('hidden');
            document.getElementById('otp-form').classList.remove('hidden');
            lucide.createIcons();
        }

        // Xử lý Xác nhận OTP
        function handleVerifyOTP() {
            // Ẩn OTP, hiện lại view tiêu chuẩn
            document.getElementById('otp-form').classList.add('hidden');
            document.getElementById('standard-view').classList.remove('hidden');
            document.getElementById('contract-summary-box').classList.remove('hidden');
            
            // Giả lập dữ liệu trả về cho số mới tìm kiếm (lấy form cố định hoặc di động)
            currentSubscriber = 'mobile_prepaid'; 
            document.getElementById('contract-number-text').innerText = "91827364";
            document.getElementById('subscriber-select').value = 'other';
            updateDossierRequiredBanner();
            renderDocuments();
        }

        // Switch action type
        function switchActionType(val) {
            currentAction = val;
            renderDocuments();
        }

        // Navigation handlers
        // Home tab switching
        function switchHomeTab(tab) {
            const btnMobile = document.getElementById('tab-btn-mobile');
            const btnInternet = document.getElementById('tab-btn-internet');
            const contentMobile = document.getElementById('home-mobile-content');
            const contentInternet = document.getElementById('home-internet-content');

            if (tab === 'mobile') {
                btnMobile.className = 'flex-1 py-1.5 px-2 rounded-full text-center bg-white text-viettel font-bold shadow-md transition';
                btnInternet.className = 'flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition';
                contentMobile.classList.remove('hidden');
                contentInternet.classList.add('hidden');
            } else {
                btnInternet.className = 'flex-1 py-1.5 px-2 rounded-full text-center bg-white text-viettel font-bold shadow-md transition';
                btnMobile.className = 'flex-1 py-1.5 px-2 rounded-full text-center text-white/80 hover:text-white transition';
                contentInternet.classList.remove('hidden');
                contentMobile.classList.add('hidden');
            }
        }


        function navigateToSupportScreen() {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-support').classList.remove('hidden');
        }

        function navigateBackFromSupport() {
            document.getElementById('screen-support').classList.add('hidden');
            document.getElementById('screen-home').classList.remove('hidden');
        }

        function navigateToContractScreenMobile() {

            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-contract').classList.remove('hidden');
            initContractScreen();
            
            // Auto select mobile prepaid
            document.getElementById('selected-account-text').innerText = "Di động trả trước_0986 668 888";
            const radio = document.querySelector('input[value="mobile_prepaid"]');
            if(radio) radio.checked = true;
            switchSubscriber('mobile_prepaid');
        }

        function navigateToContractScreen() {
            document.getElementById('screen-home').classList.add('hidden');
            document.getElementById('screen-contract').classList.remove('hidden');
            initContractScreen();
        }

        function navigateToHomeScreen() {
            document.getElementById('screen-contract').classList.add('hidden');
            document.getElementById('screen-home').classList.remove('hidden');
        }

        // Filter categories
        function filterCategory(cat) {
            currentCategory = cat;
            
            const buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-viettel', 'text-white', 'border-viettel', 'shadow-sm');
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
            });

            event.currentTarget.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
            event.currentTarget.classList.add('bg-viettel', 'text-white', 'border-viettel', 'shadow-sm');

            renderDocuments();
        }

        // Filter documents by search keyword
        function filterDocuments() {
            renderDocuments();
        }

        // Render document list
        function renderDocuments() {
            const container = document.getElementById('document-list');
            const searchKey = document.getElementById('document-search').value.toLowerCase();
            const docs = documentsData[currentSubscriber] || [];

            let filtered = docs.filter(doc => {
                // Filter by category group (2 main categories)
                let matchCat = false;
                if (currentCategory === 'hopdong') {
                    matchCat = doc.cat === 'hd' || doc.cat === 'pl' || doc.cat === 'bbnt';
                } else if (currentCategory === 'hosokac') {
                    matchCat = doc.cat === 'pyc' || doc.cat === 'dlcn';
                } else {
                    matchCat = true; // Show all
                }

                const matchAction = (currentAction === 'all') || (doc.action === currentAction);
                const matchSearch = doc.title.toLowerCase().includes(searchKey) ||
                                    doc.code.toLowerCase().includes(searchKey) ||
                                    doc.desc.toLowerCase().includes(searchKey);
                return matchCat && matchAction && matchSearch;
            });

            document.getElementById('count-all').innerText = filtered.length;

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 bg-gradient-to-b from-slate-50 to-blue-50 rounded-[20px] border-2 border-dashed border-slate-300">
                        <div class="mb-3 text-5xl">📁</div>
                        <p class="text-sm font-bold text-slate-700 mb-1">Không tìm thấy chứng từ</p>
                        <p class="text-xs text-slate-500 leading-relaxed px-4">Hãy thử thay đổi từ khóa tìm kiếm hoặc chọn loại chứng từ khác</p>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            container.innerHTML = filtered.map(doc => {
                let badgeStyle = "bg-emerald-100 text-emerald-800 border-emerald-200";
                if (doc.statusColor === "blue") badgeStyle = "bg-blue-100 text-blue-800 border-blue-200";
                if (doc.statusColor === "slate") badgeStyle = "bg-slate-100 text-slate-700 border-slate-200";

                // Determine category icon
                let catIcon = "📄";
                if (doc.cat === 'pl') catIcon = "📎";
                if (doc.cat === 'pyc') catIcon = "📋";
                if (doc.cat === 'dlcn') catIcon = "🔒";
                if (doc.cat === 'bbnt') catIcon = "✔️";

                // Determine category color
                let categoryColor = "bg-blue-50 text-blue-700 border-blue-200";
                if (doc.cat === 'pl') categoryColor = "bg-amber-50 text-amber-700 border-amber-200";
                if (doc.cat === 'pyc') categoryColor = "bg-purple-50 text-purple-700 border-purple-200";
                if (doc.cat === 'dlcn') categoryColor = "bg-rose-50 text-rose-700 border-rose-200";
                if (doc.cat === 'bbnt') categoryColor = "bg-teal-50 text-teal-700 border-teal-200";

                return `
                    <div class="bg-white rounded-[20px] p-4 sm:p-4 border border-slate-200 shadow-sm hover:shadow-lg transition-all active:scale-98">
                        <!-- Header: Icon + Type + Status -->
                        <div class="flex justify-between items-start gap-2 mb-3">
                            <div class="flex items-center gap-2 flex-1">
                                <span class="text-xl">${catIcon}</span>
                                <span class="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${categoryColor}">
                                    ${doc.typeText}
                                </span>
                            </div>
                            ${doc.cat === 'hd' ? `<span class="text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${badgeStyle}">
                                ✓ ${doc.status}
                            </span>` : ''}
                        </div>

                        <!-- Title -->
                        <h4 class="text-sm sm:text-sm font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
                            ${doc.title}
                        </h4>

                        <!-- Description -->
                        <p class="text-xs sm:text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                            ${doc.desc}
                        </p>

                        <!-- Meta Info: Code & Date -->
                        <div class="mb-3 pt-2 border-t border-slate-100 space-y-1">
                            <div class="flex items-center text-[11px] text-slate-600">
                                <span class="font-semibold text-slate-700 mr-1">Mã VB:</span>
                                <span class="font-mono text-slate-800">${doc.code}</span>
                            </div>
                            <div class="flex items-center text-[11px] text-slate-600">
                                <span class="font-semibold text-slate-700 mr-1">Ngày lập:</span>
                                <span>${doc.date}</span>
                            </div>
                        </div>

                        <!-- Action Buttons: Full-width for better mobile UX -->
                        <div class="flex gap-2">
                            <button onclick="openPdfModal('${doc.id}')" class="flex-1 py-2.5 bg-gradient-to-r from-viettel to-red-500 text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 min-h-[44px]">
                                <i data-lucide="eye" class="w-4 h-4"></i>
                                <span>Xem</span>
                            </button>
                            <button onclick="downloadPdf('${doc.id}', '${doc.code.replace(/\//g, '-')}')" class="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center min-h-[44px]">
                                <i data-lucide="download" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            lucide.createIcons();
        }

        // Open PDF viewer modal
        function openPdfModal(docId) {
            const allDocs = [
                ...documentsData.ftth,
                ...documentsData.mobile_prepaid,
                ...documentsData.mobile_postpaid,
                ...documentsData.tv,
                ...documentsData.camera
            ];
            const found = allDocs.find(d => d.id === docId);

            if(found) {
                // Store current doc ID for modal actions
                currentViewingDocId = docId;

                // Update modal content
                document.getElementById('modal-doc-title').innerText = found.title;
                document.getElementById('modal-doc-code').innerText = "Mã VB: " + found.code;
                document.getElementById('modal-pdf-heading').innerText = found.pdfTitle;
                document.getElementById('modal-pdf-subheading').innerText = "Số: " + found.code;

                // Scroll to top of PDF content
                const pdfContent = document.querySelector('#pdf-modal .overflow-y-auto');
                if (pdfContent) {
                    pdfContent.scrollTop = 0;
                }
            }

            document.getElementById('pdf-modal').classList.remove('hidden');
        }

        // Close PDF viewer modal
        function closePdfModal() {
            document.getElementById('pdf-modal').classList.add('hidden');
        }

        // Store current viewing document ID for modal actions
        let currentViewingDocId = null;

        // Download PDF document from list
        function downloadPdf(docId, fileName) {
            const allDocs = [
                ...documentsData.ftth,
                ...documentsData.mobile_prepaid,
                ...documentsData.mobile_postpaid,
                ...documentsData.tv,
                ...documentsData.camera
            ];
            const found = allDocs.find(d => d.id === docId);

            if(found) {
                // Tạo thông báo download
                const downloadMsg = `📥 ĐANG TẢI: ${found.title}\n\nMã VB: ${found.code}\nNgày lập: ${found.date}\n\n✅ File PDF sẽ được lưu vào thư mục Downloads của bạn.`;
                alert(downloadMsg);

                // Log để debug
                console.log('Download:', {
                    fileName: fileName + '.pdf',
                    title: found.title,
                    code: found.code
                });
            }
        }

        // Download PDF from modal viewer
        function downloadPdfFromModal() {
            const title = document.getElementById('modal-doc-title').innerText;
            const code = document.getElementById('modal-doc-code').innerText.replace('Mã VB: ', '').replace(/\//g, '-');

            const downloadMsg = `📥 ĐANG TẢI: ${title}\n\nMã VB: ${code}\n\n✅ File PDF sẽ được lưu vào thư mục Downloads của bạn.`;
            alert(downloadMsg);

            console.log('Download from modal:', { title, code });
        }

        // Share PDF link
        function sharePdfLink() {
            const title = document.getElementById('modal-doc-title').innerText;
            const code = document.getElementById('modal-doc-code').innerText;

            const shareLink = `myviettel.vn/document/${currentViewingDocId}`;
            const shareMsg = `🔗 CHIA SẺ TÀI LIỆU\n\n${title}\n${code}\n\nLiên kết: ${shareLink}\n\n✅ Liên kết đã được chép vào bộ nhớ tạm. Bạn có thể chia sẻ cho những người khác.`;
            alert(shareMsg);

            // Copy to clipboard
            navigator.clipboard.writeText(shareLink).then(() => {
                console.log('Link copied:', shareLink);
            });
        }

        // Hỗ trợ kéo thả chuột (Drag-to-scroll) trên Desktop
        document.addEventListener('DOMContentLoaded', () => {
            // Thiết lập giá trị mặc định cho ô chọn thời gian (12 tháng gần nhất)
            const today = new Date();
            const currentMonth = today.getMonth() + 1;
            const currentYear = today.getFullYear();
            
            const toMonthStr = currentYear + '-' + currentMonth.toString().padStart(2, '0');
            const fromMonthStr = (currentYear - 1) + '-' + currentMonth.toString().padStart(2, '0');
            
            const monthFrom = document.getElementById('month-from');
            const monthTo = document.getElementById('month-to');
            if (monthFrom) monthFrom.value = fromMonthStr;
            if (monthTo) monthTo.value = toMonthStr;

            // Drag to scroll
            const sliders = document.querySelectorAll('.overflow-x-auto');
            let isDown = false;
            let startX;
            let scrollLeft;

            sliders.forEach(slider => {
                // Đổi con trỏ chuột để báo hiệu có thể kéo
                slider.classList.add('cursor-grab');
                
                slider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.classList.add('cursor-grabbing');
                    slider.classList.remove('cursor-grab', 'snap-x'); // Tạm tắt snap để kéo mượt hơn
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                });
                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.classList.remove('cursor-grabbing');
                    slider.classList.add('cursor-grab', 'snap-x');
                });
                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.classList.remove('cursor-grabbing');
                    slider.classList.add('cursor-grab', 'snap-x');
                });
                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 1.5; // Tốc độ cuộn
                    slider.scrollLeft = scrollLeft - walk;
                });
            });
        });
    
        // RATING LOGIC
        let currentRating = 0;
        let currentStaffId = null;

        function openRatingModal(staffId) {
            currentStaffId = staffId;
            const modal = document.getElementById('modal-rating');
            const sheet = document.getElementById('rating-bottom-sheet');
            modal.classList.remove('hidden');
            
            setRating(0);
            
            // Hide reasons initially
            const reasonBlock = document.getElementById('rating-reason-block');
            const inputBlock = document.getElementById('other-reason-input');
            if(reasonBlock) reasonBlock.classList.add('hidden');
            if(inputBlock) inputBlock.classList.add('hidden');
            
            // Uncheck all
            const checkboxes = document.querySelectorAll('input[name="rating-reason"]');
            checkboxes.forEach(cb => cb.checked = false);
            
            setTimeout(() => {
                sheet.classList.remove('translate-y-full');
            }, 10);
            
            lucide.createIcons();
        }

        function closeRatingModal() {
            const modal = document.getElementById('modal-rating');
            const sheet = document.getElementById('rating-bottom-sheet');
            
            sheet.classList.add('translate-y-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function toggleOtherReason(el) {
            const inputBlock = document.getElementById('other-reason-input');
            if(inputBlock) {
                if(el.checked) {
                    inputBlock.classList.remove('hidden');
                } else {
                    inputBlock.classList.add('hidden');
                }
            }
        }

        function setRating(stars) {
            currentRating = stars;
            const container = document.getElementById('rating-stars-container');
            const icons = container.querySelectorAll('.star-icon');
            const textEl = document.getElementById('rating-text');
            const btnSubmit = document.getElementById('btn-submit-rating');
            const reasonBlock = document.getElementById('rating-reason-block');

            icons.forEach((icon, index) => {
                if (index < stars) {
                    icon.classList.remove('text-slate-300', 'fill-slate-300');
                    icon.classList.add('text-yellow-400', 'fill-yellow-400');
                } else {
                    icon.classList.remove('text-yellow-400', 'fill-yellow-400');
                    icon.classList.add('text-slate-300', 'fill-slate-300');
                }
            });

            if (stars === 0) {
                textEl.classList.add('opacity-0');
                btnSubmit.disabled = true;
                btnSubmit.className = "w-full mt-5 py-3.5 rounded-full bg-slate-100 text-slate-400 text-sm font-bold transition-all flex items-center justify-center disabled:opacity-70";
                if(reasonBlock) reasonBlock.classList.add('hidden');
            } else {
                textEl.classList.remove('opacity-0');
                if (stars === 5) textEl.innerText = "Rất hài lòng";
                else if (stars === 4) textEl.innerText = "Hài lòng";
                else if (stars === 3) textEl.innerText = "Bình thường";
                else if (stars === 2) textEl.innerText = "Không hài lòng";
                else if (stars === 1) textEl.innerText = "Rất không hài lòng";
                
                // Show reasons for 1, 2, 3 stars
                if (reasonBlock) {
                    if (stars <= 3) {
                        reasonBlock.classList.remove('hidden');
                    } else {
                        reasonBlock.classList.add('hidden');
                    }
                }

                // Enable submit button
                btnSubmit.disabled = false;
                btnSubmit.className = "w-full mt-5 py-3.5 rounded-full bg-slate-900 text-white text-sm font-bold transition-all flex items-center justify-center hover:bg-slate-800 shadow-md";
            }
            
            // Re-render icons in case they were hidden
            lucide.createIcons();
        }

        function submitRating() {
            closeRatingModal();
            
            // Increment review count
            if (currentStaffId) {
                const countEl = document.getElementById('review-count-' + currentStaffId);
                if (countEl) {
                    let count = parseInt(countEl.innerText);
                    if (!isNaN(count)) {
                        countEl.innerText = count + 1;
                    }
                }
            }

            setTimeout(() => {
                openRatingSuccessModal();
            }, 300);
        }

        function openRatingSuccessModal() {
            const modal = document.getElementById('modal-rating-success');
            const popup = document.getElementById('rating-success-popup');
            modal.classList.remove('hidden');
            
            setTimeout(() => {
                popup.classList.remove('scale-95', 'opacity-0');
                popup.classList.add('scale-100', 'opacity-100');
            }, 10);
            
            lucide.createIcons();
        }

        function closeRatingSuccessModal() {
            const modal = document.getElementById('modal-rating-success');
            const popup = document.getElementById('rating-success-popup');
            
            popup.classList.remove('scale-100', 'opacity-100');
            popup.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

