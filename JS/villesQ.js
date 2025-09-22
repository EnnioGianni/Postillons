document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'La-Queue-En-Beauce', url:'../../../laPosteDeLancienneFrance/Villes_Q/La-Queue-En-Beauce/laQueueEnBeauce.html' },
        { name: 'La-Queue-En-Brie', url:'../../../laPosteDeLancienneFrance/Villes_Q/La-Queue-En-Brie/laQueueEnBrie.html' },
        { name: 'Le-Quesnoy', url:'../../../laPosteDeLancienneFrance/Villes_Q/Le-Quesnoy/leQuesnoy.html' },
        { name: 'Querhoent', url:'../../../laPosteDeLancienneFrance/Villes_Q/Querhoent/querhoent.html' },
        { name: 'Quiberon', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quiberon/quiberon.html' },
        { name: 'Quilleboeuf', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quilleboeuf/quilleboeuf.html' },
        { name: 'Quimper', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quimper/quimper.html' },
        { name: 'Quimperle', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quimperle/quimperle.html' },
        { name: 'Quingey', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quingey/quingey.html' },
        { name: 'Quintin', url:'../../../laPosteDeLancienneFrance/Villes_Q/Quintin/quintin.html' },

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