
jQuery(document).ready(function($){

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
		$('#social-icons-top').css('top', '-25px');
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

		
	}

});
