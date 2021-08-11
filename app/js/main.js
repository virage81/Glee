$(function () {
	/*
============= Menu Button ==================
	*/
	$('.user-nav__link--menu').on('click', function() {
		$('.menu').toggleClass('menu--active');
	});

	/*
============= Product Tabs ==================
	*/
	$('.product-tabs__top-item').on('click', function (e) {
		e.preventDefault();

		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active');

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');
	});

	/*
============= Form Styler ==================
	*/
	$('.product-one__info-input').styler({});

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

	$('.products__item-info__star').rateYo({
		starWidth: '18px',
		normalFill: '#d6d6d6',
		ratedFill: '#ffcc00',
		readOnly: true,
		spacing: '12px',
	});

	$('.recent-product__item-star').rateYo({
		starWidth: '11px',
		normalFill: '#d6d6d6',
		ratedFill: '#ffcc00',
		readOnly: true,
	});

	$('.product-one__info-star').rateYo({
		starWidth: '18px',
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

	$('.product-one__slider-thumb').slick({
		asNavFor: '.product-one__slider-big',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		vertical: true,
		focusOnSelect: true,
		draggable: false,
	});

	$('.product-one__slider-big').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
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
