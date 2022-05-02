// section02 swiper start
var swiper = new Swiper(".section02 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// section02 swiper end

// section02 text start
$(document).ready(function(){
  var section02_text = $('.section02').offset().top;
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    // if (scroll)
    console.log(scrollTop);
  })
})

if (document.body.scrollTop == 0) {
  var top = document.body.documentElement.scrollTop;
  } else {
  var top = document.body.scrollTop;
  }
// section02 text end

// section03 start
var swiper = new Swiper(".section03 .mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// section03 end

