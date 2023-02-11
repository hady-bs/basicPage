let x = document.querySelectorAll("span");
let counter = document.createElement("div");
counter.className = "counter";
counter.innerHTML = "0";
counter.style.cssText = `
position: absolute;
color:white;
top:-30px;
right:0;

`;
let bgcolors = ["black", "rgb(49, 44, 44)"];
setInterval(() => {
  document.querySelector(".page1").style.backgroundColor =
    bgcolors[Math.floor(Math.random() * bgcolors.length)];
  document.querySelector(".page2").style.backgroundColor =
    bgcolors[Math.floor(Math.random() * bgcolors.length)];
  document.querySelector(".page3").style.backgroundColor =
    bgcolors[Math.floor(Math.random() * bgcolors.length)];
}, 15000);
let colors = [
  "rgb(16, 107, 16)",
  "rgb(36, 36, 146)",
  "rgb(207, 27, 27)",
  "rgb(133, 190, 17)"
];
x.forEach((j) => {
  j.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  colors[Math.floor(Math.random() * colors.length)];
});
let y;
x.forEach((i) => {
  counter = counter.cloneNode(true);
  i.append(counter);
});
let counters = document.querySelectorAll(".counter");
let started = false;
let pageTwo = document.querySelector(".page2");

function startCount(el) {
  let goal = el.parentElement.dataset.max;

  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
let pageThree = document.querySelector(".page3");
let loremDiv = document.querySelector(".lo");
window.onscroll = () => {
  if (window.scrollY >= pageTwo.offsetTop) {
    x.forEach((item) => {
      item.style.width = item.getAttribute("data-max") + "%";
    });
    if (!started)
      counters.forEach((li) => {
        startCount(li);
        started = true;
      });
  }
  if (window.scrollY >= pageThree.offsetTop) {
    loremDiv.style.animationName = "transe";
  }
};
