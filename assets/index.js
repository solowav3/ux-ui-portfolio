AOS.init({
    duration: 1200,
  });

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  
  // document.getElementById("sidenav").style.width = "250px";
  
  document.getElementById("sidenav").classList.remove('translate-x-full');

  document.getElementById("sidenav").classList.add('translate-x-0');

  document.getElementById("scrim").classList.remove('hidden');

  document.getElementById("btn_back").classList.add('hidden');


  document.getElementById("navbar").classList.remove('justify-between');
  document.getElementById("navbar").classList.add('justify-end');


}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  // document.getElementById("sidenav").style.width = "0";

  document.getElementById("sidenav").classList.remove('translate-x-0');

  document.getElementById("sidenav").classList.add('translate-x-full');

  document.getElementById("scrim").classList.add('hidden');

  document.getElementById("btn_back").classList.remove('hidden');

  document.getElementById("navbar").classList.add('justify-between');
  document.getElementById("navbar").classList.remove('justify-end');


} 

var prevScrollpos = window.pageYOffset,
navBar = document.getElementById("navbar");


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = - navBar.clientHeight;
  }
  prevScrollpos = currentScrollPos;
} 


var nxtSection = document.getElementsByTagName("section")[1];

function scrollToTop() {
  nxtSection.scrollIntoView(true); // Top
}

function scrollToBottom() {
  nxtSection.scrollIntoView(false); // Bottom
}

