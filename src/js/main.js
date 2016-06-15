$(document).ready(function(){
  $('.home-slider').slick({
    autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
  });

  $('.buses_slider').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
  });

  $('.partners_slider').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true
  });
});
