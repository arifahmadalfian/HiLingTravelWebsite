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
        const priceElements = document.querySelectorAll('.price-promo, .price-original');

        priceElements.forEach(element => {
            const priceInIDR = parseFloat(element.getAttribute('data-price-idr'));

            if (lang === 'en' && exchangeRates && exchangeRates.IDR) {
                const priceInUSD = priceInIDR / exchangeRates.IDR;
                element.innerHTML = `$${priceInUSD.toFixed(2)}`;

            } else if (lang === 'ms' && exchangeRates && exchangeRates.IDR && exchangeRates.MYR) {
                const priceInUSD = priceInIDR / exchangeRates.IDR;
                const priceInMYR = priceInUSD * exchangeRates.MYR;
                element.innerHTML = `RM${priceInMYR.toFixed(2)}`;

            } else {
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

            const ahmadWhatsapp = '6281364243179';
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
            const ahmadSms = '081364243179';
            window.location.href = `sms:${ahmadSms}`;
        });
    }
});
