document.addEventListener("DOMContentLoaded", () => {

    /* ===== About Section Scroll Animation ===== */
    const aboutSection = document.querySelector('.about');

    if (aboutSection) {
        window.addEventListener('scroll', () => {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight - 100) {
                aboutSection.classList.add('show');
            }
        });
    }

    /* ===== Gallery Lightbox ===== */
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    /* ===== Dark / Light Mode ===== */
    const toggleBtn = document.getElementById("themeToggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            toggleBtn.textContent =
                document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

});
