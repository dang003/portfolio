// STICKY NAV

const BAR = document.querySelector('.sticky-header');
const ARROW = document.querySelector('.sticky-arrow');
const LINKS = document.querySelector('.sticky-links');

function toggleSticky() {
  var x = document.querySelector('.sticky-links');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  } ARROW.classList.toggle('fa-angle-up');
}

var w = window.innerWidth;
if (w < 992) {

(BAR).addEventListener('click', function() {
  toggleSticky();
});

(LINKS).addEventListener('click', function() {
  toggleSticky();
});

}
