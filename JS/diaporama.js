//Diaporama

(function (global, document) {
    const ensureDOMReady = (callback) => {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback); // Vérifie si le DOM est prêt avant d'exécuter la fonction.
        }
    };
  
    const createPhotoBox = function (config) {
        try {
            let container = document.getElementById("photo-box-container");
            if (!container) {
                container = document.createElement("div"); // Crée le conteneur principal s'il n'existe pas déjà.
                container.id = "photo-box-container";
                container.style.position = "fixed"; // Fixe la position pour qu'il reste visible lors du défilement.
                container.style.top = "50px"; // Position verticale par rapport au haut de la fenêtre.
                container.style.left = "10px"; // Position horizontale par rapport à la gauche de la fenêtre.
                container.style.zIndex = "1000"; // Définit la priorité d'affichage au-dessus des autres éléments.
                container.style.width = "350px"; // Largeur du conteneur.
                container.style.height = "250px"; // Hauteur du conteneur.
                container.style.border = "1px solid black"; // Bordure noire autour du conteneur.
                container.style.boxSizing = "border-box"; // Inclut les bordures et les marges dans les dimensions.
                container.style.overflow = "hidden"; // Masque le contenu débordant.
                container.style.resize = "both"; // Permet de redimensionner le conteneur.
                container.style.backgroundColor = "#EBD6CE"; // Couleur de fond du conteneur.
                document.body.appendChild(container); // Ajoute le conteneur au corps du document.
            }
  
            let box = container.querySelector(".photo-box");
            if (!box) {
                box = document.createElement("div"); // Crée une boîte pour contenir l'image et les contrôles.
                box.className = "photo-box";
                box.style.width = "100%"; // Utilise toute la largeur disponible.
                box.style.height = "calc(100% - 30px)"; // Hauteur relative à la hauteur totale moins l'espace pour le titre.
                box.style.position = "relative"; // Position relative pour permettre un positionnement interne absolu.
                box.style.boxSizing = "border-box"; // Inclut les bordures et marges dans les dimensions.
                box.style.top = "35px"; // Position sous le titre.
                container.appendChild(box); // Ajoute la boîte au conteneur principal.
  
                const title = document.createElement("h2"); // Crée un titre pour la galerie.
                title.innerText = config.title || "Galerie"; // Utilise le titre fourni ou un titre par défaut.
                title.style.position = "absolute"; // Position absolue pour rester au-dessus de l'image.
                title.style.top = "0"; // Aligne le titre en haut.
                title.style.left = "50%"; // Centre horizontalement le titre.
                title.style.transform = "translateX(-50%)"; // Recentre le titre après le décalage.
                title.style.margin = "0"; // Supprime les marges par défaut.
                title.style.padding = "5px"; // Ajoute un espacement interne.
                title.style.fontSize = "16px"; // Taille de police pour le titre.
                title.style.color = "#333"; // Couleur du texte.
                title.style.backgroundColor = "rgba(254, 251, 251, 0.8)"; // Fond semi-transparent pour lisibilité.
                title.style.width = "100%"; // Largeur totale pour correspondre au conteneur.
                title.style.textAlign = "center"; // Centre le texte dans le titre.
                title.style.boxSizing = "border-box"; // Inclut les bordures et marges dans les dimensions.
                title.style.zIndex = "1001"; // S'assure que le titre est au-dessus des autres éléments.
                container.appendChild(title); // Ajoute le titre au conteneur.
  
                const closeButton = document.createElement("span"); // Crée un bouton de fermeture.
                closeButton.innerText = "×"; // Utilise un symbole de croix pour le bouton.
                closeButton.style.position = "absolute"; // Position absolue pour le placer dans le coin.
                closeButton.style.top = "10px"; // Décalage depuis le haut.
                closeButton.style.right = "10px"; // Décalage depuis la droite.
                closeButton.style.cursor = "pointer"; // Change le curseur en pointeur pour indiquer l'interactivité.
                closeButton.style.fontSize = "16px"; // Taille de la croix.
                closeButton.style.color = "black"; // Couleur noire pour la croix.
                closeButton.style.background = "none"; // Pas de fond.
                closeButton.style.border = "none"; // Pas de bordure.
                closeButton.style.padding = "0"; // Pas d'espacement interne.
                closeButton.style.lineHeight = "1"; // Alignement vertical précis.
                closeButton.style.zIndex = "1002"; // S'assure que le bouton est au-dessus des autres éléments.
                closeButton.addEventListener("click", () => {
                    container.remove(); // Supprime le conteneur lorsque le bouton est cliqué.
                });
                container.appendChild(closeButton); // Ajoute le bouton de fermeture au conteneur.
  
                let currentIndex = 0; // Initialise l'index de l'image actuelle.
                const updateImage = () => {
                    const image = box.querySelector("img"); // Sélectionne l'image actuelle.
                    const description = box.querySelector("p"); // Sélectionne la description actuelle.
                    const link = box.querySelector("a"); // Sélectionne le lien actuel.
                    if (config.extraImages && config.extraImages.length > 0) {
                        const currentImage = config.extraImages[currentIndex]; // Obtient les données de l'image actuelle.
                        image.src = currentImage.src; // Met à jour la source de l'image.
                        image.alt = currentImage.alt; // Met à jour le texte alternatif de l'image.
                        description.innerText = currentImage.description || "Description non disponible."; // Met à jour la description.
                        link.href = currentImage.src; // Met à jour le lien.
                    }
                };
  
                let link = document.createElement("a"); // Crée un lien pour l'image.
                link.style.display = "block"; // Affiche en bloc pour occuper toute la largeur.
                link.style.width = "100%"; // Largeur totale du lien.
                link.style.height = "100%"; // Hauteur totale du lien.
                box.appendChild(link); // Ajoute le lien à la boîte.
  
                let image = document.createElement("img"); // Crée l'élément image.
                image.src = config.src || "https://via.placeholder.com/200"; // Source par défaut si aucune image n'est fournie.
                image.alt = config.alt || "Image"; // Texte alternatif par défaut.
                image.title = config.title || "Image"; // Texte du titre par défaut.
                image.style.width = "100%"; // Largeur totale de l'image.
                image.style.height = "82%"; // Hauteur totale de l'image.
                image.style.objectFit = "cover"; // Ajuste l'image pour couvrir tout l'espace disponible.
                image.style. margin = "0 5px 0 5px"; // Ajuste les marges de l'image gauche et droite.
                link.appendChild(image); // Ajoute l'image au lien.
  
                const leftArrow = document.createElement("div"); // Crée une flèche pour naviguer vers l'image précédente.
                leftArrow.innerText = "<"; // Texte de la flèche gauche.
                leftArrow.style.position = "absolute"; // Position absolue pour être sur l'image.
                leftArrow.style.top = "50%"; // Centrage vertical.
                leftArrow.style.left = "10px"; // Décalage depuis la gauche.
                leftArrow.style.transform = "translateY(-50%)"; // Centrage vertical précis.
                leftArrow.style.fontSize = "20px"; // Taille de la flèche.
                leftArrow.style.cursor = "pointer"; // Change le curseur pour indiquer l'interactivité.
                leftArrow.style.zIndex = "1002"; // Priorité d'affichage sur les autres éléments.
                leftArrow.addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + config.extraImages.length) % config.extraImages.length; // Passe à l'image précédente.
                    updateImage(); // Met à jour l'image affichée.
                });
                box.appendChild(leftArrow); // Ajoute la flèche gauche à la boîte.
  
                const rightArrow = document.createElement("div"); // Crée une flèche pour naviguer vers l'image suivante.
                rightArrow.innerText = ">"; // Texte de la flèche droite.
                rightArrow.style.position = "absolute"; // Position absolue pour être sur l'image.
                rightArrow.style.top = "50%"; // Centrage vertical.
                rightArrow.style.right = "10px"; // Décalage depuis la droite.
                rightArrow.style.transform = "translateY(-50%)"; // Centrage vertical précis.
                rightArrow.style.fontSize = "20px"; // Taille de la flèche.
                rightArrow.style.cursor = "pointer"; // Change le curseur pour indiquer l'interactivité.
                rightArrow.style.zIndex = "1002"; // Priorité d'affichage sur les autres éléments.
                rightArrow.addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % config.extraImages.length; // Passe à l'image suivante.
                    updateImage(); // Met à jour l'image affichée.
                });
                box.appendChild(rightArrow); // Ajoute la flèche droite à la boîte.
  
                let description = document.createElement("p"); // Crée un paragraphe pour la description de l'image.
                description.innerText = config.description || "Description courte."; // Texte par défaut si aucune description n'est fournie.
                description.style.position = "absolute"; // Position absolue pour être en bas de l'image.
                description.style.bottom = "0"; // Aligne la description en bas.
                description.style.left = "0"; // Aligne la description à gauche.
                description.style.width = "100%"; // Largeur totale de la description.
                description.style.margin = "0"; // Supprime les marges par défaut.
                description.style.padding = "5px"; // Ajoute un espacement interne.
                description.style.backgroundColor = "rgba(254, 251, 251, 0.8)"; // Fond semi-transparent pour lisibilité.
                description.style.fontSize = "12px"; // Taille de police pour la description.
                description.style.textAlign = "center"; // Centre le texte de la description.
                description.style.boxSizing = "border-box"; // Inclut les bordures et marges dans les dimensions.
                box.appendChild(description); // Ajoute la description à la boîte.
                description.style.marginTop = "50px"; // Ajoute une marge de 10px entre l'image et la description.
  
                if (config.extraImages && config.extraImages.length > 0) {
                    link.href = config.extraImages[0].src; // Définit le lien vers la première image.
  
                    const startSlideshow = () => {
                        setInterval(() => {
                            currentIndex = (currentIndex + 1) % config.extraImages.length; // Passe automatiquement à l'image suivante toutes les 3 secondes.
                            updateImage(); // Met à jour l'image affichée.
                        }, 3000); // Intervalle de 3 secondes.
                    };
  
                    updateImage(); // Met à jour l'image affichée initiale.
                    startSlideshow(); // Démarre le diaporama automatique.
                }
            }
        } catch (error) {
            console.error("Erreur lors de la création de la PhotoBox :", error); // Affiche une erreur dans la console en cas de problème.
        }
    };
  
    ensureDOMReady(() => {
        try {
            const customConfig = {
                title: "Academie De Philatelie", // Titre de la galerie.
                src: "../../../laPosteDeLancienneFrance/Villes N/Nerac/Images/3a.png", // Source de l'image principale.
                alt: "Academie De Philatelie", // Texte alternatif pour l'image principale.
                description: "Déboursé de Nérac.", // Description courte de l'image principale.
                longDescription: "Déboursé de Nérac réemploi marque Lenain lot et Garonne 1800 pour Toulouse. Lettre rare.", // Description longue de l'image principale.
                extraImages: [
                    { src: "../../../laPosteDeLancienneFrance/Villes N/Nerac/Images/3a.png", alt: "Extra Image 1", description: "Description de l'image supplémentaire 1." },
                    { src: "https://via.placeholder.com/350", alt: "Extra Image 2", description: "Description de l'image supplémentaire 2." },
                    { src: "https://via.placeholder.com/400", alt: "Extra Image 3", description: "Description de l'image supplémentaire 3." },
                    { src: "https://via.placeholder.com/450", alt: "Extra Image 4", description: "Description de l'image supplémentaire 4." },
                    { src: "https://via.placeholder.com/500", alt: "Extra Image 5", description: "Description de l'image supplémentaire 5." },
                    { src: "https://via.placeholder.com/550", alt: "Extra Image 6", description: "Description de l'image supplémentaire 6." },
                    { src: "https://via.placeholder.com/600", alt: "Extra Image 7", description: "Description de l'image supplémentaire 7." },
                    { src: "https://via.placeholder.com/650", alt: "Extra Image 8", description: "Description de l'image supplémentaire 8." },
                    { src: "https://via.placeholder.com/700", alt: "Extra Image 9", description: "Description de l'image supplémentaire 9." },
                    { src: "https://via.placeholder.com/750", alt: "Extra Image 10", description: "Description de l'image supplémentaire 10." }
                ]
            };
  
            createPhotoBox(customConfig); // Crée la boîte photo avec la configuration personnalisée.
        } catch (error) {
            console.error("Erreur lors de l'exécution du script PhotoBox :", error); // Affiche une erreur dans la console si le script échoue.
        }
    });
  
    global.createPhotoBox = createPhotoBox; // Expose la fonction globalement pour pouvoir l'appeler ailleurs.
  })(window, document);
  