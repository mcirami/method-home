
// WHEN THE DOCUMENT IS READY
$(function(){

	/**********************************************************************
	Tooltips based on Wayfarer Tooltip 1.0.2
	(c) 2006-2009 Abel Mohler
	http://www.wayfarerweb.com/wtooltip.php
	**********************************************************************/

	( function( $ ) {
		$.fn.jcartTooltip = function( o, callback ) {
			o = $.extend( {
				content: null,
				follow: true,
				auto: true,
				fadeIn: 0,
				fadeOut: 0,
				appendTip: document.body,
				offsetY: 25,
				offsetX: -10,
				style: {},
				id: 'jcart-tooltip'
			}, o || {});

			if ( !o.style && typeof o.style != "object" )
				{
				o.style = {}; o.style.zIndex = "1000";
				}
			else
				{
				o.style = $.extend( {}, o.style || {});
			}

			o.style.display = "none";
			o.style.position = "absolute";

			var over = {};
			var maxed = false;
			var tooltip = document.createElement( 'div' );

            tooltip.id = o.id;

			for ( var p in o.style ) { tooltip.style[p] = o.style[p]; }

			function fillTooltip( condition ) { if ( condition ) { $( tooltip ).html( o.content ); }}

			fillTooltip( o.content && !o.ajax );
			$( tooltip ).appendTo( o.appendTip );

			return this.each( function() {
				this.onclick = function( ev ) {
					function _execute() {
						var display;
						if ( o.content )
							{
							display = "block";
							}
						else
							{
							display = "none";
							}
						if ( display == "block" && o.fadeIn )
							{
							$( tooltip ).fadeIn( o.fadeIn );

							setTimeout(function(){
								$( tooltip ).fadeOut( o.fadeOut );
								}, 1000);
							}
						}
					_execute();
					};

				this.onmousemove = function( ev ) {
					var e = ( ev ) ? ev : window.event;
					over = this;
					if ( o.follow ) {
						var scrollY = $( window ).scrollTop();
						var scrollX = $( window ).scrollLeft();
						var top = e.clientY + scrollY + o.offsetY;
						var left = e.clientX + scrollX + o.offsetX;
						var maxLeft = $( window ).width() + scrollX - $( tooltip ).outerWidth();
						var maxTop = $( window ).height() + scrollY - $( tooltip ).outerHeight();
						maxed = ( top > maxTop || left > maxLeft ) ? true : false;

						if ( left - scrollX <= 0 && o.offsetX < 0 )
							{
							left = scrollX;
							}
						else if ( left > maxLeft )
							{
							left = maxLeft;
							}
						if ( top - scrollY <= 0 && o.offsetY < 0 )
							{
							top = scrollY;
							}
						else if ( top > maxTop )
							{
							top = maxTop;
							}

						tooltip.style.top = top + "px";
						tooltip.style.left = left + "px";
						}
					};

				this.onmouseout = function() {
					$( tooltip ).css('display', 'none');
				};



			});
		};
	})( jQuery );
	
	$('#jcart').ready(function() {
		if( window.location.href.indexOf("/shop/checkout") == -1 ) {
			// SEND ITEM INFO VIA POST TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
			$.post('/jcart-relay.php?pad=no', { "jcartReadyAjaxCall" : "true" }, function(data) {
				// REPLACE EXISTING CART HTML WITH UPDATED CART HTML
				$('#jcart').html(data);
				$('.jcart-hide').remove();

				// add submit handler to form
				$('#jcart-inner').submit( function(event){ jcartSubmit(event);} );

				});
		}
	});	



	// SHOW A TOOLTIP AFTER VISITOR CLICKS THE ADD-TO-CART
	// IN CASE THE CART IS OFF SCREEN
	$('.jcart input[name="my-add-button"]').jcartTooltip({content: 'Item added!', fadeIn: 500, fadeOut: 350 });

	// CHECK IF THERE ARE ANY ITEMS IN THE CART
	var cartHasItems = $('td.jcart-item-qty').html();
	if(cartHasItems === null)
		{
		// DISABLE THE PAYPAL CHECKOUT BUTTON
		$('#jcart-paypal-checkout').attr('disabled', 'disabled');
		}

	// HIDE THE UPDATE AND EMPTY BUTTONS SINCE THESE ARE ONLY USED WHEN JAVASCRIPT IS DISABLED
	$('.jcart-hide').remove();

	// DETERMINE IF THIS IS THE CHECKOUT PAGE BY CHECKING FOR HIDDEN INPUT VALUE
	// SENT VIA AJAX REQUEST TO jcart.php WHICH DECIDES WHETHER TO DISPLAY THE CART CHECKOUT BUTTON OR THE PAYPAL CHECKOUT BUTTON BASED ON ITS VALUE
	// WE NORMALLY CHECK AGAINST REQUEST URI BUT AJAX UPDATE SETS VALUE TO jcart-relay.php
	var isCheckout = $('#jcart-is-checkout').val();

	// IF THIS IS NOT THE CHECKOUT THE HIDDEN INPUT DOESN'T EXIST AND NO VALUE IS SET
	if (isCheckout !== 'true') { isCheckout = 'false'; }

	// submit button click event - not used
	// $('#jcart-checkout').live('click', function(){	});
 	
 	// Added buy euro to add multiple items to cart at once
	// WHEN AN ADD *ALL* -TO-CART FORM IS SUBMITTED

	$('form.jcart-addall').submit(function(){

		var total = $('#total').val();
		var itemQty = 1;
		var itemAdd = 1;
		$(document.getElementById('cart-placemat')).addClass("open");
		$.ajax({
		   type: "POST",
		   url: "/jcart-relay.php?pad=no",
		   data: $('#add-product').serialize(),
			  success: function(data){
				 $('#jcart').html(data);
				 $('a#add_all').parents('.flag-wrapper').removeClass('flag-waiting');
			 }
		 });

		$('.jcart-hide').remove();
		$("#jcartCart").show();

		// PREVENT DEFAULT FORM ACTION
		return false;

	 });


	// WHEN AN ADD-TO-CART FORM IS SUBMITTED
	$('form.jcart').live('submit', function(){

		// GET INPUT VALUES FOR USE IN AJAX POST
		var found;
		var itemId;
		found = $(this).find('input[name=my-item-id]');
		if (found.length != 0) {
			itemId = found.val();
		} 
		found = $(this).find('select[name=my-item-id]');
		if (found.length != 0) {
			itemId = found.val();
		} 		
		
		var formType = $(this).find('input[name=my-add-button-type]').val();
		var itemPrice = $(this).find('input[name=my-item-price]').val();
		var itemName = $(this).find('input[name=my-item-name]').val();
		var itemThumb = $(this).find('input[name=my-item-thumb]').val();
		var itemPath = $(this).find('input[name=my-item-path]').val();
		var itemTrackingLocation = "test";
		//var itemTrackingLocation = $(this).find('input[name=method-add-location]').val();

		
		var itemQty;
		found = $(this).find('input[name=my-item-qty]');
		if (found.length != 0) {
			itemQty = found.val();
		} 
		found = $(this).find('select[name=my-item-qty]');
		if (found.length != 0) {
			itemQty = found.val();
		} 		
		
		var itemAdd = $(this).find('input[name=my-add-button]').val();

		// RECORD ADD CART ANALYTICS EVENT
		try {
			_gaq.push(['_trackEvent', 'Cart-Add', itemId, itemTrackingLocation, 1]);
		} catch (e) {  }

		// SEND ITEM INFO VIA POST TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
		quidsiPartner.addToCart(itemId,itemQty);

		// PREVENT DEFAULT FORM ACTION
		return false;

		});



	// WHEN THE VISITOR HITS THEIR ENTER KEY
	// THE UPDATE AND EMPTY BUTTONS ARE ALREADY HIDDEN
	// BUT THE VISITOR MAY UPDATE AN ITEM QTY, THEN HIT THEIR ENTER KEY BEFORE FOCUSING ON ANOTHER ELEMENT
	// THIS MEANS WE'D HAVE TO UPDATE THE ENTIRE CART RATHER THAN JUST THE ITEM WHOSE QTY HAS CHANGED
	// PREVENT ENTER KEY FROM SUBMITTING FORM SO USER MUST CLICK CHECKOUT OR FOCUS ON ANOTHER ELEMENT WHICH TRIGGERS CHANGE FUNCTION BELOW
	$('#jcart').keydown(function(e) {

		// IF ENTER KEY
		if(e.which == 13) {

		// PREVENT DEFAULT ACTION
		return false;
		}
	});


	// JQUERY live METHOD MAKES FUNCTIONS BELOW AVAILABLE TO ELEMENTS ADDED DYNAMICALLY VIA AJAX

	// WHEN A REMOVE LINK IS CLICKED
	$('#jcart a.jcart-remove').live('click', function(){

		// GET THE QUERY STRING OF THE LINK THAT WAS CLICKED
		var queryString = $(this).attr('href');
		queryString = queryString.split('=');

		// THE ID OF THE ITEM TO REMOVE
		var removeId = queryString[1];

		// RECORD REMOVE CART ANALYTICS EVENT
		try {
			_gaq.push(['_trackEvent', 'Cart-Remove', removeId, 'cart', 1]);
		} catch (e) {  }

		// SEND ITEM ID VIA GET TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
		$.get('/jcart-relay.php?pad=no', { "jcart_remove": removeId, "jcart_is_checkout":  isCheckout },
			function(data) {

			// REPLACE EXISTING CART HTML WITH UPDATED CART HTML
			$('#jcart').html(data);
			$('.jcart-hide').remove();
			
			// add submit handler to shopping cart form
			$('#jcart-inner').submit( function(event){ jcartSubmit(event);} );
					
			});

		// PREVENT DEFAULT LINK ACTION
		return false;
	});


	// WHEN AN ITEM QTY CHANGES
	// CHANGE EVENT IS NOT CURRENTLY SUPPORTED BY LIVE METHOD
	// STILL WORKS IN MOST BROWSERS, BUT NOT INTERNET EXPLORER
	// INSTEAD WE SIMULATE THE CHANGE EVENT USING KEYUP AND SET A DELAY BEFORE UPDATING THE CART
	$('#jcart input[type="text"]').live('keyup', function(){

		// GET ITEM ID FROM THE ITEM QTY INPUT ID VALUE, FORMATTED AS jcart-item-id-n
		var updateId = $(this).attr('id');
		updateId = updateId.split('-');

		// THE ID OF THE ITEM TO UPDATE
		updateId = updateId[3];

		// GET THE NEW QTY
		var updateQty = $(this).val();

		// AS LONG AS THE VISITOR HAS ENTERED A QTY
		if (updateQty !== '')
			{

			// RECORD CART QUANTITY CHANGE ANALYTICS EVENT
			try {
				_gaq.push(['_trackEvent', 'Cart-Chng-Qty', updateId, 'cart', 1]);
			} catch (e) {  }

			// UPDATE THE CART ONE SECOND AFTER KEYUP
			var updateDelay = setTimeout(function(){

				// SEND ITEM INFO VIA POST TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
				$.post('/jcart-relay.php?pad=no', { "item_id": updateId, "item_qty": updateQty, "jcart_update_item": 'update', "jcart_is_checkout": isCheckout }, function(data) {

					// REPLACE EXISTING CART HTML WITH UPDATED CART HTML
					$('#jcart').html(data);
					$('.jcart-hide').remove();
					
					// add submit handler to shopping cart form
					$('#jcart-inner').submit( function(event){ jcartSubmit(event);} );
					});

				}, 1000);
			}

		// IF THE VISITOR PRESSES ANOTHER KEY BEFORE THE TIMER HAS EXPIRED, CLEAR THE TIMER
		// THE NEW KEYDOWN RESULTS IN A NEW KEYUP, TRIGGERING THE KEYUP FUNCTION AGAIN AND RESETTING THE TIMER
		// REPEATS UNTIL THE USER DOES NOT PRESS A KEY BEFORE THE TIMER EXPIRES IN WHICH CASE THE AJAX POST IS EXECUTED
		// THIS PREVENTS THE CART FROM BEING UPDATED ON EVERY KEYSTROKE
		$(this).keydown(function(){
			window.clearTimeout(updateDelay);
			});
		});
		
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	// Dupe for jcartCheckout - TODO refactor; make dupes one.
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
		
	// WHEN THE VISITOR HITS THEIR ENTER KEY
	// THE UPDATE AND EMPTY BUTTONS ARE ALREADY HIDDEN
	// BUT THE VISITOR MAY UPDATE AN ITEM QTY, THEN HIT THEIR ENTER KEY BEFORE FOCUSING ON ANOTHER ELEMENT
	// THIS MEANS WE'D HAVE TO UPDATE THE ENTIRE CART RATHER THAN JUST THE ITEM WHOSE QTY HAS CHANGED
	// PREVENT ENTER KEY FROM SUBMITTING FORM SO USER MUST CLICK CHECKOUT OR FOCUS ON ANOTHER ELEMENT WHICH TRIGGERS CHANGE FUNCTION BELOW
	$('#jcartCheckout').keydown(function(e) {

		// IF ENTER KEY
		if(e.which == 13) {

		// PREVENT DEFAULT ACTION
		return false;
		}
	});


	// JQUERY live METHOD MAKES FUNCTIONS BELOW AVAILABLE TO ELEMENTS ADDED DYNAMICALLY VIA AJAX

	// WHEN A REMOVE LINK IS CLICKED
	$('#jcartCheckout a.jcart-remove').live('click', function(){

		// GET THE QUERY STRING OF THE LINK THAT WAS CLICKED
		var queryString = $(this).attr('href');
		queryString = queryString.split('=');

		// THE ID OF THE ITEM TO REMOVE
		var removeId = queryString[1];

		// SEND ITEM ID VIA GET TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
		$.get('/jcart-relay.php?pad=no', { "jcart_remove": removeId, "jcart_is_checkout":  isCheckout },
			function(data) {

			// REPLACE EXISTING CART HTML WITH UPDATED CART HTML
			$('#jcartCheckout').html(data);
			$('.jcart-hide').remove();

			$('#jcart-inner').submit( function(event){ jcartSubmit(event);} );

			});

		// PREVENT DEFAULT LINK ACTION
		return false;
	});


	// WHEN AN ITEM QTY CHANGES
	// CHANGE EVENT IS NOT CURRENTLY SUPPORTED BY LIVE METHOD
	// STILL WORKS IN MOST BROWSERS, BUT NOT INTERNET EXPLORER
	// INSTEAD WE SIMULATE THE CHANGE EVENT USING KEYUP AND SET A DELAY BEFORE UPDATING THE CART
	$('#jcartCheckout input[type="text"]').live('keyup', function(){

		// GET ITEM ID FROM THE ITEM QTY INPUT ID VALUE, FORMATTED AS jcart-item-id-n
		var updateId = $(this).attr('id');
		updateId = updateId.split('-');

		// THE ID OF THE ITEM TO UPDATE
		updateId = updateId[3];

		// GET THE NEW QTY
		var updateQty = $(this).val();

		// AS LONG AS THE VISITOR HAS ENTERED A QTY
		if (updateQty !== '')
			{
			// UPDATE THE CART ONE SECOND AFTER KEYUP
			var updateDelay = setTimeout(function(){

				// SEND ITEM INFO VIA POST TO INTERMEDIATE SCRIPT WHICH CALLS jcart.php AND RETURNS UPDATED CART HTML
				$.post('/jcart-relay.php?pad=no', { "item_id": updateId, "item_qty": updateQty, "jcart_update_item": 'update', "jcart_is_checkout": isCheckout }, function(data) {

					// REPLACE EXISTING CART HTML WITH UPDATED CART HTML
					$('#jcartCheckout').html(data);
					$('.jcart-hide').remove();

					// add submit handler to shopping cart form
					//  NOTE: jQuery 1.3 can't add .live() listeners on submit events, 
					//        so we manually add the event every ajax load
					$('#jcart-inner').submit( function(event){ jcartSubmit(event);} );

					});

				}, 1000);
			}

		// IF THE VISITOR PRESSES ANOTHER KEY BEFORE THE TIMER HAS EXPIRED, CLEAR THE TIMER
		// THE NEW KEYDOWN RESULTS IN A NEW KEYUP, TRIGGERING THE KEYUP FUNCTION AGAIN AND RESETTING THE TIMER
		// REPEATS UNTIL THE USER DOES NOT PRESS A KEY BEFORE THE TIMER EXPIRES IN WHICH CASE THE AJAX POST IS EXECUTED
		// THIS PREVENTS THE CART FROM BEING UPDATED ON EVERY KEYSTROKE
		$(this).keydown(function(){
			window.clearTimeout(updateDelay);
			});
		});		


	// END THE DOCUMENT READY FUNCTION
	});



// update google analytics on cart changes
function cartAnalytics() {
	var sessID = "1vuninkouq7hdsijs4co5899q6";

	try {
		var cartForm = document.getElementById("jcart-inner");
		if (cartForm) {
			var prodIdList = cartForm.elements["hdnProdList"].value.split(",");
			var subTotal = cartForm.elements["method_subtotal"].value;
		}
		// get GA transaction for updating
		_gaq.push(['_addTrans',sessID, 'methodhome' , subTotal]);

		var prodName, prodPrice, prodQty;
		if (prodIdList && prodIdList.length > 0) {
			for (var i=0;i<prodIdList.length;i++) {

				prodName = document.getElementById("method-item-name-" + prodIdList[i]).value;
				prodPrice = document.getElementById("method-item-price-" + prodIdList[i]).value;
				prodQty = document.getElementById("jcart-item-id-"+ prodIdList[i]).value;
				//console.log(prodName +"-"+ prodQty +"-"+ prodPrice);
				_gaq.push(['_addItem', sessID, prodIdList[i], prodName,'', prodPrice, prodQty]);
			}
		}
		// set custom var + events
		_gaq.push(['_setCustomVar', 2, 'comm_act', 'checkout-user', 2]);
		_gaq.push(['_trackEvent', 'Checkout', 'Checkout']);
		// send trans info to GA
		_gaq.push(['_trackTrans']);
	} catch (e) {
		//console.log(e);
	}
}

// SUBMIT EVENT HANDLER FOR JCART FORM
function jcartSubmit(event) {
	try {
		var pauseMS = 500;		// submit pause in milliseconds
		// cancel the form submit
		event.preventDefault();
		// remove this event handler
		$('#jcart-inner').unbind('submit');
		// spinner
		//$('#jcart-throbber').addClass('flag-throbber');

		// Ajax call to remove all cart data from the session
		$.post('/jcart-empty.php', {  }, function(data) { });

		// google ecomm tracking pixels (take a bit to load)
		//cartAnalytics();
		// submit the form after a delay
		setTimeout("$('#jcart-inner').submit()", pauseMS);
	} catch (e) {}	
}