<?php
/**
 * Template Name: Laundry 4x
 *
 * @package boiler
 */

get_header(); ?>
	
	
	<?php while ( have_posts() ) : the_post(); ?>
	
		<?php get_template_part( 'content', 'sections-laundry-4x' ); ?>

	<?php endwhile; // end of the loop. ?>
	
	<div class="bottle_bottom_container container">
		<?php the_content(); ?>
	</div>
	

<?php get_footer(); ?>
