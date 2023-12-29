function createStars() {
    const starsContainer = document.querySelector(".star");
    const numberOfStars = 200; // Augmentez ce nombre selon le nombre d'étoiles souhaité
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        starsContainer.appendChild(star);

        const x = Math.random() * 100; // Position horizontale aléatoire
        const y = Math.random() * 100; // Position verticale aléatoire

        star.style.left = x + "vw";
        star.style.top = y + "vh";
    }
}

createStars(); // Appelez la fonction pour créer les étoiles au chargement de la page

