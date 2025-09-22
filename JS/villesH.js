document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Habsheim', url: '../../../laPosteDeLancienneFrance/Villes_H/Habsheim/habsheim.html' },
        { name: 'Haguenau', url: '../../../laPosteDeLancienneFrance/Villes_H/Haguenau/haguenau.html' },
        { name: 'Ham', url: '../../../laPosteDeLancienneFrance/Villes_H/Ham/ham.html' },
        { name: 'Harcourt', url: '../../../laPosteDeLancienneFrance/Villes_H/Harcourt/harcourt.html' },
        { name: 'Harfleur', url: '../../../laPosteDeLancienneFrance/Villes_H/Harfleur/harfleur.html' },
        { name: 'Hautefort', url: '../../../laPosteDeLancienneFrance/Villes_H/Hautefort/hautefort.html' },
        { name: 'Le Havre', url: '../../../laPosteDeLancienneFrance/Villes_H/Havre/leHavre.html' },
        { name: 'La Haye', url: '../../../laPosteDeLancienneFrance/Villes_H/Haye/LaHaye.html' },
        { name: 'La Haye-Du-Puits', url: '../../../laPosteDeLancienneFrance/Villes_H/HayeDuPuits/laHayeDuPuits.html' },
        { name: 'Hazebrouck', url: '../../../laPosteDeLancienneFrance/Villes_H/Hazebrouck/hazebrouck.html' },
        { name: 'Hede', url: '../../../laPosteDeLancienneFrance/Villes_H/Hede/hede.html' },
        { name: 'Hennebont', url: '../../../laPosteDeLancienneFrance/Villes_H/Hennebont/hennebont.html' },
        { name: 'Herbaut', url: '../../../laPosteDeLancienneFrance/Villes_H/Herbaut/herbaut.html' },
        { name: 'Les Herbiers', url: '../../../laPosteDeLancienneFrance/Villes_H/Herbiers/herbiers.html' },
        { name: 'Herisson', url: '../../../laPosteDeLancienneFrance/Villes_H/Herisson/herisson.html' },
        { name: 'Hesdin', url: '../../../laPosteDeLancienneFrance/Villes_H/Hesdin/hesdin.html' },
        { name: 'Honfleur', url: '../../../laPosteDeLancienneFrance/Villes_H/Honfleur/honfleur.html' },
        { name: 'Houdan', url: '../../../laPosteDeLancienneFrance/Villes_H/Houdan/houdan.html' },
        { name: 'Huningue', url: '../../../laPosteDeLancienneFrance/Villes_H/Huningue/huningue.html' },
        { name: 'Hyeres', url: '../../../laPosteDeLancienneFrance/Villes_H/Hyeres/hyeres.html' },
       
       

  
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