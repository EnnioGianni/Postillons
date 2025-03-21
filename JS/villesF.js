document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Falaise', url: '../../../laPosteDeLancienneFrance/Villes F/Falaise/falaise.html' },
        { name: 'Faou', url: '../../../laPosteDeLancienneFrance/Villes F/Faou/leFaou.html' },
        { name: 'Le Faouet', url: '../../../laPosteDeLancienneFrance/Villes F/Faouet/LeFaouet.html' },
        { name: 'Faremoutiers', url: '../../../laPosteDeLancienneFrance/Villes F/Faremoutiers/faremoutiers.html' },
        { name: 'Faucogney', url: '../../../laPosteDeLancienneFrance/Villes F/Faucogney/faucogney.html' },
        { name: 'Fauville', url: '../../../laPosteDeLancienneFrance/Villes F/Fauville/fauville.html' },
        { name: 'Favernay', url: '../../../laPosteDeLancienneFrance/Villes F/Faverney/favernay.html' },
        { name: 'FaylBillot', url: '../../../laPosteDeLancienneFrance/Villes F/FaylBillot/leFaylBillot.html' },
        { name: 'Fecamp', url: '../../../laPosteDeLancienneFrance/Villes F/Fecamp/fecamp.html' },
        { name: 'Felletin', url: '../../../laPosteDeLancienneFrance/Villes F/Felletin/felletin.html' },
        { name: 'La Fère', url: '../../../laPosteDeLancienneFrance/Villes F/Fere/laFere.html' },
        { name: 'Fere Champenoise', url: '../../../laPosteDeLancienneFrance/Villes F/FereChampenoise/fereChampenois.html' },
        { name: 'Fere En Tardenois', url: '../../../laPosteDeLancienneFrance/Villes F/FereEnTardenois/fereEnTardenois.html' },
        { name: 'Ferney', url: '../../../laPosteDeLancienneFrance/Villes F/Ferney/ferney.html' },
        { name: 'Ferriere', url: '../../../laPosteDeLancienneFrance/Villes F/Ferriere/ferriereSRisle.html' },
        { name: 'La Ferte Alais', url: '../../../laPosteDeLancienneFrance/Villes F/FerteAlais/laFerteAlais.html' },
        { name: 'La Ferte Bernard', url: '../../../laPosteDeLancienneFrance/Villes F/FerteBernard/laFerteBernard.html' },
        { name: 'La Ferte Gaucher', url: '../../../laPosteDeLancienneFrance/Villes F/FerteGaucher/laFerteGaucher.html' },
        { name: 'La Ferte Lowendal', url: '../../../laPosteDeLancienneFrance/Villes F/FerteLowendal/laFerteLowendal.html' },
        { name: 'La Ferte Mace', url: '../../../laPosteDeLancienneFrance/Villes F/FerteMace/laFerteMace.html' },
        { name: 'La Ferte Milon', url: '../../../laPosteDeLancienneFrance/Villes F/FerteMilon/laFerteMilon.html' },
        { name: 'La Ferte Sous Jouarre', url: '../../../laPosteDeLancienneFrance/Villes F/FerteSousJouarre/laFerteSousJouarre.html' },
        { name: 'La Ferte Vidame', url: '../../../laPosteDeLancienneFrance/Villes F/FerteVidame/laFerteVidame.html' },
        { name: 'Feurs', url: '../../../laPosteDeLancienneFrance/Villes F/Feurs/feurs.html' },
        { name: 'Figeac', url: '../../../laPosteDeLancienneFrance/Villes F/Figeac/figeac.html' },
        { name: 'Fismes', url: '../../../laPosteDeLancienneFrance/Villes F/Fismes/fismes.html' },
        { name: 'Fitou', url: '../../../laPosteDeLancienneFrance/Villes F/Fitou/fitou.html' },
        { name: 'Flavigny', url: '../../../laPosteDeLancienneFrance/Villes F/Flavigny/flavigny.html' },
        { name: 'Fleche', url: '../../../laPosteDeLancienneFrance/Villes F/Fleche/laFleche.html' },
        { name: 'Fleurance', url: '../../../laPosteDeLancienneFrance/Villes F/Fleurance/fleurance.html' },
        { name: 'Flixecourt', url: '../../../laPosteDeLancienneFrance/Villes F/Flixecourt/flixecourt.html' },
        { name: 'Flocelliere', url: '../../../laPosteDeLancienneFrance/Villes F/Flocelliere/laFlocelliere.html' },
        { name: 'Florac', url: '../../../laPosteDeLancienneFrance/Villes F/Florac/florac.html' },
        { name: 'La-Flotte', url: '../../../laPosteDeLancienneFrance/Villes F/La-Flotte/laFlotte.html' },
        { name: 'Foix', url: '../../../laPosteDeLancienneFrance/Villes F/Foix/foix.html' },
        { name: 'Fontainebleau', url: '../../../laPosteDeLancienneFrance/Villes F/Fontainebleau/fontainebleau.html' },
        { name: 'Fontaine Francaise', url: '../../../laPosteDeLancienneFrance/Villes F/FontaineFrancaise/fontaineFrancaise.html' },
        { name: 'Fontaine Guerin', url: '../../../laPosteDeLancienneFrance/Villes F/FontaineGuerin/fontaineGuerin.html' },
        { name: 'Fontenay En Brie', url: '../../../laPosteDeLancienneFrance/Villes F/FontenayEnBrie/fontenayEnBrie.html' },
        { name: 'Fontenay En Gatinais', url: '../../../laPosteDeLancienneFrance/Villes F/FontenayEnGatinais/fontenayEnGatinais.html' },
        { name: 'Fontenay Le Comte', url: '../../../laPosteDeLancienneFrance/Villes F/FontenayLeComte/fontenayLeComte.html' },
        { name: 'Forbach', url: '../../../laPosteDeLancienneFrance/Villes F/Forbach/forbach.html' },
        { name: 'Forcalquier', url: '../../../laPosteDeLancienneFrance/Villes F/Forcalquier/forcalquier.html' },
        { name: 'Forge De Bort', url: '../../../laPosteDeLancienneFrance/Villes F/ForgeDeBort/laForgeDeBort.html' },
        { name: 'Forges', url: '../../../laPosteDeLancienneFrance/Villes F/Forges/forges.html' },
        { name: 'Fort De La Pree', url: '../../../laPosteDeLancienneFrance/Villes F/FortDeLaPree/leFortDeLaPree.html' },
        { name: 'Fort Lecluse', url: '../../../laPosteDeLancienneFrance/Villes F/FortLecluse/leFortLecluse.html' },
        { name: 'Fort Les Bains', url: '../../../laPosteDeLancienneFrance/Villes F/FortLesBains/leFortLesBains.html' },
        { name: 'Fort Louis', url: '../../../laPosteDeLancienneFrance/Villes F/FortLouis/leFortLouis.html' },
        { name: 'Fosse', url: '../../../laPosteDeLancienneFrance/Villes F/Fosse/fosse.html' },
        { name: 'Fougeres', url: '../../../laPosteDeLancienneFrance/Villes F/Fougeres/fougeres.html' },
        { name: 'Foulletourte', url: '../../../laPosteDeLancienneFrance/Villes F/Foulletourte/foulletourte.html' },
        { name: 'Francoville', url: '../../../laPosteDeLancienneFrance/Villes F/Francoville/francoville.html' },
        { name: 'Frejus', url: '../../../laPosteDeLancienneFrance/Villes F/Frejus/frejus.html' },
        { name: 'Fresnay Le Vicomte', url: '../../../laPosteDeLancienneFrance/Villes F/FresnayLeVicomte/FresnayLeVicomte.html' },
        { name: 'Frevent', url: '../../../laPosteDeLancienneFrance/Villes F/Frevent/frevent.html' },
        { name: 'Frigolet', url: '../../../laPosteDeLancienneFrance/Villes F/Frigolet/frigolet.html' },
        { name: 'Fromenteau', url: '../../../laPosteDeLancienneFrance/Villes F/Fromenteau/fromenteau.html' },
        { name: 'Frontignan', url: '../../../laPosteDeLancienneFrance/Villes F/Frontignan/frontignan.html' },
        { name: 'Fronton', url: '../../../laPosteDeLancienneFrance/Villes F/Fronton/fronton.html' },
        { name: 'Fruges', url: '../../../laPosteDeLancienneFrance/Villes F/Fruges/fruges.html' },
        { name: 'Frunce', url: '../../../laPosteDeLancienneFrance/Villes F/Frunce/frunce.html' },
        { name: 'Fumel', url: '../../../laPosteDeLancienneFrance/Villes F/Fumel/fumel.html' },
        { name: 'Furnes', url: '../../../laPosteDeLancienneFrance/Villes F/Furnes/furnes.html' },

  
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