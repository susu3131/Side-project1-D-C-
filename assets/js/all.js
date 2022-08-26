"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    450: {
      //当屏幕宽度大于等于375
      slidesPerView: 3,
      spaceBetween: 15
    },
    576: {
      //当屏幕宽度大于等于375
      slidesPerView: 4,
      spaceBetween: 20
    },
    767: {
      //当屏幕宽度大于等于375
      slidesPerView: 5,
      spaceBetween: 30
    },
    992: {
      //当屏幕宽度大于等于375
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
}); // var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   zoom: true,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
//# sourceMappingURL=all.js.map
