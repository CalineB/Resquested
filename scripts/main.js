window.addEventListener('scroll', function () {
    const mainElement = document.querySelector('.main');
    const scrollPosition = window.scrollY; // Position actuelle du scroll
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale de la page

    // Calculer la progression du scroll (de 0 à 1)
    const scrollProgress = scrollPosition / windowHeight;

    // Calculer la taille du rayon du cercle violet (de 0 à 100)
    const radius = Math.min(100, scrollProgress * 100); // La taille du cercle augmente avec le défilement

    // Appliquer un dégradé radial de violet au bleu
    const gradient = `radial-gradient(circle, violet ${radius}%, rgb(2, 2, 74) 100%)`;

    // Appliquer le dégradé comme fond
    mainElement.style.backgroundImage = gradient;
});
