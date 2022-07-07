import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);

const swiper = new Swiper(".swiper-hero", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  speed: 500,
  simulateTouch: true,
});
