<?php
/**
 * boiler functions and definitions
 *
 * @package boiler
 */

if ( ! function_exists( 'boiler_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function boiler_setup() {

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Enable support for Post Thumbnails on posts and pages
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	/**
	 * This theme uses wp_nav_menu() in two location.
	 */
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'boiler' ),
		'secondary' => __('Secondary Navigation', 'boiler'),  
	) );

	/**
	 * Enable support for Post Formats
	 */
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );
}
endif; // boiler_setup
add_action( 'after_setup_theme', 'boiler_setup' );

// add parent class to menu items 
add_filter( 'wp_nav_menu_objects', 'add_menu_parent_class' );
function add_menu_parent_class( $items ) {

	$parents = array();
	foreach ( $items as $item ) {
		if ( $item->menu_item_parent && $item->menu_item_parent > 0 ) {
			$parents[] = $item->menu_item_parent;
		}
	}
	
	foreach ( $items as $item ) {
		if ( in_array( $item->ID, $parents ) ) {
			$item->classes[] = 'parent-item'; 
		}
	}
	
	return $items;
}

	
/* remove some of the header bloat */

// EditURI link
remove_action( 'wp_head', 'rsd_link' );
// windows live writer
remove_action( 'wp_head', 'wlwmanifest_link' );
// index link
remove_action( 'wp_head', 'index_rel_link' );
// previous link
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
// start link
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
// links for adjacent posts
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
// WP version
remove_action( 'wp_head', 'wp_generator' );

// remove pesky injected css for recent comments widget
add_filter( 'wp_head', 'boiler_remove_wp_widget_recent_comments_style', 1 );
// clean up comment styles in the head
add_action('wp_head', 'boiler_remove_recent_comments_style', 1);
// clean up gallery output in wp
add_filter('gallery_style', 'boiler_gallery_style');

// Thumbnail image sizes
// add_image_size( 'thumb-400', 400, 400, true );

// remove injected CSS for recent comments widget
function boiler_remove_wp_widget_recent_comments_style() {
   if ( has_filter('wp_head', 'wp_widget_recent_comments_style') ) {
      remove_filter('wp_head', 'wp_widget_recent_comments_style' );
   }
}

// remove injected CSS from recent comments widget
function boiler_remove_recent_comments_style() {
  global $wp_widget_factory;
  if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
    remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
  }
}

// remove injected CSS from gallery
function boiler_gallery_style($css) {
  return preg_replace("!<style type='text/css'>(.*?)</style>!s", '', $css);
}

/**
 * Register widgetized area and update sidebar with default widgets
 */
function boiler_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'boiler' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'boiler_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function boiler_scripts_styles() {
	// style.css just initializes the theme. This is compiled from /sass
	wp_enqueue_style( 'main-style', get_template_directory_uri() . '/css/main.css');
	wp_enqueue_style( 'responsive-tabs', get_template_directory_uri() . '/css/responsive-tabs.css');
	wp_enqueue_style( 'mmenu', get_template_directory_uri() . '/js/mmenu/jquery.mmenu.css');
	wp_enqueue_style( 'mmenu-positioning', get_template_directory_uri() . '/js/mmenu/jquery.mmenu.positioning.css');

	wp_enqueue_script( 'jquery' , array(), '', true );

	//wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/js/vendor/modernizr-2.6.2.min.js', '2.6.2', true );

	//wp_enqueue_script( 'boiler-plugins', get_template_directory_uri() . '/js/plugins.js', array(), '20120206', true );

	//wp_enqueue_script( 'boiler-main', get_template_directory_uri() . '/js/main.js', array(), '20120205', true );
	
	// Return concatenated version of JS. If you add a new JS file add it to the concatenation queue in the gruntfile. 
	// current files: js/vendor.mordernizr-2.6.2.min.js, js/plugins.js, js/main.js
	wp_enqueue_script( 'mmenu', get_template_directory_uri() . '/js/mmenu/jquery.mmenu.min.js', array('jquery'), true );
	wp_enqueue_script( 'jquery.responsiveTabs', get_template_directory_uri() . '/js/jquery.responsiveTabs.js', array(), '', true );
	wp_enqueue_script( 'ddslick', get_template_directory_uri() . '/js/vendor/jquery.ddslick.min.js', array(), '', true );
	wp_enqueue_script( 'boiler-concat', get_template_directory_uri() . '/js/built.min.js', array(), '', true );

}
add_action( 'wp_enqueue_scripts', 'boiler_scripts_styles' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom post type and taxonomy initialization
 */
require get_template_directory() . '/inc/post-types.php';

/**
 * Custom shortcodes
 */
require get_template_directory() . '/inc/shortcodes.php';

/**
 * Main Navigation Custom Fields
 */
//require get_template_directory() . '/inc/nav-fields.php';


// Auto wrap embeds with video container to make video responsive
function wrap_embed_with_div($html, $url, $attr) {
     return '<div class="video_container">' . $html . '</div>';
}

add_filter('embed_oembed_html', 'wrap_embed_with_div', 10, 3);

// customize embed settings
function custom_youtube_settings($code){
	if(strpos($code, 'youtu.be') !== false || strpos($code, 'youtube.com') !== false){
		return str_replace('?feature=oembed', '?feature=oembed&rel=0&?wmode=transparent&iv_load_policy=3&showinfo=0&vq=hd1080', $code );
	}
	return $code;
}

add_filter('embed_handler_html', 'custom_youtube_settings');
add_filter('embed_oembed_html', 'custom_youtube_settings');

/**
* Advanced Custom Fields Opition Page
*/

if( function_exists('acf_add_options_page') ) {
 
	acf_add_options_page();
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	$nav = acf_add_options_page(array(
		'page_title' 	=> 'Navigation Settings',
		'menu_title'	=> 'Navigation',
		'menu_slug'		=> 'navigation-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
 
}


// ACF Rules
add_filter('acf/location/rule_types', 'acf_location_rules_types');
function acf_location_rules_types( $choices )
{
	//print_r($choices);
    $choices['Forms']['taxonomy_type'] = 'Taxonomy Type';
 
    return $choices;
}

add_filter('acf/location/rule_values/taxonomy_type', 'acf_location_rules_values_taxonomy_type');
function acf_location_rules_values_taxonomy_type( $choices )
{
    $choices['parent_taxonomy'] = 'Parent Taxonomy';
 
    return $choices;
}

add_filter('acf/location/rule_match/taxonomy_type', 'acf_location_rules_match_taxonomy_type', 10, 3);
function acf_location_rules_match_taxonomy_type( $match, $rule, $options )
{
	if(isset($_GET['taxonomy']) && isset($_GET['tag_ID'])) {
		$term_id = (int)$_GET['tag_ID'];
		$taxonomy = esc_attr($_GET['taxonomy']);
		$term = get_term_by('id', $term_id, $taxonomy);
		$parent = get_term($term->parent, $taxonomy);
	
		if($parent->term_id == '') {
			if($rule['value'] == 'parent_taxonomy') {
				if($rule['operator'] == '==') {
					$match = true;
				} else {
					$match = false;
				}
			} else {
				if($rule['operator'] == '==') {
					$match = false;
				} else {
					$match = true;
				}
			}
		} else {
			if($rule['value'] == 'parent_taxonomy') {
				if($rule['operator'] == '==') {
					$match = false;
				} else {
					$match = true;
				}
			} else {
				if($rule['operator'] == '==') {
					$match = true;
				} else {
					$match = false;
				}
			}
		}
	} else {
		$match = false;	
	}
	
	return $match;
}

add_filter('relevanssi_hits_filter', 'products_first');
function products_first($hits) {
    $types = array();
 
    $types['page'] = array();
    $types['post'] = array();
    $types['products'] = array();
 
    // Split the post types in array $types
    if (!empty($hits)) {
        foreach ($hits[0] as $hit) {
            array_push($types[$hit->post_type], $hit);
        }
    }
 
    // Merge back to $hits in the desired order
    $hits[0] = array_merge($types['products'], $types['post'], $types['page']);
    return $hits;
}

if ( function_exists('add_image_size') ) { 
	add_image_size( 'search-thumb', 293, 244, true );
}

/*
 * Function creates post duplicate as a draft and redirects then to the edit post screen
 */
function rd_duplicate_post_as_draft(){
	global $wpdb;
	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
		wp_die('No post to duplicate has been supplied!');
	}
 
	/*
	 * get the original post id
	 */
	$post_id = (isset($_GET['post']) ? $_GET['post'] : $_POST['post']);
	/*
	 * and all the original post data then
	 */
	$post = get_post( $post_id );
 
	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post->post_author;
	 */
	$current_user = wp_get_current_user();
	$new_post_author = $current_user->ID;
 
	/*
	 * if post data exists, create the post duplicate
	 */
	if (isset( $post ) && $post != null) {
 
		/*
		 * new post data array
		 */
		$args = array(
			'comment_status' => $post->comment_status,
			'ping_status'    => $post->ping_status,
			'post_author'    => $new_post_author,
			'post_content'   => $post->post_content,
			'post_excerpt'   => $post->post_excerpt,
			'post_name'      => $post->post_name,
			'post_parent'    => $post->post_parent,
			'post_password'  => $post->post_password,
			'post_status'    => 'draft',
			'post_title'     => $post->post_title,
			'post_type'      => $post->post_type,
			'to_ping'        => $post->to_ping,
			'menu_order'     => $post->menu_order
		);
 
		/*
		 * insert the post by wp_insert_post() function
		 */
		$new_post_id = wp_insert_post( $args );
 
		/*
		 * get all current post terms ad set them to the new post draft
		 */
		$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
		foreach ($taxonomies as $taxonomy) {
			$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
			wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
		}
 
		/*
		 * duplicate all post meta
		 */
		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
		if (count($post_meta_infos)!=0) {
			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
			foreach ($post_meta_infos as $meta_info) {
				$meta_key = $meta_info->meta_key;
				$meta_value = addslashes($meta_info->meta_value);
				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
			}
			$sql_query.= implode(" UNION ALL ", $sql_query_sel);
			$wpdb->query($sql_query);
		}
 
 
		/*
		 * finally, redirect to the edit post screen for the new draft
		 */
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
		exit;
	} else {
		wp_die('Post creation failed, could not find original post: ' . $post_id);
	}
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );
 
/*
 * Add the duplicate link to action list for post_row_actions
 */
function rd_duplicate_post_link( $actions, $post ) {
	if (current_user_can('edit_posts')) {
		$actions['duplicate'] = '<a href="admin.php?action=rd_duplicate_post_as_draft&amp;post=' . $post->ID . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
	}
	return $actions;
}
 
add_filter('page_row_actions', 'rd_duplicate_post_link', 10, 2);

function product_cat_queries( $query ) {
  // not an admin page and it is the main query
  if (!is_admin() && $query->is_main_query()){

    if(is_tax('product-category')){
      // show 50 posts on custom taxonomy pages
      $query->set('posts_per_page', -1);
    }
  }
}
add_action( 'pre_get_posts', 'product_cat_queries' );

function SearchFilter($query) {
    // If 's' request variable is set but empty
    if (isset($_GET['s']) && empty($_GET['s']) && $query->is_main_query()){
        $query->is_search = true;
        $query->is_home = false;
    }
    return $query;}
add_filter('pre_get_posts','SearchFilter');

add_filter( 'postmeta_form_limit' , 'customfield_limit_increase' );
function customfield_limit_increase( $limit ) {
  $limit = 1000;
  return $limit;
}


// custom excerpt for featured products on subcategory pages

$wpse_excerpt = strip_tags($wpse_excerpt, wpse_allowedtags());

function wpse_allowedtags() {
// Add custom tags to this string
    return '<p>,<strong>'; 
}

if ( ! function_exists( 'wpse_custom_wp_trim_excerpt' ) ) : 

    function wpse_custom_wp_trim_excerpt($wpse_excerpt) {
    global $post;
    $raw_excerpt = $wpse_excerpt;
        if ( '' == $wpse_excerpt ) {

            $wpse_excerpt = get_the_content('');
            $wpse_excerpt = strip_shortcodes( $wpse_excerpt );
            $wpse_excerpt = apply_filters('the_content', $wpse_excerpt);
            $wpse_excerpt = str_replace(']]>', ']]&gt;', $wpse_excerpt);
            $wpse_excerpt = strip_tags($wpse_excerpt, wpse_allowedtags()); /*IF you need to allow just certain tags. Delete if all tags are allowed */

            //Set the excerpt word count and only break after sentence is complete.
                $excerpt_word_count = 50;
                $excerpt_length = apply_filters('excerpt_length', $excerpt_word_count); 
                $tokens = array();
                $excerptOutput = '';
                $count = 0;

                // Divide the string into tokens; HTML tags, or words, followed by any whitespace
                preg_match_all('/(<[^>]+>|[^<>\s]+)\s*/u', $wpse_excerpt, $tokens);

                foreach ($tokens[0] as $token) { 

                    if ($count >= $excerpt_word_count && preg_match('/[\,\;\?\.\!]\s*$/uS', $token)) { 
                    // Limit reached, continue until , ; ? . or ! occur at the end
                        $excerptOutput .= trim($token);
                        break;
                    }

                    // Add words to complete sentence
                    $count++;

                    // Append what's left of the token
                    $excerptOutput .= $token;
                }

            $wpse_excerpt = trim(force_balance_tags($excerptOutput));

                $excerpt_end = ''; 
                $excerpt_more = apply_filters('excerpt_more', ' ' . $excerpt_end); 

                //$pos = strrpos($wpse_excerpt, '</');
                //if ($pos !== false)
                // Inside last HTML tag
                //$wpse_excerpt = substr_replace($wpse_excerpt, $excerpt_end, $pos, 0); /* Add read more next to last word */
                //else
                // After the content
                $wpse_excerpt .= $excerpt_end; /*Add read more in new paragraph */

            return $wpse_excerpt;   

        }
        return apply_filters('wpse_custom_wp_trim_excerpt', $wpse_excerpt, $raw_excerpt);
    }

endif;

remove_filter('get_the_excerpt', 'wp_trim_excerpt');
add_filter('get_the_excerpt', 'wpse_custom_wp_trim_excerpt');

// overrides the output of sailthru tags
add_filter('sailthru_horizon_meta_tags_output', 'sailthru_filter_tag');
function sailthru_filter_tag($tag) {

    if (strpos($tag, 'sailthru.date')) {
       // this will return false and so not display the sailthru.date meta tag
       return false;
    }
    return $tag;
}

// custom logo on login screen
function my_login_logo() { ?>
    <style type="text/css">
        body.login div#login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png);
            padding-bottom: 40px;
            width: 288px;
            height: auto;
            background-size: 288px 62px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );



