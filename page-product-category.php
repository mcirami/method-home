<?php 

//Template Name: Product Category

get_header(); ?>

<section class="products_wrap">
	<div class="container">
		<div class="category_sidebar">
			<h2>refine by</h2>
			<ul>
				<li>scent</li>
				<li class="sub_menu_wrap">
					<ul class="scent_checkboxes">
						<li><a href="#">watery</a></li>
						<li><a href="#">citrus</a></li>
						<li><a href="#">herbaceous</a></li>
						<li><a href="#">floral</a></li>
						<li><a href="#">fruity</a></li>
						<li><a href="#">gourmand</a></li>
						<li><a href="#">woody</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="product_section">
			<div class="featured_collection">
				<div class="collection_image_wrap">
					<div class="collection_image">
						<img src="<?php echo bloginfo('template_url'); ?>/images/collection_image.png" />
					</div>
				</div>
				<div class="collection_text_wrap">
					<div class="collection_text">
						<h2>preppy chic</h2>
						<p>sweet + sophisticated</p>
					</div>
					<div class="expand">
						<img src="<?php echo bloginfo('template_url'); ?>/images/expand_button.png" />
					</div>
				</div>
			</div>
			<div class="product_grid">
				<ul>
					<a href="#">
						<li>
							<img src="<?php echo bloginfo('template_url'); ?>/images/product_image.png" />
							<p class="product_name">product name</p>
							<p>fragrant scent</p>
							<p>3.99</p>
						</li>
					</a>
					<a href="#">
						<li>
							<img src="<?php echo bloginfo('template_url'); ?>/images/product_image.png" />
							<p class="product_name">product name</p>
							<p>fragrant scent</p>
							<p>3.99</p>
						</li>
					</a>
					<a href="#">
						<li>
							<img src="<?php echo bloginfo('template_url'); ?>/images/product_image.png" />
							<p class="product_name">product name</p>
							<p>fragrant scent</p>
							<p>3.99</p>
						</li>
					</a>
					<a href="#">
						<li>
							<img src="<?php echo bloginfo('template_url'); ?>/images/product_image.png" />
							<p class="product_name">product name</p>
							<p>fragrant scent</p>
							<p>3.99</p>
						</li>
					</a>
					<div class="tc_box">
						<div class="callout_content_wrap">
							<div class="callout_content_text">
								<h2>preppy chic</h2>
								<p>rice milk + mallow is back and<br />looking fresher than ever</p>
							</div>
						</div>
						<div class="callout_image">
							<img src="<?php echo bloginfo('template_url'); ?>/images/callout_product_image.png" />
						</div>
					</div>
				</ul>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>