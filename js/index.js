import Swup from "swup";
const swup = new Swup(); // only this line when included with script tag

var toggleMenu = document.querySelector(".toggleMenu");
var body = document;
querySelector("body");

toggleMenu.addEventListener("click", function () {
  body.classList.toggle("open");
});
