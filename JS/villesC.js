document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Cadenet', url: '/laPosteDeLancienneFrance/Villes C/Cadenet/Cadenet.html' },
        { name: 'Cadillac', url: '/laPosteDeLancienneFrance/Villes C/Cadillac/Cadillac.html' },
        { name: 'Caen', url: '/laPosteDeLancienneFrance/Villes C/Caen/Caen.html' },
        { name: 'Cahors', url: '/laPosteDeLancienneFrance/Villes C/Cahors/Cahors.html' },
        { name: 'Calais', url: '/laPosteDeLancienneFrance/Villes C/Calais/Calais.html' },
        { name: 'Calvi', url: '/laPosteDeLancienneFrance/Villes C/Calvi/Calvi.html' },
        { name: 'Cahusac', url: '/laPosteDeLancienneFrance/Villes C/Cahusac/Cahusac.html' },
        { name: 'Calvisson', url: '/laPosteDeLancienneFrance/Villes C/Calvisson/Calvisson.html' },
        { name: 'Camaret', url: '/laPosteDeLancienneFrance/Villes C/Camaret/Camaret.html' },
        { name: 'Cambrai', url: '/laPosteDeLancienneFrance/Villes C/Cambrai/Cambrai.html' },
        { name: 'Cande', url: '/laPosteDeLancienneFrance/Villes C/Cande/Cande.html' },
        { name: 'Cannes', url: '/laPosteDeLancienneFrance/Villes C/Cannes/Cannes.html' },
        { name: 'Cany', url: '/laPosteDeLancienneFrance/Villes C/Cany/Cany.html' },
        { name: 'Caraman', url: '/laPosteDeLancienneFrance/Villes C/Caraman/Caraman.html' },
        { name: 'Carcassonne', url: '/laPosteDeLancienneFrance/Villes C/Carcassonne/Carcassonne.html' },
        { name: 'Carentan', url: '/laPosteDeLancienneFrance/Villes C/Carentan/Carentan.html' },
        { name: 'Carhaix', url: '/laPosteDeLancienneFrance/Villes C/Carhaix/Carhaix.html' },
        { name: 'Carignan', url: '/laPosteDeLancienneFrance/Villes C/Carignan/Carignan.html' },
        { name: 'La Carla Bayle', url: '/laPosteDeLancienneFrance/Villes C/CarlaBayle/CarlaBayle.html' },
        { name: 'Carpentras', url: '/laPosteDeLancienneFrance/Villes C/Carpentras/Carpentras.html' },
        { name: 'Carrouge', url: '/laPosteDeLancienneFrance/Villes C/Carrouge/Carrouge.html' },
        { name: 'Carvin', url: '/laPosteDeLancienneFrance/Villes C/Carvin/Carvin.html' },
        { name: 'Casal', url: '/laPosteDeLancienneFrance/Villes C/Casal/Casal.html' },
        { name: 'Cassel', url: '/laPosteDeLancienneFrance/Villes C/Cassel/Cassel.html' },
        { name: 'Cassis', url: '/laPosteDeLancienneFrance/Villes C/Cassis/Cassis.html' },
        { name: 'Castelfranc', url: '/laPosteDeLancienneFrance/Villes C/Castelfranc/Castelfranc.html' },
        { name: 'Castellane', url: '/laPosteDeLancienneFrance/Villes C/Castellane/Castellane.html' },
        { name: 'Castelnau de Magnoac', url: '/laPosteDeLancienneFrance/Villes C/Castelnau/Castelnau.html' },
        { name: 'Castelnau de Médoc', url: '/laPosteDeLancienneFrance/Villes C/Castelnau32/Castelnau32.html' },
        { name: 'Castelnau de Montratier', url: '/laPosteDeLancienneFrance/Villes C/castelnau44/castelnau44.html' },
        { name: 'Castelnaudary', url: '/laPosteDeLancienneFrance/Villes C/Castelnaudary/Castelnaudary.html' },
        { name: 'Castelsarrasin', url: '/laPosteDeLancienneFrance/Villes C/Castelsarrasin/Castelsarrasin.html' },
        { name: 'Castillon', url: '/laPosteDeLancienneFrance/Villes C/Castillon/Castillon.html' },
        { name: 'Castre', url: '/laPosteDeLancienneFrance/Villes C/Castre/Castre.html' },
        { name: 'Castre en Guyenne', url: '/laPosteDeLancienneFrance/Villes C/Castre32/castresEnGuyenne.html.html' },
        { name: 'Cateau Cambrésis', url: '/laPosteDeLancienneFrance/Villes C/CateauCambresis/cateauCambresis.html' },
        { name: 'Le Catelet', url: '/laPosteDeLancienneFrance/Villes C/Catelet/catelet.html' },
        { name: 'Caudebec', url: '/laPosteDeLancienneFrance/Villes L/Caudebec/caudebec.html' },
        { name: 'Caudrot', url: '/laPosteDeLancienneFrance/Villes C/Caudrot/caudrot.html' },
        { name: 'Caudry', url: '/laPosteDeLancienneFrance/Villes C/Caudry/Caudry.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
        { name: '', url: '/laPosteDeLancienneFrance/Villes C//.html' },
       
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