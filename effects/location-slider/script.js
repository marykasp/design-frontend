const rotateBtn = document.querySelector(".rotate-btn");
const sliders = document.querySelectorAll(".bg-slide");
const slides = Array.from(sliders);
const totalSlides = sliders.length;
let index = 0;

rotateBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    if (slide.classList.contains("active")) {
      // will replace with after-active
      slide.classList.add("after-active");
    } else {
      slide.classList.remove("after-active");
    }
  });

  // remove the active class from
  slides[index].classList.remove("active");
  index++;

  // reset index to 0 if at end of list
  if (index == totalSlides) {
    index = 0;
  }

  slides[index].classList.add("active");
});
