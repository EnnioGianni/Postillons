document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Lagny', url: '/laPosteDeLancienneFrance/Villes L/Lagny/lagny.html' },
        { name: 'Laignes', url: '/laPosteDeLancienneFrance/Villes L/Laignes/laignes.html'},
        { name: 'Lailly', url:'/laPosteDeLancienneFrance/Villes L/Lailly/lailly.html'},
        { name: 'Lalinde', url:'laPosteDeLancienneFrance/Villes L/Lalinde/lalinde.html'},
        { name: 'Lamarche', url:'/laPosteDeLancienneFrance/Villes L/Lamarche/lamarche.html'},
        { name: 'Lamballe', url:'/laPosteDeLancienneFrance/Villes L/Lamballe/lamballe.html'},
        { name: 'Lambesc', url:'/laPosteDeLancienneFrance/Villes L/Lambesc/lambessc.html'},
        { name: 'Landau', url:'/laPosteDeLancienneFrance/Villes L/Landau/landau.html'},
        { name: 'Landernau', url:'/laPosteDeLancienneFrance/Villes L/Landernau/landernau.html'},
        { name: 'Landivisau/', url:'/laPosteDeLancienneFrance/Villes L/Landivisau/landivisau.html'},
        { name: 'Landrecies', url:'/laPosteDeLancienneFrance/Villes L/Landrecies/landrecies.html'},
        { name: 'Landser', url:'/laPosteDeLancienneFrance/Villes L/Landser/landser.html'},
        { name: 'Langeac', url:'/laPosteDeLancienneFrance/Villes L/Langeac/langeac.html'},
        { name: 'Langeais', url:'/laPosteDeLancienneFrance/Villes L/Langeais/langeais.html'},
        { name: 'Langennerie', url:'/laPosteDeLancienneFrance/Villes L/Langennerie/langennerie.html'},
        { name: 'Langogne', url:'/laPosteDeLancienneFrance/Villes L/Langogne/langogne.html'},
        { name: 'Langon', url:'/laPosteDeLancienneFrance/Villes L/Langon/langon.html'},
        { name: 'Langres', url:'/laPosteDeLancienneFrance/Villes L/Langres/langres.html'},
        { name: 'Lannion', url:'/laPosteDeLancienneFrance/Villes L/Lannion/lannion.html'},
        { name: 'Laon', url:'/laPosteDeLancienneFrance/Villes L/Laon/laon.html'},
        { name: 'Largentiere', url:'/laPosteDeLancienneFrance/Villes L/Largentiere/largentiere.html'},
        { name: 'Laspeyres', url:'/laPosteDeLancienneFrance/Villes L/Laspeyres/laspeyres.html'},
        { name: 'Launoy', url:'/laPosteDeLancienneFrance/Villes L/Launoy/launoy.html'},
        { name: 'Lauterbourg', url:'/laPosteDeLancienneFrance/Villes L/Lauterbourg/lauterbourg.html'},
        { name: 'Lauzerte', url:'/laPosteDeLancienneFrance/Villes L/Lauzerte/lauzerte.html'},
        { name: 'Laval', url:'/laPosteDeLancienneFrance/Villes L/Laval/laval.html'},
        { name: 'Lavaur', url:'/laPosteDeLancienneFrance/Villes L/Lavaur/lavaur.html'},
        { name: 'Lavit De Loumagne', url:'/laPosteDeLancienneFrance/Villes L/LavitDeLoumagne/lavitDeLoumagne.html'},
        { name: 'Lectoure', url:'/laPosteDeLancienneFrance/Villes L/Lectoure/lectoure.html'},
        { name: 'Ledignan', url:'/laPosteDeLancienneFrance/Villes L/Ledignan/ledignan.html'},
        { name: 'Lege', url:'/laPosteDeLancienneFrance/Villes L/Lege/lege.html'},
        { name: 'Lens', url:'/laPosteDeLancienneFrance/Villes L/Lens/lens.html'},
        { name: 'Lescar', url:'/laPosteDeLancienneFrance/Villes L/Lescar/lescar.html'},
        { name: 'Lesneven', url:'/laPosteDeLancienneFrance/Villes L/Lesneven/lesneven.html'},
        { name: 'Lesparre', url:'/laPosteDeLancienneFrance/Villes L/Lesparre/lesparre.html'},
        { name: 'Levet', url:'/laPosteDeLancienneFrance/Villes L/Levet/levet.html'},
        { name: 'Levroux', url:'/laPosteDeLancienneFrance/Villes L/Levroux/levroux.html'},
        { name: 'Lezat', url:'/laPosteDeLancienneFrance/Villes L/Lezat/lezat.html'},
        { name: 'Lezignan', url:'/laPosteDeLancienneFrance/Villes L/Lezignan/lezignan.html'},
        { name: 'Lezou', url:'/laPosteDeLancienneFrance/Villes L/Lezou/lezou.html'},
        { name: 'Libourne', url:'/laPosteDeLancienneFrance/Villes L/Libourne/libourne.html'},
        { name: 'Lieuray', url:'/laPosteDeLancienneFrance/Villes L/Lieuray/lieuray.html'},
        { name: 'Lieusaint', url:'/laPosteDeLancienneFrance/Villes L/Lieusaint/lieusaint.html'},
        { name: 'Lignieres', url:'/laPosteDeLancienneFrance/Villes L/Lignieres/lignieres.html'},
        { name: 'Ligny En Barrois', url:'/laPosteDeLancienneFrance/Villes L/LignyEnBarrois/lignyEnBarrois.html'},
        { name: 'Ligueil', url:'/laPosteDeLancienneFrance/Villes L/Ligueil/ligueil.html'},
        { name: 'Lihons', url:'/laPosteDeLancienneFrance/Villes L/Lihons/lihons.html'},
        { name: 'Lille', url:'/laPosteDeLancienneFrance/Villes L/Lille/lille.html'},
        { name: 'Lillebonne', url:'/laPosteDeLancienneFrance/Villes L/Lillebonne/lillebonne.html'},
        { name: 'Lillers', url:'/laPosteDeLancienneFrance/Villes L/Lillers/lillers.html'},
        { name: 'Limoges', url:'/laPosteDeLancienneFrance/Villes L/Limoges/limoges.html'},
        { name: 'Limours', url:'/laPosteDeLancienneFrance/Villes L/Limours/limours.html'},
        { name: 'Limoux', url:'/laPosteDeLancienneFrance/Villes L/Limoux/limoux.html'},
        { name: 'Linas', url:'/laPosteDeLancienneFrance/Villes L/Linas/linas.html'},
        { name: 'Lisieux', url:'/laPosteDeLancienneFrance/Villes L/Lisieux/lisieux.html'},
        { name: 'livarot', url:'/laPosteDeLancienneFrance/Villes L/Livarot/livarot.html'},
        { name: 'Livry', url:'/laPosteDeLancienneFrance/Villes L/Livry/livry.html'},
        { name: 'Lizy', url:'/laPosteDeLancienneFrance/Villes L/Lizy/lizi.html'},
        { name: 'Loches', url:'/laPosteDeLancienneFrance/Villes L/Loches/loches.html'},
        { name: 'Locmine', url:'/laPosteDeLancienneFrance/Villes L/Locmine/locmine.html'},
        { name: 'Lodeve', url:'/laPosteDeLancienneFrance/Villes L/Lodeve/lodeve.html'},
        { name: 'Lombez', url:'/laPosteDeLancienneFrance/Villes L/Lombez/lombez.html'},
        { name: 'Longeray', url:'/laPosteDeLancienneFrance/Villes L/Longeray/longeray.html'},
        { name: 'Longny', url:'/laPosteDeLancienneFrance/Villes L/Longny/logny.html'},
        { name: 'Longuyon', url:'/laPosteDeLancienneFrance/Villes L/Longuyon/longuyon.html'},
        { name: 'Longwy', url:'/laPosteDeLancienneFrance/Villes L/Longwuy/longwy.html'},
        { name: 'Lonjumeau', url:'/laPosteDeLancienneFrance/Villes L/Lonjumeau/lonjumeau.html"'},
        { name: 'Lons Le Saunier', url:'/laPosteDeLancienneFrance/Villes L/LonsLeSauniers/lonsLeSaunier.html'},
        { name: 'Lorgues', url:'/laPosteDeLancienneFrance/Villes L/Lorgues/lorgues.html'},
        { name: 'Lorient', url:'/laPosteDeLancienneFrance/Villes L/Lorient/lorient.html'},
        { name: 'Loriol', url:'/laPosteDeLancienneFrance/Villes L/Loriol/loriol.html'},
        { name: 'Lormes', url:'/laPosteDeLancienneFrance/Villes L/Lormes/lormes.html'},
        { name: 'Lorris', url:'/laPosteDeLancienneFrance/Villes L/Lorris/lorris.html'},
        { name: 'Loudeac', url:'/laPosteDeLancienneFrance/Villes L/Loudeac/loudeac.html'},
        { name: 'Loudun', url:'/laPosteDeLancienneFrance/Villes L/Loudun/loudun.html'},
        { name: 'Louhans', url:'/laPosteDeLancienneFrance/Villes L/Louhans/louhans.html'},
        { name: 'Loupe', url:'/laPosteDeLancienneFrance/Villes L/Loupe/laloupe.html'},
        { name: 'Loupian', url:'/laPosteDeLancienneFrance/Villes L/Loupian/loupian.html'},
        { name: 'Louviers', url:'/laPosteDeLancienneFrance/Villes L/Louviers/louviers.html'},
        { name: 'Louvois', url:'/laPosteDeLancienneFrance/Villes L/Louvois/louvois.html'},
        { name: 'Louvres', url:'/laPosteDeLancienneFrance/Villes L/Louvres/louvres.html'},
        { name: 'Luc', url:'/laPosteDeLancienneFrance/Villes L/Luc/leLuc.html'},
        { name: 'Lucenay lévêque', url:'/laPosteDeLancienneFrance/Villes L/LucenayLeveque/lucenayLeveques.html'},
        { name: 'Lucon', url:'/laPosteDeLancienneFrance/Villes L/Lucon/lucon.html'},
        { name: 'Lucy Le Bois', url:'/laPosteDeLancienneFrance/Villes L/LucyLeBois/LucyLeBois.html'},
        { name: 'Lude', url:'/laPosteDeLancienneFrance/Villes L/Lude/leLude.html'},
        { name: 'Lunel', url:'/laPosteDeLancienneFrance/Villes L/Lunel/lunel.html'},
        { name: 'Luneville', url:'/laPosteDeLancienneFrance/Villes L/Luneville/luneville.html'},
        { name: 'Lure', url:'/laPosteDeLancienneFrance/Villes L/Lure/lure.html'},
        { name: 'Lusignan', url:'/laPosteDeLancienneFrance/Villes L/Lusignan/lusignan.html'},
        { name: 'Lussac Les Chateau', url:'/laPosteDeLancienneFrance/Villes L/LussacLesChateau/lussacLesChateau.html'},
        { name: 'Luxeuil', url:'/laPosteDeLancienneFrance/Villes L/Luxeuil/luxeuil.html'},
        { name: 'Luzarches', url:'/laPosteDeLancienneFrance/Villes L/Luzarches/luzarches.html'},
        { name: 'Luzy', url:'/laPosteDeLancienneFrance/Villes L/Luzy/luzy.html'},
        { name: 'Lyon', url:'/laPosteDeLancienneFrance/Villes L/Lyon/lyons.html'},
        { name: 'Lyon La Foret', url:'/laPosteDeLancienneFrance/Villes L/LyonLaForet/lyonLaForet.html'},
        { name: 'Lyre (La Neuve)', url:'/laPosteDeLancienneFrance/Villes L/LyreLaNeuve/lyreLaNeuve.html'},
                         
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

