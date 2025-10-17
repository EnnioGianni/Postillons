// Fonction pour ajouter du texte à l'affichage de la calculatrice
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    // Enregistrer l'affichage actuel dans le stockage local
    localStorage.setItem('calculatorDisplay', display.value);
}

// Fonction pour effectuer le calcul et afficher le résultat
function calculate() {
    const display = document.getElementById('display');
    try {
        // Supprimer le symbole euro avant de calculer
        let expression = display.value.replace(/[^\d+\-*/(). ]/g, ''); // Garder uniquement les chiffres et les opérateurs

        // Effectuer le calcul avec eval (ou math.js si nécessaire)
        let result = eval(expression);
        
        if (result !== undefined) {
            // Formater le résultat en euros
            result = parseFloat(result).toFixed(2) + " €";

            // Afficher le résultat dans l'affichage de la calculatrice
            display.value = result;

            // Enregistrer le résultat dans le stockage local
            localStorage.setItem('calculatorDisplay', result);
        }
    } catch (e) {
        alert("Invalid Expression");
    }
}
// Fonction pour effacer l'affichage de la calculatrice et les données du stockage local
function clearDisplay() {
    const display = document.getElementById('display');
    // Effacer l'affichage de la calculatrice
    display.value = '';

    // Effacer les données du stockage local
    localStorage.removeItem('calculatorResult');
    localStorage.removeItem('calculatorDisplay');
}

// Événement lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier s'il y a un affichage précédemment enregistré dans le stockage local
    const previousDisplay = localStorage.getItem('calculatorDisplay');
    
    // Afficher l'affichage précédemment enregistré s'il existe
    if (previousDisplay !== null) {
        document.getElementById('display').value = previousDisplay;
    }

    const closeBtn = document.getElementById('closeCalculator');
    const showBtn = document.getElementById('showCalculatorBtn');
    const calculator = document.querySelector('.calculator');

    // --- Initialiser l'affichage selon la taille d'écran ---
const mq = window.matchMedia('(max-width: 768px)');

function setCalcVisibility() {
  if (mq.matches) {
    // Petit écran : cachée au lancement
    calculator.style.display = 'none';
    showBtn.style.display = 'block';
  } else {
    // Écran ≥ 768px : visible au lancement
    calculator.style.display = 'flex';
    showBtn.style.display = 'none';
  }
}

setCalcVisibility();
// (optionnel) Si tu veux que ça s'adapte quand on redimensionne :
if (mq.addEventListener) mq.addEventListener('change', setCalcVisibility);
else mq.addListener(setCalcVisibility); // compatibilité anciens navigateurs


    closeBtn.addEventListener('click', function() {
        calculator.style.display = 'none'; // Masquer la calculatrice
        showBtn.style.display = 'block'; // Afficher le bouton pour réafficher la calculatrice
    });

    showBtn.addEventListener('click', function() {
        calculator.style.display = 'flex'; // Afficher la calculatrice
        showBtn.style.display = 'none'; // Masquer le bouton pour réafficher la calculatrice
    });
});

// Gestionnaire d'événement pour la frappe de touche
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Empêcher le comportement par défaut (par exemple, soumettre un formulaire)
        event.preventDefault();
        // Calculer le résultat lorsque l'utilisateur appuie sur "Entrée"
        calculate();
    }
});















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
        window.location.href = "/Postillons/LaPoste/histoireDeLaPoste.html";
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















// Créer et insérer dynamiquement la boîte de recherche
  document.addEventListener("DOMContentLoaded", function () {
    
    const searchCell = document.createElement('div');
    searchCell.style.position = 'fixed';
    searchCell.style.top = '120px';
    searchCell.style.right = '190px';
    searchCell.style.padding = '1px 2px';
    searchCell.style.backgroundColor = '#2C3E50';
    searchCell.style.color = 'white';
    searchCell.style.borderRadius = '4px';
    searchCell.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    searchCell.style.fontFamily = 'Arial, sans-serif';
    searchCell.style.fontSize = '8px';
    searchCell.style.zIndex = '1000';
    searchCell.style.display = 'flex';
    searchCell.style.alignItems = 'center';
    searchCell.style.gap = '1px';
    searchCell.style.width = '100px';
    searchCell.style.minWidth = '80px';
    searchCell.style.height = '25px';
    searchCell.style.minHeight = '20px';
    searchCell.style.visibility = 'visible';
    searchCell.style.opacity = '1';

    






    // Créer une boîte de saisie
    const input = document.createElement('textarea');
    input.placeholder = 'N° ou Date';
    input.style.padding = '2px';
    input.style.borderRadius = '3px';
    input.style.border = '1px solid #ccc';
    input.style.fontSize = '8px';
    input.style.width = '60px';
    input.style.height = '20px';
    input.style.textAlign = 'center';
    input.style.display = 'block';
    input.style.margin = '0 auto';

    // Ajouter l'élément au document
    document.body.appendChild(input);

    // Crée un bouton pour effectuer la recherche
    const searchButton = document.createElement('button');
    searchButton.textContent = '🔍';
    searchButton.style.padding = '2px';
    searchButton.style.border = 'none';
    searchButton.style.background = 'none';
    searchButton.style.color = 'inherit';
    searchButton.style.cursor = 'pointer';
    searchButton.style.fontSize = '12px';

    // Crée un élément pour afficher les résultats
    const resultDisplay = document.createElement('div');
    resultDisplay.style.marginTop = '50px';
    resultDisplay.style.fontSize = '10px';
    resultDisplay.style.color = '#32FA5C';
    resultDisplay.style.position = 'absolute';
    resultDisplay.style.bottom = '-30px';
    resultDisplay.style.left = '0';
    resultDisplay.style.right = '0';
    resultDisplay.style.textAlign = 'center';

    // Assemble les éléments de la cellule de recherche
    searchCell.appendChild(input);
    searchCell.appendChild(searchButton);
    searchCell.appendChild(resultDisplay);
    searchCell.style.cssText += 'position:fixed; top:100px; left:15%; transform:translateX(-50%);';
    document.body.appendChild(searchCell);

    // Ajoute une animation CSS pour le bonhomme qui bouge les bras
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes wave {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            50% { transform: translateX(-50%) rotate(10deg); }
        }
        .bonhomme {
            animation: wave 0.5s infinite alternate;
        }
    `;
    document.head.appendChild(style);

    // Fonction de recherche
    function performSearch() {
        const searchValue = input.value.trim();
        resultDisplay.textContent = '';
        let count = 0;
        let found = false;

        if (!searchValue) {
            resultDisplay.textContent = 'Entrez une valeur.';
            return;
        }

        const tables = document.querySelectorAll('table');

        tables.forEach(table => {
            const rows = table.querySelectorAll('tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');

                if (cells.length >= 2) {
                    const cell = cells[1]; // Toujours la colonne 2
                    const cellValue = cell.textContent.trim();

                    // Suppression de l'ancien bonhomme
                    let existingBonhomme = cell.querySelector(".bonhomme");
                    if (existingBonhomme) existingBonhomme.remove();

                    if (!isNaN(searchValue) && cellValue === searchValue) {
                        found = true;
                        count++;
                        highlightCell(cell, `Valeur trouvée : ${cellValue}`);

                        // Ajouter le bonhomme 🙌 avec animation
                        let bonhomme = document.createElement("div");
                        bonhomme.innerText = "🙌";
                        bonhomme.style.position = "absolute";
                        bonhomme.style.top = "-30px";
                        bonhomme.style.left = "50%";
                        bonhomme.style.transform = "translateX(-50%)";
                        bonhomme.style.fontSize = "24px";
                        bonhomme.classList.add("bonhomme");

                        // Positionner correctement
                        cell.style.position = "relative";
                        cell.appendChild(bonhomme);
                    } else {
                        resetCellStyle(cell);
                    }
                }

                if (cells.length >= 5) {
                    const dateCell = cells[4]; // Recherche aussi par date
                    const dateValue = dateCell.textContent.trim();

                    if (dateValue === searchValue ||
                        (dateValue.includes('-') && dateValue.split('-').includes(searchValue))) {
                        found = true;
                        count++;
                        highlightCell(dateCell, `Valeur trouvée : ${dateValue}`);
                    } else {
                        resetCellStyle(dateCell);
                    }
                }
            });
        });

        if (!found) {
            resultDisplay.textContent = `"${searchValue}" non trouvé.`;
            resultDisplay.style.color = '#DB423D';
            resultDisplay.style.fontWeight = 'bold';
            resultDisplay.style.fontSize = '12px';

            // Ajout de l'effet clignotant continu
            let isVisible = true;
            setInterval(() => {
                resultDisplay.style.visibility = isVisible ? 'hidden' : 'visible';
                isVisible = !isVisible;
            }, 500); // Clignote toutes les 500ms
        } else {
            resultDisplay.textContent = `${count} résultat(s) trouvé(s).`;
            resultDisplay.style.color = '#DB423D';
            resultDisplay.style.fontWeight = 'bold';
            resultDisplay.style.visibility = 'visible'; // Réinitialiser si trouvé
        }
    }

    // Fonction pour mettre en surbrillance une cellule
    function highlightCell(cell, tooltip) {
        cell.style.backgroundColor = '#32FA5C';
        cell.style.color = '#000';
        cell.style.fontWeight = 'bold';
        cell.setAttribute('title', tooltip);
        cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Fonction pour réinitialiser le style d'une cellule
    function resetCellStyle(cell) {
        cell.style.backgroundColor = '';
        cell.style.color = '';
        cell.style.fontWeight = '';
        cell.removeAttribute('title');
        let existingBonhomme = cell.querySelector(".bonhomme");
        if (existingBonhomme) existingBonhomme.remove();
    }

    // Ajoute un événement sur le bouton de recherche
    searchButton.addEventListener('click', performSearch);

    // Ajoute un événement pour la touche Entrée
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Ajout du titre pour l'info-bulle
    input.title = "Tapez le numéro de la marque ou une date pour rechercher";
});

  

















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








































//Allignement des images a gauche
// La fonction s'exécute lorsque la page est complètement chargée
window.onload = function() {
  // Sélectionner toutes les images dans la table
  let images = document.querySelectorAll("table img");

  // Parcourir chaque image et appliquer les styles
  images.forEach(function(image) {
      image.style.float = "cente";        // Aligner l'image à gauche
   //   image.style.marginLeft = "10px";   // Ajouter une marge de 10px à gauche de l'image
  });
};










const imgElement = document.getElementById('img2');

if (imgElement) {
    imgElement.style.width = '70%';
    imgElement.style.height = 'auto';
} else {
    console.warn("L'élément avec l'ID 'img2' est introuvable.");
}


















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



































// Logo
$(document).ready(function () {
  // Tableau de logos
  const logos = [
    {
      href: "https://fr.wikipedia.org",
      src: "/images/wiki.png",
      title: "Wikipedia",
      width: "60px",
      height: "60px"
    },
    {
      href: "https://www.google.fr",
      src: "/images/google.png",
      title: "Google",
      width: "60px",
      height: "60px"
    },
    {
      href: "https://www.openai.com",
      src: "/images/openai.png",
      title: "OpenAI",
      width: "60px",
      height: "60px"
    },
    {
      href: "https://www.laposte.fr",
      src: "/images/laposte.png",
      title: "La Poste",
      width: "60px",
      height: "60px"
    }
  ];

  // Insérer dans #table-liens
  $('#table-liens').each(function () {
    const logosContainer = $('<div>').css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0px',
      padding: '10px 20px',
      gap: '10px',
      flexWrap: 'wrap'
    });

    logos.forEach(function (logo) {
      const link = $('<a>').attr({ href: logo.href, title: logo.title, target: "_blank" });

      const img = $('<img>').attr({
        src: logo.src,
        alt: logo.title,
        width: logo.width,
        height: logo.height
      }).css({
        transition: 'transform 0.3s ease-in-out'
      });

      img.hover(
        function () { $(this).css('transform', 'scale(1.2)'); },
        function () { $(this).css('transform', 'scale(1)'); }
      );

      link.append(img);
      logosContainer.append(link);
    });

    $(this).append(logosContainer);
  });

  // Ajustement responsive
  function adjustLogoSize() {
    $('#table-liens img').each(function () {
      if ($(window).width() < 768) {
        $(this).css({ width: '40px', height: '40px' });
      } else {
        $(this).css({
          width: $(this).attr('width'),
          height: $(this).attr('height')
        });
      }
    });
  }

  adjustLogoSize();
  $(window).resize(adjustLogoSize);
});















(function () { 
  document.addEventListener("DOMContentLoaded", function () {
      const UNIQUE_NAMESPACE = "border2_responsive_handler";

      function appliquerStylesResponsifs() {
          if (document.getElementById(`style-${UNIQUE_NAMESPACE}`)) return;

          let style = document.createElement("style");
          style.id = `style-${UNIQUE_NAMESPACE}`;
          style.innerHTML = `
              .border2 {
                  position: relative;
                  overflow: hidden;
                  text-align: center;
              }
              .border2 img {
                  transition: all 0.3s ease-in-out;
              }
          `;
          document.head.appendChild(style);
      }

      // fonction vide uniquement pour éviter l'erreur
      function ajusterImagesBorder2() {
        // pas de changement de dimensions ici
      }

      function observerChangementsDOM() {
          const observer = new MutationObserver(() => {
              ajusterImagesBorder2();
          });
          observer.observe(document.body, { childList: true, subtree: true });
      }

      appliquerStylesResponsifs();
      ajusterImagesBorder2();
      observerChangementsDOM();

      window.addEventListener("resize", function () {
          ajusterImagesBorder2();
      });
  });
})();








  


    