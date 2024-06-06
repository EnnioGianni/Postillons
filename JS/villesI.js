document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Ille', url: '../../../laPosteDeLancienneFrance/Villes I/Ille/ille.html' },
        { name: 'Illiers', url: '../../../laPosteDeLancienneFrance/Villes I/Illiers/illiers.html' },
        { name: 'Ingrande', url: '../../../laPosteDeLancienneFrance/Villes I/Ingrande/ingrande.html' },
        { name: 'Is-Sur-Tille', url: '../../../laPosteDeLancienneFrance/Villes I/Is_Sur_Tille/isSurTille.html' },
        { name: 'Isigny', url: '../../../laPosteDeLancienneFrance/Villes I/Isigny/isigny.html' },
        { name: 'Issoire', url: '../../../laPosteDeLancienneFrance/Villes I/Issoire/issoire.html' },
        { name: 'Issoudun', url: '../../../laPosteDeLancienneFrance/Villes I/Issoudun/issoudun.html' },
        { name: 'Ivry-Petite-Ville', url: '../../../laPosteDeLancienneFrance/Villes I/Ivry_Petite_Ville/ivryPetiteVille.html' },
        { name: 'Lisle-Adam', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Adam/lisleAdam.html' },
        { name: 'Lisle-Bouchard', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Bouchard/lisleBouchard.html' },
        { name: 'Lisle-Daix', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Daix/lisleDaix.html' },
        { name: 'Lisle-Dalby', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Dalby/lisleDalby.html' },
        { name: 'Lisle-En-Dodon', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_En_Dodon/lisleEnDodon.html' },
        { name: 'Lisle-Jourdain', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Jourdain/lisleJourdain.html' },
        { name: 'Lisle-Jourdain (80)', url: '../../../laPosteDeLancienneFrance/Villes I/Lisle_Jourdain80/lisleJourdain80.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes I//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes I//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes I//.html' },
       
   
       
       

  
// Ajoutez d'autres villes ici
    ];

    // Initialisation des liens de ville
    for (var i = 0; i < cityLinks.length; i++) {
        var link = document.createElement('a');
        link.href = cityLinks[i].url;
        link.textContent = cityLinks[i].name;
        dropdownContent.appendChild(link);
    }

    input.addEventListener('input', function () {
        var filter = input.value.toLowerCase();
        var links = dropdownContent.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            var city = links[i].textContent.toLowerCase();
            links[i].style.display = city.includes(filter) ? '' : 'none';
        }
    });

    dropdownContent.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            villeLink.innerHTML = ' &emsp;&emsp;' + target.textContent + '<i class="fas fa-caret-down"></i>';
            window.location.href = target.href;
        }
    });
});