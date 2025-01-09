// script_global.js

// Tableau global des prix par ligne
var prixParLigneGlobal = {
    1: '4.00',
    2: '6.00',
    3: '12.00',
    4: '17.00',
    5: '22.00',
    6: '30.00',
    7: '35.00',
    8: '50.00',
    9: '60.00',
    10: '70.00',
    11: '80.00',
    12: '90.00',
    13: '110.00',
    14: '130.00',
    15: '160.00',
    16: '190.00',
    17: '240.00',
    18: '340.00',
    19: '420.00',
    20: '600.00',
    21: '700.00',
    22: '800.00',
    23: '1000.00',
    24: '1300.00',
    25: '1500.00',
    26: '1750.00',
    27: '2000.00',
    28: '2250.00',
    29: '2550.00',
    30: '3000.00',
    31: '3500.00',
    32: '4000.00',
    33: '5500.00',
    34: '6500.00',
    35: '7500.00',
    36: '8500.00',
    37: '9500.00',
    38: '11000.00',
    39: '12000.00',
    0:'0',//LavitDeLoumagne/
    // Ajoutez d'autres lignes avec leurs prix associés au besoin
};

// Fonction pour changer le prix d'une ligne
function changerPrix(idLigne, nouveauPrix) {
    var elementsPrix = document.querySelectorAll('.prixProduit[data-id="' + idLigne + '"]');
    
    elementsPrix.forEach(function (elementPrix) {
        elementPrix.textContent = nouveauPrix;
    });
}

// Exemples d'utilisation de la fonction pour changer les prix
for (var i = 1; i <= 100000; i++) {
    changerPrix(i, prixParLigneGlobal[i]);
}

// Ajoutez d'autres fonctions ou manipulations de données globales ici
// Fonction pour formater le prix en euros
function formaterPrixEnEuros(prix) {
    return parseFloat(prix).toFixed(2) + '€';
}

// Fonction pour changer le prix d'une ligne
function changerPrix(idLigne, nouveauPrix) {
    var elementsPrix = document.querySelectorAll('.prixProduit[data-id="' + idLigne + '"]');
    
    elementsPrix.forEach(function (elementPrix) {
        // Utilisez la fonction de formatage pour afficher le prix en euros
        elementPrix.textContent = formaterPrixEnEuros(nouveauPrix);
    });
}

// Exemples d'utilisation de la fonction pour changer les prix
for (var i = 1; i <= 100000; i++) {
    changerPrix(i, prixParLigneGlobal[i]);
}
