/*** Hamburger ***/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu ");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/*** Lukker hamburger når der klikkes på links ***/
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
