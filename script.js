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

const getItems = async () => {
  const response = await fetch("database.json");
  const data = response.json();
  return data;
};
const carouselBox = document.getElementById("caroseul-explore");
getItems()
  .then(data => {
    data.forEach(item => {
      console.log(item);
      carouselBox.innerHTML += `<div class="item">
      <img src=${item.image} class="image">
      <div class="textitem">
        <p class="description-item">${item.description}</p>
        <p id="article-name">${item.title}</p>
        <p id="article-price">${item.price}</p>
      </div>
    </div>`;
    });
  })
  .catch(error => {
    console.log("You got an error", error);
  });

const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const items = document.querySelectorAll(".item");

let translateVar = 0;
let translateValue = 0;
let itemcounter = 0;
window.onload = () => {
  if (window.innerWidth < 600) {
    translateValue += 164.5;
    itemcounter += 8;
  } else {
    translateValue += 533;
    itemcounter += 6;
  }
};
const itemGap = 10;
let countRight = 0;

rightBtn.addEventListener("click", () => {
  if (
    translateVar > -translateValue * itemcounter &&
    countRight < itemcounter
  ) {
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
    translateVar = -translateValue * itemcounter + itemGap;
    countRight = itemcounter;
    document.documentElement.style.setProperty(
      "--itemtranslate",
      translateVar + "px"
    );
  }
});
