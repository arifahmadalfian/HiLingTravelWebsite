document.addEventListener('DOMContentLoaded', function() {

    const languageSelector = document.getElementById('languageSelector');

    const translations = {
        // INDONESIA
        id: {
            tagline: "Tour Guide & Private Transport di Bandung, Jogja, Jakarta",
            nav_home: "Beranda",
            nav_about: "Tentang Kami",
            nav_vehicles: "Sewa Harian",
            nav_pricing: "Paket Wisata",
            nav_contact: "Kontak",
            select_language_label: "Pilih Bahasa",
            select_language_tooltip: "Pilih Bahasa",
            slide1_title: "Pesona Metropolitan Jakarta",
            slide1_subtitle: "Dari Monumen Ikonik hingga Kehidupan Kota Modern",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Jelajahi Warisan Sejarah yang Agung",
            slide3_title: "Kreativitas Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Sejuknya Alam dan Inovasi Kota",
            explore_now: "Jelajahi Sekarang",
            about_title: "Tentang Kami",
            about_desc: "Kami adalah penyedia layanan <strong>Tour Guide Profesional</strong> yang berfokus pada <strong>kenyamanan perjalanan</strong> Anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>penjemputan</strong> di lokasi Anda maupun di bandara area Jawa Barat maupun Jakarta, lalu biarkan kami memandu Anda <strong>menjelajahi berbagai tempat menarik</strong>. Dari destinasi wisata terbaik hingga rekomendasi restoran ternama, kami berkomitmen untuk memberikan pengalaman tak terlupakan dengan armada kendaraan yang prima.",
            feature1_title: "Kendaraan Nyaman",
            feature1_desc: "Berbagai pilihan kendaraan, dari 7 hingga 59 penumpang.",
            feature2_title: "Destinasi Lengkap",
            feature2_desc: "Wisata alam, budaya, kuliner, serta rekomendasi hotel & vila terbaik.",
            contact_info_title: "Informasi Kontak",
            follow_us: "Ikuti Kami",
            vehicles_title: "Armada Kendaraan",
            vehicles_desc: "Pilihan kendaraan yang nyaman dan terawat untuk perjalanan wisata Anda. Semua kendaraan dilengkapi dengan AC, sound system, dan driver berpengalaman.",
            passenger_count: "{count} Penumpang",
            facilities_title: "Fasilitas Kendaraan",
            facility1_title: "AC Dingin",
            facility1_desc: "Nikmati perjalanan yang sejuk dan nyaman di setiap kondisi cuaca. Setiap unit kami dilengkapi AC yang terawat baik, memastikan suhu kabin tetap optimal selama perjalanan Anda.",
            facility2_title: "Sound System",
            facility2_desc: "Hidupkan suasana perjalanan dengan sistem audio berkualitas tinggi. Hubungkan playlist favorit Anda dengan mudah melalui koneksi Bluetooth dan USB untuk pengalaman hiburan yang personal.",
            facility3_title: "Driver as Tour Guide",
            facility3_desc: "Driver profesional kami tidak hanya mengemudi, tetapi juga bertindak sebagai pemandu Anda, dengan pengetahuan ahli tentang rute wisata, kuliner, serta rekomendasi terbaik di setiap kota.",
            price_starts_from: "Mulai dari",
            price_per_day: "/ hari",
            avanza_desc: "Sebuah MPV keluarga andalan yang memberikan kenyamanan maksimal untuk menjelajahi berbagai destinasi.",
            innova_desc: "MPV premium dengan kenyamanan maksimal untuk perjalanan jarak jauh.",
            hiace14_desc: "Minibus ideal untuk grup kecil dengan ruang bagasi yang luas.",
            hiace16_desc: "Minibus dengan kapasitas lebih besar untuk grup wisata yang lebih banyak.",
            luxio_desc: "Kabin yang luas dan fleksibel, memberikan kenyamanan ekstra untuk perjalanan keluarga atau grup kecil.",
            xenia_desc: "MPV ekonomis dengan efisiensi bahan bakar yang baik.",
            ertiga_desc: "MPV kompak dengan konsumsi bahan bakar yang irit.",
            calya_desc: "Kenyamanan dan efisiensi dalam satu paket LCGC, ideal untuk petualangan hemat bersama keluarga.",
            sigra_desc: "Pilihan cerdas dan irit untuk perjalanan keluarga kecil atau mobilitas lincah di dalam kota.",
            elf_desc: "Kuat dan handal untuk grup berukuran sedang, mampu menjangkau berbagai medan dengan efisien.",
            bus_medium_desc: "Solusi ideal untuk rombongan wisata, perjalanan keluarga besar, atau acara perusahaan dengan kenyamanan.",
            bus_big_desc: "Kapasitas maksimal untuk perjalanan wisata skala besar, study tour, atau acara gathering dengan fasilitas lengkap.",
            pricing_title: "Paket Wisata Populer",
            pricing_subtitle: "Pilihan paket multi-hari terlaris kami untuk pengalaman liburan yang tak terlupakan.",
            price_per_person: "/ orang",
            group_size: "Untuk grup 8-20 orang",
            package_3d2n_title: "Paket 3D/2N",
            package_3d2n_subtitle: "Perkenalan singkat yang berkesan ke destinasi pilihan Anda.",
            package_4d3n_title: "Paket 4D/3N",
            package_4d3n_subtitle: "Jelajahi destinasi terbaik dengan waktu yang lebih santai.",
            package_5d4n_title: "Paket 5D/4N",
            package_5d4n_subtitle: "Pengalaman paling lengkap, mendalam, dan memuaskan.",
            package_inclusion_transport_driver: "Kendaraan + Supir Profesional",
            package_inclusion_hotel: "Hotel Bintang 3",
            package_inclusion_meals: "Makan Sesuai Program",
            package_inclusion_fuel: "Bensin / Solar",
            package_inclusion_fees: "Biaya Tol & Parkir",
            pricing_disclaimer: "*Harga dapat berubah sewaktu-waktu tergantung jenis kendaraan, pilihan hotel, jarak, destinasi, dan ketersediaan.",
            pricing_cta: "Konsultasi Gratis!",
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
            form_phone_whatsapp: "Telepon / WhatsApp",
            form_message: "Pesan (Opsional)",
            form_send_whatsapp: "Kirim via WhatsApp",
            form_send_sms_fallback: "Tidak punya WhatsApp? Kirim via SMS",
            placeholder_name: "Masukkan nama lengkap",
            placeholder_phone: "Masukkan nomor telepon",
            placeholder_message_optional: "Tuliskan pesan atau pertanyaan Anda",
            footer_desc: "Jelajahi petualangan wisata, kuliner, dan budaya, serta temukan hotel, vila, dan tempat terbaik di Bandung, Jogja, dan Jakarta bersama kami.",
            footer_service_areas: "Area Layanan",
            footer_contact: "Kontak",
            footer_copyright: "© 2025 HiLing Travel. Hak cipta dilindungi undang-undang.",
            package_gold_title: "Paket Gold 3M/4H",
            package_diamond_title: "Paket Diamond 4M/5H",
        },
        // ENGLISH (GLOBAL)
        en: {
            tagline: "Tour Guide & Private Transport in Bandung, Jogja, Jakarta",
            nav_home: "Home",
            nav_about: "About Us",
            nav_vehicles: "Daily Rentals",
            nav_pricing: "Tour Packages",
            nav_contact: "Contact",
            select_language_label: "Select Language",
            select_language_tooltip: "Select Language",
            slide1_title: "The Metropolitan Charm of Jakarta",
            slide1_subtitle: "From Iconic Monuments to Modern City Life",
            slide2_title: "The Cultural Wonders of Yogyakarta",
            slide2_subtitle: "Explore the Majestic Historical Heritage",
            slide3_title: "The Creativity of Bandung, the Flower City",
            slide3_subtitle: "Enjoy its Cool Nature and Urban Innovation",
            explore_now: "Explore Now",
            about_title: "About Us",
            about_desc: "We are a <strong>Professional Tour Guide</strong> service provider focused on your <strong>travel comfort</strong> in Bandung, Jogja, and Jakarta. Enjoy the convenience of <strong>pickup</strong> from your location or at airports within the West Java and Jakarta area, and let us guide you in <strong>exploring a variety of fascinating places</strong>. From the best tourist destinations to recommendations for renowned restaurants, we are committed to providing an unforgettable experience with our excellent fleet of vehicles.",
            feature1_title: "Comfortable Vehicles",
            feature1_desc: "Various vehicle options, from 7 to 59 passengers.",
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
            facility3_title: "Driver as Tour Guide",
            facility3_desc: "Our professional drivers don't just drive; they also act as your guide, with expert knowledge of the best routes, culinary spots, and top recommendations in each city.",
            price_starts_from: "Starts from",
            price_per_day: "/ day",
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
            pricing_title: "Popular Tour Packages",
            pricing_subtitle: "Our bestselling multi-day packages for an unforgettable vacation experience.",
            price_per_person: "/ person",
            group_size: "For groups of 8-20 people",
            package_3d2n_title: "3D/2N Package",
            package_3d2n_subtitle: "A brief yet memorable introduction to your chosen destination.",
            package_4d3n_title: "4D/3N Package",
            package_4d3n_subtitle: "Explore the best destinations at a more relaxed pace.",
            package_5d4n_title: "5D/4N Package",
            package_5d4n_subtitle: "The most complete, in-depth, and satisfying experience.",
            package_inclusion_transport_driver: "Vehicle + Professional Driver",
            package_inclusion_hotel: "3-Star Hotel",
            package_inclusion_meals: "Meals as per Itinerary",
            package_inclusion_fuel: "Gasoline / Petrol",
            package_inclusion_fees: "Toll & Parking Fees",
            pricing_disclaimer: "*Prices are subject to change depending on vehicle type, hotel selection, distance, destination, and availability.",
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
            package_gold_title: "Gold Package 3N/4D",
            package_diamond_title: "Diamond Package 4N/5D",
        },
        // MALAYSIA
        ms: {
            tagline: "Pemandu Pelancong & Pengangkutan Peribadi di Bandung, Jogja, Jakarta",
            nav_home: "Laman Utama",
            nav_about: "Tentang Kami",
            nav_vehicles: "Sewaan Harian",
            nav_pricing: "Pakej Pelancongan",
            nav_contact: "Hubungi Kami",
            select_language_label: "Pilih Bahasa",
            select_language_tooltip: "Pilih Bahasa",
            slide1_title: "Pesona Metropolitan Jakarta",
            slide1_subtitle: "Dari Monumen Ikonik ke Kehidupan Kota Moden",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Terokai Warisan Sejarah yang Agung",
            slide3_title: "Kreativiti Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Kesejukan Alam dan Inovasi Kota",
            explore_now: "Terokai Sekarang",
            about_title: "Tentang Kami",
            about_desc: "Kami adalah penyedia perkhidmatan <strong>Pemandu Pelancong Profesional</strong> yang tertumpu pada <strong>keselesaan perjalanan</strong> anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>pengambilan</strong> dari lokasi anda atau lapangan terbang di kawasan Jawa Barat dan Jakarta, dan biarkan kami memandu anda <strong>menerokai pelbagai tempat menarik</strong>. Dari destinasi pelancongan terbaik hingga cadangan restoran terkenal, kami komited untuk memberikan pengalaman yang tidak dapat dilupakan dengan armada kenderaan kami yang prima.",
            feature1_title: "Kenderaan Selesa",
            feature1_desc: "Pelbagai pilihan kenderaan, dari 7 hingga 59 penumpang.",
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
            facility3_title: "Pemandu sebagai Pemandu Pelancong",
            facility3_desc: "Pemandu profesional kami bukan sahaja memandu; mereka juga bertindak sebagai pemandu anda, dengan pengetahuan pakar tentang laluan terbaik, tempat kulinari, dan cadangan teratas di setiap bandar.",
            price_starts_from: "Bermula dari",
            price_per_day: "/ hari",
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
            pricing_title: "Pakej Pelancongan Popular",
            pricing_subtitle: "Pakej pelbagai hari terlaris kami untuk pengalaman percutian yang tidak dapat dilupakan.",
            price_per_person: "/ seorang",
            group_size: "Untuk kumpulan 8-20 orang",
            package_3d2n_title: "Pakej 3H/2M",
            package_3d2n_subtitle: "Pengenalan ringkas yang berkesan ke destinasi pilihan anda.",
            package_4d3n_title: "Pakej 4H/3M",
            package_4d3n_subtitle: "Terokai destinasi terbaik dalam jangka masa yang lebih santai.",
            package_5d4n_title: "Pakej 5H/4M",
            package_5d4n_subtitle: "Pengalaman yang paling lengkap, mendalam, dan memuaskan.",
            package_inclusion_transport_driver: "Kenderaan + Pemandu Profesional",
            package_inclusion_hotel: "Hotel 3-Bintang",
            package_inclusion_meals: "Makanan Mengikut Atur Cara",
            package_inclusion_fuel: "Petrol / Minyak",
            package_inclusion_fees: "Bayaran Tol & Tempat Letak Kereta",
            pricing_disclaimer: "*Harga boleh berubah bergantung pada jenis kenderaan, pilihan hotel, jarak, destinasi, dan ketersediaan.",
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
            package_gold_title: "Pakej Gold 3M/4H",
            package_diamond_title: "Pakej Diamond 4M/5H",
        },
        // SINGAPORE
        "en-SG": {
            tagline: "Tour Guide & Private Transport in Bandung, Jogja, Jakarta",
            nav_home: "Home",
            nav_about: "About Us",
            nav_vehicles: "Daily Rentals",
            nav_pricing: "Tour Packages",
            nav_contact: "Contact",
            select_language_label: "Select Language",
            select_language_tooltip: "Select Language",
            slide1_title: "The Metropolitan Charm of Jakarta",
            slide1_subtitle: "From Iconic Monuments to Modern City Life",
            slide2_title: "The Cultural Wonders of Yogyakarta",
            slide2_subtitle: "Explore the Majestic Historical Heritage",
            slide3_title: "The Creativity of Bandung, the Flower City",
            slide3_subtitle: "Enjoy its Cool Nature and Urban Innovation",
            explore_now: "Explore Now",
            about_title: "About Us",
            about_desc: "We are a <strong>Professional Tour Guide</strong> service provider focused on your <strong>travel comfort</strong> in Bandung, Jogja, and Jakarta. Enjoy the convenience of <strong>pickup</strong> from your location or at airports within the West Java and Jakarta area, and let us guide you in <strong>exploring a variety of fascinating places</strong>. From the best tourist destinations to recommendations for renowned restaurants, we are committed to providing an unforgettable experience with our excellent fleet of vehicles.",
            feature1_title: "Comfortable Vehicles",
            feature1_desc: "Various vehicle options, from 7 to 59 passengers.",
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
            facility3_title: "Driver as Tour Guide",
            facility3_desc: "Our professional drivers don't just drive; they also act as your guide, with expert knowledge of the best routes, culinary spots, and top recommendations in each city.",
            price_starts_from: "Starts from",
            price_per_day: "/ day",
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
            pricing_title: "Popular Tour Packages",
            pricing_subtitle: "Our bestselling multi-day packages for an unforgettable vacation experience.",
            price_per_person: "/ person",
            group_size: "For groups of 8-20 people",
            package_3d2n_title: "3D/2N Package",
            package_3d2n_subtitle: "A brief yet memorable introduction to your chosen destination.",
            package_4d3n_title: "4D/3N Package",
            package_4d3n_subtitle: "Explore the best destinations at a more relaxed pace.",
            package_5d4n_title: "5D/4N Package",
            package_5d4n_subtitle: "The most complete, in-depth, and satisfying experience.",
            package_inclusion_transport_driver: "Vehicle + Professional Driver",
            package_inclusion_hotel: "3-Star Hotel",
            package_inclusion_meals: "Meals as per Itinerary",
            package_inclusion_fuel: "Gasoline / Petrol",
            package_inclusion_fees: "Toll & Parking Fees",
            pricing_disclaimer: "*Prices are subject to change depending on vehicle type, hotel selection, distance, destination, and availability.",
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
            package_gold_title: "Gold Package 3N/4D",
            package_diamond_title: "Diamond Package 4N/5D"
        },
        // BRUNEI
        "ms-BN": {
            tagline: "Pemandu Pelancong & Pengangkutan Peribadi di Bandung, Jogja, Jakarta",
            nav_home: "Laman Utama",
            nav_about: "Tentang Kami",
            nav_vehicles: "Sewaan Harian",
            nav_pricing: "Pakej Pelancongan",
            nav_contact: "Hubungi Kami",
            select_language_label: "Pilih Bahasa",
            select_language_tooltip: "Pilih Bahasa",
            slide1_title: "Pesona Metropolitan Jakarta",
            slide1_subtitle: "Dari Monumen Ikonik ke Kehidupan Kota Moden",
            slide2_title: "Keajaiban Budaya Yogyakarta",
            slide2_subtitle: "Terokai Warisan Sejarah yang Agung",
            slide3_title: "Kreativiti Kota Kembang Bandung",
            slide3_subtitle: "Nikmati Kesejukan Alam dan Inovasi Kota",
            explore_now: "Terokai Sekarang",
            about_title: "Tentang Kami",
            about_desc: "Kami adalah penyedia perkhidmatan <strong>Pemandu Pelancong Profesional</strong> yang tertumpu pada <strong>keselesaan perjalanan</strong> anda di Bandung, Jogja, dan Jakarta. Nikmati kemudahan <strong>pengambilan</strong> dari lokasi anda atau lapangan terbang di kawasan Jawa Barat dan Jakarta, dan biarkan kami memandu anda <strong>menerokai pelbagai tempat menarik</strong>. Dari destinasi pelancongan terbaik hingga cadangan restoran terkenal, kami komited untuk memberikan pengalaman yang tidak dapat dilupakan dengan armada kenderaan kami yang prima.",
            feature1_title: "Kenderaan Selesa",
            feature1_desc: "Pelbagai pilihan kenderaan, dari 7 hingga 59 penumpang.",
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
            facility3_title: "Pemandu sebagai Pemandu Pelancong",
            facility3_desc: "Pemandu profesional kami bukan sahaja memandu; mereka juga bertindak sebagai pemandu anda, dengan pengetahuan pakar tentang laluan terbaik, tempat kulinari, dan cadangan teratas di setiap bandar.",
            price_starts_from: "Bermula dari",
            price_per_day: "/ hari",
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
            pricing_title: "Pakej Pelancongan Popular",
            pricing_subtitle: "Pakej pelbagai hari terlaris kami untuk pengalaman percutian yang tidak dapat dilupakan.",
            price_per_person: "/ seorang",
            group_size: "Untuk kumpulan 8-20 orang",
            package_3d2n_title: "Pakej 3H/2M",
            package_3d2n_subtitle: "Pengenalan ringkas yang berkesan ke destinasi pilihan anda.",
            package_4d3n_title: "Pakej 4H/3M",
            package_4d3n_subtitle: "Terokai destinasi terbaik dalam jangka masa yang lebih santai.",
            package_5d4n_title: "Pakej 5H/4M",
            package_5d4n_subtitle: "Pengalaman yang paling lengkap, mendalam, dan memuaskan.",
            package_inclusion_transport_driver: "Kenderaan + Pemandu Profesional",
            package_inclusion_hotel: "Hotel 3-Bintang",
            package_inclusion_meals: "Makanan Mengikut Atur Cara",
            package_inclusion_fuel: "Petrol / Minyak",
            package_inclusion_fees: "Bayaran Tol & Tempat Letak Kereta",
            pricing_disclaimer: "*Harga boleh berubah bergantung pada jenis kenderaan, pilihan hotel, jarak, destinasi, dan ketersediaan.",
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
            package_gold_title: "Pakej Gold 3M/4H",
            package_diamond_title: "Pakej Diamond 4M/5H"
        },
        // THAILAND
        th: {
            tagline: "ไกด์ทัวร์และรถส่วนตัวในบันดุง, ยอกยาการ์ตา, และจาการ์ตา",
            nav_home: "หน้าแรก",
            nav_about: "เกี่ยวกับเรา",
            nav_vehicles: "เช่ารายวัน",
            nav_pricing: "แพ็คเกจทัวร์",
            nav_contact: "ติดต่อเรา",
            select_language_label: "เลือกภาษา",
            select_language_tooltip: "เลือกภาษา",
            slide1_title: "เสน่ห์ของกรุงจาการ์ตา",
            slide1_subtitle: "จากอนุสาวรีย์สู่ชีวิตเมืองที่ทันสมัย",
            slide2_title: "ความมหัศจรรย์ทางวัฒนธรรมของยอกยาการ์ตา",
            slide2_subtitle: "สำรวจมรดกทางประวัติศาสตร์อันยิ่งใหญ่",
            slide3_title: "ความคิดสร้างสรรค์ของบันดุง",
            slide3_subtitle: "เพลิดเพลินกับธรรมชาติและนวัตกรรมของเมือง",
            explore_now: "สำรวจตอนนี้",
            about_title: "เกี่ยวกับเรา",
            about_desc: "เราเป็นผู้ให้บริการ <strong>ไกด์ทัวร์มืออาชีพ</strong> ที่มุ่งเน้น <strong>ความสะดวกสบายในการเดินทาง</strong> ของคุณในบันดุง, ยอกยาการ์ตา, และจาการ์ตา เพลิดเพลินกับบริการ <strong>รับส่ง</strong> จากที่พักหรือสนามบินในพื้นที่ชวาตะวันตกและจาการ์ตา และให้เรานำทางคุณ <strong>สำรวจสถานที่น่าสนใจต่างๆ</strong> จากสถานที่ท่องเที่ยวที่ดีที่สุดไปจนถึงร้านอาหารแนะนำ เรามุ่งมั่นที่จะมอบประสบการณ์ที่น่าจดจำ",
            feature1_title: "ยานพาหนะที่สะดวกสบาย",
            feature1_desc: "มีรถให้เลือกหลากหลาย, ตั้งแต่ 7 ถึง 59 ที่นั่ง",
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
            facility3_title: "คนขับเป็นไกด์ทัวร์",
            facility3_desc: "คนขับมืออาชีพของเราทำหน้าที่เป็นไกด์ของคุณ พร้อมความรู้เรื่องเส้นทาง, อาหาร, และคำแนะนำที่ดีที่สุด",
            price_starts_from: "เริ่มต้นที่",
            price_per_day: "/ วัน",
            avanza_desc: "MPV ครอบครัวที่เชื่อถือได้ ให้ความสะดวกสบายสูงสุดสำหรับการสำรวจจุดหมายปลายทางต่างๆ",
            innova_desc: "MPV พรีเมียมเพื่อความสะดวกสบายในการเดินทางไกล",
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
            pricing_title: "แพ็คเกจทัวร์ยอดนิยม",
            pricing_subtitle: "แพ็คเกจหลายวันที่ขายดีที่สุดของเราสำหรับประสบการณ์วันหยุดที่น่าจดจำ",
            price_per_person: "/ ท่าน",
            group_size: "สำหรับกลุ่ม 8-20 ท่าน",
            package_3d2n_title: "แพ็คเกจ 3 วัน/2 คืน",
            package_3d2n_subtitle: "การแนะนำสั้นๆ ที่น่าจดจำสู่จุดหมายที่คุณเลือก",
            package_4d3n_title: "แพ็คเกจ 4 วัน/3 คืน",
            package_4d3n_subtitle: "สำรวจจุดหมายที่ดีที่สุดในเวลาที่ผ่อนคลายยิ่งขึ้น",
            package_5d4n_title: "แพ็คเกจ 5 วัน/4 คืน",
            package_5d4n_subtitle: "ประสบการณ์ที่สมบูรณ์แบบ, ลึกซึ้ง, และน่าพึงพอใจที่สุด",
            package_inclusion_transport_driver: "รถ + คนขับมืออาชีพ",
            package_inclusion_hotel: "โรงแรม 3 ดาว",
            package_inclusion_meals: "อาหารตามโปรแกรม",
            package_inclusion_fuel: "น้ำมัน",
            package_inclusion_fees: "ค่าทางด่วนและที่จอดรถ",
            pricing_disclaimer: "*ราคาอาจเปลี่ยนแปลงได้ขึ้นอยู่กับประเภทรถ, โรงแรม, ระยะทาง, และความพร้อมให้บริการ",
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
            package_gold_title: "แพ็คเกจโกลด์ 3 คืน/4 วัน",
            package_diamond_title: "แพ็คเกจไดมอนด์ 4 คืน/5 วัน"
        },
        // VIETNAM
        vi: {
            tagline: "Hướng dẫn viên & Xe riêng tại Bandung, Jogja, Jakarta",
            nav_home: "Trang chủ",
            nav_about: "Về chúng tôi",
            nav_vehicles: "Thuê theo ngày",
            nav_pricing: "Gói Tour",
            nav_contact: "Liên hệ",
            select_language_label: "Chọn ngôn ngữ",
            select_language_tooltip: "Chọn ngôn ngữ",
            slide1_title: "Vẻ đẹp đô thị Jakarta",
            slide1_subtitle: "Từ những tượng đài biểu tượng đến cuộc sống thành phố hiện đại",
            slide2_title: "Kỳ quan văn hóa Yogyakarta",
            slide2_subtitle: "Khám phá di sản lịch sử hùng vĩ",
            slide3_title: "Sự sáng tạo của Bandung",
            slide3_subtitle: "Tận hưởng thiên nhiên mát mẻ và sự đổi mới của thành phố",
            explore_now: "Khám phá ngay",
            about_title: "Về chúng tôi",
            about_desc: "Chúng tôi là nhà cung cấp dịch vụ <strong>Hướng dẫn viên chuyên nghiệp với xe riêng</strong>, tập trung vào <strong>sự thoải mái trong chuyến đi</strong> của bạn tại Bandung, Jogja và Jakarta. Dành riêng cho khu vực Bandung, hãy tận hưởng sự tiện lợi của dịch vụ <strong>đón miễn phí</strong> tại địa điểm của bạn hoặc sân bay, và để chúng tôi hướng dẫn bạn <strong>khám phá nhiều địa điểm hấp dẫn</strong>. Từ những điểm đến du lịch tốt nhất đến những gợi ý nhà hàng nổi tiếng, chúng tôi cam kết mang lại trải nghiệm khó quên.",
            feature1_title: "Phương tiện thoải mái",
            feature1_desc: "Nhiều lựa chọn phương tiện, từ 7 đến 59 chỗ.",
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
            facility3_title: "Tài xế là Hướng dẫn viên",
            facility3_desc: "Tài xế chuyên nghiệp của chúng tôi cũng là hướng dẫn viên của bạn, với kiến thức chuyên sâu về các tuyến đường, ẩm thực và các gợi ý tốt nhất.",
            price_starts_from: "Bắt đầu từ",
            price_per_day: "/ ngày",
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
            pricing_title: "Các Gói Tour Phổ biến",
            pricing_subtitle: "Các gói tour nhiều ngày bán chạy nhất của chúng tôi cho một kỳ nghỉ khó quên.",
            price_per_person: "/ người",
            group_size: "Dành cho nhóm 8-20 người",
            package_3d2n_title: "Gói 3N/2Đ",
            package_3d2n_subtitle: "Một sự giới thiệu ngắn gọn nhưng đáng nhớ về điểm đến bạn chọn.",
            package_4d3n_title: "Gói 4N/3Đ",
            package_4d3n_subtitle: "Khám phá những điểm đến tốt nhất với nhịp độ thư giãn hơn.",
            package_5d4n_title: "Gói 5N/4Đ",
            package_5d4n_subtitle: "Trải nghiệm đầy đủ, sâu sắc và hài lòng nhất.",
            package_inclusion_transport_driver: "Xe + Tài xế chuyên nghiệp",
            package_inclusion_hotel: "Khách sạn 3 sao",
            package_inclusion_meals: "Các bữa ăn theo chương trình",
            package_inclusion_fuel: "Xăng / Dầu",
            package_inclusion_fees: "Phí cầu đường & Đỗ xe",
            pricing_disclaimer: "*Giá có thể thay đổi tùy thuộc vào loại xe, lựa chọn khách sạn, khoảng cách, điểm đến và tình trạng sẵn có.",
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
            package_gold_title: "Gói Vàng 3Đ/4N",
            package_diamond_title: "Gói Kim Cương 4Đ/5N"
        },
        // CHINA
        zh: {
            tagline: "万隆、日惹、雅加达的导游和私人交通",
            nav_home: "首页",
            nav_about: "关于我们",
            nav_vehicles: "每日租赁",
            nav_pricing: "旅游套餐",
            nav_contact: "联系我们",
            select_language_label: "选择语言",
            select_language_tooltip: "选择语言",
            slide1_title: "雅加达的都市魅力",
            slide1_subtitle: "从标志性纪念碑到现代城市生活",
            slide2_title: "日惹的文化奇迹",
            slide2_subtitle: "探索雄伟的历史遗产",
            slide3_title: "万隆的创造力",
            slide3_subtitle: "享受凉爽的自然和城市创新",
            explore_now: "立即探索",
            about_title: "关于我们",
            about_desc: "我们是提供<strong>专业导游和私人交通</strong>服务的值得信赖的旅游服务提供商，致力于您在万隆、日惹和雅加达的<strong>旅行舒适度</strong>。特别是在万隆地区，享受从您的位置或机场<strong>免费接送</strong>的便利，让我们引导您<strong>探索各种有趣的地方</strong>。从最佳旅游目的地到著名餐厅的推荐，我们致力于提供难忘的体验。",
            feature1_title: "舒适的车辆",
            feature1_desc: "多种车辆选择，从7座到59座。",
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
            facility3_title: "司机兼导游",
            facility3_desc: "我们的专业司机不仅是驾驶员，还是您的向导，对每个城市的最佳路线、美食地点和顶级推荐有专业知识。",
            price_starts_from: "价格从",
            price_per_day: "/天",
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
            pricing_title: "热门旅游套餐",
            pricing_subtitle: "我们最畅销的多日套餐，为您带来难忘的假期体验。",
            price_per_person: "/人",
            group_size: "适用于8-20人的团体",
            package_3d2n_title: "3天2夜套餐",
            package_3d2n_subtitle: "对您选择的目的地进行简短而难忘的介绍。",
            package_4d3n_title: "4天3夜套餐",
            package_4d3n_subtitle: "以更轻松的节奏探索最佳目的地。",
            package_5d4n_title: "5天4夜套餐",
            package_5d4n_subtitle: "最完整、最深入、最令人满意的体验。",
            package_inclusion_transport_driver: "车辆 + 专业司机",
            package_inclusion_hotel: "三星级酒店",
            package_inclusion_meals: "按行程用餐",
            package_inclusion_fuel: "汽油/柴油",
            package_inclusion_fees: "过路费和停车费",
            pricing_disclaimer: "*价格可能因车辆类型、酒店选择、距离、目的地和可用性而异。",
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
            package_gold_title: "黄金套餐 3晚4天",
            package_diamond_title: "钻石套餐 4晚5天"
        },
        // ARABIC
        ar: {
            tagline: "مرشد سياحي ونقل خاص في باندونغ، يوجياكارتا، وجاكرتا",
            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_vehicles: "إيجار يومي",
            nav_pricing: "باقات سياحية",
            nav_contact: "اتصل بنا",
            select_language_label: "اختر اللغة",
            select_language_tooltip: "اختر اللغة",
            slide1_title: "سحر جاكرتا الحضري",
            slide1_subtitle: "من المعالم الشهيرة إلى حياة المدينة الحديثة",
            slide2_title: "عجائب يوجياكارتا الثقافية",
            slide2_subtitle: "استكشف التراث التاريخي العظيم",
            slide3_title: "إبداع مدينة باندونغ",
            slide3_subtitle: "استمتع بالطبيعة الباردة والابتكار الحضري",
            explore_now: "استكشف الآن",
            about_title: "من نحن",
            about_desc: "نحن نقدم خدمات <strong>مرشد سياحي محترف مع نقل خاص</strong>، مع التركيز على <strong>راحة سفرك</strong> في باندونغ، يوجياكارتا، وجاكرتا. في منطقة باندونغ على وجه التحديد، استمتع بخدمة <strong>الاستقبال المجاني</strong> من موقعك أو المطار، ودعنا نرشدك <strong>لاستكشاف أماكن رائعة متنوعة</strong>. من أفضل الوجهات السياحية إلى توصيات المطاعم الشهيرة، نحن ملتزمون بتقديم تجربة لا تنسى.",
            feature1_title: "مركبات مريحة",
            feature1_desc: "خيارات متنوعة من المركبات، من 7 إلى 59 مقعدًا.",
            feature2_title: "وجهات متكاملة",
            feature2_desc: "جولات طبيعية وثقافية وطهي، بالإضافة إلى أفضل توصيات الفنادق والفيلات.",
            contact_info_title: "معلومات الاتصال",
            follow_us: "تابعنا",
            vehicles_title: "إيجار المركبات اليومي",
            vehicles_desc: "اختر مركبات مريحة ومصانة جيدًا لرحلتك اليومية، شاملة سائق محترف، وقود، رسوم الطرق، ومواقف السيارات.",
            passenger_count: "{count} مقاعد",
            facilities_title: "مرافق المركبة",
            facility1_title: "تكييف الهواء",
            facility1_desc: "استمتع برحلة باردة ومريحة في جميع الأحوال الجوية. كل مركبة مجهزة بنظام تكييف مصان جيدًا لضمان درجة حرارة مثالية للمقصورة.",
            facility2_title: "نظام الصوت",
            facility2_desc: "أضف الحيوية على رحلتك مع نظامنا الصوتي عالي الجودة. قم بتوصيل قوائم التشغيل المفضلة لديك بسهولة عبر البلوتوث أو USB.",
            facility3_title: "سائق كمرشد سياحي",
            facility3_desc: "سائقونا المحترفون ليسوا مجرد سائقين؛ بل هم مرشدون لك، لديهم معرفة خبيرة بأفضل الطرق والمطاعم والتوصيات في كل مدينة.",
            price_starts_from: "يبدأ من",
            price_per_day: "/ يوم",
            avanza_desc: "سيارة MPV عائلية موثوقة توفر أقصى درجات الراحة لاستكشاف وجهات مختلفة.",
            innova_desc: "سيارة MPV فاخرة للراحة القصوى في الرحلات الطويلة.",
            hiace14_desc: "حافلة صغيرة مثالية للمجموعات الصغيرة مع مساحة واسعة للأمتعة.",
            hiace16_desc: "حافلة صغيرة بسعة أكبر للمجموعات السياحية الكبيرة.",
            luxio_desc: "مقصورة واسعة ومرنة، توفر راحة إضافية للرحلات العائلية أو المجموعات الصغيرة.",
            xenia_desc: "سيارة MPV اقتصادية ذات كفاءة جيدة في استهلاك الوقود.",
            ertiga_desc: "سيارة MPV مدمجة واقتصادية في استهلاك الوقود.",
            calya_desc: "الراحة والكفاءة في باقة LCGC واحدة، مثالية لمغامرات عائلية بميزانية محدودة.",
            sigra_desc: "خيار ذكي وموفر للرحلات العائلية الصغيرة أو التنقل السريع في المدينة.",
            elf_desc: "قوية وموثوقة للمجموعات متوسطة الحجم، قادرة على الوصول إلى مختلف التضاريس بكفاءة.",
            bus_medium_desc: "الحل المثالي للمجموعات السياحية، الرحلات العائلية الكبيرة، أو فعاليات الشركات.",
            bus_big_desc: "أقصى سعة للجولات الكبيرة، الرحلات الدراسية، أو التجمعات مع مرافق كاملة.",
            pricing_title: "باقات سياحية شائعة",
            pricing_subtitle: "باقاتنا متعددة الأيام الأكثر مبيعًا لتجربة عطلة لا تنسى.",
            price_per_person: "/ شخص",
            group_size: "لمجموعات من 8-20 شخصًا",
            package_3d2n_title: "باقة 3 أيام / 2 ليالي",
            package_3d2n_subtitle: "مقدمة قصيرة لا تنسى لوجهتك المختارة.",
            package_4d3n_title: "باقة 4 أيام / 3 ليالي",
            package_4d3n_subtitle: "استكشف أفضل الوجهات بوتيرة أكثر استرخاءً.",
            package_5d4n_title: "باقة 5 أيام / 4 ليالي",
            package_5d4n_subtitle: "التجربة الأكثر اكتمالًا وعمقًا وإرضاءً.",
            package_inclusion_transport_driver: "مركبة + سائق محترف",
            package_inclusion_hotel: "فندق 3 نجوم",
            package_inclusion_meals: "وجبات حسب البرنامج",
            package_inclusion_fuel: "وقود (بنزين / ديزل)",
            package_inclusion_fees: "رسوم الطرق ومواقف السيارات",
            pricing_disclaimer: "*الأسعار قابلة للتغيير حسب نوع المركبة، الفندق، المسافة، وتوافرها.",
            pricing_cta: "استشارة مجانية!",
            contact_title: "اتصل بنا",
            contact_desc: "هل أنت مستعد لتخطيط مغامرتك؟ اتصل بنا الآن للحصول على مزيد من المعلومات والحجوزات.",
            contact_phone: "الهاتف",
            contact_email: "البريد الإلكتروني",
            contact_address: "العنوان",
            title_call: "اتصل مباشرة",
            title_whatsapp: "الدردشة على WhatsApp",
            follow_us_social: "تابعنا على وسائل التواصل الاجتماعي",
            contact_form_title: "نموذج الاتصال",
            form_name: "الاسم الكامل",
            form_phone_whatsapp: "الهاتف / WhatsApp",
            form_message: "رسالة (اختياري)",
            form_send_whatsapp: "إرسال عبر WhatsApp",
            form_send_sms_fallback: "ليس لديك WhatsApp؟ أرسل عبر الرسائل القصيرة",
            placeholder_name: "أدخل اسمك الكامل",
            placeholder_phone: "أدخل رقم هاتفك",
            placeholder_message_optional: "اكتب رسالتك أو سؤالك هنا",
            footer_desc: "استكشف معنا رحلات لا تنسى في السفر والطهي والثقافة، واكتشف أفضل الفنادق والفيلات والأماكن في باندونغ، يوجياكارتا، وجاكرتا.",
            footer_service_areas: "مناطق الخدمة",
            footer_contact: "الاتصال",
            footer_copyright: "© 2025 HiLing Travel. جميع الحقوق محفوظة.",
            package_gold_title: "الباقة الذهبية 3 ليالي/4 أيام",
            package_diamond_title: "الباقة الماسية 4 ليالي/5 أيام"
        },
        // KOREA
        ko: {
            tagline: "반둥, 족자카르타, 자카르타의 투어 가이드 및 개인 교통편",
            nav_home: "홈",
            nav_about: "회사 소개",
            nav_vehicles: "일일 대여",
            nav_pricing: "투어 패키지",
            nav_contact: "문의하기",
            select_language_label: "언어 선택",
            select_language_tooltip: "언어 선택",
            slide1_title: "자카르타의 대도시 매력",
            slide1_subtitle: "상징적인 기념물에서 현대적인 도시 생활까지",
            slide2_title: "족자카르타의 문화적 경이",
            slide2_subtitle: "웅장한 역사적 유산 탐험",
            slide3_title: "반둥의 창의성",
            slide3_subtitle: "시원한 자연과 도시 혁신을 즐기세요",
            explore_now: "지금 탐험하기",
            about_title: "회사 소개",
            about_desc: "저희는 반둥, 족자카르타, 자카르타에서의 <strong>편안한 여행</strong>을 위한 <strong>전문 투어 가이드 및 개인 교통편</strong> 서비스를 제공합니다. 특히 반둥 지역에서는 숙소나 공항에서 <strong>무료 픽업</strong> 서비스를 즐기시고, 저희가 여러분을 <strong>다양한 명소로 안내</strong>해 드립니다. 최고의 관광지부터 유명 레스토랑 추천까지, 잊지 못할 경험을 제공하기 위해 최선을 다하고 있습니다.",
            feature1_title: "편안한 차량",
            feature1_desc: "7인승부터 59인승까지 다양한 차량 옵션.",
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
            facility3_title: "가이드 겸 운전기사",
            facility3_desc: "저희 전문 운전기사는 운전만 하는 것이 아니라, 각 도시의 최고의 경로, 맛집, 레스토랑 및 숙소에 대한 최고의 추천에 대한 전문 지식을 갖춘 가이드 역할도 합니다.",
            price_starts_from: "시작 가격",
            price_per_day: "/일",
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
            pricing_title: "인기 투어 패키지",
            pricing_subtitle: "잊을 수 없는 휴가 경험을 위한 저희의 베스트셀러 다일 패키지.",
            price_per_person: "/인",
            group_size: "8-20인 그룹 대상",
            package_3d2n_title: "3일/2박 패키지",
            package_3d2n_subtitle: "선택한 목적지에 대한 짧지만 기억에 남는 소개.",
            package_4d3n_title: "4일/3박 패키지",
            package_4d3n_subtitle: "더 여유로운 속도로 최고의 목적지를 탐험하세요.",
            package_5d4n_title: "5일/4박 패키지",
            package_5d4n_subtitle: "가장 완벽하고 심도 있으며 만족스러운 경험.",
            package_inclusion_transport_driver: "차량 + 전문 운전기사",
            package_inclusion_hotel: "3성급 호텔",
            package_inclusion_meals: "일정에 따른 식사",
            package_inclusion_fuel: "주유비 (가솔린/디젤)",
            package_inclusion_fees: "통행료 및 주차비",
            pricing_disclaimer: "*가격은 차량 종류, 호텔 선택, 거리, 목적지 및 이용 가능 여부에 따라 변경될 수 있습니다.",
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
            package_gold_title: "골드 패키지 3박 4일",
            package_diamond_title: "다이아몬드 패키지 4박 5일"
        },
        // JAPAN
        ja: {
            tagline: "バンドン、ジョグジャカルタ、ジャカルタのツアーガイドとプライベート送迎",
            nav_home: "ホーム",
            nav_about: "会社概要",
            nav_vehicles: "日帰りレンタル",
            nav_pricing: "ツアーパッケージ",
            nav_contact: "お問い合わせ",
            select_language_label: "言語を選択",
            select_language_tooltip: "言語を選択",
            slide1_title: "ジャカルタの都会的な魅力",
            slide1_subtitle: "象徴的なモニュメントから現代の都市生活まで",
            slide2_title: "ジョグジャカルタの文化的驚異",
            slide2_subtitle: "雄大な歴史遺産を探索",
            slide3_title: "バンドンの創造性",
            slide3_subtitle: "涼しい自然と都市の革新をお楽しみください",
            explore_now: "今すぐ探索",
            about_title: "会社概要",
            about_desc: "私たちは、バンドン、ジョグジャカルタ、ジャカルタでの<strong>快適なご旅行</strong>のための<strong>プロのツアーガイドとプライベート送迎</strong>サービスを提供しています。特にバンドンエリアでは、ご滞在先や空港からの<strong>無料送迎</strong>サービスをご利用いただき、私たちに<strong>魅力的な場所の探索</strong>をお任せください。最高の観光地から有名なレストランのおすすめまで、忘れられない体験を提供することをお約束します。",
            feature1_title: "快適な車両",
            feature1_desc: "7人乗りから59人乗りまで、さまざまな車両オプション。",
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
            facility3_title: "ガイド兼ドライバー",
            facility3_desc: "私たちのプロのドライバーは運転するだけでなく、各都市の最適なルート、グルメスポット、レストランや宿泊施設の最高のおすすめに関する専門知識を持つガイドも務めます。",
            price_starts_from: "料金",
            price_per_day: "／日",
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
            pricing_title: "人気のツアーパッケージ",
            pricing_subtitle: "忘れられない休暇体験のための私たちのベストセラーの数日間のパッケージ。",
            price_per_person: "／人",
            group_size: "8〜20人のグループ向け",
            package_3d2n_title: "3日間/2泊パッケージ",
            package_3d2n_subtitle: "選択した目的地への短くも記憶に残る紹介。",
            package_4d3n_title: "4日間/3泊パッケージ",
            package_4d3n_subtitle: "よりリラックスしたペースで最高の目的地を探索してください。",
            package_5d4n_title: "5日間/4泊パッケージ",
            package_5d4n_subtitle: "最も完全で、深く、満足のいく体験。",
            package_inclusion_transport_driver: "車両 + プロのドライバー",
            package_inclusion_hotel: "3つ星ホテル",
            package_inclusion_meals: "旅程に準じた食事",
            package_inclusion_fuel: "ガソリン/ディーゼル",
            package_inclusion_fees: "高速道路料金と駐車料金",
            pricing_disclaimer: "*料金は車両タイプ、ホテルの選択、距離、目的地、空き状況により変動する場合があります。",
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
            package_gold_title: "ゴールドパッケージ 3泊4日",
            package_diamond_title: "ダイヤモンドパッケージ 4泊5日"
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
        const currencyMap = {
            'id': { prefix: 'Rp ', code: 'IDR', format: 'id-ID' }, // format 'id-ID' tetap digunakan untuk pemisah ribuan
            'en': { prefix: '$', code: 'USD', decimals: 2 },
            'ms': { prefix: 'RM ', code: 'MYR', decimals: 2, format: 'en-MY' },
            'en-SG': { prefix: 'S$', code: 'SGD', decimals: 2 },
            'ms-BN': { prefix: 'B$', code: 'BND', decimals: 2 },
            'th': { prefix: '฿', code: 'THB', decimals: 2 },
            'vi': { suffix: '₫', code: 'VND', decimals: 0, format: 'vi-VN' },
            'zh': { prefix: '¥', code: 'CNY', decimals: 2 },
            'ar': { suffix: ' ر.س', code: 'SAR', decimals: 2 },
            'ko': { prefix: '₩', code: 'KRW', decimals: 0 },
            'ja': { prefix: '¥', code: 'JPY', decimals: 0 }
        };

        const priceElements = document.querySelectorAll('.price-value, .price-promo, .price-original');
        const targetCurrency = currencyMap[lang] || currencyMap['ms'];

        priceElements.forEach(element => {
            const priceInMYR = parseFloat(element.getAttribute('data-price-myr'));

            if (!priceInMYR) return;

            // Pastikan data nilai tukar sudah tersedia
            if (!exchangeRates || !exchangeRates.MYR) {
                // Fallback jika API gagal, tampilkan harga dasar dalam MYR
                element.innerHTML = `RM ${new Intl.NumberFormat('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(priceInMYR)}`;
                return;
            }

            // =================================================================
            // PERUBAHAN UTAMA: Logika Pemformatan Khusus untuk Rupiah (IDR)
            // =================================================================
            if (lang === 'id') {
                const priceInUSD = priceInMYR / exchangeRates.MYR;
                const priceInIDR = priceInUSD * exchangeRates.IDR;

                // Bagi dengan 1000 dan bulatkan ke bawah
                const priceInThousands = Math.floor(priceInIDR / 1000);

                // Format angka ribuan dengan pemisah titik
                const formattedThousands = new Intl.NumberFormat('id-ID').format(priceInThousands);

                // Gabungkan menjadi format "Rp xxx.xxxK"
                element.innerHTML = `Rp ${formattedThousands}K`;

            } else if (lang === 'ms') {
                // Logika untuk mata uang dasar (Ringgit)
                element.innerHTML = `${targetCurrency.prefix}${new Intl.NumberFormat(targetCurrency.format, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(priceInMYR)}`;

            } else {
                // Logika konversi untuk semua mata uang lainnya (tetap sama)
                if (exchangeRates[targetCurrency.code]) {
                    const priceInUSD = priceInMYR / exchangeRates.MYR;
                    const finalPrice = priceInUSD * exchangeRates[targetCurrency.code];

                    let formattedPrice;
                    if (targetCurrency.format) {
                        formattedPrice = new Intl.NumberFormat(targetCurrency.format).format(finalPrice.toFixed(targetCurrency.decimals));
                    } else {
                        formattedPrice = new Intl.NumberFormat('en-US', {
                            minimumFractionDigits: targetCurrency.decimals,
                            maximumFractionDigits: targetCurrency.decimals
                        }).format(finalPrice);
                    }
                    element.innerHTML = `${targetCurrency.prefix || ''}${formattedPrice}${targetCurrency.suffix || ''}`;
                } else {
                    // Fallback jika kode mata uang tidak ditemukan di API
                    element.innerHTML = `RM ${new Intl.NumberFormat('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(priceInMYR)}`;
                }
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
