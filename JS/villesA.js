document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('villeInput');
    var dropdownContent = document.getElementById('dropdownContent');
    var villeLink = document.getElementById('villeLink');

    // Tableau de liens de villes
    var cityLinks = [
        { name: 'Abbeville', url: '../../../laPosteDeLancienneFrance/Villes_A/Abbeville/abbeville.html' },
        { name: 'Abries', url: '../../../laPosteDeLancienneFrance/Villes_A/Abries/abries.html' },
        { name: 'Agde', url: '../../../laPosteDeLancienneFrance/Villes_A/Agde/agde.html' },
        { name: 'Agen', url: '../../../laPosteDeLancienneFrance/Villes_A/Agen/agen.html' },
        { name: 'Ahun', url: '../../../laPosteDeLancienneFrance/Villes_A/Ahun/ahun.html' },
        { name: 'Aigle', url: '../../../laPosteDeLancienneFrance/Villes_A/Aigle/aigle.html' },
        { name: 'Aignay', url: '../../../laPosteDeLancienneFrance/Villes_A/Aignay/aignay.html' },
        { name: 'Aigre', url: '../../../laPosteDeLancienneFrance/Villes_A/AIGRE/aigre.html' },
        { name: 'Aigueperse', url: '../../../laPosteDeLancienneFrance/Villes_A/Aigueperse/aigueperse.html' },
        { name: 'Aigue Morte', url: '../../../laPosteDeLancienneFrance/Villes_A/aiguesMorte/aigueMorte.html' },
        { name: 'Aiguillon', url: '../../../laPosteDeLancienneFrance/Villes_A/Aiguillon/aiguiollon.html' },
        { name: 'Aire en Artois', url: '../../../laPosteDeLancienneFrance/Villes_A/AireEnArtois/aireEnArtoi.html' },
        { name: 'AireEnGascogne', url: '../../../laPosteDeLancienneFrance/Villes_A/AireEnGascogne/aireEnGascogne.html' },
        { name: 'Airvault', url: '../../../laPosteDeLancienneFrance/Villes_A/Airvaut/airvault.html' },
        { name: 'Aix', url: '../../../laPosteDeLancienneFrance/Villes_A/Aix/aix.html' },
        { name: 'Les Aix Dangillon', url: '../../../laPosteDeLancienneFrance/Villes_A/Angillon/lesAixDangillon.html' },
        { name: 'Ajaccio', url: '../../../laPosteDeLancienneFrance/Villes_A/Ajaccio/ajaccio.html' },
        { name: 'Alais', url: '../../../laPosteDeLancienneFrance/Villes_A/Alais/alais.html' },
        { name: 'Albert', url: '../../../laPosteDeLancienneFrance/Villes_A/Albert/albert.html' },
        { name: 'Albi', url: '../../../laPosteDeLancienneFrance/Villes_A/Albi/albi.html' },
        { name: 'Alencon', url: '../../../laPosteDeLancienneFrance/Villes_A/Alencon/alencon.html' },
        { name: 'Alet', url: '../../../laPosteDeLancienneFrance/Villes_A/Alet/alet.html' },
        { name: 'Altkirch', url: '../../../laPosteDeLancienneFrance/Villes_A/Altkirch/altkirck.html' },
        { name: 'Alzonne', url: '../../../laPosteDeLancienneFrance/Villes_A/Alzonne/alzonne.html' },
        { name: 'Amberieu', url: '../../../laPosteDeLancienneFrance/Villes_A/Amberieu/amberieuEnBugey.html' },
        { name: 'Ambert', url: '../../../laPosteDeLancienneFrance/Villes_A/Ambert/ambert.html' },
        { name: 'Amboise', url: '../../../laPosteDeLancienneFrance/Villes_A/Amboise/amboise.html' },
        { name: 'Amiens', url: '../../../laPosteDeLancienneFrance/Villes_A/Amiens/amiens.html' },
        { name: 'Ancenis', url: '../../../laPosteDeLancienneFrance/Villes_A/Ancenis/ancenis.html' },
        { name: 'Ancy le Franc', url: '../../../laPosteDeLancienneFrance/Villes_A/AncyLeFranc/ancyLeFranc.html' },
        { name: 'Andelys', url: '../../../laPosteDeLancienneFrance/Villes_A/Andelys/lesAndelys.html' },
        { name: 'Andresy', url: '../../../laPosteDeLancienneFrance/Villes_A/Andresy/andresy.html' },
        { name: 'Anduse', url: '../../../laPosteDeLancienneFrance/Villes_A/Anduse/anduse.html' },
        { name: 'Angers', url: '../../../laPosteDeLancienneFrance/Villes_A/Angers/angers.html' },
        { name: 'Angerville', url: '../../../laPosteDeLancienneFrance/Villes_A/Angerville/angerville.html' },
        { name: 'Angles', url: '../../../laPosteDeLancienneFrance/Villes_A/Angles/angles.html' },
        { name: 'Angouleme', url: '../../../laPosteDeLancienneFrance/Villes_A/Angouleme/angoulemes.html' },
        { name: 'Annonay', url: '../../../laPosteDeLancienneFrance/Villes_A/Annonay/annonay.html' },
        { name: 'Anse', url: '../../../laPosteDeLancienneFrance/Villes_A/Anse/anse.html' },
        { name: 'Antibes', url: '../../../laPosteDeLancienneFrance/Villes_A/Antibes/antibes.html' },
        { name: 'Antony', url: '../../../laPosteDeLancienneFrance/Villes_A/Antony/antony.html' },
        { name: 'Antrain', url: '../../../laPosteDeLancienneFrance/Villes_A/Antrain/antrain.html' },
        { name: 'Apt', url: '../../../laPosteDeLancienneFrance/Villes_A/Apt/apt.html' },
        { name: 'Arbois', url: '../../../laPosteDeLancienneFrance/Villes_A/Arbois/arbois.html' },
        { name: 'Arbresle', url: '../../../laPosteDeLancienneFrance/Villes_A/Arbresle/larbresle.html' },
        { name: 'Arcis', url: '../../../laPosteDeLancienneFrance/Villes_A/Arcis/arcis.html' },
        { name: 'Ardes', url: '../../../laPosteDeLancienneFrance/Villes_A/Ardes/ardes.html' },
        { name: 'Ardres', url: '../../../laPosteDeLancienneFrance/Villes_A/Ardres/ardres.html' },
        { name: 'Argeles', url: '../../../laPosteDeLancienneFrance/Villes_A/Argeles/argele.html' },
        { name: 'Argent', url: '../../../laPosteDeLancienneFrance/Villes_A/Argent/argent.html' },
        { name: 'Argentan', url: '../../../laPosteDeLancienneFrance/Villes_A/Argentan/argentan.html' },
        { name: 'Argentat', url: '../../../laPosteDeLancienneFrance/Villes_A/Argentat/argentat.html' },
        { name: 'Argenteuil', url: '../../../laPosteDeLancienneFrance/Villes_A/Argenteuil/argenteuil.html' },
        { name: 'Argenton', url: '../../../laPosteDeLancienneFrance/Villes_A/Argenton35/argenton35.html' },
        { name: 'Argenton le Château', url: '../../../laPosteDeLancienneFrance/Villes_A/Argenton75/argenton75.html' },
        { name: 'Arles', url: '../../../laPosteDeLancienneFrance/Villes_A/Arles/arles.html' },
        { name: 'Arles en Roussillon', url: '../../../laPosteDeLancienneFrance/Villes_A/arlesEnRoussillon/arlesEnRoussillon.html' },
        { name: 'Armentieres', url: '../../../laPosteDeLancienneFrance/Villes_A/Armentieres/armentieres.html' },
        { name: 'Arnac', url: '../../../laPosteDeLancienneFrance/Villes_A/Arnac/arnac.html' },
        { name: 'Arnay le Duc', url: '../../../laPosteDeLancienneFrance/Villes_A/Arnay/arnay.html' },
        { name: 'Arnouville', url: '../../../laPosteDeLancienneFrance/Villes_A/Arnouville/arnouville.html' },
        { name: 'Arpajon', url: '../../../laPosteDeLancienneFrance/Villes_A/Arpajon/arpajon.html' },
        { name: 'Arras', url: '../../../laPosteDeLancienneFrance/Villes_A/Arras/arras.html' },
        { name: 'Arreau', url: '../../../laPosteDeLancienneFrance/Villes_A/Arreau/arreau.html' },
        { name: 'Ars', url: '../../../laPosteDeLancienneFrance/Villes_A/Ars/ars.html' },
        { name: 'Arsac', url: '../../../laPosteDeLancienneFrance/Villes_A/Arsac/arsac.html' },
        { name: 'Artenay', url: '../../../laPosteDeLancienneFrance/Villes_A/Artenay/artenay.html' },
        { name: 'Astaffort', url: '../../../laPosteDeLancienneFrance/Villes_A/Astaffort/astaffort.html' },
        { name: 'Ath', url: '../../../laPosteDeLancienneFrance/Villes_A/Ath/ath.html' },
        { name: 'Attigny', url: '../../../laPosteDeLancienneFrance/Villes_A/Attigny/attigny.html' },
        { name: 'Aubagne', url: '../../../laPosteDeLancienneFrance/Villes_A/Aubagne/aubagne.html' },
        { name: 'Aubenas', url: '../../../laPosteDeLancienneFrance/Villes_A/Aubenas/aubenas.html' },
        { name: 'Aubenton', url: '../../../laPosteDeLancienneFrance/Villes_A/Aubenton/aubenton.html' },
        { name: 'Aubigny', url: '../../../laPosteDeLancienneFrance/Villes_A/Aubigny/aubigny.html' },
        { name: 'Aubusson', url: '../../../laPosteDeLancienneFrance/Villes_A/Aubusson/aubusson.html' },
        { name: 'Auch', url: '../../../laPosteDeLancienneFrance/Villes_A/Auch/auch.html' },
        { name: 'Audenarde', url: '../../../laPosteDeLancienneFrance/Villes_A/Audenarde/audenarde.html' },
        { name: 'Aulnay (13)', url: '../../../laPosteDeLancienneFrance/Villes_A/Aulnay13/aulnay13.html' },
        { name: 'Aulnay16', url: '../../../laPosteDeLancienneFrance/Villes_A/Aulnay16/aulnay16.html' },
        { name: 'Aumale', url: '../../../laPosteDeLancienneFrance/Villes_A/Aumale/aumale.html' },
        { name: 'Aups', url: '../../../laPosteDeLancienneFrance/Villes_A/Aups/aups.html' },
        { name: 'Auray', url: '../../../laPosteDeLancienneFrance/Villes_A/Auray/auray.html' },
        { name: 'Aurillac', url: '../../../laPosteDeLancienneFrance/Villes_A/Aurillac/aurillac.html' },
        { name: 'Auterive', url: '../../../laPosteDeLancienneFrance/Villes_A/Auterive/auterive.html' },
        { name: 'Autun', url: '../../../laPosteDeLancienneFrance/Villes_A/Autun/autun.html' },
        { name: 'Auxerre', url: '../../../laPosteDeLancienneFrance/Villes_A/Auxerre/auxerre.html' },
        { name: 'Auxonne', url: '../../../laPosteDeLancienneFrance/Villes_A/Auxonne/auxonne.html' },
        { name: 'Auxy', url: '../../../laPosteDeLancienneFrance/Villes_A/Auxy/auxy.html' },
        { name: 'Auzance', url: '../../../laPosteDeLancienneFrance/Villes_A/Auzance/auzance.html' },
        { name: 'Avallon', url: '../../../laPosteDeLancienneFrance/Villes_A/Avallon/avallon.html' },
        { name: 'Avesnes', url: '../../../laPosteDeLancienneFrance/Villes_A/Avesnes/avesnes.html' },
        { name: 'Avenay', url: '../../../laPosteDeLancienneFrance/Villes_A/Avenay/avenay.html' },
        { name: 'Avignon', url: '../../../laPosteDeLancienneFrance/Villes_A/Avignon/avignon.html' },
        { name: 'Avranches', url: '../../../laPosteDeLancienneFrance/Villes_A/Avranches/avranches.html' },
        { name: 'Ay', url: '../../../laPosteDeLancienneFrance/Villes_A/Ay/Ay.html' },
        { name: 'Azille', url: '../../../laPosteDeLancienneFrance/Villes_A/Azille/azille.html' },
        { name: 'Sommaire Ville A', url: '../../../laPosteDeLancienneFrance/Villes_A/sommaireVilleA.html' },
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