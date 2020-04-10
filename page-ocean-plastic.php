<?php
/**
 * Template Name: Ocean Plastic
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero beyond_hero <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<h3 style="color: <?php echo $hero_text_color; ?>;">it's the world's first bottle made with</h3>
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
		
	<section class="ocean_plastic">
		<div class="ocean_plastic_header container">
			<?php the_field('above_videos_text'); ?>
		</div>
		<?php while(have_rows('videos')) : the_row(); ?>
			<?php $color = get_sub_field('color'); ?>
			<article class="video_row video_row_<?php echo $color; ?>">
				<div class="video_backgrounds">
					<div class="background_top"></div>
					<div class="background_bottom"></div>
				</div>
				<div class="row_content">
					<div class="video_image">
						<?php $video_image = get_sub_field('placeholder_image'); ?>
						<img src="<?php echo $video_image['url']; ?>" alt="<?php echo $video_image['alt']; ?>">
						<div class="cleanhappy_overlay"></div>
						<div class="cleanhappy-video">
							<?php 
								$videoLink = get_sub_field('video_url');
								$videoLink = apply_filters('the_content', $videoLink);
							?>
							<?php echo $videoLink; ?>
						</div>
						<div class="cleanhappy_close_button">
							X
						</div>
						<img src="<?php echo bloginfo('template_url').'/images/video_play_button.png'; ?>" alt="play_button" class="cleanhappy_video_play_button">
						<div class="mobile_overlay overlay_<?php echo $color; ?>">
							<h2><?php the_sub_field('video_title'); ?></h2>
						</div>
					</div>
					<div class="video_info">
						<div class="video_info_top">
							<div class="video_info_text">
								<h3>ocean plastic</h3>
								<h2><?php the_sub_field('video_title'); ?></h2>
							</div>
						</div>
						<div class="video_info_bottom">
							<?php the_sub_field('video_sub_text'); ?>
							<?php if(get_sub_field('button_text')) { ?>
								<?php echo do_shortcode('[bgButtonNewWin size="small" color="'.$color.'" align="left" link="'.get_sub_field('video_url').'"]'.get_sub_field('button_text').'[/bgButtonNewWin]'); ?>
							<?php } ?>
							<div class="video_share">
								<p class="share_text">share this video!</p>
								<?php echo do_shortcode('[addtoany url="'.get_sub_field('video_url').'"]'); ?>
							</div>
						</div>
					</div>
				</div>
			</article>
			<?php wp_reset_postdata(); ?>
		<?php endwhile; ?>
		<div class="more_videos">
			<h2><a href="#">more videos</a></h2>
		</div>
		<article class="ocean_plastic_solutions">
			<div class="plastic_container">
				<?php if(have_rows('image_rows')) : ?>
					<?php while(have_rows('image_rows')) : the_row(); ?>
						<div class="ocean_plastic_solution">
							<?php $solution_image = get_sub_field('image'); ?>
							<img src="<?php echo $solution_image['url']; ?>" alt="<?php echo $solution_image['alt']; ?>">
							<div class="solution_text">
								<?php the_sub_field('text'); ?>
							</div>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>	
			</div>
		</article>
		<article class="ocean_plastic_facts">
			<div class="container">
				<h2><?php the_field('facts_header'); ?></h2>
				<?php if(have_rows('facts')) : ?>
					<?php while(have_rows('facts')) : the_row(); ?>
						<div class="ocean_plastic_fact">
							<?php $fact_image = get_sub_field('fact_image'); ?>
							<img src="<?php echo $fact_image['url']; ?>" alt="<?php echo $fact_image['alt']; ?>">
							<?php the_sub_field('fact_text'); ?>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>	
			</div>
		</article>
		<article class="sources">
			<div class="container">
				<?php the_field('sources'); ?>
			</div>
		</article>
		<article class="our_partners">
			<div class="container">
				<?php the_field('our_partners'); ?>
			</div>
		</article>
	</section>

<?php get_footer(); ?>
