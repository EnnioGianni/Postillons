document.addEventListener("DOMContentLoaded", function() {
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

 // Créer un conteneur div pour le défilement horizontal
 const container = document.createElement("div");
//  container.style.overflowX = "scroll";
 container.style.whiteSpace = "nowrap";
 container.style.width = "100%";
 container.style.margin = "0"; // Minimiser l'espace
 container.style.display = "flex";
 container.style.alignItems = "center"; // Alignement vertical centré

 // Créer un élément div pour contenir les logos
 const table = document.createElement("div");
 table.style.display = "flex";
 table.style.width = "auto";
 table.style.margin = "0"; // Minimiser l'espace
 table.style.height = "60px"; // Hauteur réduite de la cellule
 table.style.gap = "20px"; // Ajouter un espacement entre les logos

 // Ajouter des cellules avec les logos
 liens.forEach(lien => {
     const cell = document.createElement("div");
     cell.style.color = "black";
     cell.style.border = "none";
     cell.style.textAlign = "center";
     cell.style.padding = "0"; // Minimiser l'espace autour des logos
     cell.style.margin = "0"; // Minimiser l'espace autour des logos
     cell.style.display = "flex";
     cell.style.alignItems = "center"; // Centrer les logos verticalement
     cell.style.justifyContent = "center"; // Centrer les logos horizontalement
     cell.style.height = "100%"; // S'assurer que la cellule prend toute la hauteur

     const anchor = document.createElement("a");
     anchor.href = lien.href;
     anchor.title = lien.title;
     anchor.classList.add("title-tip", "title-tip-right");
     anchor.target = "_blank";

     const img = document.createElement("img");
     img.src = lien.src;
     img.alt = lien.alt;
     img.style.width = "auto";
     img.style.height = "40px"; // Assurer que les images gardent leurs proportions
     img.style.display = "block";
     img.style.maxHeight = "100%";
     img.style.maxWidth = "100%";
     img.style.margin = "auto"; // Centrer l'image horizontalement

     anchor.appendChild(img);
     cell.appendChild(anchor);
     table.appendChild(cell);
 });

 container.appendChild(table);
 const linksTable = document.getElementById("links-table");
 linksTable.style.margin = "0"; // Minimiser l'espace
 linksTable.appendChild(container);
});