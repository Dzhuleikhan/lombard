import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const exampleSwiper = new Swiper('.example__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 35,
  loop: true,
  centeredSlides: true,
  navigation: {
    prevEl: '.example__swiper-prev',
    nextEl: '.example__swiper-next'
  },
  pagination: {
    el: '.swiper-pagination'
  }
});

const locSwiper = new Swiper('.loc__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 35,
  pagination: {
    el: '.swiper-pagination'
  }
});
