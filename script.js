document.addEventListener('DOMContentLoaded', function() {

    // --- SLIDER LOGIC ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;

    const nextSlideBtn = document.getElementById('nextSlide');
    const prevSlideBtn = document.getElementById('prevSlide');

    let autoSlideInterval = setInterval(goToNextSlide, 5000); // Otomatis ganti slide setiap 5 detik

    function updateSlide(newIndex) {
        // Hentikan dulu interval otomatis saat ada interaksi manual
        clearInterval(autoSlideInterval);

        // Update posisi slide
        currentSlide = newIndex;

        // Tampilkan slide yang sesuai
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        // Update titik (dot) yang aktif
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Mulai kembali interval otomatis setelah interaksi
        autoSlideInterval = setInterval(goToNextSlide, 5000);
    }

    function goToNextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= totalSlides) {
            newIndex = 0; // Kembali ke awal jika sudah di slide terakhir
        }
        updateSlide(newIndex);
    }

    function goToPrevSlide() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = totalSlides - 1; // Pergi ke slide terakhir jika sedang di awal
        }
        updateSlide(newIndex);
    }

    // Tambahkan event listener untuk tombol panah
    nextSlideBtn?.addEventListener('click', goToNextSlide);
    prevSlideBtn?.addEventListener('click', goToPrevSlide);

    // Tambahkan event listener untuk setiap titik (dot)
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
        mobileNavigation.classList.toggle('active');
    });


    // --- SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                if (mobileNavigation && mobileNavigation.classList.contains('active')) {
                    mobileNavigation.classList.remove('active');
                }
            }
        });
    });

    // DESTINATION TABS
    const destinationTabs = document.querySelectorAll('.destination-tab');
    destinationTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            destinationTabs.forEach(t => t.classList.remove('active', 'bg-blue-600', 'text-white'));
            tab.classList.add('active', 'bg-blue-600', 'text-white');
            document.querySelectorAll('.destination-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(targetTab)?.classList.remove('hidden');
        });
    });

    // MULTI-LANGUAGE FUNCTIONALITY (letakkan objek translations di sini)
    const translations = { /* ... Salin objek translations lengkap dari respons sebelumnya ... */ };
    const languageSelector = document.getElementById('languageSelector');
    languageSelector?.addEventListener('change', (e) => {
        const lang = e.target.value;
        // Salin semua logika terjemahan Anda dari respons sebelumnya ke sini
    });

    // CONTACT FORM
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccessMessage');

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const subject = encodeURIComponent(`Pesan dari Website HiLing Travel - ${name}`);
        let body = '';
        for (let [key, value] of formData.entries()) {
            body += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
        }
        body = encodeURIComponent(body);
        
        window.location.href = `mailto:arifahmadalfian@gmail.com?subject=${subject}&body=${body}`;
        
        successMessage.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => successMessage.classList.add('hidden'), 5000);
    });

    // SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (!mobileNavigation.classList.contains('hidden')) {
                    mobileNavigation.classList.add('hidden');
                }
            }
        });
    });
});