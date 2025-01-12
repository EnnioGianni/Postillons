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








