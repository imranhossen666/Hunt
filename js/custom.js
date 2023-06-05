var navIcon = document.querySelector(".nav-icon")
var navStyle = document.querySelector(".nav-style")
var navClose = document.querySelector(".nav-close")

navIcon.addEventListener("click", ()=> {
    navStyle.classList.toggle("navDark")  
})



$('.banner-slick-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});
$('.prev-icon').on('click', function() {
    $('.banner-slick-slider-main').slick('slickPrev');
});
  $('.next-icon').on('click', function() {
    $('.banner-slick-slider-main').slick('slickNext');
});


  $('.service-items-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          vertical: false,
        }
      }
    ]
  });

  $('.service-prev').on('click', function() {
    $('.service-items-main').slick('slickPrev');
});
  $('.service-next').on('click', function() {
    $('.service-items-main').slick('slickNext');
});




$('.feedback-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  asNavFor: '.feedback-text',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        vertical: false,
      }
    }
  ]
});

$('.feedback-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.feedback-img',
  arrows: false,
  focusOnSelect: true
});

$('.feedback-prev').on('click', function() {
  $('.feedback-img').slick('slickPrev');
});
$('.feedback-next').on('click', function() {
  $('.feedback-img').slick('slickNext');
});


jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
});

// $('.feedback-text').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.feedback-img'
// });
// $('.feedback-img').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   asNavFor: '.feedback-text',
//   centerMode: true,
//   centerPadding: '20px',
//   vertical: true,
// });