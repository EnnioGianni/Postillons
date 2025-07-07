// script.js
document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.starry-sky');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animation = 'twinkling ' + (Math.random() * 3 + 1) + 's infinite';
        starContainer.appendChild(star);
    }
});
