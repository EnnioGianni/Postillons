// script.js avec gestion anti-conflits
(function() {
    let timeout;

    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        if (!searchInput) {
            console.warn("searchInput introuvable. Veuillez vérifier l'élément dans le DOM.");
            return;
        }

        searchInput.addEventListener("input", function () {
            let input = this.value.trim();
            let rows = document.querySelectorAll(".exemple tbody tr");

            if (!rows.length) {
                console.warn("Aucune ligne trouvée dans la table avec la classe 'exemple'.");
                return;
            }

            clearTimeout(timeout);

            timeout = setTimeout(function () {
                if (input === "") {
                    rows.forEach(row => {
                        row.style.display = "";
                        row.classList.remove("visible");
                        row.cells[1]?.classList.remove("highlight");
                        row.cells[4]?.classList.remove("highlight");
                    });
                    return;
                }

                let isNumeric = !isNaN(input) && input !== "";

                rows.forEach(row => {
                    let numCell = row.cells[1]?.textContent.trim();
                    let dateCell = row.cells[4]?.textContent.trim();

                    row.style.display = "none";
                    row.classList.remove("visible");
                    row.cells[1]?.classList.remove("highlight");
                    row.cells[4]?.classList.remove("highlight");

                    if (isNumeric) {
                        if (numCell === input) {
                            row.style.display = "";
                            row.classList.add("visible");
                            row.cells[1]?.classList.add("highlight");
                        }

                        let dates = dateCell?.match(/\d+/g);
                        if (dates && dates.includes(input)) {
                            row.style.display = "";
                            row.classList.add("visible");
                            row.cells[4]?.classList.add("highlight");
                        }
                    }
                });
            }, 300);
        });
    });
})();



(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const searchContainer = document.querySelector(".search-container");

        if (!searchContainer) {
            console.warn("Le conteneur de recherche n'a pas été trouvé.");
            return;
        }

        // Appliquer le style fixe lors du défilement
        function fixSearchBar() {
            const scrollY = window.scrollY; // Position actuelle du défilement
            const offsetTop = searchContainer.offsetTop; // Position initiale du conteneur

            if (scrollY >= offsetTop) {
                searchContainer.style.position = "fixed";
                searchContainer.style.top = "0";
                searchContainer.style.left = "50%"; // Centre horizontalement
                searchContainer.style.transform = "translateX(-50%)"; // Ajustement pour rester centré
                searchContainer.style.width = "50%"; // Largeur fixe
                searchContainer.style.zIndex = "100";
                searchContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
 //               searchContainer.style.backgroundColor = "white"; // Fond blanc pour éviter la transparence
            } else {
                searchContainer.style.position = "static"; // Retour à la position normale
                searchContainer.style.transform = "none"; // Supprimer la translation
                searchContainer.style.boxShadow = "none";
            }
        }

        // Ajouter l'écouteur de défilement
        window.addEventListener("scroll", fixSearchBar);
    });
})();
