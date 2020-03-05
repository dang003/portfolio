///// NAVIGATION

const BURGER = document.querySelector('.burger');

function toggleNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  } BURGER.classList.toggle('fa-times');
}

(BURGER).addEventListener('click', function() {
  toggleNav();
});

// STICKY NAV

const BAR = document.querySelector('.sticky-header');
const ARROW = document.querySelector('.arrow');

(BAR).addEventListener('click', function() {
  var x = document.querySelector('.sticky-links');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  } ARROW.classList.toggle('fa-angle-up');
});
