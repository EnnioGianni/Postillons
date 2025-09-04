document.addEventListener('DOMContentLoaded', function () {
    const villes = [
        "Couterne", "Coutras", "Couture", "Cozes", "Craon", "Craponne", "Crecy En Brie", "Creil", "Cremieu", "Crepy en Valois", "Cressensac", "Crest", "Crevecoeur", "Croissanville", "Crolles", "Cuers", "Cuges", "Culan", "cadillac", "caen","cahors", "Cahusac", "Calais", "Calvi", "Calvisson", "Camaret", "Cambrai", "Cande", "cannes", "Cany", "Caraman", "Carcassonne", "Carentan", "Carhaix", "Carignan", "CarlaBayle", "Carpentras", "Carrouge", "Carvin", "Casal", "Cassel", "Cassis", "Castelfranc", "Casteljaloux", "Castellane", "Castelnau",
        "Caudebec", "Caudrot", "Caudry", "Caussade", "Cautere,ts", "Cavaillon", "Cavignac", "Caylus", "Cazeres", "Cercles", "Cerdon", "Céret", "Cernay", "Cervione", "Cette", "Chabanais", "Chablis", "Chagny", "La Chaise-Dieu", "Chalabre", "Chalamont", "Le Chalard", "Chalaure", "Challans", "halon sur Saône", "Chalon Sur Marne", "Chalus", "Chambly", "Chambon", "Chambord","Chambrais", "Champagnole", "Champigny", "Champlitte", "Champrond", "Chanceaux", "Chanteloube", "Chantilly", "Chantonnay", "Chaource", "Charente", "Charenton", "La Charite", "Charlemont", "Charleroi", "Charleville", "Charly", "Charmes", "Charolles", "Charost", "Chartre sur le Loir", "Chartre", "Chataigneraie", "Chateau-Chalon", "Chateau-Chinon", "Chateau-du-Loir", "Chateau-Gontier", "Chateau-Landon", "Chateau-Porcien", "Chateau-Renault", "Chateau-Salins", "Chateau-Thierry", "Chateau-Villain", "Chateaubriant", "Chateaudun", "Chateaulin", "Chateaumeillant", "Chateauneuf","Chateauneuf de Bretagne", "Chateauneuf sur Cher", "Chateauneuf en Thymerais", "Chateauroux", "Chatel sur Moselle", "Chatelaudren", "Le chatelet en Brie", "Chatellerault", "Chatillon de Michaille", "Chatillon les Dombes", "Chatillon sur Indre", "Chatillon sur Loing", "Chatillon sur Loire", "Chatillon sur Marne", "Chatillon sur Seine", "Chatillon sur Sevre", "Chatou", "La Chatre", "Chaudesaigues", "Chaumes", "Chaumont en Bassigny", "Chaumont en Vexin", "Chaunai", "Chauny", "La Chaussee", "Chauvigny", "Chazelles", "Chef Boutonne", "Chelles", "Chemille", "Chenerailles", "Cherbourg", "Cheroy", "Chevilly","Chevreuse", "Chezy", "Chilleurs", "Chinon", "Choisy le Roi", "Cholet", "Chomerac", "Chorges", "Chouze", "Cingetabelle", "Cintrey", "La Ciotat", "Cirey S Blaise", "Civray", "Cizay", "Clairac", "Clairvaux", "Clamecy", "Claye", "La Clayette", "Clermont en Argonne", "Clermont en Beauvoisis", "Clermont Ferrand", "Clermont Lodeve", "Clerval", "Clery", "Clisson", "Cloyes", "Cluny", "Cocherel", "Cognac", "Coillure", "Coincy", "Collobrieres", "Collonges", "Colombey", "Combouin", "Combourg", "Commercy", "Compiegne", "Concarneau", "Conches", "Conde", "Conde sur Noireau", "Condom", "Condrieux", "Confolens", "Connerre", "Corbeil", "Corbie", "Corbeny", "Corbigny", "Cordes", "Cormoz", "Corps", "Corse", "Corte", "Cosne", "La Cote St Andre", "Cotignac", "Coubert", "Couches", "Couhe", "Coulanges sur Yonne", "Coullomiers", "Courgivaux", "Courson", "Courtanvault S Loir", "Courtenay", "Courtomer", "Courtrai", "Courville", "Coutances", "cadenet"

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
        link.href = `../../../laPosteDeLancienneFrance/Villes C/${dossier}/${fichier}.html`;
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