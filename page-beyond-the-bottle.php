<?php
/**
 * Template Name: Beyond the Bottle
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero beyond_hero <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<h1 style="color: <?php echo $hero_text_color; ?>; margin-top: 40px;"><?php the_title(); ?></h1>
		</div>
	</section>
		
	<section class="beyond_bottle_section">
	
		<div class="container">
			<h2 class="we_are_text"><?php the_field('we_are_text'); ?></h2>
		</div>
	
		<?php get_template_part('content', 'sections'); ?>
		
		<?php while(have_rows('sub_pages')) : the_row(); ?>
		
			<article class="sub_page">
				<div class="sub_page_content">
					<div class="featured_image <?php if(get_sub_field('image_location') === 'left') { echo 'image_left'; } else { echo 'image_right'; } ?>">
						<?php $featured_image = get_sub_field('page_image'); ?>
						<img src="<?php echo $featured_image['url']; ?>" alt="<?php echo $featured_image['alt']; ?>">
					</div>
					<div class="container">
						<div class="page_info">
							<?php 
								$header_color = get_sub_field('color');
								$page = get_sub_field('page'); 
								if($page) {
									$post = $page;
									setup_postdata($post);	
							?>
								<h2 class="header_color_<?php echo $header_color; ?> ;"><?php the_title(); ?></h2>
							<?php 
								} 
							?>
							<h3><?php the_sub_field('sub_headline'); ?></h3>
							<div class="beyond_section_copy"><?php the_sub_field('copy_text'); ?></div>
							<?php echo do_shortcode('[borderButton size="small" color="'.$header_color.'" align="left" link="'.get_permalink(get_the_ID()).'"]'.get_sub_field('button_text').'[/borderButton]'); ?>
						</div>
						<a class="beyond_link" href="<?php the_permalink(get_the_ID()); ?>">
							<div class="page_info_mobile">
								<div class="beyond_icon">
									<?php if(get_sub_field('mobile_icon')) : ?>
										<?php $beyondIcon = get_sub_field('mobile_icon'); ?>
										<img src="<?php echo $beyondIcon['url']; ?>" />
									<?php endif; ?>
								</div>
								<div class="beyond_copy_mobile">
									<h2><?php the_title(); ?></h2>
									<?php the_sub_field('mobile_copy'); ?>
								</div>
							</div>
						</a>
					</div>
				</div>
			</article>
			<?php wp_reset_postdata(); ?>
		<?php endwhile; ?>
		<a class="back_to_top" href="#">Back to Top</a>
	</section>

<?php get_footer(); ?>
