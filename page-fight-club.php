<?php
/**
 * Template Name: Fight Club Landing
 *
 * @package boiler
 */

get_header(); ?>

	<style>
		/* Prevents slides from flashing */
		#slides {
			display:none;
		}
		
		#slides_1 {
			display:none;
		}
	</style>

	<section class="fight_club">
		<div class="lp_hero">
			<div class="container">
				<?php 
					$hero_image = get_field('lp_hero_image'); 
					$hero_button_text = get_field('lp_hero_button_text');
					$hero_link = get_field('lp_hero_link');
				?>
				<div class="hero_img">
					<img src="<?php echo $hero_image['url']; ?>" alt="<?php echo $hero_image['alt']; ?>">
				</div>
				<div class="hero_text">
					<h1><?php the_field('lp_hero_header'); ?></h1>
					<p><?php the_field('lp_hero_copy'); ?></p>
					<?php echo do_shortcode('[solidButton size="large" color="pink" align="left" link="'.$hero_link.'"]'.$hero_button_text.'[/solidButton]'); ?>
				</div>
			</div> <!-- container -->
		</div> <!-- lp hero -->
		
		<div class="lp_slider">
			<div id="slides">
		        <?php if (have_rows('slides')) : ?>
		        	<?php while (have_rows('slides')) : the_row(); ?>
		        		<?php $slide_img = get_sub_field('slide_img'); ?>
		        		<?php $mobile_slide_img = get_sub_field('mobile_slide_img'); ?>
							<img class="mobile_img" src="<?php echo $mobile_slide_img['url']; ?>" />
							<img class="desktop_img" src="<?php echo $slide_img['url']; ?>" alt="<?php echo $slide_img['alt']; ?>" />
		        	<?php endwhile; ?>
		        <?php endif; ?>
			</div>
		</div> <!-- lp slider -->
		
		<div class="lp_form">
			<div class="container">
				<div class="left">
					<?php 
						$contest_img = get_field('contest_img');	
					?>
					<p><?php the_field('contest_text'); ?></p>
				</div>
				<div class="right">
					<img src="<?php echo $contest_img['url']; ?>" alt="<?php echo $contest_img['alt']; ?>">
					<div class="form_wrap">
						<?php echo do_shortcode('[sailthru_widget sailthru_list="mailing_list"]'); ?>
					</div>
				</div>
			</div>
		</div> <!-- lp form -->
		<?php  ?>
		<div class="lp_video">
			<?php $video_placeholder = get_field('video_placeholder'); ?>
			<?php $video_url = get_field('video_url'); ?>
			<img id="lp_video" src="<?php echo $video_placeholder['url']; ?>" alt="<?php echo $video_placeholder['alt']; ?>" data-video="<?php echo $video_url; ?>">
			
		</div> <!-- lp video -->
		
		<div class="lp_slider_1">
			<div id="slides_1">
		        <?php if (have_rows('slides_1')) : ?>
		        	<?php while (have_rows('slides_1')) : the_row(); ?>
		        		<?php $slide_img = get_sub_field('slide_img'); ?>
		        		<?php $mobile_slide_img = get_sub_field('mobile_slide_img'); ?>
							<img class="desktop_img" src="<?php echo $slide_img['url']; ?>" alt="<?php echo $slide_img['alt']; ?>">
							<?php if ($mobile_slide_img) : ?>
								<img class="mobile_img" src="<?php echo $mobile_slide_img['url']; ?>" alt="<?php echo $mobile_slide_img['alt']; ?>">
							<?php endif; ?>
		        	<?php endwhile; ?>
		        <?php endif; ?>
			</div>
		</div> <!-- lp slider 1 -->
		
		<div class="lp_testimonials">
			<?php 
				$testimonials = get_field('testimonials'); 
				$index = array_rand($testimonials);
				$random_test = $testimonials[$index];
			?>
			<div class="container">
				<div class="testimonial">
					<div class="testimonial_person">
						<h2>- <?php echo $random_test['person']; ?></h2>
					</div>
					<div class="testimonial_quote">
						<h2>"<?php echo $random_test['quote']; ?>"</h2>
					</div>
				</div>
			</div>
		</div> <!-- lp testimonials -->
		
		<div class="lp_stores">
			
			<?php 
				$store_img_1 = get_field('store_img_1');
				$store_img_2 = get_field('store_img_2');	
			?>
			<div class="container">
				<div class="column">
					<p><?php the_field('lp_stores_text'); ?></p>
				</div>
				<div class="column">
					<a href="<?php the_field('store_link_1'); ?>" target="_blank">
						<img src="<?php echo $store_img_1['url']; ?>" alt="<?php echo $store_img_1['alt']; ?>">
					</a>
				</div>
				<div class="column">
					<a href="<?php the_field('store_link_2'); ?>" target="_blank">
						<img src="<?php echo $store_img_2['url']; ?>" alt="<?php echo $store_img_2['alt']; ?>">
					</a>
				</div>
			</div>
		</div> <!-- lp stores -->
		
	</section>
	
	<script src="<?php bloginfo('template_url') ?>/js/vendor/jquery.slides.min.js"></script>
	<script>
		jQuery(document).ready(function($){

			if($(window).width() <= 600) {
		
				$("#slides").slidesjs({
					width: 600,
					height: 625,
					navigation: false,
					pagination: false,
					play: {
						active: false,
						auto: true,
						interval: 4000,
					}
				});
				
				$("#slides_1").slidesjs({
					width: 600,
					height: 350,
					navigation: false,
					pagination: false,
					play: {
						active: false,
						auto: true,
						interval: 5500,
					}
				});
			} else {
				$("#slides").slidesjs({
					width: 1280,
					height: 400,
					navigation: false,
					pagination: false,
					play: {
						active: false,
						auto: true,
						interval: 4000,
					}
				});
				
				$("#slides_1").slidesjs({
					width: 1280,
					height: 400,
					navigation: false,
					pagination: false,
					play: {
						active: false,
						auto: true,
						interval: 5500,
					}
				});
			}
			
			$('#lp_video').click(function(){
				var video = '<iframe id="iframe" width="1280" height="720" src="'+ $(this).attr('data-video') +'" frameborder="0" allowfullscreen></iframe>';
				$(this).replaceWith(video);
				$('.lp_video').css('padding-bottom', '56.25%');
			
			});
			
/*
			$('#thevideo').click(function){
				$('iframe').src.replace('autoplay=0','autoplay=1');
			}
*/
		});
	</script>

<?php get_footer(); ?>