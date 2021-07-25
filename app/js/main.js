$(function () {
	$('.top-slider__inner').slick({
		dots:true,
		fade: true,
		autoplay: 3000,
		slidesToShow: 1,
		arrows: false
	});

	// var mixer = mixitup('.design__inner');
	// var mixer = mixitup('.products__inner');

	// var container1 = document.querySelector('[data-ref="products]');
	// var container2 = document.querySelector('[data-ref="design]');

	// var mixer1 = mixitup(container1);
	// var mixer2 = mixitup(container2);

	$('.design__inner').mixitup({
		selectors: {
			filter: '.design__filter'
		}
	});

	$('.products__inner').mixitup({
		selectors: {
			filter: '.products__filter'
		}
	});

	// var mixer1 = mixitup("$('[data-ref="products"]')")
});
