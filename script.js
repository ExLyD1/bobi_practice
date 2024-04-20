const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  hashNavigation: {
    watchState: true,
  },
});

const solutionsSelectors = document.querySelectorAll(".solSelHolder .solSelectors");

solutionsSelectors.forEach(element => {
  element.addEventListener("click", event => {
    event.target.classList.add("solSelectorsCol");
    solutionsSelectors.forEach(otherElement => {
      if (otherElement !== event.target) {
        otherElement.classList.remove("solSelectorsCol");
      }
    });
  });
});

swiper.on('slideChange', () => {
  const activeSlideIndex = swiper.realIndex;
  const solutionsSelectors = document.querySelectorAll(".solSelHolder .solSelectors");
  solutionsSelectors.forEach(element => {
    element.classList.remove("solSelectorsCol");
  });
  solutionsSelectors[activeSlideIndex].classList.add("solSelectorsCol");
});

solutionsSelectors.forEach((element, index) => {
  element.addEventListener("click", () => {
    swiper.slideTo(index);
  });
});




const itemHolder = document.querySelectorAll(".selItemHolder .selItem")

itemHolder.forEach(element => {
  element.addEventListener("click", event => {
    const parent = event.target.closest(".selItem")
    parent.classList.add("selItemCol")

    itemHolder.forEach(otherElement => {
      if (otherElement!==parent) {
      otherElement.classList.remove("selItemCol")
    }
    })
  })
});

document.addEventListener('DOMContentLoaded', function() {
  const activeSlideIndex = swiper.activeIndex; 
  const activeDiv = document.querySelector(`[data-slide-index="${activeSlideIndex}"]`);
  activeDiv.classList.add('solSelectorsCol');
});