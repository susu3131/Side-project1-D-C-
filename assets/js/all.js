"use strict";

$(window).on('load', function () {
  $('.loading').addClass('loader-hide');
});
$(document).ready(function () {
  //首頁toggle 選單
  $(".index-dc").click(function (e) {
    event.preventDefault();
    $(".index-choose").toggle();
  });
  $(".index-close").click(function (e) {
    event.preventDefault();
    $(".index-choose").toggle();
  });
}); //首頁輪播

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
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
}); //pet 輪播

var swiper = new Swiper(".Swiper-pet", {
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //pet 影片輪播

var swiper = new Swiper(".Swiper-video", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".left",
    prevEl: ".right"
  },
  breakpoints: {
    767: {
      //当屏幕宽度大于等于375
      slidesPerView: 2
    },
    992: {
      //当屏幕宽度大于等于375
      slidesPerView: 2
    },
    1200: {
      //当屏幕宽度大于等于375
      slidesPerView: 3
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
