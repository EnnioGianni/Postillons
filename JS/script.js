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










 // Création du bouton de menu maison de vente
 const menuBtn = document.createElement('button');
 menuBtn.innerHTML = '&#9776;';
 menuBtn.className = 'menu-btn';
 menuBtn.title = 'maisons de vente'; // Ajouter le titre ici
 document.body.appendChild(menuBtn);

 // Création du conteneur de menu
 const menu = document.createElement('div');
 menu.id = 'menu';
 menu.className = 'menu';
 document.body.appendChild(menu);

 // Fonction pour ajouter des lignes au menu
 function ajouterLignesMenu() {
     const liens = [
         { text: 'Lien 1', url: 'https://www.roumet.com/index.php' },
         { text: 'Lien 2', url: '#' },
         { text: 'Lien 3', url: '#' },
         { text: 'Lien 4', url: '#' },
         { text: 'Lien 5', url: '#' },
         { text: 'Lien 6', url: '#' },
         { text: 'Lien 7', url: '#' },
         { text: 'Lien 8', url: '#' },
         { text: 'Lien 9', url: '#' },
         { text: 'Lien 10', url: '#' }
     ];

     liens.forEach(lien => {
         const a = document.createElement('a');
         a.href = lien.url;
         a.textContent = lien.text;
         menu.appendChild(a);
     });
 }

 // Ajout des lignes
 ajouterLignesMenu();

 // Fonction pour afficher/masquer le menu
 function toggleMenu() {
     if (menu.classList.contains('visible')) {
         menu.classList.remove('visible');
         menuBtn.classList.remove('hidden');
     } else {
         menu.classList.add('visible');
         menuBtn.classList.add('hidden');
     }
 }

 // Gestion de l'événement click pour le bouton de menu
 menuBtn.addEventListener('click', function(event) {
     event.stopPropagation(); // Empêcher la propagation du clic
     toggleMenu();
 });

 // Gestion de l'événement click pour masquer le menu lorsqu'on clique ailleurs sur la page
 document.addEventListener('click', function(event) {
     if (menu.classList.contains('visible')) {
         menu.classList.remove('visible');
         menuBtn.classList.remove('hidden');
     }
 });

 // Empêcher la fermeture du menu lorsqu'on clique à l'intérieur du menu
 menu.addEventListener('click', function(event) {
     event.stopPropagation();
 });