/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

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

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
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
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
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
  if (document.querySelector(".case-1__slider")) {
    new Swiper(".case-1__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // slidesPerView: "auto",
      spaceBetween: 16,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      // effect: "fade",
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },

      // Пагинация

      pagination: {
        el: ".case-1__paggination.swiper-pagination",
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
        prevEl: ".case-1-swiper-button-prev",
        nextEl: ".case-1-swiper-button-next",
      },

      // Брейкпоинты

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

      // События
      on: {},
    });
  }
  if (document.querySelector(".case-2__slider")) {
    new Swiper(".case-2__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // slidesPerView: "auto",
      spaceBetween: 16,
      autoHeight: false,
      speed: 800,

      pagination: {
        el: ".case-2__paggination.swiper-pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".case-2-swiper-button-prev",
        nextEl: ".case-2-swiper-button-next",
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
  if (document.querySelector(".case-3__slider")) {
    new Swiper(".case-3__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      // slidesPerView: "auto",
      spaceBetween: 16,
      autoHeight: false,
      speed: 800,

      pagination: {
        el: ".case-3__paggination.swiper-pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".case-3-swiper-button-prev",
        nextEl: ".case-3-swiper-button-next",
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
