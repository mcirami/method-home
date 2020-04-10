<?php
/**
 * Template Name: Find a Store
 *
 * @package boiler
 */

get_header(); ?>

	<div class="container find_store">
		<iframe src="http://destinilocators.com/method/site/" scrolling="no" frameborder="0" height="860" style="width:100%"></iframe>
	</div>
	
	<?php
	  	include_once( get_template_directory() . '/inc/browser.php' );
		$browser = new Browser();
		if ($browser->getPlatform() == 'iPhone' || $browser->getPlatform() == 'iPod' || $browser->getPlatform() == 'Android' || $browser->getPlatform() == 'BlackBerry'):
			header("Location: http://locator.methodhome.com");
		endif;
	?>

<?php get_footer(); ?>
