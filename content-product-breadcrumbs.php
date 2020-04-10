<?php

?>
<div class="product_breadcumbs">
	<a href="/shop">Shop</a><span>&raquo</span>
	<?php if(is_tax()) { ?>
		<?php
			$taxonomy = 'product-category';
			$term_id = $wp_query->get_queried_object_id(); 
			$current_term = get_term($term_id, $taxonomy);
			
			$parents = array();
			$parent = get_term($current_term->parent, $taxonomy);
			while($parent->term_id != '') {
				$parents[] = $parent;
				$parent = get_term($parent->parent, $taxonomy);
			}
		?>
		<?php for($i = count($parents)-1; $i >= 0; $i--) { ?>
			<?php $term = $parents[$i]; ?>
			<a href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?></a><span>&raquo</span>
		<?php } ?>
		<a href="<?php echo get_term_link($current_term); ?>"><?php echo $current_term->name; ?></a>
	<?php } else if(is_archive('products')) { ?>
		<a href="/products">All Products</a>
	<?php } else { ?>
		<?php 
			$terms = get_the_terms(get_the_ID(), 'product-category');
			foreach($terms as $term) {
		?>
				<a href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?></a><span>&raquo</span>
		<?php
			}
		?>
		<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	<?php } ?>
</div>