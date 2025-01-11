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










 
  
  



















































// Fichier : horloge.js
// Crée un conteneur pour la boîte
const boite = document.createElement('div');

// Applique les styles pour la boîte
boite.style.position = 'fixed';  // Toujours visible
boite.style.top = '170px';       // Distance du haut
boite.style.right = '30px';      // Distance de la droite
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
