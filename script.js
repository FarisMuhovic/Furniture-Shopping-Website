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

const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const items = document.querySelectorAll(".item");

let translateVar = 0;
let translateValue = 0;
if (window.innerWidth < 600) {
  translateValue += 335;
} else {
  translateValue += 533;
}
const itemGap = 10;
let countRight = 0;

rightBtn.addEventListener("click", () => {
  if (translateVar > -translateValue * 6 && countRight < 6) {
    countRight++;
    translateVar -= translateValue;
    document.documentElement.style.setProperty(
      "--itemtranslate",
      translateVar + "px"
    );
  } else {
    translateVar = 0;
    countRight = 0;
    document.documentElement.style.setProperty(
      "--itemtranslate",
      translateVar + "px"
    );
  }
});
leftBtn.addEventListener("click", () => {
  if (translateVar < 0) {
    countRight--;
    translateVar += translateValue;
    document.documentElement.style.setProperty(
      "--itemtranslate",
      translateVar + "px"
    );
  } else {
    translateVar = -translateValue * 6 + itemGap;
    countRight = 6;
    document.documentElement.style.setProperty(
      "--itemtranslate",
      translateVar + "px"
    );
  }
});
// change instead of pixels to percentage for more responsivness
