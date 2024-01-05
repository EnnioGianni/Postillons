// document.addEventListener('DOMContentLoaded', function() {
//     var dropdownContainer = document.getElementById('dropdownContainer');
//     if (dropdownContainer) {
//         var dropdownHtml = '<select id="citySelector">' +
//                            '<option value="">Sélectionnez une ville</option>' +
//                            '<option value="Aix">Aix</option>' +
//                            '<option value="Amiens">Amiens</option>' +
//                            // Ajoutez d'autres villes ici
//                            '</select>';

//         dropdownContainer.innerHTML = dropdownHtml;

//         document.getElementById('citySelector').addEventListener('change', function() {
//             var selectedCity = this.value;
//             if (selectedCity) {
//                 var folder = 'Villes ' + selectedCity.charAt(0).toUpperCase();
//                 var pathParts = window.location.pathname.split('/');
//                 var newPath = pathParts.slice(0, pathParts.length - 2).join('/') + '/' + folder + '/' + selectedCity + '.html';
//                 window.location.href = newPath;
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    var dropdownContainer = document.getElementById('dropdownContainer');
    if (dropdownContainer) {
        var dropdownHtml = '<select id="citySelector">' +
                           '<option value="">Tapez le nom de la ville</option>' +
    
                           '<option value="Lagny">Lagny</option>' +
                           '<option value="Laignes">Laignes</option>' +
                           '<option value="Lailly">Lailly</option>' +
                           '<option value="Lalinde">Lalinde</option>' +
                           '<option value="Lamarche">Lamarche</option>' +
                           '<option value="Lamballe">Lamballe</option>' +
                           '<option value="Lambesc">Lambesc</option>' +
                           '<option value="Landau">Landau</option>' +
                           '<option value="Landernau">Landernau</option>' +
                           '<option value="Landivisau">Landivisau</option>' +
                           '<option value="Landrecies">Landrecies</option>' +
                           '<option value="Landser">Landser</option>' +
                           '<option value="Langeac">Langeac</option>' +
                           '<option value="Langeais">Langeais</option>' +
                           '<option value="Langennerie">Langennerie</option>' +
                           '<option value="Langogne">Langogne</option>' +
                           '<option value="Langon">Langon</option>' +
                           '<option value="Langres">Langres</option>' +
                           '<option value="Lannion">Lannion</option>' +
                           '<option value="Laon"> Laon</option>' +
                           '<option value="Largentiere">Largentiere</option>' +
                           '<option value="Laspeyres">Laspeyres</option>' +
                           '<option value=" Lauterbourg">Lauterbourg</option>' +
                           '<option value="Lauzerte">Lauzerte</option>' +
                           '<option value="Laval">Laval</option>' +
                           '<option value="Lavaur">Lavaur</option>' +
                           '<option value="Lavit De Loumagne">Lavit De Loumagne</option>' +
                           '<option value="Lectoure">Lectoure</option>' +
                           '<option value="Ledignan">Ledignan</option>' +
                           '<option value="Lege">Lege</option>' +
                           '<option value="Lens">Lens</option>' +
                           '<option value="Lescar">Lescar</option>' +
                           '<option value="Lesneven">Lesneven</option>' +
                           '<option value="Lesparre">Lesparre</option>' +
                           '<option value="Levroux">Levroux</option>' +
                           '<option value="Lezat">Lezat</option>' +
                           '<option value="Lezignan">Lezignan</option>' +
                           '<option value="Lezou">Lezou</option>' +
                           '<option value="Libourne">Libourne</option>' +
                           '<option value="Lieuray">Lieuray</option>' +
                           '<option value="Lieusaint">Lieusaint</option>' +
                           '<option value="Lignieres">Lignieres</option>' +
                           '<option value="Ligny En Barrois">Ligny En Barrois</option>' +
                           '<option value="Ligueil">Ligueil</option>' +
                           '<option value="Lihons">Lihons</option>' +
                           '<option value="Lille">Lille</option>' +
                           '<option value="Lillebonne">Lillebonne</option>' +
                           '<option value="Lillers">Lillers</option>' +
                           '<option value="Limoges">Limoges</option>' +
                           '<option value="Limours">Limours</option>' +
                           '<option value="Limoux">Limoux</option>' +
                           '<option value="Linas">Linas</option>' +
                           '<option value="Lisieux">Lisieux</option>' +
                           '<option value="livarot">livarot</option>' +
                           '<option value="Livry">Livry</option>' +
                           '<option value="Lizy">Lizi</option>' +
                           '<option value="Loches">Loches</option>' +
                           '<option value="Locmine">Locmine</option>' +
                           '<option value="Lodeve">Lodeve</option>' +
                           '<option value="Lombez">Lombez</option>' +
                           '<option value="Longeray">Longeray</option>' +
                           '<option value="Longny">Longny</option>' +
                           '<option value="Longuyon">Longuyon</option>' +
                           '<option value="Longwy">Longwy</option>' +
                           '<option value="Lonjumeau">Lonjumeau</option>' +
                           '<option value="Lons Le Saunier">Lons Le Saunier</option>' +
                           '<option value="Lorgues">Lorgues</option>' +
                           '<option value="Lorient">Lorient</option>' +
                           '<option value="Loriol">Loriol</option>' +
                           '<option value="Lormes">Lormes</option>' +
                           '<option value="Lorris">Lorris</option>' +
                           '<option value="Loudeac">Loudeac</option>' +
                           '<option value="Loudun">Loudun</option>' +
                           '<option value="Louhans">Louhans</option>' +
                           '<option value="Loupe">Loupe</option>' +
                           '<option value="Loupian">Loupian</option>' +
                           '<option value="Louviers">Louviers</option>' +
                           '<option value="Louvois">Louvois</option>' +
                           '<option value="Louvres">Louvres</option>' +
                           '<option value="Lucenay lévêque">Lucenay lévêque</option>' +
                           '<option value="Lucy Le Bois">Lucy Le Bois</option>' +
                           '<option value="Lunel">Lunel</option>' +
                           '<option value="Luneville">Luneville</option>' +
                           '<option value="Lure">Lure</option>' +
                           '<option value="Lusignan">Lusignan</option>' +
                           '<option value="Lussac Les Chateau ">Lussac Les Chateau </option>' +
                           '<option value="Luxeuil">Luxeuil</option>' +
                           '<option value="Luzarches">Luzarches</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Lyon">Lyon</option>' +
                           '<option value="Lyon La Foret">Lyon La Foret</option>' +
                           '<option value="Lyre (La Neuve) ">Lyre (La Neuve) </option>' +
                         // Ajoutez d'autres villes ici
                           '</select>';

        dropdownContainer.innerHTML = dropdownHtml;

        document.getElementById('citySelector').addEventListener('change', function() {
            var selectedCity = this.value;
            if (selectedCity) {
                window.location.href = '../' + selectedCity + '/' + selectedCity.toLowerCase() + '.html';
            }
        });
    }
});
