let btn = document.querySelectorAll("button");
let quest = document.querySelectorAll(".question");

btn.forEach((b) => {
  b.onclick = () => {
    b.previousElementSibling.classList.toggle("bold");

    b.parentElement.nextElementSibling.classList.toggle("hidden");
    b.firstChild.classList.toggle("rotate-icon");
  };
});

quest.forEach((q) => {
  q.onmouseover = () => {
    q.style.color = "hsl(14, 88%, 65%)";
  };
  q.onmouseout = () => {
    q.style.color = "hsl(238, 29%, 16%)";
  };
});

let img1 = document.querySelector("#head-img");
let img2 = document.querySelector("#head-img-bg");

// window.onresize = function () {
//   if (window.innerWidth > 375) {
//     img1.setAttribute("src", "/images/illustration-woman-online-desktop.svg");
//     img2.style.display = "none";
//   }
// };
