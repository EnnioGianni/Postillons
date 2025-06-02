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
  function shrinkTextToFitCells() {
    const table = document.querySelector("table.exemple");
    if (!table) return;

    const cells = table.querySelectorAll("th, td");

    cells.forEach(cell => {
        // Appliquer style de base
        cell.style.whiteSpace = "nowrap";         // Texte sur une seule ligne
        cell.style.overflow = "hidden";           // Masque dépassement
        cell.style.textOverflow = "ellipsis";     // "..." si trop long
        cell.style.padding = "8px";
    });

    // Largeur de l'écran
    const width = window.innerWidth;

    // Calcul de la taille de police progressive
    // Exemple : entre 1200px et 300px, la taille passe de 1rem à 0.6rem
    const minFont = 0.6;
    const maxFont = 1;
    const minWidth = 300;
    const maxWidth = 1200;

    let fontSize;
    if (width <= minWidth) {
        fontSize = minFont;
    } else if (width >= maxWidth) {
        fontSize = maxFont;
    } else {
        // interpolation linéaire
        const ratio = (width - minWidth) / (maxWidth - minWidth);
        fontSize = minFont + (maxFont - minFont) * ratio;
    }

    // Appliquer la taille calculée
    cells.forEach(cell => {
        cell.style.fontSize = fontSize + "rem";
    });

    // Tableau responsive
    table.style.width = "100%";
    table.style.tableLayout = "fixed";
    table.style.borderCollapse = "collapse";
}

window.addEventListener("load", shrinkTextToFitCells);
window.addEventListener("resize", shrinkTextToFitCells);













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




// totpip sous l'image

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

      const hrefMatch = link.getAttribute('href') === "../../../proposition/index.html" &&
                        link.getAttribute('title') === "Cliquez pour agrandir" &&
                        link.getAttribute('target') === "_blank";

      const tooltipText = hrefMatch ? longText : shortText;

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
    });
  });
});

//Texte responsive


 var jq = jQuery.noConflict(); // Assure l'alias jq sans conflit avec d'autres bibliothèques

  jq(document).ready(function () {
    jq('.texte-responsive').css({
      'white-space': 'normal',
      'word-break': 'break-word',
      'overflow-wrap': 'break-word' // recommandé pour plus de compatibilité
    });
  });





