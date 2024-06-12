document.addEventListener("DOMContentLoaded", function() {
    const liens = [
        { href: "https://www.academiedephilatelie.fr/", title: "Liens vers le site de L'Académie de philatélie", src: "../../../La Poste/logo/academieDePhilatelie.png", alt: "Académie de philatélie" },
        { href: "https://unionmarcophile.fr/", title: "L’UNION MARCOPHILE", src: "../../../La Poste/logo/unionMarcophile.png", alt: "L’UNION MARCOPHILE" },
        { href: "https://www.museedelaposte.fr/fr", title: "Musée De La Poste", src: "../../../La Poste/logo/muse DeLaPoste.png", alt: "Musée De La Poste" },
        { href: "https://www.accademiadiposta.it/", title: "Académie d'Italie", src: "../../../La Poste/logo/Accademied'italie.png", alt: "Académie d'Italie" },
        { href: "https://marcophilie.org/index.html", title: "Marcophilie", src: "../../../La Poste/logo/Marques postales.png", alt: "Marcophilie" },
        { href: "https://aqep.net/", title: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES", src: "../../../La Poste/logo/Quebec.png", alt: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES" },
        { href: "https://www.academiebelgium.be/fr/", title: "Académie Royale de Philatélie de Belgique", src: "../../../La Poste/logo/Academie de Philatelie Belge.png", alt: "Académie Royale de Philatélie de Belgique" },
        { href: "https://www.bnf.fr/fr", title: "Gallica", src: "../../../La Poste/logo/gallica.png", alt: "Gallica" },
        { href: "https://www.letimbreclassique.com/", title: "Histoire Postale – Jamet Baudot Pothion", src: "../../../La Poste/logo/Pothion.png", alt: "Histoire Postale – Jamet Baudot Pothion" },
        { href: "https://www.ffap.net/index.php", title: "Fédération Française des Associations Philatéliques", src: "../../../La Poste/logo/FFAP.png", alt: "Fédération Française des Associations Philatéliques" },
        { href: "http://www.aephil.com/fr/default.asp", title: "Académie européenne de philatélie", src: "../../../La Poste/logo/AEP.png", alt: "Académie européenne de philatélie" },
        { href: "https://www.timbres-de-france.com/philatelie/liste_cote.php", title: "Cote des Timbres de France", src: "../../../La Poste/logo/Timbres_de_France.png", alt: "Timbres de France" },
        { href: "https://www.upu.int/fr/Accueil", title: "Association mondiale pour le développement de la philatélie (AMDP)", src: "../../../La Poste/logo/Association mondiale pour le développement de la philatélie (AMDP).png", alt: "Association mondiale pour le développement de la philatélie (AMDP)" }
    ];

    const conteneur = document.createElement("div");
    conteneur.className = "scroll-container";

    const wrapper = document.createElement("div");
    wrapper.className = "logo-wrapper";

    liens.forEach(lien => {
        const ancre = document.createElement("a");
        ancre.href = lien.href;
        ancre.title = lien.title;
        ancre.target = "_blank";

        const img = document.createElement("img");
        img.src = lien.src;
        img.alt = lien.alt;
        img.className = "logo-img";
        img.title = lien.title; // Ajouter le titre ici

        ancre.appendChild(img);
        wrapper.appendChild(ancre);
    });

    conteneur.appendChild(wrapper);
    const tableLiens = document.getElementById("table-liens");
    tableLiens.style.margin = "0";
    tableLiens.appendChild(conteneur);

    // Ajouter des événements pour arrêter et reprendre le défilement
    conteneur.addEventListener("mouseover", function() {
        wrapper.style.animationPlayState = "paused";
    });

    conteneur.addEventListener("mouseout", function() {
        wrapper.style.animationPlayState = "running";
    });
});
