const menuSlider = document.querySelector('.menuSlider');
const btn = document.querySelector('.btn');
const itemListe = document.querySelectorAll('.menuItem');
const imgChange = document.getElementById('imgChange');
let toggle = 0;
let imgDejaMiseEnPlace = 0;

btn.addEventListener('click', () => {

    if(toggle === 0) {
        toggle++;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(0px)', ease: Expo.easeOut})
    } else {
        toggle--;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(1800px)'})

    }

})

itemListe.forEach(item => item.addEventListener('mouseenter', () => {


    if(item.getAttribute('data-id') === imgDejaMiseEnPlace) {
        return;
    } else {
        
            imgChange.src = "/ressources/pic" + item.getAttribute('data-id') + ".jpg";
            TweenMax.to(imgChange,0.1,{opacity: 0.1})
            TweenMax.to(imgChange,0.2,{delay:0.1, opacity:1})
            imgDejaMiseEnPlace = item.getAttribute('data-id');
    }   
    

}))

itemListe.forEach(item => item.addEventListener('click', () => {

    toggle--;
    TweenMax.to(menuSlider,1.75,{transform: 'translate(1800px)'})

}))