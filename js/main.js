$(document).ready(function(){


  $('.home-slider').slick({
    autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
     centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
    zIndex: 2,
    responsive: [
    {
      breakpoint: 860,
      settings: {
        arrows: false
      }
    }
  ]
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
    slidesToScroll: 6,
    responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  var ww = document.body.clientWidth;
	if (ww > 736) {
    $('.buses_slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
	}
  // if ($(window).width() > 700) {
  //   $('.buses_slider').slick({
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     responsive: [
  //     {
  //       breakpoint: 1360,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3
  //       }
  //     },
  //     {
  //       breakpoint: 1060,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 724,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
  // }
  var link = document.querySelector('.header_menu-mobile_link');
  var mobileMenu = document.querySelector('.header_menu');
  var subMenuLink = mobileMenu.querySelector('.header_sub');
  var subMenu = mobileMenu.querySelector('.header_submenu');
  link.addEventListener('click', function(event){
      event.preventDefault();
      link.classList.toggle('menu_mobile-close')
      mobileMenu.classList.toggle('js-menu-show')
  });

  subMenuLink.addEventListener('click', function(event){
      event.preventDefault();
      subMenu.classList.toggle('js-menu-show')
  });
});
