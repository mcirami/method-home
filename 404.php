<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package boiler
 */

get_header(); ?>

	<section class="container">
		<div class="content">

<img src="http://methodhome.com/wp-content/uploads/404-unicorn.png" />

			<article id="post-0" class="post not-found">
				<header class="entry-header">
					<h1>we're sorry.</h1>
				</header>

				<div class="entry-content">
					<p>we can't find what you're looking for. but we did find this rainbow unicorn, which is almost as good. please contact us at <a href="mailto:info@methodhome.com?subject=broken link on method home">info@methodhome.com</a> to let us know if you were unable to find the product you were looking for.</p>
<br />
					<p><?php get_search_form(); ?></p>

					
					<?php if ( boiler_categorized_blog() ) : // Only show the widget if site has multiple categories. ?>
					<div class="widget widget_categories">
						<h2 class="widgettitle"><?php _e( 'Most Used Categories', 'boiler' ); ?></h2>
						<ul>
						<?php
							wp_list_categories( array(
								'orderby'    => 'count',
								'order'      => 'DESC',
								'show_count' => 1,
								'title_li'   => '',
								'number'     => 10,
							) );
						?>
						</ul>
					</div>
					<?php endif; ?>

					

				</div>
			</article>

		</div>
	</section>

<?php get_footer(); ?>