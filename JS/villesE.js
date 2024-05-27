document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Eclaron', url: '../../../laPosteDeLancienneFrance/Villes E/Eclaron/eclaron.html' },
        { name: 'Ecommoy', url: '../../../laPosteDeLancienneFrance/Villes E/Ecommoy/ecommoy.html' },
        { name: 'Ecouen', url: '../../../laPosteDeLancienneFrance/Villes E/Ecouen/ecouen.html' },
        { name: 'Ecouis', url: '../../../laPosteDeLancienneFrance/Villes E/Ecouis/ecouis.html' },
        { name: 'Ecure', url: '../../../laPosteDeLancienneFrance/Villes E/Ecure/ecure.html' },
        { name: 'Egreville', url: '../../../laPosteDeLancienneFrance/Villes E/Egreville/egreville.html' },
        { name: 'Elbeuf', url: '../../../laPosteDeLancienneFrance/Villes E/Elbeuf/elbeuf.html' },
        { name: 'Elne', url: '../../../laPosteDeLancienneFrance/Villes E/Elne/elne.html' },
        { name: 'Embrun', url: '../../../laPosteDeLancienneFrance/Villes E/Embrun/embrun.html' },
        { name: 'Enghien', url: '../../../laPosteDeLancienneFrance/Villes E/Enghien/enghien.html' },
        { name: 'Ensisheim', url: '../../../laPosteDeLancienneFrance/Villes E/Ensisheim/ensisheim.html' },
        { name: 'Entrevaux', url: '../../../laPosteDeLancienneFrance/Villes E/Entrevaux/entrevaux.html' },
        { name: 'Epernay', url: '../../../laPosteDeLancienneFrance/Villes E/Epernay/epernay.html' },
        { name: 'Epernon', url: '../../../laPosteDeLancienneFrance/Villes E/Epernon/epernon.html' },
        { name: 'Epinal', url: '../../../laPosteDeLancienneFrance/Villes E/Epinal/epinal.html' },
        { name: 'Ernee', url: '../../../laPosteDeLancienneFrance/Villes E/Ernee/ernee.html' },
        { name: 'Ervy', url: '../../../laPosteDeLancienneFrance/Villes E/Ervy/ervy.html' },
        { name: 'Espalion', url: '../../../laPosteDeLancienneFrance/Villes E/Espalion/espalion.html' },
        { name: 'Les Essarts', url: '../../../laPosteDeLancienneFrance/Villes E/Essarts/lesEssarts.html' },
        { name: 'Les Essarts le Roi', url: '../../../laPosteDeLancienneFrance/Villes E/Essarts72/lesEssartsLeRoi.html' },
        { name: 'Essonnes', url: '../../../laPosteDeLancienneFrance/Villes E/Essonnes/essonnes.html' },
        { name: 'Estagel', url: '../../../laPosteDeLancienneFrance/Villes E/Estagel/estagel.html' },
        { name: 'Estaires', url: '../../../laPosteDeLancienneFrance/Villes E/Estaires/estaires.html' },
        { name: 'Estissac', url: '../../../laPosteDeLancienneFrance/Villes E/Estissac/estissac.html' },
        { name: 'Etain', url: '../../../laPosteDeLancienneFrance/Villes E/Etain/etain.html' },
        { name: 'Etampes', url: '../../../laPosteDeLancienneFrance/Villes E/Etampes/etampes.html' },
        { name: 'Etoges', url: '../../../laPosteDeLancienneFrance/Villes E/Etoges/etoges.html' },
        { name: 'Etrechy', url: '../../../laPosteDeLancienneFrance/Villes E/Etrechy/Etrechy.html' },
        { name: 'Etrepagny', url: '../../../laPosteDeLancienneFrance/Villes E/Etrepagny/Etrepagny.html' },
        { name: 'Eu', url: '../../../laPosteDeLancienneFrance/Villes E/Eu/Eu.html' },
        { name: 'Evaux', url: '../../../laPosteDeLancienneFrance/Villes E/Evaux/Evaux.html' },
        { name: 'Evran', url: '../../../laPosteDeLancienneFrance/Villes E/Evran/Evran.html' },
        { name: 'Evrecy', url: '../../../laPosteDeLancienneFrance/Villes E/Evrecy/Evrecy.html' },
        { name: 'Evreux', url: '../../../laPosteDeLancienneFrance/Villes E/Evreux/Evreux.html' },
        { name: 'Excideuil', url: '../../../laPosteDeLancienneFrance/Villes E/Excideuil/Excideuil.html' },
        { name: 'Eymoutiers', url: '../../../laPosteDeLancienneFrance/Villes E/Eymoutiers/Eymoutiers.html' },
  
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