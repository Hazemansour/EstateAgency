// get Elements
let landing = document.querySelector(".landing"),
  landingSlides = Array.from(document.querySelectorAll(".landing-slide"));

// Cteate indicators Elements
function createIndicators(cl) {
  let indicators = document.createElement("div");
  indicators.className = cl;

  for (let i = 0; i < landingSlides.length; i++) {
    let span = document.createElement("span");
    indicators.appendChild(span);
  }
  landing.appendChild(indicators);
}
createIndicators("indicators");

// Landing slider
let indi = document.querySelectorAll(".indicators span");

// slide show
let time = 8000,
  currentIndex = 0;
function slideShow() {
  // change slide by change translate value
  landingSlides.forEach((el) => {
    el.style.transform = `translateX(${-100 * currentIndex}%)`;
  });
  // reset bg color and width for indicators
  indi.forEach((el) => {
    el.classList.remove("actv");
  });
  // add bg color and more width for indicators
  indi[currentIndex].classList.add("actv");
  if (currentIndex < landingSlides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
}
setInterval("slideShow()", time);
window.onload = slideShow;

indi.forEach((el, index) => {
  el.addEventListener("click", () => {
    // change slide on click by change translate value
    landingSlides.forEach((el) => {
      el.style.transform = `translateX(${-100 * index}%)`;
    });

    // reset bg color and width for indicators
    indi.forEach((el) => {
      el.classList.remove("actv");
    });

    // add bg color and more width for indicators
    el.classList.add("actv");
    // stop slide show
    clearInterval(1);
  });
});

// Testimonials slides
let testSlides = document.querySelectorAll(".testimonials-slide"),
  backButton = document.querySelector(".back-btn"),
  forwardButton = document.querySelector(".forward-btn"),
  currentSlide = 0;

// function to show next testimonials slide
function nextSlide() {
  ++currentSlide;
  if (currentSlide >= testSlides.length - 1) {
    forwardButton.setAttribute("disabled", "");
    forwardButton.style.color = "#999";
    currentSlide = testSlides.length - 1;
  }
  if (backButton.hasAttribute("disabled")) {
    backButton.removeAttribute("disabled");
    backButton.style.color = "";
  }
  console.log(currentSlide);
  // hide all slides
  testSlides.forEach((el) => {
    el.style.display = "none";
  });
  // remove fade-up class from all slides
  testSlides.forEach((el) => {
    el.classList.remove("fade-up");
  });
  // add fade-up animation class for current slide
  testSlides[currentSlide].classList.add("fade-up");
  // show current slide
  testSlides[currentSlide].style.display = "flex";
}

// function to show prevs testimonials slide
function prevSlide() {
  --currentSlide;
  if (currentSlide <= 0) {
    backButton.setAttribute("disabled", "");
    backButton.style.color = "#999";
    currentSlide = 0;
  }
  if (forwardButton.hasAttribute("disabled")) {
    forwardButton.removeAttribute("disabled");
    forwardButton.style.color = "";
  }
  // hide all slides
  testSlides.forEach((el) => {
    el.style.display = "none";
  });
  // remove fade-up class from all slides
  testSlides.forEach((el) => {
    el.classList.remove("fade-up");
  });
  // add fade-up animation class for current slide
  testSlides[currentSlide].classList.add("fade-up");
  // show current slide
  testSlides[currentSlide].style.display = "flex";
}
// show a slide by default [first one]
prevSlide();
forwardButton.onclick = nextSlide;
backButton.onclick = prevSlide;
