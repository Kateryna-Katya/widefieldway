import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.gallery-swiper', {
  modules: [Pagination, Autoplay],

  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  autoplay: {
    delay: 3000, // 3 секунди
    disableOnInteraction: false, // не зупиняється після кліку
    pauseOnMouseEnter: true, // пауза при наведенні
  },

  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },
});