// Sélectionner toutes les sections ayant un attribut "id"
const sections = document.querySelectorAll("section[id]");

// Fonction pour mettre en surbrillance le lien actif
function navHighlighter() {
    // Récupérer la position actuelle de défilement
    let scrollY = window.pageYOffset;

    // Parcourir chaque section
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight; // Hauteur de la section
        const sectionTop = current.offsetTop - 50; // Position du haut de la section (avec un décalage de 50px pour ajuster)

        const sectionId = current.getAttribute("id"); // Récupérer l'ID de la section

        // Vérifier si la position actuelle de défilement est dans les limites de la section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Ajouter la classe "active" au lien correspondant
            document
                .querySelector(".navigation a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            // Supprimer la classe "active" si la section n'est plus visible
            document
                .querySelector(".navigation a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}

// Ajouter un écouteur d'événement pour déclencher la fonction au défilement
window.addEventListener("scroll", navHighlighter);

// Activer le défilement fluide sur les liens
document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        const targetId = this.getAttribute("href").slice(1); // Récupérer l'ID cible
        const targetSection = document.getElementById(targetId); // Trouver la section correspondante

        if (targetSection) {
            // Faire défiler jusqu'à la section correspondante
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajuster le décalage en fonction de la navigation fixe
                behavior: "smooth", // Défilement fluide
            });
        }
    });
});
