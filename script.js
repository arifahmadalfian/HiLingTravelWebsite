document.addEventListener('DOMContentLoaded', function() {

    const languageSelector = document.getElementById('languageSelector');

    const translations = {
        id: {
            tagline: "Tour Guide & Private Transport di Bandung, Jogja, Jakarta",
            slide1_title: "Pesona Metropolitan Jakarta",
            select_language_tooltip: "Pilih Bahasa",
            select_language_label: "Pilih Bahasa",
            slide1_subtitle: "Dari Monumen Ikonik hingga Kehidupan Kota Modern",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Jelajahi Warisan Sejarah yang Agung",
            slide3_title: "Kreativitas Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Sejuknya Alam dan Inovasi Kota",
            about_desc: "Kami adalah penyedia layanan <strong>Tour Guide Profesional</strong> yang berfokus pada <strong>kenyamanan perjalanan</strong> Anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>penjemputan</strong> di lokasi Anda maupun di bandara, lalu biarkan kami memandu Anda <strong>menjelajahi berbagai tempat menarik</strong>. Dari destinasi wisata terbaik hingga rekomendasi restoran ternama, kami berkomitmen untuk memberikan pengalaman tak terlupakan dengan armada kendaraan yang prima.",            nav_about: "Tentang Kami",
            nav_vehicles: "Kendaraan",
            nav_destinations: "Destinasi",
            nav_contact: "Kontak",
            explore_now: "Jelajahi Sekarang",
            about_title: "Tentang Kami",
            feature1_title: "Kendaraan Nyaman",
            feature1_desc: "Berbagai pilihan kendaraan, Tersedia pilihan dari 7 hingga 40+ penumpang.",
            feature2_title: "Destinasi Lengkap",
            feature2_desc: "Wisata alam, budaya, kuliner, serta rekomendasi hotel & vila terbaik",
            contact_info_title: "Informasi Kontak",
            follow_us: "Ikuti Kami",
            nav_pricing: "Harga",
            pricing_title: "Simulasi Harga & Paket",
            pricing_subtitle: "Pilih paket yang paling sesuai dengan kebutuhan perjalanan Anda. Harga transparan dan kompetitif.",
            package1_title: "Paket Transport & Driver",
            package1_subtitle: "Fokus pada perjalanan yang nyaman dan efisien.",
            package1_inclusion1: "Transportasi",
            package1_inclusion2: "Driver Profesional",
            package1_inclusion3: "Bensin / Solar",
            package1_inclusion4: "Biaya Tol & Parkir",
            package1_inclusion5: "Fullboard (Termasuk Bagasi)",
            package2_title: "Paket All-in Lengkap",
            package2_subtitle: "Pengalaman liburan tanpa pusing, semua kami urus.",
            package2_inclusion1: "Hotel / Penginapan",
            package2_inclusion2: "Makan (Sarapan, Siang, Malam)",
            package3_title: "Paket Wisata Kustom",
            package3_subtitle: "Anda pilih tujuan, kami siapkan tiket dan transportasinya.",
            package3_inclusion_plus: "Semua dari Paket Transport, plus:",
            package3_inclusion1: "Tiket Masuk Wisata",
            package3_inclusion2: "Rekomendasi Rute Terbaik",
            package2_inclusion_plus: "Semua dari Paket Kustom, plus:",
            pricing_disclaimer: "*Harga dapat berubah sewaktu-waktu tergantung jenis kendaraan, pilihan hotel, jarak, destinasi, dan ketersediaan. Harga di atas adalah untuk area Bandung City Tour.",
            pricing_cta: "Konsultasi Gratis!",
            vehicles_title: "Armada Kendaraan",
            vehicles_desc: "Pilihan kendaraan yang nyaman dan terawat untuk perjalanan wisata Anda. Semua kendaraan dilengkapi dengan AC, sound system, dan driver berpengalaman.",
            passenger_count: "{count} Penumpang",
            facilities_title: "Fasilitas Kendaraan",
            facility1_title: "AC Dingin",
            facility1_desc: "Nikmati perjalanan yang sejuk dan nyaman di setiap kondisi cuaca. Setiap unit kami dilengkapi AC yang terawat baik, memastikan suhu kabin tetap optimal selama perjalanan Anda",
            facility2_title: "Sound System",
            facility2_desc: "Hidupkan suasana perjalanan dengan sistem audio berkualitas tinggi. Hubungkan playlist favorit Anda dengan mudah melalui koneksi Bluetooth dan USB untuk pengalaman hiburan yang personal",
            facility3_title: "Driver Berpengalaman",
            facility3_desc: "Sopir profesional yang ahli dalam rute wisata, kuliner, serta rekomendasi restoran dan penginapan terbaik di setiap kota",
            price_starts_from: "Mulai dari",
            price_per_day: "/ hari",
            avanza_desc: "Sebuah MPV keluarga andalan yang memberikan kenyamanan maksimal untuk menjelajahi berbagai destinasi",
            innova_desc: "MPV premium dengan kenyamanan maksimal untuk perjalanan jarak jauh.",
            hiace14_desc: "Minibus ideal untuk grup kecil dengan ruang bagasi yang luas.",
            hiace16_desc: "Minibus dengan kapasitas lebih besar untuk grup wisata yang lebih banyak.",
            fortuner_desc: "SUV mewah dengan performa tangguh untuk medan apapun.",
            xenia_desc: "MPV ekonomis dengan efisiensi bahan bakar yang baik.",
            confero_desc: "MPV modern dengan desain stylish dan fitur lengkap.",
            ertiga_desc: "MPV kompak dengan konsumsi bahan bakar yang irit.",
            mobilio_desc: "MPV handal dengan teknologi Honda yang terpercaya.",
            brv_desc: "SUV kompak dengan ground clearance tinggi untuk berbagai medan.",
            luxio_desc: "Kabin yang luas dan fleksibel, memberikan kenyamanan ekstra untuk perjalanan keluarga atau grup kecil.",
            calya_desc: "Kenyamanan dan efisiensi dalam satu paket LCGC, ideal untuk petualangan hemat bersama keluarga.",
            sigra_desc: "Pilihan cerdas dan irit untuk perjalanan keluarga kecil atau mobilitas lincah di dalam kota.",
            elf_desc: "Kuat dan handal untuk grup berukuran sedang, mampu menjangkau berbagai medan dengan efisien.",
            bus_medium_desc: "Solusi ideal untuk rombongan wisata, perjalanan keluarga besar, atau acara perusahaan dengan kenyamanan.",
            bus_big_desc: "Kapasitas maksimal untuk perjalanan wisata skala besar, study tour, atau acara gathering dengan fasilitas lengkap.",
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
            footer_desc: "Jelajahi petualangan wisata, kuliner, dan budaya, serta temukan hotel, vila, dan tempat terbaik di Bandung, Jogja, dan Jakarta bersama kami",
            footer_service_areas: "Area Layanan",
            form_phone_whatsapp: "Telepon / WhatsApp",
            form_message: "Pesan (Opsional)",
            placeholder_message_optional: "Tuliskan pesan atau pertanyaan Anda",
            form_send_whatsapp: "Kirim via WhatsApp",
            form_send_sms_fallback: "Tidak punya WhatsApp? Kirim via SMS"
        },
        en: {
            tagline: "Tour Guide & Private Transport in Bandung, Jogja, Jakarta",
            slide1_title: "The Metropolitan Charm of Jakarta",
            select_language_tooltip: "Select Language",
            select_language_label: "Select Language",
            slide1_subtitle: "From Iconic Monuments to Modern City Life",
            slide2_title: "The Cultural Wonders of Yogyakarta",
            slide2_subtitle: "Explore the Majestic Historical Heritage",
            slide3_title: "The Creativity of Bandung, the Flower City",
            slide3_subtitle: "Enjoy its Cool Nature and Urban Innovation",
            about_desc: "We are a <strong>Professional Tour Guide</strong> service provider focused on your <strong>travel comfort</strong> in Bandung, Jogja, and Jakarta. Enjoy the convenience of <strong> pickup</strong> from your location or the airport, and let us guide you in <strong>exploring a variety of fascinating places</strong>. From the best tourist destinations to recommendations for renowned restaurants, we are committed to providing an unforgettable experience with our excellent fleet of vehicles.",            nav_about: "About Us",
            nav_vehicles: "Vehicles",
            nav_destinations: "Destinations",
            nav_contact: "Contact",
            explore_now: "Explore Now",
            about_title: "About Us",
            feature1_title: "Comfortable Vehicles",
            feature1_desc: "Various vehicle options, Options available for 7 to 40+ passengers.",
            feature2_title: "Complete Destinations",
            feature2_desc: "Nature, culture, culinary tours, plus the best hotel & villa recommendations",
            contact_info_title: "Contact Information",
            follow_us: "Follow Us",
            nav_pricing: "Price",
            pricing_title: "Price Simulation & Packages",
            pricing_subtitle: "Choose the package that best suits your travel needs. Transparent and competitive pricing.",
            package1_title: "Transport & Driver Package",
            package1_subtitle: "Focused on a comfortable and efficient journey.",
            package1_inclusion1: "Transportation",
            package1_inclusion2: "Professional Driver",
            package1_inclusion3: "Gasoline / Petrol",
            package1_inclusion4: "Toll & Parking Fees",
            package1_inclusion5: "Fullboard (Baggage Included)",
            package2_title: "Complete All-in Package",
            package2_subtitle: "A hassle-free vacation experience, we handle everything.",
            package2_inclusion1: "Hotel / Lodging",
            package2_inclusion2: "Meals (Breakfast, Lunch, Dinner)",
            package3_title: "Custom Tour Package",
            package3_subtitle: "You choose the destination, we handle tickets and transport.",
            package3_inclusion_plus: "Everything from Transport Package, plus:",
            package3_inclusion1: "Attraction Entrance Tickets",
            package3_inclusion2: "Best Route Recommendations",
            package2_inclusion_plus: "Everything from Custom Package, plus:",
            pricing_disclaimer: "*Prices are subject to change depending on vehicle type, hotel selection, distance, destination, and availability. The prices above are for the Bandung City Tour area.",
            pricing_cta: "Plan Your Trip!",
            vehicles_title: "Vehicle Fleet",
            vehicles_desc: "A choice of comfortable and well-maintained vehicles for your tour. All vehicles are equipped with AC, sound system, and experienced drivers.",
            passenger_count: "{count} Passengers",
            facilities_title: "Vehicle Facilities",
            facility1_title: "Cold AC",
            facility1_desc: "Enjoy a cool and comfortable journey, regardless of the weather outside. Each vehicle is equipped with a well-maintained AC system to ensure an optimal cabin temperature",
            facility2_title: "Sound System",
            facility2_desc: "Liven up your journey with our high-quality sound system. Easily connect your favorite playlists via Bluetooth or USB for a personalized entertainment experience on the road",
            facility3_title: "Experienced Driver",
            facility3_desc: "Professional drivers with expert knowledge of the best routes, culinary spots, and top recommendations for restaurants and lodging in each city",
            price_starts_from: "Starts from",
            price_per_day: "/ day",
            avanza_desc: "A reliable family MPV that offers maximum comfort for exploring various destinations",
            innova_desc: "Premium MPV with maximum comfort for long-distance travel.",
            hiace14_desc: "Ideal minibus for small groups with spacious luggage space.",
            hiace16_desc: "Minibus with a larger capacity for more numerous tour groups.",
            fortuner_desc: "A luxury SUV with tough performance for any terrain.",
            xenia_desc: "An economical MPV with good fuel efficiency.",
            confero_desc: "A modern MPV with a stylish design and complete features.",
            ertiga_desc: "A compact MPV with economical fuel consumption.",
            mobilio_desc: "A reliable MPV with trusted Honda technology.",
            luxio_desc: "A spacious and flexible cabin, providing extra comfort for family trips or small groups.",
            calya_desc: "Comfort and efficiency in one LCGC package, perfect for budget-friendly family adventures.",
            sigra_desc: "A smart and fuel-efficient choice for small family trips or agile city mobility.",
            elf_desc: "Tough and reliable for medium-sized groups, capable of reaching various terrains efficiently.",
            bus_medium_desc: "The ideal solution for tour groups, large family trips, or corporate events with comfort.",
            bus_big_desc: "Maximum capacity for large-scale tours, study trips, or gatherings with complete facilities.",
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
            footer_desc: "Explore unforgettable travel, culinary, and cultural adventures, and discover the best hotels, villas, and top spots in Bandung, Jogja, and Jakarta with us",
            footer_service_areas: "Service Areas",
            footer_contact: "Contact",
            footer_copyright: "© 2025 HiLing Travel. All rights reserved.",
            form_phone_whatsapp: "Phone / WhatsApp",
            form_message: "Message (Optional)",
            placeholder_message_optional: "Write your message or question here",
            form_send_whatsapp: "Send via WhatsApp",
            form_send_sms_fallback: "Don't have WhatsApp? Send via SMS"
        },
        ms: {
            tagline: "Pemandu Pelancong & Pengangkutan Peribadi di Bandung, Jogja, Jakarta",
            nav_home: "Laman Utama",
            nav_about: "Tentang Kami",
            nav_vehicles: "Kenderaan",
            nav_destinations: "Destinasi",
            nav_contact: "Hubungi Kami",
            slide1_title: "Pesona Metropolitan Jakarta",
            select_language_tooltip: "Pilih Bahasa",
            select_language_label: "Pilih Bahasa",
            slide1_subtitle: "Dari Monumen Ikonik ke Kehidupan Kota Moden",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Terokai Warisan Sejarah yang Agung",
            slide3_title: "Kreativiti Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Kesejukan Alam dan Inovasi Kota",
            explore_now: "Terokai Sekarang",
            about_title: "Tentang Kami",
            about_desc: "Kami adalah penyedia perkhidmatan <strong>Pemandu Pelancong Profesional</strong> yang tertumpu pada <strong>keselesaan perjalanan</strong> anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>pengambilan</strong> dari lokasi anda atau lapangan terbang, dan biarkan kami memandu anda <strong>menerokai pelbagai tempat menarik</strong>. Dari destinasi pelancongan terbaik hingga cadangan restoran terkenal, kami komited untuk memberikan pengalaman yang tidak dapat dilupakan dengan armada kenderaan kami yang prima.",            feature1_title: "Kenderaan Selesa",
            feature1_desc: "Pelbagai pilihan kenderaan, dari 7 hingga 40+ penumpang.",
            feature2_title: "Destinasi Lengkap",
            feature2_desc: "Pelancongan alam, budaya, kulinari, serta cadangan hotel & vila terbaik.",
            contact_info_title: "Maklumat Hubungan",
            follow_us: "Ikuti Kami",
            nav_pricing: "Harga",
            pricing_title: "Simulasi Harga & Pakej",
            pricing_subtitle: "Pilih pakej yang paling sesuai dengan keperluan perjalanan anda. Harga telus dan kompetitif.",
            package1_title: "Pakej Pengangkutan & Pemandu",
            package1_subtitle: "Fokus pada perjalanan yang selesa dan cekap.",
            package1_inclusion1: "Pengangkutan / Kereta",
            package1_inclusion2: "Pemandu Profesional",
            package1_inclusion3: "Petrol / Minyak",
            package1_inclusion4: "Bayaran Tol & Tempat Letak Kereta",
            package1_inclusion5: "Fullboard (Termasuk Bagasi)",
            package2_title: "Pakej All-in Lengkap",
            package2_subtitle: "Pengalaman percutian tanpa pening, semua kami uruskan.",
            package2_inclusion1: "Hotel / Penginapan",
            package2_inclusion2: "Makan (Sarapan, Tengahari, Malam)",
            package3_title: "Pakej Lawatan Khas",
            package3_subtitle: "Anda pilih destinasi, kami uruskan tiket dan pengangkutan.",
            package3_inclusion_plus: "Semua dari Pakej Pengangkutan, serta:",
            package3_inclusion1: "Tiket Masukan Lawatan",
            package3_inclusion2: "Cadangan Laluan Terbaik",
            package2_inclusion_plus: "Semua dari Pakej Khas, serta:",
            pricing_disclaimer: "*Harga boleh berubah bergantung pada jenis kenderaan, pilihan hotel, jarak, destinasi, dan ketersediaan. Harga di atas adalah untuk kawasan Bandung City Tour.",
            pricing_cta: "Rancang Percutian Anda!",
            vehicles_title: "Armada Kenderaan",
            vehicles_desc: "Pilihan kenderaan yang selesa dan diselenggara dengan baik untuk lawatan anda. Semua kenderaan dilengkapi dengan penghawa dingin, sistem bunyi, dan pemandu berpengalaman.",
            passenger_count: "{count} Penumpang",
            facilities_title: "Fasiliti Kenderaan",
            facility1_title: "Penghawa Dingin",
            facility1_desc: "Nikmati perjalanan yang sejuk dan selesa dalam apa jua keadaan cuaca. Setiap unit kami dilengkapi penghawa dingin yang diselenggara rapi untuk memastikan suhu kabin yang optimum.",
            facility2_title: "Sistem Bunyi",
            facility2_desc: "Hiburkan perjalanan anda dengan sistem audio berkualiti tinggi. Sambungkan senarai main kegemaran anda dengan mudah melalui Bluetooth dan USB untuk pengalaman hiburan peribadi.",
            facility3_title: "Pemandu Berpengalaman",
            facility3_desc: "Pemandu profesional dengan pengetahuan pakar tentang laluan terbaik, tempat kulinari, dan cadangan teratas untuk restoran dan penginapan di setiap bandar.",
            avanza_desc: "Sebuah MPV keluarga yang boleh dipercayai yang menawarkan keselesaan maksimum untuk menerokai pelbagai destinasi.",
            innova_desc: "MPV premium dengan keselesaan maksimum untuk perjalanan jarak jauh.",
            hiace14_desc: "Minibus yang sesuai untuk kumpulan kecil dengan ruang bagasi yang luas.",
            hiace16_desc: "Minibus dengan kapasiti lebih besar untuk kumpulan pelancongan yang lebih ramai.",
            fortuner_desc: "SUV mewah dengan prestasi lasak untuk sebarang medan.",
            xenia_desc: "MPV ekonomi dengan kecekapan bahan api yang baik.",
            confero_desc: "MPV moden dengan reka bentuk yang bergaya dan ciri lengkap.",
            ertiga_desc: "MPV kompak dengan penggunaan bahan api yang jimat.",
            mobilio_desc: "MPV yang handal dengan teknologi Honda yang dipercayai.",
            luxio_desc: "Kabin yang luas dan fleksibel, memberikan keselesaan tambahan untuk perjalanan keluarga atau kumpulan kecil.",
            calya_desc: "Keselesaan dan kecekapan dalam satu pakej LCGC, sesuai untuk pengembaraan keluarga yang jimat.",
            sigra_desc: "Pilihan bijak dan jimat bahan api untuk perjalanan keluarga kecil atau mobiliti lincah di bandar.",
            elf_desc: "Kukuh dan boleh diharap untuk kumpulan bersaiz sederhana, mampu sampai ke pelbagai medan dengan cekap.",
            bus_medium_desc: "Penyelesaian ideal untuk kumpulan pelancong, perjalanan keluarga besar, atau acara korporat dengan penuh keselesaan.",
            bus_big_desc: "Kapasiti maksimum untuk lawatan berskala besar, rombongan sambil belajar, atau perhimpunan dengan kemudahan lengkap.",
            brv_desc: "SUV kompak dengan kelegaan tanah yang tinggi untuk pelbagai medan.",
            destinations_title: "Destinasi Pelancongan",
            destinations_desc: "Terokai pelbagai destinasi menarik di Bandung, dari tarikan semula jadi yang menakjubkan hingga tempat makan dan penginapan yang selesa.",
            tab_nature: "Tarikan Semula Jadi",
            tab_food: "Tempat Makan",
            tab_lodging: "Penginapan",
            kawah_putih_desc: "Tasik gunung berapi yang menakjubkan dengan air berwarna putih kehijauan.",
            ranca_upas_desc: "Tapak perkhemahan dengan pemandangan semula jadi yang indah dan udara yang sejuk.",
            situ_patenggang_desc: "Tasik semula jadi dengan legenda romantis dan pemandangan yang menawan.",
            glamping_lakeside_desc: "Pengalaman perkhemahan mewah di tepi tasik yang menawan.",
            kebun_strawberry_desc: "Petik strawberi segar terus dari ladangnya.",
            tangkuban_perahu_desc: "Gunung berapi aktif dengan kawah yang menakjubkan.",
            farmhouse_desc: "Pelancongan bertemakan Eropah dengan suasana desa yang menawan.",
            thelodge_desc: "Pelancongan alam dengan jambatan gantung dan pemandangan lembah.",
            floating_market_desc: "Pasar terapung dengan pelbagai pilihan kulinari dan tarikan menarik.",
            orchid_forest_desc: "Hutan orkid dengan pelbagai aktiviti luar yang menyeronokkan.",
            situ_cileunca_desc: "Tasik yang indah dengan aktiviti perahu dan pemandangan pergunungan.",
            teh_malabar_desc: "Hamparan ladang teh hijau yang menenangkan mata.",
            nimo_highland_desc: "Destinasi pelancongan dengan pemandangan dataran tinggi yang menakjubkan.",
            cibolang_desc: "Bersantai di kolam air panas semula jadi yang menyegarkan.",
            woda_cafe_desc: "Kafe dengan pemandangan semula jadi yang indah.",
            sindang_reret_ciwidey_desc: "Restoran dengan masakan Sunda yang asli.",
            saung_gawir_desc: "Tempat makan dengan suasana pondok tradisional.",
            lembah_ciwidey_resto_desc: "Restoran dengan pemandangan lembah yang menawan.",
            the_valley_desc: "Restoran berkonsep moden dengan pemandangan pergunungan.",
            sunda_rasa_desc: "Masakan Sunda dengan cita rasa tradisional.",
            miss_bee_desc: "Kafe dengan konsep 'dari ladang ke meja'.",
            ibu_imas_desc: "Gerai tradisional dengan masakan seperti di rumah.",
            sindang_reret_pangalengan_desc: "Restoran yang pakar dalam ikan bakar.",
            glamping_lakeside_lodging_desc: "Pengalaman glamping mewah di tepi tasik.",
            ciwidey_valley_resort_desc: "Resort dengan kemudahan lengkap dan pemandangan lembah.",
            bubu_jungle_desc: "Resort dengan konsep semula jadi dan suasana hutan.",
            thelodge_lodging_desc: "Lodge dengan pemandangan lembah yang menakjubkan.",
            dusun_bambu_desc: "Resort keluarga dengan konsep alam dan budaya.",
            grafika_cikole_desc: "Hotel dengan suasana pergunungan yang sejuk.",
            contact_title: "Hubungi Kami",
            contact_desc: "Bersedia untuk merancang pengembaraan anda? Hubungi kami sekarang untuk maklumat lanjut dan tempahan.",
            contact_phone: "Telefon",
            contact_email: "E-mel",
            contact_address: "Alamat",
            title_call: "Panggilan Terus",
            title_whatsapp: "Sembang di WhatsApp",
            follow_us_social: "Ikuti Media Sosial Kami",
            contact_form_title: "Borang Hubungan",
            form_name: "Nama Penuh",
            form_phone_whatsapp: "Telefon / WhatsApp",
            form_message: "Mesej (Pilihan)",
            form_send_whatsapp: "Hantar melalui WhatsApp",
            form_send_sms_fallback: "Tiada WhatsApp? Hantar melalui SMS",
            placeholder_name: "Masukkan nama penuh anda",
            placeholder_phone: "Masukkan nombor telefon anda",
            placeholder_message_optional: "Tulis mesej atau soalan anda di sini",
            footer_desc: "Terokai pengembaraan pelancongan, kulinari, dan budaya yang tidak dapat dilupakan, serta temui hotel, vila, dan tempat terbaik di Bandung, Jogja, dan Jakarta bersama kami.",
            footer_service_areas: "Kawasan Perkhidmatan",
            footer_contact: "Hubungi",
            footer_copyright: "© 2025 HiLing Travel. Hak cipta terpelihara.",
            price_starts_from: "Bermula dari",
            price_per_day: "/ hari"
        },
        // Singapura (kode: en-SG)
        "en-SG": {
            tagline: "Tour Guide & Private Transport in Bandung, Jogja, Jakarta",
            nav_home: "Home",
            nav_about: "About Us",
            nav_vehicles: "Vehicles",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            slide1_title: "The Metropolitan Charm of Jakarta",
            slide1_subtitle: "From Iconic Monuments to Modern City Life",
            slide2_title: "The Cultural Wonders of Yogyakarta",
            slide2_subtitle: "Explore the Majestic Historical Heritage",
            slide3_title: "The Creativity of Bandung, the Flower City",
            slide3_subtitle: "Enjoy its Cool Nature and Urban Innovation",
            explore_now: "Explore Now",
            about_title: "About Us",
            about_desc: "We are a <strong>Professional Tour Guide</strong> service provider focused on your <strong>travel comfort</strong> in Bandung, Jogja, and Jakarta. Enjoy the convenience of <strong>pickup</strong> from your location or the airport, and let us guide you in <strong>exploring a variety of fascinating places</strong>. From the best tourist destinations to recommendations for renowned restaurants, we are committed to providing an unforgettable experience with our excellent fleet of vehicles.",
            feature1_title: "Comfortable Vehicles",
            feature1_desc: "Various vehicle options, from 7 to 40+ passengers.",
            feature2_title: "Complete Destinations",
            feature2_desc: "Nature, culture, culinary tours, plus the best hotel & villa recommendations.",
            contact_info_title: "Contact Information",
            follow_us: "Follow Us",
            vehicles_title: "Vehicle Fleet",
            vehicles_desc: "A choice of comfortable and well-maintained vehicles for your tour. All vehicles are equipped with AC, sound system, and experienced drivers.",
            passenger_count: "{count} Passengers",
            facilities_title: "Vehicle Facilities",
            facility1_title: "Cold AC",
            facility1_desc: "Enjoy a cool and comfortable journey, regardless of the weather outside. Each vehicle is equipped with a well-maintained AC system to ensure an optimal cabin temperature.",
            facility2_title: "Sound System",
            facility2_desc: "Liven up your journey with our high-quality sound system. Easily connect your favorite playlists via Bluetooth or USB for a personalized entertainment experience on the road.",
            facility3_title: "Experienced Driver",
            facility3_desc: "Professional drivers with expert knowledge of the best routes, culinary spots, and top recommendations for restaurants and lodging in each city.",
            avanza_desc: "A reliable family MPV that offers maximum comfort for exploring various destinations.",
            innova_desc: "Premium MPV with maximum comfort for long-distance travel.",
            hiace14_desc: "Ideal minibus for small groups with spacious luggage space.",
            hiace16_desc: "Minibus with a larger capacity for more numerous tour groups.",
            luxio_desc: "A spacious and flexible cabin, providing extra comfort for family trips or small groups.",
            xenia_desc: "An economical MPV with good fuel efficiency.",
            ertiga_desc: "A compact MPV with economical fuel consumption.",
            calya_desc: "Comfort and efficiency in one LCGC package, perfect for budget-friendly family adventures.",
            sigra_desc: "A smart and fuel-efficient choice for small family trips or agile city mobility.",
            elf_desc: "Tough and reliable for medium-sized groups, capable of reaching various terrains efficiently.",
            bus_medium_desc: "The ideal solution for tour groups, large family trips, or corporate events with comfort.",
            bus_big_desc: "Maximum capacity for large-scale tours, study trips, or gatherings with complete facilities.",
            pricing_title: "Price Simulation & Packages",
            pricing_subtitle: "Choose the package that best suits your travel needs. Transparent and competitive pricing.",
            package1_title: "Transport & Driver Package",
            package1_subtitle: "Focused on a comfortable and efficient journey.",
            package1_inclusion1: "Transportation",
            package1_inclusion2: "Professional Driver",
            package1_inclusion3: "Gasoline / Petrol",
            package1_inclusion4: "Toll & Parking Fees",
            package1_inclusion5: "Fullboard (Baggage Included)",
            package3_title: "Custom Tour Package",
            package3_subtitle: "You choose the destination, we handle tickets and transport.",
            package3_inclusion_plus: "Everything from Transport Package, plus:",
            package3_inclusion1: "Attraction Entrance Tickets",
            package3_inclusion2: "Best Route Recommendations",
            package2_title: "Fullboard Tour Package",
            package2_subtitle: "A hassle-free, All-in vacation experience. Just enjoy your trip.",
            package2_inclusion_plus: "Everything from Custom Package, plus:",
            package2_inclusion1: "Hotel / Lodging",
            package2_inclusion2: "Meals (Breakfast, Lunch, Dinner)",
            pricing_disclaimer: "*Prices are subject to change depending on vehicle type, hotel selection, distance, destination, and availability. The prices above are for the Bandung City Tour area.",
            pricing_cta: "Free Consultation!",
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
            form_phone_whatsapp: "Phone / WhatsApp",
            form_message: "Message (Optional)",
            form_send_whatsapp: "Send via WhatsApp",
            form_send_sms_fallback: "Don't have WhatsApp? Send via SMS",
            placeholder_name: "Enter your full name",
            placeholder_phone: "Enter your phone number",
            placeholder_message_optional: "Write your message or question here",
            footer_desc: "Explore unforgettable travel, culinary, and cultural adventures, and discover the best hotels, villas, and top spots in Bandung, Jogja, and Jakarta with us.",
            footer_service_areas: "Service Areas",
            footer_contact: "Contact",
            footer_copyright: "© 2025 HiLing Travel. All rights reserved.",
            price_starts_from: "Starts from",
            price_per_day: "/ day",
            select_language_label: "Select Language",
            select_language_tooltip: "Select Language"
        },

        // Brunei (kode: ms-BN)
        "ms-BN": {
            tagline: "Pemandu Pelancong & Pengangkutan Peribadi di Bandung, Jogja, Jakarta",
            nav_home: "Laman Utama",
            nav_about: "Tentang Kami",
            nav_vehicles: "Kenderaan",
            nav_pricing: "Harga",
            nav_contact: "Hubungi Kami",
            slide1_title: "Pesona Metropolitan Jakarta",
            slide1_subtitle: "Dari Monumen Ikonik ke Kehidupan Kota Moden",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Terokai Warisan Sejarah yang Agung",
            slide3_title: "Kreativiti Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Kesejukan Alam dan Inovasi Kota",
            explore_now: "Terokai Sekarang",
            about_title: "Tentang Kami",
            about_desc: "Kami adalah penyedia perkhidmatan <strong>Pemandu Pelancong Profesional</strong>, tertumpu pada <strong>keselesaan perjalanan</strong> anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>pengambilan</strong> dari lokasi anda atau lapangan terbang, dan biarkan kami memandu anda <strong>menerokai pelbagai tempat menarik</strong>. Dari destinasi pelancongan terbaik hingga cadangan restoran terkenal, kami komited untuk memberikan pengalaman yang tidak dapat dilupakan dengan armada kenderaan kami yang prima.",
            feature1_title: "Kenderaan Selesa",
            feature1_desc: "Pelbagai pilihan kenderaan, dari 7 hingga 40+ penumpang.",
            feature2_title: "Destinasi Lengkap",
            feature2_desc: "Pelancongan alam, budaya, kulinari, serta cadangan hotel & vila terbaik.",
            contact_info_title: "Maklumat Hubungan",
            follow_us: "Ikuti Kami",
            vehicles_title: "Armada Kenderaan",
            vehicles_desc: "Pilihan kenderaan yang selesa dan diselenggara dengan baik untuk lawatan anda. Semua kenderaan dilengkapi dengan penghawa dingin, sistem bunyi, dan pemandu berpengalaman.",
            passenger_count: "{count} Penumpang",
            facilities_title: "Fasiliti Kenderaan",
            facility1_title: "Penghawa Dingin",
            facility1_desc: "Nikmati perjalanan yang sejuk dan selesa dalam apa jua keadaan cuaca. Setiap unit kami dilengkapi penghawa dingin yang diselenggara rapi untuk memastikan suhu kabin yang optimum.",
            facility2_title: "Sistem Bunyi",
            facility2_desc: "Hiburkan perjalanan anda dengan sistem audio berkualiti tinggi. Sambungkan senarai main kegemaran anda dengan mudah melalui Bluetooth dan USB untuk pengalaman hiburan peribadi.",
            facility3_title: "Pemandu Berpengalaman",
            facility3_desc: "Pemandu profesional dengan pengetahuan pakar tentang laluan terbaik, tempat kulinari, dan cadangan teratas untuk restoran dan penginapan di setiap bandar.",
            avanza_desc: "Sebuah MPV keluarga yang boleh dipercayai yang menawarkan keselesaan maksimum untuk menerokai pelbagai destinasi.",
            innova_desc: "MPV premium dengan keselesaan maksimum untuk perjalanan jarak jauh.",
            hiace14_desc: "Minibus yang sesuai untuk kumpulan kecil dengan ruang bagasi yang luas.",
            hiace16_desc: "Minibus dengan kapasiti lebih besar untuk kumpulan pelancongan yang lebih ramai.",
            luxio_desc: "Kabin yang luas dan fleksibel, memberikan keselesaan tambahan untuk perjalanan keluarga atau kumpulan kecil.",
            xenia_desc: "MPV ekonomi dengan kecekapan bahan api yang baik.",
            ertiga_desc: "MPV kompak dengan penggunaan bahan api yang jimat.",
            calya_desc: "Keselesaan dan kecekapan dalam satu pakej LCGC, sesuai untuk pengembaraan keluarga yang jimat.",
            sigra_desc: "Pilihan bijak dan jimat bahan api untuk perjalanan keluarga kecil atau mobiliti lincah di bandar.",
            elf_desc: "Kukuh dan boleh diharap untuk kumpulan bersaiz sederhana, mampu sampai ke pelbagai medan dengan cekap.",
            bus_medium_desc: "Penyelesaian ideal untuk kumpulan pelancong, perjalanan keluarga besar, atau acara korporat dengan penuh keselesaan.",
            bus_big_desc: "Kapasiti maksimum untuk lawatan berskala besar, rombongan sambil belajar, atau perhimpunan dengan kemudahan lengkap.",
            pricing_title: "Simulasi Harga & Pakej",
            pricing_subtitle: "Pilih pakej yang paling sesuai dengan keperluan perjalanan anda. Harga telus dan kompetitif.",
            package1_title: "Pakej Pengangkutan & Pemandu",
            package1_subtitle: "Fokus pada perjalanan yang selesa dan cekap.",
            package1_inclusion1: "Pengangkutan",
            package1_inclusion2: "Pemandu Profesional",
            package1_inclusion3: "Petrol / Solar",
            package1_inclusion4: "Bayaran Tol & Tempat Letak Kereta",
            package1_inclusion5: "Fullboard (Termasuk Bagasi)",
            package3_title: "Pakej Lawatan Khas",
            package3_subtitle: "Anda pilih destinasi, kami uruskan tiket dan pengangkutan.",
            package3_inclusion_plus: "Semua dari Pakej Pengangkutan, serta:",
            package3_inclusion1: "Tiket Masukan Lawatan",
            package3_inclusion2: "Cadangan Laluan Terbaik",
            package2_title: "Pakej Pelancongan Fullboard",
            package2_subtitle: "Pengalaman percutian All-in tanpa pening, hanya nikmati perjalanan anda.",
            package2_inclusion_plus: "Semua dari Pakej Khas, serta:",
            package2_inclusion1: "Hotel / Penginapan",
            package2_inclusion2: "Makan (Sarapan, Tengahari, Malam)",
            pricing_disclaimer: "*Harga boleh berubah bergantung pada jenis kenderaan, pilihan hotel, jarak, destinasi, dan ketersediaan. Harga di atas adalah untuk kawasan Bandung City Tour.",
            pricing_cta: "Konsultasi Percuma!",
            contact_title: "Hubungi Kami",
            contact_desc: "Bersedia untuk merancang pengembaraan anda? Hubungi kami sekarang untuk maklumat lanjut dan tempahan.",
            contact_phone: "Telefon",
            contact_email: "E-mel",
            contact_address: "Alamat",
            title_call: "Panggilan Terus",
            title_whatsapp: "Sembang di WhatsApp",
            follow_us_social: "Ikuti Media Sosial Kami",
            contact_form_title: "Borang Hubungan",
            form_name: "Nama Penuh",
            form_phone_whatsapp: "Telefon / WhatsApp",
            form_message: "Mesej (Pilihan)",
            form_send_whatsapp: "Hantar melalui WhatsApp",
            form_send_sms_fallback: "Tiada WhatsApp? Hantar melalui SMS",
            placeholder_name: "Masukkan nama penuh anda",
            placeholder_phone: "Masukkan nombor telefon anda",
            placeholder_message_optional: "Tulis mesej atau soalan anda di sini",
            footer_desc: "Terokai pengembaraan pelancongan, kulinari, dan budaya yang tidak dapat dilupakan, serta temui hotel, vila, dan tempat terbaik di Bandung, Jogja, dan Jakarta bersama kami.",
            footer_service_areas: "Kawasan Perkhidmatan",
            footer_contact: "Hubungi",
            footer_copyright: "© 2025 HiLing Travel. Hak cipta terpelihara.",
            price_starts_from: "Bermula dari",
            price_per_day: "/ hari",
            select_language_label: "Pilih Bahasa",
            select_language_tooltip: "Pilih Bahasa"
        },

        // Thailand (kode: th)
        th: {
            tagline: "ไกด์ทัวร์และรถส่วนตัวในบันดุง, ยอกยาการ์ตา, และจาการ์ตา",
            nav_home: "หน้าแรก",
            nav_about: "เกี่ยวกับเรา",
            nav_vehicles: "ยานพาหนะ",
            nav_pricing: "ราคา",
            nav_contact: "ติดต่อเรา",
            slide1_title: "เสน่ห์ของกรุงจาการ์ตา",
            slide1_subtitle: "จากอนุสาวรีย์สู่ชีวิตเมืองที่ทันสมัย",
            slide2_title: "ความมหัศจรรย์ทางวัฒนธรรมของยอกยาการ์ตา",
            slide2_subtitle: "สำรวจมรดกทางประวัติศาสตร์อันยิ่งใหญ่",
            slide3_title: "ความคิดสร้างสรรค์ของบันดุง",
            slide3_subtitle: "เพลิดเพลินกับธรรมชาติและนวัตกรรมของเมือง",
            explore_now: "สำรวจตอนนี้",
            about_title: "เกี่ยวกับเรา",
            about_desc: "เราเป็นผู้ให้บริการ <strong>ไกด์ทัวร์มืออาชีพ</strong> ที่มุ่งเน้น <strong>ความสะดวกสบายในการเดินทาง</strong> ของคุณในบันดุง, ยอกยาการ์ตา, และจาการ์ตา เพลิดเพลินกับบริการ <strong>รับส่ง</strong> จากที่พักหรือสนามบิน และให้เรานำทางคุณ <strong>สำรวจสถานที่น่าสนใจต่างๆ</strong> จากสถานที่ท่องเที่ยวที่ดีที่สุดไปจนถึงร้านอาหารแนะนำ เรามุ่งมั่นที่จะมอบประสบการณ์ที่น่าจดจำ",
            feature1_title: "ยานพาหนะที่สะดวกสบาย",
            feature1_desc: "มีรถให้เลือกหลากหลาย, ตั้งแต่ 7 ถึง 40+ ที่นั่ง",
            feature2_title: "จุดหมายปลายทางครบวงจร",
            feature2_desc: "ทัวร์ธรรมชาติ, วัฒนธรรม, อาหาร, พร้อมคำแนะนำโรงแรมและวิลล่าที่ดีที่สุด",
            contact_info_title: "ข้อมูลการติดต่อ",
            follow_us: "ติดตามเรา",
            vehicles_title: "ขบวนยานพาหนะ",
            vehicles_desc: "เลือกยานพาหนะที่สะดวกสบายและได้รับการดูแลอย่างดีสำหรับการเดินทางของคุณ รถทุกคันมีระบบปรับอากาศ, เครื่องเสียง, และคนขับที่มีประสบการณ์",
            passenger_count: "{count} ที่นั่ง",
            facilities_title: "สิ่งอำนวยความสะดวกในรถ",
            facility1_title: "แอร์เย็น",
            facility1_desc: "เดินทางเย็นสบายในทุกสภาพอากาศ รถทุกคันมีระบบปรับอากาศที่ดูแลอย่างดีเพื่อให้ห้องโดยสารมีอุณหภูมิที่เหมาะสม",
            facility2_title: "ระบบเครื่องเสียง",
            facility2_desc: "สร้างบรรยากาศด้วยระบบเสียงคุณภาพสูง เชื่อมต่อเพลย์ลิสต์ของคุณผ่าน Bluetooth หรือ USB เพื่อความบันเทิงส่วนตัว",
            facility3_title: "คนขับที่มีประสบการณ์",
            facility3_desc: "คนขับมืออาชีพที่เชี่ยวชาญเส้นทางท่องเที่ยว, อาหาร, และคำแนะนำร้านอาหารและที่พักที่ดีที่สุดในแต่ละเมือง",
            avanza_desc: "MPV ครอบครัวที่เชื่อถือได้ ให้ความสะดวกสบายสูงสุดสำหรับการสำรวจจุดหมายปลายทางต่างๆ",
            innova_desc: "MPV พรีเมียมเพื่อความสะดวกสบายสูงสุดในการเดินทางไกล",
            hiace14_desc: "มินิบัสที่เหมาะสำหรับกลุ่มเล็กพร้อมพื้นที่เก็บสัมภาระกว้างขวาง",
            hiace16_desc: "มินิบัสความจุขนาดใหญ่สำหรับกลุ่มทัวร์ขนาดใหญ่",
            luxio_desc: "ห้องโดยสารกว้างขวางและยืดหยุ่น ให้ความสะดวกสบายเป็นพิเศษสำหรับครอบครัวหรือกลุ่มเล็ก",
            xenia_desc: "MPV ประหยัดพร้อมประสิทธิภาพการใช้เชื้อเพลิงที่ดี",
            ertiga_desc: "MPV ขนาดกะทัดรัดพร้อมการสิ้นเปลืองเชื้อเพลิงที่ประหยัด",
            calya_desc: "ความสะดวกสบายและประสิทธิภาพในแพ็คเกจ LCGC เหมาะสำหรับการผจญภัยแบบประหยัดกับครอบครัว",
            sigra_desc: "ทางเลือกที่ชาญฉลาดและประหยัดสำหรับการเดินทางของครอบครัวเล็กๆ หรือการเดินทางในเมืองที่คล่องตัว",
            elf_desc: "แข็งแกร่งและเชื่อถือได้สำหรับกลุ่มขนาดกลาง สามารถเดินทางไปยังภูมิประเทศต่างๆ ได้อย่างมีประสิทธิภาพ",
            bus_medium_desc: "ทางออกที่ดีเยี่ยมสำหรับกลุ่มทัวร์, การเดินทางของครอบครัวใหญ่, หรืองานของบริษัท",
            bus_big_desc: "ความจุสูงสุดสำหรับทัวร์ขนาดใหญ่, การเดินทางเพื่อการศึกษา, หรืองานสังสรรค์พร้อมสิ่งอำนวยความสะดวกครบครัน",
            pricing_title: "การจำลองราคาและแพ็คเกจ",
            pricing_subtitle: "เลือกแพ็คเกจที่เหมาะสมกับความต้องการในการเดินทางของคุณ ราคาโปร่งใสและแข่งขันได้",
            package1_title: "แพ็คเกจรถพร้อมคนขับ",
            package1_subtitle: "มุ่งเน้นการเดินทางที่สะดวกสบายและมีประสิทธิภาพ",
            package1_inclusion1: "การขนส่ง",
            package1_inclusion2: "คนขับมืออาชีพ",
            package1_inclusion3: "น้ำมัน",
            package1_inclusion4: "ค่าทางด่วนและที่จอดรถ",
            package1_inclusion5: "ฟูลบอร์ด (รวมสัมภาระ)",
            package3_title: "แพ็คเกจทัวร์แบบกำหนดเอง",
            package3_subtitle: "คุณเลือกจุดหมาย เราจัดการตั๋วและการเดินทาง",
            package3_inclusion_plus: "ทั้งหมดจากแพ็คเกจรถ, เพิ่มเติม:",
            package3_inclusion1: "ตั๋วเข้าชมสถานที่",
            package3_inclusion2: "คำแนะนำเส้นทางที่ดีที่สุด",
            package2_title: "แพ็คเกจทัวร์ฟูลบอร์ด",
            package2_subtitle: "ประสบการณ์วันหยุดที่ไร้กังวล แค่สนุกกับการเดินทางของคุณ",
            package2_inclusion_plus: "ทั้งหมดจากแพ็คเกจกำหนดเอง, เพิ่มเติม:",
            package2_inclusion1: "โรงแรม / ที่พัก",
            package2_inclusion2: "อาหาร (เช้า, กลางวัน, เย็น)",
            pricing_disclaimer: "*ราคาอาจเปลี่ยนแปลงได้ขึ้นอยู่กับประเภทรถ, โรงแรม, ระยะทาง, และความพร้อมให้บริการ ราคาข้างต้นสำหรับทัวร์ในเมืองบันดุง",
            pricing_cta: "ปรึกษาฟรี!",
            contact_title: "ติดต่อเรา",
            contact_desc: "พร้อมที่จะวางแผนการผจญภัยของคุณแล้วหรือยัง? ติดต่อเราตอนนี้สำหรับข้อมูลเพิ่มเติมและการจอง",
            contact_phone: "โทรศัพท์",
            contact_email: "อีเมล",
            contact_address: "ที่อยู่",
            title_call: "โทรโดยตรง",
            title_whatsapp: "แชททาง WhatsApp",
            follow_us_social: "ติดตามโซเชียลมีเดียของเรา",
            contact_form_title: "แบบฟอร์มการติดต่อ",
            form_name: "ชื่อเต็ม",
            form_phone_whatsapp: "โทรศัพท์ / WhatsApp",
            form_message: "ข้อความ (ไม่บังคับ)",
            form_send_whatsapp: "ส่งผ่าน WhatsApp",
            form_send_sms_fallback: "ไม่มี WhatsApp? ส่งทาง SMS",
            placeholder_name: "ใส่ชื่อเต็มของคุณ",
            placeholder_phone: "ใส่หมายเลขโทรศัพท์ของคุณ",
            placeholder_message_optional: "เขียนข้อความหรือคำถามของคุณที่นี่",
            footer_desc: "สำรวจการเดินทาง, อาหาร, และวัฒนธรรมที่น่าจดจำ และค้นพบโรงแรม, วิลล่า, และสถานที่ที่ดีที่สุดในบันดุง, ยอกยาการ์ตา, และจาการ์ตาไปกับเรา",
            footer_service_areas: "พื้นที่ให้บริการ",
            footer_contact: "ติดต่อ",
            footer_copyright: "© 2025 HiLing Travel สงวนลิขสิทธิ์",
            price_starts_from: "เริ่มต้นที่",
            price_per_day: "/ วัน",
            select_language_label: "เลือกภาษา",
            select_language_tooltip: "เลือกภาษา"
        },

        // Vietnam (kode: vi)
        vi: {
            tagline: "Hướng dẫn viên & Xe riêng tại Bandung, Jogja, Jakarta",
            nav_home: "Trang chủ",
            nav_about: "Về chúng tôi",
            nav_vehicles: "Phương tiện",
            nav_pricing: "Giá",
            nav_contact: "Liên hệ",
            slide1_title: "Vẻ đẹp đô thị Jakarta",
            slide1_subtitle: "Từ những tượng đài biểu tượng đến cuộc sống thành phố hiện đại",
            slide2_title: "Kỳ quan văn hóa Yogyakarta",
            slide2_subtitle: "Khám phá di sản lịch sử hùng vĩ",
            slide3_title: "Sự sáng tạo của Bandung",
            slide3_subtitle: "Tận hưởng thiên nhiên mát mẻ và sự đổi mới của thành phố",
            explore_now: "Khám phá ngay",
            about_title: "Về chúng tôi",
            about_desc: "Chúng tôi là nhà cung cấp dịch vụ <strong>Hướng dẫn viên chuyên nghiệp</strong>, tập trung vào <strong>sự thoải mái trong chuyến đi</strong> của bạn tại Bandung, Jogja và Jakarta. Tận hưởng sự tiện lợi của dịch vụ <strong>đón</strong> tại địa điểm của bạn hoặc sân bay, và để chúng tôi hướng dẫn bạn <strong>khám phá nhiều địa điểm hấp dẫn</strong>. Từ những điểm đến du lịch tốt nhất đến những gợi ý nhà hàng nổi tiếng, chúng tôi cam kết mang lại trải nghiệm khó quên.",
            feature1_title: "Phương tiện thoải mái",
            feature1_desc: "Nhiều lựa chọn phương tiện, từ 7 đến 40+ chỗ.",
            feature2_title: "Điểm đến trọn gói",
            feature2_desc: "Tour thiên nhiên, văn hóa, ẩm thực, cùng với gợi ý khách sạn và biệt thự tốt nhất.",
            contact_info_title: "Thông tin liên hệ",
            follow_us: "Theo dõi chúng tôi",
            vehicles_title: "Đội xe",
            vehicles_desc: "Lựa chọn các phương tiện thoải mái và được bảo dưỡng tốt cho chuyến đi của bạn. Tất cả các xe đều được trang bị máy lạnh, hệ thống âm thanh và tài xế kinh nghiệm.",
            passenger_count: "{count} khách",
            facilities_title: "Tiện nghi trên xe",
            facility1_title: "Điều hòa mát lạnh",
            facility1_desc: "Tận hưởng chuyến đi mát mẻ và thoải mái trong mọi điều kiện thời tiết. Mỗi xe của chúng tôi đều được trang bị máy lạnh được bảo dưỡng tốt để đảm bảo nhiệt độ tối ưu trong cabin.",
            facility2_title: "Hệ thống âm thanh",
            facility2_desc: "Làm sôi động chuyến đi của bạn với hệ thống âm thanh chất lượng cao. Dễ dàng kết nối danh sách nhạc yêu thích của bạn qua Bluetooth hoặc USB để có trải nghiệm giải trí cá nhân.",
            facility3_title: "Tài xế kinh nghiệm",
            facility3_desc: "Tài xế chuyên nghiệp am hiểu các tuyến đường du lịch, ẩm thực và các gợi ý tốt nhất cho nhà hàng và chỗ ở tại mỗi thành phố.",
            avanza_desc: "Một chiếc MPV gia đình đáng tin cậy mang lại sự thoải mái tối đa để khám phá nhiều điểm đến.",
            innova_desc: "MPV cao cấp cho sự thoải mái tối đa trong các chuyến đi dài.",
            hiace14_desc: "Xe minibus lý tưởng cho các nhóm nhỏ với không gian hành lý rộng rãi.",
            hiace16_desc: "Xe minibus có sức chứa lớn hơn cho các nhóm du lịch đông người hơn.",
            luxio_desc: "Cabin rộng rãi và linh hoạt, mang lại sự thoải mái hơn cho các chuyến đi gia đình hoặc nhóm nhỏ.",
            xenia_desc: "MPV tiết kiệm với hiệu suất nhiên liệu tốt.",
            ertiga_desc: "MPV nhỏ gọn với mức tiêu thụ nhiên liệu tiết kiệm.",
            calya_desc: "Sự thoải mái và hiệu quả trong một gói LCGC, hoàn hảo cho các cuộc phiêu lưu gia đình tiết kiệm.",
            sigra_desc: "Một lựa chọn thông minh và tiết kiệm cho các chuyến đi gia đình nhỏ hoặc di chuyển linh hoạt trong thành phố.",
            elf_desc: "Mạnh mẽ và đáng tin cậy cho các nhóm cỡ vừa, có khả năng đi đến nhiều địa hình khác nhau một cách hiệu quả.",
            bus_medium_desc: "Giải pháp lý tưởng cho các nhóm du lịch, các chuyến đi gia đình lớn hoặc các sự kiện của công ty.",
            bus_big_desc: "Sức chứa tối đa cho các tour du lịch quy mô lớn, các chuyến đi học tập hoặc các buổi họp mặt với đầy đủ tiện nghi.",
            pricing_title: "Mô phỏng giá & Gói",
            pricing_subtitle: "Chọn gói phù hợp nhất với nhu cầu du lịch của bạn. Giá cả minh bạch và cạnh tranh.",
            package1_title: "Gói Xe & Tài xế",
            package1_subtitle: "Tập trung vào một hành trình thoải mái và hiệu quả.",
            package1_inclusion1: "Phương tiện di chuyển",
            package1_inclusion2: "Tài xế chuyên nghiệp",
            package1_inclusion3: "Xăng / Dầu",
            package1_inclusion4: "Phí cầu đường & Đỗ xe",
            package1_inclusion5: "Trọn gói (Bao gồm hành lý)",
            package3_title: "Gói Tour tùy chỉnh",
            package3_subtitle: "Bạn chọn điểm đến, chúng tôi lo vé và phương tiện.",
            package3_inclusion_plus: "Tất cả từ Gói Xe, cộng thêm:",
            package3_inclusion1: "Vé vào cửa các điểm tham quan",
            package3_inclusion2: "Gợi ý lộ trình tốt nhất",
            package2_title: "Gói Tour Trọn gói (Fullboard)",
            package2_subtitle: "Một kỳ nghỉ không lo lắng, chỉ cần tận hưởng chuyến đi của bạn.",
            package2_inclusion_plus: "Tất cả từ Gói Tùy chỉnh, cộng thêm:",
            package2_inclusion1: "Khách sạn / Chỗ ở",
            package2_inclusion2: "Các bữa ăn (Sáng, Trưa, Tối)",
            pricing_disclaimer: "*Giá có thể thay đổi tùy thuộc vào loại xe, lựa chọn khách sạn, khoảng cách, điểm đến và tình trạng sẵn có. Giá trên dành cho khu vực Tour thành phố Bandung.",
            pricing_cta: "Tư vấn miễn phí!",
            contact_title: "Liên hệ",
            contact_desc: "Sẵn sàng lên kế hoạch cho cuộc phiêu lưu của bạn? Liên hệ với chúng tôi ngay bây giờ để biết thêm thông tin và đặt chỗ.",
            contact_phone: "Điện thoại",
            contact_email: "Email",
            contact_address: "Địa chỉ",
            title_call: "Gọi trực tiếp",
            title_whatsapp: "Trò chuyện trên WhatsApp",
            follow_us_social: "Theo dõi chúng tôi trên mạng xã hội",
            contact_form_title: "Mẫu liên hệ",
            form_name: "Họ và tên",
            form_phone_whatsapp: "Điện thoại / WhatsApp",
            form_message: "Tin nhắn (Tùy chọn)",
            form_send_whatsapp: "Gửi qua WhatsApp",
            form_send_sms_fallback: "Không có WhatsApp? Gửi qua SMS",
            placeholder_name: "Nhập họ và tên của bạn",
            placeholder_phone: "Nhập số điện thoại của bạn",
            placeholder_message_optional: "Viết tin nhắn hoặc câu hỏi của bạn ở đây",
            footer_desc: "Khám phá những chuyến du lịch, ẩm thực và văn hóa khó quên, và khám phá những khách sạn, biệt thự và địa điểm tốt nhất tại Bandung, Jogja và Jakarta cùng chúng tôi.",
            footer_service_areas: "Khu vực dịch vụ",
            footer_contact: "Liên hệ",
            footer_copyright: "© 2025 HiLing Travel. Mọi quyền được bảo lưu.",
            price_starts_from: "Bắt đầu từ",
            price_per_day: "/ ngày",
            select_language_label: "Chọn ngôn ngữ",
            select_language_tooltip: "Chọn ngôn ngữ"
        },

        // China (kode: zh)
        zh: {
            tagline: "万隆、日惹、雅加达的导游和私人交通",
            nav_home: "首页",
            nav_about: "关于我们",
            nav_vehicles: "车辆",
            nav_pricing: "价格",
            nav_contact: "联系我们",
            slide1_title: "雅加达的都市魅力",
            slide1_subtitle: "从标志性纪念碑到现代城市生活",
            slide2_title: "日惹的文化奇迹",
            slide2_subtitle: "探索雄伟的历史遗产",
            slide3_title: "万隆的创造力",
            slide3_subtitle: "享受凉爽的自然和城市创新",
            explore_now: "立即探索",
            about_title: "关于我们",
            about_desc: "我们是提供<strong>专业导游</strong>服务的值得信赖的旅游服务提供商，致力于您在万隆、日惹和雅加达的<strong>旅行舒适度</strong>。享受从您的位置或机场<strong>接送</strong>的便利，让我们引导您<strong>探索各种有趣的地方</strong>。从最佳旅游目的地到著名餐厅的推荐，我们致力于提供难忘的体验。",
            feature1_title: "舒适的车辆",
            feature1_desc: "多种车辆选择，从7座到40座以上。",
            feature2_title: "完整的目的地",
            feature2_desc: "自然、文化、美食之旅，以及最佳酒店和别墅推荐。",
            contact_info_title: "联系信息",
            follow_us: "关注我们",
            vehicles_title: "车队",
            vehicles_desc: "为您的旅程选择舒适且维护良好的车辆。所有车辆均配备空调、音响系统和经验丰富的司机。",
            passenger_count: "{count}人",
            facilities_title: "车辆设施",
            facility1_title: "空调",
            facility1_desc: "在任何天气下都能享受凉爽舒适的旅程。每辆车都配有保养良好的空调系统，以确保最佳的车内温度。",
            facility2_title: "音响系统",
            facility2_desc: "通过蓝牙或USB连接您最喜爱的播放列表，享受个性化的娱乐体验，让您的旅程充满活力。",
            facility3_title: "经验丰富的司机",
            facility3_desc: "专业的司机，精通每个城市的旅游路线、美食以及最佳餐厅和住宿推荐。",
            avanza_desc: "可靠的家庭MPV，为探索各种目的地提供最大的舒适度。",
            innova_desc: "高级MPV，为长途旅行提供最大的舒适度。",
            hiace14_desc: "适合小团体并有宽敞行李空间的理想小巴。",
            hiace16_desc: "容量更大的小巴，适合人数较多的旅行团。",
            luxio_desc: "宽敞灵活的客舱，为家庭旅行或小团体提供额外的舒适度。",
            xenia_desc: "经济型MPV，燃油效率高。",
            ertiga_desc: "紧凑型MPV，油耗经济。",
            calya_desc: "舒适与效率集于一身的LCGC套餐，非常适合经济实惠的家庭探险。",
            sigra_desc: "适合小家庭旅行或灵活城市出行的明智节油选择。",
            elf_desc: "坚固可靠，适合中型团体，能够高效地到达各种地形。",
            bus_medium_desc: "旅行团、大家庭旅行或公司活动的理想解决方案。",
            bus_big_desc: "大型旅行团、实地考察或聚会的最大容量，设施齐全。",
            pricing_title: "价格模拟与套餐",
            pricing_subtitle: "选择最适合您旅行需求的套餐。价格透明且有竞争力。",
            package1_title: "交通与司机套餐",
            package1_subtitle: "专注于舒适高效的旅程。",
            package1_inclusion1: "交通",
            package1_inclusion2: "专业司机",
            package1_inclusion3: "汽油/柴油",
            package1_inclusion4: "过路费和停车费",
            package1_inclusion5: "全包（含行李）",
            package3_title: "定制旅游套餐",
            package3_subtitle: "您选择目的地，我们负责门票和交通。",
            package3_inclusion_plus: "包含交通套餐所有项目，并增加：",
            package3_inclusion1: "景点门票",
            package3_inclusion2: "最佳路线推荐",
            package2_title: "全食宿旅游套餐",
            package2_subtitle: "无忧的度假体验，只需享受您的旅程。",
            package2_inclusion_plus: "包含定制套餐所有项目，并增加：",
            package2_inclusion1: "酒店/住宿",
            package2_inclusion2: "餐食（早、午、晚餐）",
            pricing_disclaimer: "*价格可能因车辆类型、酒店选择、距离、目的地和可用性而异。以上价格适用于万隆市区游。",
            pricing_cta: "免费咨询！",
            contact_title: "联系我们",
            contact_desc: "准备好规划您的冒险之旅了吗？立即联系我们获取更多信息和预订。",
            contact_phone: "电话",
            contact_email: "电子邮件",
            contact_address: "地址",
            title_call: "直接致电",
            title_whatsapp: "在WhatsApp上聊天",
            follow_us_social: "在社交媒体上关注我们",
            contact_form_title: "联系表格",
            form_name: "全名",
            form_phone_whatsapp: "电话/WhatsApp",
            form_message: "留言（可选）",
            form_send_whatsapp: "通过WhatsApp发送",
            form_send_sms_fallback: "没有WhatsApp？通过短信发送",
            placeholder_name: "输入您的全名",
            placeholder_phone: "输入您的电话号码",
            placeholder_message_optional: "在此处写下您的留言或问题",
            footer_desc: "与我们一起探索难忘的旅行、美食和文化体验，并发现万隆、日惹和雅加达的最佳酒店、别墅和景点。",
            footer_service_areas: "服务区域",
            footer_contact: "联系方式",
            footer_copyright: "© 2025 HiLing Travel. 版权所有。",
            price_starts_from: "价格从",
            price_per_day: "/天",
            select_language_label: "选择语言",
            select_language_tooltip: "选择语言"
        },

        // Korea (kode: ko)
        ko: {
            tagline: "반둥, 족자카르타, 자카르타의 투어 가이드 및 개인 교통편",
            nav_home: "홈",
            nav_about: "회사 소개",
            nav_vehicles: "차량",
            nav_pricing: "가격",
            nav_contact: "문의하기",
            slide1_title: "자카르타의 대도시 매력",
            slide1_subtitle: "상징적인 기념물에서 현대적인 도시 생활까지",
            slide2_title: "족자카르타의 문화적 경이",
            slide2_subtitle: "웅장한 역사적 유산 탐험",
            slide3_title: "반둥의 창의성",
            slide3_subtitle: "시원한 자연과 도시 혁신을 즐기세요",
            explore_now: "지금 탐험하기",
            about_title: "회사 소개",
            about_desc: "저희는 반둥, 족자카르타, 자카르타에서의 <strong>편안한 여행</strong>을 위한 <strong>전문 투어 가이드</strong> 서비스를 제공합니다. 숙소나 공항에서 <strong>픽업</strong> 서비스를 즐기시고, 저희가 여러분을 <strong>다양한 명소로 안내</strong>해 드립니다. 최고의 관광지부터 유명 레스토랑 추천까지, 잊지 못할 경험을 제공하기 위해 최선을 다하고 있습니다.",
            feature1_title: "편안한 차량",
            feature1_desc: "7인승부터 40인승 이상까지 다양한 차량 옵션.",
            feature2_title: "완벽한 목적지",
            feature2_desc: "자연, 문화, 미식 투어 및 최고의 호텔 및 빌라 추천.",
            contact_info_title: "연락처 정보",
            follow_us: "팔로우하기",
            vehicles_title: "차량 목록",
            vehicles_desc: "여행을 위해 편안하고 잘 관리된 차량을 선택하세요. 모든 차량에는 에어컨, 사운드 시스템, 숙련된 운전기사가 갖춰져 있습니다.",
            passenger_count: "{count}인승",
            facilities_title: "차량 시설",
            facility1_title: "에어컨",
            facility1_desc: "어떤 날씨에도 시원하고 편안한 여행을 즐기세요. 모든 차량에는 최적의 실내 온도를 보장하기 위해 잘 관리된 에어컨 시스템이 갖춰져 있습니다.",
            facility2_title: "사운드 시스템",
            facility2_desc: "블루투스 또는 USB를 통해 좋아하는 재생 목록을 쉽게 연결하여 개인화된 엔터테인먼트 경험으로 여행에 활기를 더하세요.",
            facility3_title: "숙련된 운전기사",
            facility3_desc: "각 도시의 최고의 경로, 맛집, 레스토랑 및 숙소에 대한 최고의 추천에 대한 전문 지식을 갖춘 전문 운전기사.",
            avanza_desc: "다양한 목적지를 탐험하기 위한 최고의 편안함을 제공하는 신뢰할 수 있는 가족용 MPV.",
            innova_desc: "장거리 여행을 위한 최고의 편안함을 갖춘 프리미엄 MPV.",
            hiace14_desc: "넓은 수하물 공간을 갖춘 소규모 그룹에 이상적인 미니버스.",
            hiace16_desc: "더 많은 여행 그룹을 위한 더 큰 용량의 미니버스.",
            luxio_desc: "넓고 유연한 실내 공간으로 가족 여행이나 소규모 그룹에 추가적인 편안함을 제공합니다.",
            xenia_desc: "연비가 좋은 경제적인 MPV.",
            ertiga_desc: "연비가 경제적인 소형 MPV.",
            calya_desc: "편안함과 효율성을 하나로 묶은 LCGC 패키지로, 예산에 맞는 가족 모험에 적합합니다.",
            sigra_desc: "소규모 가족 여행이나 민첩한 도시 이동을 위한 현명하고 연비가 좋은 선택.",
            elf_desc: "중간 규모 그룹을 위한 견고하고 신뢰할 수 있는 차량으로, 다양한 지형에 효율적으로 도달할 수 있습니다.",
            bus_medium_desc: "여행 그룹, 대가족 여행 또는 기업 행사를 위한 이상적인 솔루션입니다.",
            bus_big_desc: "대규모 투어, 스터디 투어 또는 완벽한 시설을 갖춘 모임을 위한 최대 수용 인원입니다.",
            pricing_title: "가격 시뮬레이션 및 패키지",
            pricing_subtitle: "여행 필요에 가장 적합한 패키지를 선택하세요. 투명하고 경쟁력 있는 가격.",
            package1_title: "교통 및 운전기사 패키지",
            package1_subtitle: "편안하고 효율적인 여행에 중점을 둡니다.",
            package1_inclusion1: "교통편",
            package1_inclusion2: "전문 운전기사",
            package1_inclusion3: "주유비",
            package1_inclusion4: "통행료 및 주차비",
            package1_inclusion5: "풀보드(수하물 포함)",
            package3_title: "맞춤형 투어 패키지",
            package3_subtitle: "목적지를 선택하시면 저희가 티켓과 교통편을 처리합니다.",
            package3_inclusion_plus: "교통 패키지의 모든 것, 추가:",
            package3_inclusion1: "관광지 입장권",
            package3_inclusion2: "최고의 경로 추천",
            package2_title: "풀보드 투어 패키지",
            package2_subtitle: "번거로움 없는 휴가 경험, 그냥 여행을 즐기세요.",
            package2_inclusion_plus: "맞춤형 패키지의 모든 것, 추가:",
            package2_inclusion1: "호텔/숙소",
            package2_inclusion2: "식사(아침, 점심, 저녁)",
            pricing_disclaimer: "*가격은 차량 종류, 호텔 선택, 거리, 목적지 및 이용 가능 여부에 따라 변경될 수 있습니다. 위 가격은 반둥 시티 투어 지역에 대한 것입니다.",
            pricing_cta: "무료 상담!",
            contact_title: "문의하기",
            contact_desc: "모험을 계획할 준비가 되셨습니까? 자세한 정보 및 예약을 원하시면 지금 저희에게 연락하십시오.",
            contact_phone: "전화",
            contact_email: "이메일",
            contact_address: "주소",
            title_call: "직접 전화하기",
            title_whatsapp: "WhatsApp으로 채팅하기",
            follow_us_social: "소셜 미디어에서 팔로우하세요",
            contact_form_title: "문의 양식",
            form_name: "성명",
            form_phone_whatsapp: "전화/WhatsApp",
            form_message: "메시지(선택 사항)",
            form_send_whatsapp: "WhatsApp으로 보내기",
            form_send_sms_fallback: "WhatsApp이 없으신가요? SMS로 보내기",
            placeholder_name: "성명을 입력하세요",
            placeholder_phone: "전화번호를 입력하세요",
            placeholder_message_optional: "여기에 메시지나 질문을 작성하세요",
            footer_desc: "저희와 함께 잊을 수 없는 여행, 미식, 문화 체험을 탐험하고 반둥, 족자카르타, 자카르타 최고의 호텔, 빌라, 명소를 발견하세요.",
            footer_service_areas: "서비스 지역",
            footer_contact: "연락처",
            footer_copyright: "© 2025 HiLing Travel. 판권 소유.",
            price_starts_from: "시작 가격",
            price_per_day: "/일",
            select_language_label: "언어 선택",
            select_language_tooltip: "언어 선택"
        },

        // Jepang (kode: ja)
        ja: {
            tagline: "バンドン、ジョグジャカルタ、ジャカルタのツアーガイドとプライベート送迎",
            nav_home: "ホーム",
            nav_about: "会社概要",
            nav_vehicles: "車両",
            nav_pricing: "料金",
            nav_contact: "お問い合わせ",
            slide1_title: "ジャカルタの都会的な魅力",
            slide1_subtitle: "象徴的なモニュメントから現代の都市生活まで",
            slide2_title: "ジョグジャカルタの文化的驚異",
            slide2_subtitle: "雄大な歴史遺産を探索",
            slide3_title: "バンドンの創造性",
            slide3_subtitle: "涼しい自然と都市の革新をお楽しみください",
            explore_now: "今すぐ探索",
            about_title: "会社概要",
            about_desc: "私たちは、バンドン、ジョグジャカルタ、ジャカルタでの<strong>快適なご旅行</strong>のための<strong>プロのツアーガイド</strong>サービスを提供しています。ご滞在先や空港からの<strong>送迎</strong>サービスをご利用いただき、私たちに<strong>魅力的な場所の探索</strong>をお任せください。最高の観光地から有名なレストランのおすすめまで、忘れられない体験を提供することをお約束します。",
            feature1_title: "快適な車両",
            feature1_desc: "7人乗りから40人乗り以上まで、さまざまな車両オプション。",
            feature2_title: "完全な目的地",
            feature2_desc: "自然、文化、グルメツアー、そして最高のホテルとヴィラのおすすめ。",
            contact_info_title: "連絡先情報",
            follow_us: "フォローする",
            vehicles_title: "車両一覧",
            vehicles_desc: "ご旅行のために、快適で手入れの行き届いた車両をお選びください。全車両にエアコン、サウンドシステム、経験豊富なドライバーが備わっています。",
            passenger_count: "{count}人乗り",
            facilities_title: "車両設備",
            facility1_title: "エアコン",
            facility1_desc: "どんな天候でも涼しく快適な旅をお楽しみください。全車両に手入れの行き届いたエアコンシステムを完備し、最適な車内温度を保証します。",
            facility2_title: "サウンドシステム",
            facility2_desc: "BluetoothまたはUSBでお気に入りのプレイリストを簡単に接続し、パーソナライズされたエンターテイメント体験で旅を盛り上げましょう。",
            facility3_title: "経験豊富なドライバー",
            facility3_desc: "各都市の最適なルート、グルメスポット、レストランや宿泊施設の最高のおすすめに関する専門知識を持つプロのドライバー。",
            avanza_desc: "さまざまな目的地を探索するための最高の快適さを提供する信頼性の高いファミリーMPV。",
            innova_desc: "長距離旅行に最高の快適さを提供するプレミアムMPV。",
            hiace14_desc: "広い荷物スペースを備えた小グループに最適なミニバス。",
            hiace16_desc: "より大人数のツアーグループ向けのより大きな容量のミニバス。",
            luxio_desc: "広々として柔軟なキャビンで、家族旅行や小グループに特別な快適さを提供します。",
            xenia_desc: "燃費の良い経済的なMPV。",
            ertiga_desc: "燃費が経済的なコンパクトMPV。",
            calya_desc: "快適さと効率性を一つのLCGCパッケージに。予算にやさしい家族の冒険に最適です。",
            sigra_desc: "小家族の旅行や機敏な都市移動のための賢く燃費の良い選択。",
            elf_desc: "中規模グループ向けの頑丈で信頼性の高い車両で、さまざまな地形に効率的に到達できます。",
            bus_medium_desc: "ツアーグループ、大家族の旅行、または企業イベントに最適なソリューションです。",
            bus_big_desc: "大規模なツアー、修学旅行、または完全な設備を備えた集まりのための最大収容人数です。",
            pricing_title: "料金シミュレーションとパッケージ",
            pricing_subtitle: "お客様の旅行ニーズに最も適したパッケージをお選びください。透明性があり、競争力のある価格設定です。",
            package1_title: "送迎＆ドライバーパッケージ",
            package1_subtitle: "快適で効率的な旅に焦点を当てています。",
            package1_inclusion1: "送迎",
            package1_inclusion2: "プロのドライバー",
            package1_inclusion3: "ガソリン/ディーゼル",
            package1_inclusion4: "高速道路料金と駐車料金",
            package1_inclusion5: "フルボード（荷物込み）",
            package3_title: "カスタムツアーパッケージ",
            package3_subtitle: "目的地を選んでいただければ、チケットと交通手段を手配します。",
            package3_inclusion_plus: "送迎パッケージのすべてに加えて：",
            package3_inclusion1: "観光地の入場券",
            package3_inclusion2: "最適ルートの推奨",
            package2_title: "フルボードツアーパッケージ",
            package2_subtitle: "手間のかからない休暇体験、ただ旅をお楽しみください。",
            package2_inclusion_plus: "カスタムパッケージのすべてに加えて：",
            package2_inclusion1: "ホテル/宿泊施設",
            package2_inclusion2: "食事（朝食、昼食、夕食）",
            pricing_disclaimer: "*料金は車両タイプ、ホテルの選択、距離、目的地、空き状況により変動する場合があります。上記の料金はバンドン市内ツアーエリアのものです。",
            pricing_cta: "無料相談！",
            contact_title: "お問い合わせ",
            contact_desc: "冒険の計画を立てる準備はできましたか？詳細情報やご予約については、今すぐお問い合わせください。",
            contact_phone: "電話",
            contact_email: "Eメール",
            contact_address: "住所",
            title_call: "直接電話する",
            title_whatsapp: "WhatsAppでチャット",
            follow_us_social: "ソーシャルメディアでフォロー",
            contact_form_title: "お問い合わせフォーム",
            form_name: "氏名",
            form_phone_whatsapp: "電話/WhatsApp",
            form_message: "メッセージ（任意）",
            form_send_whatsapp: "WhatsAppで送信",
            form_send_sms_fallback: "WhatsAppをお持ちでないですか？SMSで送信",
            placeholder_name: "氏名を入力してください",
            placeholder_phone: "電話番号を入力してください",
            placeholder_message_optional: "ここにメッセージや質問を記入してください",
            footer_desc: "私たちと一緒に、忘れられない旅行、グルメ、文化体験を探検し、バンドン、ジョグジャカルタ、ジャカルタで最高のホテル、ヴィラ、スポットを見つけましょう。",
            footer_service_areas: "サービスエリア",
            footer_contact: "連絡先",
            footer_copyright: "© 2025 HiLing Travel. 全著作権所有。",
            price_starts_from: "料金",
            price_per_day: "／日",
            select_language_label: "言語を選択",
            select_language_tooltip: "言語を選択"
        }
    };

    let exchangeRates;

    async function fetchExchangeRates() {
        const apiKey = "37a77ed28ed9625f0bca72d6";
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.result === "success") {
                exchangeRates = data.conversion_rates;
                console.log("Nilai tukar berhasil dimuat.");
            } else {
                console.error("Gagal mengambil data nilai tukar:", data['error-type']);
            }
        } catch (error) {
            console.error('Ada masalah saat mengambil nilai tukar:', error);
        }
    }

    fetchExchangeRates();

    function changeLanguage(lang) {
        // Menerjemahkan teks biasa
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[lang]?.[key];
            if (translation) {
                if (key === 'passenger_count') {
                    const count = element.getAttribute('data-count');
                    translation = translation.replace('{count}', count);
                }
                element.innerHTML = translation;
            }
        });

        // Menerjemahkan placeholder pada input
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang]?.[key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // FUNGSI BARU: Menerjemahkan tooltip (title)
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (translations[lang]?.[key]) {
                element.title = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        updatePrices(lang);
    }

    function updatePrices(lang) {
        // Peta untuk menghubungkan kode bahasa dengan detail mata uang
        const currencyMap = {
            'id': { prefix: 'Rp ', code: 'IDR', format: 'id-ID' },
            'en': { prefix: '$', code: 'USD', decimals: 2 },
            'ms': { prefix: 'RM', code: 'MYR', decimals: 2 },
            'en-SG': { prefix: 'S$', code: 'SGD', decimals: 2 },
            'ms-BN': { prefix: 'B$', code: 'BND', decimals: 2 },
            'th': { prefix: '฿', code: 'THB', decimals: 2 },
            'vi': { suffix: '₫', code: 'VND', decimals: 0, format: 'vi-VN' },
            'zh': { prefix: '¥', code: 'CNY', decimals: 2 },
            'ko': { prefix: '₩', code: 'KRW', decimals: 0 },
            'ja': { prefix: '¥', code: 'JPY', decimals: 0 }
        };

        const priceElements = document.querySelectorAll('.price-promo, .price-original');
        const targetCurrency = currencyMap[lang] || currencyMap['id']; // Default ke IDR jika tidak ditemukan

        priceElements.forEach(element => {
            const priceInIDR = parseFloat(element.getAttribute('data-price-idr'));

            if (lang === 'id') {
                // Penanganan khusus untuk Rupiah
                element.innerHTML = `${targetCurrency.prefix}${new Intl.NumberFormat(targetCurrency.format).format(priceInIDR)}`;
            } else if (exchangeRates && exchangeRates.IDR && exchangeRates[targetCurrency.code]) {
                // Konversi untuk mata uang lain
                const priceInUSD = priceInIDR / exchangeRates.IDR;
                const finalPrice = priceInUSD * exchangeRates[targetCurrency.code];

                let formattedPrice;
                if (targetCurrency.format) { // Gunakan Intl.NumberFormat jika ada (untuk VND)
                    formattedPrice = new Intl.NumberFormat(targetCurrency.format).format(finalPrice.toFixed(targetCurrency.decimals));
                } else {
                    formattedPrice = new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: targetCurrency.decimals,
                        maximumFractionDigits: targetCurrency.decimals
                    }).format(finalPrice);
                }

                // Gabungkan prefix, harga, dan suffix (jika ada)
                element.innerHTML = `${targetCurrency.prefix || ''}${formattedPrice}${targetCurrency.suffix || ''}`;
            } else {
                // Fallback jika API belum termuat, tampilkan Rupiah
                element.innerHTML = `Rp ${new Intl.NumberFormat('id-ID').format(priceInIDR)}`;
            }
        });
    }

    languageSelector?.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });

    changeLanguage(languageSelector.value);

    const mainHeader = document.getElementById('mainHeader');

    if (mainHeader) {
        const scrollThreshold = 50;

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                mainHeader.classList.add('header-scrolled');
            } else {
                mainHeader.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }


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

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavigation = document.getElementById('mobileNavigation');
    mobileMenuBtn?.addEventListener('click', () => {
        mobileNavigation.classList.toggle('hidden');
    });

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

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('contactName');
            const phoneInput = document.getElementById('contactPhone');
            const messageInput = document.getElementById('contactMessage');

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !phone) {
                alert('Nama Lengkap dan Nomor Telepon wajib diisi.');
                return;
            }

            const ahmadWhatsapp = '6282277772273';
            let textMessage;
            if (message) {
                textMessage = `Halo, saya ${name} (No. HP: ${phone}).\n\nPesan saya:\n${message}`;
            } else {
                textMessage = `Halo, saya ${name} (No. HP: ${phone}). Saya ingin bertanya mengenai layanan HiLing Travel.`;
            }

            const whatsappUrl = `https://wa.me/${ahmadWhatsapp}?text=${encodeURIComponent(textMessage)}`;
            window.open(whatsappUrl, '_blank');
        });

        const submitViaSmsLink = document.getElementById('submitViaSms');
        submitViaSmsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('contactName').value.trim();
            const phoneInput = document.getElementById('contactPhone').value.trim();
            if (!nameInput || !phoneInput) {
                alert('Nama Lengkap dan Nomor Telepon wajib diisi.');
                return;
            }
            const ahmadSms = '082277772273';
            window.location.href = `sms:${ahmadSms}`;
        });
    }
});
