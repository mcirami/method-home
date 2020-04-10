<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package boiler
 */

get_header(); ?>

	<section class="search_results">
		<article class="search_results_pg">
		
			<?php 
				$postTypes = array();
				$count = 0;
				$previousPostType;
				$total_posts = 0;
				if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<?php if ($post->post_type !== $previousPostType) {
						$count = 0;
					} ?>
					<?php $postTypes[$post->post_type][$count] = array(); ?>
					<?php array_push($postTypes[$post->post_type][$count], $post); $count++; $total_posts++; ?>
					
					<?php $previousPostType = $post->post_type; ?>
				<?php endwhile; ?>
			<?php endif; ?>
			
			<input name="products_number" id="products_number" value="<?php if($postTypes['products']) { echo count($postTypes['products']); } else { echo '0'; } ?>" type="hidden">
			<input name="articles_number" id="articles_number" value="<?php if($postTypes['products']) { echo $total_posts - count($postTypes['products']); } else { echo $total_posts; } ?>" type="hidden">
			
			<div class="search_box_container">
				<h1>search</h1>
					<p class="search_pagnation"><span class="search_count"><?php if($postTypes['products']) { echo count($postTypes['products']); } ?></span> of <?php echo $total_posts; ?> results</p>
					<?php $search_text = "Search"; ?> 
					<form method="get" id="search" action="<?php bloginfo('url'); ?>/"> 
						<input type="text" value=""  name="s" id="s" onblur="if (this.value == '') {this.value = '<?php echo $search_text; ?>';}" onfocus="if (this.value == '<?php echo $search_text; ?>') {this.value = '';}" /><span class="search_icon"><i class="fa fa-search 2x"></i></span>  
						<input type="hidden" id="searchsubmit" /> 
					</form>										
			</div>
	
				<h2>search results for <?php echo get_search_query(); ?></h2>
				    <div id="responsiveTabsDemo">
				        <ul >
				            <li class="products_tab"><a href="#tab-1">products</a></li>
				            <li class="articles_tab"><a href="#tab-2">articles</a></li>
				        </ul>
				        <?php $numTypes = 1; ?>
				        <div id="tab-<?php echo $numTypes; $numTypes++; ?>">
					        <?php if($postTypes['products']) { ?>
					        	<?php $type = $postTypes['products']; $key = 'products'; ?>
						        <ul>
									<?php foreach ($type as $results) : ?>
										<?php foreach ($results as $result) : ?>			
																
											<li class="search_img">
												
												<figure>
													<a href="<?php echo get_post_permalink($result->ID); ?>"><?php echo get_the_post_thumbnail($result->ID, 'medium'); ?></a>
													<!--
	<figcaption>
														<form method="post" action="/shop/checkout" class="jcart">
															<div class="quantity_select">
																<input name="my-item-qty" id="my-item-qty" value="1" type="hidden">
																<div class="quantity_down">-</div>
																<p id="product_quantity">1</p>
																<div class="quantity_up">+</div>
															</div>
															<div class="add_to_cart">
																<input type="submit" id="my-add-button" class="big-button cart-state" value="add to cart" name="my-add-button"/>
													        </div>
				
															<a href="<?php the_permalink(); ?>">learn more</a>
														</form>
													</figcaption>
	-->
												</figure>
												<figcaption>
													<div class="product_title"><a href="<?php echo get_post_permalink($result->ID); ?>"><h3><?php echo $result->post_title; ?></h3></a><p><span class="price_block">$<?php the_field('price', $result); ?></span></p></div>
												</figcaption>
											</li>
										<?php endforeach; ?>
									<?php endforeach; ?>
								</ul>
						    <?php } ?>
					    </div><! -- end of tab -->
					    <div id="tab-<?php echo $numTypes; $numTypes++; ?>">
						    <ul>
						    <?php foreach ($postTypes as $key => $type) : ?>
						    	<?php if($key != 'products') : ?>
								    <?php foreach ($type as $results) : ?>
										<?php foreach ($results as $result) : ?>
										
										<li class="article_img">
											<a href="<?php  echo get_post_permalink($result->ID); ?>"><?php echo get_the_post_thumbnail($result->ID, 'search-thumb'); ?></a>
											
											<div class="product_title"><a class="search_results_title" title="<?php echo $result->post_title; ?>" href="<?php echo get_post_permalink($result->ID); ?>"><?php echo $result->post_title; ?></a></div>
											
										</li>
										<?php endforeach; ?>
									<?php endforeach; ?>
								<?php endif; ?>
							<?php endforeach; ?>
						    </ul>
					    </div>

					</div><!-- end responsive tabs -->
			
				
		</article> 
		
		
	</section>

<?php get_footer(); ?>