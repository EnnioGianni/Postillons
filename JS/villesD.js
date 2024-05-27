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
        { name: 'Dax', url: '../../../laPosteDeLancienneFrance/Villes D/Dax/dax.html' },
        { name: 'Decize', url: '../../../laPosteDeLancienneFrance/Villes D/Decize/decize.html' },
        { name: 'Delle', url: '../../../laPosteDeLancienneFrance/Villes D/Delle/delle.html' },
        { name: 'Derval', url: '../../../laPosteDeLancienneFrance/Villes D/Derval/derval.html' },
        { name: 'Die', url: '../../../laPosteDeLancienneFrance/Villes D/Die/die.html' },
        { name: 'Dieppe', url: '../../../laPosteDeLancienneFrance/Villes D/Dieppe/dieppe.html' },
        { name: 'Dieulefit', url: '../../../laPosteDeLancienneFrance/Villes D/Dieulefit/dieulefit.html' },
        { name: 'Dieuze', url: '../../../laPosteDeLancienneFrance/Villes D/Dieuze/dieuze.html' },
        { name: 'Digne', url: '../../../laPosteDeLancienneFrance/Villes D/Digne/digne.html' },
        { name: 'Digoin', url: '../../../laPosteDeLancienneFrance/Villes D/Digoin/digoin.html' },
        { name: 'Dijon', url: '../../../laPosteDeLancienneFrance/Villes D/Dijon/dijon.html' },
        { name: 'Dinan', url: '../../../laPosteDeLancienneFrance/Villes D/Dinan/dinan.html' },
        { name: 'Dol De Bretagne', url: '../../../laPosteDeLancienneFrance/Villes D/dolDeBretagne/dolDeBretagne.html' },
        { name: 'Dole', url: '../../../laPosteDeLancienneFrance/Villes D/Dole/dole.html' },
        { name: 'Domfront', url: '../../../laPosteDeLancienneFrance/Villes D/Domfront/domfront.html' },
        { name: 'Donchery', url: '../../../laPosteDeLancienneFrance/Villes D/Donchery/donchery.html' },
        { name: 'Donjon', url: '../../../laPosteDeLancienneFrance/Villes D/Donjon/donjon.html' },
        { name: 'Donnemarie', url: '../../../laPosteDeLancienneFrance/Villes D/Donnemarie/donnemarie.html' },
        { name: 'Donzenac', url: '../../../laPosteDeLancienneFrance/Villes D/Donzenac/donzenac.html' },
        { name: 'Donzere', url: '../../../laPosteDeLancienneFrance/Villes D/Donzere/donzere.html' },
        { name: 'Donzy', url: '../../../laPosteDeLancienneFrance/Villes D/Donzy/donzy.html' },
        { name: 'Dorat', url: '../../../laPosteDeLancienneFrance/Villes D/Dorat/dorat.html' },
        { name: 'Dormans', url: '../../../laPosteDeLancienneFrance/Villes D/Dormans/dormans.html' },
        { name: 'Douai', url: '../../../laPosteDeLancienneFrance/Villes D/Douai/douai.html' },
        { name: 'Doudeville', url: '../../../laPosteDeLancienneFrance/Villes D/Doudeville/doudeville.html' },
        { name: 'Doue', url: '../../../laPosteDeLancienneFrance/Villes D/Doue/doue.html' },
        { name: 'Doulevant', url: '../../../laPosteDeLancienneFrance/Villes D/Doulevant/doulevant.html' },
        { name: 'Doullens', url: '../../../laPosteDeLancienneFrance/Villes D/Doullens/doullens.html' },
        { name: 'Dourdan', url: '../../../laPosteDeLancienneFrance/Villes D/Dourdan/dourdan.html' },
        { name: 'Dozule', url: '../../../laPosteDeLancienneFrance/Villes D/Dozule/dozule.html' },
        { name: 'Draguignan', url: '../../../laPosteDeLancienneFrance/Villes D/Draguignan/draguignan.html' },
        { name: 'Dreux', url: '../../../laPosteDeLancienneFrance/Villes D/Dreux/dreux.html' },
        { name: 'Ducey', url: '../../../laPosteDeLancienneFrance/Villes D/Ducey/ducey.html' },
        { name: 'Dun-En-Clermontois', url: '../../../laPosteDeLancienneFrance/Villes D/DunEnClermontois/dunEnClermontois.html' },
        { name: 'Dunkerque', url: '../../../laPosteDeLancienneFrance/Villes D/Dunkerque/dunkerque.html' },
        { name: 'Dun-Le-Roi', url: '../../../laPosteDeLancienneFrance/Villes D/DunLeRoi/dunLeRoi.html' },
        { name: 'Durtal', url: '../../../laPosteDeLancienneFrance/Villes D/Durtal/durtal.html' },
      
    
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