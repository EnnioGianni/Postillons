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







// Configuration des publicités
const ads = [
  {
      image: '../../../La Poste/Images/in_34.jpg',
      title: 'Vente à prix nets !',
      description1: "📅 Date : Vente à prix net\n📍 Lieu : Salle des ventes, Paris.",
      description2: "Découvrez une collection unique, allant des lettres anciennes aux timbres postes.",
      description3: "Rejoignez-nous et placez vos enchères sur ces lots exceptionnels. Les lots sont limités !",
      link: 'https://www.letimbreclassique.com/ltc-parcourir-lots/vpn-2024/vpn-2024/'
  },
  {
      image: '../../../La Poste/Images/IvertTellier.png',
      title: 'Yvert et Tellier!',
      description1: "Le site officiel, tout pour votre collection de timbres et de monnaies",
      description2: "Dans les espaces YVERT ET TELLIER, retrouvez le plaisir de collectionner",
      description3: "Yvert et Tellier est le seul site où vous pourrez voir un visuel de votre timbre  !",
      link: 'https://www.yvert.com/'
  },
  {
      image: '../../../La Poste/Images/L_EchoPhil.png',
      title: 'L-Écho de la Timbrologie',
      description1: "Tous les mois, L'Écho de la Timbrologie propose des informations inédites, présente et commente les nouvelles émissions de France et d'ailleurs, et interviewe les acteurs de la philatélie.",
      description2: "L'Écho de la Timbrologie : le journal de référence pour tous les philatélistes ",
      description3: "Si vous souhaitez recevoir la version papier de LÉcho de la Timbrologie, vous pouvez vous abonner sur le site de LÉcho de la Timbrologie",
      link: 'http://www.echo-de-la-timbrologie.com/store/'
  },
  {
      image: '../../../La Poste/Images/feteDuTimbre2025.jpg',
      title: 'Fête du Timbre 2025',    
      description1: "Thème Le cirque",
      description2: "📅 Date : Du 08/03/2025 au 09/03/2025\n📍 Lieu : A MONTPELLIER ",
      description3: "A LA SALLE NOUGARET (ESPACE PITOT).",
      description4: "Expositions, achat, vente, oblitération par la Poste, souvenirs.",
      link: 'https://www.asso-philatelique-montpellier.fr/evenement/fete-du-timbre/8/'
  },
  {
      image: '../../../La Poste/Images/Decembre2024.jpg',
      title: 'Timbres magazine',
      description1: "📅 Numéro du mois de décembre\n📍 Timbres magazine",
      description2: "Mensuel de la presse philatélique française",
      description3: "Des articles et des nouvelles philatéliques",
      link: 'https://timbresmag.fr/'
  }
];

// Récupération de l'index actuel dans localStorage
let currentAdIndex = parseInt(localStorage.getItem('lastAdIndex')) || 0;

// Fonction pour enregistrer l'index actuel dans localStorage
function saveCurrentAdIndex(index) {
  localStorage.setItem('lastAdIndex', index);
}

// Création de la bannière publicitaire
const adBanner = document.createElement('div');
adBanner.style.position = 'fixed';
adBanner.style.bottom = '20px';
adBanner.style.right = '20px';
adBanner.style.width = '320px';
adBanner.style.height = 'auto';
adBanner.style.padding = '15px';
adBanner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
adBanner.style.backgroundColor = '#F59454';
adBanner.style.border = '1px solid #ddd';
adBanner.style.borderRadius = '8px';
adBanner.style.zIndex = '1000';
document.body.appendChild(adBanner);

// Bouton de fermeture
const closeButton = document.createElement('span');
closeButton.textContent = '×';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '10px';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '18px';
closeButton.style.fontWeight = 'bold';
closeButton.style.color = '#999';
closeButton.title = 'Fermer la bannière';
adBanner.appendChild(closeButton);

closeButton.addEventListener('click', () => {
  adBanner.style.display = 'none';
});

// Création des éléments dynamiques
const adImage = document.createElement('img');
adImage.style.width = '100%';
adImage.style.borderRadius = '5px';
adImage.style.marginBottom = '10px';
adBanner.appendChild(adImage);

const adTitle = document.createElement('h3');
adTitle.style.margin = '10px 0';
adTitle.style.fontSize = '18px';
adTitle.style.color = '#333';
adTitle.style.textAlign = 'center';
adBanner.appendChild(adTitle);

const adDescription1 = document.createElement('p');
adDescription1.style.margin = '10px 0';
adDescription1.style.fontSize = '14px';
adDescription1.style.color = '#555';
adDescription1.style.textAlign = 'center';
adBanner.appendChild(adDescription1);

const adDescription2 = document.createElement('p');
adDescription2.style.margin = '10px 0';
adDescription2.style.fontSize = '14px';
adDescription2.style.color = '#555';
adDescription2.style.textAlign = 'justify';
adBanner.appendChild(adDescription2);

const adDescription3 = document.createElement('p');
adDescription3.style.margin = '10px 0';
adDescription3.style.fontSize = '14px';
adDescription3.style.color = '#555';
adDescription3.style.textAlign = 'justify';
adBanner.appendChild(adDescription3);

const adLink = document.createElement('a');
adLink.style.display = 'inline-block';
adLink.style.marginTop = '10px';
adLink.style.fontSize = '14px';
adLink.style.color = '#007BFF';
adLink.style.textDecoration = 'none';
adLink.style.fontWeight = 'bold';
adLink.style.textAlign = 'center';
adLink.style.display = 'block';
adLink.target = '_blank';
adBanner.appendChild(adLink);

// Création des flèches
const leftArrow = document.createElement('span');
leftArrow.textContent = '◀';
leftArrow.style.position = 'absolute';
leftArrow.style.top = '40%';
leftArrow.style.left = '10px';
leftArrow.style.transform = 'translateY(-50%)';
leftArrow.style.fontSize = '20px';
leftArrow.style.cursor = 'pointer';
leftArrow.style.zIndex = '1001';
leftArrow.style.color = 'black';
leftArrow.title = 'Précédent';
adBanner.appendChild(leftArrow);

const rightArrow = document.createElement('span');
rightArrow.textContent = '▶';
rightArrow.style.position = 'absolute';
rightArrow.style.top = '40%';
rightArrow.style.right = '10px';
rightArrow.style.transform = 'translateY(-50%)';
rightArrow.style.fontSize = '20px';
rightArrow.style.cursor = 'pointer';
rightArrow.style.zIndex = '1001';
rightArrow.style.color = 'black';
rightArrow.title = 'Suivant';
adBanner.appendChild(rightArrow);

// Fonction pour mettre à jour la publicité
function updateAdContent() {
  const ad = ads[currentAdIndex];
  adImage.src = ad.image;
  adImage.alt = ad.title;
  adTitle.textContent = ad.title;
  adDescription1.textContent = ad.description1;
  adDescription2.textContent = ad.description2;
  adDescription3.textContent = ad.description3;
  adLink.textContent = 'Cliquez ici pour en savoir plus !';
  adLink.href = ad.link;
  saveCurrentAdIndex(currentAdIndex);
}

// Gestion des clics pour les flèches
leftArrow.addEventListener('click', () => {
  currentAdIndex = (currentAdIndex - 1 + ads.length) % ads.length;
  updateAdContent();
});

rightArrow.addEventListener('click', () => {
  currentAdIndex = (currentAdIndex + 1) % ads.length;
  updateAdContent();
});



// Initialisation de la publicité
updateAdContent();

//Fonction pour que la publicité sarrette lorsqu'on passe la sourie

// Initialisation de l'intervalle
let interval = null;

// Fonction pour démarrer l'intervalle
function startInterval() {
  interval = setInterval(() => {
    currentAdIndex = (currentAdIndex + 1) % ads.length;
    updateAdContent();
  }, 10000);
}

// Fonction pour arrêter l'intervalle
function stopInterval() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

// Démarrage initial de l'intervalle
startInterval();

// Ajout des gestionnaires d'événements pour le survol
adBanner.addEventListener('mouseenter', () => {
  stopInterval(); // Arrête l'intervalle lorsque la souris entre dans la bannière
});

adBanner.addEventListener('mouseleave', () => {
  startInterval(); // Redémarre l'intervalle lorsque la souris quitte la bannière
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
















// Crée dynamiquement une cellule de recherche
const searchCell = document.createElement('div');
searchCell.style.position = 'fixed';
searchCell.style.top = '130px';
searchCell.style.right = '360px';
searchCell.style.padding = '5px 10px'; // Dimensions réduites
searchCell.style.backgroundColor = '#2C3E50'; // Fond bleu foncé élégant
searchCell.style.color = 'white';
searchCell.style.borderRadius = '10px';
searchCell.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
searchCell.style.fontFamily = 'Arial, sans-serif';
searchCell.style.fontSize = '12px'; // Texte légèrement réduit
searchCell.style.zIndex = '1000';
searchCell.style.display = 'flex'; // Alignement en ligne
searchCell.style.alignItems = 'center';
searchCell.style.gap = '5px';

// Créer une boîte de saisie
const input = document.createElement('textarea');
input.placeholder = 'Tapez le N° ou la date recherché'; // Texte descriptif
input.style.padding = '5px';
input.style.borderRadius = '5px';
input.style.border = '1px solid #ccc';
input.style.fontSize = '15px';
input.style.width = '100px';
input.style.height = '50px';
input.style.textAlign = 'center';
input.style.display = 'block';
input.style.margin = '0 auto';

// Ajouter l'élément au document
document.body.appendChild(input);

// Crée un bouton pour effectuer la recherche
const searchButton = document.createElement('button');
searchButton.textContent = '🔍'; // Icône de loupe
searchButton.style.padding = '5px';
searchButton.style.borderRadius = '5px';
searchButton.style.border = 'none';
searchButton.style.backgroundColor = '#1ABC9C';
searchButton.style.color = 'white';
searchButton.style.cursor = 'pointer';
searchButton.style.fontSize = '14px';

// Crée un élément pour afficher les résultats
const resultDisplay = document.createElement('div');
resultDisplay.style.marginTop = '5px';
resultDisplay.style.fontSize = '10px';
resultDisplay.style.color = '#32FA5C';
resultDisplay.style.position = 'absolute';
resultDisplay.style.bottom = '-20px';
resultDisplay.style.left = '0';
resultDisplay.style.right = '0';
resultDisplay.style.textAlign = 'center';

// Assemble les éléments de la cellule de recherche
searchCell.appendChild(input);
searchCell.appendChild(searchButton);
searchCell.appendChild(resultDisplay);
document.body.appendChild(searchCell);

// Fonction de recherche
function performSearch() {
  const searchValue = input.value.trim(); // Récupère la valeur entrée
  resultDisplay.textContent = ''; // Réinitialise l'affichage du résultat

  if (!searchValue) {
    resultDisplay.textContent = 'Entrez une valeur.';
    return;
  }

  const tables = document.querySelectorAll('table'); // Sélectionne tous les tableaux existants
  let found = false;

  tables.forEach(table => {
    const rows = table.querySelectorAll('tr'); // Sélectionne toutes les lignes

    rows.forEach(row => {
      const cells = row.querySelectorAll('td'); // Récupère les cellules de la ligne

      // Recherche stricte dans la colonne 2 (N°)
      if (cells.length >= 2) {
        const cell = cells[1];
        const cellValue = cell.textContent.trim();

        if (!isNaN(searchValue) && cellValue === searchValue) { // Vérifie que la recherche est numérique et correspond strictement
          found = true;
          highlightCell(cell, `Valeur trouvée : ${cellValue}`);
        } else {
          resetCellStyle(cell);
        }
      }

      // Recherche stricte ou partielle dans la colonne 5 (Date)
      if (cells.length >= 5) {
        const dateCell = cells[4];
        const dateValue = dateCell.textContent.trim();

        if (
          dateValue === searchValue || // Recherche exacte pour une date unique ou composée
          (dateValue.includes('-') && dateValue.split('-').includes(searchValue)) // Recherche partielle pour une date composée
        ) {
          found = true;
          highlightCell(dateCell, `Valeur trouvée : ${dateValue}`);
        } else {
          resetCellStyle(dateCell);
        }
      }
    });
  });

  if (!found) {
    resultDisplay.textContent = `"${searchValue}" non trouvé.`;
    resultDisplay.style.color = 'Black';
    resultDisplay.style.fontWeight = 'bold';
    resultDisplay.style.fontSize = '26px'; // Augmente la taille de la police
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

























// Fichier : horloge.js
// Crée un conteneur pour la boîte
const boite = document.createElement('div');

// Applique les styles pour la boîte
boite.style.position = 'fixed';  // Toujours visible
boite.style.top = '50px';       // Distance du haut
boite.style.right = '400px';      // Distance de la droite
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
      image.style.marginLeft = "10px";   // Ajouter une marge de 30px à gauche de l'image
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














//Nouveaute du moi
(function (global, document) {
  const ensureDOMReady = (callback) => {
      if (document.readyState === "complete" || document.readyState === "interactive") {
          callback();
      } else {
          document.addEventListener("DOMContentLoaded", callback);
      }
  };

  const createPhotoBox = function (config) {
      try {
          let container = document.getElementById("photo-box-container");
          if (!container) {
              container = document.createElement("div");
              container.id = "photo-box-container";
              container.style.position = "fixed";
              container.style.top = "50px";
              container.style.left = "10px";
              container.style.zIndex = "1000";
              container.style.width = "350px";
              container.style.height = "200px";
              container.style.border = "1px solid black";
              container.style.boxSizing = "border-box";
              container.style.overflow = "hidden";
              container.style.resize = "both";
              container.style.backgroundColor = "#EBD6CE";
              document.body.appendChild(container);
          }

          let box = container.querySelector(".photo-box");
          if (!box) {
              box = document.createElement("div");
              box.className = "photo-box";
              box.style.width = "100%";
              box.style.height = "100%";
              box.style.position = "relative";
              box.style.boxSizing = "border-box";
              container.appendChild(box);

              const closeButton = document.createElement("span");
              closeButton.innerText = "x";
              closeButton.style.position = "absolute";
              closeButton.style.top = "5px";
              closeButton.style.right = "5px";
              closeButton.style.cursor = "pointer";
              closeButton.style.fontSize = "16px";
              closeButton.addEventListener("click", () => {
                  container.remove();
              });
              box.appendChild(closeButton);

              let link = document.createElement("a");
              link.style.display = "block";
              link.style.width = "100%";
              link.style.height = "100%";
              box.appendChild(link);

              let image = document.createElement("img");
              image.src = config.src || "https://via.placeholder.com/200";
              image.alt = config.alt || "Image";
              image.title = config.title || "Image";
              image.style.width = "100%";
              image.style.height = "100%";
              image.style.objectFit = "cover";
              image.style.transform = "translateY(10px)";
              image.addEventListener("click", (e) => {
                  e.preventDefault();
                  const newWindow = window.open("", "_blank", "resizable=yes");
                  newWindow.document.write(`
                      <html>
                          <head>
                              <title>${config.title || "Gallery"}</title>
                              <style>
                                  body {
                                      margin: 100px;
                                      font-family: Arial, sans-serif;
                                      background-color: rgb(115, 118, 117);
                                  }
                                  .content {
                                      display: flex;
                                      flex-direction: column;
                                      align-items: center;
                                      padding: 20px;
                                  }
                                  h1 {
                                      margin-bottom: 20px;
                                      color: white;
                                      font-size: 24px;
                                  }
                                  .gallery-item {
                                      margin-bottom: 20px;
                                      text-align: center;
                                  }
                                  .gallery-item img {
                                      max-width: 90%;
                                      height: auto;
                                      margin-bottom: 10px;
                                  }
                                  .gallery-item p {
                                      margin: 0;
                                      font-size: 14px;
                                      color: #333;
                                  }
                              </style>
                          </head>
                          <body>
                              <div class="content">
                                  <h1>${config.title || "Gallery"}</h1>
                                  <div class="gallery-item">
                                      <img src="${config.src}" alt="${config.alt}" />
                                      <p>${config.longDescription || "Description longue de l'image principale."}</p>
                                  </div>
                                  ${config.extraImages
                                      .map(
                                          (img) => `
                                              <div class="gallery-item">
                                                  <img src="${img.src}" alt="${img.alt}" />
                                                  <p>${img.description || "Description non disponible."}</p>
                                              </div>
                                          `
                                      )
                                      .join("")}
                              </div>
                              <script>
                                  window.onload = () => {
                                      const content = document.querySelector('.content');
                                      const contentRect = content.getBoundingClientRect();
                                      const newWidth = Math.min(contentRect.width + 50, screen.width);
                                      const newHeight = Math.min(contentRect.height + 50, screen.height);

                                      // Redimensionne la fenêtre pour s'adapter au contenu
                                      window.resizeTo(newWidth, newHeight);

                                      // Centre la fenêtre
                                      const left = (screen.width - newWidth) / 2;
                                      const top = (screen.height - newHeight) / 2;
                                      window.moveTo(left, top);
                                  };
                              </script>
                          </body>
                      </html>
                  `);
              });

              link.appendChild(image);

              let description = document.createElement("p");
              description.innerText = config.description || "Description courte.";
              description.style.position = "absolute";
              description.style.bottom = "0";
              description.style.left = "0";
              description.style.width = "100%";
              description.style.margin = "0";
              description.style.padding = "5px";
              description.style.backgroundColor = "rgba(254, 251, 251, 0.8)";
              description.style.fontSize = "12px";
              description.style.textAlign = "center";
              description.style.boxSizing = "border-box";
              box.appendChild(description);
          }
      } catch (error) {
          console.error("Erreur lors de la création de la PhotoBox :", error);
      }
  };

  ensureDOMReady(() => {
      try {
          const customConfig = {
              title: "Academie De Philatelie",
              src: "../../../laPosteDeLancienneFrance/Villes N/Nerac/Images/3a.png",
              alt: "Academie De Philatelie",
              description: "Déboursé de Nérac.",
              longDescription: "Déboursé de Nérac réemploi marque Lenain lot et Garonne 1800 pour Toulouse. Lettre rare.",
              extraImages: [
                  {
                      src: "https://via.placeholder.com/300",
                      alt: "Extra Image 1",
                      description: "Description de l'image supplémentaire 1.",
                  },
                  {
                      src: "https://via.placeholder.com/350",
                      alt: "Extra Image 2",
                      description: "Description de l'image supplémentaire 2.",
                  },
              ],
          };

          createPhotoBox(customConfig);
      } catch (error) {
          console.error("Erreur lors de l'exécution du script PhotoBox :", error);
      }
  });

  global.createPhotoBox = createPhotoBox;
})(window, document);










