const imageForm = document.getElementById('imageForm');
const imageGallery = document.getElementById('imageGallery');
const dropZone = document.getElementById('dropZone');
const previewImage = document.getElementById('previewImage');

// Charger les données depuis le LocalStorage
const loadImages = () => {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.forEach(displayImage);
};

// Enregistrer une image dans le LocalStorage
const saveImage = (imageData) => {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.push(imageData);
    localStorage.setItem('images', JSON.stringify(images));
};

// Supprimer une image du LocalStorage
const deleteImage = (index) => {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.splice(index, 1);
    localStorage.setItem('images', JSON.stringify(images));
    renderGallery();
};

// Afficher une image dans la galerie
const displayImage = ({ src, description, name, phone, email }, index) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    imageCard.innerHTML = `
        <img src="${src}" alt="Image">
        <div>
            <strong>${name}</strong><br>
            <em>${description}</em><br>
            <small>${phone}, ${email}</small>
        </div>
        <button onclick="deleteImage(${index})">Supprimer</button>
    `;
    imageGallery.appendChild(imageCard);
};

// Recharger la galerie
const renderGallery = () => {
    imageGallery.innerHTML = '';
    loadImages();
};

// Gérer l'aperçu d'une image collée ou glissée
const handleImagePreview = (file) => {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Veuillez coller ou glisser uniquement des images.');
    }
};

// Gérer le collage d'une image
dropZone.addEventListener('paste', (event) => {
    const clipboardItems = event.clipboardData.items;
    for (const item of clipboardItems) {
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            handleImagePreview(file);
            break;
        }
    }
});

// Gérer le glisser-déposer d'une image
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = '#e9f5ff';
});

dropZone.addEventListener('dragleave', () => {
    dropZone.style.backgroundColor = '#f9f9f9';
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = '#f9f9f9';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleImagePreview(files[0]);
    }
});

// Gestion de la soumission du formulaire
imageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!previewImage.src) {
        alert('Veuillez coller ou glisser une image avant de soumettre.');
        return;
    }

    const imageData = {
        src: previewImage.src,
        description: document.getElementById('description').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    };

    saveImage(imageData);
    renderGallery();
    previewImage.src = '';
    previewImage.classList.add('hidden');
    imageForm.reset();
});

// Charger la galerie au démarrage
loadImages();
