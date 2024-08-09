var logo = document.querySelector(".logo");

var headerMenu = document.querySelector(".menu");

var headerNav = document.querySelector("nav");

headerMenu.addEventListener("click", toggleNav);
function toggleNav() {
  headerNav.classList.toggle("closeNav");
}

var navLinks = document.querySelectorAll("a");

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", handleNavlinkAction)
);

function handleNavlinkAction() {
  headerNav.classList.add("closeNav");
}

console.log(navLinks);