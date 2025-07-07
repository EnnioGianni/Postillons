// Sélection des éléments nécessaires dans le DOM
const imageForm = document.getElementById('imageForm');
const imageGallery = document.getElementById('imageGallery');
const dropZone = document.getElementById('dropZone');
const previewImage = document.getElementById('previewImage');

// Charger les images depuis le LocalStorage
// Retourne un tableau d'images sauvegardées ou un tableau vide si aucune image n'est trouvée
const loadImages = () => {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    return images;
};

// Sauvegarder une nouvelle image dans le LocalStorage
// Ajoute l'image au tableau des images et le sauvegarde
const saveImage = (imageData) => {
    const images = loadImages(); // Charger les images existantes
    images.push(imageData); // Ajouter la nouvelle image
    localStorage.setItem('images', JSON.stringify(images)); // Sauvegarder le tableau mis à jour
};

// Supprimer une image du LocalStorage
// Prend l'index de l'image à supprimer, met à jour le LocalStorage et recharge la galerie
const deleteImage = (index) => {
    const images = loadImages(); // Charger les images existantes
    images.splice(index, 1); // Supprimer l'image à l'index spécifié
    localStorage.setItem('images', JSON.stringify(images)); // Sauvegarder le tableau mis à jour
    renderGallery(); // Recharger l'affichage de la galerie
};

// Afficher une image dans la galerie
// Génère une carte HTML pour chaque image et l'ajoute à la galerie
const displayImage = ({ src, description, name, phone, email }, index) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    imageCard.innerHTML = `
        <a href="${src}" target="_blank" title="Cliquez pour ouvrir dans un nouvel onglet">
            <img src="${src}" alt="Image">
        </a>
        <div>
            <strong>${name}</strong><br>
            <em>${description}</em><br>
            <small>${phone}${email ? ', ' + email : ''}</small>
        </div>
        <button onclick="deleteImage(${index})">Supprimer</button>
    `;
    imageGallery.appendChild(imageCard); // Ajouter l'image à la galerie
};

// Recharger la galerie d'images
// Supprime tout contenu de la galerie et y ajoute chaque image sauvegardée
const renderGallery = () => {
    imageGallery.innerHTML = ''; // Réinitialiser le contenu de la galerie
    const images = loadImages(); // Charger toutes les images sauvegardées
    images.forEach(displayImage); // Afficher chaque image
    showImageCount(); // Mettre à jour le compteur d'images
};

// Afficher un message indiquant le nombre d'images proposées
const showImageCount = () => {
    const images = loadImages(); // Charger toutes les images
    const imageCountNote = document.getElementById('imageCountNote'); // Élement HTML pour afficher la note
    imageCountNote.textContent = `Vous avez proposé ${images.length} image${images.length !== 1 ? 's' : ''}.`;
};

// Gérer l'événement de collage d'une image
// Prend l'image du presse-papiers et l'affiche dans la zone de prévisualisation
const handlePasteImage = (event) => {
    const clipboardItems = event.clipboardData.items; // Récupérer les éléments collés
    for (const item of clipboardItems) {
        if (item.type.startsWith('image/')) { // Vérifier si l'élément est une image
            const file = item.getAsFile(); // Récupérer le fichier image
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result; // Afficher l'image dans la zone de prévisualisation
                previewImage.classList.remove('hidden'); // Rendre l'image visible
            };
            reader.readAsDataURL(file); // Lire le fichier comme une URL de données
            break;
        }
    }
};

// Gérer l'événement de découpage (cut)
// Supprime l'image actuellement affichée dans la zone de prévisualisation
const handleCutImage = (event) => {
    if (previewImage.src) { // Vérifier si une image est affichée
        event.clipboardData.setData('text/plain', previewImage.src); // Ajouter l'image au presse-papiers
        previewImage.src = ''; // Réinitialiser la zone de prévisualisation
        previewImage.classList.add('hidden'); // Masquer la prévisualisation
        alert('Image coupée et ajoutée au presse-papiers.');
    }
    event.preventDefault(); // Empêcher le comportement par défaut du découpage
};

// Réinitialiser la zone de dépôt après soumission
// Masque l'image et réinitialise le texte de la zone
const resetDropZone = () => {
    previewImage.src = ''; // Supprimer l'image de la zone
    previewImage.classList.add('hidden'); // Masquer la prévisualisation
    dropZone.querySelector('p').classList.remove('hidden'); // Afficher le texte initial
};

// Écouter les événements pour coller et découper dans la zone de dépose
dropZone.addEventListener('paste', handlePasteImage); // Gestion du collage
dropZone.addEventListener('cut', handleCutImage); // Gestion du découpage

// Gestion de la soumission du formulaire
// Vérifie les données, les sauvegarde et recharge la galerie
imageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut de la soumission

    // Vérifier si une image est affichée dans la prévisualisation
    if (!previewImage.src) {
        alert('Veuillez coller ou glisser une image avant de soumettre.');
        return;
    }

    const email = document.getElementById('email').value; // Récupérer l'email saisi

    // Vérifier si l'email est valide (si renseigné)
    if (email && !validateEmail(email)) {
        alert("Veuillez entrer une adresse e-mail valide ou laisser le champ vide.");
        return;
    }

    // Récupérer les données du formulaire
    const imageData = {
        src: previewImage.src,
        description: document.getElementById('description').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email, // L'email peut être vide
    };

    saveImage(imageData); // Sauvegarder les données de l'image
    renderGallery(); // Recharger la galerie
    resetDropZone(); // Réinitialiser la zone de dépôt
    imageForm.reset(); // Réinitialiser le formulaire
});

// Valider une adresse e-mail
// Retourne vrai si l'email correspond au format attendu, sinon faux
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour les emails
    return emailRegex.test(email);
};

// Charger la galerie et afficher la note au démarrage
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(); // Afficher les images sauvegardées
});

dropZone.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Empêche le menu contextuel natif
    alert('Appuyez sur Ctrl + V pour coller une image.');
});
