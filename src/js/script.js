const hamburg = document.querySelector("#hamburg");
const navMenu = document.querySelector("#nav-menu");

hamburg.addEventListener("click", function () {
  hamburg.classList.toggle("hamburg-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const navfix = header.offsetTop;

  if (window.pageYOffset > navfix) {
    header.classList.add("navbar-fix");
  } else {
    header.classList.remove("navbar-fix");
  }
};
