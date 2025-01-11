//ligne de Total
document.addEventListener("DOMContentLoaded", () => {
    function processTables(columnIndex) {
        const tables = document.querySelectorAll("table");
        
        tables.forEach(table => {
            let sum = 0;

            const rows = table.querySelectorAll("tbody tr, tr:not(:first-child)");
            rows.forEach(row => {
                const cell = row.cells[columnIndex]; 
                if (cell) {
                    const value = parseFloat(cell.textContent.trim().replace(/[^\d.-]/g, ""));
                    if (!isNaN(value)) {
                        sum += value;
                    }
                }
            });

            const totalRow = document.createElement("tr");
            totalRow.style.backgroundColor = "paleGreen"; // Ajout de la couleur de fond vert clair

            const cellCount = table.rows[0]?.cells.length || columnIndex + 1;
            for (let i = 0; i < cellCount; i++) {
                const newCell = document.createElement("td");
                if (i >= 0 && i < columnIndex - 1) {
                    // Supprimer les séparateurs verticaux pour les colonnes 1 à 6
                    newCell.style.border = "none";
                }
                if (i === columnIndex - 1) { 
                    newCell.textContent = "Total";
                    newCell.style.color = "red";
                    newCell.style.fontWeight = "bold";
                } else if (i === columnIndex) { 
                    newCell.textContent = `${sum.toFixed(2)} €`;
                    newCell.style.color = "red";
                    newCell.style.fontWeight = "bold";
                }
                totalRow.appendChild(newCell);
            }

            const usefulLinksRow = Array.from(rows).find(row =>
                row.textContent.toLowerCase().includes("liens utiles")
            );

            if (usefulLinksRow) {
                usefulLinksRow.parentNode.insertBefore(totalRow, usefulLinksRow);
            } else {
                table.appendChild(totalRow);
            }
        });
    }

    // Appelle la fonction pour traiter tous les tableaux et additionner la colonne 8 (index 7)
    processTables(7);
});

















document.addEventListener("DOMContentLoaded", function () {
    const calculator = document.querySelector(".calculator");
    const showCalculatorBtn = document.getElementById("showCalculatorBtn");

    function handleResize() {
        if (window.innerWidth < 768) {
            // Cache la calculatrice et le bouton d'affichage sur les petits écrans
            calculator.style.display = "none";
            showCalculatorBtn.style.display = "none";
        } else {
            // Affiche la calculatrice et le bouton d'affichage sur les écrans plus larges
            calculator.style.display = "block";
            showCalculatorBtn.style.display = "block";
        }
    }

    // Exécute handleResize au chargement de la page et lors du redimensionnement
    handleResize();
    window.addEventListener("resize", handleResize);
});

























//Boutton GO
document.addEventListener("DOMContentLoaded", function () {
    // Sélection de l'élément header
    const header = document.getElementById("mainHeader");

    // Rendre le header fixe et ajouter un padding à droite
    header.style.position = "fixed"; // Fixe le header
    header.style.top = "0"; // Toujours en haut
    header.style.width = "100%"; // Conserve sa largeur d'origine
    header.style.zIndex = "1000"; // Priorité d'affichage
    header.style.paddingRight = "90px"; // Ajoute un espace pour le bouton

    // Créer un conteneur pour le bouton
    const container = document.createElement("div");
    container.style.position = "fixed"; // Garde le conteneur visible en position fixe
    container.style.top = "0px"; // Alignement vertical
    container.style.right = "0px"; // Alignement horizontal
    container.style.zIndex = "1001"; // Le bouton reste au-dessus du header

    // Créer le bouton rond
    const button = document.createElement("button");
    button.textContent = "Go";
    button.style.width = "40px"; // Largeur
    button.style.height = "40px"; // Hauteur
    button.style.borderRadius = "50%"; // Rond
    button.style.backgroundColor = "#4CAF50"; // Couleur verte
    button.style.color = "white";
    button.style.border = "none";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.display = "flex"; // Flexbox pour centrer
    button.style.alignItems = "center"; // Centrer verticalement
    button.style.justifyContent = "center"; // Centrer horizontalement
    button.title = "Articles sur l'histoire de la Poste";

    // Liste élargie des couleurs pour le clignotement
    const colors = [
        "#4CAF50", "#FF5733", "#FFC300", "#DAF7A6", "#900C3F",
        "#9B59B6", "#3498DB", "#F39C12", "#1ABC9C", "#E74C3C",
        "#34495E", "#F1C40F", "#2ECC71", "#8E44AD", "#16A085"
    ];

    let currentColorIndex = 0;

    // Fonction pour changer la couleur du bouton
    function changeColor() {
        button.style.backgroundColor = colors[currentColorIndex];
        button.style.color = currentColorIndex % 2 === 0 ? "white" : "black";  // Alterner le texte en blanc ou noir
        currentColorIndex = (currentColorIndex + 2) % colors.length; // Passer à la couleur suivante
    }

    // Lancer le clignotement toutes les 500ms
    setInterval(changeColor, 500); // Change de couleur toutes les 500ms

    // Ajouter une action au clic
    button.addEventListener("click", function () {
        // Rediriger vers la page des articles sur l'histoire de la Poste
        window.location.href = "/Postillons/La Poste/histoireDeLaPoste.html";
    });

    // Ajouter le bouton au conteneur
    container.appendChild(button);

    // Ajouter le conteneur au DOM
    document.body.appendChild(container);
});








// pour p
// Sélectionner l'élément <p> en utilisant sa balise
let paragraph = document.querySelector('p');

// Appliquer le style font-weight: bold
paragraph.style.fontWeight = 'bold';











// Rendre le bouton toujours au premier plan
const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.style.position = "fixed"; // Fixe à un endroit visible
scrollToTopButton.style.zIndex = "9999"; // Toujours au-dessus des autres

// Ajouter le comportement de retour en haut
scrollToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};








//Ouverture sur l'accueil
  (function() {
    const homepageURL = "http://127.0.0.1:5500/Postillons/index.html#openModal"; // URL de la page d'accueil
    const alreadyVisitedKey = "alreadyVisited";

    // Vérifie si l'utilisateur a déjà visité le site
    if (!localStorage.getItem(alreadyVisitedKey)) {
      // Si c'est la première visite, enregistre l'information
      localStorage.setItem(alreadyVisitedKey, "true");

      // Redirige vers la page d'accueil
      if (window.location.href !== homepageURL) {
        window.location.href = homepageURL;
      }
    }
  })();























    
  
    










































// Fichier : horloge.js
// Crée un conteneur pour la boîte
const boite = document.createElement('div');

// Applique les styles pour la boîte
boite.style.position = 'fixed';  // Toujours visible
boite.style.top = '130px';       // Distance du haut
boite.style.right = '20px';      // Distance de la droite
boite.style.width = '100px';     // Dimensions inchangées
boite.style.height = '50px';
boite.style.backgroundColor = '#4CAF50'; // Vert de fond
boite.style.color = '#fff';              // Couleur du texte
boite.style.fontFamily = 'Arial, sans-serif';
boite.style.fontSize = '1.2rem';
boite.style.display = 'flex';
boite.style.alignItems = 'center';       // Centrage vertical
boite.style.justifyContent = 'center';   // Centrage horizontal
boite.style.border = '2px solid #ffffff'; // Bordure extérieure blanche
boite.style.padding = '5px';             // Espace intérieur
boite.style.borderRadius = '10px';       // Coins arrondis
boite.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Ombre portée
boite.style.zIndex = '1000';             // Toujours au-dessus

// Bordure intérieure (via un conteneur interne)
const innerBox = document.createElement('div');
innerBox.style.width = '100%';
innerBox.style.height = '100%';
innerBox.style.border = '2px solid #333'; // Bordure intérieure noire
innerBox.style.borderRadius = '8px';     // Coins arrondis intérieurs
innerBox.style.display = 'flex';
innerBox.style.alignItems = 'center';
innerBox.style.justifyContent = 'center';
innerBox.style.boxSizing = 'border-box'; // Inclus padding dans les dimensions

// Crée un élément pour afficher l'horloge
const horloge = document.createElement('div');

// Ajoute l'horloge au conteneur intérieur
innerBox.appendChild(horloge);

// Ajoute le conteneur intérieur à la boîte principale
boite.appendChild(innerBox);

// Ajoute la boîte au body de la page
document.body.appendChild(boite);

// Fonction pour mettre à jour l'horloge
function mettreAJourHorloge() {
  const maintenant = new Date();
  const heures = String(maintenant.getHours()).padStart(2, '0');
  const minutes = String(maintenant.getMinutes()).padStart(2, '0');
  const secondes = String(maintenant.getSeconds()).padStart(2, '0');

  // Format HH:MM:SS
  horloge.textContent = `${heures}:${minutes}:${secondes}`;
}

// Met à jour l'horloge toutes les secondes
setInterval(mettreAJourHorloge, 1000);

// Initialise l'horloge immédiatement
mettreAJourHorloge();















//Allignement des images a gauche
// La fonction s'exécute lorsque la page est complètement chargée
window.onload = function() {
  // Sélectionner toutes les images dans la table
  let images = document.querySelectorAll("table img");

  // Parcourir chaque image et appliquer les styles
  images.forEach(function(image) {
      image.style.float = "left";        // Aligner l'image à gauche
      image.style.marginLeft = "10px";   // Ajouter une marge de 10px à gauche de l'image
  });
};










// Sélectionne l'élément img par son id
const imgElement = document.getElementById('img2');

// Applique les styles
imgElement.style.width = '70%';
imgElement.style.height = 'auto';

















//Neige
// Neige
(function () {
  // Vérifie si la neige doit s'afficher en fonction de la date
  const today = new Date();
  const month = today.getMonth(); // Mois actuel (0 = janvier, ..., 11 = décembre)
  const day = today.getDate(); // Jour actuel

  // La neige tombe uniquement entre le 9 décembre et le 15 février
  if ((month === 11 && day >= 9) || month === 0 || (month === 1 && day <= 15)) {
    /* Fonction pour créer un flocon */
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '•'; // Symbole pour représenter un flocon
      snowflake.style.fontSize = Math.random() * 24 + 10 + 'px'; // Taille aléatoire
      snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Position horizontale aléatoire
      snowflake.style.color = '#FFFFFF'; // Couleur blanche pour les flocons
      snowflake.style.position = 'fixed';
      snowflake.style.top = '-50px';
      snowflake.style.zIndex = '1000';
      snowflake.style.pointerEvents = 'none';
      snowflake.style.opacity = '0.8';

      // Définir les animations dynamiques
      snowflake.style.animation = `
        fall ${Math.random() * 4 + 3}s linear infinite, 
        sideWays ${Math.random() * 2 + 1}s ease-in-out infinite
      `;

      document.body.appendChild(snowflake);

      // Supprime le flocon après un certain temps
      setTimeout(() => {
        snowflake.remove();
      }, Math.random() * 4000 + 4000);
    }

    /* Ajout des animations dynamiquement au premier stylesheet */
    function addSnowflakeStyles() {
      const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;

      // Ajout des animations "fall" et "sideWays"
      styleSheet.insertRule(
        `@keyframes fall { 0% { top: -50px; } 100% { top: 100vh; } }`,
        styleSheet.cssRules.length
      );
      styleSheet.insertRule(
        `@keyframes sideWays { 
          0%, 100% { transform: translateX(0); } 
          50% { transform: translateX(20px); } 
        }`,
        styleSheet.cssRules.length
      );

      // Ajout du style CSS pour les flocons
      styleSheet.insertRule(
        `.snowflake { 
          position: fixed; 
          top: -50px; 
          z-index: 1000; 
          pointer-events: none; 
          opacity: 0.8; 
        }`,
        styleSheet.cssRules.length
      );
    }

    // Initialisation
    addSnowflakeStyles();

    // Génère des flocons à intervalle régulier (plus dense)
    setInterval(createSnowflake, 150); // Flocons générés toutes les 150 ms pour plus de densité
  }
})();


// Accéder à l'élément avec l'ID "logoImg"
const logoImg = document.getElementById('logoImg');

// Ajouter une marge de 20px en haut
logoImg.style.marginTop = '190px';









// Script spécifique au bouton de retour en haut
const scrollToTopButton = document.getElementById("custom-scrollToTopButton");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





























