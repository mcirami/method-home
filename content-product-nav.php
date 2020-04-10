<div class="mobile_product_filters">
	<select id="product_sub_nav">
		<option id="<?php echo get_site_url(); ?>/products" <?php if(is_post_type_archive('products')) { echo 'selected="selected"'; } ?>>Shop All</option>
		<?php 
			$taxonomy = 'product-category';
			$args = array(
						'hide_empty' => false,
						'parent' => 0,
					);
			$tax_terms = get_terms($taxonomy, $args);
			
			$i = 0;
			foreach($tax_terms as $term) {
				$category_order = get_field('menu_order', $term);
				$tax_terms[$i]->category_order = $category_order;
				$i++;
			}
			
			if(!function_exists('compare_cat_order')) {
				function compare_cat_order($a, $b) {
					if($a->category_order == $b->category_order) {
						return 0;
					}
					return ($a->category_order < $b->category_order) ? -1 : 1;
				}
			}
			if(count($tax_terms) > 1) {
				usort($tax_terms, "compare_cat_order");
			}
			
			foreach($tax_terms as $term) {
		?>
			<option id="<?php echo get_term_link($term); ?>" <?php if(is_tax('product-category', $term->slug)) { echo 'selected="selected"'; } ?>><?php echo $term->name; ?></option>
		<?php } ?>
	</select>
	<?php
		$taxonomy = 'product-category';
		$term_id = $wp_query->get_queried_object_id(); 
		$current_term = get_term($term_id, $taxonomy);
		
		if($current_term->parent != '') {
	?>
		<select id="product_sort">
			<option value="all" disabled selected>sort by</option>
			<option value="all">all</option>
			<?php
				$taxonomies = 'scent';
				
				$args = array('hide_empty' => false, 'orderby' => 'name', 'order' => 'ASC');
				
				$terms = get_terms($taxonomies, $args);
				foreach($terms as $term) {
			?>
				<option value="<?php echo $term->slug; ?>"><?php echo $term->name; ?></option>
			<?php
				}
				
				$taxonomies = 'color';
				
				$args = array('hide_empty' => false, 'orderby' => 'name', 'order' => 'ASC');
				
				$terms = get_terms($taxonomies, $args);
				foreach($terms as $term) {
			?>
				<option value="<?php echo $term->slug; ?>"><?php echo $term->name; ?></option>
			<?php } ?>
		</select>
	<?php } ?>
</div>