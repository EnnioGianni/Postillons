document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Dammartin', url: '../../../laPosteDeLancienneFrance/Villes D/Dammartin/dammartin.html' },
        { name: 'Dampierre', url: '../../../laPosteDeLancienneFrance/Villes D/Dampierre/dampierre.html' },
        { name: 'Damville', url: '../../../laPosteDeLancienneFrance/Villes D/Damville/damville.html' },
        { name: 'Damvillers', url: '../../../laPosteDeLancienneFrance/Villes D/Damvillers/damvillers.html' },
        { name: 'Dannemarie', url: '../../../laPosteDeLancienneFrance/Villes D/Dannemarie/dannemarie.html' },
        { name: 'Darney', url: '../../../laPosteDeLancienneFrance/Villes D/Darney/darney.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
        { name: '', url: '../../../laPosteDeLancienneFrance/Villes D//.html' },
      
    
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