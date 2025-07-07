document.addEventListener("DOMContentLoaded", function() {
    toggleBande();
});

function toggleBande() {
    var bande = document.getElementById('myBande');
    bande.style.display = (bande.style.display === 'block') ? 'none' : 'block';
}
