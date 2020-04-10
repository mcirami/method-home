<?php
/**
 * The template for displaying the footer.
 *
 * @package boiler
 */
?>

	<footer id="global_footer" class="site_footer">
		<div class="container">
				<div class="footer_menu_container">
					<?php wp_nav_menu( array( 'theme_location' => 'secondary', 'container' => false, 'menu_class' => 'footer_menu' ) ); ?>
					
					<div class="social_media">
						<h3>get to know us</h3>
							<div class="social_media_container">
								<a class="twitter" title="Twitter" href="<?php the_field('twitter', 'option'); ?>" target="_blank">twitter</a>
								<a class="facebook" title="Facebook" href="<?php the_field('facebook', 'option'); ?>" target="_blank">facebook</a>
								<a class="instagram" title="Instagram" href="<?php the_field('instagram', 'option'); ?>" target="_blank">instagram</a>
								<a class="pinterest" title="Pinterest" href="<?php the_field('pinterest', 'option'); ?>" target="_blank">pinterest</a>
							</div>
					</div>
			
					<div class="newsletter_signup">
						<h3>newsletter</h3>
							<p>get the first look at limited edition products, special coupons, green news and more&#8230;</p>
							<?php echo do_shortcode('[sailthru_widget sailthru_list="mailing_list"]'); ?>
					</div>
				</div>
			
		
		</div>
		
	</footer>
	
	<div class="footer_copy">
		<p class="copy">&copy; <?php echo date('Y'); ?> method products, pbc. all rights reserved. <a href="<?php the_field('privacy_link','option'); ?>">see our privacy policy</a> and <a href="<?php the_field('terms_link','option'); ?>">terms of use</a>.</p>
		
		<div class="footer_copy_mobile">
			<p class="mobile_copy">&copy; <?php echo date('Y'); ?> <?php bloginfo('site_title'); ?>, products, pbc | <a href="<?php the_field('privacy_link','option'); ?>">privacy</a> | <a href="<?php the_field('terms_link','option'); ?>">terms</a> | <a href="<?php the_field('contact_link','option'); ?>">contact</a> | <a href="<?php the_field('faq_link','option'); ?>">FAQ</a></p>
		</div>
	</div>
	</div>

<?php wp_footer(); ?>

<script type="text/javascript">
    var quidsiPartnerInfo = {
        partnerCode: null,
        quidsiSite: "www.soap.com"
    }; //Quidsi:quidsiPartnerInfo this should be added to all pages of Method site 
    
    var $ = jQuery;

    jQuery(document).ready(function () {

        // login lightbox for favorite products
        $('li.please-login a').click(function (event) {
            event.preventDefault();
            Shadowbox.open({
                content: this.href,
                player: "iframe",
                title: "",
                height: 500,
                width: 750
            });
        });


        // epantry homepage signup
	 $('.btn-go-vip').click( function(e) {
   	 e.preventDefault();
    	var url = 'https://www.epantry.com/method?utm_medium=referral&utm_campaign=methodhome&source=methodlty&e=' + $('#email').val();
    	window.location = url;
	 });
	    $('#email').keypress(function(e) {
        if(e.which == 13) {
            $('.btn-go-vip').click();
        }
    	});


        $('.links .addthis').show();

        // show / hide the flags (default)
        $('.flag-favorites-656').show();

        var sku_images = new Array();
        var sku_names = new Array();
        var sku_prices = new Array();
        var sku_thumbs = new Array();
        var sku_paths = new Array();
        var sku_bundle_ids = new Array();
        //Quidsi:the following snippet shall be added to Method site.
        var skuIdMapping = [13, 17, 91, 89, 90, 534, 656, 772];
        quidsiPartner.getItemsPrice(skuIdMapping, function (data) {
            sku_prices = data;
        });
//                                                    
      
        //=============================

        // bundles
        if ($('.tabBundle').length > 0) {
            $.each(sku_bundle_ids[656], function (index, value) {
                $('#bundle-item-' + value).show();
            });
        }


        $('#my-item-id').change(function () {

            var selected_sku_node_id;

            selected_sku_node_id = $('#my-item-id :selected').attr('id').split("scent-id-")[1];
            $('#product-main-image').attr("src", sku_images[selected_sku_node_id]);
            $('#my-item-name').val(sku_names[selected_sku_node_id]);
            $('#my-item-price').val(sku_prices[selected_sku_node_id]);
            $("#product-detail-price").text("$" + sku_prices[selected_sku_node_id]); //Quidsi:after adding this line of code, the price on top right will be changing when different sku is selected.No need to add this if the price shall remain unchanged.
            $('#my-item-thumb').val(sku_thumbs[selected_sku_node_id]);
            $('#my-item-path').val(sku_paths[selected_sku_node_id]);

            //bundles
            $('.tabDiv .scaleInner span.bundle-items').hide();
            $.each(sku_bundle_ids[selected_sku_node_id], function (index, value) {
                $('#bundle-item-' + value).show();
            });


            // show / hide the flags
            $('#product-top-right ul.links li.flag').hide();
            $('.flag-favorites-' + selected_sku_node_id).show();

            // if not logged in change the href in the sign up link for shadowbox
            $("li.please-login a").each(function () {
                var new_url;
                var just_fragrance = sku_paths[selected_sku_node_id].replace(/.+\?/g, "");
                if (this.href.indexOf("arg=") != -1) new_url = this.href.replace(/arg=.+/g, "arg=" + just_fragrance);
                else new_url = this.href + "&arg=" + just_fragrance;
                $("li.please-login a").attr('href', new_url);
            });


        });

        $('#addProdInfo').click(function () {

            stm = $('#adProdD').css('display');

            if (stm == 'none') {

                $('#adProdD').slideDown('fast');
                $('#plusMore').css('background-position', '0 -9px');

            } else {

                $('#adProdD').hide();
                $('#plusMore').css('background-position', '0 0');

            }

        });

    });

</script>

<script type="text/javascript" src="<?php bloginfo('template_url') ?>/PDPTest_files/jcart-javascript.js"></script>
<!--<script type="text/javascript">
    var _siteSection = "shop";
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-917236-16']);
    _gaq.push(['_setCustomVar', 1, 'auth', 'anon', 2]);
    _gaq.push(['_setCustomVar', 3, 'content_group', _siteSection, 3]);
    _gaq.push(['_trackPageview']);
    (function () { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();
</script>
<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 1023541737;
	var google_conversion_language = "en";
	var google_conversion_format = "3";
	var google_conversion_color = "666666";
	var google_conversion_label = "B0I6CIvZmAIQ6YOI6AM";
	var google_conversion_value = 0;
	/* ]]> */
</script>-->
<script type="text/javascript" src="<?php bloginfo('template_url') ?>/PDPTest_files/conversion.js"></script>
<script type="text/javascript" src="http://www.soap.com/javascript/qsPartner.js"></script>
<!-- <script type="text/javascript" src="<?php bloginfo('template_url') ?>/js/qsPartner.js"></script> -->

</body>
</html>