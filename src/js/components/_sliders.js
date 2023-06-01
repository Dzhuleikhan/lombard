import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const exampleSwiper = new Swiper('.example__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 35,
  loop: true,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    prevEl: '.example__swiper-prev',
    nextEl: '.example__swiper-next'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    320: {
      spaceBetween: 14,
      loop: true,
      centeredSlides: false,
    },
    430: {
      spaceBetween: 35,
      loop: true,
      centeredSlides: true
    }
  }
});

const locSwiper = new Swiper('.loc__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    prevEl: '.loc__swiper-prev',
    nextEl: '.loc__swiper-next'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    320: {
      spaceBetween: 14,
      loop: false,
      centeredSlides: false,
    },
    430: {
      loop: true,
      centeredSlides: false
    }
  }
});
