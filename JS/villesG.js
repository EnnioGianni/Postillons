document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Gace', url: '../../../laPosteDeLancienneFrance/Villes_G/Gace/gace.html' },
        { name: 'Gaillac', url: '../../../laPosteDeLancienneFrance/Villes_G/Gaillac/gaillac.html' },
        { name: 'Gaillon', url: '../../../laPosteDeLancienneFrance/Villes_G/Gaillon/gaillon.html' },
        { name: 'Gallardon', url: '../../../laPosteDeLancienneFrance/Villes_G/Gallardon/gallardon.html' },
        { name: 'Gandelu', url: '../../../laPosteDeLancienneFrance/Villes_G/Gandelu/gandelu.html' },
        { name: 'Ganges', url: '../../../laPosteDeLancienneFrance/Villes_G/Ganges/ganges.html' },
        { name: 'Gannat', url: '../../../laPosteDeLancienneFrance/Villes_G/Gannat/gannat.html' },
        { name: 'Gap', url: '../../../laPosteDeLancienneFrance/Villes_G/Gap/gap.html' },
        { name: 'Gavray', url: '../../../laPosteDeLancienneFrance/Villes_G/Gavray/gavray.html' },
        { name: 'Genlis', url: '../../../laPosteDeLancienneFrance/Villes_G/Genlis/genlis.html' },
        { name: 'Genolhac', url: '../../../laPosteDeLancienneFrance/Villes_G/Genolhac/genolhac.html' },
        { name: 'Genouillat', url: '../../../laPosteDeLancienneFrance/Villes_G/Genouillat/genouillat.html' },
        { name: 'Gerberoy', url: '../../../laPosteDeLancienneFrance/Villes_G/Gerberoy/gerberoy.html' },
        { name: 'Gex', url: '../../../laPosteDeLancienneFrance/Villes_G/Gex/gex.html' },
        { name: 'Gien', url: '../../../laPosteDeLancienneFrance/Villes_G/Gien/gien.html' },
        { name: 'Gignac', url: '../../../laPosteDeLancienneFrance/Villes_G/Gignac/gignac.html' },
        { name: 'Gimont', url: '../../../laPosteDeLancienneFrance/Villes_G/Gimont/gimont.html' },
        { name: 'Gisors', url: '../../../laPosteDeLancienneFrance/Villes_G/Gisors/gisors.html' },
        { name: 'Givet', url: '../../../laPosteDeLancienneFrance/Villes_G/Givet/givet.html' },
        { name: 'Givry', url: '../../../laPosteDeLancienneFrance/Villes_G/Givry/givry.html' },
        { name: 'Goderville', url: '../../../laPosteDeLancienneFrance/Villes_G/Goderville/godeville.html' },
        { name: 'Gondrecourt', url: '../../../laPosteDeLancienneFrance/Villes_G/Gondrecourt/gondrecourt.html' },
        { name: 'Gonesse', url: '../../../laPosteDeLancienneFrance/Villes_G/Gonesse/gonesse.html' },
        { name: 'Gonfaron', url: '../../../laPosteDeLancienneFrance/Villes_G/Gonfaron/gonfaron.html' },
        { name: 'Gourdon', url: '../../../laPosteDeLancienneFrance/Villes_G/Gourdon/gourdon.html' },
        { name: 'GournayEnBray', url: '../../../laPosteDeLancienneFrance/Villes_G/GournayEnBray/gournayEnBray.html' },
        { name: 'GranceyLeChateau', url: '../../../laPosteDeLancienneFrance/Villes_G/GranceyLeChateau/garnceyLeChateau.html' },
        { name: 'GrandPre', url: '../../../laPosteDeLancienneFrance/Villes_G/GrandPre/granPre.html' },
        { name: 'Grandvilliers', url: '../../../laPosteDeLancienneFrance/Villes_G/Grandvilliers/grandvilliers.html' },
        { name: 'Granges', url: '../../../laPosteDeLancienneFrance/Villes_G/Granges/granges.html' },
        { name: 'Granville', url: '../../../laPosteDeLancienneFrance/Villes_G/Granville/granville.html' },
        { name: 'Grasse', url: '../../../laPosteDeLancienneFrance/Villes_G/Grasse/grasse.html' },
        { name: 'Grave', url: '../../../laPosteDeLancienneFrance/Villes_G/Grave/grave.html' },
        { name: 'Gravelines', url: '../../../laPosteDeLancienneFrance/Villes_G/Gravelines/gravelines.html' },
        { name: 'Gravelle', url: '../../../laPosteDeLancienneFrance/Villes_G/Gravelle/laGravelle.html' },
        { name: 'Gray', url: '../../../laPosteDeLancienneFrance/Villes_G/Gray/gray.html' },
        { name: 'Grenade', url: '../../../laPosteDeLancienneFrance/Villes_G/Grenade/grenade.html' },
        { name: 'GrenadeSurLadour', url: '../../../laPosteDeLancienneFrance/Villes_G/GrenadeSurLadour/grenadeSurLadour.html' },
        { name: 'Grenoble', url: '../../../laPosteDeLancienneFrance/Villes_G/Grenoble/grenoble.html' },
        { name: 'Grignan', url: '../../../laPosteDeLancienneFrance/Villes_G/Grignan/grignan.html' },
        { name: 'Grignols', url: '../../../laPosteDeLancienneFrance/Villes_G/Grignols/grignols.html' },
        { name: 'Grisolles', url: '../../../laPosteDeLancienneFrance/Villes_G/Grisolles/grisolles.html' },
        { name: 'Grolle', url: '../../../laPosteDeLancienneFrance/Villes_G/Grolle/grolles.html' },
        { name: 'GueCharroux', url: '../../../laPosteDeLancienneFrance/Villes_G/GueCharroux/gueCharroux.html' },
        { name: 'Guemene', url: '../../../laPosteDeLancienneFrance/Villes_G/Guemene/guemene.html' },
        { name: 'Guerande', url: '../../../laPosteDeLancienneFrance/Villes_G/Guerande/guerande.html' },
        { name: 'Guerche', url: '../../../laPosteDeLancienneFrance/Villes_G/Guerche/guerche.html' },
        { name: 'Gueret', url: '../../../laPosteDeLancienneFrance/Villes_G/Gueret/gueret.html' },
        { name: 'GuinesEnBrie', url: '../../../laPosteDeLancienneFrance/Villes_G/GuinesEnBrie/guinesEnBrie.html' },
        { name: 'Guingamp', url: '../../../laPosteDeLancienneFrance/Villes_G/Guingamp/guingamp.html' },
        { name: 'Guiscard', url: '../../../laPosteDeLancienneFrance/Villes_G/Guiscard/guiscard.html' },
        { name: 'Guise', url: '../../../laPosteDeLancienneFrance/Villes_G/Guise/guise.html' },
        { name: 'GY', url: '../../../laPosteDeLancienneFrance/Villes_G/GY/gy.html' },

  
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