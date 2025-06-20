document.addEventListener('DOMContentLoaded', function () {
    const villes = [
        "La-Valette", "La-Verpilliere", "La-Ville-Aux-Clercs","La-Voulte","Le-Vaudreuil","Le-Vigan","Les-Vans","Vabres","Valancay","Valence","Valence-D-Agen","Valenciennes","Valensolle","Valmont","Valognes","Valreas","Vannes","Varades","Varennes-Sur-Allier","Varennes-En-Argonne","Varilles","Varzy","Vassy","Vassy-Sur-Blaise","Vatan","Vau-Du-Loir","Vaucouleurs","Vence","Vendome","Vendreuvre","Verberie","Verdun","Verdun-Sur-Le-Doubs","Vermenton","Vernegues","Verneuil","Vernon","Vernoux","Versailles","Versoix","Vertus","Vervins","Vescovato","Vesoul","Veynes","Vezelay","Vezelise","Vic","Vic-Fezensac","Vichy","Vico","Vidauban","Vieille-Lyre","Vienne","Vierzon","Vignory","Vigny","Villaines-La-Juhel","Villedieu-Les-Poeles","Villefagnan","Villefort","Villefranche-De-Beaujolais","Villefranche-De-Conflent","Villefranche-De-Lauragais","Villefranche-De-Rouergue","Villejuif","Villenauxe","Villeneuve-D-Agen","Villeneuve-De-Berg","Villeneuve-L-Archeveque","Villeneuve-La-Guyard","Villeneuve-Le-Roi","Villeneuve-Les-Avignon","Villeneuve-Saint-Georges","Villeneuve-Sur-Verberie","Villeparisis","Villepreux","Villequiers","Villers-Bocage","Villers-Cotterets","Villersexel","Villevallier","Vimoutiers","Vinay","Vincennes","Vire","Vitry-Le-Francois","Vitry-Sur-Seine","Vitteaux","Viviers","Vivonne","Vizille","Void","Voiron","Vouzailles","Vouziers","Vue","Vuillaffan","Virieu","Vitre"
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
        link.href = `../../../laPosteDeLancienneFrance/Villes V/${dossier}/${fichier}.html`;
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