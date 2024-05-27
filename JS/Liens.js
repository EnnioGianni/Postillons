document.addEventListener("DOMContentLoaded", function() {
    // Définir un tableau d'objets contenant les détails de chaque lien
    const liens = [
        {
            href: "https://www.academiedephilatelie.fr/",
            title: "Liens vers le site de L'Accademiede philatelie",
            src: "../../../La Poste/logo/academieDePhilatelie.png",
            alt: "Accademiede philatelie",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.jfbphilatelie.com/",
            title: "JEAN FRANCOIS BRUN",
            src: "../../../La Poste/logo/1JFB-modified.png",
            alt: "JEAN FRANCOIS BRUN",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://unionmarcophile.fr/",
            title: "L’UNION MARCOPHILE",
            src: "../../../La Poste/logo/unionMarcophile.png",
            alt: "L’UNION MARCOPHILE",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.museedelaposte.fr/fr",
            title: "Musée De La Poste",
            src: "../../../La Poste/logo/muse DeLaPoste.png",
            alt: "Musée De La Poste",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.accademiadiposta.it/",
            title: "Accademied'italie",
            src: "../../../La Poste/logo/Accademied'italie.png",
            alt: "Accademied'italie",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://marcophilie.org/index.html",
            title: "Marcophilie",
            src: "../../../La Poste/logo/Marques postales.png",
            alt: "Marcophilie",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://aqep.net/",
            title: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES",
            src: "../../../La Poste/logo/Quebec.png",
            alt: "ACADÉMIE QUÉBÉCOISE D’ÉTUDES PHILATÉLIQUES",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.academiebelgium.be/fr/",
            title: "Académie Royale de Philatélie de Belgique",
            src: "../../../La Poste/logo/Academie de Philatelie Belge.png",
            alt: "Académie Royale de Philatélie de Belgique",
            width: "auto",
            height: "60px"
        },
        {
            href: "https://www.bnf.fr/fr",
            title: "Gallica",
            src: "../../../La Poste/logo/gallica.png",
            alt: "Gallica",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.letimbreclassique.com/",
            title: "Histoire Postale – Jamet Baudot Pothion",
            src: "../../../La Poste/logo/Pothion.png",
            alt: "Histoire Postale – Jamet Baudot Pothion",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.ffap.net/index.php",
            title: "Fédération Française des Associations Philatéliques",
            src: "../../../La Poste/logo/FFAP.png",
            alt: "Fédération Française des Associations Philatéliques",
            width: "auto",
            height: "50px"
        },
        {
            href: "http://www.aephil.com/fr/default.asp",
            title: "Académie européenne de philatélie",
            src: "../../../La Poste/logo/AEP.png",
            alt: "Académie européenne de philatélie",
            width: "auto",
            height: "50px"
        },
        {
            href: "https://www.timbres-de-france.com/philatelie/liste_cote.php",
            title: "Cote des Timbres de France",
            src: "../../../La Poste/logo/Timbres_de_France.png",
            alt: "timbres-de-france",
            width: "auto",
            height: "50px"
        }
    ];

    // Sélectionner l'élément tbody dans le document HTML où les lignes seront insérées
    const tableBody = document.getElementById("links-table");
    // Créer une nouvelle ligne de tableau
    const row = document.createElement("tr");

    // Pour chaque lien dans le tableau
    liens.forEach(lien => {
        // Créer une nouvelle cellule de tableau
        const cell = document.createElement("th");
        cell.style.color = "black"; // Définir la couleur du texte à noir
        cell.style.border = "none"; // Supprimer la bordure de la cellule
        cell.style.textAlign = "center"; // Centrer le contenu de la cellule

        // Créer un élément <a> pour le lien
        const anchor = document.createElement("a");
        anchor.href = lien.href; // Définir l'URL du lien
        anchor.title = lien.title; // Définir le titre du lien
        anchor.classList.add("title-tip", "title-tip-rigt"); // Ajouter des classes CSS
        anchor.target = "_blank"; // Ouvrir le lien dans un nouvel onglet

        // Créer un élément <img> pour l'image du lien
        const img = document.createElement("img");
        img.src = lien.src; // Définir la source de l'image
        img.alt = lien.alt; // Définir le texte alternatif de l'image
        img.style.width = lien.width; // Définir la largeur de l'image
        img.style.height = lien.height; // Définir la hauteur de l'image
        img.style.display = "inline-block"; // Afficher l'image en bloc en ligne

        // Ajouter l'image au lien
        anchor.appendChild(img);
        // Ajouter le lien à la cellule
        cell.appendChild(anchor);
        // Ajouter la cellule à la ligne
        row.appendChild(cell);
    });

    // Ajouter la ligne au corps du tableau
    tableBody.appendChild(row);
});
