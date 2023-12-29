document.addEventListener('DOMContentLoaded', function () {
  const champRecherche = document.querySelector('.searchTerm');
  const lignesTableau = document.querySelectorAll('table tr');

  champRecherche.addEventListener('input', function () {
    const termeRecherche = this.value.trim().toLowerCase();

    // Réinitialise les mises en surbrillance précédentes
    lignesTableau.forEach(function (ligne) {
      ligne.querySelectorAll('td').forEach(function (cellule) {
        cellule.innerHTML = cellule.textContent; // Réinitialise le contenu à son état d'origine
      });
    });

    // Met en surbrillance uniquement le mot recherché
    lignesTableau.forEach(function (ligne) {
      ligne.querySelectorAll('td').forEach(function (cellule) {
        const texteCellule = cellule.textContent.toLowerCase();
        if (texteCellule.includes(termeRecherche) && termeRecherche !== '') {
          const texteEnSurbrillance = texteCellule.replace(
            new RegExp(termeRecherche, 'gi'),
            (correspondance) => `<mark style="background-color: lime; padding: 2px;">${correspondance}</mark>`
          );
          cellule.innerHTML = texteEnSurbrillance;
        }
      });
    });
  });
});
