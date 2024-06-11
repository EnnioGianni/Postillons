document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Jalons', url: '../../../laPosteDeLancienneFrance/Villes J/Jalons/jalons.html' },
        { name: 'Janville', url: '../../../laPosteDeLancienneFrance/Villes J/Janville/janville.html' },
        { name: 'Joigny', url: '../../../laPosteDeLancienneFrance/Villes J/Joigny/joigny.html' },
        { name: 'Joinville', url: '../../../laPosteDeLancienneFrance/Villes J/Joinville/joinville.html' },
        { name: 'Jonchery', url: '../../../laPosteDeLancienneFrance/Villes J/Jonchery/jonchery.html' },
        { name: 'Joncy', url: '../../../laPosteDeLancienneFrance/Villes J/Joncy/joncy.html' },
        { name: 'Jonzac', url: '../../../laPosteDeLancienneFrance/Villes J/Jonzac/jonzac.html' },
        { name: 'Josselin', url: '../../../laPosteDeLancienneFrance/Villes J/Josselin/josselin.html' },
        { name: 'Joyeuse', url: '../../../laPosteDeLancienneFrance/Villes J/Joyeuse/joyeuse.html' },
        { name: 'Jumieges', url: '../../../laPosteDeLancienneFrance/Villes J/Jumieges/jumieges.html' },
        { name: 'Jumillac', url: '../../../laPosteDeLancienneFrance/Villes J/Jumillac/jumillac.html' },
        { name: 'Jussey', url: '../../../laPosteDeLancienneFrance/Villes J/Jussey/jussey.html' },
        { name: 'Juvisy', url: '../../../laPosteDeLancienneFrance/Villes J/Juvisy/juvisy.html' },
        { name: 'Juzennecour', url: '../../../laPosteDeLancienneFrance/Villes J/Juzennecour/juzennecour.html' },

       
   
       
       

  
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