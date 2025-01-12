// Crée dynamiquement une cellule de recherche
const searchCell = document.createElement('div');
searchCell.style.position = 'fixed';
searchCell.style.top = '1210px';
searchCell.style.right = '670px';
searchCell.style.padding = '5px 10px';
searchCell.style.backgroundColor = '#2C3E50';
searchCell.style.color = 'white';
searchCell.style.borderRadius = '10px';
searchCell.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
searchCell.style.fontFamily = 'Arial, sans-serif';
searchCell.style.fontSize = '12px';
searchCell.style.zIndex = '1000';
searchCell.style.display = 'flex';
searchCell.style.alignItems = 'center';
searchCell.style.gap = '5px';

// Crée une boîte de saisie
const input = document.createElement('textarea');
input.placeholder = 'Tapez le N° ou la date recherché';
input.style.padding = '5px';
input.style.borderRadius = '5px';
input.style.border = '1px solid #ccc';
input.style.fontSize = '10px';
input.style.width = '100px';
input.style.height = '40px';
input.style.textAlign = 'center';
input.style.display = 'block';
input.style.margin = '0 auto';

// Ajouter l'élément au document
document.body.appendChild(input);

// Crée un bouton pour effectuer la recherche
const searchButton = document.createElement('button');
searchButton.textContent = '🔍';
searchButton.style.padding = '5px';
searchButton.style.borderRadius = '5px';
searchButton.style.border = 'none';
searchButton.style.backgroundColor = '#1ABC9C';
searchButton.style.color = 'white';
searchButton.style.cursor = 'pointer';
searchButton.style.fontSize = '14px';

// Variables pour gérer les résultats trouvés
let searchResults = [];
let currentIndex = -1;

// Ajouter des boutons "Précédent" et "Suivant"
const prevButton = document.createElement('button');
prevButton.textContent = '⬅️';
prevButton.style.padding = '5px';
prevButton.style.borderRadius = '5px';
prevButton.style.border = 'none';
prevButton.style.backgroundColor = '#1ABC9C';
prevButton.style.color = 'white';
prevButton.style.cursor = 'pointer';
prevButton.style.fontSize = '14px';
prevButton.disabled = true;

const nextButton = document.createElement('button');
nextButton.textContent = '➡️';
nextButton.style.padding = '5px';
nextButton.style.borderRadius = '5px';
nextButton.style.border = 'none';
nextButton.style.backgroundColor = '#1ABC9C';
nextButton.style.color = 'white';
nextButton.style.cursor = 'pointer';
nextButton.style.fontSize = '14px';
nextButton.disabled = true;

// Crée un élément pour afficher les résultats
const resultDisplay = document.createElement('div');
resultDisplay.style.marginTop = '5px';
resultDisplay.style.fontSize = '15px';
resultDisplay.style.color = '#32FA5C';
resultDisplay.style.position = 'absolute';
resultDisplay.style.bottom = '-20px';
resultDisplay.style.left = '0';
resultDisplay.style.right = '0';
resultDisplay.style.textAlign = 'center';

// Assemble les éléments de la cellule de recherche
searchCell.appendChild(input);
searchCell.appendChild(searchButton);
searchCell.appendChild(prevButton);
searchCell.appendChild(nextButton);
searchCell.appendChild(resultDisplay);
document.body.appendChild(searchCell);

// Fonction pour effectuer une recherche
function performSearch() {
  searchResults.forEach(resetCellStyle);
  searchResults = [];
  currentIndex = -1;

  const searchValue = input.value.trim().toLowerCase(); // Convertir la valeur de recherche en minuscule
  resultDisplay.textContent = '';

  if (!searchValue) {
    resultDisplay.textContent = 'Entrez une valeur.';
    return;
  }

  const tables = document.querySelectorAll('table');
  let count = 0;

  tables.forEach(table => {
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');

      // Rechercher dans la colonne 2 (index 1)
      if (cells.length >= 2) {
        const cell = cells[1];
        const cellValue = cell.textContent.trim().toLowerCase();

        if (cellValue === searchValue) { // Match exact
          searchResults.push(cell);
          count++;
        }
      }

      // Rechercher dans la colonne 5 (index 4)
      if (cells.length >= 5) {
        const dateCell = cells[4];
        const dateValue = dateCell.textContent.trim().toLowerCase();
        const years = extractYears(dateValue);

        if (years.includes(searchValue)) { // Match exact pour les années
          searchResults.push(dateCell);
          count++;
        }
      }
    });
  });

  if (searchResults.length === 0) {
    resultDisplay.textContent = `"${searchValue}" non trouvé.`;
    resultDisplay.style.color = 'Black';
    resultDisplay.style.fontWeight = 'bold';
    resultDisplay.style.fontSize = '16px';
    nextButton.disabled = true;
    prevButton.disabled = true;
  } else {
    resultDisplay.textContent = `${searchResults.length} résultat(s) trouvé(s).`;
    resultDisplay.style.color = '#0530FF';
    resultDisplay.style.fontWeight = 'bold';
    nextButton.disabled = false;
    prevButton.disabled = false;
    currentIndex = 0;
    navigateToResult(currentIndex);
  }
}

// Fonction pour naviguer vers un résultat spécifique
function navigateToResult(index) {
  searchResults.forEach(resetCellStyle);
  const cell = searchResults[index];
  highlightCell(cell, `Résultat ${index + 1} sur ${searchResults.length}`);
  cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
  updateNavigationButtons();
}

// Met à jour les boutons de navigation
function updateNavigationButtons() {
  prevButton.disabled = currentIndex <= 0;
  nextButton.disabled = currentIndex >= searchResults.length - 1;
}

// Gère les clics sur les boutons
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    navigateToResult(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < searchResults.length - 1) {
    currentIndex++;
    navigateToResult(currentIndex);
  }
});

// Fonction pour mettre en surbrillance une cellule
function highlightCell(cell, tooltip) {
  cell.style.backgroundColor = '#32FA5C';
  cell.style.color = '#000';
  cell.style.fontWeight = 'bold';
  cell.setAttribute('title', tooltip);
}

// Fonction pour réinitialiser le style d'une cellule
function resetCellStyle(cell) {
  cell.style.backgroundColor = '';
  cell.style.color = '';
  cell.style.fontWeight = '';
  cell.removeAttribute('title');
}

// Fonction pour extraire les années d'une chaîne
function extractYears(text) {
  const regex = /\b\d{4}\b|\b\d{4}-\d{4}\b/g;
  const matches = text.match(regex);
  return matches ? matches.flatMap(match => match.split('-').map(year => year.trim())) : [];
}

// Ajouter un événement au bouton de recherche
searchButton.addEventListener('click', performSearch);

// Ajouter un événement pour la touche Entrée
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Empêche le saut de ligne dans le textarea
    performSearch();
  }
});









// Ajouter des styles pour centrer la cellule au milieu de la page
const style = document.createElement('style');
style.textContent = `
  #custom-search-cell {
    position: fixed; /* La cellule reste fixe dans la fenêtre, même en scrollant */
    top: 50%; /* Position verticale au centre */
    left: 50%; /* Position horizontale au centre */
  transform: translate(-50%, -1010%); /* Centrer la cellule par rapport à son centre */
    padding: 10px 20px; /* Espacement interne de la cellule */
    background-color: #2C3E50; /* Couleur de fond de la cellule */
    color: white; /* Couleur du texte */
    border-radius: 10px; /* Coins arrondis */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre portée pour donner un effet 3D */
    font-family: Arial, sans-serif; /* Police de caractères */
    font-size: 12px; /* Taille du texte */
    z-index: 1000; /* Priorité d'affichage au-dessus des autres éléments */
    display: flex; /* Disposition en ligne des enfants */
    align-items: center; /* Centrer les enfants verticalement */
    gap: 10px; /* Espacement entre les éléments enfants */
  }





  
  #custom-search-input {
    padding: 10px; /* Espacement interne de l'input */
    border-radius: 5px; /* Coins arrondis de l'input */
    border: 1px solid #ccc; /* Bordure de l'input */
    font-size: 12px; /* Taille du texte */
    width: 120px; /* Largeur de l'input */
    height: 40px; /* Hauteur de l'input */
    text-align: center; /* Centrage du texte à l'intérieur */
    display: block; /* Affichage en bloc */
    margin: 0; /* Pas de marge par défaut */
  }

  #custom-search-button,
  #custom-prev-button,
  #custom-next-button {
    padding: 10px; /* Espacement interne des boutons */
    border-radius: 5px; /* Coins arrondis des boutons */
    border: none; /* Suppression des bordures par défaut */
    background-color: #1ABC9C; /* Couleur de fond des boutons */
    color: white; /* Couleur du texte des boutons */
    cursor: pointer; /* Curseur en forme de main au survol */
    font-size: 14px; /* Taille du texte des boutons */
  }

  #custom-result-display {
    margin-top: 5px; /* Marge au-dessus de l'affichage des résultats */
    font-size: 15px; /* Taille du texte des résultats */
    color: #32FA5C; /* Couleur du texte des résultats */
    position: absolute; /* Position absolue par rapport au conteneur parent */
    bottom: -60px; /* Décalage vers le bas, ajusté pour remonter de 30px */
    left: 0; /* Alignement à gauche */
    right: 0; /* Alignement à droite */
    text-align: center; /* Centrage horizontal du texte */
  }

  @media (max-width: 768px) {
    #custom-search-cell {
      width: 60%; /* Adapte la largeur de la cellule aux petits écrans */
      gap: 15px; /* Espacement accru entre les éléments */
    }

    #custom-search-input {
      width: 100%; /* Adapte la largeur de l'input à celle du conteneur */
      height: 40px; /* Hauteur de l'input adaptée */
      font-size: 14px; /* Taille du texte adaptée */
    }

    #custom-search-button,
    #custom-prev-button,
    #custom-next-button {
      font-size: 14px; /* Taille du texte adaptée */
    }

    #custom-result-display {
      font-size: 12px; /* Réduction de la taille du texte des résultats */
    }
  }
`;
document.head.appendChild(style); // Ajoute les styles à la balise <head> du document

// Applique un identifiant unique pour éviter les conflits
searchCell.id = 'custom-search-cell'; // Attribue un ID unique à la cellule de recherche
input.id = 'custom-search-input'; // Attribue un ID unique à l'input
searchButton.id = 'custom-search-button'; // Attribue un ID unique au bouton de recherche
prevButton.id = 'custom-prev-button'; // Attribue un ID unique au bouton précédent
nextButton.id = 'custom-next-button'; // Attribue un ID unique au bouton suivant
resultDisplay.id = 'custom-result-display'; // Attribue un ID unique à l'affichage des résultats





