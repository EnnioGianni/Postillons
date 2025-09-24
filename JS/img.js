document.addEventListener("DOMContentLoaded", function () {
    const PIXELS_PER_MM = 3.78;
    const STORAGE_EXPIRATION = 86400000;
    let isSessionStorageAvailable = checkSessionStorage();

    function checkSessionStorage() {
        try {
            sessionStorage.setItem("test", "1");
            sessionStorage.removeItem("test");
            return true;
        } catch (e) {
            return false;
        }
    }

    function mmToPx(mm) {
        return mm * PIXELS_PER_MM;
    }

    function getCachedRatio(src) {
        if (!isSessionStorageAvailable) return null;
        let data = sessionStorage.getItem(src);
        if (!data) return null;
        let parsed = JSON.parse(data);
        if (Date.now() - parsed.timestamp > STORAGE_EXPIRATION) {
            sessionStorage.removeItem(src);
            return null;
        }
        return parsed.ratio;
    }

    function cacheRatio(src, ratio) {
        if (isSessionStorageAvailable) {
            sessionStorage.setItem(src, JSON.stringify({ ratio, timestamp: Date.now() }));
        }
    }

    function adjustImageSize(img) {
        if (!img.hasAttribute("data-width-mm")) return;

        let widthMM = parseFloat(img.getAttribute("data-width-mm"));
        if (isNaN(widthMM)) return;

        let widthPX = mmToPx(widthMM);
        let src = img.currentSrc || img.src;

        let cachedRatio = getCachedRatio(src);
        if (cachedRatio) {
            setImageStyles(img, widthPX, cachedRatio);
            return;
        }

        if (img.complete && img.naturalWidth) {
            let ratio = img.naturalWidth / img.naturalHeight;
            cacheRatio(src, ratio);
            setImageStyles(img, widthPX, ratio);
            return;
        }

        let tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            let ratio = tempImg.width / tempImg.height;
            cacheRatio(src, ratio);
            setImageStyles(img, widthPX, ratio);
        };
    }

    function setImageStyles(img, widthPX, ratio) {
        img.style.width = "100%";
        img.style.maxWidth = `${widthPX}px`;
        img.style.height = "auto";
        img.style.display = "block";
        img.style.margin = "0 auto";
    }

    function processImages() {
        let images = document.getElementsByTagName("img");
        for (let img of images) {
            if (img.hasAttribute("data-width-mm")) {
                if ('IntersectionObserver' in window) {
                    observer.observe(img);
                } else {
                    adjustImageSize(img);
                }
            }
        }
    }

    let observer = new IntersectionObserver((entries) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                adjustImageSize(entry.target);
                observer.unobserve(entry.target);
            }
        }
    }, { rootMargin: "100px" });

    processImages();

    const mutationObserver = new MutationObserver(mutations => {
        requestAnimationFrame(() => {
            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (node.tagName === "IMG" && node.hasAttribute("data-width-mm")) {
                        observer.observe(node);
                    }
                }
            }
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Ajout du support jQuery pour tous types d'écrans
    if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
        $(document).ready(function () {
            $("img[data-width-mm]").each(function () {
                adjustImageSize(this);
            });
        });
    }
});















// Attention aux fausses marquée
(function () {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showAlertOnce);
    } else {
      showAlertOnce();
    }
  
    function showAlertOnce() {
      // Vérifie si l'alerte a déjà été vue pendant cette session
      if (sessionStorage.getItem('alertAlreadyShown')) return;
  
      // Sinon, on continue et on enregistre qu'on l'a montrée
      sessionStorage.setItem('alertAlreadyShown', 'true');
  
      try {
        const box = document.createElement('div');
        box.innerHTML = '⚠️ Attention aux fausses marquées.<br>© Les images sont la propriété du site et ne peuvent être copiées ou utilisées sans permission.';
  
        Object.assign(box.style, {
          all: 'initial',
          position: 'fixed',
          top: '220px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f44336',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          zIndex: '999999',
          textAlign: 'center',
          display: 'block'
        });
  
        document.body.appendChild(box);
  
        setTimeout(() => {
          if (box && box.parentNode) {
            box.parentNode.removeChild(box);
          }
        }, 7000);
      } catch (e) {
        console.warn('Erreur d’affichage du message d’alerte :', e);
      }
    }
  })();
  
  (function () {
    // Interdit le clic droit sur toutes les images
    document.addEventListener('contextmenu', function (e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  
    // Interdit le glisser-déposer des images
    document.addEventListener('dragstart', function (e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  
    // Interdit la sélection des images
    document.addEventListener('selectstart', function (e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  })();
  





  
 
  // Texte sur une seule ligne 
document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#333';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '6px 10px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '13px';
  tooltip.style.whiteSpace = 'normal';
  tooltip.style.maxWidth = '260px';
  tooltip.style.wordBreak = 'break-word';
  tooltip.style.overflowWrap = 'break-word';
  tooltip.style.lineHeight = '1.4';
  tooltip.style.zIndex = '1000';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  const longText = "Si vous avez, cette marque absente, propose-la pour l'ajouté.";
  const shortText = "Si vous avez acheté une marque de cette commune, indiquez le prix que vous l'avez payé en cliquant sur l’image. Cela nous aidera à ajuster la cote.";

  document.querySelectorAll('table').forEach(table => {
    table.querySelectorAll('tr').forEach(row => {
      const firstTd = row.querySelector('td');
      if (!firstTd) return;

      const img = firstTd.querySelector('a img');
      const link = img?.closest('a');
      if (!img || !link) return;

      // supprimer le title natif
      link.removeAttribute("title");

      let href = link.getAttribute('href')?.toLowerCase() || "";

      let tooltipText = "";
      if (href.match(/\.(png|jpg|jpeg)$/i)) {
        tooltipText = shortText;
      } else if (href.includes("proposition/index.html")) {
        tooltipText = longText;
      }

      if (tooltipText) {
        link.addEventListener('mouseenter', () => {
          const rect = img.getBoundingClientRect();
          tooltip.textContent = tooltipText;
          tooltip.style.left = `${rect.left + window.scrollX}px`;
          tooltip.style.top = `${rect.bottom + 8 + window.scrollY}px`;
          tooltip.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
        });
      }

      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "../../../proposition/index.html";
      });
    });
  });
});












//Traduction en plusieurs

document.addEventListener("DOMContentLoaded", function () {
  const browserLang = (navigator.language || "fr").slice(0, 2).toLowerCase();
  let currentLang = localStorage.getItem("langOverride") || browserLang;
  let liveInterval = null;
  const tables = document.querySelectorAll("table.exemple");
  const originalTextNodes = [];

  const flags = {
    fr: "🇫🇷", en: "🇬🇧", es: "🇪🇸", it: "🇮🇹", de: "🇩🇪", pt: "🇵🇹", default: "🌐"
  };

  const langNames = {
    fr: "Français", en: "English", es: "Español", it: "Italiano", de: "Deutsch", pt: "Português", default: "Langue inconnue"
  };

  const liveLabels = {
    fr: "Message affiché en", en: "Message shown in", es: "Mensaje mostrado en", it: "Messaggio visualizzato in",
    de: "Nachricht angezeigt in", pt: "Mensagem exibida em", default: "Message shown in"
  };

  const messages = {
    fr: `Si vous avez acheté une marque de cette commune, indiquez le prix que vous l'avez payé 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> ici</a>,
      cela nous aidera à rétablir leur cote.`,
    en: `If you have purchased a brand from this municipality, please report the price you paid 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> here</a>,
      it will help us restore its rating.`,
    es: `Si compraste una marca de este municipio, indica el precio que pagaste 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> aquí</a>,
      eso nos ayudará a restablecer su cotización.`,
    it: `Se hai acquistato una marca di questo comune, indica il prezzo che hai pagato 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> qui</a>,
      ci aiuterà a ripristinarne la valutazione.`,
    de: `Wenn Sie eine Marke aus dieser Gemeinde gekauft haben, geben Sie bitte den gezahlten Preis an 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> hier</a>,
      damit wir ihre Bewertung wiederherstellen können.`,
    pt: `Se comprou uma marca deste município, indique o preço que pagou 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> aqui</a>,
      isso nos ajudará a restabelecer sua cotação.`,
    default: `If you have purchased a brand from this municipality, please report the price you paid 
      <a href="../../../proposition/index.html" style="color: blue; text-decoration: underline;"> here</a>,
      it will help us restore its rating.`
  };

  const dictionary = {
    en: {
      "Marque": "Mark", "Port": "Postage", "Dimensions": "Size", "Date": "Date",
      "Couleurs": "Color", "Indice": "Index", "Cote": "Value",
      "port dû": "post due", "port payé": "post paid",
      "noir": "black", "rouge": "red", "sec": "dry"
    },
    es: {
      "Marque": "Marca", "Port": "Porte", "Dimensions": "Tamaño", "Date": "Fecha",
      "Couleurs": "Color", "Indice": "Índice", "Cote": "Valor",
      "port dû": "porte debido", "port payé": "porte pagado",
      "noir": "negro", "rouge": "rojo", "sec": "seco"
    },
    fr: {}
  };

  function getCurrentDateTimeString() {
    const now = new Date();
    return now.toLocaleDateString() + ' à ' + now.toLocaleTimeString();
  }

  function insertMessage(table, lang) {
    const old = table.previousElementSibling;
    if (old?.classList?.contains("message-cote-auto")) old.remove();

    const flag = flags[lang] || flags.default;
    const langLabel = langNames[lang] || langNames.default;
    const message = messages[lang] || messages.default;
    const liveLabel = liveLabels[lang] || liveLabels.default;
    const dateTime = getCurrentDateTimeString();

    const container = document.createElement("div");
    container.className = "message-cote-auto";
    container.dataset.lang = lang;
    Object.assign(container.style, {
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "#cdba6d",
      color: "black",
      textAlign: "center",
      padding: "5px",
      lineHeight: "15px",
      fontSize: "13px",
      border: "8px solid #8a7d4a",
      position: "relative",
      marginBottom: "10px"
    });

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "x";
    Object.assign(closeBtn.style, {
      position: "absolute", top: "-1px", right: "10px",
      fontSize: "25px", color: "red", cursor: "pointer"
    });
    closeBtn.onclick = () => container.remove();

    const select = document.createElement("select");
    Object.assign(select.style, {
      fontSize: "14px", position: "absolute", top: "4px", right: "22px"
    });

    const autoOption = document.createElement("option");
    autoOption.value = "auto";
    autoOption.textContent = "🌐";
    select.appendChild(autoOption);

    Object.keys(flags).forEach(code => {
      if (code === "default") return;
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = flags[code];
      opt.title = langNames[code];
      select.appendChild(opt);
    });

    select.value = localStorage.getItem("langOverride") || "auto";
    select.onchange = () => updateLang(select.value);

    container.innerHTML = `
      <div style="margin-bottom: 8px; font-weight: bold;" class="live-time">
        ${flag} ${liveLabel} : ${langLabel} – ${dateTime}
      </div>
      <div>${message}</div>
    `;

    container.appendChild(closeBtn);
    container.appendChild(select);
    table.parentNode.insertBefore(container, table);
  }

  function updateLang(lang) {
    if (lang === "auto") {
      localStorage.removeItem("langOverride");
      currentLang = browserLang;
    } else {
      localStorage.setItem("langOverride", lang);
      currentLang = lang;
    }
    document.querySelectorAll(".message-cote-auto").forEach(e => e.remove());
    tables.forEach(table => insertMessage(table, currentLang));
    translatePage(currentLang);
  }

  function translatePage(lang) {
    const dict = dictionary[lang] || {};
    originalTextNodes.forEach(({ node, original }) => {
      const clean = original.trim().replace(/\s+/g, " ");
      node.textContent = dict[clean] || original;
    });
  }

  function collectTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentNode?.nodeName;
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT", "IMG"].includes(tag)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      const clean = node.textContent.trim().replace(/\s+/g, " ");
      originalTextNodes.push({ node, original: clean });
    }
  }

  collectTextNodes();
  updateLang(currentLang);

  liveInterval = setInterval(() => {
    document.querySelectorAll(".message-cote-auto").forEach(box => {
      const lang = box.dataset.lang || "default";
      const flag = flags[lang] || flags.default;
      const name = langNames[lang] || langNames.default;
      const live = liveLabels[lang] || liveLabels.default;
      const time = getCurrentDateTimeString();
      const line = box.querySelector(".live-time");
      if (line) line.innerHTML = `${flag} ${live} : ${name} – ${time}`;
    });
  }, 1000);

  window.addEventListener("storage", e => {
    if (e.key === "langOverride") updateLang(e.newValue || browserLang);
  });
});




// Tooltip sous l'image
document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#333';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '6px 10px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '13px';
  tooltip.style.whiteSpace = 'normal';
  tooltip.style.maxWidth = '260px';
  tooltip.style.wordBreak = 'break-word';
  tooltip.style.overflowWrap = 'break-word';
  tooltip.style.lineHeight = '1.4';
  tooltip.style.zIndex = '1000';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  const longText = "Si vous avez, cette marque absente, propose-la pour l'ajouté.";
  const shortText = "Si vous avez acheté une marque de cette commune, indiquez le prix que vous l'avez payé en cliquant sur l’image. Cela nous aidera à ajuster la cote.";

  document.querySelectorAll('table').forEach(table => {
    table.querySelectorAll('tr').forEach(row => {
      const firstTd = row.querySelector('td');
      if (!firstTd) return;

      const img = firstTd.querySelector('a img');
      const link = img?.closest('a');
      if (!img || !link) return;

      let href = link.getAttribute('href')?.toLowerCase() || "";

      let tooltipText = "";

      if (href.match(/\.(png|jpg|jpeg)$/i)) {
        // c'est une image => tooltip court
        tooltipText = shortText;
      } else if (href.includes("proposition/index.html")) {
        // déjà une proposition => tooltip long
        tooltipText = longText;
      }

      if (tooltipText) {
        link.addEventListener('mouseenter', () => {
          const rect = img.getBoundingClientRect();
          tooltip.textContent = tooltipText;
          tooltip.style.left = `${rect.left + window.scrollX}px`;
          tooltip.style.top = `${rect.bottom + 8 + window.scrollY}px`;
          tooltip.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
        });
      }

      // forcer la redirection au clic SANS modifier le href
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "../../../proposition/index.html";
      });

    });
  });
});






// Je possède cette marque postale

document.addEventListener("DOMContentLoaded", function () {
    const ownedCells = document.querySelectorAll("td.owned");

    ownedCells.forEach(cell => {
        cell.style.position = "relative";

        const badge = document.createElement("span");
        badge.textContent = "🏠"; // icône maison
        badge.title = "Je possède cette marque postale";

        badge.style.position = "absolute";
        badge.style.top = "4px";
        badge.style.left = "4px";
        badge.style.fontSize = "0.8em";
        badge.style.background = "white";
        badge.style.borderRadius = "4px";
        badge.style.padding = "2px";
        badge.style.boxShadow = "0 0 2px rgba(0,0,0,0.5)";
        badge.style.color = "green";

        cell.appendChild(badge);
    });
});






// =============================================================
// SCRIPT : Marges ciblées pour les flèches simples « et »
// Objectif : appliquer uniquement aux flèches simples seules
// =============================================================

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les éléments .page-item dans la pagination
  const paginationItems = document.querySelectorAll(".pagination .page-item");

  paginationItems.forEach((item) => {
    // Trouver le lien contenu dans chaque .page-item
    const link = item.querySelector("a.page-link");

    if (!link) return;

    // Récupérer le contenu texte du lien
    const content = link.textContent.trim();

    // Appliquer une marge spécifique si le contenu est exactement «
    if (content === "«") {
      item.style.margin = "0 -2px 0 0"; // Marge droite uniquement
    }

    // Appliquer une marge spécifique si le contenu est exactement »
    if (content === "»") {
      item.style.margin = "0 0 0 -39px"; // Marge gauche uniquement
    }

    // Si le lien contient «« ou »» ou du texte supplémentaire, rien n'est appliqué
  });
});









// ===============================
// Script d'insertion du champ de recherche
// entre les boutons « et » dans la pagination
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne la pagination (la liste <ul>)
  const pagination = document.querySelector("ul.pagination");
  if (!pagination) return; // Si la pagination n'existe pas, on ne fait rien

  // Supprime tout champ de recherche existant pour éviter les doublons
  const existingInput = document.querySelector("#villeInput");
  if (existingInput) {
    const liToRemove = existingInput.closest("li"); // Trouve le <li> parent
    if (liToRemove) liToRemove.remove(); // Supprime l'ancien champ s'il existe
  }

  // Crée une nouvelle cellule <li> pour contenir le champ de recherche
  const villeInputLi = document.createElement("li");
  villeInputLi.className = "page-item";
  villeInputLi.style.display = "flex";
  villeInputLi.style.alignItems = "center"; // Aligne verticalement le champ

  // Crée le conteneur dropdown (utile pour les suggestions si nécessaire)
  const dropdownDiv = document.createElement("div");
  dropdownDiv.className = "dropdown";

  // Crée le champ de saisie <input>
  const input = document.createElement("input");
  input.type = "text";
  input.id = "villeInput"; // ID unique pour retrouver le champ
  input.placeholder = "Tapez le nom d'une ville"; // Texte par défaut
  input.setAttribute("aria-label", "Champ de recherche pour une ville"); // Accessibilité
  input.style.height = "37px";
  input.style.width = "200px";
  input.style.border = "3px solid #e08318";
  input.style.textAlign = "center";
  input.style.boxSizing = "border-box";

  // Crée le conteneur déroulant des suggestions (vide ici)
  const dropdownContent = document.createElement("div");
  dropdownContent.id = "dropdownContent";
  dropdownContent.className = "dropdown-content scrollable-content";
  dropdownContent.setAttribute("aria-live", "polite"); // Accessibilité (annonce des suggestions)

  // Assemble le champ et le contenu dropdown
  dropdownDiv.appendChild(input);
  dropdownDiv.appendChild(dropdownContent);
  villeInputLi.appendChild(dropdownDiv);

  // Insertion du <li> juste après le 2ᵉ bouton de la pagination
  // [««] [«] → [champ ici] ← [»] [»»]
  const items = pagination.querySelectorAll("li");
  if (items.length >= 4) {
    pagination.insertBefore(villeInputLi, items[2]); // Insère à la bonne place
  } else {
    pagination.appendChild(villeInputLi); // Si pas assez de boutons, ajoute à la fin
  }
});





// ==============================
// Script : Ajout automatique des rôles ARIA aux balises principales
// Objectif : améliorer l'accessibilité sans modifier le HTML original
// ==============================

document.addEventListener("DOMContentLoaded", function () {
  // Tableau des éléments HTML à cibler avec leur rôle ARIA recommandé
  const rolesToAdd = [
    { selector: "header", role: "banner" },          // Le <header> représente l'en-tête principal
    { selector: "nav", role: "navigation" },         // Le <nav> est une barre de navigation
    { selector: "main", role: "main" },              // Le <main> contient le contenu principal
    { selector: "footer", role: "contentinfo" }      // Le <footer> contient les infos de bas de page
  ];

  // Parcourt chaque élément à traiter
  rolesToAdd.forEach(({ selector, role }) => {
    const el = document.querySelector(selector); // Sélectionne l'élément HTML (ex: <nav>)
    if (el && !el.hasAttribute("role")) {        // Vérifie s'il existe et n'a pas encore de rôle
      el.setAttribute("role", role);             // Ajoute le rôle ARIA correspondant
    }
  });

  // Ajout spécial : rôle "search" autour du champ de recherche
  const searchInput = document.querySelector("#villeInput"); // Cible le champ de recherche
  if (searchInput) {
    const wrapper = searchInput.closest("form, div"); // Trouve le conteneur le plus proche (form ou div)
    if (wrapper && !wrapper.hasAttribute("role")) {
      wrapper.setAttribute("role", "search");         // Ajoute role="search" si manquant
    }
  }
});



// ==========================================
// 📌 Historique persistant des villes visitées (max 5, reset session)
// Affiche toutes les villes visitées sous forme de liens cliquables
// Scroll vertical dès que la liste dépasse 2 lignes
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Réinitialiser l'historique si nouvelle session
  if (!sessionStorage.getItem("sessionActive")) {
    localStorage.removeItem("villesRecemmentVues");
    sessionStorage.setItem("sessionActive", "true");
  }

  const titreVille = document.querySelector("h2 a");
  if (!titreVille) return;

  const nomVille = titreVille.textContent.trim();
  const urlVille = window.location.pathname;

  let historique = JSON.parse(localStorage.getItem("villesRecemmentVues")) || [];

  // Supprime doublon (même nom + même URL)
  historique = historique.filter(v => !(v.nom === nomVille && v.url === urlVille));

  // Ajoute la ville en tête
  historique.unshift({ nom: nomVille, url: urlVille });

  // Limite à 5 villes max
  historique = historique.slice(0, 5);

  // Sauvegarde mise à jour
  localStorage.setItem("villesRecemmentVues", JSON.stringify(historique));

  // Bloc d'affichage
  const bloc = document.createElement("div");
  bloc.id = "historique-villes";
  Object.assign(bloc.style, {
    position: "fixed",
    bottom: "45px",
    right: "1600px",
    width: "200px",
    maxHeight: "1200px",
    overflowY: "auto",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "8px",
    fontSize: "13px",
    zIndex: "10000",
    boxShadow: "0 0 4px rgba(0,0,0,0.2)",
    borderRadius: "6px"
  });

  const titre = document.createElement("div");
  titre.textContent = "📜 Villes visitées :";
  titre.style.fontWeight = "bold";
  titre.style.marginBottom = "6px";
  bloc.appendChild(titre);

  historique.forEach(v => {
    const lien = document.createElement("a");
    lien.href = v.url;
    lien.textContent = "• " + v.nom;
    Object.assign(lien.style, {
      display: "block",
      margin: "2px 0px",
      color: "#0077aa",
      textDecoration: "none",
      wordBreak: "break-word"
    });
    bloc.appendChild(lien);
  });

  document.body.appendChild(bloc);
});

// 📦 Optimisation du chargement des images : Lazy Loading
// Ce script applique à toutes les images de la page le chargement différé (lazy loading)
// Cela permet de charger les images uniquement lorsqu'elles entrent dans le champ de vision de l'utilisateur,
// ce qui améliore les performances et réduit la consommation de données.

document.querySelectorAll('img').forEach(img => {
  img.loading = 'lazy'; // Attribut HTML5 natif pour le chargement différé
});












// === IDENTIFIANT UNIQUE PAR PAGE ===
const pageKey = "blocNote_" + window.location.pathname;

// === OVERLAY FOND SOMBRE ===
const overlay = document.createElement("div");
Object.assign(overlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "9997",
  display: "none"
});

// === BOUTON FLOTANT ===
const toggleBtn = document.createElement("div");
toggleBtn.style.position = "fixed";
toggleBtn.style.top = window.innerWidth < 600 ? "auto" : "150px";
toggleBtn.style.bottom = window.innerWidth < 600 ? "20px" : "auto";
toggleBtn.style.right = "38px";
toggleBtn.style.zIndex = "9999";
toggleBtn.style.padding = "3px 8px";
toggleBtn.style.borderRadius = "10px";
toggleBtn.style.background = "#4a90e2";
toggleBtn.style.color = "#fff";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.textAlign = "center";
toggleBtn.style.fontFamily = "sans-serif";
toggleBtn.style.fontSize = "9px";
toggleBtn.style.border = "2px solid #1d5fb3";
toggleBtn.style.boxShadow = "2px 2px 8px rgba(0,0,0,0.3)";
toggleBtn.style.transition = "all 0.3s ease";
toggleBtn.style.userSelect = "none";
toggleBtn.style.minWidth = "50px";

const arrowDiv = document.createElement("div");
arrowDiv.id = "btnArrow";
arrowDiv.style.fontSize = "13px";
arrowDiv.style.lineHeight = "1";
arrowDiv.style.transition = "transform 0.3s ease";
arrowDiv.textContent = "🡆";

const labelDiv = document.createElement("div");
labelDiv.style.marginTop = "0px";
labelDiv.style.fontSize = "9px";
labelDiv.textContent = "📜 Note historique";

toggleBtn.appendChild(arrowDiv);
toggleBtn.appendChild(labelDiv);

// === PANEL LATÉRAL ===
const sidePanel = document.createElement("div");
Object.assign(sidePanel.style, {
  position: "fixed",
  top: "0",
  right: "0",
  height: "100%",
  width: "30%",
  background: "#f9f3e9",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  padding: "20px",
  zIndex: "9998",
  overflowY: "auto",
  transform: "translateX(100%)",
  transition: "transform 0.4s ease-in-out"
});
sidePanel.setAttribute("role", "complementary");
sidePanel.setAttribute("aria-label", "Note historique de la ville");

sidePanel.innerHTML = `
  <div style="text-align: center;">
    <h2 style="margin: 20px auto; font-family: 'Georgia', serif; color:#5b4636; text-align: center;">Note historique</h2>
  </div>
  <textarea id="blocNote" readonly style="
    width:100%;
    height:1000px;
    background: #fdf6e3;
    color: #5b4636;
    border: 2px solid #cbb894;
    border-radius: 5px;
    padding:12px;
    font-family: 'Georgia', serif;
    font-size: 14px;
    line-height: 1.5;
    resize: none;
    background-image: linear-gradient(rgba(255,255,224,0.5) 1px, transparent 1px);
    background-size: 100% 30px;
  "></textarea>
`;

// === INSERTION ET FONCTIONNEMENT ===
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(overlay);
  document.body.appendChild(toggleBtn);
  document.body.appendChild(sidePanel);

  const textarea = document.getElementById("blocNote");
  let tries = 0;

  const chargerTexte = () => {
    if (typeof window.blocNoteTexteInitial === "string") {
      textarea.value = window.blocNoteTexteInitial;
      textarea.focus();
    } else {
      tries++;
      if (tries < 20) setTimeout(chargerTexte, 100);
      else textarea.value = "Note introuvable.";
    }
  };
  chargerTexte();

  if (typeof jQuery === "undefined") {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    script.onload = initToggle;
    document.head.appendChild(script);
  } else {
    initToggle();
  }
});

// === TOGGLE EN jQUERY ===
function initToggle() {
  const $toggleBtn = $(toggleBtn);
  const $sidePanel = $(sidePanel);
  const $overlay = $(overlay);
  const $arrow = $("#btnArrow");
  const $closeBtn = $("#closePanel");
  let panelVisible = false;

  const isMobile = () => window.innerWidth <= 768;

  function openPanel() {
    panelVisible = true;
    if (isMobile()) {
      $("table").fadeOut(200);
      $overlay.show();
    }

    if (isMobile()) {
      $sidePanel.css({ width: "100%", transform: "translateX(0%)" });
    } else {
      $sidePanel.css({ width: "30%", transform: "translateX(0%)" });
    }
    $arrow.text("🡄").css("transform", "rotate(180deg)");
    $toggleBtn.css({ background: "#2c6ecb", borderColor: "#1b4e9b" });
    sessionStorage.setItem("panelVisible", "true");
  }

  function closePanel() {
    panelVisible = false;
    if (isMobile()) {
      $("table").fadeIn(200);
      $overlay.hide();
    }
    $sidePanel.css("transform", "translateX(100%)");
    $arrow.text("🡆").css("transform", "rotate(0deg)");
    $toggleBtn.css({ background: "#4a90e2", borderColor: "#1d5fb3" });
    sessionStorage.setItem("panelVisible", "false");
  }

  $toggleBtn.on("click", function (e) {
    e.stopPropagation();
    if (panelVisible) closePanel();
    else openPanel();
  });

  $overlay.on("click", closePanel);
  $closeBtn.on("click", closePanel);

  $sidePanel.on("click", function (e) {
    e.stopPropagation();
  });

  if (sessionStorage.getItem("panelVisible") === "true") {
    openPanel();
  }
}









