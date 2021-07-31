$(function () {
	/*
============= Ion-rangeSlider ==================
	*/
	$('.filter-price__input').ionRangeSlider({
		type: 'double',
		prefix: '$',
		step: '0.01',
		onStart: function (data) {
			$('.filter-price__from').text(data.from + '.00');
			$('.filter-price__to').text(data.to + '.00');
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	/*
============= Ion-rangeSlider ==================
	*/
	// $('.recent-product__item-star').rateYo({
	// 
	// });

	$('.products__item-info__star').rateYo({
		starWidth: '18px',
		normalFill: '#d6d6d6',
		ratedFill: '#ffcc00',
		readOnly: true,
	});

	$('.recent-product__item-star').rateYo({
		starWidth: '11px',
		normalFill: '#d6d6d6',
		ratedFill: '#ffcc00',
		readOnly: true,
	});

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
