//---------counter for intro section-------------------
let nums = document.querySelectorAll(".count .num");
let section = document.querySelector(".counts");
nums.forEach((num) => count(num));
function count(elem) {
  let goal = elem.dataset.goal;
  let counter = setInterval(() => {
    elem.textContent++;
    if (elem.textContent == goal) {
      clearInterval(counter);
    }
  }, 1);
}
//--------appear div when click---
$(document).ready(function () {
  toggle();
});

function toggle() {
  var ok = 0;
  $(".ques").click(function (e) {
    e.preventDefault();
    if (ok === 0) {
      this.style.color = "rgb(145, 24, 24)";
      this.style.borderLeft = "solid rgb(145, 24, 24)";
      ok = 1;
    } else {
      this.style.color = "black";
      this.style.borderLeft = "none";
      ok = 0;
    }
    $(this).closest(".qp").find(".ans").slideToggle();
  });
}
//----------------scroll cards with buttons-----------
const blogContainers = [...document.querySelectorAll(".blogcards")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

blogContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.2 * containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.2 * containerWidth;
  });
});
//-------------------
