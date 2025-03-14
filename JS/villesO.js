document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Ile-Doleron', url:'../../../laPosteDeLancienneFrance/Villes O/Ile-Doleron/ileDoleron.html' },
        { name: 'Les-Ormes', url:'../../../laPosteDeLancienneFrance/Villes O/Les-Ormes/lesOrmes.html' },
        { name: 'Obernay', url:'../../../laPosteDeLancienneFrance/Villes O/Obernay/obernay.html' },
        { name: 'Olette', url:'../../../laPosteDeLancienneFrance/Villes O/Olette/olette.html' },
        { name: 'Ollioules', url:'../../../laPosteDeLancienneFrance/Villes O/Ollioules/ollioules.html' },
        { name: 'Oloron', url:'../../../laPosteDeLancienneFrance/Villes O/Oloron/Oloron.html' },
        { name: 'Orange', url:'../../../laPosteDeLancienneFrance/Villes O/Orange/orange.html' },
        { name: 'Orbais', url:'../../../laPosteDeLancienneFrance/Villes O/Orbais/orbais.html' },
        { name: 'Orbec', url:'../../../laPosteDeLancienneFrance/Villes O/Orbec/orbec.html' },
        { name: 'Orchies', url:'../../../laPosteDeLancienneFrance/Villes O/Orchies/orchies.html' },
        { name: 'Orgelet', url:'../../../laPosteDeLancienneFrance/Villes O/Orgelet/orgelet.html' },
        { name: 'Orgon', url:'../../../laPosteDeLancienneFrance/Villes O/Orgon/orgon.html' },
        { name: 'Origny-Saint-Benoite', url:'../../../laPosteDeLancienneFrance/Villes O/Origny-Saint-Benoite/origny-Saint-Benoite.html' },
        { name: 'Orleans', url:'../../../laPosteDeLancienneFrance/Villes O/Orleans/orleans.html' },
        { name: 'Ornans', url:'../../../laPosteDeLancienneFrance/Villes O/Ornans/ornans.html' },
        { name: 'Orsay', url:'../../../laPosteDeLancienneFrance/Villes O/Orsay/orsay.html' },
        { name: 'Orsennes', url:'../../../laPosteDeLancienneFrance/Villes O/Orsennes/orsennes.html' },
        { name: 'Orthez', url:'../../../laPosteDeLancienneFrance/Villes O/Orthez/orthez.html' },
        { name: 'Oudon', url:'../../../laPosteDeLancienneFrance/Villes O/Oudon/oudon.html' },
        { name: 'Oulchy-le-Chateau', url:'../../../laPosteDeLancienneFrance/Villes O/Oulchy-le-Chateau/oulchy-le-Chateau.html' },
        { name: 'Ousson', url:'../../../laPosteDeLancienneFrance/Villes O/Ousson/ousson.html' },
        { name: 'Ozoir-la-Ferrieres', url:'../../../laPosteDeLancienneFrance/Villes O/Ozoir-la-Ferrieres/ozoir-la-Ferrieres.html' },
    
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