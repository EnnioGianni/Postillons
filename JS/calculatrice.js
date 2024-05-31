// Fonction pour ajouter du texte à l'affichage de la calculatrice
function appendToDisplay(value) {
    document.getElementById('display').value += value;
    // Enregistrer l'affichage actuel dans le stockage local
    localStorage.setItem('calculatorDisplay', document.getElementById('display').value);
}

// Fonction pour effectuer le calcul et afficher le résultat
function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);

    // Enregistrer le résultat dans le stockage local du navigateur
    localStorage.setItem('calculatorResult', result);

    // Afficher le résultat dans l'affichage de la calculatrice
    document.getElementById('display').value = result;

    // Enregistrer l'affichage actuel dans le stockage local
    localStorage.setItem('calculatorDisplay', document.getElementById('display').value);
}

// Fonction pour effacer l'affichage de la calculatrice et les données du stockage local
function clearDisplay() {
    // Effacer l'affichage de la calculatrice
    document.getElementById('display').value = '';

    // Effacer les données du stockage local
    localStorage.removeItem('calculatorResult');
    localStorage.removeItem('calculatorDisplay');
}

// Événement lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier s'il y a un affichage précédemment enregistré dans le stockage local
    let previousDisplay = localStorage.getItem('calculatorDisplay');
    
    // Afficher l'affichage précédemment enregistré s'il existe
    if (previousDisplay !== null) {
        document.getElementById('display').value = previousDisplay;
    }
});

// Gestionnaire d'événement pour la frappe de touche
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Empêcher le comportement par défaut (par exemple, soumettre un formulaire)
        event.preventDefault();
        // Calculer le résultat lorsque l'utilisateur appuie sur "Entrée"
        calculate();
    }
});

// Gestionnaire d'événement pour le bouton de fermeture
document.getElementById('closeCalculator').addEventListener('click', function() {
    document.querySelector('.calculator').style.display = 'none';
});

// Événement pour gérer la visibilité de la calculatrice
document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.querySelector('.calculator');
    const closeBtn = document.getElementById('closeCalculator');
    const showBtn = document.getElementById('showCalculatorBtn');

    closeBtn.addEventListener('click', function() {
        calculator.style.display = 'none'; // Masquer la calculatrice
        showBtn.style.display = 'block'; // Afficher le bouton pour réafficher la calculatrice
    });

    // Fonction pour réafficher la calculatrice
    function showCalculator() {
        calculator.style.display = 'flex'; // Afficher la calculatrice
        showBtn.style.display = 'none'; // Masquer le bouton pour réafficher la calculatrice
    }

    showBtn.addEventListener('click', function() {
        showCalculator();
    });
});
