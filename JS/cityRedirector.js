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
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzy">Luzy</option>' +
                          


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
