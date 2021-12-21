$(document).ready(function(){
	$(".form .mask").inputmask("+7(999)-999-99-99");


	$('.fancybox-form').on('click', function(evt){
		evt.preventDefault();
		var o = $(this);
		var url = $(this).data('src');
		var data = $(this).data();
		console.log(data)

		$.fancybox.open({
	        src: url,
			type: 'ajax',
			toolbar: false,
			smallBtn: false,
			ajax: {
				settings: {
					type: "POST",
					data: {
						pathname: document.location.href,
						data: data,
					}
				}
			},
			
		})
	})
	$('body').on('click', '.fancybox-form-close', function(e)
	{
		$.fancybox.close();
	});
})
$(window).on('load',function () {
	$('.main-projects__slider-wr').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
	});


	$('.reviews-list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});



	$('.company-list').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1300,
		      settings: {
		        slidesToShow: 6,
		      }
		    },
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2.5,
		      }
		    }
		  ]
	});

	let blocked = false;
	let blockTimeout = null;
	let prevDeltaY = 0;

	$('.company-list').on('mousewheel DOMMouseScroll wheel', (function(e) {
	    let deltaY = e.originalEvent.deltaY;
	    e.preventDefault();
	    e.stopPropagation();

	    clearTimeout(blockTimeout);
	    blockTimeout = setTimeout(function(){
	        blocked = false;
	    }, 50);

	    
	    if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
	        blocked = true;
	        prevDeltaY = deltaY;

	        if (deltaY > 0) {
	            $(this).slick('slickNext');
	        } else {
	            $(this).slick('slickPrev');
	        }
	    }
	}));



	$('.main-sec__banner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		pauseOnHover:false,
		pauseOnFocus:false,
		arrows: false,

	})
	$('.main-sec__banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".main-sec__fone-item").removeClass("active");
		$(".main-sec__fone-item[data-ind='"+nextSlide+"']").addClass("active")
	});

	setOptionSlider();
	//setProjectSlider();

	
})

$(window).resize(function(){
	setOptionSlider();
	//setProjectSlider();
})

var isOptionSlider = false;


function setOptionSlider() {
	if (window.innerWidth >1250 ) {
		if (isOptionSlider) {
			$('.main-options__list-wr').slick('unslick');
	 		isOptionSlider = false
	 	}
	} else {
		if (!isOptionSlider) {
	 		$('.main-options__list-wr').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				dots: false,
				pauseOnHover:false,
				pauseOnFocus:false,
			})
			isOptionSlider = true;
	 	}
	}
 	
}

/*
var isProjectSlider = false;
var projectSlider = false;

function setProjectSlider() {
	if (window.innerWidth >1100 ) {

		if (isProjectSlider) {
			console.log(isProjectSlider)
			console.log('destroy')
			projectSlider.slick('unslick');
			projectSlider = false;
	 		isProjectSlider = false
	 	}
	} else {
		if (!isProjectSlider) {
	 		projectSlider = $('.main-projects__list').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				pauseOnHover:false,
				pauseOnFocus:false,
				responsive: [
				    {
				      breakpoint: 1100,
				      settings: {
				        slidesToShow: 3,
				      }
				    },
				    {
				      breakpoint: 767,
				      settings: {
				        slidesToShow: 2,
				      }
				    },
				    {
				      breakpoint: 350,
				      settings: {
				        slidesToShow: 1,
				      }
				    }
				]

			})
			isProjectSlider = true;
	 	}
	}
 	
}
*/






