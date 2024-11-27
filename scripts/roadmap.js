document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.roadmap-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { 
        threshold: 0.2,  // 
        rootMargin: '0px 0px -30px 0px' // Permet de détecter les éléments avant même qu'ils soient complètement visibles
    });

    // Observer chaque élément de la roadmap
    items.forEach((item) => {
        observer.observe(item);
    });
});
