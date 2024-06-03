document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Habsheim', url: '../../../laPosteDeLancienneFrance/Villes H/Habsheim/habsheim.html' },
        { name: 'Haguenau', url: '../../../laPosteDeLancienneFrance/Villes H/Haguenau/haguenau.html' },
        { name: 'Ham', url: '../../../laPosteDeLancienneFrance/Villes H/Ham/ham.html' },
        { name: 'Harcourt', url: '../../../laPosteDeLancienneFrance/Villes H/Harcourt/harcourt.html' },
        { name: 'Harfleur', url: '../../../laPosteDeLancienneFrance/Villes H/Harfleur/harfleur.html' },
        { name: 'Hautefort', url: '../../../laPosteDeLancienneFrance/Villes H/Hautefort/hautefort.html' },
        { name: 'Le Havre', url: '../../../laPosteDeLancienneFrance/Villes H/Havre/leHavre.html' },
        { name: 'La Haye', url: '../../../laPosteDeLancienneFrance/Villes H/Haye/LaHaye.html' },
        { name: 'La Haye-Du-Puits', url: '../../../laPosteDeLancienneFrance/Villes H/HayeDuPuits/laHayeDuPuits.html' },
        { name: 'Hazebrouck', url: '../../../laPosteDeLancienneFrance/Villes H/Hazebrouck/hazebrouck.html' },
        { name: 'Hede', url: '../../../laPosteDeLancienneFrance/Villes H/Hede/hede.html' },
        { name: 'Hennebont', url: '../../../laPosteDeLancienneFrance/Villes H/Hennebont/hennebont.html' },
        { name: 'Herbaut', url: '../../../laPosteDeLancienneFrance/Villes H/Herbaut/herbaut.html' },
        { name: 'Les Herbiers', url: '../../../laPosteDeLancienneFrance/Villes H/Herbiers/herbiers.html' },
        { name: 'Herisson', url: '../../../laPosteDeLancienneFrance/Villes H/Herisson/herisson.html' },
        { name: 'Hesdin', url: '../../../laPosteDeLancienneFrance/Villes H/Hesdin/hesdin.html' },
        { name: 'Honfleur', url: '../../../laPosteDeLancienneFrance/Villes H/Honfleur/honfleur.html' },
        { name: 'Houdan', url: '../../../laPosteDeLancienneFrance/Villes H/Houdan/houdan.html' },
        { name: 'Huningue', url: '../../../laPosteDeLancienneFrance/Villes H/Huningue/huningue.html' },
        { name: 'Hyeres', url: '../../../laPosteDeLancienneFrance/Villes H/Hyeres/hyeres.html' },
       
       

  
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