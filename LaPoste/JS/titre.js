const toggle = document.querySelector('#toggle');
const sidetoggle = document.querySelector('#side-toggle');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('#overlay');
const swapperBtn = document.querySelector('#swapper-btn');

let side = 'left';
let translateX = '-100';
let borderRadius = '0 0.5em 0.5em 0';
let insets = '0 auto auto 0';

swapperBtn.onclick = (e) => {
  swapSide();
}

toggle.onclick = (e) => {
  showSidebar()
}

sidetoggle.onclick = (e) => {
  hideSidebar();
}

overlay.onclick = (e) => {
  hideSidebar();
}

const showSidebar = () => {
  sidebar.style.transform =  `translate(0%)`;
  sidebar.style.filter = 'drop-shadow(0 0.5em 0.5em black)';
  overlay.style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

const hideSidebar = () => {
  sidebar.style.transform = `translate(${translateX}%)`;
  sidebar.style.filter = 'none';
  overlay.style.display = 'none';
  document.body.style.overflowY = 'auto';
}

const swapSide = () => {
  if (side == 'left') {
    side = 'right';
    insets = '0 0 auto auto';
    translateX = '100';
    borderRadius = '0.5em 0 0 0.5em'
  }
  else if (side == 'right') {
    side = 'left';
    insets = '0 auto auto 0';
    translateX = '-100';
    borderRadius = '0 0.5em 0.5em 0';
  }
  sidebar.style.transition = "none";
  sidebar.style.inset = insets;
  sidebar.style.borderRadius = borderRadius;
  toggle.style.inset = insets;
  hideSidebar();
  sidebar.offsetHeight;
  sidebar.style.transition = "";
}