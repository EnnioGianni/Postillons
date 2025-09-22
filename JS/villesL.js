document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Lagny', url: '../../../laPosteDeLancienneFrance/Villes_L/Lagny/lagny.html' },
        { name: 'Laignes', url: '../../../laPosteDeLancienneFrance/Villes_L/Laignes/laignes.html' },
        { name: 'Lailly', url: '../../../laPosteDeLancienneFrance/Villes_L/Lailly/lailly.html' },
        { name: 'Lalinde', url: '../../../laPosteDeLancienneFrance/Villes_L/Lalinde/lalinde.html' },
        { name: 'Lamarche', url: '../../../laPosteDeLancienneFrance/Villes_L/Lamarche/lamarche.html' },
        { name: 'Lamballe', url: '../../../laPosteDeLancienneFrance/Villes_L/Lamballe/lamballe.html' },
        { name: 'Lambesc', url: '../../../laPosteDeLancienneFrance/Villes_L/Lambesc/lambesc.html' },
        { name: 'Landau', url: '../../../laPosteDeLancienneFrance/Villes_L/Landau/landau.html' },
        { name: 'Landernau', url: '../../../laPosteDeLancienneFrance/Villes_L/Landernau/landernau.html' },
        { name: 'Landivisiau', url: '../../../laPosteDeLancienneFrance/Villes_L/Landivisiau/landivisiau/.html' },
        { name: 'Landrecies', url: '../../../laPosteDeLancienneFrance/Villes_L/Landrecies/landrecies.html' },
        { name: 'Landser', url: '../../../laPosteDeLancienneFrance/Villes_L/Landser/landser.html' },
        { name: 'Langeac', url: '../../../laPosteDeLancienneFrance/Villes_LLangeac/langeac/.html' },
        { name: 'Langeais', url: '../../../laPosteDeLancienneFrance/Villes_L/Langeais/langeais.html' },
        { name: 'Langennerie', url: '../../../laPosteDeLancienneFrance/Villes_L/Langennerie/langennerie.html' },
        { name: 'Langogne', url: '../../../laPosteDeLancienneFrance/Villes_L/Langogne/langogne.html' },
        { name: 'Langon', url: '../../../laPosteDeLancienneFrance/Villes_L/Langon/langon.html' },
        { name: 'Langres', url: '../../../laPosteDeLancienneFrance/Villes_L/Langres/langres.html' },
        { name: 'Lannion', url: '../../../laPosteDeLancienneFrance/Villes_L/Lannion/lannion/.html' },
        { name: 'Laon', url: '../../../laPosteDeLancienneFrance/Villes_L/Laon/laon.html' },
        { name: 'Largentière', url: '../../../laPosteDeLancienneFrance/Villes_L/Largentière/largentière.html' },
        { name: 'Laspeyres', url: '../../../laPosteDeLancienneFrance/Villes_L/Laspeyres/laspeyres.html' },
        { name: 'Launoy', url: '../../../laPosteDeLancienneFrance/Villes_L/Launoy/launoy.html' },
        { name: 'Lauterbourg', url: '../../../laPosteDeLancienneFrance/Villes_L/Lauterbourg/lauterbourg.html' },
        { name: 'Lauzerte', url: '../../../laPosteDeLancienneFrance/Villes_L/Lauzerte/lauzerte.html' },
        { name: 'Laval', url: '../../../laPosteDeLancienneFrance/Villes_L/Laval/laval.html' },
        { name: 'Lavaur', url: '../../../laPosteDeLancienneFrance/Villes_L/Lavaur/Lavaur.html' },
        { name: 'LavitDeLoumagne', url: '../../../laPosteDeLancienneFrance/Villes_L/LavitDeLoumagne/lavitDeLoumagne.html' },
        { name: 'Lectoure', url: '../../../laPosteDeLancienneFrance/Villes_L/Lectoure/lectoure.html' },
        { name: 'Ledignan', url: '../../../laPosteDeLancienneFrance/Villes_L/Ledignan/ledignan.html' },
        { name: 'Lege', url: '../../../laPosteDeLancienneFrance/Villes_L/Lege/lege.html' },
        { name: 'Lens', url: '../../../laPosteDeLancienneFrance/Villes_L/Lens/lens.html' },
        { name: 'Lescar', url: '../../../laPosteDeLancienneFrance/Villes_L/Lescar/lescar.html' },
        { name: 'Lesneven', url: '../../../laPosteDeLancienneFrance/Villes_L/Lesneven/lesneven.html' },
        { name: 'Levet', url: '../../../laPosteDeLancienneFrance/Villes_L/Levet/levet.html' },
        { name: 'Levroux', url: '../../../laPosteDeLancienneFrance/Villes_L/Levroux/levroux.html' },
        { name: 'Lezat', url: '../../../laPosteDeLancienneFrance/Villes_L/Lezat/lezat.html' },
        { name: 'Lézignan', url: '../../../laPosteDeLancienneFrance/Villes_L/Lézignan/lézignan.html' },
        { name: 'Lezou', url: '../../../laPosteDeLancienneFrance/Villes_L/Lezou/lezou.html' },
        { name: 'Libourne', url: '../../../laPosteDeLancienneFrance/Villes_L/Libourne/libourne.html' },
        { name: 'Lieuray', url: '../../../laPosteDeLancienneFrance/Villes_L/Lieuray/lieuray.html' },
        { name: 'Lieusaint', url: '../../../laPosteDeLancienneFrance/Villes_L/Lieusaint/lieusaint.html' },
        { name: 'Lignieres', url: '../../../laPosteDeLancienneFrance/Villes_L/Lignieres/lignieres.html' },
        { name: 'Ligny En Barrois', url: '../../../laPosteDeLancienneFrance/Villes_L/LignyEnBarrois/lignyEnBarrois.html' },
        { name: 'Ligueil', url: '../../../laPosteDeLancienneFrance/Villes_L/Ligueil/ligueil.html' },
        { name: 'Lihons', url: '../../../laPosteDeLancienneFrance/Villes_L/Lihons/lihons.html' },
        { name: 'Lille', url: '../../../laPosteDeLancienneFrance/Villes_L/Lille/lille.html' },
        { name: 'Lillebonne', url: '../../../laPosteDeLancienneFrance/Villes_L/Lillebonne/lillebonne.html' },
        { name: 'Lillers', url: '../../../laPosteDeLancienneFrance/Villes_L/Lillers/lillers.html' },
        { name: 'Limoges', url: '../../../laPosteDeLancienneFrance/Villes_L/Limoges/limoges.html' },
        { name: 'Limours', url: '../../../laPosteDeLancienneFrance/Villes_L/Limours/limours.html' },
        { name: 'Limoux', url: '../../../laPosteDeLancienneFrance/Villes_L/Limoux/limoux.html' },
        { name: 'Linas', url: '../../../laPosteDeLancienneFrance/Villes_L/Linas/linas.html' },
        { name: 'Lisieux', url: '../../../laPosteDeLancienneFrance/Villes_L/Lisieux/lisieux.html' },
        { name: 'Livarot', url: '../../../laPosteDeLancienneFrance/Villes_L/Livarot/livarot.html' },
        { name: 'Livry', url: '../../../laPosteDeLancienneFrance/Villes_L/Livry/livry.html' },
        { name: 'Lizy', url: '../../../laPosteDeLancienneFrance/Villes_L/Lizy/lizy.html' },
        { name: 'Loches', url: '../../../laPosteDeLancienneFrance/Villes_L/Loches/loches.html' },
        { name: 'Locmine', url: '../../../laPosteDeLancienneFrance/Villes_L/Locmine/locmine.html' },
        { name: 'Lodeve', url: '../../../laPosteDeLancienneFrance/Villes_L/Lodeve/lodeve.html' },
        { name: 'Lombez', url: '../../../laPosteDeLancienneFrance/Villes_L/Lombez/lombez.html' },
        { name: 'Longeray', url: '../../../laPosteDeLancienneFrance/Villes_L/Longeray/longeray.html' },
        { name: 'Longny', url: '../../../laPosteDeLancienneFrance/Villes_L/Longny/longny.html' },
        { name: 'Longuyon', url: '../../../laPosteDeLancienneFrance/Villes_L/Longuyon/longuyon.html' },
        { name: 'Longwy', url: '../../../laPosteDeLancienneFrance/Villes_L/Longwy/longwy.html' },
        { name: 'Lonjumeau', url: '../../../laPosteDeLancienneFrance/Villes_L/Lonjumeau/lonjumeau.html' },
        { name: 'Lons Le Saunier', url: '../../../laPosteDeLancienneFrance/Villes_L/LonsLeSaunier/lonsLeSaunier.html' },
        { name: 'Lorgues', url: '../../../laPosteDeLancienneFrance/Villes_L/Lorgues/lorgues.html' },
        { name: 'Lorient', url: '../../../laPosteDeLancienneFrance/Villes_L/Lorient/lorient.html' },
        { name: 'Loriol', url: '../../../laPosteDeLancienneFrance/Villes_L/Loriol/loriol.html' },
        { name: 'Lormes', url: '../../../laPosteDeLancienneFrance/Villes_L/Lormes/lormes.html' },
        { name: 'Lorris', url: '../../../laPosteDeLancienneFrance/Villes_L/Lorris/lorris.html' },
        { name: 'Loudeac', url: '../../../laPosteDeLancienneFrance/Villes_L/Loudeac/loudeac.html' },
        { name: 'Loudun', url: '../../../laPosteDeLancienneFrance/Villes_L/Loudun/loudun.html' },
        { name: 'Louhans', url: '../../../laPosteDeLancienneFrance/Villes_L/Louhans/louhans.html' },
        { name: 'La Loupe', url: '../../../laPosteDeLancienneFrance/Villes_L/Loupe/laLoupe.html' },
        { name: 'Loupian', url: '../../../laPosteDeLancienneFrance/Villes_L/Loupian/loupian.html' },
        { name: 'Louviers', url: '../../../laPosteDeLancienneFrance/Villes_LLouviers/louviers/.html' },
        { name: 'Louvois', url: '../../../laPosteDeLancienneFrance/Villes_L/Louvois/louvois.html' },
        { name: 'Louvres', url: '../../../laPosteDeLancienneFrance/Villes_L/Louvres/louvres.html' },
        { name: 'Le Luc', url: '../../../laPosteDeLancienneFrance/Villes_L/leLuc/luc.html' },
        { name: 'LucenayLeveque', url: '../../../laPosteDeLancienneFrance/Villes_L/LucenayLeveque/lucenayLeveque.html' },
        { name: 'Lucon', url: '../../../laPosteDeLancienneFrance/Villes_L/Lucon/lucon.html' },
        { name: 'Lucy Le Bois', url: '../../../laPosteDeLancienneFrance/Villes_L/LucyLeBois/lucyLeBois.html' },
        { name: 'Le Lude', url: '../../../laPosteDeLancienneFrance/Villes_L/Lude/leLude.html' },
        { name: 'Lunel', url: '../../../laPosteDeLancienneFrance/Villes_L/Lunel/lunel.html' },
        { name: 'Lunéville', url: '../../../laPosteDeLancienneFrance/Villes_L/Lunéville/lunéville.html' },
        { name: 'lure', url: '../../../laPosteDeLancienneFrance/Villes_L/lure/lure.html' },
        { name: 'Lusignan', url: '../../../laPosteDeLancienneFrance/Villes_L/Lusignan/lusignan.html' },
        { name: 'Lussac Les Château', url: '../../../laPosteDeLancienneFrance/Villes_L/LussacLesChateau/lussacLesChateau.html' },
        { name: 'Luxeuil', url: '../../../laPosteDeLancienneFrance/Villes_L/Luxeuil/luxeuil.html' },
        { name: 'Luzarches', url: '../../../laPosteDeLancienneFrance/Villes_L/Luzarches/luzarches.html' },
        { name: 'Luzy', url: '../../../laPosteDeLancienneFrance/Villes_L/Luzy/luzy.html' },
        { name: 'Lyon', url: '../../../laPosteDeLancienneFrance/Villes_L/Lyon/lyon.html' },
        { name: 'Lyons La Foret', url: '../../../laPosteDeLancienneFrance/Villes_L/LyonsLaForet/lyonsLaForet.html' },
        { name: 'Lyre (La Neuve)', url: '../../../laPosteDeLancienneFrance/Villes_L/LyreLaNeuve/lyreLaNeuve.html' },
        
                      
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