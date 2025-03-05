function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('active')) {
        slide.classList.remove('active');
      } else {
        closeCards();
        slide.classList.add('active');
      }
    });
  }

  function closeCards() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidesPlugin();
