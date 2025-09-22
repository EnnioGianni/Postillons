document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Falaise', url: '../../../laPosteDeLancienneFrance/Villes_F/Falaise/falaise.html' },
        { name: 'Faou', url: '../../../laPosteDeLancienneFrance/Villes_F/Faou/leFaou.html' },
        { name: 'Le Faouet', url: '../../../laPosteDeLancienneFrance/Villes_F/Faouet/LeFaouet.html' },
        { name: 'Faremoutiers', url: '../../../laPosteDeLancienneFrance/Villes_F/Faremoutiers/faremoutiers.html' },
        { name: 'Faucogney', url: '../../../laPosteDeLancienneFrance/Villes_F/Faucogney/faucogney.html' },
        { name: 'Fauville', url: '../../../laPosteDeLancienneFrance/Villes_F/Fauville/fauville.html' },
        { name: 'Favernay', url: '../../../laPosteDeLancienneFrance/Villes_F/Faverney/favernay.html' },
        { name: 'FaylBillot', url: '../../../laPosteDeLancienneFrance/Villes_F/FaylBillot/leFaylBillot.html' },
        { name: 'Fecamp', url: '../../../laPosteDeLancienneFrance/Villes_F/Fecamp/fecamp.html' },
        { name: 'Felletin', url: '../../../laPosteDeLancienneFrance/Villes_F/Felletin/felletin.html' },
        { name: 'La Fère', url: '../../../laPosteDeLancienneFrance/Villes_F/Fere/laFere.html' },
        { name: 'Fere Champenoise', url: '../../../laPosteDeLancienneFrance/Villes_F/FereChampenoise/fereChampenois.html' },
        { name: 'Fere En Tardenois', url: '../../../laPosteDeLancienneFrance/Villes_F/FereEnTardenois/fereEnTardenois.html' },
        { name: 'Ferney', url: '../../../laPosteDeLancienneFrance/Villes_F/Ferney/ferney.html' },
        { name: 'Ferriere', url: '../../../laPosteDeLancienneFrance/Villes_F/Ferriere/ferriereSRisle.html' },
        { name: 'La Ferte Alais', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteAlais/laFerteAlais.html' },
        { name: 'La Ferte Bernard', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteBernard/laFerteBernard.html' },
        { name: 'La Ferte Gaucher', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteGaucher/laFerteGaucher.html' },
        { name: 'La Ferte Lowendal', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteLowendal/laFerteLowendal.html' },
        { name: 'La Ferte Mace', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteMace/laFerteMace.html' },
        { name: 'La Ferte Milon', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteMilon/laFerteMilon.html' },
        { name: 'La Ferte Sous Jouarre', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteSousJouarre/laFerteSousJouarre.html' },
        { name: 'La Ferte Vidame', url: '../../../laPosteDeLancienneFrance/Villes_F/FerteVidame/laFerteVidame.html' },
        { name: 'Feurs', url: '../../../laPosteDeLancienneFrance/Villes_F/Feurs/feurs.html' },
        { name: 'Figeac', url: '../../../laPosteDeLancienneFrance/Villes_F/Figeac/figeac.html' },
        { name: 'Fismes', url: '../../../laPosteDeLancienneFrance/Villes_F/Fismes/fismes.html' },
        { name: 'Fitou', url: '../../../laPosteDeLancienneFrance/Villes_F/Fitou/fitou.html' },
        { name: 'Flavigny', url: '../../../laPosteDeLancienneFrance/Villes_F/Flavigny/flavigny.html' },
        { name: 'Fleche', url: '../../../laPosteDeLancienneFrance/Villes_F/Fleche/laFleche.html' },
        { name: 'Fleurance', url: '../../../laPosteDeLancienneFrance/Villes_F/Fleurance/fleurance.html' },
        { name: 'Flixecourt', url: '../../../laPosteDeLancienneFrance/Villes_F/Flixecourt/flixecourt.html' },
        { name: 'Flocelliere', url: '../../../laPosteDeLancienneFrance/Villes_F/Flocelliere/laFlocelliere.html' },
        { name: 'Florac', url: '../../../laPosteDeLancienneFrance/Villes_F/Florac/florac.html' },
        { name: 'La-Flotte', url: '../../../laPosteDeLancienneFrance/Villes_F/La-Flotte/laFlotte.html' },
        { name: 'Foix', url: '../../../laPosteDeLancienneFrance/Villes_F/Foix/foix.html' },
        { name: 'Fontainebleau', url: '../../../laPosteDeLancienneFrance/Villes_F/Fontainebleau/fontainebleau.html' },
        { name: 'Fontaine Francaise', url: '../../../laPosteDeLancienneFrance/Villes_F/FontaineFrancaise/fontaineFrancaise.html' },
        { name: 'Fontaine Guerin', url: '../../../laPosteDeLancienneFrance/Villes_F/FontaineGuerin/fontaineGuerin.html' },
        { name: 'Fontenay En Brie', url: '../../../laPosteDeLancienneFrance/Villes_F/FontenayEnBrie/fontenayEnBrie.html' },
        { name: 'Fontenay En Gatinais', url: '../../../laPosteDeLancienneFrance/Villes_F/FontenayEnGatinais/fontenayEnGatinais.html' },
        { name: 'Fontenay Le Comte', url: '../../../laPosteDeLancienneFrance/Villes_F/FontenayLeComte/fontenayLeComte.html' },
        { name: 'Forbach', url: '../../../laPosteDeLancienneFrance/Villes_F/Forbach/forbach.html' },
        { name: 'Forcalquier', url: '../../../laPosteDeLancienneFrance/Villes_F/Forcalquier/forcalquier.html' },
        { name: 'Forge De Bort', url: '../../../laPosteDeLancienneFrance/Villes_F/ForgeDeBort/laForgeDeBort.html' },
        { name: 'Forges', url: '../../../laPosteDeLancienneFrance/Villes_F/Forges/forges.html' },
        { name: 'Fort De La Pree', url: '../../../laPosteDeLancienneFrance/Villes_F/FortDeLaPree/leFortDeLaPree.html' },
        { name: 'Fort Lecluse', url: '../../../laPosteDeLancienneFrance/Villes_F/FortLecluse/leFortLecluse.html' },
        { name: 'Fort Les Bains', url: '../../../laPosteDeLancienneFrance/Villes_F/FortLesBains/leFortLesBains.html' },
        { name: 'Fort Louis', url: '../../../laPosteDeLancienneFrance/Villes_F/FortLouis/leFortLouis.html' },
        { name: 'Fosse', url: '../../../laPosteDeLancienneFrance/Villes_F/Fosse/fosse.html' },
        { name: 'Fougeres', url: '../../../laPosteDeLancienneFrance/Villes_F/Fougeres/fougeres.html' },
        { name: 'Foulletourte', url: '../../../laPosteDeLancienneFrance/Villes_F/Foulletourte/foulletourte.html' },
        { name: 'Francoville', url: '../../../laPosteDeLancienneFrance/Villes_F/Francoville/francoville.html' },
        { name: 'Frejus', url: '../../../laPosteDeLancienneFrance/Villes_F/Frejus/frejus.html' },
        { name: 'Fresnay Le Vicomte', url: '../../../laPosteDeLancienneFrance/Villes_F/FresnayLeVicomte/FresnayLeVicomte.html' },
        { name: 'Frevent', url: '../../../laPosteDeLancienneFrance/Villes_F/Frevent/frevent.html' },
        { name: 'Frigolet', url: '../../../laPosteDeLancienneFrance/Villes_F/Frigolet/frigolet.html' },
        { name: 'Fromenteau', url: '../../../laPosteDeLancienneFrance/Villes_F/Fromenteau/fromenteau.html' },
        { name: 'Frontignan', url: '../../../laPosteDeLancienneFrance/Villes_F/Frontignan/frontignan.html' },
        { name: 'Fronton', url: '../../../laPosteDeLancienneFrance/Villes_F/Fronton/fronton.html' },
        { name: 'Fruges', url: '../../../laPosteDeLancienneFrance/Villes_F/Fruges/fruges.html' },
        { name: 'Frunce', url: '../../../laPosteDeLancienneFrance/Villes_F/Frunce/frunce.html' },
        { name: 'Fumel', url: '../../../laPosteDeLancienneFrance/Villes_F/Fumel/fumel.html' },
        { name: 'Furnes', url: '../../../laPosteDeLancienneFrance/Villes_F/Furnes/furnes.html' },

  
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