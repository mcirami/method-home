<?php
// custom post types 

// Products
function register_cpt_products() {
	$labels = array(
		'name' 				=> ( 'Products' ),
		'singular_name' 	=> ( 'Product' ),
		'add_new' 			=> ( 'Add New Product' ),
		'add_new_item' 		=> ( 'Add New Product' ),
		'edit_item' 		=> ( 'Edit Product' ),
		'new_item' 			=> ( 'New Product' ),
		'view_item' 		=> ( 'View Product' ),
		'search_items' 		=> ( 'Search Products' ),
		'not_found' 		=> ( 'No Products found' ),
		'not_found_in_trash'=> ( 'No Products found in Trash' ),
		'parent_item_colon' => ( 'Parent Product:' ),
		'menu_name' 		=> ( 'Products' ),
	);
	$args = array(
		'labels' 			=> $labels,
		'hierarchical' 		=> true,
		'description' 		=> 'Products for sale',
		'supports' 			=> array( 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'revisions', 'comments'),
		'taxonomies' 		=> array( 'product-category', 'color', 'scent', 'fragrance', 'new-featured', 'collection' ),
		'public' 			=> true,
		'show_ui' 			=> true,
		'show_in_menu' 		=> true,
		'menu_position' 	=> 10,
		'menu_icon'			=> 'dashicons-admin-site',
		'hierarchical' 		=> true,
		'show_in_nav_menus' => true,
		'publicly_queryable'=> true,
		'exclude_from_search'=> false,
		'has_archive' 		=> true,
		'query_var' 		=> true,
		'can_export' 		=> true,
		'capability_type' 	=> 'post',
'taxonomies' => array('post_tag')
		
	);
	register_post_type( 'products', $args );	
}
add_action( 'init', 'register_cpt_products' );

//Taxonomies
add_action( 'init', 'create_product_category' );
add_action( 'init', 'create_product_color' );
add_action( 'init', 'create_product_scent' );
add_action( 'init', 'create_product_fragrance' );
add_action( 'init', 'create_product_collection' );
add_action( 'init', 'create_product_hero' );

function create_product_category() {
	register_taxonomy(
		'product-category',
		'products',
		array(
			'label' => __( 'Product Categories' ),
			'rewrite' => array( 'slug' => 'product-category' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

function create_product_color() {
	register_taxonomy(
		'color',
		'products',
		array(
			'label' => __( 'Color' ),
			'rewrite' => array( 'slug' => 'color' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

function create_product_scent() {
	register_taxonomy(
		'scent',
		'products',
		array(
			'label' => __( 'Scent' ),
			'rewrite' => array( 'slug' => 'scent' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

function create_product_fragrance() {
	register_taxonomy(
		'fragrance',
		'products',
		array(
			'label' => __( 'Fragrance' ),
			'rewrite' => array( 'slug' => 'fragrance' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

function create_product_collection() {
	register_taxonomy(
		'collection',
		'products',
		array(
			'label' => __( 'Collection' ),
			'rewrite' => array( 'slug' => 'collection' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

function create_product_hero() {
	register_taxonomy(
		'hero',
		'products',
		array(
			'label' => __( 'Hero' ),
			'rewrite' => array( 'slug' => 'hero' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}

// Promo Banners
function register_cpt_promo_banner() {
	$labels = array(
		'name' 				=> ( 'Promo Banners' ),
		'singular_name' 	=> ( 'Promo Banner' ),
		'add_new' 			=> ( 'Add New Promo Banner' ),
		'add_new_item' 		=> ( 'Add New Promo Banner' ),
		'edit_item' 		=> ( 'Edit Promo Banner' ),
		'new_item' 			=> ( 'New Promo Banner' ),
		'view_item' 		=> ( 'View Promo Banner' ),
		'search_items' 		=> ( 'Search Promo Banners' ),
		'not_found' 		=> ( 'No Promo Banners found' ),
		'not_found_in_trash'=> ( 'No Promo Banners found in Trash' ),
		'parent_item_colon' => ( 'Parent Promo Banner:' ),
		'menu_name' 		=> ( 'Promo Banners' ),
	);
	$args = array(
		'labels' 			=> $labels,
		'hierarchical' 		=> true,
		'description' 		=> 'Promo banners for Product Categories',
		'supports' 			=> array( 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'revisions'),
		'public' 			=> true,
		'show_ui' 			=> true,
		'show_in_menu' 		=> true,
		'menu_position' 	=> 10,
		'menu_icon'			=> 'dashicons-admin-site',
		'hierarchical' 		=> true,
		'show_in_nav_menus' => true,
		'publicly_queryable'=> true,
		'exclude_from_search'=> false,
		'has_archive' 		=> false,
		'query_var' 		=> true,
		'can_export' 		=> true,
		'capability_type' 	=> 'post'
	);
	register_post_type( 'promo-banner', $args );	
}
add_action( 'init', 'register_cpt_promo_banner' );


// Press
function register_cpt_press() {
	$labels = array(
		'name' 				=> ( 'Press' ),
		'singular_name' 	=> ( 'Press' ),
		'add_new' 			=> ( 'Add New Press' ),
		'add_new_item' 		=> ( 'Add New Press' ),
		'edit_item' 		=> ( 'Edit Press' ),
		'new_item' 			=> ( 'New Press' ),
		'view_item' 		=> ( 'View Press' ),
		'search_items' 		=> ( 'Search Press' ),
		'not_found' 		=> ( 'No Press found' ),
		'not_found_in_trash'=> ( 'No Press found in Trash' ),
		'parent_item_colon' => ( 'Parent Press:' ),
		'menu_name' 		=> ( 'Press' ),
	);
	$args = array(
		'labels' 			=> $labels,
		'hierarchical' 		=> true,
		'description' 		=> 'Promo banners for Product Categories',
		'supports' 			=> array( 'title', 'editor', 'thumbnail' , 'excerpt', 'author', 'revisions'),
		'taxonomies' 		=> array( 'press-category' ),
		'public' 			=> true,
		'show_ui' 			=> true,
		'show_in_menu' 		=> true,
		'menu_position' 	=> 10,
		'menu_icon'			=> 'dashicons-admin-site',
		'hierarchical' 		=> true,
		'show_in_nav_menus' => true,
		'publicly_queryable'=> true,
		'exclude_from_search'=> false,
		'has_archive' 		=> false,
		'query_var' 		=> true,
		'can_export' 		=> true,
		'capability_type' 	=> 'post'
	);
	register_post_type( 'press', $args );	
}
add_action( 'init', 'register_cpt_press' );

function create_press_category() {
	register_taxonomy(
		'press-category',
		'press',
		array(
			'label' => __( 'Press Category' ),
			'rewrite' => array( 'slug' => 'press-category' ),
			'hierarchical' => true,
			'query_var'  => true,
		)
	);
}
add_action( 'init', 'create_press_category' );

?>