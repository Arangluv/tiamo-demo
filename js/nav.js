//Global Selector Difine
const navHeader = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__container-header a ");
const logoImg = document.querySelector(".nav img");
/** Chage nav text Color*/
navHeader.addEventListener("mouseenter", () => {
  logoImg.src = "../images/logo_on.png";
  navLink.forEach((item) => {
    item.style.color = "var(--text-color)";
  });
});

navHeader.addEventListener("mouseleave", () => {
  logoImg.src = "../images/logo.png";
  navLink.forEach((item) => {
    item.style.color = "white";
  });
});