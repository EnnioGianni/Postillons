

document.addEventListener('DOMContentLoaded', function () {
    const villes = [

        "LA Seyne-sur-Mer", "La Souterraine", "La Suze", "Le Sap", "Les-Sables-Dolonne",
        "Petite Poste de Strasbourg", "Sable", "Saint-Afrique", "Saint-Aignan", "Saint-Amand-en-Berry",
        "Saint-Amand-les-Eaux", "Saint-Ambroix", "Saint-Amour", "Saint-Andre-de-Cubsac", "Saint-Antonin",
        "Saint-Astier", "Saint-Avold", "Saint-Beat", "Saint-Benoit-Du-Sault", "Saint-Bonnet-de-Joux", "Saint-Bonnet-en-Champsaur",
        "Saint-Brice", "Saint-Brieuc", "Saint-Bris", "Saint-Calais", "Saint-Cannat", "Saint-Cere",
        "Saint-Chamas", "Saint-Chamond", "Saint-Chinian", "Saint-Christophe", "Saint-Clar", "Saint-Claud",
        "Saint-Claude", "Saint-Cloud", "Saint-Cosme", "Saint-Cybardeaux", "Saint-Cyprien", "Saint-Denis",
        "Saint-Die", "Saint-Dizier", "Saint-Dye-sur-Loire", "Sainte-Foy", "Sainte-Livrade", "Sainte-Marie-aux-Mines",
        "Sainte-Maure", "Sainte-Menehould", "Sainte-Mere-Eglise", "Sainte-Reine", "Saintes", "Saint-Etienne",
        "Saint-Fargeau", "Saint-Florent", "Saint-Florentin", "Saint-Florent-le-Vieil", "Saint-Flour", "Saint-Fort-sur-Gironde",
        "Saint-Fulgent", "Saint-Gaudens", "Saint-Geniez", "Saint-Genis", "Saint-George", "Saint-Gerand",
        "Saint-Germain-en-Laye", "Saint-Germain-L_Espinasse", "Saint-Gilles", "Saint-Gilles-sur-Vie", "Saint-Girons",
        "Saint-Hermand", "Saint-Hilaire-du-Harcouet", "Saint-Hippolyte", "Saint-Hubert-le-Roi", "Saint-James-de-Beuvron",
        "Saint-Jean-D_Angely", "Saint-Jean-De-Gardoningue", "Saint-Jean-de-Gonville", "Saint-Jean-de-Losne", "Saint-Jean-de-Luz",
        "Saint-Jean-de-Vedaz", "Saint-Jean-du-Bruel", "Saint-Jean-le-Vieux", "Saint-Jean-Pied-de-Port", "Saint-Jory",
        "Saint-Julien-le-Faucon", "Saint-Just", "Saint-Lambert-du-Lattay", "Saint-Laurent", "Saint-Laurent-de-Cerdans",
        "Saint-Laurent-du-Var", "Saint-Laurent-les-Eaux", "Saint-Leonard", "Saint-Lizier", "Saint-Lo", "Saint-Lys",
        "Saint-Macaire", "Saint-Maixent", "Saint-Malo", "Saint-Marcellin", "Saint-Martin-d’Estreaux", "Saint-Martin-de-Re",
        "Saint-Martin-Valmeroux", "Saint-Martory", "Saint-Maurice", "Saint-Maximin", "Saint-Mihiel", "Saint-Nicolas-du-Port",
        "Saint-Nicolas-de-la-Grave", "Saint-Omer", "Saint-Pardoux", "Saint-Paul-de-Vence", "Saint-Paul-Trois-Châteaux",
        "Saint-Péray", "Saint-Père-en-Retz", "Saint-Pierre-Eglise", "Saint-Pierre-le-Moutier", "Saint-Pierre-sur-Dives",
        "Saint-Pol", "Saint-Pol-de-Leon", "Saint-Pons", "Saint-Porchaire", "Saint-Pourçain", "Saint-Privat",
        "Saint-Quentin", "Saint-Rambert", "Saint-Remy", "Saint-Romain", "Saint-Rome-de-Tarn", "Saint-Saens",
        "Saint-Saulge", "Saint-Sauveur-le-Vicomte", "Saint-Savin", "Saint-Savinien", "Saint-Seine", "Saint-Sernin",
        "Saint-Sever", "Saint-Symphorien-d’Ozon", "Saint-Symphorien-de-Lay", "Saint-Tropez", "Saint-Valery-en-Caux",
        "Saint-Valery-sur-Somme", "Saint-Vallier", "Saint-Venant", "Saint-Yrieix", "Salbris", "Salces",
        "Salers", "Salins", "Salon", "Samatan", "Samer", "Sancerre", "Sancois", "Sannois", "Sansergues",
        "Saragnac", "Sarlat", "Sarralbe", "Sarrebourg", "Sarreguemines", "Sarrelouis", "Sartene", "Sassangy",
        "Saujon", "Saulieu", "Saumur", "Sauve", "Sauze", "Savenay", "Saverdun", "Saverne", "Seclin", "Sedan",
        "Sées", "Segnelay", "Sélestat", "Selongey", "Semur", "Semur-en-Brionnais", "Senez", "Senlis", "Sennecey",
        "Senonches", "Sens", "Sernhac", "Serres", "Sete", "Seurre", "Severac", "Sevres", "Seyne", "Sezanne",
        "Sierentz", "Sigean", "Sille-le-Guillaume", "Sillery", "Sisteron", "Soissons", "Solliès", "Solre-le-Chateau",
        "Sombernon", "Sommieres", "Songeons", "Souillac", "Sourdeval", "Souvigny", "Spincourt", "Stenay",
        "Strasbourg", "Suette", "Sumene", "Surgeres", "Suzennecourt"
    ];

// Fonction de normalisation pour comparaison robuste
    function normalizeText(str) {
        return str
            .normalize("NFD")                    // décompose les accents
            .replace(/[\u0300-\u036f]/g, "")     // enlève les accents
            .replace(/[^a-zA-Z0-9]/g, "")        // enlève tout sauf lettres/chiffres
            .toLowerCase();                      // en minuscule
    }

    const input = document.getElementById('villeInput');
    const dropdownContent = document.getElementById('dropdownContent');
    const villeLink = document.getElementById('villeLink');

    // Création des liens et stockage du nom normalisé
    const cityLinks = villes.map(ville => {
        const dossier = ville.replace(/ /g, '-');
        const fichier = ville
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // retire accents
            .replace(/[-’'`]/g, '') // retire apostrophes et tirets
            .replace(/[^a-zA-Z0-9 ]/g, '') // caractères spéciaux
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join('');

        const link = document.createElement('a');
        link.href = `../../../laPosteDeLancienneFrance/Villes S/${dossier}/${fichier}.html`;
        link.textContent = ville;
        link.dataset.normalized = normalizeText(ville); // version normalisée pour recherche
        dropdownContent.appendChild(link);

        return link;
    });

    // Recherche : normalisation du texte utilisateur
    input.addEventListener('input', function () {
        const filter = normalizeText(input.value);

        cityLinks.forEach(link => {
            const normalizedCity = link.dataset.normalized;
            link.style.display = normalizedCity.includes(filter) ? '' : 'none';
        });
    });

    // Redirection au clic
    dropdownContent.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'A') {
            villeLink.innerHTML = ' &emsp;&emsp;' + target.textContent + '<i class="fas fa-caret-down"></i>';
            window.location.href = target.href;
        }
    });
});