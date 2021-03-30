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
        tooltips: true,
        step: 1,
        connect: 'lower',
        format: {
          // 'to' the formatted value. Receives a number.
          to: function (value) {
              return value + '';
          },
          // 'from' the formatted value.
          // Receives a string, should return a number.
          from: function (value) {
              return Number(value.replace(',-', ''));
          }
      },
        range: {
            'min': [0],
            'max': [40]
        }
    });

    rangeSlider.noUiSlider.on('update', function(values, handle, unencoded, tap, positions, noUiSlider){
      $('.quiz-range__count span').text(values + ' дн')
      $('.quiz-range__input input').val(values + ' дн')

      $('.quiz-range__start').removeClass('visibility-hidden')
      $('.quiz-range__end').removeClass('visibility-hidden')

      if(values == 0 ){
        $('.quiz-range__start').addClass('visibility-hidden')
      }
      if(values == 40 ){
        $('.quiz-range__end').addClass('visibility-hidden')
      }
    })


 



  //start 
  
  $('[data-test="start"]').on('click', function(event){
    
    $('.mv-quiz__start').hide()
    $('.mv-quiz__form').show()
    $('.mv-quiz__wrp').addClass('open')

     // swiper

  Swiper.use([Pagination, Navigation, Thumbs, Autoplay]);

  function updateFraction(slider) {

    const { params, activeIndex } = slider;

    $('.quiz-form__head-step span').first().text(activeIndex+1)
    $('.quiz-form__head-step span').last().text(slider.slides.length)

    $('.quiz-form').attr('data-slide', ''+(activeIndex+1)+'')

  }
  
var swiper = new Swiper('.quiz-form__main .swiper-container', {

  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlides: false,
  simulateTouch: false,
  calculateHeight:true,
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
    slideChange(event) {
      updateFraction(this);
    },
    resize() {
      updateFraction(this);
    },
  },

});
    
  })

});