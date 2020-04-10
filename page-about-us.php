<?php
/**
 * Template Name: About Us
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero about_us_sub_hero <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<h1 style="color: <?php echo $hero_text_color; ?>;"><?php the_title(); ?></h1>
		</div>
	</section>

	<?php if(have_rows('sub_pages')) : ?>
		
		<section class="about_us_section">
	
			<?php while(have_rows('sub_pages')) : the_row(); ?>
			
				<article class="sub_page">
					<div class="container">
						<div class="featured_image">
							<?php $featured_image = get_sub_field('page_image'); ?>
							<img src="<?php echo $featured_image['url']; ?>" alt="<?php echo $featured_image['alt']; ?>">
						</div>
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
							<?php the_sub_field('copy_text'); ?>
							<?php echo do_shortcode('[borderButton size="small" color="'.$header_color.'" align="left" link="'.get_permalink(get_the_ID()).'"]'.get_sub_field('button_text').'[/borderButton]'); ?>
						</div>
					</div>
				</article>
				<?php wp_reset_postdata(); ?>
			<?php endwhile; ?>
			<div class="back_top_container">
				<a class="back_to_top" href="#">Back to Top</a>
			</div>
		</section>
		
	<?php endif; ?>

<?php get_footer(); ?>
