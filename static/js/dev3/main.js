g// ===== JS DEV 3 — Andrés David Criollo Rosero =====

document.addEventListener('DOMContentLoaded', () => {

    // --- Animación de barras de habilidades con IntersectionObserver ---
    const fills = document.querySelectorAll('.skill__fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const target = fill.getAttribute('data-width') || '0';
                fill.style.width = target + '%';
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.4 });

    fills.forEach(fill => skillObserver.observe(fill));

    // --- Reveal on scroll para las cards ---
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 60);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => revealObserver.observe(el));

    // --- Efecto hover en tech-items ---
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-4px) scale(1.04)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });
});
