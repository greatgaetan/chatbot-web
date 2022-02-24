AOS.init({
  once: true,
});
var toggleMenu = document.querySelector(".toggleMenu");
var body = document.querySelector("body");

var navbar = document.getElementById("navbar");
var aTags = navbar.getElementsByTagName("a");
for (var i = 0; i < aTags.length; i++) {
  aTags[i].addEventListener("click", function () {
    body.classList.remove("open");
  });
}

toggleMenu.addEventListener("click", function () {
  body.classList.toggle("open");
});
