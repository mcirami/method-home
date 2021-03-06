<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package boiler
 */

if ( ! function_exists( 'boiler_content_nav' ) ) :
/**
 * Display navigation to next/previous pages when applicable
 */
function boiler_content_nav( $nav_id ) {
	global $wp_query, $post;

	// Don't print empty markup on single pages if there's nowhere to navigate.
	if ( is_single() ) {
		$previous = ( is_attachment() ) ? get_post( $post->post_parent ) : get_adjacent_post( false, '', true );
		$next = get_adjacent_post( false, '', false );

		if ( ! $next && ! $previous )
			return;
	}

	// Don't print empty markup in archives if there's only one page.
	if ( $wp_query->max_num_pages < 2 && ( is_home() || is_archive() || is_search() ) )
		return;

	$nav_class = ( is_single() ) ? 'navigation-post' : 'navigation-paging';

	?>
	<nav role="navigation" id="<?php echo esc_attr( $nav_id ); ?>" class="<?php echo $nav_class; ?>">
		<h1 class="screen-reader-text"><?php _e( 'Post navigation', 'boiler' ); ?></h1>

	<?php if ( is_single() ) : // navigation links for single posts ?>

		<?php previous_post_link( '<div class="nav-previous">%link</div>', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'boiler' ) . '</span> %title' ); ?>
		<?php next_post_link( '<div class="nav-next">%link</div>', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'boiler' ) . '</span>' ); ?>

	<?php elseif ( $wp_query->max_num_pages > 1 && ( is_home() || is_archive() || is_search() ) ) : // navigation links for home, archive, and search pages ?>

		<?php if ( get_next_posts_link() ) : ?>
		<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'boiler' ) ); ?></div>
		<?php endif; ?>

		<?php if ( get_previous_posts_link() ) : ?>
		<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'boiler' ) ); ?></div>
		<?php endif; ?>

	<?php endif; ?>

	</nav><!-- #<?php echo esc_html( $nav_id ); ?> -->
	<?php
}
endif; // boiler_content_nav

if ( ! function_exists( 'boiler_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 */
function boiler_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment; ?>
	
	<div class="individual_review">
		<div class="review-id">
		
			<?php echo get_avatar($comment,$size='100'); ?>
			
		</div>
		
		<div class="review-text">
		
			<?php if ($comment->comment_approved == '0') : ?>
				<em class="moderation"><?php _e('Thanks for your review! It will be published shortly.') ?></em>
				<br />
			<?php endif; ?>
		
			<?php if(function_exists('hkTC_comment_title'))
		    	hkTC_comment_title($comment->comment_ID,'<h2 class="comment-title">','</h2>');
			?>
			
			<?php if (defined("STARRATING_INSTALLED")) : ?>
				<div class="mobile-review-rating">
					<?php  wp_gdsr_comment_integrate_standard_result(get_comment_ID()); ?>
				</div>
			<?php endif; ?>
		
			<?php comment_text() ?>
			
			<div id="comment-<?php comment_ID(); ?>" class="comment_by">
				<?php printf(__('<b>%s</b> '), get_comment_author_link()) ?> 
				<small> (<?php comment_date('M. j, Y'); ?>) <?php edit_comment_link(__('(edit)'),' ','') ?></small>
			</div>
		</div>
		

		<?php if (defined("STARRATING_INSTALLED")) : ?>
			<div class="review-rating">
				<?php  wp_gdsr_comment_integrate_standard_result(get_comment_ID()); ?>
			</div>
		<?php endif; ?>
		
		<div id="divider"></div>
	</div>
	<?php
}
endif; // ends check for boiler_comment()

if ( ! function_exists( 'boiler_the_attached_image' ) ) :
/**
 * Prints the attached image with a link to the next attached image.
 */
function boiler_the_attached_image() {
	$post                = get_post();
	$attachment_size     = apply_filters( 'boiler_attachment_size', array( 1200, 1200 ) );
	$next_attachment_url = wp_get_attachment_url();

	/**
	 * Grab the IDs of all the image attachments in a gallery so we can get the URL
	 * of the next adjacent image in a gallery, or the first image (if we're
	 * looking at the last image in a gallery), or, in a gallery of one, just the
	 * link to that image file.
	 */
	$attachments = array_values( get_children( array(
		'post_parent'    => $post->post_parent,
		'post_status'    => 'inherit',
		'post_type'      => 'attachment',
		'post_mime_type' => 'image',
		'order'          => 'ASC',
		'orderby'        => 'menu_order ID'
	) ) );

	// If there is more than 1 attachment in a gallery...
	if ( count( $attachments ) > 1 ) {
		foreach ( $attachments as $k => $attachment ) {
			if ( $attachment->ID == $post->ID )
				break;
		}
		$k++;

		// get the URL of the next image attachment...
		if ( isset( $attachments[ $k ] ) )
			$next_attachment_url = get_attachment_link( $attachments[ $k ]->ID );

		// or get the URL of the first image attachment.
		else
			$next_attachment_url = get_attachment_link( $attachments[0]->ID );
	}

	printf( '<a href="%1$s" title="%2$s" rel="attachment">%3$s</a>',
		esc_url( $next_attachment_url ),
		the_title_attribute( array( 'echo' => false ) ),
		wp_get_attachment_image( $post->ID, $attachment_size )
	);
}
endif;

if ( ! function_exists( 'boiler_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function boiler_posted_on() {
	printf( __( 'Posted on <a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a><span class="byline"> by <span class="author vcard"><a class="url fn n" href="%5$s" title="%6$s" rel="author">%7$s</a></span></span>', 'boiler' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'boiler' ), get_the_author() ) ),
		get_the_author()
	);
}
endif;

/**
 * Returns true if a blog has more than 1 category
 */
function boiler_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'all_the_cool_cats' ) ) ) {
		// Create an array of all the categories that are attached to posts
		$all_the_cool_cats = get_categories( array(
			'hide_empty' => 1,
		) );

		// Count the number of categories that are attached to the posts
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'all_the_cool_cats', $all_the_cool_cats );
	}

	if ( '1' != $all_the_cool_cats ) {
		// This blog has more than 1 category so boiler_categorized_blog should return true
		return true;
	} else {
		// This blog has only 1 category so boiler_categorized_blog should return false
		return false;
	}
}

/**
 * Flush out the transients used in boiler_categorized_blog
 */
function boiler_category_transient_flusher() {
	// Like, beat it. Dig?
	delete_transient( 'all_the_cool_cats' );
}
add_action( 'edit_category', 'boiler_category_transient_flusher' );
add_action( 'save_post',     'boiler_category_transient_flusher' );
