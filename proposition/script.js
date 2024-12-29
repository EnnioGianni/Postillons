document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imageForm');
    const gallery = document.getElementById('gallery');
    const pasteArea = document.getElementById('pasteArea');
    const images = JSON.parse(localStorage.getItem('images')) || [];

    // Afficher les images
    function displayImages() {
        gallery.innerHTML = '';
        images.forEach((img, index) => {
            const card = document.createElement('div');
            card.classList.add('image-card');
            card.innerHTML = `
                <img src="${img.data}" alt="Image">
                <p><strong>Description :</strong> ${img.description}</p>
                <p><strong>Coordonnées :</strong> ${img.coordinates}</p>
                <button onclick="deleteImage(${index})">Supprimer</button>
            `;
            gallery.appendChild(card);
        });
    }

    // Ajouter une image via le formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const coordinates = document.getElementById('coordinates').value;
        const imageFile = document.getElementById('imageFile').files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const newImage = {
                    description,
                    coordinates,
                    data: event.target.result
                };

                images.push(newImage);
                localStorage.setItem('images', JSON.stringify(images));
                form.reset();
                displayImages();
            };
            reader.readAsDataURL(imageFile);
        }
    });

    // Gestion de l'événement "paste" pour coller des images
    pasteArea.addEventListener('paste', (event) => {
        const items = event.clipboardData.items;
        for (let item of items) {
            if (item.type.startsWith('image/')) {
                const file = item.getAsFile();
                const reader = new FileReader();

                reader.onload = function (e) {
                    const newImage = {
                        description: "Image collée",
                        coordinates: "N/A",
                        data: e.target.result
                    };

                    images.push(newImage);
                    localStorage.setItem('images', JSON.stringify(images));
                    displayImages();
                };

                reader.readAsDataURL(file);
            }
        }
    });

    // Supprimer une image
    window.deleteImage = function (index) {
        images.splice(index, 1);
        localStorage.setItem('images', JSON.stringify(images));
        displayImages();
    };

    // Charger les images au démarrage
    displayImages();
});
