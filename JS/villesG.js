document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Gace', url: '../../../laPosteDeLancienneFrance/Villes G/Gace/gace.html' },
        { name: 'Gaillac', url: '../../../laPosteDeLancienneFrance/Villes G/Gaillac/gaillac.html' },
        { name: 'Gaillon', url: '../../../laPosteDeLancienneFrance/Villes G/Gaillon/gaillon.html' },
        { name: 'Gallardon', url: '../../../laPosteDeLancienneFrance/Villes G/Gallardon/gallardon.html' },
        { name: 'Gandelu', url: '../../../laPosteDeLancienneFrance/Villes G/Gandelu/gandelu.html' },
        { name: 'Ganges', url: '../../../laPosteDeLancienneFrance/Villes G/Ganges/ganges.html' },
        { name: 'Gannat', url: '../../../laPosteDeLancienneFrance/Villes G/Gannat/gannat.html' },
        { name: 'Gap', url: '../../../laPosteDeLancienneFrance/Villes G/Gap/gap.html' },
        { name: 'Gavray', url: '../../../laPosteDeLancienneFrance/Villes G/Gavray/gavray.html' },
        { name: 'Genlis', url: '../../../laPosteDeLancienneFrance/Villes G/Genlis/genlis.html' },
        { name: 'Genolhac', url: '../../../laPosteDeLancienneFrance/Villes G/Genolhac/genolhac.html' },
        { name: 'Genouillat', url: '../../../laPosteDeLancienneFrance/Villes G/Genouillat/genouillat.html' },
        { name: 'Gerberoy', url: '../../../laPosteDeLancienneFrance/Villes G/Gerberoy/gerberoy.html' },
        { name: 'Gex', url: '../../../laPosteDeLancienneFrance/Villes G/Gex/gex.html' },
        { name: 'Gien', url: '../../../laPosteDeLancienneFrance/Villes G/Gien/gien.html' },
        { name: 'Gignac', url: '../../../laPosteDeLancienneFrance/Villes G/Gignac/gignac.html' },
        { name: 'Gimont', url: '../../../laPosteDeLancienneFrance/Villes G/Gimont/gimont.html' },
        { name: 'Gisors', url: '../../../laPosteDeLancienneFrance/Villes G/Gisors/gisors.html' },
        { name: 'Givet', url: '../../../laPosteDeLancienneFrance/Villes G/Givet/givet.html' },
        { name: 'Givry', url: '../../../laPosteDeLancienneFrance/Villes G/Givry/givry.html' },
        { name: 'Goderville', url: '../../../laPosteDeLancienneFrance/Villes G/Goderville/godeville.html' },
        { name: 'Gondrecourt', url: '../../../laPosteDeLancienneFrance/Villes G/Gondrecourt/gondrecourt.html' },
        { name: 'Gonesse', url: '../../../laPosteDeLancienneFrance/Villes G/Gonesse/gonesse.html' },
        { name: 'Gonfaron', url: '../../../laPosteDeLancienneFrance/Villes G/Gonfaron/gonfaron.html' },
        { name: 'Gourdon', url: '../../../laPosteDeLancienneFrance/Villes G/Gourdon/gourdon.html' },
        { name: 'GournayEnBray', url: '../../../laPosteDeLancienneFrance/Villes G/GournayEnBray/gournayEnBray.html' },
        { name: 'GranceyLeChateau', url: '../../../laPosteDeLancienneFrance/Villes G/GranceyLeChateau/garnceyLeChateau.html' },
        { name: 'GrandPre', url: '../../../laPosteDeLancienneFrance/Villes G/GrandPre/granPre.html' },
        { name: 'Grandvilliers', url: '../../../laPosteDeLancienneFrance/Villes G/Grandvilliers/grandvilliers.html' },
        { name: 'Granges', url: '../../../laPosteDeLancienneFrance/Villes G/Granges/granges.html' },
        { name: 'Granville', url: '../../../laPosteDeLancienneFrance/Villes G/Granville/granville.html' },
        { name: 'Grasse', url: '../../../laPosteDeLancienneFrance/Villes G/Grasse/grasse.html' },
        { name: 'Grave', url: '../../../laPosteDeLancienneFrance/Villes G/Grave/grave.html' },
        { name: 'Gravelines', url: '../../../laPosteDeLancienneFrance/Villes G/Gravelines/gravelines.html' },
        { name: 'Gravelle', url: '../../../laPosteDeLancienneFrance/Villes G/Gravelle/laGravelle.html' },
        { name: 'Gray', url: '../../../laPosteDeLancienneFrance/Villes G/Gray/gray.html' },
        { name: 'Grenade', url: '../../../laPosteDeLancienneFrance/Villes G/Grenade/grenade.html' },
        { name: 'GrenadeSurLadour', url: '../../../laPosteDeLancienneFrance/Villes G/GrenadeSurLadour/grenadeSurLadour.html' },
        { name: 'Grenoble', url: '../../../laPosteDeLancienneFrance/Villes G/Grenoble/grenoble.html' },
        { name: 'Grignan', url: '../../../laPosteDeLancienneFrance/Villes G/Grignan/grignan.html' },
        { name: 'Grignols', url: '../../../laPosteDeLancienneFrance/Villes G/Grignols/grignols.html' },
        { name: 'Grisolles', url: '../../../laPosteDeLancienneFrance/Villes G/Grisolles/grisolles.html' },
        { name: 'Grolle', url: '../../../laPosteDeLancienneFrance/Villes G/Grolle/grolles.html' },
        { name: 'GueCharroux', url: '../../../laPosteDeLancienneFrance/Villes G/GueCharroux/gueCharroux.html' },
        { name: 'Guemene', url: '../../../laPosteDeLancienneFrance/Villes G/Guemene/guemene.html' },
        { name: 'Guerande', url: '../../../laPosteDeLancienneFrance/Villes G/Guerande/guerande.html' },
        { name: 'Guerche', url: '../../../laPosteDeLancienneFrance/Villes G/Guerche/guerche.html' },
        { name: 'Gueret', url: '../../../laPosteDeLancienneFrance/Villes G/Gueret/gueret.html' },
        { name: 'GuinesEnBrie', url: '../../../laPosteDeLancienneFrance/Villes G/GuinesEnBrie/guinesEnBrie.html' },
        { name: 'Guingamp', url: '../../../laPosteDeLancienneFrance/Villes G/Guingamp/guingamp.html' },
        { name: 'Guiscard', url: '../../../laPosteDeLancienneFrance/Villes G/Guiscard/guiscard.html' },
        { name: 'Guise', url: '../../../laPosteDeLancienneFrance/Villes G/Guise/guise.html' },
        { name: 'GY', url: '../../../laPosteDeLancienneFrance/Villes G/GY/gy.html' },

  
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