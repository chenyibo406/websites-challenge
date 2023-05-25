const greenCupEl = document.querySelector(".green-cup");
const pinkCupEl = document.querySelector(".pink-cup");
const purpleCupEl = document.querySelector(".purple-cup");
const coffeeText = document.querySelector(".starbucks-text");
const btnEl = document.querySelector(".btn");
const liEls = document.querySelectorAll(".navbar > ul > li > a");
const greenColor = "#017143";
const pinkColor = "#eb7495";
const purpleColor = "#d752b1";

console.log(liEls);

function hoverColor(color) {
  liEls.forEach((element) => {
    element.style.setProperty("--hover-color", color);
  });
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

greenCupEl.addEventListener("click", () => {
  imgSlider("images/img1.png");
  changeCircleColor(greenColor);
  coffeeText.style.color = greenColor;
  btnEl.style.background = greenColor;
  hoverColor(greenColor);
});
pinkCupEl.addEventListener("click", () => {
  changeCircleColor(pinkColor);
  imgSlider("images/img2.png");
  coffeeText.style.color = pinkColor;
  btnEl.style.background = pinkColor;
  hoverColor(pinkColor);
});
purpleCupEl.addEventListener("click", () => {
  imgSlider("images/img3.png");
  changeCircleColor(purpleColor);
  coffeeText.style.color = purpleColor;
  btnEl.style.background = purpleColor;
  hoverColor(purpleColor);
});

function imgSlider(img) {
  document.querySelector(".starbucks").src = img;
}
