document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Le-Neubourg', url:'../../../laPosteDeLancienneFrance/Villes_N/Le-Neubourg/le-neubourg.html' },
        { name: 'Nampot', url:'../../../laPosteDeLancienneFrance/Villes_N/Nampot/nampot.html' },
        { name: 'Nailloux', url:'../../../laPosteDeLancienneFrance/Villes_N/Nailloux/nailloux.html' },
        { name: 'Nancy', url:'../../../laPosteDeLancienneFrance/Villes_N/Nancy/nancy.html' },
        { name: 'Nangis', url:'../../../laPosteDeLancienneFrance/Villes_N/Nangis/nangis.html' },
        { name: 'Nant', url:'../../../laPosteDeLancienneFrance/Villes_N/Nant/nant.html' },
        { name: 'Nanterre', url:'../../../laPosteDeLancienneFrance/Villes_N/Nanterre/nanterre.html' },
        { name: 'Nantes', url:'../../../laPosteDeLancienneFrance/Villes_N/Nantes/nantes.html' },
        { name: 'Nanteuil-le-Haudouin', url:'../../../laPosteDeLancienneFrance/Villes_N/Nanteuil-le-Haudouin/nanteuil-Le-Haudouin.html' },
        { name: 'Nanteuil-sur-Marne', url:'../../../laPosteDeLancienneFrance/Villes_N/Nanteuil-sur-Marne/nanteuil-Sur-Marne.html' },
        { name: 'Nantua', url:'../../../laPosteDeLancienneFrance/Villes_N/Nantua/nantua.html' },
        { name: 'Narbonne', url:'../../../laPosteDeLancienneFrance/Villes_N/Narbonne/narbonne.html' },
        { name: 'Navarrenx', url:'../../../laPosteDeLancienneFrance/Villes_N/Navarrenx/navarrenx.html' },
        { name: 'Neauphi-le-Chateau', url:'../../../laPosteDeLancienneFrance/Villes_N/Neauphi-le-Chateau/neauphi-le-Chateau.html' },
        { name: 'Negrepelisse', url:'../../../laPosteDeLancienneFrance/Villes_N/Negrepelisse/negrepelisse.html' },
        { name: 'Nemours', url:'../../../laPosteDeLancienneFrance/Villes_N/Nemours/nemours.html' },
        { name: 'Nerac', url:'../../../laPosteDeLancienneFrance/Villes_N/Nerac/nerac.html' },
        { name: 'Nesle', url:'../../../laPosteDeLancienneFrance/Villes_N/Nesle/nesle.html' },
        { name: 'Neubourg', url:'../../../laPosteDeLancienneFrance/Villes_N/Neubourg/neubourg.html' },
        { name: 'Neuf-Brisach', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuf-Brisach/neuf-Brisach.html' },
        { name: 'Neufchateau', url:'../../../laPosteDeLancienneFrance/Villes_N/Neufchateau/neufchateau.html' },
        { name: 'Neufchatel-en-Bray', url:'../../../laPosteDeLancienneFrance/Villes_N/Neufchatel-en-Bray/neufchatel-en-Bray.html' },
        { name: 'Neuilly-St-Frond', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuilly-St-Frond/neuilly-St-Frond.html' },
        { name: 'Neung-sur-Beuvron', url:'../../../laPosteDeLancienneFrance/Villes_N/Neung-sur-Beuvron/neung-sur-Beuvron.html' },
        { name: 'Neuville', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuville/neuville.html' },
        { name: 'Neuville-les-Dames', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuville-les-Dames/neuville-les-Dames.html' },
        { name: 'Neuvy-le-Roi', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuvy-le-Roi/neuvy-le-Roi.html' },
        { name: 'Neuvy-sur-Loire', url:'../../../laPosteDeLancienneFrance/Villes_N/Neuvy-sur-Loire/neuvy-sur-Loire.html' },
        { name: 'Nevers', url:'../../../laPosteDeLancienneFrance/Villes_N/Nevers/nevers.html' },
        { name: 'Nimes', url:'../../../laPosteDeLancienneFrance/Villes_N/Nimes/nimes.html' },
        { name: 'Niort', url:'../../../laPosteDeLancienneFrance/Villes_N/Niort/niort.html' },
        { name: 'Noe', url:'../../../laPosteDeLancienneFrance/Villes_N/Noe/noe.html' },
        { name: 'Nogaro', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogaro/nogaro.html' },
        { name: 'Nogent-LArtaud', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogent-LArtaud/nogent-LArtaud.html' },
        { name: 'Nogent-le-Roi', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogent-le-Roi/nogent-le-Roi.html' },
        { name: 'Nogent-le-Rotrou', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogent-le-Rotrou/nogent-le-Rotrou.html' },
        { name: 'Nogent-sur-Seine', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogent-sur-Seine/nogent-sur-Seine.html' },
        { name: 'Nogent-sur-Vernisson', url:'../../../laPosteDeLancienneFrance/Villes_N/Nogent-sur-Vernisson/nogent-sur-Vernisson.html' },
        { name: 'Noirmoutier', url:'../../../laPosteDeLancienneFrance/Villes_N/Noirmoutier/noirmoutier.html' },
        { name: 'Nolay', url:'../../../laPosteDeLancienneFrance/Villes_N/Nolay/nolay.html' },
        { name: 'Nonancourt', url:'../../../laPosteDeLancienneFrance/Villes_N/Nonancourt/nonancourt.html' },
        { name: 'Nonant', url:'../../../laPosteDeLancienneFrance/Villes_N/Nonant/nonant.html' },
        { name: 'Nontron', url:'../../../laPosteDeLancienneFrance/Villes_N/Nontron/nontron.html' },
        { name: 'Nouan-le-Fuzelier', url:'../../../laPosteDeLancienneFrance/Villes_N/Nouan-le-Fuzelier/nouan-le-Fuzelier.html' },
        { name: 'Noyers', url:'../../../laPosteDeLancienneFrance/Villes_N/Noyers/Noyers.html' },
        { name: 'Noyers-Menard', url:'../../../laPosteDeLancienneFrance/Villes_N/Noyers-Menard/noyers-Menard.html' },
        { name: 'Noyon', url:'../../../laPosteDeLancienneFrance/Villes_N/Noyon/noyon.html' },
        { name: 'Nozay', url:'../../../laPosteDeLancienneFrance/Villes_N/Nozay/nozay.html' },
        { name: 'Nozeroy', url:'../../../laPosteDeLancienneFrance/Villes_N/Nozeroy/nozeroy.html' },
        { name: 'Nuaille', url:'../../../laPosteDeLancienneFrance/Villes_N/Nuaille/nuaille.html' },
        { name: 'Nuits', url:'../../../laPosteDeLancienneFrance/Villes_N/Nuits/nuits.html' },
        { name: 'Nyons', url:'../../../laPosteDeLancienneFrance/Villes_N/Nyons/nyons.html' },
        { name: 'Petit-Poste-de-Nancy', url:'../../../laPosteDeLancienneFrance/Villes_N/Petit-Poste-de-Nancy/petit-Poste-de-Nancy.html' },
        { name: 'Petite-Poste-de-Nantes', url:'../../../laPosteDeLancienneFrance/Villes_N/Petite-Poste-de-Nantes/petit-Poste-de-Nantes.html' },
    
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