jQuery(document).ready(function($) {

	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}
	
	$('.additional_image').click(function(e) {
		var image_url;
		if($(this).hasClass('main_image')) {
			image_url = $('#my-item-id option:selected').attr('id');
			var data = $('#my-item-id').data('ddslick');
			$('.product_image .featured_image img').attr('src', data['selectedData']['value']);
		} else {
			image_url = $(this).find('img').attr('src');
			$('.product_image .featured_image img').attr('src', image_url);
		}
	});
	
	$('div.product .quantity_up').click(function(e) {
		var quantity = $('#my-item-qty').val();
		if(quantity < 5) {
			quantity++;
			$('#my-item-qty').val(quantity);
			$('#product_quantity').text(quantity);
		}
	});
	
	$('div.product .quantity_down').click(function(e) {
		var quantity = $('#my-item-qty').val();
		if(quantity > 1) {
			quantity--;
			$('#my-item-qty').val(quantity);
			$('#product_quantity').text(quantity);
		}
	});
	
	$('li.product .quantity_up').live('click', function(e) {
		var quantity = $(this).siblings('#my-item-qty').val();
		if(quantity < 5) {
			quantity++;
			$(this).siblings('#my-item-qty').val(quantity);
			$(this).siblings('#product_quantity').text(quantity);
		}
	});
	
	$('li.product .quantity_down').live('click', function(e) {
		var quantity = $(this).siblings('#my-item-qty').val();
		if(quantity > 1) {
			quantity--;
			$(this).siblings('#my-item-qty').val(quantity);
			$(this).siblings('#product_quantity').text(quantity);
		}
	});
	
	$('#js-product_tabs').responsiveTabs({
	    startCollapsed: 'accordion'
	});
	
	$('.js-product_tab_labels > li > a').hover(function() {
		$(this).trigger('click');
	});
	
	$('#my-item-id-clone').ddslick({
		background: '#fff',
		defaultSelectedIndex: 1,
		onSelected: function(data) {
			var image_url = $('.dd-selected-value').attr('value');
			$('.product_image .featured_image img').attr('src', image_url);
			
			$('#my-item-id option').removeAttr('selected');
			$('#my-item-id option').each(function(e) {
				if($(this).attr('id') == image_url) {
					$(this).attr('selected', 'selected');
				}
			});
		}
	});
	
	$('.featured_collection .expand').click(function(e) {
		console.log('Expanded');
		$collection_content = $('.featured_collection .expanded_content');
		$collection_icon = $(this).find('i');
		
		$collection_icon.removeClass('fa-plus');
		$collection_icon.removeClass('fa-minus');
	
		if($collection_content.css('display') === 'block') {
			$collection_icon.addClass('fa-plus');
			$collection_content.slideUp(400);
		} else {
			$collection_icon.addClass('fa-minus');
			$collection_content.slideDown(400);
		}
	});
	
	
	// Mobile Product Grid
	/*function mobileProductCategory() {
		resized = true;
		$('.tc_box').each(function(e) {
			var row = $(this).attr('data-row_place');
			console.log('Row: '+row);
			if(row == 1 || row == 0) {
				$product_grid = $(this).parent().parent();
				$(this).detach().prependTo($product_grid.find('ul'));
			} else {
				var placement = (row-1)*3-1;
				console.log('Placement: '+placement);
				$product_grid = $(this).parent().parent();
				$(this).detach().insertAfter($product_grid.find('ul li:nth-of-type('+placement+')'));
			}
		});
		
		productGrid();
	}
	
	function desktopProductCategory() {
		resized = false;
		$('.tc_box').each(function(e) {
			var row = $(this).attr('data-row_place');
			var placement = (row-1)*3+1;
			if(row == 0 || row == 1) {
				placement = 1;
			}
			console.log(placement);
			$product_grid = $(this).parent().parent();
			$(this).detach().insertAfter($product_grid.find('ul li:nth-of-type('+placement+')'));
		});
		
		productGrid();
	}
	
	function productGrid() {
		$('.product_grid').each(function(e) {
			var productCounter = 0;
		
			var sub_feature = false;
			if($(this).find('ul').has('.sub_featured_collection').length) {
				if($(window).width() > 600) {
					sub_feature = true;
					productCounter++;
				}
			}
			$(this).find('ul li').each(function(e) {
				$(this).removeClass('grid_start');
				$(this).removeClass('grid_end');
				if($(this).hasClass('tc_box')) {
					if($(this).hasClass('tc_box_one')) {
						productCounter++;
						
						if($(window).width() <= 600 || isMobile) {
							$(this).addClass('grid_start');
						}
					} else {
						$(this).addClass('grid_end');
						productCounter = productCounter + 2;
					}
				} else {
					$(this).removeClass('grid_start');
					$(this).removeClass('grid_end');
					if($(window).width() <= 600 || isMobile) {
						if(productCounter%2 == 0) {
							$(this).addClass('grid_start');
						} else if(productCounter%2 == 1) {
							$(this).addClass('grid_end');
						}
					} else {
						if(sub_feature) {
							if(productCounter%3 == 2 && productCounter > 4) {
								$(this).addClass('grid_start');
							} else if(productCounter == 2 || productCounter == 4 || productCounter%3 == 1 && productCounter != 1 && productCounter != 3) {
								$(this).addClass('grid_end');
							}
						} else {
							if(productCounter%3 == 0) {
								$(this).addClass('grid_start');
							} else if(productCounter%3 == 2) {
								$(this).addClass('grid_end');
							}
						}
					}
					productCounter++;
				}
			});
		});
	}
	
	var resized = false;
	var hasFilters = $('.product_sidebar').has('.filter_sidebar').length;
	$(window).resize(function(e) {
		if($(window).width() <= 600 || isMobile) {
			if(!resized) {
				//mobileProductCategory();
			}
		} else {
			if(resized) {
				//desktopProductCategory();
			}
		}
	});
	
	if($(window).width() <= 600 || isMobile) {
		//mobileProductCategory();
	} else {
		//desktopProductCategory();
	}*/
	
	
	
	//Quicksand
    var $data = $('.product_grid ul');
	var $productData = $data.clone();
	
	$('.filter_sidebar .scents li').click(function(e) {
		if(!$(this).hasClass('filter_disabled')) {
			if($(this).find('input[type="checkbox"]').prop('checked')) {
				$(this).find('input[type="checkbox"]').removeAttr('checked');
			} else {
				$('.filter_sidebar .scents li input[type="checkbox"]').removeAttr('checked');
				$(this).find('input[type="checkbox"]').attr('checked', 'checked');
			}
			
			getAllFilters();
		}
	});
	
	$('.filter_sidebar .colors li').click(function(e) {
		if(!$(this).hasClass('filter_disabled')) {
			if($(this).find('input[type="checkbox"]').prop('checked')) {
				$(this).find('input[type="checkbox"]').removeAttr('checked');
			} else {
				$('.filter_sidebar .colors li input[type="checkbox"]').removeAttr('checked');
				$(this).find('input[type="checkbox"]').attr('checked', 'checked');
			}
			
			getAllFilters();
		}
	});
	
	$('#product_sub_nav').change(function(e) {
		var page = $('#product_sub_nav option:selected').attr('id');
		window.location.replace(page);
	});
	
	$('#product_sort').change(function(e) {
		var productCategory = $('#product_sort option:selected').attr('value');
		
		$('.filter_sidebar .scents li input[type="checkbox"]').removeAttr('checked');
		$('.filter_sidebar .colors li input[type="checkbox"]').removeAttr('checked');
		
		if(productCategory != 'all') {
			$('.filter_sidebar li input[type="checkbox"]').each(function(e) {
				if($(this).val() == productCategory) {
					$(this).attr('checked', 'checked');
				}
			});
		}
		quickSandFilter('.'+productCategory, 700);
	});
	
	function getAllFilters() {
		$('#product_sort option').removeAttr('selected');
		
		var productCategory = '';
		$('.filter_sidebar li').each(function(e) {
			if($(this).find('input[type="checkbox"]').prop('checked')) {
				var cat = $(this).find('input[type="checkbox"]').val()
				productCategory += '.' + cat;
				$('#product_sort option').each(function(e) {
					if($(this).val() == cat) {
						$(this).attr('selected', 'selected');
					}
				});
			}
		});
		
		
		if(productCategory === '') {
			productCategory = 'all';
		} else {
			
		}
		
		console.log(productCategory);
		quickSandFilter(productCategory, 700);
	}
	
	function quickSandFilter(productCategory, animationSpeed) {
		var $filter;
		
		if (productCategory === 'all') {
			$filter = $productData.find('.product, .tc_box, .sub_featured_collection');
		} else {
			$filter = $productData.find(productCategory);
		}
		//console.log($filter);
		
		$data.quicksand($filter, {
			useScaling: false,
			duration: animationSpeed,
			easing: 'easeInOutQuad',
			adjustHeight: true,
			atomic: true
		}, filterMargins(productCategory));
	}
	
	function filterMargins(category) {
		if(category === 'all') {
			$productData.find('.product').removeClass('filter_grid_start');
			$productData.find('.product').removeClass('filter_grid_end');
			$productData.find('.product').removeClass('filter_grid_middle');
		} else {
			$productData.find(category).each(function(e) {
				if(e%3===0) { 
					$(this).addClass('filter_grid_start');
				} else if(e%3===2) { 
					$(this).addClass('filter_grid_end');
				} else {
					$(this).addClass('filter_grid_middle');
				}
			});
		}
	}
	
	function disableFilters() {
		$('.filter_sidebar .filters ul li').each(function(e) {
			var value = $(this).find('input[type="checkbox"]').val();
			var hasValue = false;
			$productData.find('.product').each(function(e) {
				if($(this).hasClass(value)) {
					hasValue = true;
				}
			});
			
			if(!hasValue) {
				$(this).addClass('filter_disabled');
				$(this).find('input[type="checkbox"]').attr('disabled', 'disabled');
			}
		});
		
		$('#product_sort option').each(function(e) {
			var value = $(this).val();
			var hasValue = false;
			$productData.find('.product').each(function(e) {
				if($(this).hasClass(value)) {
					hasValue = true;
				}
			});
			
			if(!hasValue) {
				$(this).addClass('filter_disabled');
				$(this).attr('disabled', 'disabled');
			}
		});
	}
	
	disableFilters();

	try {
		if(typeof filter !== undefined) {
			quickSandFilter(filter, 0);
		}
	} catch(e) {
		//console.log(e);
	}
	
	$('#clear_filters').click(function(e) {
		$('.filter_sidebar .scents li input[type="checkbox"]').removeAttr('checked');
		$('.filter_sidebar .colors li input[type="checkbox"]').removeAttr('checked');
		
		$('#product_sub_nav option').removeAttr('selected');
		
		quickSandFilter('all', 700);
	});
});