const MenuApp = (() => {
  // Génère des identifiants uniques pour éviter les conflits
  const uniqueId = `menu-app-${Date.now()}`;

  function éviterConflits() {
    // Vérifiez si des éléments similaires existent déjà
    if (document.getElementById(`${uniqueId}-menu`) || document.querySelector(`.${uniqueId}-menu-btn`)) {
      console.warn('Conflit détecté : des IDs ou classes similaires existent déjà.');
      return true; // Conflit détecté
    }
    return false; // Aucun conflit
  }

  // Si un conflit est détecté, arrêtez l'exécution
  if (éviterConflits()) {
    console.error("Impossible d'exécuter : un conflit empêche le chargement.");
    return;
  }

  // Création du bouton de menu
  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = '&#9776;';
  menuBtn.className = `${uniqueId}-menu-btn`;
  menuBtn.title = 'Maisons de vente';

  // Styles pour le bouton menu
  Object.assign(menuBtn.style, {
    position: 'fixed',
    top: '0px',
    left: '20px',
    zIndex: '1000',
    width: '40px',
    height: '40px',
    border: '3px solid #FF9800',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(45deg, #4CAF50, #FF9800)',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease',
  });
  document.body.appendChild(menuBtn);

  // Effets pour le bouton menu
  menuBtn.addEventListener('mouseenter', () => {
    menuBtn.style.transform = 'scale(1.1)';
    menuBtn.style.boxShadow = '0 0 12px rgba(0, 0, 0, 0.4), inset 0 0 8px rgba(255, 255, 255, 0.4)';
  });

  menuBtn.addEventListener('mouseleave', () => {
    menuBtn.style.transform = 'scale(1)';
    menuBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.2)';
  });

  menuBtn.addEventListener('mousedown', () => {
    menuBtn.style.transform = 'scale(0.9)';
    menuBtn.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5), inset 0 0 3px rgba(255, 255, 255, 0.3)';
    menuBtn.style.backgroundImage = 'linear-gradient(45deg, #FF5722, #FF9800)';
  });

  menuBtn.addEventListener('mouseup', () => {
    menuBtn.style.transform = 'scale(1)';
    menuBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.2)';
    menuBtn.style.backgroundImage = 'linear-gradient(45deg, #4CAF50, #FF9800)';
  });

  // Création du menu
  const menu = document.createElement('div');
  menu.id = `${uniqueId}-menu`;

  // Styles pour le menu
  Object.assign(menu.style, {
    position: 'fixed', // Position fixe pour que le menu reste visible pendant le défilement
    top: '150px',
    left: '10px',
    width: '250px',
    maxHeight: '1000px', // Limite la hauteur pour forcer la barre de défilement
    overflowY: 'auto', // Ajoute une barre de défilement si nécessaire
    backgroundColor: '#fff',
    border: '3px solid #FF9800',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '999',
    padding: '10px',
    display: 'none',
    opacity: '0',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  });

  document.body.appendChild(menu);

  // Ajout des liens et des logos au menu
  function ajouterLignesMenu() {
    const titre = document.createElement('h2');
    titre.textContent = 'Maisons de Vente';
    Object.assign(titre.style, {
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#FF9800',
      textAlign: 'center',
    });
    menu.appendChild(titre);

    const liens = [
      { href: "https://www.roumet.com/index.php", title: "Roumet", src: "../../../La Poste/logo/Roumet.png", alt: "Roumet" },
      { href: "https://ceres.fr/", title: "Ceres", src: "../../../La Poste/logo/Ceres.png", alt: "Ceres" },
      { href: "https://www.jfbphilatelie.com/", title: "Jean Francois Brun", src: "../../../La Poste/logo/JFB.png", alt: "Jean Francois Brun" },
      { href: "https://www.davidfeldman.com/", title: "David Feldman", src: "../../../La Poste/logo/David_Feldman.png", alt: "David Feldman" },
      { href: "https://behr.fr/", title: "Behr Philatelie", src: "../../../La Poste/logo/Behr_Philatelie.png", alt: "Behr Philatelie" },
    ];

    liens.forEach(lien => {
      const a = document.createElement('a');
      Object.assign(a, { href: lien.href, title: lien.title });
      Object.assign(a.style, {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: 'none',
        color: '#333',
      });

      const img = document.createElement('img');
      Object.assign(img, { src: lien.src, alt: lien.alt });
      Object.assign(img.style, { width: '30px', height: '30px', marginRight: '10px' });

      a.appendChild(img);
      a.appendChild(document.createTextNode(lien.title));
      menu.appendChild(a);
    });
  }

  ajouterLignesMenu();

  // Fonction pour afficher et cacher le menu avec animation
  function toggleMenu() {
    if (menu.style.display === 'none' || menu.style.opacity === '0') {
      menu.style.display = 'block';
      setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(0)';
      }, 0);
    } else {
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        menu.style.display = 'none';
      }, 300);
    }
  }

  // Gestion des événements pour le bouton menu
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', () => {
    if (menu.style.opacity === '1') {
      toggleMenu();
    }
  });

  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
})();











(function () {
  document.querySelectorAll('#table-liens').forEach(function (tableLiens) {
      const logosContainer = document.createElement('div');
      logosContainer.style.display = 'flex';
      logosContainer.style.justifyContent = 'center';
      logosContainer.style.alignItems = 'center';
      logosContainer.style.marginTop = '0px';
      logosContainer.style.padding = '0 20px';
      logosContainer.style.gap = '10px';
      logosContainer.style.flexWrap = 'wrap'; // Permet aux éléments de passer à la ligne

      const logos = [
          { href: "https://www.academiedephilatelie.fr/", title: "Academie De Philatelie", src: "../../../La Poste/LiensUtiles/academieDePhilatelie.png", alt: "Academie De Philatelie", width: 50, height: 50 },
          { href: "https://gallica.bnf.fr/accueil/fr/content/accueil-fr?mode=desktop", title: "Gallica", src: "../../../La Poste/LiensUtiles/gallica.png", alt: "Gallica", width: 50, height: 50 },
          { href: "https://www.academiebelgium.be/fr/", title: "Academie de Philatelie Belge", src: "../../../La Poste/LiensUtiles/Academie de Philatelie Belge.png", alt: "Accademie d'Italie", width: 50, height: 50 },
          { href: "https://unionmarcophile.fr/", title: "Union Marcophile", src: "../../../La Poste/LiensUtiles/unionMarcophile.png", alt: "Union Marcophile", width: 50, height: 50 },
          { href: "https://www.upu.int/fr/union-postale-universelle/activites/philatelie-et-cri/association-mondiale-pour-le-developpement-de-la-philatelie-amdp", title: "Association mondiale pour le développement de la philatélie (AMDP)", src: "../../../La Poste/LiensUtiles/Association mondiale pour le développement de la philatélie (AMDP).png", alt: "AMDP", width: 50, height: 50 },
          { href: "https://museedelaposte.fr/fr", title: "Muse DeLaPoste", src: "../../../La Poste/LiensUtiles/muse DeLaPoste.png", alt: "Muse DeLaPoste", width: 50, height: 50 },
          { href: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal", title: "Wikipedia", src: "../../../La Poste/LiensUtiles/Wikipedia.png", alt: "Wikipedia", width: 50, height: 50 },
          { href: "https://www.timbres-de-france.com/collection/_classique/pag1.php", title: "Timbres de France", src: "../../../La Poste/LiensUtiles/Timbres_de_France.png", alt: "Timbres de France", width: 50, height: 50 },
          { href: "https://aqep.net/", title: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES", src: "../../../La Poste/LiensUtiles/Quebec.png", alt: "Académie Québécoise", width: 50, height: 50 },
          { href: "https://www.aep.eu.com/fr/", title: "Académie Européenne de philatélie", src: "../../../La Poste/LiensUtiles/AEP.png", alt: "Académie Européenne de philatélie", width: 85, height: 45 },
          { href: "https://ffap.net/", title: "La Fédération Française des Associations Philatéliques", src: "../../../La Poste/LiensUtiles/FFAP.png", alt: "FFAP", width: 50, height: 50 },
          { href: "https://marcophilie.org/", title: "Marques postales", src: "../../../La Poste/LiensUtiles/Marques postales.png", alt: "Marques postales", width: 230, height: 50 }
      ];

      const images = [];

      logos.forEach(function (logo) {
          const link = document.createElement('a');
          link.href = logo.href;
          link.title = logo.title;

          const img = document.createElement('img');
          img.src = logo.src;
          img.alt = logo.alt;
          img.style.width = logo.width + "px";
          img.style.height = logo.height + "px";
          img.style.transition = "all 0.3s ease"; // Ajoute une transition fluide

          images.push({ element: img, originalWidth: logo.width, originalHeight: logo.height });

          link.appendChild(img);
          logosContainer.appendChild(link);
      });

      tableLiens.appendChild(logosContainer);

      function adjustImages() {
          const screenWidth = window.innerWidth;

          images.forEach(imgObj => {
              if (screenWidth < 600) {
                  imgObj.element.style.width = imgObj.originalWidth * 0.8 + "px"; // Réduction des images
                  imgObj.element.style.height = imgObj.originalHeight * 0.8 + "px";
              } else {
                  imgObj.element.style.width = imgObj.originalWidth + "px";
                  imgObj.element.style.height = imgObj.originalHeight + "px";
              }
          });
      }

      adjustImages();
      window.addEventListener('resize', adjustImages);
  });
})();
