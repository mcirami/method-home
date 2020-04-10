<?php 

get_header(); ?>

<section class="products_wrap">
	<div class="container">
		<?php get_template_part('content', 'product-breadcrumbs'); ?>
		
		<?php get_template_part('content', 'product-sidebar'); ?>
		
		<?php 
			$taxonomy = 'product-category';
			$args = array(
						'hide_empty' => false,
						'parent' => 0
					);
			$tax_terms = get_terms($taxonomy, $args);
			
			$i = 0;
			foreach($tax_terms as $term) {
				$category_order = get_field('menu_order', $term);
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
		?>
		<div class="product_section">
			<?php $header_bg_image = get_field('header_background_image', 'options'); ?>
			<div class="product_cat_header" style="background-image: url('<?php echo $header_bg_image['url']; ?>');">
				<?php 
					$header_color = get_field('header_color', 'options');
					$header_title = get_field('header_title', 'options');
					$header_sub_text = get_field('header_sub_text', 'options');
				?>
				<div class="header_copy header_copy_<?php echo $header_color; ?>">
					<h2><?php the_field('header_title', 'options'); ?></h2>
					<?php the_field('header_sub_text', 'options'); ?>
					<img src="<?php echo bloginfo('template_url'); ?>/images/logo-white.png">
				</div>
			</div>
			<?php $term_num = 0; ?>
			<?php foreach($tax_terms as $term) { ?>
				<?php 
					$promo_banners = get_field('promo_banners', $term);
					$banner_order = array();
					$insert_banner = array();
					$i = 0;
					foreach($promo_banners as $banner) {
						$order = $banner['placement_order'];
						$next_order = array('order' => $order, 'index' => $i);
						$banner_order[] = $next_order;
						$insert_banner[$order] = $banner;
					}
					asort($insert_banner);
					
					if(!function_exists('compare_order')) {
						function compare_order($a, $b) {
							if($a->order == $b->order) {
								return 0;
							}
							return ($a->order < $b->order) ? -1 : 1;
						}
					}
					if(count($banner_order) > 1) {
						usort($banner_order, 'compare_order');
					}
				?>
				<div class="product_grid">
					<h2 class="product_title"><a href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?></a></h2>
					
					<ul>	
					<?php $i = 0; ?>
					<?php $product_num = 1; ?>
					<?php $force_banner = false; ?>
					<?php 
						$args = array('post_type' => 'products', 'posts_per_page' => -1, 'product-category' => $term->slug);
						
						$query = new WP_Query($args);
					?>
					<?php while ($query->have_posts()) : $query->the_post(); ?>
						<?php if(count($banner_order) > 0) : ?>
							<?php if ($banner_order[0]['order'] <= ($i/3+1) && $i%3 === 1) : ?>
								<?php 
									$bannerID = $promo_banners[$banner_order[0]['index']]['promo_banner']->ID;
									$content = $promo_banners[$banner_order[0]['index']]['promo_banner']->post_content;
									$title = $promo_banners[$banner_order[0]['index']]['promo_banner']->post_title;
									$columns = get_field('columns', $bannerID);
								?>
								<?php $i++; ?>
								<a href="<?php the_field('promo_banner_link', $bannerID); ?>">
									<li class="tc_box tc_box_<?php echo $columns; ?> <?php if($columns === 'two') { echo 'grid_end'; } ?> <?php if(get_field('text_placement', $bannerID) === 'left') { echo 'promo_text_left'; } else if(get_field('text_placement', $bannerID) === 'right') { echo 'promo_text_right'; } ?>" style="background-image: url('<?php $background_image = get_field('background_image', $bannerID); echo $background_image['url']; ?>');" data-id="<?php echo $product_num; $product_num++; ?>" data-row_place="<?php echo $banner_order[0]['order']; ?>">
										<?php //echo $i; ?>
										<div class="callout_content_wrap">
											<div class="callout_content_text">
												<?php //if(get_field('button_link', $bannerID)) : ?>
													<?php $color = get_field('color', $bannerID); $button_text = get_field('button_text', $bannerID); $button_link = get_field('button_link', $bannerID); ?>
													<h2 class="header_color_<?php echo $color; ?>"><?php echo $title; ?></h2>
													<p><?php echo $content; ?></p>
													<?php echo do_shortcode('[solidButton size="small" color="'.$color.'" align="left" link="'.$button_link.'"]'.$button_text.'[/solidButton]'); ?>
												<?php //endif; ?>
											</div>
										</div>
									</li>
								</a>
								<?php unset($banner_order[0]); if($columns === 'two') { $i++; } ?>
							<?php endif; ?>	
						<?php endif; ?>			
							<?php $productScents = get_the_terms($post->ID, 'scent'); ?>
							<?php $productColors = get_the_terms($post->ID, 'color'); ?>	
							<li class="product <?php if($i%3===0) { echo 'grid_start'; } ?> <?php if($i%3===2) { echo 'grid_end'; } ?> <?php foreach ($productScents as $productScent){ echo $productScent->slug . ' '; } ?> <?php foreach ($productColors as $productColor){ echo $productColor->slug . ' '; } ?>" data-id="<?php echo $product_num; $product_num++; ?>">
								<figure>
									<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('medium'); ?></a>
									<figcaption>
										<form method="post" action="/shop/checkout" class="jcart">
											<div class="quantity_select">
												<input name="my-item-qty" id="my-item-qty" value="1" type="hidden">
												<div class="quantity_down">-</div>
												<p id="product_quantity">1</p>
												<div class="quantity_up">+</div>
											</div>
											<div class="add_to_cart">
												<button type="submit" id="my-add-button" class="big-button cart-state flood-btn" name="my-add-button">add to cart</button>
									        </div>
											<select id="my-item-id" name="my-item-id" style="display: none;">
								                <!--Quidsi:option value shall be Quidsi sku id -->
												<?php if(have_rows('skus')) : ?>
													<?php 
														$skus = get_field('skus');
														$sku_name = $skus[0]['sku_name'];
													?>
													<option id="<?php echo $sku_name; ?>" value="<?php echo $sku_name; ?>"></option>
												<?php endif; ?>	
											</select>
											<!--<a href="<?php the_permalink(); ?>">learn more</a>-->
										</form>
									</figcaption>
									<a href="<?php the_permalink(); ?>">
										<p class="product_name"><?php the_title(); ?></p>
										<p><?php the_field('fragrance_scent'); ?></p>
										<p class="product_price"><?php if(strpos(get_field('price'), '$') === false) { echo '$'; } ?><?php the_field('price'); ?></p>
									</a>
								</figure>
							</li>
							<?php $i++; ?>
					<?php endwhile; ?>
					<?php if(count($banner_order) > 0) : ?>
						<?php foreach($banner_order as $banner) { ?>
							<?php 
								$bannerID = $promo_banners[$banner['index']]['promo_banner']->ID;
								$content = $promo_banners[$banner['index']]['promo_banner']->post_content;
								$title = $promo_banners[$banner['index']]['promo_banner']->post_title;
								$columns = get_field('columns', $bannerID);
							?>
							<?php $i++; ?>
							<a href="<?php the_field('promo_banner_link', $bannerID); ?>">
								<li class="tc_box tc_box_<?php echo $columns; ?> grid_end <?php if(get_field('text_placement', $bannerID) === 'left') { echo 'promo_text_left'; } else if(get_field('text_placement', $bannerID) === 'right') { echo 'promo_text_right'; } ?>" style="background-image: url('<?php $background_image = get_field('background_image', $bannerID); echo $background_image['url']; ?>');" data-row_place="<?php echo $banner['order']; ?>">
									<?php //echo $i; ?>
									<div class="callout_content_wrap">
										<div class="callout_content_text">
											<?php if(get_field('button_link', $bannerID)) : ?>
												<?php $color = get_field('color', $bannerID); $button_text = get_field('button_text', $bannerID); $button_link = get_field('button_link', $bannerID); ?>
												<h2 class="header_color_<?php echo $color; ?>"><?php echo $title; ?></h2>
												<p><?php echo $content; ?></p>
												<?php echo do_shortcode('[solidButton size="small" color="'.$color.'" align="left" link="'.$button_link.'"]'.$button_text.'[/solidButton]'); ?>
											<?php endif; ?>
										</div>
									</div>
								</li>
							</a>
							<?php if($columns === 'two') { $i++; } ?>
						<?php } ?>	
					<?php endif; ?>	
					</ul>
				</div>
				<?php $term_num++; ?>
			<?php } ?>
		</div>
	</div>
</section>

<?php get_footer(); ?>