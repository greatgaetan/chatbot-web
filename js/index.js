import Swup from "../node_modules/swup/dist/swup";
const swup = new Swup(); // only this line when included with script tag

var toggleMenu = document.querySelector(".toggleMenu");
var body = document.querySelector("body");

/**
 * Getting "a" tags from navbar to add click event to
 * close menu on mobile view.
 */
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
