const wrapper = document.querySelector(".customers__wrapper");
const slides = Array.from(wrapper.children);
const leftBtn = document.querySelector(".customers__arrow_left");
const rightBtn = document.querySelector(".customers__arrow_right");
const dotsElements = document.querySelectorAll(".customers__dot");
const dots = Array.from(dotsElements);

let currentIndex = 0;
let nextDot = 0;

/**
 * Updates the customer slider by scrolling to the currently selected slide,
 * updating the active class on the dots and slides, and updating the active
 * class on the currently selected slide.
 */
export default function updateSlider() {
  const slideWidth = slides[currentIndex].offsetWidth; //get the width of current slide
  wrapper.scrollLeft = slideWidth * currentIndex;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("nextDot"));
  dots[currentIndex].classList.add("active");

  nextDot = currentIndex + 1;
  if (nextDot <= dots.length - 1) {
    dots[nextDot].classList.add("nextDot");
  }

  if (nextDot === dots.length) {
    dots[currentIndex - 1].classList.add("nextDot");
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[currentIndex].classList.add("active");
}

export const slideClickHandlers = () => {
  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (currentIndex === index) return;
      currentIndex = index;
      updateSlider();
    });
  });
  updateSlider();
};

rightBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (currentIndex === index) return;
    currentIndex = index;
    updateSlider();
  });
});
