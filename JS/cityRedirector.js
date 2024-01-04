// document.addEventListener('DOMContentLoaded', function() {
//     var dropdownContainer = document.getElementById('dropdownContainer');
//     if (dropdownContainer) {
//         var dropdownHtml = '<select id="citySelector">' +
//                            '<option value="">Sélectionnez une ville</option>' +
//                            '<option value="Aix">Aix</option>' +
//                            '<option value="Amiens">Amiens</option>' +
//                            '<option value="Bordeaux">Bordeaux</option>' +
//                            '<option value="Brest">Brest</option>' +
//                            // Ajoutez d'autres villes ici
//                            '</select>';

//         dropdownContainer.innerHTML = dropdownHtml;

//         document.getElementById('citySelector').addEventListener('change', function() {
//             var selectedCity = this.value;
//             if (selectedCity) {
//                 var folder = 'Villes_' + selectedCity.charAt(0).toUpperCase();
//                 window.location.href = '../' + folder + '/' + selectedCity + '.html';
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    var dropdownContainer = document.getElementById('dropdownContainer');
    if (dropdownContainer) {
        var dropdownHtml = '<select id="citySelector">' +
                           '<option value="">Sélectionnez une ville</option>' +
                           '<option value="Luzy">Luzy</option>' +
                           '<option value="Luzarches">Luzarches</option>' +
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
