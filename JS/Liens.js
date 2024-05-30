document.addEventListener("DOMContentLoaded", function() {
    // Définir un tableau d'objets contenant les liens et les informations sur les logos
    const liens = [
        {
            href: "https://www.academiedephilatelie.fr/",
            title: "Liens vers le site de L'Accademiede philatelie",
            src: "../../../La Poste/logo/academieDePhilatelie.png",
            alt: "Accademiede philatelie"
        },
        {
            href: "https://www.jfbphilatelie.com/",
            title: "JEAN FRANCOIS BRUN",
            src: "../../../La Poste/logo/1JFB-modified.png",
            alt: "JEAN FRANCOIS BRUN"
        },
        {
            href: "https://unionmarcophile.fr/",
            title: "L’UNION MARCOPHILE",
            src: "../../../La Poste/logo/unionMarcophile.png",
            alt: "L’UNION MARCOPHILE"
        },
        {
            href: "https://www.museedelaposte.fr/fr",
            title: "Musée De La Poste",
            src: "../../../La Poste/logo/muse DeLaPoste.png",
            alt: "Musée De La Poste"
        },
        {
            href: "https://www.accademiadiposta.it/",
            title: "Accademied'italie",
            src: "../../../La Poste/logo/Accademied'italie.png",
            alt: "Accademied'italie"
        },
        {
            href: "https://marcophilie.org/index.html",
            title: "Marcophilie",
            src: "../../../La Poste/logo/Marques postales.png",
            alt: "Marcophilie"
        },
        {
            href: "https://aqep.net/",
            title: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES",
            src: "../../../La Poste/logo/Quebec.png",
            alt: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES"
        },
        {
            href: "https://www.academiebelgium.be/fr/",
            title: "Académie Royale de Philatélie de Belgique",
            src: "../../../La Poste/logo/Academie de Philatelie Belge.png",
            alt: "Académie Royale de Philatélie de Belgique"
        },
        {
            href: "https://www.bnf.fr/fr",
            title: "Gallica",
            src: "../../../La Poste/logo/gallica.png",
            alt: "Gallica"
        },
        {
            href: "https://www.letimbreclassique.com/",
            title: "Histoire Postale – Jamet Baudot Pothion",
            src: "../../../La Poste/logo/Pothion.png",
            alt: "Histoire Postale – Jamet Baudot Pothion"
        },
        {
            href: "https://www.ffap.net/index.php",
            title: "Fédération Française des Associations Philatéliques",
            src: "../../../La Poste/logo/FFAP.png",
            alt: "Fédération Française des Associations Philatéliques"
        },
        {
            href: "http://www.aephil.com/fr/default.asp",
            title: "Académie européenne de philatélie",
            src: "../../../La Poste/logo/AEP.png",
            alt: "Académie européenne de philatélie"
        },
        {
            href: "https://www.timbres-de-france.com/philatelie/liste_cote.php",
            title: "Cote des Timbres de France",
            src: "../../../La Poste/logo/Timbres_de_France.png",
            alt: "timbres-de-france"
        }
    ];

    // Créer et injecter les styles CSS dans le document
    const style = document.createElement("style");
    style.innerHTML = `
        .logo-img {
            width: auto;
            height: 40px;
        }
        @media (max-width: 600px) {
            .logo-img {
                height: 60px;
            }
        }
        .scroll-container {
            overflow-x: auto;
            white-space: nowrap;
            width: 100%;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center; /* Centrer les logos horizontalement */
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch; /* Pour un défilement fluide sur les appareils iOS */
        }
        .scroll-container::-webkit-scrollbar {
            display: none; /* Masquer la barre de défilement par défaut */
        }
        @media (max-width: 600px) {
            .scroll-container::-webkit-scrollbar {
                display: block; /* Afficher la barre de défilement sur les petits écrans */
            }
        }
        @media (max-width: 450px) {
            .scroll-container::-webkit-scrollbar {
                display: block; /* Afficher la barre de défilement sur les écrans de 450px */
            }
        }
        @media (max-width: 300px) {
            .scroll-container::-webkit-scrollbar {
                display: block; /* Afficher la barre de défilement sur les écrans de 300px */
            }
        }
        .logo-cell {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            height: 100%;
        }
    `;
    document.head.appendChild(style);

    // Créer un conteneur div pour le défilement horizontal
    const container = document.createElement("div");
    container.className = "scroll-container";

    // Créer un div pour contenir les logos
    const table = document.createElement("div");
    table.style.display = "flex";
    table.style.width = "auto";
    table.style.height = "60px";
    table.style.gap = "20px"; // Ajouter un espace entre les logos

    // Ajouter des cellules avec les logos
    liens.forEach(lien => {
        // Créer une cellule pour chaque logo
        const cell = document.createElement("div");
        cell.className = "logo-cell";

        // Créer un lien (anchor) pour chaque logo
        const anchor = document.createElement("a");
        anchor.href = lien.href;
        anchor.title = lien.title;
        anchor.classList.add("title-tip", "title-tip-right");
        anchor.target = "_blank"; // Ouvrir le lien dans un nouvel onglet

        // Créer une image pour chaque logo
        const img = document.createElement("img");
        img.src = lien.src;
        img.alt = lien.alt;
        img.className = "logo-img"; // Appliquer la classe logo

        // Ajouter l'image à l'ancre, puis l'ancre à la cellule
        anchor.appendChild(img);
        cell.appendChild(anchor);
        // Ajouter la cellule au tableau (table)
        table.appendChild(cell);
    });

    // Ajouter le tableau de logos au conteneur
    container.appendChild(table);
    // Récupérer l'élément qui contiendra le conteneur
    const linksTable = document.getElementById("links-table");
    linksTable.style.margin = "0"; // Minimiser l'espace
    // Ajouter le conteneur à l'élément
    linksTable.appendChild(container);

    // Ajouter un défilement automatique
    function autoScroll() {
        // Déplacer le conteneur vers la droite
        container.scrollLeft += 10;
        // Réinitialiser la position de défilement à zéro lorsque le dernier logo est atteint
        if (container.scrollLeft >= (table.scrollWidth - container.clientWidth)) {
            container.scrollLeft = 0;
        }
    }

    // Définir l'intervalle de défilement automatique
    setInterval(autoScroll, 10); // Ajuster la vitesse du défilement ici (plus petit est le nombre, plus rapide est le défilement)
});
