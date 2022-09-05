// make toggle for nav list button
let toggleBtn = document.querySelector(".toggle"),
  navList = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  if (navList.style.display !== "block") {
    navList.style.display = "block";
    navList.classList.add('fade-down');
  } else {
    navList.style.display = "none";
  }
});

// Scroll to top button
const topBtn = document.querySelector('.to-top-btn');

window.onscroll = () => {
  if (window.scrollY >= 100) {
    topBtn.style.cssText = "opacity: 1; z-index: 100";
  } else {
    topBtn.style.cssText = "opacity: 0; z-index: -1";
  }
};
// Scroll to top function
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
