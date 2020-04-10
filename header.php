<?php
/**
 * The Header for our theme.
 *
 * @package boiler
 */

?>
<!--
                         _                          _           _         _ _      _         
                        | |                        (_)         | |       | (_)    | |        
  _ __   ___  ___  _ __ | | ___    __ _  __ _  __ _ _ _ __  ___| |_    __| |_ _ __| |_ _   _ 
 | '_ \ / _ \/ _ \| '_ \| |/ _ \  / _` |/ _` |/ _` | | '_ \/ __| __|  / _` | | '__| __| | | |
 | |_) |  __/ (_) | |_) | |  __/ | (_| | (_| | (_| | | | | \__ \ |_  | (_| | | |  | |_| |_| |
 | .__/ \___|\___/| .__/|_|\___|  \__,_|\__, |\__,_|_|_| |_|___/\__|  \__,_|_|_|   \__|\__, |
 | |              | |                    __/ |                                          __/ |
 |_|              |_|                   |___/                                          |___/


-->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title><?php wp_title( '|', true, 'right' ); ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<script type="text/javascript" src="http://fast.fonts.net/jsapi/65e1d132-8245-444b-83ca-a0c2c567a63e.js"></script>

<?php if(is_singular('products')) { ?>
	<?php $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ); ?>
	<meta name="sailthru.image.full" content="<?php echo $url; ?>">
<?php } ?>
<?php wp_head(); ?>

<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
<link rel="stylesheet" href="http://www.soap.com/App_Themes/Style/PublishingPartners/MethodPDP.css" type="text/css" />
<link type="text/css" rel="stylesheet" media="print" href="<?php bloginfo('template_url') ?>/PDPTest_files/css_1edb239be3ee1bb75a4de591dddfaafa.css">
	<!--<script type="text/javascript" src="<?php bloginfo('template_url') ?>/PDPTest_files/js_fdfec101a0550f1d4a33ff0eb8d26f2d.js"></script>-->
	<!--
    <script type="text/javascript" src="http://www.soap.com/Javascript/qsPartner.js?ver=20141114"></script><!--Quidsi:MethodPDP.css and qsPartner.js shall be added into all pages -->
    <script type="text/javascript">
        
        function request(paras) {
            var url = location.href;
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
            var paraObj = {};
            for (i = 0; j = paraString[i]; i++) {
                paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
            }
            var returnValue = paraObj[paras.toLowerCase()];
            if (typeof (returnValue) == "undefined") {
                return "";
            }
            else {
                return returnValue;
            }
        }

        var sku = request("sku");
        if (sku != "") {
            quidsiPartnerInfo.bindingSku = sku;
        }
        
        </script>
<script language="JavaScript" type="text/javascript">
function cngProductShot(obj){
index=obj.selectedIndex;
document.getElementById('product-picture').src=obj.options[index].id;
}
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-917236-19', 'auto');
  ga('send', 'pageview');

</script>

</head>

<body <?php body_class(); ?>>
	<!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    
    <script type="text/javascript">
		jQuery(document).ready(function () {
			function callFloodlight_new(source, type, cat) {
				var tag_url="http://fls.doubleclick.net/activityi;src=" + source + ";type=" + type + ";cat=" + cat + ";ord=1;num="+Math.floor(Math.random()*999999)+"?";
				if(document.getElementById("DCLK_FLDiv")){var flDiv=document.getElementById("DCLK_FLDiv");}
				else{var flDiv=document.body.appendChild(document.createElement("div"));flDiv.id="DCLK_FLDiv";flDiv.style.display="none";}
				var DCLK_FLIframe=document.createElement("iframe");
				DCLK_FLIframe.id="DCLK_FLIframe_"+Math.floor(Math.random()*999999);
				DCLK_FLIframe.src=tag_url;
				flDiv.appendChild(DCLK_FLIframe);
				}
				
				$('.flood-btn').click(function(e){
					callFloodlight_new("4364734", "addto768", "metho545");
				});
				
				$('.sailthru-add-subscriber-form button').click(function(e){
					callFloodlight_new("4364734", "Email0", "Email0");
				});
				
			});
	</script>

	<header id="global_header">
	
	<?php if (is_post_type_archive()) {
	    $postType = get_query_var( 'post_type' );
	    $floodlight = get_field('floodlight_tag', 'options');
	    echo '<!-- floodlight tag -->';
    } else if (is_archive()) {
	    $postTax = get_query_var( 'taxonomy' );
	    $postTerm = get_query_var( 'term' );
	    $termId = get_term_by('slug', $postTerm, $postTax);
	    $archiveId = $postTax.'_'.$termId->term_id;
	    $floodlight = get_field('floodlight_tag', $archiveId);
	    echo '<!-- floodlight tag -->';
    } else {
    	echo '<!-- floodlight tag -->';
	    $floodlight = get_field('floodlight_tag');
    } 
    ?>
    
	<?php if($floodlight) {
		echo $floodlight;
	} ?>
	
		<div class="search_bar">
			<div class="container">
				<form class="js-search_form" method="get" id="search" action="<?php bloginfo('url'); ?>">
					<input class="search_input" type="text" value=""  name="s" id="s" onblur="if (this.value == '') {this.value = '<?php echo $search_text; ?>';}" onfocus="if (this.value == '<?php echo $search_text; ?>') {this.value = '';}" placeholder="hi there, what are you looking for?">
					<input class="search_submit" type="submit" name="submit" value="ENTER">
					<i class="fa js-fa close"></i>
					<i class="fa fa-search js-fa search_icon"></i>
				</form>
			</div>
		</div><!-- search_bar -->
		
		<div class="container">
			<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" /></a></h1>
		
			<nav role="navigation">
				<?php //wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'menu_class' => 'header_menu' ) ); // remember to assign a menu in the admin to remove the container div ?>
				<ul class="main_navigation top_level">
					<li class="nav_item shop_nav">
						<a href="/shop">Shop</a>
						<ul class="submenu second_level shop_sub">
							<?php 
								$shopRepeater = get_field('shop_navigation', 'options');
								$shopCount = count($shopRepeater);
								$count = 1;
							?>
							<?php if (have_rows('shop_navigation', 'options')) : ?>
								<?php while (have_rows('shop_navigation', 'options')) : the_row(); ?>
									<li class="<?php the_sub_field('column_color', 'options'); ?>">
									<?php if (have_rows('column', 'options')) : ?>
										
										<?php while (have_rows('column', 'options')) : the_row(); ?>
											<?php $category = get_sub_field('categories', 'options'); ?>
											<a href="<?php echo get_term_link($category, 'product-category'); ?>"><?php echo $category->name; ?></a>
												<?php
													$args = array(
														'taxonomy'		=> 'product-category',
														'parent'		=> $category->term_id,
														'hide_empty'	=> 0
													);
													$subcategory = get_categories($args);
												?>
												<ul class="submenu third_level">
													<?php foreach ($subcategory as $sub) : ?>
														<?php 
															// Exclude Check
															$exclude = get_field('exclude_nav', 'product-category_'.$sub->term_id);
															if ($exclude == '') :
														?>
															<?php if($sub->name === 'Refills') { ?>
																<li><a href="/refills">Refills</a></li>
															<?php } else { ?>
																<li><a href="<?php echo get_term_link($sub, 'product-category'); ?>"><?php echo $sub->name; ?></a></li>
															<?php } ?>
														<?php endif; ?>
													<?php endforeach; ?>
												</ul>
										<?php endwhile; ?>
											<?php if ($count == $shopCount) : ?>
												<?php if (get_field('additional_shop_navigation', 'options')) : ?>
													<?php while (has_sub_field('additional_shop_navigation', 'options')) : ?>
														<a href="<?php the_sub_field('link_url', 'options'); ?>"><?php the_sub_field('link_title', 'options'); ?></a>
													<?php endwhile; ?>
												<?php endif; ?>
											<?php endif; ?>
											<?php $count++; ?>
									<?php endif; ?>
									</li>
								<?php endwhile; ?>
							<?php endif; ?>
						</ul>
					</li><!-- nav item -->
					
					<?php if (get_field('page_navigation', 'options')) : ?>
						<?php while (has_sub_field('page_navigation', 'options')) : ?>
							<li class="nav_item non_shop">
								<?php 
									$page = get_sub_field('page', 'options');
											
									$childArgs = array(
										'child_of' => $page->ID,
										'meta_key' => 'exclude_nav',
										'meta_value' => '',
										'sort_order' => 'ASC',
										'sort_column' => 'menu_order',
									);
									$children = get_pages($childArgs);
								?>
								<a href="<?php echo get_permalink($page->ID); ?>"><?php echo $page->post_title; ?></a>
								<?php if ($children || $page->ID === 4226) : ?>
								<ul class="submenu second_level">
									<li class="<?php the_sub_field('column_color', 'options'); ?>">
										<ul class="submenu third_level">
											<?php if($page->ID === 4226) { ?>
												<li><a href="<?php the_field('blog_url', 'options'); ?>"><?php the_field('blog_name', 'options'); ?></a></li>
											<?php } ?>
											<?php foreach ($children as $subPage) : ?>
												<?php if (get_field('custom_link', $subPage->ID)){
													$link_url = get_field('custom_link', $subPage->ID);
												} else {
													$link_url = get_permalink($subPage->ID);
												} ?>
												<li><a href="<?php echo $link_url; ?>"><?php echo $subPage->post_title; ?></a></li>
											<?php endforeach; ?>
										</ul>
									</li>
								</ul>
								<?php endif; ?>
							</li><!-- nav item -->
						<?php endwhile; ?>
					<?php endif; ?>
					
					<?php if (get_field('custom_navigation', 'options')) : ?>
						<?php while (has_sub_field('custom_navigation', 'options')) : ?>
							<li class="nav_item">
								<a href="<?php the_sub_field('link_url', 'options'); ?>"><?php the_sub_field('link_title', 'options'); ?></a>
							</li><!-- nav item -->
						<?php endwhile; ?>
					<?php endif; ?>
					
					<li class="nav_item nav_cart top-cart" id="QuidsiCart">
					</li><!-- end cart_button -->
					<li class="nav_item nav_search">
						<button class="search_button js-search_button">
							<img class="search_icon" src="<?php bloginfo('template_url'); ?>/images/search-icon.png" />
						</button>
					</li><!-- end search -->
				</ul><!-- end main_navigation -->
			</nav>
			
		</div>
	</header>
	
	<header id="global_header_mobile">
		<div class="search_bar">
			<div class="container">
				<form class="js-search_form" method="get" id="search" action="<?php bloginfo('url'); ?>">
					<input class="search_input" type="text" value=""  name="s" id="s" onblur="if (this.value == '') {this.value = '<?php echo $search_text; ?>';}" onfocus="if (this.value == '<?php echo $search_text; ?>') {this.value = '';}" placeholder="hi there, what are you looking for?">
					<input class="search_submit" type="submit" name="submit" value="ENTER">
					<i class="fa js-fa close"></i>
					<i class="fa fa-search js-fa search_icon"></i>
				</form>
			</div>
		</div><!-- search_bar -->
		<nav id="js-mobile_menu" class="mobile_menu">
			<?php wp_nav_menu( array( 'container' => false, 'menu' => 43, 'menu_class' => 'header_mobile_menu' ) ); ?>			
		</nav>
		<div class="container">
			<div class="menu_wrap">
				<!--<a href="#js-mobile_menu">-->
					<img src="<?php echo bloginfo('template_url'); ?>/images/hamburger_icon.png" />
				<!--</a>-->
			</div>
			<div class="logo">
				<a href="/"><img src="<?php echo bloginfo('template_url'); ?>/images/logo.png" /></a>
			</div>
			<div class="shop_search">
				<div class="top-cart" id="MobileQuidsiCart"></div>
				<button class="search_button js-search_button">
					<i class="fa fa-search"></i>
				</button>
			</div>
		</div>
	</header>
	<div>
		<div class="fixed_header_spacer"></div>	
	
	<!--<link rel="stylesheet" href="http://www.soap.com/App_Themes/Style/PublishingPartners/MethodPDP.css"
        type="text/css" />
    <script type="text/javascript" src="http://www.soap.com/Javascript/qsPartner.js?ver=20141114"></script><!--Quidsi:MethodPDP.css and qsPartner.js shall be added -->

      <script type="text/javascript">
        var quidsiPartnerInfo = {
            partnerCode: "methodhome", 
            quidsiSite:"www.soap.com" 
        };
      </script>
