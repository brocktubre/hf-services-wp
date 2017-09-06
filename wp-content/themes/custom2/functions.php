<?php 
	    /**
		 * Enqueue scripts
		 *
		 * @param string $handle Script name
		 * @param string $src Script url
		 * @param array $deps (optional) Array of script names on which this script depends
		 * @param string|bool $ver (optional) Script version (used for cache busting), set to null to disable
		 * @param bool $in_footer (optional) Whether to enqueue the script before </head> or before </body>
		 */
		function include_boilerplate() {
			wp_enqueue_style( 'bootswatch', get_template_directory_uri() . '/' . 'lib/bower_components/bootswatch/paper/bootstrap.css', array(), '1.0', 'all');
			wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/' .'lib/bower_components/font-awesome/css/font-awesome.css', array(), '1.0', 'all');
			wp_enqueue_style( 'custom-style', get_template_directory_uri() . '/' .'lib/css/style.css', array(), '1.0', 'all');
			//wp_enqueue_style( 'slider', 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css');
			//wp_enqueue_style( 'slider-theme', 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css');

			wp_register_script( 'jquery', get_template_directory_uri() . '/' .'lib/bower_components/jquery/dist/jquery.js');
			wp_register_script( 'bootstrap-js', get_template_directory_uri() . '/' .'lib/bower_components/bootstrap/dist/js/bootstrap.js');
			wp_register_script( 'custom-scripts', get_template_directory_uri() . '/' .'lib/js/scripts.js');

			wp_enqueue_script('jquery');
			wp_enqueue_script('bootstrap-js');
			wp_enqueue_script('custom-scripts');
			//wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD39eLtcld-0FU4sTK3VCmMberJmmx4j9Y&sensor=false');
			//wp_enqueue_script('slider', 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js');


		}

		function write_log ( $log )  {
	        if ( true === WP_DEBUG ) {
	            if ( is_array( $log ) || is_object( $log ) ) {
	                error_log( print_r( $log, true ) );
	            } else {
	                error_log( $log );
	            }
	        }
    	}
	
		add_action( 'wp_enqueue_scripts', 'include_boilerplate' );
		add_theme_support( 'post-thumbnails' ); 

?>
