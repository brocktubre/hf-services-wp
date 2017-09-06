
jQuery(document).ready(function($){
	
	
	$('.multiple-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>"
	});

	var setResize = function() { 
		var width = $(window).width();
		// Large Devices, Wide Screens
		if(width >=1200){
			desktopFunctions();

		// }else if(width < 1200 && width >= 992){
		// 	desktopFunctions();
		// 	$('.navbar-nav li').css('padding-right', '75px');
		// 	$('.add-padding-25').css('padding-top', '25px');
		// 	$('.add-margin-25').css('margin-top', '25px');

	    // }else if(width < 992 && width >= 768){
	    // 	desktopFunctions();
	    // 	$('#social-icons-top').css('top', '-25px');
	    // 	$('.navbar-nav li').css('padding-right', '25px');
	    // 	$('.add-padding-25').css('padding-top', '25px');
		// 	$('.add-margin-25').css('margin-top', '25px');


	    }else if(width < 768 && width >= 480){
	    	mobileFunctions();

	    }else if(width < 480){
	    	mobileFunctions();

	    }
	}

	$(window).resize(setResize);
    setResize(); // This will simulate a resize to trigger the initial run.

    function desktopFunctions(){
		// DESKTOP //
		$(window).scrollTop(0);
		$('#social-icons-top').css('top', '-15px');
		$('#social-icons-top').show();
		$('.navbar-fixed-top').css('top', '45px');
		var offset = $(".navbar").offset().top;
		
		$(window).scroll(function () {
			if ($(window).scrollTop() >= offset) {
			  $('.navbar-fixed-top').css('top', '0px');
			}
			else{
				$('.navbar-fixed-top').css('top', offset - $(window).scrollTop());
			}
		});

		$('#navbar-main').addClass('pull-right');

	}

	function mobileFunctions(){
		// MOBILE //
		$('#social-icons-top').show();
		$('#social-icons-top').css('top', '-25px');
		$('#social-icons-bottom, .brown-logo').hide();
		$('.navbar-fixed-top').css('top', '0px');
		$('.add-padding-25').css('padding-top', '25px');
		$('.add-margin-25').css('margin-top', '25px');
		$('.navbar.center .navbar-inner').css('text-align', 'left');
		$('#navbar-main').removeClass('pull-right');

		
	}

	$('.home-nav').on('click', function(event) {
		jumpToSection(this);
	});

	$('.services-nav').on('click', function(event) {
		jumpToSection(this);
	});
	$('.contact-nav').on('click', function(event) {
		jumpToSection(this);
	});
	$('.aboutus-nav').on('click', function(event) {
		jumpToSection(this);
	});

	function jumpToSection(elm){
		var target = $(elm.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 150
			}, 1000);
		}

		$('#navbar-main > ul > li').removeClass('active');
		$(elm).parent('li').addClass('active');
	}

	// function myMap() {
	// 	var mapOptions = {
	// 		center: new google.maps.LatLng(51.5, -0.12),
	// 		zoom: 10,
	// 		mapTypeId: google.maps.MapTypeId.HYBRID
	// 	}
	// 	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	// }

	

});


