document.addEventListener("DOMContentLoaded", function () {
    const PIXELS_PER_MM = 3.78; // Conversion mm → px (96 DPI)
    const STORAGE_EXPIRATION = 86400000; // 24 heures en millisecondes
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
            sessionStorage.removeItem(src); // Supprimer les données expirées
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
        let src = img.currentSrc || img.src; // Prend en compte `srcset` si présent

        let cachedRatio = getCachedRatio(src);
        if (cachedRatio) {
            img.style.width = `${widthPX}px`;
            img.style.height = `${widthPX / cachedRatio}px`;
            return;
        }

        if (img.complete && img.naturalWidth) {
            let ratio = img.naturalWidth / img.naturalHeight;
            cacheRatio(src, ratio);
            img.style.width = `${widthPX}px`;
            img.style.height = `${widthPX / ratio}px`;
            return;
        }

        let tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            let ratio = tempImg.width / tempImg.height;
            cacheRatio(src, ratio);
            img.style.width = `${widthPX}px`;
            img.style.height = `${widthPX / ratio}px`;
        };
    }

    function processImages() {
        let images = document.getElementsByTagName("img"); // Plus rapide que `querySelectorAll`
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
        requestAnimationFrame(() => { // Optimisation pour ne pas bloquer le thread principal
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
});
