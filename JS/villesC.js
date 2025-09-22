document.addEventListener('DOMContentLoaded', function () {
  // ————— CONFIG —————
  // Si ton site est servi comme https://<user>.github.io/<repo>/,
  // on détecte la racine "/<repo>/" automatiquement.
  const firstSeg = location.pathname.split('/').filter(Boolean)[0] || '';
  const SITE_ROOT = firstSeg ? `/${firstSeg}/` : '/';

  // Dossier parent tel qu'il existe DANS TON REPO (respecte la casse !)
  const ROOT_DIR = 'laPosteDeLancienneFrance';
  const GROUP_DIR = 'Villes C'; // garde l’espace, on l’encode plus bas

  const villes = [
    "Couterne","Coutras","Couture","Cozes","Craon","Craponne","Crecy En Brie","Creil","Cremieu",
    "Crepy en Valois","Cressensac","Crest","Crevecoeur","Croissanville","Crolles","Cuers","Cuges",
    "Culan","cadillac","cadenet","caen","cahors","Cahusac","Calais","Calvi","Calvisson","Camaret",
    "Cambrai","Cande","cannes","Cany","Caraman","Carcassonne","Carentan","Carhaix","Carignan",
    "CarlaBayle","Carpentras","Carrouge","Carvin","Casal","Cassel","Cassis","Castelfranc",
    "Casteljaloux","Castellane","Castelnaudary","Castelnau","CastelnauDeMagnoac","CastelnauDeMedoc",
    "castelnauDeMontratier","CastelSarrasin","Castillon","Castre","Castre-En-Guyenne","Caudebec",
    "Caudrot","Caudry","Caussade","Cauterets","Cavaillon","Cavignac","Caylus","Cazeres","Cercles",
    "Cerdon","Ceret","Cernay","Cervione","Cette","Chabanais","Chablis","Chagny","Chalabre",
    "Chalamont","Challans","Chalon-Sur-Saone","Chalons-Sur-Marne","Chalus","Chambly","Chambon",
    "Chambord","Chambrais","Champagnole","Champigny","Champlitte","Champrond","Chanceaux","Chanteloube"
  ];

  function normalizeBase(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  // Dossier: minuscules + tirets (ex. "Crepy en Valois" -> "crepy-en-valois")
  function toFolderSlug(str) {
    return normalizeBase(str)
      .replace(/['’`]/g, '')
      .replace(/[^a-zA-Z0-9 ]/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .toLowerCase();
  }
  // Fichier: PascalCase sans espaces ni accents (ex. "Crepy en Valois" -> "CrepyEnValois")
  function toPascalFile(str) {
    return normalizeBase(str)
      .replace(/[-’'`]/g, ' ')
      .replace(/[^a-zA-Z0-9 ]/g, ' ')
      .trim()
      .split(/\s+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
  }
  // Construire URL ABSOLUE et encodée segment par segment
  function buildUrl(ville) {
    const dossier = toFolderSlug(ville);      // ex. "crepy-en-valois"
    const fichier = toPascalFile(ville);      // ex. "CrepyEnValois"
    const segments = [
      SITE_ROOT.replace(/\/+$/, ''),          // "/repo" ou ""
      ROOT_DIR,                               // "laPosteDeLancienneFrance"
      GROUP_DIR,                              // "Villes C"
      dossier,                                // "crepy-en-valois"
      `${fichier}.html`                       // "CrepyEnValois.html"
    ];
    // encode chaque segment sauf le tout premier qui contient déjà le slash
    return segments[0] + '/' + segments.slice(1).map(encodeURIComponent).join('/');
  }

  function normalizeText(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  const input = document.getElementById('villeInput');
  const dropdownContent = document.getElementById('dropdownContent');
  const villeLink = document.getElementById('villeLink');

  const cityLinks = villes.map(ville => {
    const link = document.createElement('a');
    link.href = buildUrl(ville);
    link.textContent = ville;
    link.dataset.normalized = normalizeText(ville);
    dropdownContent.appendChild(link);
    return link;
  });

  input.addEventListener('input', function () {
    const filter = normalizeText(input.value);
    cityLinks.forEach(link => {
      const normalizedCity = link.dataset.normalized;
      link.style.display = normalizedCity.includes(filter) ? '' : 'none';
    });
  });

  dropdownContent.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'A') {
      villeLink.innerHTML = ' &emsp;&emsp;' + target.textContent + '<i class="fas fa-caret-down"></i>';
      window.location.href = target.href;
    }
  });
});
