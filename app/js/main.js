$(function () {
	$('.top-slider__inner').slick({
		dots:true,
		fade: true,
		autoplay: 3000,
		slidesToShow: 1,
		arrows: false
	});

	var mixer = mixitup('.title-mix__list');
});
