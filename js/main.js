jQuery(document).ready(function($){

	var localDev = true;

	if(localDev == true) {
		loadReload();
	}
	
	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}
	
	$('#jcartMenu a').live('click', function(e) {
		if($(this).parent().siblings('#jcartCart').css('display') === 'block') {
			$(this).parent().siblings('#jcartCart').hide();
		} else {
			$(this).parent().siblings('#jcartCart').show();
		}
	});
	
	$('.jcart-close-button').live('click', function(e) {
		$('#jcartCart').hide();
		$('#global_header_mobile #jcartCart').hide();
	});
	
	$(window).load(function(e) {
		//$('#jcart #jcartMenu a').text('');
		
		//$('#cart-placemat').clone().appendTo('#global_header_mobile .top-cart');
		
		if(!isMobile) {
			homepage_hero_animation();
		} else {
			mobile_homepage_hero();
		}
	});
	
	function mobile_homepage_hero() {
		$('.home_hero_content img').css('display', 'inline-block');
		$('.home_hero_content .hero_text').css('opacity', '1');
		$('.home_hero_content .hero_text').css('display', 'inline-block');
	}
	
	function homepage_hero_animation() {
		var image1_height = $('#home_hero_image_1').height();
		var image2_height = $('#home_hero_image_2').height();
		var image3_height = $('#home_hero_image_3').height();
		var image4_height = $('#home_hero_image_4').height();
		
		$('#home_hero_image_4').css('top', image4_height);
		$('#home_hero_image_3').css('top', image3_height);
		$('#home_hero_image_2').css('top', -image2_height);
		$('#home_hero_image_1').css('top', -image1_height);
		
		$('.home_hero_image').css('display', 'block');
		
		var animation_speed = 400;
	
	
		$('#home_hero_image_4').animate({
			top: 0,
			opacity: 0.5,
		}, animation_speed);
		
		$('#home_hero_image_2').delay(animation_speed).animate({
			top: 0,
			opacity: 0.5,
		}, animation_speed);
		
		$('#home_hero_image_3').delay(animation_speed*2).animate({
			top: 0,
			opacity: 0.5,
		}, animation_speed);
		
		$('#home_hero_image_1').delay(animation_speed*3).animate({
			top: 0,
			opacity: 0.5,
		}, animation_speed, function() {
			$('.home_hero_image').animate({ opacity: 0.9 }, animation_speed );
		});
		
		$('#home_hero_image_4').delay(animation_speed*4).animate({
			top: image4_height,
			opacity: 0,
		}, animation_speed);
		
		$('.home_hero_content img').delay(animation_speed*4).fadeIn(animation_speed+300).delay(animation_speed+500).animate({
			marginLeft: 0,
		}, animation_speed*2, function() {
			$('.home_hero_content .hero_text').css('display', 'inline-block');
			$('.home_hero_content .hero_text').animate({opacity: 1}, animation_speed*2);
		});
		
		$('#home_hero_image_3').delay(animation_speed*2+100).animate({
			top: image3_height,
			opacity: 0,
		}, animation_speed);
		
		$('#home_hero_image_2').delay(animation_speed*3+200).animate({
			top: image2_height,
			opacity: 0,
		}, animation_speed);
		
		$('#home_hero_image_1').delay(animation_speed+300).animate({
			top: image1_height,
			opacity: 0,
		}, animation_speed);
		
		
	}
	
	$('.newsletter_signup input[type="text"]').attr('placeholder', 'ENTER E-MAIL ADDRESS');
	$('.lp_form input[type="text"]').attr('placeholder', 'ENTER E-MAIL ADDRESS');
	$('.sign_up_newsletter input[type="text"]').attr('placeholder', 'ENTER E-MAIL ADDRESS');
	$('#global_footer .newsletter_signup input[type="text"]').attr('placeholder', 'ENTER E-MAIL ADDRESS');
	$('.input-group-btn button').text('Sign Up');
	
	$('.accordion .accordion_expand_close').click(function(e) {
		$accordion_content = $(this).parent().siblings('.accordion_content');
		$accordion_icon = $(this).find('a');
		
		$accordion_icon.removeClass('accordion-plus');
		$accordion_icon.removeClass('accordion-minus');
	
		if($accordion_content.css('display') === 'block') {
			$accordion_icon.addClass('accordion-plus');
			$accordion_content.slideUp(400);
		} else {
			$accordion_icon.addClass('accordion-minus');
			$accordion_content.slideDown(400);
		}
	});
	
	$('.watch_more_expand_close').click(function(e) {
		$accordion_content = $('.watch_more_hidden_content');
		$accordion_icon = $(this).find('i');
		
		$accordion_icon.removeClass('fa-plus');
		$accordion_icon.removeClass('fa-minus');
	
		if($accordion_content.css('display') === 'block') {
			$accordion_icon.addClass('fa-plus');
			$accordion_content.slideUp(400);
		} else {
			$accordion_icon.addClass('fa-minus');
			$accordion_content.slideDown(400);
		}
	})
	
	$('.sub_menu_wrap li > a').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
		
	});
	
	$('#global_header_mobile .menu_wrap img').click(function(e) {
		if($('#js-mobile_menu').css('display') === 'block') {
			$('#js-mobile_menu').trigger('close.mm');
		} else {
			$('#js-mobile_menu').trigger('open.mm');
		}
		console.log('Menu');
	});
	
	$('#js-mobile_menu').click(function(e){
		//e.preventDefault();
	});
	
	$('#js-mobile_menu').mmenu({
		position: "left",
		slidingSubmenus: false,
		offCanvas: true,
	}).on("opened.mm", function() {
		//$('html, body').css('overflow', 'hidden');
		$('html, body').attr('style', 'height: 100% !important; overflow: hidden;');
		//$("#global_header").addClass("absolute_menu");
	}).on("close.mm", function() {
		//$('html, body').css('overflow', 'auto');
		$('html, body').attr('style', 'height: auto !important; overflow: auto;');
	});
	
	$('.js-search_button').click(function(){
		openSearch();
	});
	
	$('.js-fa').click(function(){
		openSearch();
	});	
	
	$('.video_play_button, .desktop_video_play_button').click(function(){
		$('.homepage-video').fadeIn(400);
		$('.overlay').fadeIn(400);
		$(this).css('display', 'none');
		$('.close_button').css('display', 'block');
	});
	
	$('.close_button').click(function(){
		$(this).css('display', 'none');
		$('.homepage-video').fadeOut(400);
		$('.overlay').fadeOut(400);
		$('.video_play_button, .desktop_video_play_button').css('display', 'inline-block');
	});
	
	$('.overlay').click(function(){
		$('.close_button').fadeOut(400);
		$(this).fadeOut(400);
		$('.video_play_button').css('display', 'block');
		$('.homepage-video').fadeOut(400);
	});
	
	$('.cleanhappy_video_play_button').click(function(){
		$(this).siblings('.cleanhappy-video').fadeIn(800);
		$(this).siblings('.cleanhappy_overlay').fadeIn(800);
		$(this).css('display', 'none');
		$(this).siblings('.close_button').css('display', 'block');
	});
	
	$('.cleanhappy_close_button').click(function(){
		$(this).css('display', 'none');
		$(this).siblings('.cleanhappy-video').fadeOut(800);
		$(this).siblings('.cleanhappy_overlay').fadeOut(800);
		$(this).siblings('.cleanhappy_video_play_button').css('display', 'block');
	});
	
	$('.cleanhappy_overlay').click(function(){
		$(this).siblings('.cleanhappy_close_button').fadeOut(800);
		$(this).fadeOut(800);
		$(this).siblings('.cleanhappy_video_play_button').css('display', 'block');
		$(this).siblings('.cleanhappy-video').fadeOut(800);
	});
	
	function openSearch() {
		if ($('.js-search_form').hasClass('form_open')) {
			$('.js-search_form').slideUp().removeClass('form_open');
			$('.js-fa').fadeOut();
		} else {
			$('.js-search_form').addClass('form_open').slideDown(function(){
				$('.js-fa').fadeIn();
			});
			
		}	
	};
	
	var count = $('#products_number').val();
	if(count > 0) {
		$('#responsiveTabsDemo').responsiveTabs({
			startCollapsed: 'accordion',
			active: 0,
		}); 
	} else {
		$('#responsiveTabsDemo').responsiveTabs({
			startCollapsed: 'accordion',
			active: 1,
		}); 

	}
	
	$('#responsiveTabsDemo .products_tab').click(function(e) {
		var count = $('#products_number').val();
		$('.search_pagnation .search_count').text(count);
	});
	
	$('#responsiveTabsDemo .articles_tab').click(function(e) {
		var count = $('#articles_number').val();
		$('.search_pagnation .search_count').text(count);
	});
	
	$('.mobile_home_menu .fa').click(function(e) {
		$(this).removeClass('fa-minus');
		$(this).removeClass('fa-plus');
		
		if($(this).siblings('div').css('display') === 'none') {
			$(this).siblings('div').slideDown();
			$(this).addClass('fa-minus');
		} else {
			$(this).siblings('div').slideUp();
			$(this).addClass('fa-plus');
		}
	});
	
	$('.mobile_sign_up_link').click(function(e) {
		e.preventDefault();
		
		if($('.mobile_sign_up').css('display') === 'none') {
			$('.mobile_sign_up').slideDown();
		} else {
			$('.mobile_sign_up').slideUp();
		}
	});
	
	// Mobile JS 
	$('#mobile_sub_nav').change(function(e) {
		var page = $('#mobile_sub_nav option:selected').attr('id');
		window.location.replace(page);
	});
	
});