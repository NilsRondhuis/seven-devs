import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);

const swiper = new Swiper(".swiper-hero", {
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
