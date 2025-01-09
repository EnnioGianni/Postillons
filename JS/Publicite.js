// Configuration des publicités
const ads = [
    {
        image: '../../../La Poste/Images/in_34.jpg',
        title: 'Vente à prix nets !',
        description1: "📅 Date : Vente à prix net\n📍 Lieu : Salle des ventes, Paris.",
        description2: "Découvrez une collection unique, allant des lettres anciennes aux timbres postes.",
        description3: "Rejoignez-nous et placez vos enchères sur ces lots exceptionnels. Les lots sont limités !",
        link: 'https://www.letimbreclassique.com/ltc-parcourir-lots/vpn-2024/vpn-2024/'
    },
    {
        image: '../../../La Poste/Images/IvertTellier.png',
        title: 'Yvert et Tellier!',
        description1: "Le site officiel, tout pour votre collection de timbres et de monnaies",
        description2: "Dans les espaces YVERT ET TELLIER, retrouvez le plaisir de collectionner",
        description3: "Yvert et Tellier est le seul site où vous pourrez voir un visuel de votre timbre  !",
        link: 'https://www.yvert.com/'
    },
    {
        image: '../../../La Poste/Images/L_EchoPhil.png',
        title: 'L-Écho de la Timbrologie',
        description1: "Tous les mois, L'Écho de la Timbrologie propose des informations inédites, présente et commente les nouvelles émissions de France et d'ailleurs, et interviewe les acteurs de la philatélie.",
        description2: "L'Écho de la Timbrologie : le journal de référence pour tous les philatélistes ",
        description3: "Si vous souhaitez recevoir la version papier de LÉcho de la Timbrologie, vous pouvez vous abonner sur le site de LÉcho de la Timbrologie",
        link: 'http://www.echo-de-la-timbrologie.com/store/'
    },
    {
        image: '../../../La Poste/Images/feteDuTimbre2025.jpg',
        title: 'Fête du Timbre 2025',    
        description1: "Thème Le cirque",
        description2: "📅 Date : Du 08/03/2025 au 09/03/2025\n📍 Lieu : A MONTPELLIER ",
        description3: "A LA SALLE NOUGARET (ESPACE PITOT).",
        description4: "Expositions, achat, vente, oblitération par la Poste, souvenirs.",
        link: 'https://www.asso-philatelique-montpellier.fr/evenement/fete-du-timbre/8/'
    },
    {
        image: '../../../La Poste/Images/Decembre2024.jpg',
        title: 'Timbres magazine',
        description1: "📅 Numéro du mois de décembre\n📍 Timbres magazine",
        description2: "Mensuel de la presse philatélique française",
        description3: "Des articles et des nouvelles philatéliques",
        link: 'https://timbresmag.fr/'
    }
  ];
  
  // Récupération de l'index actuel dans localStorage
  let currentAdIndex = parseInt(localStorage.getItem('lastAdIndex')) || 0;
  
  // Fonction pour enregistrer l'index actuel dans localStorage
  function saveCurrentAdIndex(index) {
    localStorage.setItem('lastAdIndex', index);
  }
  
  // Création de la bannière publicitaire
  const adBanner = document.createElement('div');
  adBanner.style.position = 'fixed';
  adBanner.style.bottom = '20px';
  adBanner.style.right = '20px';
  adBanner.style.width = '320px';
  adBanner.style.height = 'auto';
  adBanner.style.padding = '15px';
  adBanner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  adBanner.style.backgroundColor = '#F59454';
  adBanner.style.border = '1px solid #ddd';
  adBanner.style.borderRadius = '8px';
  adBanner.style.zIndex = '1000';
  document.body.appendChild(adBanner);
  
  // Bouton de fermeture
  const closeButton = document.createElement('span');
  closeButton.textContent = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '10px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '18px';
  closeButton.style.fontWeight = 'bold';
  closeButton.style.color = '#999';
  closeButton.title = 'Fermer la bannière';
  adBanner.appendChild(closeButton);
  
  closeButton.addEventListener('click', () => {
    adBanner.style.display = 'none';
  });
  
  // Création des éléments dynamiques
  const adImage = document.createElement('img');
  adImage.style.width = '100%';
  adImage.style.borderRadius = '5px';
  adImage.style.marginBottom = '10px';
  adBanner.appendChild(adImage);
  
  const adTitle = document.createElement('h3');
  adTitle.style.margin = '10px 0';
  adTitle.style.fontSize = '18px';
  adTitle.style.color = '#333';
  adTitle.style.textAlign = 'center';
  adBanner.appendChild(adTitle);
  
  const adDescription1 = document.createElement('p');
  adDescription1.style.margin = '10px 0';
  adDescription1.style.fontSize = '14px';
  adDescription1.style.color = '#555';
  adDescription1.style.textAlign = 'center';
  adBanner.appendChild(adDescription1);
  
  const adDescription2 = document.createElement('p');
  adDescription2.style.margin = '10px 0';
  adDescription2.style.fontSize = '14px';
  adDescription2.style.color = '#555';
  adDescription2.style.textAlign = 'justify';
  adBanner.appendChild(adDescription2);
  
  const adDescription3 = document.createElement('p');
  adDescription3.style.margin = '10px 0';
  adDescription3.style.fontSize = '14px';
  adDescription3.style.color = '#555';
  adDescription3.style.textAlign = 'justify';
  adBanner.appendChild(adDescription3);
  
  const adLink = document.createElement('a');
  adLink.style.display = 'inline-block';
  adLink.style.marginTop = '10px';
  adLink.style.fontSize = '14px';
  adLink.style.color = '#007BFF';
  adLink.style.textDecoration = 'none';
  adLink.style.fontWeight = 'bold';
  adLink.style.textAlign = 'center';
  adLink.style.display = 'block';
  adLink.target = '_blank';
  adBanner.appendChild(adLink);
  
  // Création des flèches
  const leftArrow = document.createElement('span');
  leftArrow.textContent = '◀';
  leftArrow.style.position = 'absolute';
  leftArrow.style.top = '40%';
  leftArrow.style.left = '10px';
  leftArrow.style.transform = 'translateY(-50%)';
  leftArrow.style.fontSize = '20px';
  leftArrow.style.cursor = 'pointer';
  leftArrow.style.zIndex = '1001';
  leftArrow.style.color = 'black';
  leftArrow.title = 'Précédent';
  adBanner.appendChild(leftArrow);
  
  const rightArrow = document.createElement('span');
  rightArrow.textContent = '▶';
  rightArrow.style.position = 'absolute';
  rightArrow.style.top = '40%';
  rightArrow.style.right = '10px';
  rightArrow.style.transform = 'translateY(-50%)';
  rightArrow.style.fontSize = '20px';
  rightArrow.style.cursor = 'pointer';
  rightArrow.style.zIndex = '1001';
  rightArrow.style.color = 'black';
  rightArrow.title = 'Suivant';
  adBanner.appendChild(rightArrow);
  
  // Fonction pour mettre à jour la publicité
  function updateAdContent() {
    const ad = ads[currentAdIndex];
    adImage.src = ad.image;
    adImage.alt = ad.title;
    adTitle.textContent = ad.title;
    adDescription1.textContent = ad.description1;
    adDescription2.textContent = ad.description2;
    adDescription3.textContent = ad.description3;
    adLink.textContent = 'Cliquez ici pour en savoir plus !';
    adLink.href = ad.link;
    saveCurrentAdIndex(currentAdIndex);
  }
  
  // Gestion des clics pour les flèches
  leftArrow.addEventListener('click', () => {
    currentAdIndex = (currentAdIndex - 1 + ads.length) % ads.length;
    updateAdContent();
  });
  
  rightArrow.addEventListener('click', () => {
    currentAdIndex = (currentAdIndex + 1) % ads.length;
    updateAdContent();
  });
  
  
  
  // Initialisation de la publicité
  updateAdContent();
  
  //Fonction pour que la publicité sarrette lorsqu'on passe la sourie
  
  // Initialisation de l'intervalle
  let interval = null;
  
  // Fonction pour démarrer l'intervalle
  function startInterval() {
    interval = setInterval(() => {
      currentAdIndex = (currentAdIndex + 1) % ads.length;
      updateAdContent();
    }, 10000);
  }
  
  // Fonction pour arrêter l'intervalle
  function stopInterval() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }
  
  // Démarrage initial de l'intervalle
  startInterval();
  
  // Ajout des gestionnaires d'événements pour le survol
  adBanner.addEventListener('mouseenter', () => {
    stopInterval(); // Arrête l'intervalle lorsque la souris entre dans la bannière
  });
  
  adBanner.addEventListener('mouseleave', () => {
    startInterval(); // Redémarre l'intervalle lorsque la souris quitte la bannière
  });
  