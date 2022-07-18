import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);

const swiperHero = new Swiper(".swiper-hero", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  speed: 500,
  simulateTouch: true,
  grabCursor: true,
  breakpoints: {
    1200: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

const swiperWorks = new Swiper(".swiper-works", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoHeight: true,
  simulateTouch: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
