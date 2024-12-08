/*--------------- Testimonial Slider ---------------*/ 
var swiper = new Swiper(".testimonial-slider", {

  
  spaceBetween: 15,
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, 
  }, 

  pagination: {
    el: ".swiper-pagination2",
    clickable:true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 2,
    },
  },

}); 
