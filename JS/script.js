document.addEventListener('DOMContentLoaded', function() {
  // Gérer les événements de recherche, par exemple, lorsqu'une touche est enfoncée dans un champ de recherche
  // Vous devrez remplacer cet événement par celui que vous utilisez pour déclencher la recherche.
  document.getElementById('champRecherche').addEventListener('input', function() {
      var termeRecherche = this.value.toLowerCase();
      
      // Remettre le texte à sa couleur d'origine
      resetCouleurTexte();

      // Mettre en noir le nouveau terme
      mettreEnNoirTermeRecherche(termeRecherche);

      // Faire défiler la page pour amener le terme trouvé au milieu de la vue
      faireDefilerVersTerme(termeRecherche);
  });
});

function mettreEnNoirTermeRecherche(termeRecherche) {
  var liens = document.querySelectorAll('table a');

  liens.forEach(function(lien) {
      var nomVille = lien.textContent.toLowerCase();
      if (nomVille.includes(termeRecherche)) {
          var position = nomVille.indexOf(termeRecherche);
          var debut = lien.innerHTML.substring(0, position);
          var terme = lien.innerHTML.substring(position, position + termeRecherche.length);
          var fin = lien.innerHTML.substring(position + termeRecherche.length);

          lien.innerHTML = debut + '<span class="found">' + terme + '</span>' + fin;
      }
  });
}

function resetCouleurTexte() {
  var spans = document.querySelectorAll('.found');

  spans.forEach(function(span) {
      span.outerHTML = span.textContent;
  });
}

function faireDefilerVersTerme(termeRecherche) {
  var elementTrouve = document.querySelector('.found');

  if (elementTrouve) {
      var hauteurFenetre = window.innerHeight;
      var positionVerticale = elementTrouve.getBoundingClientRect().top;

      window.scrollTo({
          top: window.scrollY + positionVerticale - hauteurFenetre / 2,
          behavior: 'smooth'
      });
  }
}

  // Fonction pour mettre à jour le lien de la ville
  function updateVilleLink() {
    var villeInput = document.getElementById('villeInput').value.toLowerCase();
    var dropdownItems = document.querySelectorAll('#dropdownContent a');
    var villeLink = document.getElementById('villeLink');

    // Parcourir tous les éléments du menu déroulant
    for (var i = 0; i < dropdownItems.length; i++) {
        var dropdownItem = dropdownItems[i];
        var dropdownText = dropdownItem.textContent.toLowerCase();

        // Afficher ou masquer les éléments en fonction de la correspondance de la saisie
        dropdownItem.style.display = dropdownText.includes(villeInput) ? '' : 'none';

        // Mettre à jour le lien si la saisie correspond à un élément du menu déroulant
        if (dropdownText === villeInput) {
            villeLink.textContent = dropdownItem.textContent;
            villeLink.href = dropdownItem.href;
        }
    }
}

// Ajouter un écouteur d'événements pour la saisie de la ville
document.getElementById('villeInput').addEventListener('input', updateVilleLink);

//Boutton haut de page
// scrolltotop.js

// Execute a function when the window is being scrolled
window.onscroll = function () { scrollFunction() };

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  // Get the button
    var mybutton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}










 
  
  






// Crée dynamiquement une cellule de recherche
const searchCell = document.createElement('div'); // Crée un élément <div> pour la cellule de recherche.
searchCell.style.position = 'fixed'; // Positionne l'élément de manière fixe sur la page, indépendamment du défilement.
searchCell.style.top = '225px'; // Position verticale à 225 pixels du haut de la fenêtre.
searchCell.style.right = '20px'; // Position horizontale à 20 pixels du bord droit de la fenêtre.
searchCell.style.padding = '5px 10px'; // Ajoute un espacement interne (padding) de 5px en haut/bas et 10px à gauche/droite.
searchCell.style.backgroundColor = '#2C3E50'; // Définit une couleur de fond sombre (#2C3E50).
searchCell.style.color = 'white'; // Définit la couleur du texte en blanc.
searchCell.style.borderRadius = '10px'; // Arrondit les coins du <div> avec un rayon de 10 pixels.
searchCell.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Ajoute une ombre subtile pour un effet visuel de profondeur.
searchCell.style.fontFamily = 'Arial, sans-serif'; // Utilise la police Arial avec une alternative sans-serif.
searchCell.style.fontSize = '12px'; // Définit la taille de la police à 12 pixels.
searchCell.style.zIndex = '1000'; // Place l'élément au-dessus des autres en augmentant sa priorité sur l'axe Z.
searchCell.style.display = 'flex'; // Définit le conteneur comme un flexbox pour gérer facilement l'agencement des enfants.
searchCell.style.alignItems = 'center'; // Aligne les éléments enfants verticalement au centre.
searchCell.style.gap = '5px'; // Ajoute un espacement de 5 pixels entre les enfants dans le flexbox.


// Créer une boîte de saisie
const input = document.createElement('textarea'); // Crée un élément HTML de type <textarea>.
input.placeholder = 'Tapez le N° ou la date recherché'; // Définit un texte indicatif à l'intérieur de la boîte de saisie.
input.style.padding = '5px'; // Ajoute un espace intérieur (padding) de 5 pixels autour du contenu.
input.style.borderRadius = '5px'; // Donne des coins arrondis avec un rayon de 5 pixels.
input.style.border = '1px solid #ccc'; // Ajoute une bordure grise (#ccc) d'une largeur de 1 pixel et de style plein.
input.style.fontSize = '15px'; // Définit la taille de la police de texte à 15 pixels.
input.style.width = '100px'; // Définit une largeur de 100 pixels pour la boîte de saisie.
input.style.height = '50px'; // Définit une hauteur de 50 pixels pour la boîte de saisie.
input.style.textAlign = 'center'; // Centre le texte saisi dans la boîte.
input.style.display = 'block'; // Définit l'élément comme un bloc, permettant un positionnement distinct.
input.style.margin = '0 auto'; // Centre horizontalement l'élément dans son conteneur.

// Ajouter l'élément au document
document.body.appendChild(input); // Ajoute la boîte de saisie à la fin du corps du document HTML.


// Crée un bouton pour effectuer la recherche
const searchButton = document.createElement('button'); // Crée un élément de bouton
searchButton.textContent = '🔍'; // Définit le texte (ou icône) du bouton
searchButton.style.padding = '5px'; // Applique un remplissage interne au bouton
searchButton.style.borderRadius = '5px'; // Rend les coins du bouton arrondis
searchButton.style.border = 'none'; // Supprime la bordure du bouton
searchButton.style.backgroundColor = '#1ABC9C'; // Définit la couleur d'arrière-plan du bouton
searchButton.style.color = 'white'; // Définit la couleur du texte du bouton
searchButton.style.cursor = 'pointer'; // Change le curseur en une main au survol
searchButton.style.fontSize = '14px'; // Définit la taille de la police du texte du bouton

// Variables pour gérer les résultats trouvés
let searchResults = []; // Tableau pour stocker les résultats de recherche
let currentIndex = -1; // Index pour suivre le résultat actuellement sélectionné

// Ajouter des boutons "Précédent" et "Suivant"
const prevButton = document.createElement('button'); // Crée le bouton "Précédent"
prevButton.textContent = '⬅️'; // Ajoute un texte/emoji au bouton
prevButton.style.padding = '5px'; // Définit le padding du bouton
prevButton.style.borderRadius = '5px'; // Ajoute un bord arrondi
prevButton.style.border = 'none'; // Supprime les bordures par défaut
prevButton.style.backgroundColor = '#1ABC9C'; // Définit la couleur de fond
prevButton.style.color = 'white'; // Définit la couleur du texte
prevButton.style.cursor = 'pointer'; // Change le curseur en pointeur (main) au survol
prevButton.style.fontSize = '14px'; // Définit la taille de la police
prevButton.disabled = true; // Désactive le bouton par défaut

const nextButton = document.createElement('button'); // Crée le bouton "Suivant"
nextButton.textContent = '➡️'; // Ajoute un texte/emoji au bouton
nextButton.style.padding = '5px'; // Définit le padding du bouton
nextButton.style.borderRadius = '5px'; // Ajoute un bord arrondi
nextButton.style.border = 'none'; // Supprime les bordures par défaut
nextButton.style.backgroundColor = '#1ABC9C'; // Définit la couleur de fond
nextButton.style.color = 'white'; // Définit la couleur du texte
nextButton.style.cursor = 'pointer'; // Change le curseur en pointeur (main) au survol
nextButton.style.fontSize = '14px'; // Définit la taille de la police
nextButton.disabled = true; // Désactive le bouton par défaut

// Crée un élément pour afficher les résultats
const resultDisplay = document.createElement('div'); // Crée une div pour afficher les résultats
resultDisplay.style.marginTop = '5px'; // Ajoute une marge supérieure pour espacer visuellement
resultDisplay.style.fontSize = '15px'; // Définit la taille de la police pour le texte affiché
resultDisplay.style.color = '#32FA5C'; // Définit la couleur du texte en vert clair
resultDisplay.style.position = 'absolute'; // Positionne l'élément de manière absolue par rapport à son conteneur
resultDisplay.style.bottom = '-20px'; // Place l'élément 20px sous le bas de son conteneur
resultDisplay.style.left = '0'; // Aligne le côté gauche de l'élément avec le conteneur
resultDisplay.style.right = '0'; // Aligne le côté droit de l'élément avec le conteneur
resultDisplay.style.textAlign = 'center'; // Centre le texte horizontalement

// Assemble les éléments de la cellule de recherche
searchCell.appendChild(input); // Ajoute le champ de saisie (input) à la cellule de recherche
searchCell.appendChild(searchButton); // Ajoute le bouton de recherche à la cellule
searchCell.appendChild(prevButton); // Ajoute le bouton précédent à la cellule
searchCell.appendChild(nextButton); // Ajoute le bouton suivant à la cellule
searchCell.appendChild(resultDisplay); // Ajoute l'affichage des résultats à la cellule
document.body.appendChild(searchCell); // Ajoute la cellule de recherche complète au corps du document

// Fonction pour effectuer une recherche
function performSearch() {
  // Réinitialise les styles des résultats précédents
  searchResults.forEach(resetCellStyle); // Réinitialise le style des cellules mises en évidence par une recherche précédente
  searchResults = []; // Réinitialise les résultats
  currentIndex = -1; // Réinitialise l'index du résultat actuel

  const searchValue = input.value.trim(); // Récupère et nettoie la valeur entrée par l'utilisateur
  resultDisplay.textContent = ''; // Efface tout message affiché précédemment

  if (!searchValue) { // Si aucune valeur n'est entrée
    resultDisplay.textContent = 'Entrez une valeur.'; // Affiche un message d'erreur
    return;
  }

  const tables = document.querySelectorAll('table'); // Sélectionne toutes les tables du document
  let count = 0; // Initialise un compteur pour les résultats trouvés

  tables.forEach(table => { // Parcourt chaque table
    const rows = table.querySelectorAll('tr'); // Sélectionne toutes les lignes de la table

    rows.forEach(row => { // Parcourt chaque ligne
      const cells = row.querySelectorAll('td'); // Sélectionne toutes les cellules de la ligne

      if (cells.length >= 2) { // Vérifie si la ligne a au moins 2 cellules
        const cell = cells[1]; // Sélectionne la deuxième cellule
        const cellValue = cell.textContent.trim(); // Extrait et nettoie le contenu textuel de la cellule

        if (!isNaN(searchValue) && cellValue === searchValue) { // Si la valeur cherchée est un nombre et correspond à la cellule
          searchResults.push(cell); // Ajoute la cellule aux résultats
          count++; // Incrémente le compteur
        }
      }

      if (cells.length >= 5) { // Vérifie si la ligne a au moins 5 cellules
        const dateCell = cells[4]; // Sélectionne la cinquième cellule
        const dateValue = dateCell.textContent.trim(); // Extrait et nettoie le contenu textuel de la cellule
        const years = extractYears(dateValue); // Extrait les années du texte (supposant une fonction `extractYears`)

        if (years.includes(searchValue)) { // Si l'année cherchée est incluse dans les années extraites
          searchResults.push(dateCell); // Ajoute la cellule aux résultats
          count++; // Incrémente le compteur
        }
      }
    });
  });

  if (searchResults.length === 0) { // Si aucun résultat n'est trouvé
    resultDisplay.textContent = `"${searchValue}" non trouvé.`; // Affiche un message indiquant que rien n'a été trouvé
    resultDisplay.style.color = 'Black'; // Applique des styles au message
    resultDisplay.style.fontWeight = 'bold';
    resultDisplay.style.fontSize = '16px';
    nextButton.disabled = true; // Désactive le bouton "suivant"
    prevButton.disabled = true; // Désactive le bouton "précédent"
  } else { // Si des résultats sont trouvés
    resultDisplay.textContent = `${searchResults.length} résultat(s) trouvé(s).`; // Affiche le nombre de résultats trouvés
    resultDisplay.style.color = '#0530FF'; // Applique des styles au message
    resultDisplay.style.fontWeight = 'bold';
    nextButton.disabled = false; // Active le bouton "suivant"
    prevButton.disabled = false; // Active le bouton "précédent"
    currentIndex = 0; // Réinitialise l'index du résultat actuel
    navigateToResult(currentIndex); // Met en évidence le premier résultat
  }
}

// Fonction pour naviguer vers un résultat spécifique
function navigateToResult(index) {
  searchResults.forEach(resetCellStyle); // Réinitialise les styles des résultats de recherche
  const cell = searchResults[index]; // Sélectionne la cellule correspondant à l'index
  highlightCell(cell, `Résultat ${index + 1} sur ${searchResults.length}`); // Met en surbrillance le résultat avec un tooltip
  cell.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Fait défiler la page pour centrer le résultat
  updateNavigationButtons(); // Met à jour l'état des boutons de navigation
}

// Met à jour les boutons de navigation
function updateNavigationButtons() {
  prevButton.disabled = currentIndex <= 0; // Désactive le bouton "précédent" si on est au premier résultat
  nextButton.disabled = currentIndex >= searchResults.length - 1; // Désactive le bouton "suivant" si on est au dernier résultat
}

// Gère les clics sur les boutons
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) { // Vérifie qu'il y a un résultat précédent
    currentIndex--; // Décrémente l'index du résultat actuel
    navigateToResult(currentIndex); // Navigue vers le résultat précédent
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < searchResults.length - 1) { // Vérifie qu'il y a un résultat suivant
    currentIndex++; // Incrémente l'index du résultat actuel
    navigateToResult(currentIndex); // Navigue vers le résultat suivant
  }
});

// Fonction pour mettre en surbrillance une cellule
function highlightCell(cell, tooltip) {
  cell.style.backgroundColor = '#32FA5C'; // Change la couleur d'arrière-plan
  cell.style.color = '#000'; // Change la couleur du texte
  cell.style.fontWeight = 'bold'; // Met le texte en gras
  cell.setAttribute('title', tooltip); // Ajoute un tooltip pour donner des informations supplémentaires
}

// Fonction pour réinitialiser le style d'une cellule
function resetCellStyle(cell) {
  cell.style.backgroundColor = ''; // Réinitialise la couleur d'arrière-plan
  cell.style.color = ''; // Réinitialise la couleur du texte
  cell.style.fontWeight = ''; // Réinitialise la mise en forme du texte
  cell.removeAttribute('title'); // Supprime le tooltip
}

// Fonction pour extraire les années d'une chaîne
function extractYears(text) {
  const regex = /\b\d{4}\b/g; // Expression régulière pour détecter les années (quatre chiffres)
  const matches = text.match(regex); // Trouve toutes les correspondances
  return matches ? matches : []; // Renvoie les années trouvées ou un tableau vide
}

// Ajouter un événement au bouton de recherche
searchButton.addEventListener('click', performSearch); // Déclenche la recherche lors d'un clic sur le bouton

// Ajouter un événement pour la touche Entrée
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') { // Vérifie si la touche pressée est "Entrée"
    performSearch(); // Déclenche la recherche
  }
});



















// Fichier : horloge.js
// Crée un conteneur pour la boîte
const boite = document.createElement('div');

// Applique les styles pour la boîte
boite.style.position = 'fixed';  // Toujours visible
boite.style.top = '170px';       // Distance du haut
boite.style.right = '110px';      // Distance de la droite
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

















//calculatrice
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

































// Désactiver le clic droit
document.addEventListener('contextmenu', function (e) {
  e.preventDefault(); // Empêche l'ouverture du menu contextuel (clic droit) sur la page.
});

// Désactiver la sélection de texte
document.addEventListener('selectstart', function (e) {
  e.preventDefault(); // Bloque la capacité de sélectionner du texte sur la page.
});

// Désactiver le glisser-déposer
document.addEventListener('dragstart', function (e) {
  e.preventDefault(); // Empêche les utilisateurs de glisser des éléments (ex : images, textes) hors de la page.
});

// Bloquer certains raccourcis clavier
document.addEventListener('keydown', function (e) {
  // Si Ctrl+U (afficher le code source), Ctrl+C (copier), Ctrl+S (enregistrer), ou F12 (outils développeur) est pressé
  if ((e.ctrlKey && (e.key === 'u' || e.key === 'c' || e.key === 's')) || 
      (e.key === 'F12')) { 
      e.preventDefault(); // Annule l'action par défaut de ces raccourcis.
      alert('Cette action est désactivée sur ce site.'); // Affiche une alerte pour informer l'utilisateur.
  }
});

// Désactiver l'événement de copie (Ctrl+C ou clic droit > Copier)
document.addEventListener('copy', function (e) {
  e.preventDefault(); // Empêche le contenu de la page d'être copié.
  alert('Copier du contenu est désactivé sur ce site.'); // Alerte l'utilisateur que l'action est bloquée.
});

// Désactiver l'événement de collage (Ctrl+V ou clic droit > Coller)
document.addEventListener('paste', function (e) {
  e.preventDefault(); // Empêche les utilisateurs de coller du contenu sur la page.
  alert('Coller du contenu est désactivé sur ce site.'); // Alerte l'utilisateur que l'action est bloquée.
});

// Désactiver le double-clic (optionnel)
document.addEventListener('dblclick', function (e) {
  e.preventDefault(); // Bloque le double-clic pour empêcher la sélection rapide de texte.
});




















// Fonction pour configurer le modal pour toutes les images
function setupImageModal() {
  // Créer le modal une fois et l'ajouter au DOM
  const modal = document.createElement("div");
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.zIndex = "1000";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";

  // Contenu du modal avec fond blanc qui s'adapte à l'image
  const modalContent = document.createElement("div");
  modalContent.style.position = "relative";
  modalContent.style.backgroundColor = "white"; // Fond blanc
  modalContent.style.display = "inline-block"; // S'adapte à la taille du contenu
  modalContent.style.padding = "200px";
  modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

  // Image à afficher
  const img = document.createElement("img");
  img.style.transform = "scale(2)"; // Double la taille de l'image
  img.style.width = "auto"; // S'assurer que la largeur est proportionnelle
  img.style.height = "auto"; // S'assurer que la hauteur est proportionnelle

// Filigrane "Postillon" horizontal au centre de la modale
const watermark = document.createElement("div");
watermark.textContent = "POSTILLON";
watermark.style.position = "absolute";
watermark.style.top = "50%"; // Centré verticalement dans la modale
watermark.style.left = "50%"; // Centré horizontalement dans la modale
watermark.style.transform = "translate(-50%, -50%)"; // Centrer parfaitement
watermark.style.fontSize = "50px";
watermark.style.color = "rgba(255, 0, 0, 0.2)"; // Rouge clair et semi-transparent
watermark.style.fontWeight = "bold";
watermark.style.whiteSpace = "nowrap";
watermark.style.letterSpacing = "0px"; // Espacement entre les lettres
watermark.style.pointerEvents = "none"; // Empêche toute interaction avec le filigrane

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "20px";
  closeButton.style.color = "black";
  closeButton.style.fontSize = "30px";
  closeButton.style.fontWeight = "bold";
  closeButton.style.cursor = "pointer";

  // Ajouter les éléments au modal
  modalContent.appendChild(img);
  modalContent.appendChild(watermark);
  modal.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Ajouter des événements pour le modal
  closeButton.onclick = function () {
      modal.style.display = "none";
  };

  modal.onclick = function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };

  // Fonction pour appliquer le modal aux images
  function applyModalToImages() {
      const images = document.querySelectorAll("img"); // Sélectionner toutes les images
      images.forEach(image => {
          image.style.cursor = "pointer"; // Rendre l'image cliquable

          // Bloquer le clic droit sur l'image
          image.oncontextmenu = function (event) {
              event.preventDefault(); // Empêche le menu contextuel
              return false;
          };

          // Empêcher l'ouverture de l'image dans un nouvel onglet
          image.onclick = function (event) {
              event.preventDefault(); // Empêche l'action par défaut
              img.src = image.src; // Mettre à jour la source de l'image dans le modal
              modal.style.display = "flex"; // Afficher le modal
          };
      });
  }

  // Exécuter la fonction pour les images existantes
  applyModalToImages();

  // Observer les nouvelles images ajoutées dynamiquement
  const observer = new MutationObserver(() => applyModalToImages());
  observer.observe(document.body, { childList: true, subtree: true });
}

// Lancer la configuration lorsque la page est chargée
window.addEventListener("DOMContentLoaded", setupImageModal);
