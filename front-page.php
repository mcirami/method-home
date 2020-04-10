<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package boiler
 */

get_header(); ?>

	<section class="home_section">
		<?php 
			$hero_image = get_field('home_hero_image'); 
			$hero_button_text = get_field('home_hero_button_text');
			$hero_link = get_field('home_hero_link');
			$hero_color = get_field('home_hero_button_color');
		?>
		<article class="home_hero home_hero_tab">
			<div class="container">
				<div class="home_hero_content">
					<img src="<?php echo $hero_image['url']; ?>" alt="<?php echo $hero_image['alt']; ?>">
					<div class="hero_text">
						<h1><?php the_field('hero_header'); ?></h1>
						<?php echo do_shortcode('[solidButton size="large" color="'.$hero_color.'" align="left" link="'.$hero_link.'"]'.$hero_button_text.'[/solidButton]'); ?>
					</div>
				</div>
				<div class="home_hero_images">
					<div id="home_hero_image_2" class="home_hero_image"></div>
					<div id="home_hero_image_4" class="home_hero_image"></div>
					<div id="home_hero_image_1" class="home_hero_image"></div>
					<div id="home_hero_image_3" class="home_hero_image"></div>
				</div>
			</div>
			<?php 
				$sign_up_left_color = get_field('sign_up_left_color'); 
				$sign_up_right_color = get_field('sign_up_right_color'); 
				$offer_image = get_field('offer_image');
				$offer_color = get_field('offer_color');
			?>
			<div class="sign_up_offer">
				<div class="sign_up_left" style="background-color: <?php echo $sign_up_left_color; ?>;">
					<div class="sign_up_text">
						<h3><?php the_field('sign_up_header'); ?></h3>
						<p><?php the_field('sign_up_text'); ?></p>
					</div>
				</div>
				<div class="sign_up_right" style="background-color: <?php echo $sign_up_right_color; ?>;">
					<div class="sign_up_newsletter">
						<!-- <?php echo do_shortcode('[sailthru_widget sailthru_list="mailing_list"]'); ?> -->
			<img alt="ePantry and method VIP logo" src='http://methodhome.com/wp-content/uploads/epantry-method.png' height="30px;" />
					<div class="form-group">
        <label for="email" style="display: none;">Email</label>
        <input type="text" id="email" name="email" value="" class="form-control" style="padding-left: 5px;" placeholder="ENTER E-MAIL ADDRESS">
      </div>
      <span class="input-group-btn">
        <button class="btn btn-reverse btn-go-vip">Learn More</button>
      </span>

					</div>
				</div>
			</div>
		</article>
		<article class="mobile_home_menu">
			<ul>
				<li>
					<?php $shop_icon = get_field('mobile_shop_nav_icon'); ?>
					<a href="/products"><img src="<?php echo $shop_icon['url']; ?>" alt="<?php echo $shop_icon['alt']; ?>"><p>shop</p></a><i class="fa fa-plus"></i>
					<div class="mobile_shop_menu_container">
						<ul class="mobile_shop_menu" style="background-color: <?php the_field('mobile_shop_nav_color'); ?> !important;">
							<?php if(have_rows('mobile_shop_nav')) : ?>
								<?php while(have_rows('mobile_shop_nav')) : the_row(); ?>
									<?php $term = get_sub_field('mobile_nav_page'); ?>
									<li><a href="<?php echo get_term_link($term); ?>"><p><?php echo $term->name; ?></p></a></li>	
								<?php endwhile; ?>
							<?php endif; ?>	
							<li><a href="/products"><p>view all</p></a></li>	
						</ul>
					</div>
				</li>
				<?php if(have_rows('mobile_nav_items')) : ?>
					<?php while(have_rows('mobile_nav_items')) : the_row(); ?>
						<?php $row_icon = get_sub_field('mobile_nav_icon'); ?>
						<?php $row_page = get_sub_field('mobile_nav_page'); ?>
						<?php $row_title = get_sub_field('mobile_nav_title'); ?>
						<li><a href="<?php the_sub_field('mobile_nav_link'); ?>"><img src="<?php echo $row_icon['url']; ?>" alt="<?php echo $row_icon['alt']; ?>"><p><?php echo $row_title; ?></p></a></li>		
					<?php endwhile; ?>
				<?php endif; ?>	
				<li>
					<?php $newsletter_icon = get_field('mobile_newsletter_nav_icon'); ?>
					<div class="mobile_sign_up_link"><img src="<?php echo $newsletter_icon['url']; ?>" alt="<?php echo $newsletter_icon['alt']; ?>"><?php the_field('mobile_newsletter_nav_title'); ?></div>
					<div class="mobile_sign_up newsletter" style="background-color: <?php the_field('mobile_newsletter_nav_color'); ?>;">
						<div class="newsletter_content">
							<h3><?php the_field('newsletter_title', 323); ?></h3>
							<h2><?php the_field('newsletter_sub_title', 323); ?></h2>
							<p><?php the_field('newsletter_sub_text', 323); ?></p>
							<div class="newsletter_signup">
								<?php echo do_shortcode('[sailthru_widget sailthru_list="mailing_list"]'); ?>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</article>
		<?php $product_text_placement = get_field('product_text_placement'); ?>
		<?php $product_image = get_field('product_image'); ?>
		<article class="product_highlight <?php if($product_text_placement === 'left') { echo 'product_text_left'; } else { echo 'product_text_right'; } ?>">
			<div class="container product_highlight_wrap">
				<div class="product_highlight_image">
					<img src="<?php echo $product_image['url']; ?>" alt="<?php echo $product_image['alt']; ?>"/>
				</div>
				<div class="product_highlight_info">
					<h3><?php the_field('collection_title'); ?></h3>
					<?php the_field('product_title'); ?>
					<?php the_field('product_copy'); ?>
					<?php $button_text = get_field('product_button_text'); ?>
					<?php $button_link = get_field('product_button_link'); ?>
					<?php $color = get_field('product_button_color'); ?>
					<?php if($button_text) : ?>
						<?php echo do_shortcode('[solidButton size="large" color="'.$color.'" align="left" link="'.$button_link.'"]'.$button_text.'[/solidButton]'); ?>
					<?php endif; ?>
				</div>
			</div>
			<div class="gray_bg_container"></div>
		</article>
		<article class="beyond_the_bottle_home">
			<?php $bottle_image = get_field('beyond_the_bottle_image'); ?>
			<div class="image_columns" style="background-image: url('<?php echo $bottle_image['url']; ?>'); height: <?php the_field('beyond_the_bottle_image_height'); ?>px;">
				<?php if(get_field('beyond_the_bottle_text')) { ?>
					<h3 class="header_color_<?php the_field('beyond_the_bottle_color'); ?>"><?php the_field('beyond_the_bottle_text'); ?></h3>
				<?php } ?>
			</div>
			<div class="three_column_section column_section">
				<div class="container">
					<div class="dotted_line"></div>
					<?php if(have_rows('beyond_bottle_columns')) : ?>
						<?php while(have_rows('beyond_bottle_columns')) : the_row(); ?>
							<div class="column">
								<?php $icon_image = get_sub_field('icon'); ?>
								<?php if($icon_image) { ?>
								<img src="<?php echo $icon_image['url']; ?>" alt="<?php echo $icon_image['alt']; ?>">
								<?php } ?>
								<div class="column_copy">
									<h3><?php the_sub_field('header_text'); ?></h3>
									<?php the_sub_field('copy_text'); ?>
								</div>
							</div>
						<?php endwhile; ?>
					<?php endif; ?>
					
				</div>
				<div class="container">
				<?php $button_link = get_field('beyond_bottle_button_link'); ?>
				<?php $button_text = get_field('beyond_bottle_button_text'); ?>
				<?php echo do_shortcode('[borderButton size="small" color="pink" align="left" link="'.$button_link.'"]'.$button_text.'[/borderButton]'); ?>
				</div>
			</div>
		</article>
		<?php $video_placeholder = get_field('video_placeholder'); ?>
		<article class="video_section" style="background-image: url(<?php echo $video_placeholder['url'] ;?>); min-height: <?php the_field('placeholder_height'); ?>px; background-size: cover; background-position: center;">
			<?php 
				$videoLink = get_field('video_link');
				$videoLink = apply_filters('the_content', $videoLink);
			?>
			<div class="overlay" style="min-height: <?php the_field('placeholder_height'); ?>px;"></div>
			<div class="video_text">
				<h2 class="header_color_<?php the_field('video_header_color'); ?>"><?php the_field('video_header'); ?></h2>
				<h3><?php the_field('video_sub_header'); ?></h3>
				<img src="<?php echo bloginfo('template_url').'/images/video_play_button.png'; ?>" alt="play_button" class="desktop_video_play_button">
			</div>
			<div class="homepage-video">
				<?php echo $videoLink; ?>
			</div>
			<div class="close_button">
				X
			</div>
			<div class="mobile_video_overlay overlay_blue">
				<img src="<?php echo bloginfo('template_url').'/images/mobile_play_button.png'; ?>" alt="play_button" class="video_play_button">
				<div class="mobile_video_info">
					<h2><?php the_field('video_header'); ?></h2>
					<h3><?php the_field('video_sub_header'); ?></h3>
				</div>
			</div>
			<div class="video_share">
				<p class="share_text">share this video!</p>
				<?php echo do_shortcode('[addtoany url="'.get_sub_field('video_url').'"]'); ?>
			</div>
		</article>
		<article class="connect_to_clean">
			<div class="container">
				<h3 class="header_color_<?php the_field('connect_to_clean_color'); ?>"><?php the_field('connect_to_clean_header'); ?></h3>
				<p><?php the_field('connect_to_clean_sub_header'); ?></p>
				<div class="social_media_container">
					<a class="twitter" title="Twitter" href="<?php the_field('twitter', 'option'); ?>" target="_blank">twitter</a>
					<a class="facebook" title="Facebook" href="<?php the_field('facebook', 'option'); ?>" target="_blank">facebook</a>
					<a class="instagram" title="Instagram" href="<?php the_field('instagram', 'option'); ?>" target="_blank">instagram</a>
					<a class="pintrest" title="Pinterest" href="<?php the_field('pinterest', 'option'); ?>" target="_blank">pinterest</a>
				</div>
			</div>
		</article>
		<article class="home_blog">
			<?php $blog_image = get_field('blog_image'); ?>
			<img src="<?php echo $blog_image['url']; ?>" alt="<?php echo $blog_image['alt']; ?>">
			<div class="blog_info">
				<?php $blog_color = get_field('blog_title_color'); ?>
				<h3>latest from our blog:</h3>
				<h2 class="header_color_<?php echo $blog_color; ?>"><?php the_field('blog_title'); ?></h2>
				<?php the_field('blog_text'); ?>
				<?php $blog_link = get_field('blog_link'); ?>
				<?php echo do_shortcode('[borderButton size="small" color="pink" align="left" link="'.$blog_link.'"]read more[/borderButton]'); ?>
			</div>
		</article>
		<article class="fun_fact">
			<?php 
				$fun_facts = get_field('fun_facts'); 
				$random_fact = $fun_facts[array_rand($fun_facts)];
			?>
			<div class="container">
				<?php $did_you_know_img = $random_fact['did_you_know_image']; ?>
				<img src="<?php echo $did_you_know_img['url']; ?>" alt="<?php echo $did_you_know_img['alt']; ?>">
				<div class="fun_fact_text">
					<h2 style="color:<?php echo $random_fact['fun_fact_header_color']; ?>"><?php echo $random_fact['fun_fact_header']; ?></h2>
					<div class="fact_copy">
						<?php echo $random_fact['fun_fact']; ?>
					</div>
				</div>
			</div>
		</article>
	</section>

<?php get_footer(); ?>