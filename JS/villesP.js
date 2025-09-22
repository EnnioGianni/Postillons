document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'La Pacaudiere', url:'../../../laPosteDeLancienneFrance/Villes_P/La Pacaudiere/laPacaudiere.html' },
        { name: 'La Palisse', url:'../../../laPosteDeLancienneFrance/Villes_P/La Palisse/laPalisse.html' },
        { name: 'La Palud', url:'../../../laPosteDeLancienneFrance/Villes_P/La Palud/laPalud.html' },
        { name: 'La Perine', url:'../../../laPosteDeLancienneFrance/Villes_P/La Perine/laPerine.html' },
        { name: 'La Porta', url:'../../../laPosteDeLancienneFrance/Villes_P/La Porta/laPorta.html' },
        { name: 'Le Peage de Roussillon', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Peage de Roussillon/lePeageDeRoussillon.html' },
        { name: 'Le Pellerin', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Pellerin/lePellerin.html' },
        { name: 'Le Pompidou', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Pompidou/lePompidou.html' },
        { name: 'Le Pont de Beauvoisin', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Pont de Beauvoisin/lePontDeBeauvoisin.html' },
        { name: 'Le Pont de Ce', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Pont de Ce/lePontDeCe.html' },
        { name: 'Le pont de Neuilly', url:'../../../laPosteDeLancienneFrance/Villes_P/Le pont de Neuilly/lePontDeNeuilly.html' },
        { name: 'Le Puy', url:'../../../laPosteDeLancienneFrance/Villes_P/Le Puy/lePuy.html' },
        { name: 'Les Pieux', url:'../../../laPosteDeLancienneFrance/Villes_P/Les Pieux/lesPieux.html' },
        { name: 'Pacy sur Eure', url:'../../../laPosteDeLancienneFrance/Villes_P/Pacy sur Eure/pacySurEure.html' },
        { name: 'Pacy-sur-Armancon', url:'../../../laPosteDeLancienneFrance/Villes_P/Pacy-sur-Armancon/pacySurArmancon.html' },
        { name: 'Paimboeuf', url:'../../../laPosteDeLancienneFrance/Villes_P/Paimboeuf/paimboeuf.html' },
        { name: 'Paimpol', url:'../../../laPosteDeLancienneFrance/Villes_P/Paimpol/paimpol.html' },
        { name: 'Palaiseau', url:'../../../laPosteDeLancienneFrance/Villes_P/Palaiseau/palaiseau.html' },
        { name: 'Paliseul', url:'../../../laPosteDeLancienneFrance/Villes_P/Paliseul/paliseul.html' },
        { name: 'Palluau', url:'../../../laPosteDeLancienneFrance/Villes_P/Palluau/palluau.html' },
        { name: 'Pamiers', url:'../../../laPosteDeLancienneFrance/Villes_P/Pamiers/pamiers.html' },
        { name: 'Pampellonne', url:'../../../laPosteDeLancienneFrance/Villes_P/Pampellonne/pampellonne.html' },
        { name: 'Paray le Monial', url:'../../../laPosteDeLancienneFrance/Villes_P/Paray le Monial/parayLeMonial.html' },
        { name: 'Parce', url:'../../../laPosteDeLancienneFrance/Villes_P/Parce/parce.html' },
        { name: 'Paris', url:'../../../laPosteDeLancienneFrance/Villes_P/Paris/Paris.html' },
        { name: 'Parthenay', url:'../../../laPosteDeLancienneFrance/Villes_P/Parthenay/parthenay.html' },
        { name: 'Pau', url:'../../../laPosteDeLancienneFrance/Villes_P/Pau/pau.html' },
        { name: 'Pauillac', url:'../../../laPosteDeLancienneFrance/Villes_P/Pauillac/pauillac.html' },
        { name: 'Payrac', url:'../../../laPosteDeLancienneFrance/Villes_P/Payrac/payrac.html' },
        { name: 'Pelissanne', url:'../../../laPosteDeLancienneFrance/Villes_P/Pelissanne/pelissanne.html' },
        { name: 'Perigueux', url:'../../../laPosteDeLancienneFrance/Villes_P/Perigueux/Perigueux.html' },
        { name: 'Peronne', url:'../../../laPosteDeLancienneFrance/Villes_P/Peronne/peronne.html' },
        { name: 'Perpignan', url:'../../../laPosteDeLancienneFrance/Villes_P/Perpignan/perpignan.html' },
        { name: 'Perrecy', url:'../../../laPosteDeLancienneFrance/Villes_P/Perrecy/perrecy.html' },
        { name: 'Perriers', url:'../../../laPosteDeLancienneFrance/Villes_P/Perriers/perrieres.html' },
        { name: 'Pertuis', url:'../../../laPosteDeLancienneFrance/Villes_P/Pertuis/pertuis.html' },
        { name: 'Petite-Poste-De-Paris', url:'../../../laPosteDeLancienneFrance/Villes_P/Petite-Poste-De-Paris/petitePosteDeParis.html' },
        { name: 'Peyrot le Negre', url:'../../../laPosteDeLancienneFrance/Villes_P/Peyrot le Negre/peyrotLeNegre.html' },
        { name: 'Pezenas', url:'../../../laPosteDeLancienneFrance/Villes_P/Pezenas/pezenas.html' },
        { name: 'Phalsbourg', url:'../../../laPosteDeLancienneFrance/Villes_P/Phalsbourg/phalsbourg.html' },
        { name: 'Philippeville', url:'../../../laPosteDeLancienneFrance/Villes_P/Philippeville/philippeville.html' },
        { name: 'Picquigny', url:'../../../laPosteDeLancienneFrance/Villes_P/Picquigny/picquigny.html' },
        { name: 'Pierre Buffiere', url:'../../../laPosteDeLancienneFrance/Villes_P/Pierre Buffiere/pierreBuffiere.html' },
        { name: 'Pierrefort', url:'../../../laPosteDeLancienneFrance/Villes_P/Pierrefort/pierrefort.html' },
        { name: 'Pierrelatte', url:'../../../laPosteDeLancienneFrance/Villes_P/Pierrelatte/pierrelatte.html' },
        { name: 'Pignans', url:'../../../laPosteDeLancienneFrance/Villes_P/Pignans/pignans.html' },
        { name: 'Pignerol', url:'../../../laPosteDeLancienneFrance/Villes_P/Pignerol/pignerol.html' },
        { name: 'Piney', url:'../../../laPosteDeLancienneFrance/Villes_P/Piney/piney.html' },
        { name: 'Pinon', url:'../../../laPosteDeLancienneFrance/Villes_P/Pinon/pinon.html' },
        { name: 'Pithiviers', url:'../../../laPosteDeLancienneFrance/Villes_P/Pithiviers/pithiviers.html' },
        { name: 'Plancoet', url:'../../../laPosteDeLancienneFrance/Villes_P/Plancoet/plancoet.html' },
        { name: 'Plelan', url:'../../../laPosteDeLancienneFrance/Villes_P/Plelan/plelan.html' },
        { name: 'Ploermel', url:'../../../laPosteDeLancienneFrance/Villes_P/Ploermel/ploermel.html' },
        { name: 'Plombieres', url:'../../../laPosteDeLancienneFrance/Villes_P/Plombieres/plombieres.html' },
        { name: 'Pogny', url:'../../../laPosteDeLancienneFrance/Villes_P/Pogny/pogny.html' },
        { name: 'Poissy', url:'../../../laPosteDeLancienneFrance/Villes_P/Poissy/poissy.html' },
        { name: 'Poitiers', url:'../../../laPosteDeLancienneFrance/Villes_P/Poitiers/poitiers.html' },
        { name: 'Poix', url:'../../../laPosteDeLancienneFrance/Villes_P/Poix/poix.html' },
        { name: 'Poligny', url:'../../../laPosteDeLancienneFrance/Villes_P/Poligny/poligny.html' },
        { name: 'Pons', url:'../../../laPosteDeLancienneFrance/Villes_P/Pons/pons.html' },
        { name: 'Pont a Mousson', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont a Mousson/pontAMousson.html' },
        { name: 'Pont Audemer', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont Audemer/pontAudemer.html' },
        { name: 'Pont Chateau', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont Chateau/pontChateau.html' },
        { name: 'Pont D-Ain', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont D-Ain/pontDain.html' },
        { name: 'Pont-L-Abbe', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont-L-Abbe/pontLAbbe.html' },
        { name: 'Pont de Camares', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont de Camares/pontDeCamares.html' },
        { name: 'Pont-du-Chateau', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont-du-Chateau/pontDuChateau.html' },
        { name: 'Pont de L-Arche', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont de L-Arche/pontDeLarche.html' },
        { name: 'Pont de Vaux', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont de Vaux/pontDeVaux.html' },
        { name: 'Pont en Royans', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont en Royans/pontEnRoyan.html' },
        { name: 'Pont L-Eveque', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont L-Eveque/pontLéveque.html' },
        { name: 'Pont Saint Esprit', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont Saint Esprit/PontSaintEsprit.html' },
        { name: 'Pont Scorff', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont Scorff/pontScoff.html' },
        { name: 'Pont Ste Maxence', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont Ste Maxence/pontSteMaxence.html' },
        { name: 'Pont sur Seine', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont sur Seine/pontSurSeine.html' },
        { name: 'Pont sur Yonne', url:'../../../laPosteDeLancienneFrance/Villes_P/Pont sur Yonne/pontSurYonne.html' },
        { name: 'Pontailler', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontailler/pontailler.html' },
        { name: 'Pontarlier', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontarlier/pontarlier.html' },
        { name: 'Pontarneaud', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontarneaud/pontarneaud.html' },
        { name: 'Pontchartrain', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontchartrain/pontchartrain.html' },
        { name: 'Ponthierry', url:'../../../laPosteDeLancienneFrance/Villes_P/Ponthierry/ponthierry.html' },
        { name: 'Pontigny', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontigny/pontigny.html' },
        { name: 'Pontivy', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontivy/pontivy.html' },
        { name: 'Pontoise', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontoise/pontoise.html' },
        { name: 'Port-Louis', url:'../../../laPosteDeLancienneFrance/Villes_P/Port-Louis/portLouis.html' },
        { name: 'Pontorson', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontorson/pontorson.html' },
        { name: 'Pontrieux', url:'../../../laPosteDeLancienneFrance/Villes_P/Pontrieux/pontrieux.html' },
        { name: 'Poperingue', url:'../../../laPosteDeLancienneFrance/Villes_P/Poperingue/poperingue.html' },
        { name: 'Pornic', url:'../../../laPosteDeLancienneFrance/Villes_P/Pornic/pornic.html' },
        { name: 'Port de Piles', url:'../../../laPosteDeLancienneFrance/Villes_P/Port de Piles/portDePiles.html' },
        { name: 'Port Saint Pere', url:'../../../laPosteDeLancienneFrance/Villes_P/Port Saint Pere/portSaintPere.html' },
        { name: 'Port Sainte Marie', url:'../../../laPosteDeLancienneFrance/Villes_P/Port Sainte Marie/portSainteMarie.html' },
        { name: 'Port sur Saone', url:'../../../laPosteDeLancienneFrance/Villes_P/Port sur Saone/portSurSaone.html' },
        { name: 'Port Vendres', url:'../../../laPosteDeLancienneFrance/Villes_P/Port Vendres/portVendres.html' },
        { name: 'Pougues', url:'../../../laPosteDeLancienneFrance/Villes_P/Pougues/pougues.html' },
        { name: 'Pouilly sur Loire', url:'../../../laPosteDeLancienneFrance/Villes_P/Pouilly sur Loire/pouillySurLoire.html' },
        { name: 'Pouzauges', url:'../../../laPosteDeLancienneFrance/Villes_P/Pouzauges/pouzauges.html' },
        { name: 'Prades', url:'../../../laPosteDeLancienneFrance/Villes_P/Prades/prades.html' },
        { name: 'Prats de Mollo', url:'../../../laPosteDeLancienneFrance/Villes_P/Prats de Mollo/pratsDeMollo.html' },
        { name: 'Preignac', url:'../../../laPosteDeLancienneFrance/Villes_P/Preignac/preignac.html' },
        { name: 'Pretot', url:'../../../laPosteDeLancienneFrance/Villes_P/Pretot/pretot.html' },
        { name: 'Preuilly', url:'../../../laPosteDeLancienneFrance/Villes_P/Preuilly/preuilly.html' },
        { name: 'Prez en Pail', url:'../../../laPosteDeLancienneFrance/Villes_P/Prez en Pail/prezEnPail.html' },
        { name: 'Privas', url:'../../../laPosteDeLancienneFrance/Villes_P/Privas/privas.html' },
        { name: 'Provins', url:'../../../laPosteDeLancienneFrance/Villes_P/Provins/provins.html' },
        { name: 'Puiseaux', url:'../../../laPosteDeLancienneFrance/Villes_P/Puiseaux/puiseaux.html' },
        { name: 'Puttelange', url:'../../../laPosteDeLancienneFrance/Villes_P/Puttelange/puttelenge.html' },
        { name: 'Puy Laurens', url:'../../../laPosteDeLancienneFrance/Villes_P/Puy Laurens/puyLaurens.html' },
        { name: 'Puydarrieux', url:'../../../laPosteDeLancienneFrance/Villes_P/Puydarrieux/puydarrieux.html' },

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