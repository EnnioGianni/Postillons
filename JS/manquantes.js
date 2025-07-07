document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('monFormulaire');
    const gallery = document.getElementById('gallery');
    const table = document.getElementById('table');

    const images = JSON.parse(localStorage.getItem('images') || "[]");
    const proposals = JSON.parse(localStorage.getItem('proposals') || "[]");

    function displayImages() {
        if (!gallery) return;
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

    function displayProposals() {
        if (!table) return;
        table.innerHTML = '';
        proposals.forEach((proposal, index) => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 8;
            cell.innerHTML = `
                <div>
                    <p><strong>Nom :</strong> ${proposal.name}</p>
                    <p><strong>Email :</strong> ${proposal.email}</p>
                    <p><strong>Description :</strong> ${proposal.description}</p>
                    <button onclick="deleteProposal(${index})">Supprimer</button>
                </div>
            `;
            row.appendChild(cell);
            table.appendChild(row);
        });
    }

    window.deleteImage = function (index) {
        images.splice(index, 1);
        localStorage.setItem('images', JSON.stringify(images));
        displayImages();
    };

    window.deleteProposal = function (index) {
        proposals.splice(index, 1);
        localStorage.setItem('proposals', JSON.stringify(proposals));
        displayProposals();
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const description = document.getElementById('description').value;
            const coordinates = document.getElementById('coordinates').value;
            const imageFile = document.getElementById('imageFile').files[0];

            if (!imageFile) {
                alert("Veuillez sélectionner une image.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const newImage = {
                    description: description,
                    coordinates: coordinates,
                    data: event.target.result
                };
                images.push(newImage);
                localStorage.setItem('images', JSON.stringify(images));
                form.reset();
                displayImages();
            };
            reader.readAsDataURL(imageFile);
        });
    }

    displayImages();
    displayProposals();
});
