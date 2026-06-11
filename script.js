/*
================================
SELECT ALL SLIDES AND DOTS
================================
*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

/*
================================
TRACK CURRENT SLIDE
================================
*/

let currentSlide = 0;

/*
================================
SHOW SELECTED SLIDE
================================

Receives the slide index.

1. Hide all slides.
2. Remove active dot.
3. Show selected slide.
4. Activate corresponding dot.
*/

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");

  currentSlide = index;
}

/*
================================
SHOW NEXT SLIDE
================================

Moves to the next slide.
If we're on the last slide,
go back to the first slide.
*/

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

/*
================================
DOT CLICK EVENTS
================================

Each dot stores a slide number
inside the data-slide attribute.

When clicked, show that slide.
*/

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = Number(dot.dataset.slide);

    showSlide(slideIndex);
  });
});

/*
================================
AUTO PLAY
================================

Automatically switch slides
every 5 seconds (5000 ms).
*/

setInterval(nextSlide, 5000);
/*
================================
INITIALIZE FIRST SLIDE
================================
*/

showSlide(0);
