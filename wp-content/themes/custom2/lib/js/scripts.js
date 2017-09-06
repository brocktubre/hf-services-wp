
jQuery(document).ready(function($){
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
					scrollTop: target.offset().top - 25
				}, 1000);
			}

			$('#navbar-main > ul > li').removeClass('active');
			$(elm).parent('li').addClass('active');
		}

		var images = ['banner_img6.jpg','banner_img5.jpg'];
		$('.parallax-2').css({'background': 'url(./wp-content/themes/custom/lib/img/' + images[Math.floor(Math.random() * images.length)]});
		$('.parallax-2').css({'height': '760px'});
		/* Create the parallax scrolling effect */
		$('.parallax').css({'background-attachment': 'fixed'});
		$('.parallax').css({'background-position': 'center'});
		$('.parallax').css({'background-repeat': 'no-repeat'});
		$('.parallax').css({'background-size': 'cover'});
});