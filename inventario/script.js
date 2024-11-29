let currentIndex = 0;

function updateCarousel() {
  const carousel = document.querySelector(".carousel");
  const testimonials = document.querySelectorAll(".testimonial");
  const offset = -(testimonials[currentIndex].offsetWidth + 20) * currentIndex;
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  const testimonials = document.querySelectorAll(".testimonial");
  if (currentIndex < testimonials.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Ensure the carousel initializes correctly
window.addEventListener("resize", updateCarousel);
updateCarousel();
