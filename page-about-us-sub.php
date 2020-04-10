<?php
/**
 * Template Name: About Us Subpage
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero about_us_sub_hero <?php if(is_page('Press Room')) { echo 'press_hero'; } ?> <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<?php if(get_field('press_hero_text')) { ?>
				<div class="press_hero_text">
					<h1 style="color: <?php echo $hero_text_color; ?>;"><?php the_title(); ?></h1>
					<?php the_field('press_hero_text'); ?>
				</div>
			<?php } else { ?>
				<h1 style="color: <?php echo $hero_text_color; ?>;"><?php the_title(); ?></h1>
			<?php } ?>
		</div>
	</section>
	
	<section class="sub_page_nav">
		<?php 
			$args = array(
						'sort_order' => 'ASC',
						'sort_column' => 'menu_order',
						'child_of' => 20);
			
			$pages = get_pages($args);
		?>
		<ul>
			<li><a href="/about-us">About Us</a></li>
			<?php foreach($pages as $page) { ?>
				<li><a href="<?php echo get_page_link($page->ID); ?>" <?php if(is_page($page->post_title)) { echo 'class="current_page"'; } ?>><?php echo $page->post_title; ?></a></li>
			<?php } ?>
		</ul>
		
		<select id="mobile_sub_nav">
			<option id="<?php echo get_site_url(); ?>/about-us" <?php if(is_page('About Us')) { echo 'selected="selected"'; } ?>>About Us</option>
			<?php foreach($pages as $page) { ?>
				<option id="<?php echo get_site_url(); ?><?php echo get_page_link($page->ID); ?>" <?php if(is_page($page->post_title)) { echo 'selected="selected"'; } ?>><?php echo $page->post_title; ?></option>
			<?php } ?>
		</select>
	</section>
	
	<section class="about_us_sub <?php if(is_page('Press Room')) { echo 'press_room'; } ?>">
		<?php while ( have_posts() ) : the_post(); ?>
			
			<?php get_template_part( 'content', 'sections' ); ?>
	
			<?php get_template_part( 'content', 'accordions' ); ?>
			
			<div class="back_top_container">
				<a class="back_to_top" href="#">Back to Top</a>
			</div>
	
		<?php endwhile; // end of the loop. ?>
	</section>

<?php get_footer(); ?>
