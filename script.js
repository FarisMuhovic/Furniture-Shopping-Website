const hamburgerBtn = document.getElementById("hamburger");
const hamburgerExit = document.getElementById("hamburger-exit");
const mainNavs = document.getElementById("main-navigation");
hamburgerBtn.addEventListener("click", () => {
  mainNavs.classList.add("mobile-main-navs");
  hamburgerExit.classList.add("mobile-exit-btn");
});
hamburgerExit.addEventListener("click", () => {
  mainNavs.classList.remove("mobile-main-navs");
  hamburgerExit.classList.remove("mobile-exit-btn");
});
