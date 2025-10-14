document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Dammartin', url: '../../../laPosteDeLancienneFrance/Villes_D/Dammartin/dammartin.html' },
        { name: 'Dampierre', url: '../../../laPosteDeLancienneFrance/Villes_D/Dampierre/dampierre.html' },
        { name: 'Damville', url: '../../../laPosteDeLancienneFrance/Villes_D/Damville/damville.html' },
        { name: 'Damvillers', url: '../../../laPosteDeLancienneFrance/Villes_D/Damvillers/damvillers.html' },
        { name: 'Dannemarie', url: '../../../laPosteDeLancienneFrance/Villes_D/Dannemarie/dannemarie.html' },
        { name: 'Darney', url: '../../../laPosteDeLancienneFrance/Villes_D/Darney/darney.html' },
        { name: 'Dax', url: '../../../laPosteDeLancienneFrance/Villes_D/Dax/dax.html' },
        { name: 'Decize', url: '../../../laPosteDeLancienneFrance/Villes_D/Decize/decize.html' },
        { name: 'Delle', url: '../../../laPosteDeLancienneFrance/Villes_D/Delle/delle.html' },
        { name: 'Derval', url: '../../../laPosteDeLancienneFrance/Villes_D/Derval/derval.html' },
        { name: 'Die', url: '../../../laPosteDeLancienneFrance/Villes_D/Die/die.html' },
        { name: 'Dieppe', url: '../../../laPosteDeLancienneFrance/Villes_D/Dieppe/dieppe.html' },
        { name: 'Dieulefit', url: '../../../laPosteDeLancienneFrance/Villes_D/Dieulefit/dieulefit.html' },
        { name: 'Dieuze', url: '../../../laPosteDeLancienneFrance/Villes_D/Dieuze/dieuze.html' },
        { name: 'Digne', url: '../../../laPosteDeLancienneFrance/Villes_D/Digne/digne.html' },
        { name: 'Digoin', url: '../../../laPosteDeLancienneFrance/Villes_D/Digoin/digoin.html' },
        { name: 'Dijon', url: '../../../laPosteDeLancienneFrance/Villes_D/Dijon/dijon.html' },
        { name: 'Dinan', url: '../../../laPosteDeLancienneFrance/Villes_D/Dinan/dinan.html' },
        { name: 'Dol-De-Bretagne', url: '../../../laPosteDeLancienneFrance/Villes_D/Dol-De-Bretagne/dolDeBretagne.html' },
        { name: 'Dole', url: '../../../laPosteDeLancienneFrance/Villes_D/Dole/dole.html' },
        { name: 'Domfront', url: '../../../laPosteDeLancienneFrance/Villes_D/Domfront/domfront.html' },
        { name: 'Donchery', url: '../../../laPosteDeLancienneFrance/Villes_D/Donchery/donchery.html' },
        { name: 'Le-Donjon', url: '../../../laPosteDeLancienneFrance/Villes_D/Le-Donjon/leDonjon.html' },
        { name: 'Donnemarie', url: '../../../laPosteDeLancienneFrance/Villes_D/Donnemarie/donnemarie.html' },
        { name: 'Donzenac', url: '../../../laPosteDeLancienneFrance/Villes_D/Donzenac/donzenac.html' },
        { name: 'Donzere', url: '../../../laPosteDeLancienneFrance/Villes_D/Donzere/donzere.html' },
        { name: 'Donzy', url: '../../../laPosteDeLancienneFrance/Villes_D/Donzy/donzy.html' },
        { name: 'Le-Dorat', url: '../../../laPosteDeLancienneFrance/Villes_D/Le-Dorat/leDorat.html' },
        { name: 'Dormans', url: '../../../laPosteDeLancienneFrance/Villes_D/Dormans/dormans.html' },
        { name: 'Douai', url: '../../../laPosteDeLancienneFrance/Villes_D/Douai/douai.html' },
        { name: 'Doudeville', url: '../../../laPosteDeLancienneFrance/Villes_D/Doudeville/doudeville.html' },
        { name: 'Doue', url: '../../../laPosteDeLancienneFrance/Villes_D/Doue/doue.html' },
        { name: 'Doulevant', url: '../../../laPosteDeLancienneFrance/Villes_D/Doulevant/doulevant.html' },
        { name: 'Doullens', url: '../../../laPosteDeLancienneFrance/Villes_D/Doullens/doullens.html' },
        { name: 'Dourdan', url: '../../../laPosteDeLancienneFrance/Villes_D/Dourdan/dourdan.html' },
        { name: 'Dozule', url: '../../../laPosteDeLancienneFrance/Villes_D/Dozule/dozule.html' },
        { name: 'Draguignan', url: '../../../laPosteDeLancienneFrance/Villes_D/Draguignan/draguignan.html' },
        { name: 'Dreux', url: '../../../laPosteDeLancienneFrance/Villes_D/Dreux/dreux.html' },
        { name: 'Ducey', url: '../../../laPosteDeLancienneFrance/Villes_D/Ducey/ducey.html' },
        { name: 'Dun-En-Clermontois', url: '../../../laPosteDeLancienneFrance/Villes_D/Dun-En-Clermontois/dunEnClermontois.html' },
        { name: 'Dunkerque', url: '../../../laPosteDeLancienneFrance/Villes_D/Dunkerque/dunkerque.html' },
        { name: 'Dun-Le-Roi', url: '../../../laPosteDeLancienneFrance/Villes_D/Dun-Le-Roi/dunLeRoi.html' },
        { name: 'Durtal', url: '../../../laPosteDeLancienneFrance/Villes_D/Durtal/durtal.html' },
      
    
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