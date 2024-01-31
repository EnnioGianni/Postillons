document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Abbeville', url: '../../../laPosteDeLancienneFrance/Villes A/Abbeville/abbeville.html' },
        { name: 'Abries', url: '../../../laPosteDeLancienneFrance/Villes A/Abries/abries.html' },
        { name: 'Agde', url: '/laPosteDeLancienneFrance/Villes A/Agde/agde.html' },
        { name: 'Agen', url: '/laPosteDeLancienneFrance/Villes A/Agen/agen.html' },
        { name: 'Ahun', url: '/laPosteDeLancienneFrance/Villes A/Ahun/ahun.htm' },
        { name: 'Aigle', url: '/laPosteDeLancienneFrance/Villes A/Aigle/aigle.html' },
        { name: 'Aignay', url: '/laPosteDeLancienneFrance/Villes A/Aignay/aignay.html' },
        { name: 'Aigre', url: '/laPosteDeLancienneFrance/Villes A/AIGRE/aigre.html' },
        { name: 'Aigueperse', url: '/laPosteDeLancienneFrance/Villes A/Aigueperse/aigueperse.html' },
        { name: 'Aigue Morte', url: '/laPosteDeLancienneFrance/Villes A/aiguesMorte/aigueMorte.html' },
        { name: 'Aiguillon', url: '/laPosteDeLancienneFrance/Villes A/Aiguillon/aiguiollon.html' },
        { name: 'Aire en Artois', url: '/laPosteDeLancienneFrance/Villes A/AireEnArtois/aireEnArtoi.html' },
        { name: 'AireEnGascogne', url: '/laPosteDeLancienneFrance/Villes A/AireEnGascogne/aireEnGascogne.html' },
        { name: 'Airvault', url: '/laPosteDeLancienneFrance/Villes A/Airvaut/airvault.html' },
        { name: 'Aix', url: '/laPosteDeLancienneFrance/Villes A/Aix/aix.html' },
        { name: 'Les Aix Dangillon', url: '/laPosteDeLancienneFrance/Villes A/Angillon/lesAixDangillon.html' },
        { name: 'Ajaccio', url: '/laPosteDeLancienneFrance/Villes A/Ajaccio/ajaccio.html/' },
        { name: 'Alais', url: '/laPosteDeLancienneFrance/Villes A/Alais/alais.html' },
        { name: 'Albert', url: '/laPosteDeLancienneFrance/Villes A/Albert/albert.html' },
        { name: 'Albi', url: '/laPosteDeLancienneFrance/Villes A/Albi/albi.html' },
        { name: 'Alencon', url: '/laPosteDeLancienneFrance/Villes A/Alencon/alencon.html' },
        { name: 'Alet', url: '/laPosteDeLancienneFrance/Villes A/Alet/alet.html' },
        { name: 'Altkirch', url: '/laPosteDeLancienneFrance/Villes A/Altkirch/altkirck.html' },
        { name: 'Alzonne', url: '/laPosteDeLancienneFrance/Villes A/Alzonne/alzonne.html' },
        { name: 'Amberieu', url: '/laPosteDeLancienneFrance/Villes A/Amberieu/amberieuEnBugey.html' },
        { name: 'Ambert', url: '/laPosteDeLancienneFrance/Villes A/Ambert/ambert.html' },
        { name: 'Amboise', url: '/laPosteDeLancienneFrance/Villes A/Amboise/amboise.html' },
        { name: 'Amiens', url: '/laPosteDeLancienneFrance/Villes A/Amiens/amiens.html' },
        { name: 'Ancenis', url: '/laPosteDeLancienneFrance/Villes A/Ancenis/ancenis.html' },
        { name: 'Ancy le Franc', url: '/laPosteDeLancienneFrance/Villes A/AncyLeFranc/AncyLeFranc.html' },
        { name: 'Les Andelys', url: '/laPosteDeLancienneFrance/Villes A/Andelys/lesAndelis.html' },
        { name: 'Andresy', url: '/laPosteDeLancienneFrance/Villes A/Andresy/Andresy.html' },
        { name: 'Anduse', url: '/laPosteDeLancienneFrance/Villes A/Anduse/anduse.html' },
        { name: 'Angers', url: '/laPosteDeLancienneFrance/Villes A/Angers/angers.html' },
        { name: 'Angerville', url: '/laPosteDeLancienneFrance/Villes A/Angerville/angerville.html' },
        { name: 'Angles', url: '/laPosteDeLancienneFrance/Villes A/Angles/angles.html' },
        { name: 'Angouleme', url: '/laPosteDeLancienneFrance/Villes A/Angouleme/angoulemes.html' },
        { name: 'Annonay', url: '/laPosteDeLancienneFrance/Villes A/Annonay/annonay.html' },
        { name: 'Anse', url: '/laPosteDeLancienneFrance/Villes A/Anse/anse.html' },
        { name: 'Antibes', url: '/laPosteDeLancienneFrance/Villes A/Antibes/antibes.html' },
        { name: 'Antony', url: '/laPosteDeLancienneFrance/Villes A/Antony/antony.html' },
        { name: 'Antrain', url: '/laPosteDeLancienneFrance/Villes A/Antrain/antrain.html' },
        { name: 'Apt', url: '/laPosteDeLancienneFrance/Villes A/Apt/apt.html' },
        { name: 'Arbois', url: '/laPosteDeLancienneFrance/Villes A/Arbois/arbois.html' },
        { name: 'Arbresle', url: '/laPosteDeLancienneFrance/Villes A/Arbresle/Larbresle.html' },
        { name: 'Arcis', url: '/laPosteDeLancienneFrance/Villes A/Arcis/arcis.html' },
        { name: 'Ardes', url: '/laPosteDeLancienneFrance/Villes A/Ardes/ardes.html' },
        { name: 'Ardres', url: '/laPosteDeLancienneFrance/Villes A/Ardres/ardres.html' },
        { name: 'Argele', url: '/laPosteDeLancienneFrance/Villes A/Argeles/argele.html' },
        { name: 'Argent', url: '/laPosteDeLancienneFrance/Villes A/Argent/argent.html' },
        { name: 'Argentan', url: '/laPosteDeLancienneFrance/Villes A/Argentan/argentan.html' },
        { name: 'Argentat', url: '/laPosteDeLancienneFrance/Villes A/Argentat/argentat.html' },
        { name: 'Argenteuil', url: '/laPosteDeLancienneFrance/Villes A/Argenteuil/argenteuil.html' },
        { name: 'Argenton', url: '/laPosteDeLancienneFrance/Villes A/Argenton35/argenton35.html' },
        { name: 'Argenton le Château', url: '/laPosteDeLancienneFrance/Villes A/Argenton75/argenton75.html' },
        { name: 'Arles', url: '/laPosteDeLancienneFrance/Villes A/Arles/arles.html' },
        { name: 'Arles en Roussillon', url: '/laPosteDeLancienneFrance/Villes A/arlesEnRoussillon/arlesEnRoussillon.html' },
        { name: 'Armentieres', url: '/laPosteDeLancienneFrance/Villes A/Armentieres/armentieres.html' },
        { name: 'Arnac', url: '/laPosteDeLancienneFrance/Villes A/Arnac/arnac.html' },
        { name: 'Arnay', url: '/laPosteDeLancienneFrance/Villes A/Arnay/arnay.html' },
        { name: 'Arnouville', url: '/laPosteDeLancienneFrance/Villes A/Arnouville/arnouville.html' },
        { name: 'Arpajon', url: '/laPosteDeLancienneFrance/Villes A/Arpajon/arpajon.html' },
        { name: 'Arras', url: '/laPosteDeLancienneFrance/Villes A/Arras/arras.html' },
        { name: 'Arreau', url: '/laPosteDeLancienneFrance/Villes A/Arreau/arreau.html' },
        { name: 'Ars', url: '/laPosteDeLancienneFrance/Villes A/Ars/ars.html' },
        { name: 'Arsac', url: '/laPosteDeLancienneFrance/Villes A/Arsac/arsac.html' },
        { name: 'Artenay', url: '/laPosteDeLancienneFrance/Villes A/Artenay/artenay.html' },
        { name: 'Astaffort', url: '/laPosteDeLancienneFrance/Villes A/Astaffort/astaffort.html' },
        { name: 'Ath', url: '/laPosteDeLancienneFrance/Villes A/Ath/ath.html' },
        { name: 'Attigny', url: '/laPosteDeLancienneFrance/Villes A/Attigny/attigny.html/' },
        { name: 'Aubagne', url: '/laPosteDeLancienneFrance/Villes A/Aubagne/aubagne.html' },
        { name: 'Aubenas', url: '/laPosteDeLancienneFrance/Villes A/Aubenas/aubenas.html' },
        { name: 'Aubenton', url: '/laPosteDeLancienneFrance/Villes A/Aubenton/aubenton.html' },
        { name: 'Aubigny', url: '/laPosteDeLancienneFrance/Villes A/Aubigny/aubigny.html' },
        { name: 'Aubusson', url: '/laPosteDeLancienneFrance/Villes A/Aubusson/aubusson.html' },
        { name: 'Auch', url: '/laPosteDeLancienneFrance/Villes A/Auch/auch.html/' },
        { name: 'Audenarde', url: '/laPosteDeLancienneFrance/Villes A/Audenarde/audenarde.html' },
        { name: 'Aulnay (13)', url: '/laPosteDeLancienneFrance/Villes A/Aulnay13/aulnay13.html' },
        { name: 'Aumale', url: '/laPosteDeLancienneFrance/Villes A/Aumale/aumale.html' },
        { name: 'Aups', url: '/laPosteDeLancienneFrance/Villes A/Aups/aups.html' },
        { name: 'Auray', url: '/laPosteDeLancienneFrance/Villes A/Auray/auray.html' },
        { name: 'Aurillac', url: '/laPosteDeLancienneFrance/Villes A/Aurillac/aurillac.html' },
        { name: 'Auterive', url: '/laPosteDeLancienneFrance/Villes A/Auterive/Auterive.html' },
        { name: 'Autun', url: '/laPosteDeLancienneFrance/Villes A/Autun/autun.html' },
        { name: 'Auxerre', url: '/laPosteDeLancienneFrance/Villes A/Auxerre/auxerre.html' },
        { name: 'Auxonne', url: '/laPosteDeLancienneFrance/Villes A/Auxonne/auxonne.html' },
        { name: 'Auxy', url: '/laPosteDeLancienneFrance/Villes A/Auxy/auxy.html' },
        { name: 'Auzance', url: '/laPosteDeLancienneFrance/Villes A/Auzance/auzance.html' },
        { name: 'Avallon', url: '/laPosteDeLancienneFrance/Villes A/Avallon/avallon.html' },
        { name: 'Avesnes', url: '/laPosteDeLancienneFrance/Villes A/Avesnes/avesnes.html' },
        { name: 'Avenay', url: '/laPosteDeLancienneFrance/Villes A/Avenay/avenay.html' },
        { name: 'Avignon', url: '/laPosteDeLancienneFrance/Villes A/Avignon/avignon.html' },
        { name: 'Avranches', url: '/laPosteDeLancienneFrance/Villes A/Avranches/avranches.html' },
        { name: 'Ay', url: '/laPosteDeLancienneFrance/Villes A//Ay/Ay.html' },
        { name: 'Azille', url: '/laPosteDeLancienneFrance/Villes A/Azille/azille.html' },
        // Ajoutez d'autres villes ici
    ];

    // Initialisation des liens de ville
    for (var i = 0; i < cityLinks.length; i++) {
        var link = document.createElement('a');
        link.href = cityLinks[i].url;
        link.textContent = cityLinks[i].name;
        dropdownContent.appendChild(link);
    }

    input.addEventListener('input', function () {
        var filter = input.value.toLowerCase();
        var links = dropdownContent.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            var city = links[i].textContent.toLowerCase();
            links[i].style.display = city.includes(filter) ? '' : 'none';
        }
    });

    dropdownContent.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            villeLink.innerHTML = ' &emsp;&emsp;' + target.textContent + '<i class="fas fa-caret-down"></i>';
            window.location.href = target.href;
        }
    });
});