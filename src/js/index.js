import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
} from 'swiper';

import 'jquery.inputmask/dist/jquery.inputmask.bundle';


import $ from 'jquery';
import './import/jquery.fancybox.min';
import noUiSlider from 'nouislider/distribute/nouislider.min';


svgPolyfill();

$(document).ready(function () {

  // vk

  var rangeSlider = document.getElementById('slider-range');

    noUiSlider.create(rangeSlider, {
        start: [3],
        range: {
            'min': [0],
            'max': [40]
        }
    });


  // swiper

  Swiper.use([Pagination, Navigation, Thumbs, Autoplay]);

  function updateFraction(slider) {

    const { params, activeIndex } = slider;

    $('.quiz-form__head-step span').first().text(activeIndex+1)
    $('.quiz-form__head-step span').last().text(slider.slides.length)

  }
  
var swiper = new Swiper('.quiz-form__main .swiper-container', {

  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlides: false,
  navigation: {
    nextEl: '.quiz-form__nav-next',
    prevEl: '.quiz-form__nav-prev',
  },
  pagination: {
    el: '.quiz-form__head-dots',
    type: 'bullets',
    clickable: true,
    renderFraction: (currentClass, totalClass) => `
      <span class="${currentClass}"></span> из
      <span class="${totalClass}"></span>`,
  },
  breakpoints: {
    // 0: {
    //   slidesPerView: 1.1,
    //   spaceBetween: 15,
    // },
    // 580: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 20,
    // },
    // 940: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 20,
    // },
    // 1025: {
    //   slidesPerView: 1.9,
    // },
  },
  on: {
    init() {
      setTimeout(updateFraction, 0, this);
    },
    slideChange() {
      updateFraction(this);
    },
    resize() {
      updateFraction(this);
    },
  },

});



  //start 
  
  $('[data-test="start"]').on('click', function(event){
    
    $('.mv-quiz__start').hide()
    
  })

});