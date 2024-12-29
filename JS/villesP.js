document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'La Pacaudiere', url:'../../../laPosteDeLancienneFrance/Villes P/La Pacaudiere/laPacaudiere.html' },
        { name: 'La Palisse', url:'../../../laPosteDeLancienneFrance/Villes P/La Palisse/laPalisse.html' },
        { name: 'La Palud', url:'../../../laPosteDeLancienneFrance/Villes P/La Palud/laPalud.html' },
        { name: 'La Perine', url:'../../../laPosteDeLancienneFrance/Villes P/La Perine/laPerine.html' },
        { name: 'La Porta', url:'../../../laPosteDeLancienneFrance/Villes P/La Porta/laPorta.html' },
        { name: 'Le Peage de Roussillon', url:'../../../laPosteDeLancienneFrance/Villes P/Le Peage de Roussillon/lePeageDeRoussillon.html' },
        { name: 'Le Pellerin', url:'../../../laPosteDeLancienneFrance/Villes P/Le Pellerin/lePellerin.html' },
        { name: 'Le Pompidou', url:'../../../laPosteDeLancienneFrance/Villes P/Le Pompidou/lePompidou.html' },
        { name: 'Le Pont de Beauvoisin', url:'../../../laPosteDeLancienneFrance/Villes P/Le Pont de Beauvoisin/lePontDeBeauvoisin.html' },
        { name: 'Le Pont de Ce', url:'../../../laPosteDeLancienneFrance/Villes P/Le Pont de Ce/lePontDeCe.html' },
        { name: 'Le pont de Neuilly', url:'../../../laPosteDeLancienneFrance/Villes P/Le pont de Neuilly/lePontDeNeuilly.html' },
        { name: 'Le Puy', url:'../../../laPosteDeLancienneFrance/Villes P/Le Puy/Le Puy.html' },
        { name: 'Les Pieux', url:'../../../laPosteDeLancienneFrance/Villes P/Les Pieux/lesPieux.html' },
        { name: 'Pacy sur Eure', url:'../../../laPosteDeLancienneFrance/Villes P/Pacy sur Eure/pacySurEure.html' },
        { name: 'Pacy-sur-Armancon', url:'../../../laPosteDeLancienneFrance/Villes P/Pacy-sur-Armancon/pacySurArmancon.html' },
        { name: 'Paimboeuf', url:'../../../laPosteDeLancienneFrance/Villes P/Paimboeuf/paimboeuf.html' },
        { name: 'Paimpol', url:'../../../laPosteDeLancienneFrance/Villes P/Paimpol/paimpol.html' },
        { name: 'Palaiseau', url:'../../../laPosteDeLancienneFrance/Villes P/Palaiseau/palaiseau.html' },
        { name: 'Paliseul', url:'../../../laPosteDeLancienneFrance/Villes P/Paliseul/paliseul.html' },
        { name: 'Palluau', url:'../../../laPosteDeLancienneFrance/Villes P/Palluau/palluau.html' },
        { name: 'Pamiers', url:'../../../laPosteDeLancienneFrance/Villes P/Pamiers/pamiers.html' },
        { name: 'Pampellonne', url:'../../../laPosteDeLancienneFrance/Villes P/Pampellonne/pampellonne.html' },
        { name: 'Paray le Monial', url:'../../../laPosteDeLancienneFrance/Villes P/parayLeMonial/.html' },
        { name: 'Parce', url:'../../../laPosteDeLancienneFrance/Villes P/Parce/parce.html' },
        { name: 'Paris', url:'../../../laPosteDeLancienneFrance/Villes P/Paris/Paris.html' },
        { name: 'Parthenay', url:'../../../laPosteDeLancienneFrance/Villes P/Parthenay/parthenay.html' },
        { name: 'Pau', url:'../../../laPosteDeLancienneFrance/Villes P/Pau/pau.html' },
        { name: 'Pauillac', url:'../../../laPosteDeLancienneFrance/Villes P/Pauillac/pauillac.html' },
        { name: 'Payrac', url:'../../../laPosteDeLancienneFrance/Villes P/Payrac/payrac.html' },
        { name: 'Pelissanne', url:'../../../laPosteDeLancienneFrance/Villes P/Pelissanne/pelissanne.html' },
        { name: 'Peronne', url:'../../../laPosteDeLancienneFrance/Villes P/Peronne/peronne.html' },
        { name: 'Perpignan', url:'../../../laPosteDeLancienneFrance/Villes P/Perpignan/perpignan.html' },
        { name: 'Perrecy', url:'../../../laPosteDeLancienneFrance/Villes P/Perrecy/perrecy.html' },
        { name: 'Perriers', url:'../../../laPosteDeLancienneFrance/Villes P/Perriers/perrieres.html' },
        { name: 'Pertuis', url:'../../../laPosteDeLancienneFrance/Villes P/Pertuis/pertuis.html' },
        { name: 'Petit Poste De Paris', url:'../../../laPosteDeLancienneFrance/Villes P/Petit Poste De Paris/petitPosteDeParis.html' },
        { name: 'Peyrot le Negre', url:'../../../laPosteDeLancienneFrance/Villes P/Peyrot le Negre/peyrotLeNegre.html' },
        { name: 'Pezenas', url:'../../../laPosteDeLancienneFrance/Villes P/Pezenas/pezenas.html' },
        { name: 'Phalsbourg', url:'../../../laPosteDeLancienneFrance/Villes P/Phalsbourg/phalsbourg.html' },
        { name: 'Philippeville', url:'../../../laPosteDeLancienneFrance/Villes P/Philippeville/philippeville.html' },
        { name: 'Picquigny', url:'../../../laPosteDeLancienneFrance/Villes P/Picquigny/picquigny.html' },
        { name: 'Pierre Buffiere', url:'../../../laPosteDeLancienneFrance/Villes P/Pierre Buffiere/pierreBuffiere.html' },
        { name: 'Pierrefort', url:'../../../laPosteDeLancienneFrance/Villes P/Pierrefort/pierrefort.html' },
        { name: 'Pierrelatte', url:'../../../laPosteDeLancienneFrance/Villes P/Pierrelatte/pierrelatte.html' },
        { name: 'Pignans', url:'../../../laPosteDeLancienneFrance/Villes P/Pignans/pignans.html' },
        { name: 'Pignerol', url:'../../../laPosteDeLancienneFrance/Villes P/Pignerol/pignerol.html' },
        { name: 'Piney', url:'../../../laPosteDeLancienneFrance/Villes P/Piney/piney.html' },
        { name: 'Pinon', url:'../../../laPosteDeLancienneFrance/Villes P/Pinon/pinon.html' },
        { name: 'Pithiviers', url:'../../../laPosteDeLancienneFrance/Villes P/Pithiviers/pithiviers.html' },
        { name: 'Plancoet', url:'../../../laPosteDeLancienneFrance/Villes P/Plancoet/plancoet.html' },
        { name: 'Plelan', url:'../../../laPosteDeLancienneFrance/Villes P/Plelan/plelan.html' },
        { name: 'Ploermel', url:'../../../laPosteDeLancienneFrance/Villes P/Ploermel/ploermel.html' },
        { name: 'Plombieres', url:'../../../laPosteDeLancienneFrance/Villes P/Plombieres/plombieres.html' },
        { name: 'Pogny', url:'../../../laPosteDeLancienneFrance/Villes P/Pogny/pogny.html' },
        { name: 'Poissy', url:'../../../laPosteDeLancienneFrance/Villes P/Poissy/poissy.html' },
        { name: 'Poitiers', url:'../../../laPosteDeLancienneFrance/Villes P/Poitiers/poitiers.html' },
        { name: 'Poix', url:'../../../laPosteDeLancienneFrance/Villes P/Poix/poix.html' },
        { name: 'Poligny', url:'../../../laPosteDeLancienneFrance/Villes P/Poligny/poligny.html' },
        { name: 'Pons', url:'../../../laPosteDeLancienneFrance/Villes P/Pons/pons.html' },
        { name: 'Pont a Mousson', url:'../../../laPosteDeLancienneFrance/Villes P/Pont a Mousson/pontAMousson.html' },
        { name: 'Pont Audemer', url:'../../../laPosteDeLancienneFrance/Villes P/Pont Audemer/pontAudemer.html' },
        { name: 'Pont Chateau', url:'../../../laPosteDeLancienneFrance/Villes P/Pont Chateau/pontChateau.html' },
        { name: 'Pont D-Ain', url:'../../../laPosteDeLancienneFrance/Villes P/Pont D-Ain/pontDain.html' },
        { name: 'Pont de Abbe', url:'../../../laPosteDeLancienneFrance/Villes P/Pont de Abbe/pontDeAbbe.html' },
        { name: 'Pont de Camares', url:'../../../laPosteDeLancienneFrance/Villes P/Pont de Camares/pontDeCamares.html' },
        { name: 'Pont de Chateau', url:'../../../laPosteDeLancienneFrance/Villes P/Pont de Chateau/pontDeChatea.html' },
        { name: 'Pont de L-Arche', url:'../../../laPosteDeLancienneFrance/Villes P/Pont de L-Arche/pontDeLarche.html' },
        { name: 'Pont de Vaux', url:'../../../laPosteDeLancienneFrance/Villes P/Pont de Vaux/pontDeVaux.html' },
        { name: 'Pont en Royans', url:'../../../laPosteDeLancienneFrance/Villes P/Pont en Royans/pontEnRoyan.html' },
        { name: 'Pont L-Eveque', url:'../../../laPosteDeLancienneFrance/Villes P/Pont L-Eveque/.html' },
        { name: 'Pont Saint Esprit', url:'../../../laPosteDeLancienneFrance/Villes P/Pont Saint Esprit/PontSaintEsprit.html' },
        { name: 'Pont Scorff', url:'../../../laPosteDeLancienneFrance/Villes P/Pont Scorff/pontScoff.html' },
        { name: 'Pont Ste Maxence', url:'../../../laPosteDeLancienneFrance/Villes P/Pont Ste Maxence/pontSteMaxence.html' },
        { name: 'Pont sur Seine', url:'../../../laPosteDeLancienneFrance/Villes P/Pont sur Seine/pontSurSeine.html' },
        { name: 'Pont sur Yonne', url:'../../../laPosteDeLancienneFrance/Villes P/Pont sur Yonne/pontSurYonne.html' },
        { name: 'Pontailler', url:'../../../laPosteDeLancienneFrance/Villes P/Pontailler/pontailler.html' },
        { name: 'Pontarlier', url:'../../../laPosteDeLancienneFrance/Villes P/Pontarlier/pontarlier.html' },
        { name: 'Pontarneaud', url:'../../../laPosteDeLancienneFrance/Villes P/Pontarneaud/pontarneaud.html' },
        { name: 'Pontchartrain', url:'../../../laPosteDeLancienneFrance/Villes P/Pontchartrain/pontchartrain.html' },
        { name: 'Ponthierry', url:'../../../laPosteDeLancienneFrance/Villes P/Ponthierry/ponthierry.html' },
        { name: 'Pontigny', url:'../../../laPosteDeLancienneFrance/Villes P/Pontigny/pontign.html' },
        { name: 'Pontivy', url:'../../../laPosteDeLancienneFrance/Villes P/Pontivy/pontivy.html' },
        { name: 'Pontoise', url:'../../../laPosteDeLancienneFrance/Villes P/Pontoise/pontoise.html' },
        { name: 'Pontorson', url:'../../../laPosteDeLancienneFrance/Villes P/Pontorson/pontorson.html' },
        { name: 'Pontrieux', url:'../../../laPosteDeLancienneFrance/Villes P/Pontrieux/pontrieux.html' },
        { name: 'Poperingue', url:'../../../laPosteDeLancienneFrance/Villes P/Poperingue/poperingue.html' },
        { name: 'Pornic', url:'../../../laPosteDeLancienneFrance/Villes P/Pornic/pornic.html' },
        { name: 'Port de Piles', url:'../../../laPosteDeLancienneFrance/Villes P/Port de Piles/portDePiles.html' },
        { name: 'Port Saint Pere', url:'../../../laPosteDeLancienneFrance/Villes P/Port Saint Pere/portSaintPere.html' },
        { name: 'Port Sainte Marie', url:'../../../laPosteDeLancienneFrance/Villes P/Port Sainte Marie/portSainteMarie.html' },
        { name: 'Port sur Saone', url:'../../../laPosteDeLancienneFrance/Villes P/Port sur Saone/portSurSaone.html' },
        { name: 'Port Vendres', url:'../../../laPosteDeLancienneFrance/Villes P/Port Vendres/portVendres.html' },
        { name: 'Pougues', url:'../../../laPosteDeLancienneFrance/Villes P/Pougues/pougues.html' },
        { name: 'Pouilly sur Loire', url:'../../../laPosteDeLancienneFrance/Villes P/Pouilly sur Loire/pouillySurLoire.html' },
        { name: 'Pouzauges', url:'../../../laPosteDeLancienneFrance/Villes P/Pouzauges/pouzauges.html' },
        { name: 'Prades', url:'../../../laPosteDeLancienneFrance/Villes P/Prades/prades.html' },
        { name: 'Prats de Mollo', url:'../../../laPosteDeLancienneFrance/Villes P/Prats de Mollo/pratsDeMollo.html' },
        { name: 'Preignac', url:'../../../laPosteDeLancienneFrance/Villes P/Preignac/preignac.html' },
        { name: 'Pretot', url:'../../../laPosteDeLancienneFrance/Villes P/Pretot/pretot.html' },
        { name: 'Preuilly', url:'../../../laPosteDeLancienneFrance/Villes P/Preuilly/preuilly.html' },
        { name: 'Prez en Pail', url:'../../../laPosteDeLancienneFrance/Villes P/Prez en Pail/prezEnPail.html' },
        { name: 'Privas', url:'../../../laPosteDeLancienneFrance/Villes P/Privas/privas.html' },
        { name: 'Provins', url:'../../../laPosteDeLancienneFrance/Villes P/Provins/provins.html' },
        { name: 'Puiseaux', url:'../../../laPosteDeLancienneFrance/Villes P/Puiseaux/puiseaux.html' },
        { name: 'Puttelange', url:'../../../laPosteDeLancienneFrance/Villes P/Puttelange/puttelenge.html' },
        { name: 'Puy Laurens', url:'../../../laPosteDeLancienneFrance/Villes P/Puy Laurens/puyLaurens.html' },
        { name: 'Puydarrieux', url:'../../../laPosteDeLancienneFrance/Villes P/Puydarrieux/puydarrieux.html' },

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