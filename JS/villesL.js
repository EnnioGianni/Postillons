document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Lagny', url: '/laPosteDeLancienneFrance/Villes L/Lagny/lagny.html' },
        { name: 'Laignes', url: '/laPosteDeLancienneFrance/Villes L/Laignes/Laignes.html' },
        { name: 'Lailly', url: '/laPosteDeLancienneFrance/Villes L/Lailly/Lailly.html' },
        { name: 'Lalinde', url: '/laPosteDeLancienneFrance/Villes L/Lalinde/Lalinde.html' },
        { name: 'Lamarche', url: '/laPosteDeLancienneFrance/Villes L/Lamarche/Lamarche.html' },
        { name: 'Lamballe', url: '/laPosteDeLancienneFrance/Villes L/Lamballe/Lamballe.html' },
        { name: 'Lambesc', url: '/laPosteDeLancienneFrance/Villes L/Lambesc/Lambesc.html' },
        { name: 'Landau', url: '/laPosteDeLancienneFrance/Villes L/Landau/Landau.html' },
        { name: 'Landerneau', url: '/laPosteDeLancienneFrance/Villes L/Landerneau/Landerneau.html' },
        { name: 'Landivisiau', url: '/laPosteDeLancienneFrance/Villes LLandivisiau/Landivisiau/.html' },
        { name: 'Landrecies', url: '/laPosteDeLancienneFrance/Villes L/Landrecies/Landrecies.html' },
        { name: 'Landser', url: '/laPosteDeLancienneFrance/Villes L/Landser/Landser.html' },
        { name: 'Langeac', url: '/laPosteDeLancienneFrance/Villes LLangeac/Langeac/.html' },
        { name: 'Langeais', url: '/laPosteDeLancienneFrance/Villes L/Langeais/Langeais.html' },
        { name: 'Langennerie', url: '/laPosteDeLancienneFrance/Villes L/Langennerie/Langennerie.html' },
        { name: 'Langogne', url: '/laPosteDeLancienneFrance/Villes L/Langogne/Langogne.html' },
        { name: 'Langon', url: '/laPosteDeLancienneFrance/Villes L/Langon/Langon.html' },
        { name: 'Langres', url: '/laPosteDeLancienneFrance/Villes L/Langres/Langres.html' },
        { name: 'Lannion', url: '/laPosteDeLancienneFrance/Villes LLannion/Lannion/.html' },
        { name: 'Laon', url: '/laPosteDeLancienneFrance/Villes L/Laon/Laon.html' },
        { name: 'Largentière', url: '/laPosteDeLancienneFrance/Villes L/Largentière/Largentière.html' },
        { name: 'Laspeyres', url: '/laPosteDeLancienneFrance/Villes L/Laspeyres/Laspeyres.html' },
        { name: 'Launoy', url: '/laPosteDeLancienneFrance/Villes L/Launoy/Launoy.html' },
        { name: 'Lauterbourg', url: '/laPosteDeLancienneFrance/Villes L/Lauterbourg/Lauterbourg.html' },
        { name: 'Lauzerte', url: '/laPosteDeLancienneFrance/Villes L/Lauzerte/Lauzerte.html' },
        { name: 'Laval', url: '/laPosteDeLancienneFrance/Villes L/Laval/Laval.html' },
        { name: 'Lavaur', url: '/laPosteDeLancienneFrance/Villes L/Lavaur/Lavaur.html' },
        { name: 'LavitDeLoumagne', url: '/laPosteDeLancienneFrance/Villes L/LavitDeLoumagne/LavitDeLoumagne.html' },
        { name: 'Lectoure', url: '/laPosteDeLancienneFrance/Villes L/Lectoure/Lectoure.html' },
        { name: 'Ledignan', url: '/laPosteDeLancienneFrance/Villes L/Ledignan/Ledignan.html' },
        { name: 'Lege', url: '/laPosteDeLancienneFrance/Villes L/Lege/Lege.html' },
        { name: 'Lens', url: '/laPosteDeLancienneFrance/Villes L/Lens/Lens.html' },
        { name: 'Lescar', url: '/laPosteDeLancienneFrance/Villes L/Lescar/Lescar.html' },
        { name: 'Lesneven', url: '/laPosteDeLancienneFrance/Villes L/Lesneven/Lesneven.html' },
        { name: 'Levet', url: '/laPosteDeLancienneFrance/Villes L/Levet/Levet.html' },
        { name: 'Levroux', url: '/laPosteDeLancienneFrance/Villes L/Levroux/Levroux.html' },
        { name: 'Lezat', url: '/laPosteDeLancienneFrance/Villes L/Lezat/Lezat.html' },
        { name: 'Lézignan', url: '/laPosteDeLancienneFrance/Villes L/Lézignan/Lézignan.html' },
        { name: 'Lezou', url: '/laPosteDeLancienneFrance/Villes L/Lezou/Lezou.html' },
        { name: 'Libourne', url: '/laPosteDeLancienneFrance/Villes L/Libourne/Libourne.html' },
        { name: 'Lieuray', url: '/laPosteDeLancienneFrance/Villes L/Lieuray/Lieuray.html' },
        { name: 'Lieusaint', url: '/laPosteDeLancienneFrance/Villes L/Lieusaint/Lieusaint.html' },
        { name: 'Lignieres', url: '/laPosteDeLancienneFrance/Villes L/Lignieres/Lignieres.html' },
        { name: 'Ligny En Barrois', url: '/laPosteDeLancienneFrance/Villes L/LignyEnBarrois/LignyEnBarrois.html' },
        { name: 'Ligueil', url: '/laPosteDeLancienneFrance/Villes L/Ligueil/Ligueil.html' },
        { name: 'Lihons', url: '/laPosteDeLancienneFrance/Villes L/Lihons/Lihons.html' },
        { name: 'Lille', url: '/laPosteDeLancienneFrance/Villes L/Lille/Lille.html' },
        { name: 'Lillebonne', url: '/laPosteDeLancienneFrance/Villes L/Lillebonne/Lillebonne.html' },
        { name: 'Lillers', url: '/laPosteDeLancienneFrance/Villes L/Lillers/Lillers.html' },
        { name: 'Limoges', url: '/laPosteDeLancienneFrance/Villes L/Limoges/Limoges.html' },
        { name: 'Limours', url: '/laPosteDeLancienneFrance/Villes L/Limours/Limours.html' },
        { name: 'Limoux', url: '/laPosteDeLancienneFrance/Villes L/Limoux/Limoux.html' },
        { name: 'Linas', url: '/laPosteDeLancienneFrance/Villes L/Linas/Linas.html' },
        { name: 'Lisieux', url: '/laPosteDeLancienneFrance/Villes L/Lisieux/Lisieux.html' },
        { name: 'Livarot', url: '/laPosteDeLancienneFrance/Villes L/Livarot/Livarot.html' },
        { name: 'Livry', url: '/laPosteDeLancienneFrance/Villes L/Livry/Livry.html' },
        { name: 'Lisy', url: '/laPosteDeLancienneFrance/Villes L/Lisy/Lisy.html' },
        { name: 'Loches', url: '/laPosteDeLancienneFrance/Villes L/Loches/Loches.html' },
        { name: 'Locmine', url: '/laPosteDeLancienneFrance/Villes L/Locmine/Locmine.html' },
        { name: 'Lodeve', url: '/laPosteDeLancienneFrance/Villes L/Lodeve/Lodeve.html' },
        { name: 'Lombez', url: '/laPosteDeLancienneFrance/Villes L/Lombez/Lombez.html' },
        { name: 'Longeray', url: '/laPosteDeLancienneFrance/Villes L/Longeray/Longeray.html' },
        { name: 'Longny', url: '/laPosteDeLancienneFrance/Villes L/Longny/Longny.html' },
        { name: 'Longuyon', url: '/laPosteDeLancienneFrance/Villes L/Longuyon/Longuyon.html' },
        { name: 'Longwy', url: '/laPosteDeLancienneFrance/Villes L/Longwy/Longwy.html' },
        { name: 'Lonjumeau', url: '/laPosteDeLancienneFrance/Villes L/Lonjumeau/Lonjumeau.html' },
        { name: 'Lons Le Saunier', url: '/laPosteDeLancienneFrance/Villes L/LonsLeSaunier/LonsLeSaunier.html' },
        { name: 'Lorgues', url: '/laPosteDeLancienneFrance/Villes L/Lorgues/Lorgues.html' },
        { name: 'Lorient', url: '/laPosteDeLancienneFrance/Villes L/Lorient/Lorient.html' },
        { name: 'Loriol', url: '/laPosteDeLancienneFrance/Villes L/Loriol/Loriol.html' },
        { name: 'Lormes', url: '/laPosteDeLancienneFrance/Villes L/Lormes/Lormes.html' },
        { name: 'Lorris', url: '/laPosteDeLancienneFrance/Villes L/Lorris/Lorris.html' },
        { name: 'Loudeac', url: '/laPosteDeLancienneFrance/Villes L/Loudeac/Loudeac.html' },
        { name: 'Loudun', url: '/laPosteDeLancienneFrance/Villes L/Loudun/Loudun.html' },
        { name: 'Louhans', url: '/laPosteDeLancienneFrance/Villes L/Louhans/Louhans.html' },
        { name: 'La Loupe', url: '/laPosteDeLancienneFrance/Villes L/Loupe/laLoupe.html' },
        { name: 'Loupian', url: '/laPosteDeLancienneFrance/Villes L/Loupian/Loupian.html' },
        { name: 'Louviers', url: '/laPosteDeLancienneFrance/Villes LLouviers/Louviers/.html' },
        { name: 'Louvois', url: '/laPosteDeLancienneFrance/Villes L/Louvois/Louvois.html' },
        { name: 'Louvres', url: '/laPosteDeLancienneFrance/Villes L/Louvres/Louvres.html' },
        { name: 'Le Luc', url: '/laPosteDeLancienneFrance/Villes L/leLuc/Luc.html' },
        { name: 'Lucenay l évêque', url: '/laPosteDeLancienneFrance/Villes L//.html' },
        { name: 'LucenayLeveque', url: '/laPosteDeLancienneFrance/Villes L/LucenayLeveque/lucenayLeveque.html' },
        { name: 'Lucon', url: '/laPosteDeLancienneFrance/Villes L/Lucon/Lucon.html' },
        { name: 'Lucy Le Bois', url: '/laPosteDeLancienneFrance/Villes L/LucyLeBois/LucyLeBois.html' },
        { name: 'Le Lude', url: '/laPosteDeLancienneFrance/Villes L/Lude/leLude.html' },
        { name: 'Lunel', url: '/laPosteDeLancienneFrance/Villes L/Lunel/Lunel.html' },
        { name: 'Lunéville', url: '/laPosteDeLancienneFrance/Villes L/Lunéville/Lunéville.html' },
        { name: 'lure', url: '/laPosteDeLancienneFrance/Villes L/lure/lure.html' },
        { name: 'Lusignan', url: '/laPosteDeLancienneFrance/Villes L/Lusignan/Lusignan.html' },
        { name: 'Lussac Les Château', url: '/laPosteDeLancienneFrance/Villes L/LussacLesChateau/LussacLesChateau.html' },
        { name: 'Luxeuil', url: '/laPosteDeLancienneFrance/Villes L/Luxeuil/Luxeuil.html' },
        { name: 'Luzarches', url: '/laPosteDeLancienneFrance/Villes L/Luzarches/Luzarches.html' },
        { name: 'Luzy', url: '/laPosteDeLancienneFrance/Villes L/Luzy/Luzy.html' },
        { name: 'Lyon', url: '/laPosteDeLancienneFrance/Villes L/Lyon/Lyon.html' },
        { name: 'Lyons La Foret', url: '/laPosteDeLancienneFrance/Villes L/LyonsLaForet/LyonsLaForet.html' },
        { name: 'Lyre (La Neuve)', url: '/laPosteDeLancienneFrance/Villes L/LyreLaNeuve/LyreLaNeuve.html' },
        
                      
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