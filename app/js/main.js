$(document).ready(function () {

  $('.slider__wrapper').slick({
    arrows: false,
    dots: true,
  });
  $('.header__burger').on('click', function(){
      $('.header__menu-list').slideToggle();
    }); //Для бургера!

    new WOW().init();
});
   

  //   $('.testi__slider').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  // }); Обычный одиночный слайдер!

	//  $('.slider-for').slick({
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	//   fade: true,
	//   asNavFor: '.slider-nav'
	// });
	// $('.slider-nav').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   asNavFor: '.slider-for',
	//   dots: true,
	//   centerMode: true,
	//   focusOnSelect: true
	// }); Двойной слайдер!


  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); Для табов!

