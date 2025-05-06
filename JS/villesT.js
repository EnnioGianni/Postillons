document.addEventListener('DOMContentLoaded', function () {
    const villes = [
        "Taillebourg", "Tain", "Tallano", "Talmont", "Tannay", "Tarare", "Tarascon",
        "Tarascon-en-Foix", "Tarbes", "Tartas", "Tauves", "Le Teilleul",
        "Le Temple", "Tence", "Terrasson", "Tessy-sur-Vire", "Thann",
        "Thiers", "Les-Thilliers", "Thionville", "Thire", "Thiviers", "Thoissey",
        "Thouars", "Thuir", "Tiffauges", "Tillieres", "Tilly-d-Orceau", "Tinchebray",
        "Tonnay-Boutonne", "Tonneins", "Tonnerre", "Torcy", "Torigni", "Totes",
        "Toucy", "Toul", "Toulon", "Toulon-sur-Arroux", "Toulouse", "Touques",
        "La-Tour-du-Pin", "Tourcoing", "Tournan", "Tournay", "Tournon", "Tours",
        "Tourves", "Toury", "Trappes", "Treguier", "La-Tremblade", "Trevoux",
        "Trie", "Triel", "Tribardou", "La-Trimouille", "Les-Trois-Maisons", "Les-Trois-Volets",
        "Trouard", "Troyes", "Tulle", "Tullins"
    ];

    function normalizeText(str) {
        return str
            .normalize("NFD")                    // Décompose accents
            .replace(/[\u0300-\u036f]/g, "")     // Supprime accents
            .replace(/[^a-zA-Z0-9]/g, "")        // Supprime les caractères spéciaux
            .toLowerCase();                      // Minuscule
    }

    const input = document.getElementById('villeInput');
    const dropdownContent = document.getElementById('dropdownContent');
    const villeLink = document.getElementById('villeLink');

    const cityLinks = villes.map(ville => {
        const dossier = ville.replace(/ /g, '-').replace(/'/g, '').replace(/é/g, 'e');
        const fichier = ville
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Sans accents
            .replace(/[-’'`]/g, '') // Sans apostrophes/tirets
            .replace(/[^a-zA-Z0-9 ]/g, '') // Sans caractères spéciaux
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join('');

        const link = document.createElement('a');
        link.href = `../../../laPosteDeLancienneFrance/Villes T/${dossier}/${fichier}.html`;
        link.textContent = ville;
        link.dataset.normalized = normalizeText(ville);
        dropdownContent.appendChild(link);

        return link;
    });

    input.addEventListener('input', function () {
        const filter = normalizeText(input.value);
        cityLinks.forEach(link => {
            const normalizedCity = link.dataset.normalized;
            link.style.display = normalizedCity.includes(filter) ? '' : 'none';
        });
    });

    dropdownContent.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'A') {
            villeLink.innerHTML = ' &emsp;&emsp;' + target.textContent + '<i class="fas fa-caret-down"></i>';
            window.location.href = target.href;
        }
    });
});