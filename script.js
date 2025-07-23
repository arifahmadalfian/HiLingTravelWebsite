document.addEventListener('DOMContentLoaded', function() {

    // --- TRANSLATION LOGIC ---
    const languageSelector = document.getElementById('languageSelector');

    const translations = {
        id: {
            tagline: "Petualangan di Bandung, Jogja, & Jakarta",
            slide1_title: "Pesona Metropolitan Jakarta",
            slide1_subtitle: "Dari Monumen Ikonik hingga Kehidupan Kota Modern",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Jelajahi Warisan Sejarah yang Agung",
            slide3_title: "Kreativitas Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Sejuknya Alam dan Inovasi Kota",
            about_desc: "Kami adalah penyedia layanan wisata terpercaya yang siap mengantarkan Anda menjelajahi keindahan di kota-kota favorit Anda: Bandung, Jogja, dan Jakarta. Dengan berbagai pilihan kendaraan yang nyaman dan tujuan perjalanan yang menarik, kami berkomitmen memberikan pengalaman wisata yang tak terlupakan.",
            nav_home: "Beranda",
            nav_about: "Tentang Kami",
            nav_vehicles: "Kendaraan",
            nav_destinations: "Destinasi",
            nav_contact: "Kontak",
            explore_now: "Jelajahi Sekarang",
            about_title: "Tentang Kami",
            feature1_title: "Kendaraan Nyaman",
            feature1_desc: "Berbagai pilihan kendaraan",
            feature2_title: "Destinasi Lengkap",
            feature2_desc: "Wisata alam dan budaya",
            contact_info_title: "Informasi Kontak",
            follow_us: "Ikuti Kami",
            vehicles_title: "Armada Kendaraan",
            vehicles_desc: "Pilihan kendaraan yang nyaman dan terawat untuk perjalanan wisata Anda. Semua kendaraan dilengkapi dengan AC, sound system, dan driver berpengalaman.",
            passenger_count: "{count} Penumpang",
            facilities_title: "Fasilitas Kendaraan",
            facility1_title: "AC Dingin",
            facility1_desc: "Semua kendaraan dilengkapi AC untuk kenyamanan perjalanan",
            facility2_title: "Sound System",
            facility2_desc: "Audio berkualitas dengan koneksi Bluetooth dan USB",
            facility3_title: "Driver Berpengalaman",
            facility3_desc: "Sopir profesional yang menguasai rute wisata Bandung",
            avanza_desc: "Kendaraan keluarga yang nyaman untuk perjalanan wisata dengan kapasitas 7 penumpang.",
            innova_desc: "MPV premium dengan kenyamanan maksimal untuk perjalanan jarak jauh.",
            hiace14_desc: "Minibus ideal untuk grup kecil dengan ruang bagasi yang luas.",
            hiace16_desc: "Minibus dengan kapasitas lebih besar untuk grup wisata yang lebih banyak.",
            fortuner_desc: "SUV mewah dengan performa tangguh untuk medan apapun.",
            xenia_desc: "MPV ekonomis dengan efisiensi bahan bakar yang baik.",
            confero_desc: "MPV modern dengan desain stylish dan fitur lengkap.",
            ertiga_desc: "MPV kompak dengan konsumsi bahan bakar yang irit.",
            mobilio_desc: "MPV handal dengan teknologi Honda yang terpercaya.",
            brv_desc: "SUV kompak dengan ground clearance tinggi untuk berbagai medan.",
            destinations_title: "Destinasi Wisata",
            destinations_desc: "Jelajahi berbagai destinasi menarik di Bandung, dari wisata alam yang memukau hingga tempat makan dan penginapan yang nyaman.",
            tab_nature: "Wisata Alam",
            tab_food: "Tempat Makan",
            tab_lodging: "Penginapan",
            kawah_putih_desc: "Danau vulkanik dengan air berwarna putih kehijauan yang memukau.",
            ranca_upas_desc: "Bumi perkemahan dengan pemandangan alam yang indah dan udara sejuk.",
            situ_patenggang_desc: "Danau alami dengan legenda romantis dan pemandangan yang menawan.",
            glamping_lakeside_desc: "Pengalaman berkemah mewah di tepi danau yang menawan.",
            kebun_strawberry_desc: "Petik strawberry segar langsung dari kebunnya.",
            tangkuban_perahu_desc: "Gunung berapi aktif dengan kawah yang spektakuler.",
            farmhouse_desc: "Wisata bertema Eropa dengan suasana pedesaan yang menawan.",
            thelodge_desc: "Wisata alam dengan jembatan gantung dan pemandangan lembah.",
            floating_market_desc: "Pasar terapung dengan berbagai kuliner dan wahana menarik.",
            orchid_forest_desc: "Hutan anggrek dengan berbagai aktivitas outdoor yang seru.",
            situ_cileunca_desc: "Danau indah dengan aktivitas perahu dan pemandangan pegunungan.",
            teh_malabar_desc: "Hamparan kebun teh hijau yang menyejukkan mata.",
            nimo_highland_desc: "Destinasi wisata dengan pemandangan highland yang menakjubkan.",
            cibolang_desc: "Relaksasi di pemandian air panas alami yang menyegarkan.",
            woda_cafe_desc: "Cafe dengan pemandangan alam yang indah.",
            sindang_reret_ciwidey_desc: "Restoran dengan masakan Sunda autentik.",
            saung_gawir_desc: "Tempat makan dengan suasana saung tradisional.",
            lembah_ciwidey_resto_desc: "Restoran dengan view lembah yang menawan.",
            the_valley_desc: "Restoran dengan konsep modern dan view pegunungan.",
            sunda_rasa_desc: "Kuliner Sunda dengan cita rasa tradisional.",
            miss_bee_desc: "Cafe dengan konsep farm to table.",
            ibu_imas_desc: "Warung tradisional dengan masakan rumahan.",
            sindang_reret_pangalengan_desc: "Rumah makan dengan spesialisasi ikan bakar.",
            glamping_lakeside_lodging_desc: "Pengalaman glamping mewah di tepi danau.",
            ciwidey_valley_resort_desc: "Resort dengan fasilitas lengkap dan pemandangan lembah.",
            bubu_jungle_desc: "Resort dengan konsep alam dan suasana hutan.",
            thelodge_lodging_desc: "Lodge dengan pemandangan lembah yang spektakuler.",
            dusun_bambu_desc: "Resort keluarga dengan konsep alam dan budaya.",
            grafika_cikole_desc: "Hotel dengan suasana pegunungan yang sejuk.",
            contact_title: "Hubungi Kami",
            contact_desc: "Siap merencanakan petualangan Anda? Hubungi kami sekarang untuk informasi lebih lanjut dan pemesanan.",
            contact_phone: "Telepon",
            contact_email: "Email",
            contact_address: "Alamat",
            title_call: "Telepon Langsung",
            title_whatsapp: "Chat WhatsApp",
            follow_us_social: "Ikuti Media Sosial Kami",
            contact_form_title: "Formulir Kontak",
            form_name: "Nama Lengkap",
            form_phone: "Nomor Telepon",
            form_destination: "Destinasi yang Diminati",
            form_send: "Kirim Pesan",
            form_select_dest: "Pilih destinasi",
            form_other: "Lainnya",
            placeholder_name: "Masukkan nama lengkap",
            placeholder_phone: "Masukkan nomor telepon",
            placeholder_email: "Masukkan alamat email",
            placeholder_message: "Tuliskan pesan atau pertanyaan Anda",
            footer_contact: "Kontak",
            footer_copyright: "© 2025 HiLing Travel. Hak cipta dilindungi undang-undang.",
            footer_desc: "Jelajahi petualangan tak terlupakan di Bandung, Jogja, dan Jakarta bersama kami.",
            footer_service_areas: "Area Layanan",
            form_phone_whatsapp: "Telepon / WhatsApp",
            form_message: "Pesan (Opsional)", // Ganti nilai kunci yang sudah ada
            placeholder_message_optional: "Tuliskan pesan atau pertanyaan Anda",
            form_send_whatsapp: "Kirim via WhatsApp",
            form_send_sms_fallback: "Tidak punya WhatsApp? Kirim via SMS"
        },
        en: {
            tagline: "Adventures in Bandung, Jogja, & Jakarta",
            slide1_title: "The Metropolitan Charm of Jakarta",
            slide1_subtitle: "From Iconic Monuments to Modern City Life",
            slide2_title: "The Cultural Wonders of Yogyakarta",
            slide2_subtitle: "Explore the Majestic Historical Heritage",
            slide3_title: "The Creativity of Bandung, the Flower City",
            slide3_subtitle: "Enjoy its Cool Nature and Urban Innovation",
            about_desc: "We are a trusted tour service provider ready to guide you in exploring the beauty of your favorite cities: Bandung, Jogja, and Jakarta. With a variety of comfortable vehicles and exciting travel destinations, we are committed to providing an unforgettable travel experience.",
            nav_home: "Home",
            nav_about: "About Us",
            nav_vehicles: "Vehicles",
            nav_destinations: "Destinations",
            nav_contact: "Contact",
            explore_now: "Explore Now",
            about_title: "About Us",
            feature1_title: "Comfortable Vehicles",
            feature1_desc: "Various vehicle options",
            feature2_title: "Complete Destinations",
            feature2_desc: "Nature and cultural tourism",
            contact_info_title: "Contact Information",
            follow_us: "Follow Us",
            vehicles_title: "Vehicle Fleet",
            vehicles_desc: "A choice of comfortable and well-maintained vehicles for your tour. All vehicles are equipped with AC, sound system, and experienced drivers.",
            passenger_count: "{count} Passengers",
            facilities_title: "Vehicle Facilities",
            facility1_title: "Cold AC",
            facility1_desc: "All vehicles are equipped with AC for a comfortable journey",
            facility2_title: "Sound System",
            facility2_desc: "Quality audio with Bluetooth and USB connectivity",
            facility3_title: "Experienced Driver",
            facility3_desc: "Professional drivers who know the tourist routes of Bandung",
            avanza_desc: "A comfortable family vehicle for tourist trips with a capacity of 7 passengers.",
            innova_desc: "Premium MPV with maximum comfort for long-distance travel.",
            hiace14_desc: "Ideal minibus for small groups with spacious luggage space.",
            hiace16_desc: "Minibus with a larger capacity for more numerous tour groups.",
            fortuner_desc: "A luxury SUV with tough performance for any terrain.",
            xenia_desc: "An economical MPV with good fuel efficiency.",
            confero_desc: "A modern MPV with a stylish design and complete features.",
            ertiga_desc: "A compact MPV with economical fuel consumption.",
            mobilio_desc: "A reliable MPV with trusted Honda technology.",
            brv_desc: "A compact SUV with high ground clearance for various terrains.",
            destinations_title: "Tourist Destinations",
            destinations_desc: "Explore various interesting destinations in Bandung, from stunning natural attractions to cozy places to eat and stay.",
            tab_nature: "Natural Attractions",
            tab_food: "Dining",
            tab_lodging: "Lodging",
            kawah_putih_desc: "A stunning volcanic lake with whitish-green water.",
            ranca_upas_desc: "A campsite with beautiful natural scenery and cool air.",
            situ_patenggang_desc: "A natural lake with a romantic legend and charming views.",
            glamping_lakeside_desc: "A glamorous camping experience on a charming lakeside.",
            kebun_strawberry_desc: "Pick fresh strawberries directly from the garden.",
            tangkuban_perahu_desc: "An active volcano with a spectacular crater.",
            farmhouse_desc: "European-themed tourism with a charming countryside atmosphere.",
            thelodge_desc: "Nature tourism with a suspension bridge and valley views.",
            floating_market_desc: "A floating market with various culinary and interesting rides.",
            orchid_forest_desc: "An orchid forest with various exciting outdoor activities.",
            situ_cileunca_desc: "A beautiful lake with boat activities and mountain views.",
            teh_malabar_desc: "A vast expanse of green tea plantations that soothes the eyes.",
            nimo_highland_desc: "A tourist destination with amazing highland views.",
            cibolang_desc: "Relax in a refreshing natural hot spring.",
            woda_cafe_desc: "A cafe with beautiful natural views.",
            sindang_reret_ciwidey_desc: "A restaurant with authentic Sundanese cuisine.",
            saung_gawir_desc: "An eatery with a traditional hut atmosphere.",
            lembah_ciwidey_resto_desc: "A restaurant with captivating valley views.",
            the_valley_desc: "A modern concept restaurant with mountain views.",
            sunda_rasa_desc: "Sundanese culinary with a traditional taste.",
            miss_bee_desc: "A cafe with a farm-to-table concept.",
            ibu_imas_desc: "A traditional stall with home-cooked meals.",
            sindang_reret_pangalengan_desc: "A restaurant specializing in grilled fish.",
            glamping_lakeside_lodging_desc: "A luxurious glamping experience on the lakeside.",
            ciwidey_valley_resort_desc: "A resort with complete facilities and valley views.",
            bubu_jungle_desc: "A resort with a natural concept and jungle atmosphere.",
            thelodge_lodging_desc: "A lodge with spectacular valley views.",
            dusun_bambu_desc: "A family resort with a concept of nature and culture.",
            grafika_cikole_desc: "A hotel with a cool mountain atmosphere.",
            contact_title: "Contact Us",
            contact_desc: "Ready to plan your adventure? Contact us now for more information and reservations.",
            contact_phone: "Phone",
            contact_email: "Email",
            contact_address: "Address",
            title_call: "Call Directly",
            title_whatsapp: "Chat on WhatsApp",
            follow_us_social: "Follow Our Social Media",
            contact_form_title: "Contact Form",
            form_name: "Full Name",
            form_phone: "Phone Number",
            form_destination: "Destination of Interest",
            form_send: "Send Message",
            form_select_dest: "Select destination",
            form_other: "Other",
            placeholder_name: "Enter your full name",
            placeholder_phone: "Enter your phone number",
            placeholder_email: "Enter your email address",
            placeholder_message: "Write your message or question here",
            footer_desc: "Explore unforgettable adventures in Bandung, Jogja, and Jakarta with us.",
            footer_service_areas: "Service Areas",
            footer_contact: "Contact",
            footer_copyright: "© 2025 HiLing Travel. All rights reserved.",
            form_phone_whatsapp: "Phone / WhatsApp",
            form_message: "Message (Optional)", // Ganti nilai kunci yang sudah ada
            placeholder_message_optional: "Write your message or question here",
            form_send_whatsapp: "Send via WhatsApp",
            form_send_sms_fallback: "Don't have WhatsApp? Send via SMS"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[lang]?.[key];
            if (translation) {
                // Handle special cases like passenger count
                if (key === 'passenger_count') {
                    const count = element.getAttribute('data-count');
                    translation = translation.replace('{count}', count);
                }
                element.textContent = translation;
            }
        });
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang]?.[key]) {
                element.placeholder = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    }

    languageSelector?.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });

    // Initial load
    changeLanguage(languageSelector.value);

    // --- KODE BARU UNTUK HEADER SCROLL ---
    const mainHeader = document.getElementById('mainHeader');

    // Pastikan header ada sebelum menambahkan fungsi
    if (mainHeader) {
        const scrollThreshold = 50; // Jarak scroll dalam piksel sebelum header berubah

        // Fungsi yang akan dijalankan setiap kali user scroll
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                // Jika user scroll ke bawah, tambahkan kelas .header-scrolled
                mainHeader.classList.add('header-scrolled');
            } else {
                // Jika user kembali ke atas, hapus kelas .header-scrolled
                mainHeader.classList.remove('header-scrolled');
            }
        };

        // Pasang "pendengar" pada event scroll di window
        window.addEventListener('scroll', handleScroll);
    }


    // --- SLIDER LOGIC ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;
    const nextSlideBtn = document.getElementById('nextSlide');
    const prevSlideBtn = document.getElementById('prevSlide');
    let autoSlideInterval = setInterval(goToNextSlide, 5000);

    function updateSlide(newIndex) {
        clearInterval(autoSlideInterval);
        currentSlide = newIndex;
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        autoSlideInterval = setInterval(goToNextSlide, 5000);
    }

    function goToNextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= totalSlides) { newIndex = 0; }
        updateSlide(newIndex);
    }

    function goToPrevSlide() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) { newIndex = totalSlides - 1; }
        updateSlide(newIndex);
    }

    nextSlideBtn?.addEventListener('click', goToNextSlide);
    prevSlideBtn?.addEventListener('click', goToPrevSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            updateSlide(slideIndex);
        });
    });

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavigation = document.getElementById('mobileNavigation');
    mobileMenuBtn?.addEventListener('click', () => {
        mobileNavigation.classList.toggle('hidden');
    });

    // --- SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (mobileNavigation && !mobileNavigation.classList.contains('hidden')) {
                    mobileNavigation.classList.add('hidden');
                }
            }
        });
    });

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Hanya satu event listener utama pada saat form di-submit
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Wajib: Hentikan form dari reload halaman

            // Ambil data langsung di dalam event ini
            const nameInput = document.getElementById('contactName');
            const phoneInput = document.getElementById('contactPhone');
            const messageInput = document.getElementById('contactMessage');

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const message = messageInput.value.trim();

            // Validasi
            if (!name || !phone) {
                alert('Nama Lengkap dan Nomor Telepon wajib diisi.');
                return; // Hentikan fungsi
            }

            // Buat pesan dinamis
            const ahmadWhatsapp = '6282116777722';
            let textMessage;
            if (message) {
                textMessage = `Halo, saya ${name} (No. HP: ${phone}).\n\nPesan saya:\n${message}`;
            } else {
                textMessage = `Halo, saya ${name} (No. HP: ${phone}). Saya ingin bertanya mengenai layanan HiLing Travel.`;
            }

            // Buka WhatsApp
            const whatsappUrl = `https://wa.me/${ahmadWhatsapp}?text=${encodeURIComponent(textMessage)}`;
            window.open(whatsappUrl, '_blank');
        });

        // Handler untuk link SMS fallback
        const submitViaSmsLink = document.getElementById('submitViaSms');
        submitViaSmsLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Validasi juga di sini untuk konsistensi
            const nameInput = document.getElementById('contactName').value.trim();
            const phoneInput = document.getElementById('contactPhone').value.trim();
            if (!nameInput || !phoneInput) {
                alert('Nama Lengkap dan Nomor Telepon wajib diisi.');
                return;
            }
            const ahmadSms = '082116777722';
            window.location.href = `sms:${ahmadSms}`;
        });
    }
});