const MenuApp = (() => {
  const uniqueId = `menu-app-${Date.now()}`;

  function éviterConflits() {
    if (document.getElementById(`${uniqueId}-menu`) || document.querySelector(`.${uniqueId}-menu-btn`)) {
      console.warn('Conflit détecté sur les IDs/classes.');
      return true;
    }
    return false;
  }

  if (éviterConflits()) {
    console.error("Impossible d'exécuter MenuApp à cause d'un conflit.");
    return;
  }

  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = '&#9776;';
  menuBtn.className = `${uniqueId}-menu-btn`;
  menuBtn.title = 'Maisons de vente';

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
    menuBtn.style.backgroundImage = 'linear-gradient(45deg, #FF5722, #FF9800)';
  });
  menuBtn.addEventListener('mouseup', () => {
    menuBtn.style.transform = 'scale(1)';
    menuBtn.style.backgroundImage = 'linear-gradient(45deg, #4CAF50, #FF9800)';
  });

  const menu = document.createElement('div');
  menu.id = `${uniqueId}-menu`;
  Object.assign(menu.style, {
    position: 'fixed',
    top: '150px',
    left: '10px',
    width: '250px',
    maxHeight: '1000px',
    overflowY: 'auto',
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

  function ajouterLignesMenu() {
    const titre = document.createElement('h2');
    titre.textContent = 'Maisons de Vente';
    titre.style.marginBottom = '10px';
    titre.style.fontSize = '18px';
    titre.style.fontWeight = 'bold';
    titre.style.color = '#FF9800';
    titre.style.textAlign = 'center';
    menu.appendChild(titre);

    const liens = [
      { href: "https://www.roumet.com/index.php", title: "Roumet", src: "../../../LaPoste/logo/Roumet.png", alt: "Roumet" },
      { href: "https://ceres.fr/", title: "Ceres", src: "../../../LaPoste/logo/Ceres.png", alt: "Ceres" },
      { href: "https://www.jfbphilatelie.com/", title: "Jean Francois Brun", src: "../../../LaPoste/logo/JFB.png", alt: "Jean Francois Brun" },
      { href: "https://www.davidfeldman.com/", title: "David Feldman", src: "../../../LaPoste/logo/David_Feldman.png", alt: "David Feldman" },
      { href: "https://behr.fr/", title: "Behr Philatelie", src: "../../../LaPoste/logo/Behr_Philatelie.png", alt: "Behr Philatelie" },
    ];

    liens.forEach(lien => {
      const a = document.createElement('a');
      a.href = lien.href;
      a.title = lien.title;
      Object.assign(a.style, {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: 'none',
        color: '#333',
      });
      const img = document.createElement('img');
      img.src = lien.src;
      img.alt = lien.alt;
      img.style.width = "30px";
      img.style.height = "30px";
      img.style.marginRight = "10px";

      a.appendChild(img);
      a.appendChild(document.createTextNode(lien.title));
      menu.appendChild(a);
    });
  }
  ajouterLignesMenu();

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
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  document.addEventListener('click', () => {
    if (menu.style.opacity === '1') toggleMenu();
  });
  menu.addEventListener('click', (e) => e.stopPropagation());
})();










(function () {
  const tableLiens = document.getElementById('table-liens');
  if (!tableLiens) return;

  tableLiens.innerHTML = "Liens utiles<br>"; // uniquement le texte + saut de ligne

  const logos = [
    { href: "https://www.academiedephilatelie.fr/", title: "Académie De Philatelie", src: "../../../LaPoste/LiensUtiles/academieDePhilatelie.png", alt: "Académie De Philatelie", width: 50, height: 50 },
    { href: "https://www.academiebelgium.be/fr/", title: "Academie de Philatelie Belge", src: "../../../LaPoste/LiensUtiles/Academie de Philatelie Belge.png", alt: "Academie de Philatelie Belge", width: 50, height: 50 },
    { href: "https://www.accademiadiposta.it/", title: "accademiadiposta", src: "../../../LaPoste/LiensUtiles/Accademied'italie.png", alt: "Accademie d'italie", width: 50, height: 50 },
    { href: "https://gallica.bnf.fr/accueil/fr/content/accueil-fr?mode=desktop", title: "Gallica", src: "../../../LaPoste/LiensUtiles/gallica.png", alt: "Gallica", width: 50, height: 50 },
    { href: "https://unionmarcophile.fr/", title: "Union Marcophile", src: "../../../LaPoste/LiensUtiles/unionMarcophile.png", alt: "Union Marcophile", width: 50, height: 50 },
    { href: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal", title: "Wikipedia", src: "../../../LaPoste/LiensUtiles/Wikipedia.png", alt: "Wikipedia", width: 50, height: 50 },
    { href: "https://www.timbres-de-france.com/collection/_classique/pag1.php", title: "Timbres de France", src: "../../../LaPoste/LiensUtiles/Timbres_de_France.png", alt: "Timbres de France", width: 50, height: 50 },
    { href: "https://aqep.net/", title: "Académie Québécoise", src: "../../../LaPoste/LiensUtiles/Quebec.png", alt: "Académie Québécoise", width: 50, height: 50 },
    { href: "https://www.aep.eu.com/fr/", title: "AEP", src: "../../../LaPoste/LiensUtiles/AEP.png", alt: "Académie Européenne de philatélie", width: 85, height: 45 },
    { href: "https://ffap.net/", title: "FFAP", src: "../../../LaPoste/LiensUtiles/FFAP.png", alt: "FFAP", width: 50, height: 50 },
    { href: "https://museedelaposte-lcl.net.extra.laposte.fr/fr", title: "Musée de la Poste", src: "../../../LaPoste/LiensUtiles/Musee de la Poste.png", alt: "Musée de la Poste", width: 50, height: 50 },
  ];

  logos.forEach(function (logo) {
    const link = document.createElement('a');
    link.href = logo.href;
    link.title = logo.title;
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.width = logo.width;
    img.height = logo.height;
    img.style.margin = "5px";

    link.appendChild(img);
    tableLiens.appendChild(link);
  });
})();
