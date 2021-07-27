$(function () {
	/*
============= Slick-Slider ==================
	*/
	$('.top-slider__inner').slick({
		dots: true,
		fade: true,
		autoplay: 3000,
		slidesToShow: 1,
		arrows: false,
	});

	/*
============= MixitUp ==================
	*/
	var products = document.querySelector('[data-ref="products"]');
	var design = document.querySelector('[data-ref="design"]');

	var config = {
		controls: {
			scope: 'local',
		},
	};

	var mixer_products = mixitup(products, config);
	var mixer_design = mixitup(design, config);
});
