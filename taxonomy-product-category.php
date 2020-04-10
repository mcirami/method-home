<?php 

get_header(); ?>

<section class="products_wrap">
	<div class="container">
		<?php get_template_part('content', 'product-breadcrumbs'); ?>
		
		<?php get_template_part('content', 'product-sidebar'); ?>
		
		<?php 
			$taxonomy = 'product-category';
			$term_id = $wp_query->get_queried_object_id(); 
			$term = get_term($term_id, $taxonomy); 
			$promo_banners = get_field('promo_banners', $term);
			$banner_order = array();
			$i = 0;
			if($promo_banners) {
				foreach($promo_banners as $banner) {
					$order = $banner['placement_order'];
					$next_order = array('order' => $order, 'index' => $i);
					$banner_order[] = $next_order;
				}
			}
			
			function compare($a, $b) {
				if($a->order == $b->order) {
					return 0;
				}
				return ($a->order < $b->order) ? -1 : 1;
			}
			usort($banner_order, "compare");
		?>
		
		<?php
			$parent = get_term($term->parent, $taxonomy);
			if($parent->term_id != '') {
				$featured_type = get_field('featured_type', $term);
				if($featured_type === 'collection') {
					$featured_collection = get_field('featured_collection', $term);
					if($featured_collection) {
						$f_collection = $featured_collection;
						$collection = get_term($f_collection, 'collection');
						
						
						if($parent->term_id == '') {
							// Is Top-Level Category
							$category_background = get_field('category_background', $collection);
							$category_product_image = get_field('category_product_image', $collection);
							$title_color = get_field('title_color', $collection);
							$sub_title = get_field('sub_title', $collection);
							$sub_title_color = get_field('sub_title_color', $collection);
							$text_copy = get_field('text_copy', $collection);
						} else {
							// Is Sub Category
							$category_product_image = get_field('sub_category_image', $collection);
							$highlight_tag = get_field('highlight_tag', $collection);
							$highlight_tag_color = get_field('highlight_tag_color', $collection);
							$title_color = get_field('highlight_tag_color', $collection);
							$sub_text_copy = get_field('sub_text_copy', $collection);
							$button_text = get_field('sub_button_text', $collection);
							$button_link = get_field('sub_button_link', $collection);
							$button_color = get_field('sub_button_color', $collection);
						}
					}
				} else {
					$featured_product = get_field('featured_product', $term);
				}
			}
			
			$mobile = false;
			$rowNum = 3;
			$bannerReqNum = 1;
			$endNum = 2;
			if( (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false) && !(strpos($_SERVER['HTTP_USER_AGENT'], 'iPad') !== false) ) {
				$mobile = true;
				$rowNum = 2;
				$bannerReqNum = 0;
				$endNum = 1;
			}
			
			$i = 0;
			$product_num = 1;
		?>
		<?php get_template_part('content', 'product-nav'); ?>
		<div class="product_section">	
			<?php if($parent->term_id == '') { ?>
				<?php $header_bg_image = get_field('header_background_image', $term); ?>
				<div class="product_cat_header" style="background-image: url('<?php echo $header_bg_image['url']; ?>');">
					<?php 
						$header_color = get_field('header_color', $term);
						$header_title = get_field('header_title', $term);
						$header_sub_text = get_field('header_sub_text', $term);
					?>
					<div class="header_copy header_copy_<?php echo $header_color; ?>">
						<h2><?php the_field('header_title', $term); ?></h2>
						<?php the_field('header_sub_text', $term); ?>
						<img src="<?php echo bloginfo('template_url'); ?>/images/logo-white.png">
					</div>
				</div>
				<div class="product_grid">	
					<ul>
			<?php } else { ?>
					<h2 class="category_name"><?php echo $term->name; ?></h2>
					<?php if($featured_collection) { ?>
						<?php if($parent->term_id == '') { ?>
							<div class="featured_collection" style="background-image: url('<?php echo $category_background['url']; ?>');">
								<div class="collection_image_wrap">
									<div class="collection_image">
										<img src="<?php echo $category_product_image['url']; ?>" alt="<?php echo $category_product_image['alt']; ?>">
									</div>
								</div>
								<div class="collection_text_wrap">
									<div class="collection_text">
										<h2 class="header_color_<?php echo $title_color; ?>"><?php echo $collection->name; ?></h2>
										<h3 class="header_color_<?php echo $sub_title_color; ?>"><?php echo $sub_title; ?></h3>
									</div>
									<div class="expanded_content">
										<p><?php echo $text_copy; ?></p>
									</div>
									<div class="expand">
										<i class="fa fa-plus icon_color_<?php echo $title_color; ?>"></i>
									</div>
								</div>
							</div>
							<div class="product_grid">	
								<ul>	
							<?php $i = 0; ?>
							<?php $product_num = 1; ?>
						<?php } else { ?>
						<div class="product_grid">	
							<ul>	
								<div class="sub_featured_collection" style="background-image: url('<?php echo $category_background['url']; ?>');" data-id="1">
									<div class="collection_content_wrap">
										<div class="collection_image">
											<img src="<?php echo $category_product_image['url']; ?>" alt="<?php echo $category_product_image['alt']; ?>">
										</div>
										<div class="collection_text">
											<h3 class="header_color_<?php echo $highlight_tag_color; ?>"><?php echo $highlight_tag; ?></h3>
											<h2><?php echo $collection->name; ?></h2>
											<p><?php echo $sub_text_copy; ?></p>
											<?php echo do_shortcode('[solidButton size="small" color="'.$button_color.'" align="left" link="'.$button_link.'"]'.$button_text.'[/solidButton]'); ?>
										</div>
									</div>
								</div>
							<?php $i = 1; ?>
							<?php $product_num = 2; ?>
						<?php } ?>
					<?php } else { ?>
						<?php if($featured_product) { ?>
							<?php
								$post = $featured_product;
								setup_postdata($post);
							?>
								<div class="product_grid">	
									<ul>	
										<div class="sub_featured_collection" data-id="1">
											<div class="collection_content_wrap">
												<div class="collection_image">
													<?php the_post_thumbnail('medium'); ?>
												</div>
												<div class="collection_text">
													<?php 
														$button_text = 'shop';
														$button_color = 'pink';
														$highlight_tag_color = 'pink';
													?>
													<h2><?php the_title(); ?></h2>
													<p><?php the_excerpt(); ?></p>
													<?php echo do_shortcode('[solidButton size="small" color="'.$button_color.'" align="left" link="'.get_the_permalink().'"]'.$button_text.'[/solidButton]'); ?>
												</div>
											</div>
										</div>
							<?php 
								wp_reset_postdata();
							?>
							<?php $i = 1; ?>
							<?php $product_num = 2; ?>
						<?php } else { ?>
							<div class="product_grid">	
								<ul>
							<?php $i = 0; ?>
							<?php $product_num = 1; ?>	
						<?php } ?>
					<?php } ?>
			<?php } ?>
					<?php $force_banner = false; ?>
					<?php if($parent->term_id == '' && $term->slug != 'new-items') { ?>
						<?php 
							if($term->term_id === 145) {
								$args = array('post_type' => 'products', 'product-category' => $term->slug, 'posts_per_page' => -1, 'tax_query' => array(array('taxonomy' => 'hero','field' => 'slug','terms' => 'hero',)));
							} else {
								$args = array('post_type' => 'products', 'product-category' => $term->slug, 'posts_per_page' => -1, 'tax_query' => array('relation' => 'AND', array('taxonomy' => 'hero','field' => 'slug','terms' => 'hero',), array('taxonomy' => 'product-category', 'field' => 'id', 'terms' => 145, 'operator' => 'NOT IN',),));
							}

							$query = new WP_Query($args);
						?>
						
					<?php } else { ?>
						<?php 
							$args = array('post_type' => 'products', 'product-category' => $term->slug, 'posts_per_page' => -1);
							
							$query = new WP_Query($args);
						?>
					<?php } ?>
					<?php while ($query->have_posts()) : $query->the_post(); ?>
						<?php if(count($banner_order) > 0) : ?>
							<?php if ($banner_order[0]['order'] <= ($i/$rowNum+1) && $i%$rowNum === $bannerReqNum) : ?>
								<?php 
									$bannerID = $promo_banners[$banner_order[0]['index']]['promo_banner']->ID;
									$content = $promo_banners[$banner_order[0]['index']]['promo_banner']->post_content;
									$title = $promo_banners[$banner_order[0]['index']]['promo_banner']->post_title;
									$columns = get_field('columns', $bannerID);
								?>
								<?php $i++; ?>								
								<li class="tc_box tc_box_<?php echo $columns; ?> <?php if($columns === 'two' || $mobile) { echo 'grid_end'; } ?> <?php if(get_field('text_placement', $bannerID) === 'left') { echo 'promo_text_left'; } else if(get_field('text_placement', $bannerID) === 'right') { echo 'promo_text_right'; } ?>" style="background-image: url('<?php $background_image = get_field('background_image', $bannerID); echo $background_image['url']; ?>');" data-id="<?php echo $product_num; $product_num++; ?>" data-row_place="<?php echo $banner_order[0]['order']; ?>">
									<a href="<?php the_field('promo_banner_link', $bannerID); ?>">
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
									</a>
								</li>
								<?php unset($banner_order[0]); if($columns === 'two') { $i++; } ?>
							<?php endif; ?>	
						<?php endif; ?>			
							<?php $productScents = get_the_terms($post->ID, 'scent'); ?>
							<?php $productColors = get_the_terms($post->ID, 'color'); ?>	
							<li class="product <?php if($parent->term_id != '' || $featured_product) { if($i%3 == 2 && $i > 4) { echo 'grid_start'; } } else { if($i%$rowNum===0) { echo 'grid_start'; } } ?> <?php if($parent->term_id != '' || $featured_product) { if($i == 2 || $i == 4 || $i%3 == 1 && $i != 1 && $i != 3) { echo 'grid_end'; } } else { if($i%$rowNum===$endNum) { echo 'grid_end'; } } ?> <?php if($productScents) { foreach ($productScents as $productScent){ echo $productScent->slug . ' '; } } ?> <?php if($productColors) { foreach ($productColors as $productColor){ echo $productColor->slug . ' '; } } ?>" data-id="<?php echo $product_num; $product_num++; ?>">
								<figure>
									<?php if($parent->term_id == '' && $term->slug != 'new-items') { ?>
										<?php 
											$parent_cat = get_field('product_category_display');
											
											$has_cat = false;
											if($parent_cat) {
												$cat_link = get_term_link($parent_cat, 'product-category');
												$has_cat = true;
											} else {
												$product_cats = get_the_terms($post->ID, 'product-category'); 
												$parent_cat = $term;
												if($product_cats) {
													foreach($product_cats as $product_cat) {
														if($product_cat->name != $term->name && $parent_cat->name === $term->name) {
															$parent_cat = $product_cat;
														}
													}
												}
												$cat_link = get_term_link($parent_cat, 'product-category');
											}
										?>
										<a href="<?php echo $cat_link; ?>"><?php the_post_thumbnail('medium'); ?></a>
										<a href="<?php echo $cat_link; ?>">
											<p class="product_name"><?php the_field('product_category_display_name'); ?></p>
											<p>multiple fragrances</p>
										</a>
									<?php } else { ?>
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
									<?php } ?>
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
							<li class="tc_box tc_box_<?php echo $columns; ?> grid_end <?php if(get_field('text_placement', $bannerID) === 'left') { echo 'promo_text_left'; } else if(get_field('text_placement', $bannerID) === 'right') { echo 'promo_text_right'; } ?>" style="background-image: url('<?php $background_image = get_field('background_image', $bannerID); echo $background_image['url']; ?>');" data-row_place="<?php echo $banner['order']; ?>">
								<a href="<?php the_field('promo_banner_link', $bannerID); ?>">
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
								</a>
							</li>
							<?php if($columns === 'two') { $i++; } ?>
						<?php } ?>	
					<?php endif; ?>	
				</ul>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>