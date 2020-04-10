<?php
/**
 * The Template for displaying all single posts.
 *
 * @package boiler
 */

get_header(); ?>

	
	<section class="container">
		
		<article class="single">

			<?php while ( have_posts() ) : the_post(); ?>
	
				<?php get_template_part( 'content', 'single' ); ?>
	
			<?php endwhile; // end of the loop. ?>
		
		</article>

	</section>

<?php get_footer(); ?>