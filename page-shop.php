<?php
/**
 * Template Name: Shop
 *
 * @package boiler
 */

get_header(); ?>
		
	<section class="shop_home">
	
		<div class="container">
			<h2><?php the_field('shop_home_header'); ?></h2>
			
			<?php 
				$taxonomy = 'product-category';
				$args = array(
							'hide_empty' => false,
							'parent' => 0,
							'exclude' => array('27','145', '155'),
							'number' => 6,
						);
				$tax_terms = get_terms($taxonomy, $args);
				
				$i = 0;
				foreach($tax_terms as $term) {
					$category_order = get_field('shop_home_order', $term);
					$tax_terms[$i]->category_order = $category_order;
					$i++;
				}
				
				function compare($a, $b) {
					if($a->category_order == $b->category_order) {
						return 0;
					}
					return ($a->category_order < $b->category_order) ? -1 : 1;
				}
				usort($tax_terms, "compare");
				$i = 0;
			?>
			<ul class="product_categories">
				<?php foreach($tax_terms as $term) : ?>
					<?php if($i < 5) { ?>
						<?php $category_image = get_field('category_image', $term); ?>
						<?php $category_color = get_field('category_color', $term); ?>
						
						<li>
							<?php if($category_image) : ?>
								<img src="<?php echo $category_image['url']; ?>" alt="<?php echo $category_image['url']; ?>">
							<?php endif; ?>
							<?php if($term->slug === 'air-care') : ?>
								<?php echo do_shortcode('[solidButton size="small" color="'.$category_color.'" align="center" link="/product-category/air-refresher"]'.'air care'.'[/solidButton]'); ?>
							<?php else : ?>
								<?php echo do_shortcode('[solidButton size="small" color="'.$category_color.'" align="center" link="'.get_term_link($term, $taxonomy).'"]'.$term->name.'[/solidButton]'); ?>
							<?php endif; ?>
						</li>
					<?php } ?>
					<?php $i++; ?>
				<?php endforeach; ?>
					<li>
						<img src="<?php echo bloginfo('template_url'); ?>/images/refill_container.jpg" />
						<?php echo do_shortcode('[solidButton size="small" color="gray" align="center" link="/refills"]'.refills.'[/solidButton]'); ?>
					</li>
			</ul>
		</div>

	</section>

<?php get_footer(); ?>
