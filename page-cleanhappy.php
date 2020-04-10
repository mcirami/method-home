<?php
/**
 * Template Name: CleanHappy
 *
 * @package boiler
 */

get_header(); ?>

	<?php $hero_bg = get_field('hero_background_image'); ?>
	<?php $hero_text_color = get_field('hero_text_color'); ?>
	<section class="hero cleanhappy_hero <?php if(get_field('hero_text_placement') === 'left') { echo 'hero_text_left'; } else if(get_field('hero_text_placement') === 'right') { echo 'hero_text_right'; } ?>" style="background-image: url('<?php echo $hero_bg['url']; ?>'); min-height: <?php the_field('hero_height'); ?>px;">
		<div class="container" style="min-height: <?php the_field('hero_height'); ?>px;">
			<h1 style="color: <?php echo $hero_text_color; ?>;"><?php the_title(); ?></h1>
		</div>
	</section>
		
	<section class="cleanhappy_section">
		<div class="cleanhappy_header container">
			<?php the_field('header_text'); ?>
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
								<h3>#cleanhappy</h3>
								<h2><?php the_sub_field('video_title'); ?></h2>
							</div>
						</div>
						<div class="video_info_bottom">
							<?php the_sub_field('video_sub_text'); ?>
							<?php $link_page = get_sub_field('video_url'); ?>
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
		<article class="newsletter">
			<?php $newsletter_image = get_field('newsletter_image'); ?>
			<img src="<?php echo $newsletter_image['url']; ?>" alt="<?php echo $newsletter_image['alt']; ?>">
			<h3><?php the_field('newsletter_title'); ?></h3>
			<h2><?php the_field('newsletter_sub_title'); ?></h2>
			<div class="newsletter_signup">
				<?php echo do_shortcode('[sailthru_widget sailthru_list="mailing_list"]'); ?>
				<p><?php the_field('newsletter_sub_text'); ?></p>
			</div>
		</article>
		<article class="home_blog">
			<?php $home_id = 124; ?>
			<?php $blog_image = get_field('blog_image', $home_id); ?>
			<img src="<?php echo $blog_image['url']; ?>" alt="<?php echo $blog_image['alt']; ?>">
			<div class="blog_info">
				<?php $blog_color = get_field('blog_title_color', $home_id); ?>
				<h3>latest from our blog:</h3>
				<h2 class="header_color_<?php echo $blog_color; ?>"><?php the_field('blog_title', $home_id); ?></h2>
				<?php the_field('blog_text', $home_id); ?>
				<?php $blog_link = get_field('blog_link', $home_id); ?>
				<?php echo do_shortcode('[borderButton size="small" color="pink" align="left" link="'.$blog_link.'"]read more[/borderButton]'); ?>
			</div>
		</article>
		<article class="watch_more">
			<?php $header_color = get_sub_field('header_color'); ?>
			<?php $header_image = get_sub_field('header_image'); ?>
			<div class="header_copy">
				<h3 class="header_color_blue">more #cleanhappy on YouTube</h3>
			</div>
			<div class="watch_more_content">
				<?php if(have_rows('watch_more')) : ?>
					<?php while(have_rows('watch_more')) : the_row(); ?>
						<div class="watch_more_video">
							<a href="<?php the_sub_field('video_url'); ?>" target="_blank">
								<?php $video_image = get_sub_field('video_image'); ?>
								<img src="<?php echo $video_image['url']; ?>" alt="<?php echo $video_image['url']; ?>">
								<h3><?php the_sub_field('video_title'); ?></h3>
							</a>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>	
			</div>
		</article>
	</section>

<?php get_footer(); ?>
