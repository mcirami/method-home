<?php
/**
 * Template Name: Beyond the Bottle Subpage
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero beyond_hero <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<h1 style="color: <?php echo $hero_text_color; ?>;"><?php the_title(); ?></h1>
		</div>
	</section>
	
	<section class="sub_page_nav">
		<?php 
			$args = array(
						'sort_order' => 'ASC',
						'sort_column' => 'menu_order',
						'child_of' => 136);
			
			$pages = get_pages($args);
		?>
		<ul>
			<li><a href="/beyond-the-bottle">Beyond the Bottle</a></li>
			<?php foreach($pages as $page) { ?>
				<li><a href="<?php echo get_page_link($page->ID); ?>" <?php if(is_page($page->post_title)) { echo 'class="current_page"'; } ?>><?php echo $page->post_title; ?></a></li>
			<?php } ?>
		</ul>
		
		<select id="mobile_sub_nav">
			<option id="<?php echo get_site_url(); ?>/beyond-the-bottle" <?php if(is_page('Beyond the Bottle')) { echo 'selected="selected"'; } ?>>Beyond the Bottle</option>
			<?php foreach($pages as $page) { ?>
				<option id="<?php echo get_site_url(); ?><?php echo get_page_link($page->ID); ?>" <?php if(is_page($page->post_title)) { echo 'selected="selected"'; } ?>><?php echo $page->post_title; ?></option>
			<?php } ?>
		</select>
	</section>
	
	<?php while ( have_posts() ) : the_post(); ?>
	
		<?php get_template_part( 'content', 'sections' ); ?>
	
		<?php get_template_part( 'content', 'accordions' ); ?>

	<?php endwhile; // end of the loop. ?>
	
	<div class="bottle_bottom_container container">
		<?php the_content(); ?>
	</div>
	
	<div class="back_top_container">
		<a class="back_to_top" href="#">Back to Top</a>
	</div>

<?php get_footer(); ?>
