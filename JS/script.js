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










 
  
  





//Footer qui remplace celui en html
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les éléments existants avec la classe "News-footer"
  const oldNewsFooters = document.querySelectorAll(".News-footer");

  // Si un élément est trouvé, on le remplace
  oldNewsFooters.forEach(oldFooter => {
      // Création du nouvel élément .News-footer
      const newsFooter = document.createElement("div");
      newsFooter.className = "News-footer";

      // Création du conteneur de titre
      const newsDiv = document.createElement("div");
      newsDiv.className = "news";

      const newsHead = document.createElement("span");
      newsHead.id = "news-head";
      newsHead.innerHTML = "<b>COTE</b>";

      // Ajouter le titre à la div
      newsDiv.appendChild(newsHead);
      newsFooter.appendChild(newsDiv);

      // Création du paragraphe contenant le <marquee>
      const pText = document.createElement("p");
      pText.className = "N-text";

      const marquee = document.createElement("marquee");
      marquee.direction = "left";

      // Données dynamiques
      const newsData = [
          "COTES : CELLES-CI S'ENTENDENT POUR DE BELLES FRAPPES.",
          "Pour les lettres en port payé. A) COTE DU PP SANS PLUS VALUE SI LA MARQUE DE PORT QUI L'ACCOMPAGNE EST D'UN INDICE INFÉRIEUR À 16.",
          "B) SI LA MARQUE DE PORT QUI ACCOMPAGNE LE PORT PAYÉ EST D'UN INDICE SUPÉRIEUR À 16 ; MAJORER DE 2 l'INDICES LA COTE DU PORT PAYÉ.",
          "© Copyright Tout droit réservé"
      ];

      // Générer dynamiquement les contenus
      newsData.forEach(text => {
          let span = document.createElement("span");
          span.textContent = text + " | "; // Ajout du séparateur
          marquee.appendChild(span);
      });

      // Ajouter le <marquee> dans le paragraphe et tout dans le footer
      pText.appendChild(marquee);
      newsFooter.appendChild(pText);

      // Remplacer l'ancien footer par le nouveau
      oldFooter.replaceWith(newsFooter);
  });
});








$(document).ready(function () {
    function adjustH1Size() {
        if ($(window).width() < 768) { 
            $(".titre-principal").css({
                "font-size": "22px",
                "text-align": "center",
                "margin": "10px auto"
            });
        } else {
            $(".titre-principal").css({
                "font-size": "36px",
                "text-align": "left",
                "margin": "0 50px 0 -35px"
            });
        }
    }

    adjustH1Size();

    $(window).resize(function () {
        adjustH1Size();
    });
});










