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
        box.innerHTML = '⚠️ Attention aux fautes marquées.<br>© Les images sont la propriété du site et ne peuvent être copiées ou utilisées sans permission.';
  
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
  
  