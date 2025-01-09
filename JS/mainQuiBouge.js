//Main qui bouge
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les images correspondantes dans les tables
    const handImages = document.querySelectorAll('table img[src="../../Resource/plumeDeture.png"]');

    // Variables pour la gestion du défilement et des animations
    let isAnimating = false; // Indique si une animation est en cours
    let lastScrollY = window.scrollY; // Position de scroll précédente

    // Fonction pour animer une seule image
    function animateHand(handImage) {
        return new Promise((resolve) => {
            let positionX = 0; // Position horizontale
            let positionY = 0; // Position verticale
            let direction = 1; // Sens du mouvement

            const interval = setInterval(() => {
                positionX += 1 * direction;
                positionY += (Math.random() * 2 - 1); // Variation verticale aléatoire
                handImage.style.transform = `translate(${positionX}px, ${positionY}px)`;

                // Inverse le sens horizontal après une limite
                if (positionX > 10 || positionX < -10) {
                    direction *= -1;
                }
            }, 50); // Répète toutes les 50 ms

            // Arrêter l'animation après 3 secondes
            setTimeout(() => {
                clearInterval(interval); // Arrête l'animation
                handImage.style.transform = "translate(0, 0)"; // Réinitialise la position
                resolve(); // Indique que l'animation est terminée
            }, 3000); // Animation dure 3 secondes
        });
    }

    // Fonction pour animer les mains visibles dans l'ordre
    async function animateHandsSequentially(images, direction) {
        if (isAnimating) return; // Empêche de lancer une animation si une autre est en cours
        isAnimating = true;

        const sortedImages = [...images].sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            return direction === "down" ? rectA.top - rectB.top : rectB.top - rectA.top;
        });

        for (const handImage of sortedImages) {
            await animateHand(handImage); // Attends que l'animation de cette main soit terminée avant de passer à la suivante
        }

        isAnimating = false;
    }

    // Fonction pour détecter les images visibles dans la fenêtre
    function getVisibleImages() {
        return [...handImages].filter((handImage) => {
            const rect = handImage.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });
    }

    // Gestion du scroll
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? "down" : "up"; // Détecte la direction du scroll
        lastScrollY = currentScrollY;

        // Récupère les images visibles
        const visibleImages = getVisibleImages();
        if (visibleImages.length > 0) {
            animateHandsSequentially(visibleImages, direction); // Anime les mains visibles dans l'ordre
        }
    });
});
