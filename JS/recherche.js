// Variable pour le timeout
let timeout;

document.getElementById("searchInput").addEventListener("input", function () {
    // Récupérer la valeur du champ de recherche
    let input = this.value.trim();
    let rows = document.querySelectorAll(".exemple tbody tr");

    // Annuler le délai précédent si l'utilisateur tape encore avant le délai
    clearTimeout(timeout);

    // Démarrer un nouveau délai de 300ms avant de lancer la recherche
    timeout = setTimeout(function() {
        // Si le champ de recherche est vide, réinitialiser toutes les lignes
        if (input === "") {
            rows.forEach(row => {
                row.style.display = ""; // Afficher toutes les lignes
                row.classList.remove("visible"); // Réinitialiser la surbrillance
                // Réinitialiser les surbrillances de cellules
                row.cells[1].classList.remove("highlight");
                row.cells[4].classList.remove("highlight");
            });
            return;
        }

        // Vérification si l'entrée est un nombre
        let isNumeric = !isNaN(input) && input !== "";

        rows.forEach(row => {
            let numCell = row.cells[1].textContent.trim(); // Contenu de la colonne 2 (N°)
            let dateCell = row.cells[4].textContent.trim(); // Contenu de la colonne 5 (Date)

            // Réinitialisation de l'affichage
            row.style.display = "none"; // Masquer la ligne par défaut
            row.classList.remove("visible"); // Supprimer la classe visible
            row.cells[1].classList.remove("highlight"); // Réinitialiser surbrillance colonne 2
            row.cells[4].classList.remove("highlight"); // Réinitialiser surbrillance colonne 5

            if (isNumeric) {
                // Recherche dans la colonne 2 (N°)
                if (numCell === input) {
                    row.style.display = ""; // Afficher la ligne correspondante
                    row.classList.add("visible"); // Marquer la ligne comme visible
                    row.cells[1].classList.add("highlight"); // Ajouter surbrillance sur la cellule
                }

                // Recherche dans la colonne 5 (Date)
                let dates = dateCell.match(/\d+/g); // Extraire toutes les dates numériques
                if (dates && dates.includes(input)) {
                    row.style.display = ""; // Afficher la ligne correspondante
                    row.classList.add("visible"); // Marquer la ligne comme visible
                    row.cells[4].classList.add("highlight"); // Ajouter surbrillance sur la cellule
                }
            }
        });
    }, 300); // Délai de 300 ms avant d'exécuter la recherche
});






