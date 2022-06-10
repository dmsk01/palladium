import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
  if (document.querySelector(".about-swiper")) {
    new Swiper(".about-swiper", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      pagination: {
        el: ".about__paggination.swiper-pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".about-swiper-button-prev",
        nextEl: ".about-swiper-button-next",
      },
    });
  }
  if (document.querySelector(".catalog-swiper")) {
    new Swiper(".catalog-swiper", {
      modules: [Navigation, Pagination, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация

      pagination: {
        el: ".catalog__paggination.swiper-pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".catalog-swiper-button-prev",
        nextEl: ".catalog-swiper-button-next",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".facade-swiper")) {
    new Swiper(".facade-swiper", {
      modules: [Navigation, Pagination, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация

      pagination: {
        el: ".catalog__paggination.swiper-pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".catalog-swiper-button-prev",
        nextEl: ".catalog-swiper-button-next",
      },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  const caseSliders = document.querySelectorAll(".case");
  for (let caseSlider = 0; caseSlider < caseSliders.length; caseSlider++) {
    const caseBody = caseSliders[caseSlider];
    const element = caseBody.querySelector(".case__slider.swiper");
    const elementPrevButton = caseBody.querySelector(
      ".case-swiper-button-prev"
    );
    const elementNextButton = caseBody.querySelector(
      ".case-swiper-button-next"
    );
    const elementPagginatiopn = caseBody.querySelector(".case__paggination");

    new Swiper(element, {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // slidesPerView: "auto",
      spaceBetween: 16,
      autoHeight: false,
      speed: 800,
      watchOverflow: true,

      pagination: {
        el: elementPagginatiopn,
        clickable: true,
      },

      navigation: {
        prevEl: elementPrevButton,
        nextEl: elementNextButton,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        580: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  }
}

window.addEventListener("load", function (e) {
  initSliders();
});
