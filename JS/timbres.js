const slides = document.querySelectorAll("#frame li");
const count = slides.length; //9
let counter = 0;

function goPrev() {
  slides[counter].classList.remove("active");
  if (counter !== 0) {
    counter--;
  } else {
    counter = count - 1;
  }
  slides[counter].classList.add("active");
}
function goNext() {
  slides[counter].classList.remove("active");
  if (counter < count - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slides[counter].classList.add("active");
}



