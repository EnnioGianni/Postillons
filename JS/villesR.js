document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Ile De Re', url:'../../../laPosteDeLancienneFrance/Villes_R/Ile De Re/ileDeRe.html' },
        { name: 'La Reole', url:'../../../laPosteDeLancienneFrance/Villes_R/La Reole/laReole.html' },
        { name: 'La Riviere Thibouville', url:'../../../laPosteDeLancienneFrance/Villes_R/La Riviere Thibouville/laRivierThibouville.html' },
        { name: 'La Roche Bernard', url:'../../../laPosteDeLancienneFrance/Villes_R/La Roche Bernard/laRocheBernard.html' },
        { name: 'La Roche Chalais', url:'../../../laPosteDeLancienneFrance/Villes_R/La Roche Chalais/laRocheChalais.html' },
        { name: 'La Roche Derrien', url:'../../../laPosteDeLancienneFrance/Villes_R/La Roche Derrien/laRocheDerrien.html' },
        { name: 'La Roche sur Yon', url:'../../../laPosteDeLancienneFrance/Villes_R/La Roche sur Yon/laRocheSurYon.html' },
        { name: 'La Rochefoucault', url:'../../../laPosteDeLancienneFrance/Villes_R/La Rochefoucault/laRochefoucault.html' },
        { name: 'La Rochelle', url:'../../../laPosteDeLancienneFrance/Villes_R/La Rochelle/laRochelle.html' },
        { name: 'Le Ribay', url:'../../../laPosteDeLancienneFrance/Villes_R/Le Ribay/leRibay.html' },
        { name: 'Les Rosiers', url:'../../../laPosteDeLancienneFrance/Villes_R/Les Rosiers/lesRosiers.html' },
        { name: 'Petite Poste de Rouen', url:'../../../laPosteDeLancienneFrance/Villes_R/Petite Poste de Rouen/petitPosteDeRouen.html' },
        { name: 'Rabastens', url:'../../../laPosteDeLancienneFrance/Villes_R/Rabastens/rabastens.html' },
        { name: 'Rambervillers', url:'../../../laPosteDeLancienneFrance/Villes_R/Rambervillers/rambervillers.html' },
        { name: 'Rambouillet', url:'../../../laPosteDeLancienneFrance/Villes_R/Rambouillet/rambouillet.html' },
        { name: 'Raon', url:'../../../laPosteDeLancienneFrance/Villes_R/Raon/raon.html' },
        { name: 'Razes', url:'../../../laPosteDeLancienneFrance/Villes_R/Razes/razes.html' },
        { name: 'Rebais', url:'../../../laPosteDeLancienneFrance/Villes_R/Rebais/rebais.html' },
        { name: 'Redon', url:'../../../laPosteDeLancienneFrance/Villes_R/Redon/redon.html' },
        { name: 'Reims', url:'../../../laPosteDeLancienneFrance/Villes_R/Reims/reims.html' },
        { name: 'Remalard', url:'../../../laPosteDeLancienneFrance/Villes_R/Remalard/remalard.html' },
        { name: 'Remiremont', url:'../../../laPosteDeLancienneFrance/Villes_R/Remiremont/remiremont.html' },
        { name: 'Remoulins', url:'../../../laPosteDeLancienneFrance/Villes_R/Remoulins/remoulins.html' },
        { name: 'Rennes', url:'../../../laPosteDeLancienneFrance/Villes_R/Rennes/rennes.html' },
        { name: 'Rethel', url:'../../../laPosteDeLancienneFrance/Villes_R/Rethel/rethel.html' },
        { name: 'Revel', url:'../../../laPosteDeLancienneFrance/Villes_R/Revel/revel.html' },
        { name: 'Rians', url:'../../../laPosteDeLancienneFrance/Villes_R/Rians/rians.html' },
        { name: 'Riberac', url:'../../../laPosteDeLancienneFrance/Villes_R/Riberac/riberac.html' },
        { name: 'Richelieu', url:'../../../laPosteDeLancienneFrance/Villes_R/Richelieu/richelieu.html' },
        { name: 'Rieux', url:'../../../laPosteDeLancienneFrance/Villes_R/Rieux/rieux.html' },
        { name: 'Riez', url:'../../../laPosteDeLancienneFrance/Villes_R/Riez/riez.html' },
        { name: 'Riom', url:'../../../laPosteDeLancienneFrance/Villes_R/Riom/riom.html' },
        { name: 'Rioz', url:'../../../laPosteDeLancienneFrance/Villes_R/Rioz/rioz.html' },
        { name: 'Ris', url:'../../../laPosteDeLancienneFrance/Villes_R/Ris/ris.html' },
        { name: 'Rive de Gier', url:'../../../laPosteDeLancienneFrance/Villes_R/Rive de Gier/riveDeGier.html' },
        { name: 'Rives', url:'../../../laPosteDeLancienneFrance/Villes_R/Rives/rives.html' },
        { name: 'Rivesalte', url:'../../../laPosteDeLancienneFrance/Villes_R/Rivesalte/rivesalte.html' },
        { name: 'Roanne', url:'../../../laPosteDeLancienneFrance/Villes_R/Roanne/roanne.html' },
        { name: 'Rochechouart', url:'../../../laPosteDeLancienneFrance/Villes_R/Rochechouart/rochechouart.html' },
        { name: 'Rochefort en Beauge', url:'../../../laPosteDeLancienneFrance/Villes_R/Rochefort en Beauge/rochefortEnBeauge.html' },
        { name: 'Rochefort en Terre', url:'../../../laPosteDeLancienneFrance/Villes_R/Rochefort en Terre/rochefortEnTerre.html' },
        { name: 'Rochefort sur Mer', url:'../../../laPosteDeLancienneFrance/Villes_R/Rochefort sur Mer/rochefortSurMer.html' },
        { name: 'Rochefort-62', url:'../../../laPosteDeLancienneFrance/Villes_R/Rochefort-62/rochefort62.html' },
        { name: 'Rocheserviere', url:'../../../laPosteDeLancienneFrance/Villes_R/Rocheserviere/rocheserviere.html' },
        { name: 'Rocroi', url:'../../../laPosteDeLancienneFrance/Villes_R/Rocroi/rocroi.html' },
        { name: 'Rodez', url:'../../../laPosteDeLancienneFrance/Villes_R/Rodez/rodez.html' },
        { name: 'Rogliano ou Cap Corse', url:'../../../laPosteDeLancienneFrance/Villes_R/Rogliano ou Cap Corse/roglianoOuCapCorse.html' },
        { name: 'Romans', url:'../../../laPosteDeLancienneFrance/Villes_R/Romans/romans.html' },
        { name: 'Romorantin', url:'../../../laPosteDeLancienneFrance/Villes_R/Romorantin/romorantin.html' },
        { name: 'Roquevaire', url:'../../../laPosteDeLancienneFrance/Villes_R/Roquevaire/roquevaire.html' },
        { name: 'Rosny sur Seine', url:'../../../laPosteDeLancienneFrance/Villes_R/Rosny sur Seine/rosnySurSeine.html' },
        { name: 'Rosporden', url:'../../../laPosteDeLancienneFrance/Villes_R/Rosporden/rosporden.html' },
        { name: 'Rostrenen', url:'../../../laPosteDeLancienneFrance/Villes_R/Rostrenen/rostrenen.html' },
        { name: 'Rouen', url:'../../../laPosteDeLancienneFrance/Villes_R/Rouen/rouen.html' },
        { name: 'Rouffach', url:'../../../laPosteDeLancienneFrance/Villes_R/Rouffach/rouffach.html' },
        { name: 'Rougemaison', url:'../../../laPosteDeLancienneFrance/Villes_R/Rougemaison/rougemaison.html' },
        { name: 'Roullers (Flandre)', url:'../../../laPosteDeLancienneFrance/Villes_R/Roullers (Flandre)/roullers.html' },
        { name: 'Rouvray', url:'../../../laPosteDeLancienneFrance/Villes_R/Rouvray/rouvray.html' },
        { name: 'Royan', url:'../../../laPosteDeLancienneFrance/Villes_R/Royan/royan.html' },
        { name: 'Roye', url:'../../../laPosteDeLancienneFrance/Villes_R/Roye/roye.html' },
        { name: 'Rozoy-en-Brie', url:'../../../laPosteDeLancienneFrance/Villes_R/Rozoy-en-Brie/rozoyEnBrie.html' },
        { name: 'Rozoy-sur-Serre', url:'../../../laPosteDeLancienneFrance/Villes_R/Rozoy-sur-Serre/rozoySurSerre.html' },
        { name: 'Rue', url:'../../../laPosteDeLancienneFrance/Villes_R/Rue/rue.html' },
        { name: 'Rueil', url:'../../../laPosteDeLancienneFrance/Villes_R/Rueil/rueil.html' },
        { name: 'Ruffec', url:'../../../laPosteDeLancienneFrance/Villes_R/Ruffec/ruffec.html' },
        { name: 'Rugles', url:'../../../laPosteDeLancienneFrance/Villes_R/Rugles/rugles.html' },

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