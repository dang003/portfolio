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
