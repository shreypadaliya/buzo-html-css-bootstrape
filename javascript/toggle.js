const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
// Toggle the 'active' class on the nav menu
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
