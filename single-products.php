<?php
/**
 * The Template for displaying all Products single posts.
 *
 * @package boiler
 */

get_header(); ?>

	
	<section class="products_wrap single_product">
		
		<article class="container">
		
			<?php get_template_part('content', 'product-breadcrumbs'); ?>
		
			<?php get_template_part('content', 'product-sidebar'); ?>

			<div class="product_section">
				<?php while ( have_posts() ) : the_post(); ?>
		
					<?php get_template_part( 'content', 'products' ); ?>
		
				<?php endwhile; // end of the loop. ?>
			</div>
			
		</article>

	</section>

<?php get_footer(); ?>