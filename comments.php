<?php


// Do not delete these lines
	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if ( post_password_required() ) { ?>
		<p class="nocomments">This post is password protected. Enter the password to view comments.</p>
	<?php
		return;
	}
?>

<!-- You can start editing here. -->

<?php if ( have_comments() ) : ?>
	<div class="navigation">
		<div class="alignleft"><?php previous_comments_link() ?></div>
		<div class="alignright"><?php next_comments_link() ?></div>
	</div>
	
	<?php wp_list_comments( array( 'callback' => 'boiler_comment' ) ); ?>

	<div class="navigation">
		<div class="alignleft"><?php previous_comments_link() ?></div>
		<div class="alignright"><?php next_comments_link() ?></div>
	</div>
 <?php else : // this is displayed if there are no comments so far ?>
	<?php if ('open' == $post->comment_status) : ?>
		<!-- If comments are open, but there are no comments. -->

	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<p class="nocomments">Comments are closed.</p>

	<?php endif; ?>
<?php endif; ?>


<?php if ('open' == $post->comment_status) : ?>

	<?php global $current_user; get_currentuserinfo(); ?>

	<a id="post-review" name="post-review"></a><div id="respond">
	
	<div class="cancel-comment-reply">
		<small><?php cancel_comment_reply_link(); ?></small>
	</div>

	<?php if ( get_option('comment_registration') && !$current_user->ID ) : ?>
		<p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p>
	<?php else : ?>
		<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

		<?php //if ( $current_user->ID ) : ?>

			<!--<p>Logged in as <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $current_user->display_name; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Log out of this account">Log out &raquo;</a></p>-->

		<?php //else : ?>

			<h2>what do you think about <?php the_title(); ?>?</h2>
	
			<p>psst...if you have a question or product suggestion, talk to us on <a href="https://www.facebook.com/method" target="_blank">facebook</a> or email us at <a href="mailto:info@methodhome.com">info@methodhome.com</a>.</p>
	
			<div id="comment-user-details"> <?php do_action('alt_comment_login'); ?>

			</div>

		<?php //endif; ?>

<!--<p><small><strong>XHTML:</strong> You can use these tags: <code><?php echo allowed_tags(); ?></code></small></p>-->

		<p><?php if(function_exists('hkTC_comment_title')) { ?>
    		<b>review title</b><br /><input type="text" name="hikari-titled-comments" id="hikari-titled-comments" size="22" tabindex="4" value="" /> </p>
		<?php } ?>

		<?php if (defined("STARRATING_INSTALLED")) : ?>
			<p><label for="url"><b>how would you rate this product? *</b></label><br />
				<?php wp_gdsr_comment_integrate_standard_rating(); ?>
			</p><?php endif; ?>
		
			<p><b>review *</b><br />
			<textarea name="comment" id="comment" cols="90%" rows="10" tabindex="4"></textarea></p>
		
			<p><input name="submit" type="submit" id="submit" tabindex="5" value="submit review" />
			<?php comment_id_fields(); ?>
			</p>
			<?php do_action('comment_form', $post->ID); ?>
		
			</form>
		
		<?php endif; // If registration required and not logged in ?>
	</div>

<?php endif; // if you delete this the sky will fall on your head ?>




<div id="fb-root"></div>
<script type="text/javascript">
  window.fbAsyncInit = function() {
    FB.init({appId: '323423241043457', channelUrl: 'http://www.methodhome.com/?sfc-channel-file=1', status: true, cookie: true, xfbml: true, oauth: true });
    sfc_update_user_details();
  };
  (function(d){
       var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all.js";
       d.getElementsByTagName('head')[0].appendChild(js);
   }(document));     
</script>
<style type="text/css">
#fb-user { border: 1px dotted #C0C0C0; padding: 5px; display: block; }
#fb-user .fb_profile_pic_rendered { margin-right: 5px; float:left; }
#fb-user .end { display:block; height:0px; clear:left; }
</style>

<script type="text/javascript">
function sfc_update_user_details() {
	FB.getLoginStatus(function(response) {
		if (response.authResponse) {
			// Show their FB details TODO this should be configurable, or at least prettier...
			if (!jQuery('#fb-user').length) {
				jQuery('#comment-user-details').hide().after("<span id='fb-user'>" +
				"<fb:profile-pic uid='loggedinuser' facebook-logo='true' size='s'></fb:profile-pic>" +
				"<span id='fb-msg'><strong><fb:intl>Hi</fb:intl> <fb:name uid='loggedinuser' useyou='false'></fb:name>!</strong><br /><fb:intl>You are connected with your Facebook account.</fb:intl>" +
				"<a href='#' onclick='FB.logout(function(response) { window.location = \"http://methodhome.com/\"; }); return false;'> Logout</a>" +
				"</span><span class='end'></span></span>" + 
				"<input type='hidden' name='sfc_user_id' value='"+response.authResponse.userID+"' />"+
				"<input type='hidden' name='sfc_user_token' value='"+response.authResponse.accessToken+"' />");
				jQuery('#sfc_comm_send').html('<input style="width: auto;" type="checkbox" id="sfc_comm_share" name="sfc_comm_share"  /><label for="sfc_comm_share"><fb:intl>Share Review on Facebook</fb:intl></label>');
			}

			// Refresh the DOM
			FB.XFBML.parse();
		} 
	});
}
</script>

