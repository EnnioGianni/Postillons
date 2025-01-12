(function() {
  let timeout;
  let searchResults = [];
  let currentIndex = -1;

  // Fonction pour initialiser la cellule de recherche
  function createSearchCell() {
      const searchCell = document.createElement('div');
      searchCell.id = 'custom-search-cell';
      searchCell.style.position = 'fixed';
      searchCell.style.top = '65%';
      searchCell.style.left = '50%';
      searchCell.style.transform = 'translate(-50%, -50%)';
      searchCell.style.padding = '10px 20px';
      searchCell.style.backgroundColor = '#2C3E50';
      searchCell.style.color = 'white';
      searchCell.style.borderRadius = '10px';
      searchCell.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      searchCell.style.fontFamily = 'Arial, sans-serif';
      searchCell.style.fontSize = '12px';
      searchCell.style.zIndex = '1000';
      searchCell.style.display = 'flex';
      searchCell.style.alignItems = 'center';
      searchCell.style.gap = '10px';

      const input = document.createElement('textarea');
      input.id = 'custom-search-input';
      input.placeholder = 'Tapez le N° ou la date recherché';
      input.style.padding = '10px';
      input.style.borderRadius = '5px';
      input.style.border = '1px solid #ccc';
      input.style.fontSize = '12px';
      input.style.width = '100px';
      input.style.height = '45px';
      input.style.textAlign = 'center';
      input.style.display = 'block';
      
      const searchButton = document.createElement('button');
      searchButton.id = 'custom-search-button';
      searchButton.textContent = '🔍';
      searchButton.style.padding = '10px';
      searchButton.style.borderRadius = '5px';
      searchButton.style.border = 'none';
      searchButton.style.backgroundColor = '#1ABC9C';
      searchButton.style.color = 'white';
      searchButton.style.cursor = 'pointer';
      searchButton.style.fontSize = '14px';

      const prevButton = document.createElement('button');
      prevButton.id = 'custom-prev-button';
      prevButton.textContent = '⬅️';
      prevButton.style.padding = '10px';
      prevButton.style.borderRadius = '5px';
      prevButton.style.border = 'none';
      prevButton.style.backgroundColor = '#1ABC9C';
      prevButton.style.color = 'white';
      prevButton.style.cursor = 'pointer';
      prevButton.style.fontSize = '14px';
      prevButton.disabled = true;

      const nextButton = document.createElement('button');
      nextButton.id = 'custom-next-button';
      nextButton.textContent = '➡️';
      nextButton.style.padding = '10px';
      nextButton.style.borderRadius = '5px';
      nextButton.style.border = 'none';
      nextButton.style.backgroundColor = '#1ABC9C';
      nextButton.style.color = 'white';
      nextButton.style.cursor = 'pointer';
      nextButton.style.fontSize = '14px';
      nextButton.disabled = true;

      const resultDisplay = document.createElement('div');
      resultDisplay.id = 'custom-result-display';
      resultDisplay.style.marginTop = '5px';
      resultDisplay.style.fontSize = '20px';
      resultDisplay.style.color = '#F43712';
      resultDisplay.style.position = 'absolute';
      resultDisplay.style.bottom = '-20px';
      resultDisplay.style.left = '0';
      resultDisplay.style.right = '0';
      resultDisplay.style.textAlign = 'center';

      searchCell.appendChild(input);
      searchCell.appendChild(searchButton);
      searchCell.appendChild(prevButton);
      searchCell.appendChild(nextButton);
      searchCell.appendChild(resultDisplay);

      document.body.appendChild(searchCell);

      // Ajouter des événements
      searchButton.addEventListener('click', () => performSearch(input, resultDisplay, prevButton, nextButton));
      prevButton.addEventListener('click', () => navigateToResult(-1, resultDisplay, prevButton, nextButton));
      nextButton.addEventListener('click', () => navigateToResult(1, resultDisplay, prevButton, nextButton));
      input.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
              event.preventDefault();
              performSearch(input, resultDisplay, prevButton, nextButton);
          }
      });
  }

  // Fonction de recherche principale
  function performSearch(input, resultDisplay, prevButton, nextButton) {
      const searchValue = input.value.trim().toLowerCase();
      resultDisplay.textContent = '';
      
      searchResults.forEach(resetCellStyle);
      searchResults = [];
      currentIndex = -1;

      if (!searchValue) {
          resultDisplay.textContent = 'Entrez une valeur.';
          return;
      }

      const rows = document.querySelectorAll('.exemple tbody tr');

      rows.forEach(row => {
          const cells = row.querySelectorAll('td');

          if (cells.length >= 2 && cells[1].textContent.trim().toLowerCase() === searchValue) {
              searchResults.push(cells[1]);
          }

          if (cells.length >= 5 && extractYears(cells[4].textContent.trim().toLowerCase()).includes(searchValue)) {
              searchResults.push(cells[4]);
          }
      });

      if (searchResults.length > 0) {
          resultDisplay.textContent = `${searchResults.length} résultat(s) trouvé(s).`;
          currentIndex = 0;
          navigateToResult(0, resultDisplay, prevButton, nextButton);
      } else {
          resultDisplay.textContent = 'Aucun résultat trouvé.';
      }
  }

  // Navigation dans les résultats
  function navigateToResult(step, resultDisplay, prevButton, nextButton) {
      if (searchResults.length === 0) return;

      currentIndex = Math.min(Math.max(currentIndex + step, 0), searchResults.length - 1);

      searchResults.forEach(resetCellStyle);
      highlightCell(searchResults[currentIndex]);
      searchResults[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });

      prevButton.disabled = currentIndex <= 0;
      nextButton.disabled = currentIndex >= searchResults.length - 1;
      resultDisplay.textContent = `Résultat ${currentIndex + 1} sur ${searchResults.length}`;
  }

  // Style des cellules
  function highlightCell(cell) {
      cell.style.backgroundColor = '#32FA5C';
      cell.style.color = '#000';
      cell.style.fontWeight = 'bold';
  }

  function resetCellStyle(cell) {
      cell.style.backgroundColor = '';
      cell.style.color = '';
      cell.style.fontWeight = '';
  }

  // Extraire les années
  function extractYears(text) {
      const regex = /\b\d{4}\b|\b\d{4}-\d{4}\b/g;
      const matches = text.match(regex);
      return matches ? matches.flatMap(match => match.split('-')) : [];
  }

  // Initialisation
  document.addEventListener('DOMContentLoaded', createSearchCell);
})();
