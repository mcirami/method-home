<div class="product_sidebar">
	<?php
		$taxonomy = 'product-category';
		$term_id = $wp_query->get_queried_object_id(); 
		$current_term = get_term($term_id, $taxonomy);
		
		if($current_term->parent != '') {
	?>
		<ul class="filter_sidebar">
			<li>Refine By
				<ul class="filters">
					<li>
						<h2>Scent</h2>
						<ul class="scents">
						<?php
							$taxonomies = 'scent';
							
							$args = array('parent' => 0, 'hide_empty' => false, 'orderby' => 'name', 'order' => 'ASC');
							
							$terms = get_terms($taxonomies, $args);
							foreach($terms as $term) {
						?>
							<li><input type="checkbox" name="scent" value="<?php echo $term->slug; ?>"><label for="<?php echo $term->slug; ?>"><?php echo $term->name; ?></label></li>
						<?php } ?>
						</ul>
					</li>
					<li>
						<h2>Color</h2>
						<ul class="colors">
						<?php
							$taxonomies = 'color';
							
							$args = array('hide_empty' => false, 'orderby' => 'name', 'order' => 'ASC');
							
							$terms = get_terms($taxonomies, $args);
							foreach($terms as $term) {
						?>
							<li><div class="color_swatch" style="background-color: #<?php the_field('color_hex', $term); ?>;"></div><input type="checkbox" name="color" value="<?php echo $term->slug; ?>"><label for="<?php echo $term->slug; ?>"></label></li>
						<?php } ?>
						</ul>
					</li>
				</ul>
			</li>
			<li id="clear_filters">Clear Filters</li>
		</ul>
	<?php } ?>
	<div class="category_sidebar">
	
		<?php wp_nav_menu(array('menu' => 'Product Categories Menu')); ?>	
			<li class="shop_all"><a href="/products">View All</a></li>
		</ul>
	</div>
</div>