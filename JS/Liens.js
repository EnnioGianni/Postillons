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

    const tableBody = document.getElementById("links-table");
    const row = document.createElement("tr");

    liens.forEach(lien => {
        const cell = document.createElement("th");
        cell.style.color = "black";
        cell.style.border = "none";
        cell.style.textAlign = "center";

        const anchor = document.createElement("a");
        anchor.href = lien.href;
        anchor.title = lien.title;
        anchor.classList.add("title-tip", "title-tip-right");
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = lien.src;
        img.alt = lien.alt;
        img.style.width = lien.width;
        img.style.height = lien.height;
        img.style.display = "inline-block";

        anchor.appendChild(img);
        cell.appendChild(anchor);
        row.appendChild(cell);
    });

    tableBody.appendChild(row);

    function adjustLayout() {
        const viewportWidth = window.innerWidth;
        const cells = Array.from(row.children);

        if (viewportWidth <= 468) { // Tablet and smaller devices
            cells.forEach(cell => {
                cell.style.display = "block";
                cell.style.width = "100%";
                cell.style.marginBottom = "10px";
            });
        } else {
            cells.forEach(cell => {
                cell.style.display = "table-cell";
                cell.style.width = "";
                cell.style.marginBottom = "";
            });
        }
    }

    window.addEventListener("resize", adjustLayout);
    adjustLayout();
});
