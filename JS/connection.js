// Fichier connection.js

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérifier si les champs sont vides
    if (username === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Supposons que vous vérifiez les identifiants côté serveur (dans le script PHP)
    // S'il y a une erreur, afficher la boîte d'alerte et rediriger vers le formulaire d'inscription
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/PHP/connection.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Connexion réussie, gérer la réponse si nécessaire
                console.log(xhr.responseText);
            } else {
                // Connexion échouée, afficher la boîte d'alerte
                alert("Identifiants incorrects. Si vous n'avez pas de compte, veuillez vous inscrire.");
                
                // Redirection vers le formulaire d'inscription (changez l'URL selon vos besoins)
                window.location.href ="/inscription.html";
            }
        }
    };
    xhr.send("username=" + username + "&password=" + password);
}
