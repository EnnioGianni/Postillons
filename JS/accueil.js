document.addEventListener("DOMContentLoaded", function () {
    // Tableau d'objets pour stocker les informations sur les liens
    var menuItems = [
        { label: 'La Poste', link: '../../../La Poste/La_Poste.html' },
        { label: 'Sommaire L', link: '/VilleL/L_sommaire.html' },
        { label: 'PDF', link: '/pdf.html' },
        { label: 'Blog', link: '/blog.html' },
        { label: 'Articles', link: '/Articles.html' },
        { label: 'Contact', link: '/contact.html' },
        // Ajoutez d'autres objets au besoin
    ];

    // Sélectionnez le conteneur du menu
    var menuDropdown = document.getElementById('menuDropdown');

    // Créez et ajoutez les liens dynamiquement
    menuItems.forEach(function (menuItem) {
        var link = document.createElement('a');
        link.textContent = menuItem.label;
        link.setAttribute('href', menuItem.link);
        link.setAttribute('data-link', menuItem.link); // Vous pouvez ajouter cet attribut si nécessaire
        link.classList.add('title-tip', 'page-link');
        menuDropdown.appendChild(link);
    });

    // Styles pour l'élément Accueil
    var accueilLinkElement = document.querySelector('.dropdown1 .page-link');
    accueilLinkElement.style.textDecoration = 'none';
    accueilLinkElement.style.color = '#333';
    accueilLinkElement.style.fontWeight = 'bold';

    // Styles pour tous les liens de la liste déroulante
    var dropdownLinks = document.querySelectorAll('.dropdown1 .dropdown-content a');
    dropdownLinks.forEach(function (link) {
        link.style.textDecoration = 'none';
        link.style.color = '#333';
        link.style.fontWeight = 'bold';
    });
});
