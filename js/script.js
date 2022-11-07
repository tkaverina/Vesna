document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".hero__slider", {
    loop: false,
    effect: "fade",
    speed: 600,
    pagination: {
      el: ".hero__pagination",
      type: "fraction",
      currentClass: "hero__current",
      totalClass: "hero__total",
      progressbarFillClass: "hero__progress",
    },
    navigation: {
      nextEl: ".hero__arrow-next",
      prevEl: ".hero__arrow-prev",
    },
    scrollbar: {
      el: ".hero__scrollbar",
      dragClass: "hero__drag",
    },
  });
  const swiper2 = new Swiper(".reviews__slider", {
    loop: false,
    speed: 600,
    pagination: {
      el: ".reviews__pagination",
      type: "fraction",
      currentClass: "reviews__current",
      totalClass: "reviews__total",
      progressbarFillClass: "rewiews__progress",
    },
    navigation: {
      nextEl: ".reviews__arrow-next",
      prevEl: ".reviews__arrow-prev",
    },
    scrollbar: {
      el: ".reviews__scrollbar",
      dragClass: "reviews__drag",
    },
  });
});

Fancybox.bind('.about__gallery a', {
  Toolbar: {
    display: [
      { id: "counter", position: "center" },
      
      "close",
    ],
  },
});
document.addEventListener('DOMContentLoaded', function () {
  accordion();
});
function accordion() {
  const accordion = document.querySelectorAll('.accordion');
  if (accordion.length > 0) {
    const accordionHead = document.querySelectorAll('.accordion__head');

    accordionHead.forEach(item => {
      item.addEventListener('click', function () {
        const mainAccordion = item.closest('.accordion');
        const accordionBody = item.nextElementSibling;

        if (!mainAccordion.classList.contains('active')) {
          const activeAccordion = document.querySelector('.accordion.active');
          if (activeAccordion) {
            const activeAccordionBody = activeAccordion.querySelector('.accordion__body');
            activeAccordion.classList.remove('active');
            slideUp(activeAccordionBody, 300);
          }
          mainAccordion.classList.add('active');
          slideDown(accordionBody, 300);
        } else {
          mainAccordion.classList.remove('active');
          slideUp(accordionBody, 300);
        }
      });
    });
  }
}
let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}