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