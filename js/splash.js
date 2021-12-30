let intro = document.querySelector(".splash");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let a = 1;

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span) => {
      setTimeout(() => {
        span.classList.add("active");
      }, 400);
    });
    setTimeout(() => {
      logoSpan.forEach((span) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, 1500);
      });
    }, 2000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3500);
  });
});
document.getElementsByClassName("nav-link").addEventListener("click", () => {
  document.getElementsByClassName("splash").style.display = "none";
});
