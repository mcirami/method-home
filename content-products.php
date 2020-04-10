<?php
/**
 * @package boiler
 */
?>
<div class="product">
	
	<div class="product_image">
		<?php 
			$skus = get_field('skus'); 
			$main_image = $skus[0]['sku_image'];
		?>
		<div class="featured_image">
			<img src="<?php echo $main_image['url']; ?>" alt="<?php the_title(); ?>">
		</div>
		<div class="additional_images">
			<?php if(have_rows('lifestyle_images')) : ?>
				<?php while(have_rows('lifestyle_images')) : the_row(); ?>
					<?php $lifestyle_image = get_sub_field('lifestyle_image'); ?>
					<div class="additional_image">
						<img src="<?php echo $lifestyle_image['url']; ?>">
					</div>
				<?php endwhile; ?>
			<?php endif; ?>	
			<div class="additional_image main_image">
				<img src="<?php echo $main_image['url']; ?>">
			</div>
		</div>
	</div>
	<div class="product_content">
		<h1><?php the_title(); ?></h1>
		<h2><?php the_field('sub_headline'); ?></h2>
		<div class="product_rating">
			<div class="review-overall-rating">
				<?php 
					$postRatingData = wp_gdsr_rating_article(get_the_ID()); 
					gdsr_render_stars_custom(array( "max_value" => gdsr_settings_get('stars'), "size" => 16, "vote" => $postRatingData->rating )); 
				?>
			</div>
			<div class="review_links"><a href="#reviews">read reviews</a> | <a href="#post-review">write review</a></div>
		</div>
		<div class="product_description">
			<?php the_content(); ?>

<?php the_field('discontinued'); ?>
		</div>
		<h3><?php if(strpos(get_field('price'), '$') === false) { echo '$'; } ?><?php the_field('price'); ?></h3>

<?php the_field('hide_add_to_cart'); ?>
		<p>what's that smell?</p>
		<form method="post" action="/shop/checkout" class="jcart">
	         <div class="scent_select">
	         	<select id="my-item-id" name="my-item-id" style="display: none;">
	                <!--Quidsi:option value shall be Quidsi sku id -->
					<?php if(have_rows('skus')) : ?>
						<?php $i = 0; ?>
						<?php while(have_rows('skus')) : the_row(); ?>
							<?php 
								$fragrance_id = get_sub_field('fragrance'); 
								$sku_name = get_sub_field('sku_name');
								$sku_image = get_sub_field('sku_image');
								$swatch_image = get_sub_field('swatch_image');
								
								$fragrance = get_term($fragrance_id, 'fragrance');
							?>
							<option id="<?php echo $sku_image['url']; ?>" data-imagesrc="<?php echo $swatch_image['url']; ?>" value="<?php echo $sku_name; ?>" <?php if($i === 0) { echo 'selected="selected"'; } ?>><?php echo $fragrance->name; ?> / <?php the_field('product_size'); ?></option>
							<?php $i++; ?>
						<?php endwhile; ?>
					<?php endif; ?>	
				</select>
	            <select id="my-item-id-clone" name="my-item-id-clone">
	                <!--Quidsi:option value shall be Quidsi sku id -->
					<?php if(have_rows('skus')) : ?>
						<?php while(have_rows('skus')) : the_row(); ?>
							<?php 
								$fragrance_id = get_sub_field('fragrance'); 
								$sku_name = get_sub_field('sku_name');
								$sku_image = get_sub_field('sku_image');
								$swatch_image = get_sub_field('swatch_image');
								
								$fragrance = get_term($fragrance_id, 'fragrance');
							?>
							<option id="<?php echo $sku_name; ?>" data-imagesrc="<?php echo $swatch_image['url']; ?>" value="<?php echo $sku_image['url']; ?>"><?php echo $fragrance->name; ?> / <?php the_field('product_size'); ?></option>
						<?php endwhile; ?>
					<?php endif; ?>	
				</select>
	        </div>
	        <input name="my-add-button-type" value="" type="hidden">
	        <input name="my-item-name" id="my-item-name" value="multi-surface cleaner - clementine"
	            type="hidden">
	        <input name="my-item-price" id="my-item-price" value="4.49" type="hidden">
	        <input name="my-item-thumb" id="my-item-thumb" value="<?php bloginfo('template_url') ?>/PDPTest_files/APC_clementine_2011redesign.jpg"
	            type="hidden">
	        <input name="my-item-path" id="my-item-path" value="/product/all-purpose-cleaner-powergreen%E2%84%A2-technology/?clementine"
	            type="hidden">
	        <input name="method-add-location" id="method-add-location" value="prod_details" type="hidden">
	        <input name="my-item-qty" id="my-item-qty" value="1" type="hidden">
	        <div class="quantity_select">
	        	<div>
		        	<div class="quantity_down">-</div>
		        	<p id="product_quantity">1</p>
		        	<div class="quantity_up">+</div>
	        	</div>
	        </div>
	        <div class="add_to_cart">
				<button type="submit" id="my-add-button" class="big-button cart-state flood-btn" name="my-add-button">add to cart</button>
	        </div>
		</form>
	</div>
	<div class="product_divider"></div>
	<div id="js-product_tabs" class="product_tabs">
		<ul class="product_tab_labels js-product_tab_labels">
			<li><a href="#tab-1" data-active="tab-1">fragrances</a></li>
			<li><a href="#tab-2" data-active="tab-2">ingredients</a></li>
			<li><a href="#tab-3" data-active="tab-3">more info</a></li>
		</ul>
		<div id="tab-1" class="product_tab content_tab">


			<?php if(have_rows('skus')) : ?>
						<?php while(have_rows('skus')) : the_row(); ?>
							<?php 
								$fragrance_id = get_sub_field('fragrance'); 
								$swatch_image = get_sub_field('swatch_image');
								$fragrance = get_term($fragrance_id, 'fragrance');
							?>
			
						<div style="background: url(<?php echo $swatch_image['url']; ?>) no-repeat 0px 2px; padding-left: 30px; margin-top: 10px;">
						<strong><?php echo $fragrance->name; ?></strong></div>
						<p><?php echo $fragrance->description; ?></p>
						<?php endwhile; ?>
					<?php endif; ?>	
		</div>
		<div id="tab-2" class="product_tab content_tab table_tab">
			<div class="ingredient_chart">
				<?php echo do_shortcode(get_field('ingredients_table')); ?>
			</div>
		</div>
		<div id="tab-3" class="product_tab content_tab">
			<?php the_field('more_info'); ?>
		</div>
	</div>
	
	<!-- Scout Integration -->
		<div id="sailthru-scout">
		  <div class="loading">
		    Loading, please wait...
		  </div>
		</div>
	<!-- End of Scout Integration -->
	
	<script type="text/javascript" src="//ak.sail-horizon.com/scout/v1.js"></script>
	<script type="text/javascript">
        SailthruScout.setup({
            domain: 'horizon.methodhome.com',
            numVisible: 4,
            renderItem: function(item, pos) {
                      var html = '';
                      html += '<div class="content-item">';
                      if (item.image) {
                        html += '<div class="image"><a href="'+item.url + '"><img src="' + item.image.full + '" /></a></div>';
                      }
                      html += '<div class="title"><a href="' + item.url + '">'+item.title+'</a></div>';
                      html += '</div>';
                      return html;
                    },
        });
	</script>
	
	<div id="reviews" class="review_headline">
		<h2><?php comments_number('0 reviews', '1 review', '% reviews' );?></h2>
		<div class="rating_headline">
			<h3>overall rating </h3>
			<div class="rating_stars">
				<?php $postRatingData = wp_gdsr_rating_article(get_the_ID()); gdsr_render_stars_custom(array( "max_value" => gdsr_settings_get('stars'), "size" => 16, "vote" => $postRatingData->rating )); ?>
			</div>
		</div>
	</div>
	<?php comments_template('', true); ?>
</div>
