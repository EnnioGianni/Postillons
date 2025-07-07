document.addEventListener('DOMContentLoaded', function() {
    const champRecherche = document.getElementById('champRecherche');
    if (champRecherche) {
        champRecherche.addEventListener('input', function() {
            var termeRecherche = this.value.toLowerCase();
            resetCouleurTexte();
            mettreEnNoirTermeRecherche(termeRecherche);
            faireDefilerVersTerme(termeRecherche);
        });
    }

    const villeInput = document.getElementById('villeInput');
    if (villeInput) {
        villeInput.addEventListener('input', updateVilleLink);
    }
});

// Fonction de mise en noir du terme
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

// Mise à jour du lien de ville
function updateVilleLink() {
    var villeInputValue = document.getElementById('villeInput').value.toLowerCase();
    var dropdownItems = document.querySelectorAll('#dropdownContent a');
    var villeLink = document.getElementById('villeLink');

    dropdownItems.forEach(function(dropdownItem) {
        var dropdownText = dropdownItem.textContent.toLowerCase();
        dropdownItem.style.display = dropdownText.includes(villeInputValue) ? '' : 'none';
        if (villeLink && dropdownText === villeInputValue) {
            villeLink.textContent = dropdownItem.textContent;
            villeLink.href = dropdownItem.href;
        }
    });
}

//Bouton haut de page
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    var mybutton = document.getElementById("scrollToTopButton");
    if (!mybutton) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

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








$(function () {
    const $titre = $(".titre-principal");

    function adjustH1Size() {
        const isMobile = $(window).width() < 768; // détecte si l'écran est petit (mobile)

        $titre.css({
            fontSize: isMobile ? "22px" : "36px",
            textAlign: isMobile ? "center" : "left",
            margin: isMobile ? "10px auto" : "0 50px 0 -35px"
        });
    }

    adjustH1Size(); // Exécution au chargement
    $(window).on("resize", adjustH1Size); // Réexécution au redimensionnement
});










// script.js
(function() {
    // Vérifie si le script img.js est déjà présent
    const alreadyLoaded = [...document.scripts].some(s => s.src.includes("img.js"));
    if (!alreadyLoaded) {
      const script = document.createElement("script");
      script.src = "../../../JS/img.js";
      script.type = "text/javascript";
      document.head.appendChild(script);
    }
  })();

document.addEventListener("DOMContentLoaded", function () {

});





  
  
  
  