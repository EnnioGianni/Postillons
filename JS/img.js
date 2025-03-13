document.addEventListener("DOMContentLoaded", function () { // Attend que le DOM soit complètement chargé avant d'exécuter le script
    function mmToPx(mm) { // Fonction pour convertir les millimètres en pixels
        return mm * 3.78; // Conversion basée sur une résolution de 96 DPI (1 mm ≈ 3.78 px)
    }

    function adjustImageSize(img) { // Fonction pour ajuster la taille des images en fonction de l'attribut `data-width-mm`
        let widthMM = parseFloat(img.getAttribute("data-width-mm")); // Récupère la largeur en millimètres spécifiée dans l'attribut `data-width-mm`
        if (isNaN(widthMM)) return; // Vérifie si la valeur est un nombre valide, sinon quitte la fonction

        let widthPX = mmToPx(widthMM); // Convertit la largeur de mm en pixels

        if (sessionStorage.getItem(img.src)) { // Vérifie si les dimensions de l'image sont déjà enregistrées dans sessionStorage
            let dimensions = JSON.parse(sessionStorage.getItem(img.src)); // Récupère les dimensions stockées
            img.style.width = widthPX + "px"; // Applique la largeur convertie en pixels
            img.style.height = (widthPX / dimensions.ratio) + "px"; // Calcule et applique la hauteur proportionnelle
        } else {
            let tempImg = new Image(); // Crée un nouvel objet image pour charger l'original
            tempImg.src = img.src; // Définit la source de l'image temporaire

            tempImg.onload = function () { // Attend que l'image soit chargée avant d'exécuter la suite
                let ratio = tempImg.width / tempImg.height; // Calcule le ratio largeur/hauteur de l'image originale
                sessionStorage.setItem(img.src, JSON.stringify({ ratio: ratio })); // Stocke le ratio dans sessionStorage pour éviter les recalculs futurs

                img.style.width = widthPX + "px"; // Applique la largeur convertie
                img.style.height = (widthPX / ratio) + "px"; // Applique la hauteur proportionnelle
            };
        }
    }

    function processImages() { // Fonction pour traiter toutes les images sur la page
        let images = document.querySelectorAll("img[data-width-mm]"); // Sélectionne toutes les images avec l'attribut `data-width-mm`
        images.forEach(adjustImageSize); // Applique la fonction `adjustImageSize` à chaque image trouvée
    }

    processImages(); // Exécute le traitement des images immédiatement après le chargement du DOM

    // MutationObserver pour détecter les images ajoutées dynamiquement dans la page
    const observer = new MutationObserver((mutations) => { // Crée un observer qui surveille les changements dans le DOM
        mutations.forEach(mutation => { // Parcourt toutes les mutations détectées
            mutation.addedNodes.forEach(node => { // Parcourt les éléments ajoutés au DOM
                if (node.tagName === "IMG" && node.hasAttribute("data-width-mm")) { // Vérifie si l'élément ajouté est une image avec l'attribut `data-width-mm`
                    adjustImageSize(node); // Applique l'ajustement de taille à l'image ajoutée
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true }); // Active l'observation du DOM pour détecter les nouveaux éléments ajoutés dynamiquement
});
