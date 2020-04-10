// $Id: cufon-drupal.js,v 1.1 2009/07/13 21:41:46 eads Exp $

if(!$.browser.msie){ // disable cufon for IE since it conflicts with shadowbox

// Initialize Cufon based on Drupal settings
for (o in Drupal.settings.cufonSelectors) { 
  s = Drupal.settings.cufonSelectors[o];
  Cufon.replace(s.selector, s.options)
}

// Work around Internet Explorer rendering delay
Cufon.now();
};
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/* jQuery Carousel 0.9.2
Copyright 2008-2009 Thomas Lanciaux and Pierre Bertet.
This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
;(function($){$.fn.carousel=function(params){var params=$.extend({direction:"horizontal",loop:false,dispItems:1,pagination:false,paginationPosition:"inside",nextBtn:'<a role="button">Next</a>',prevBtn:'<a role="button">Previous</a>',btnsPosition:"inside",nextBtnInsert:"appendTo",prevBtnInsert:"prependTo",nextBtnInsertFn:false,prevBtnInsertFn:false,autoSlide:false,autoSlideInterval:3000,delayAutoSlide:false,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:"normal",equalWidths:"true",verticalMargin:0,callback:function(){},useAddress:false,adressIdentifier:"carousel",tabLabel:function(tabNum){return tabNum;}},params);if(params.btnsPosition=="outside"){params.prevBtnInsert="insertBefore";params.nextBtnInsert="insertAfter";}
params.delayAutoSlide=params.delayAutoSlide||params.autoSlideInterval;return this.each(function(){var env={$elts:{},params:params,launchOnLoad:[]};env.$elts.carousel=$(this).addClass("js");env.$elts.content=$(this).children().css({position:"absolute","top":0});env.$elts.wrap=env.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow:"hidden",position:"relative"});env.steps={first:0,count:env.$elts.content.children().length};env.steps.last=env.steps.count-1;if($.isFunction(env.params.prevBtnInsertFn)){env.$elts.prevBtn=env.params.prevBtnInsertFn(env.$elts);}else{env.$elts.prevBtn=$(params.prevBtn)[params.prevBtnInsert](env.$elts.carousel);}
if($.isFunction(env.params.nextBtnInsertFn)){env.$elts.nextBtn=env.params.nextBtnInsertFn(env.$elts);}else{env.$elts.nextBtn=$(params.nextBtn)[params.nextBtnInsert](env.$elts.carousel);}
env.$elts.nextBtn.addClass("carousel-control next carousel-next");env.$elts.prevBtn.addClass("carousel-control previous carousel-previous");initButtonsEvents(env);if(env.params.pagination){initPagination(env);}
initAddress(env);$(function(){var $items=env.$elts.content.children();var $maxHeight=0;$items.each(function(){$item=$(this);$itemHeight=$item.outerHeight();if($itemHeight>$maxHeight){$maxHeight=$itemHeight;}});if(env.params.verticalMargin>0){$maxHeight=$maxHeight+env.params.verticalMargin;}
$items.height($maxHeight);var $firstItem=env.$elts.content.children(":first");env.itemWidth=$firstItem.outerWidth();if(params.direction=="vertical"){env.contentWidth=env.itemWidth;}else{if(params.equalWidths){env.contentWidth=env.itemWidth*env.steps.count;}else{env.contentWidth=(function(){var totalWidth=0;env.$elts.content.children().each(function(){totalWidth+=$(this).outerWidth();});return totalWidth;})();}}
env.$elts.content.width(env.contentWidth);env.itemHeight=$maxHeight;if(params.direction=="vertical"){env.$elts.content.css({height:env.itemHeight*env.steps.count+"px"});env.$elts.content.parent().css({height:env.itemHeight*env.params.dispItems+"px"});}else{env.$elts.content.parent().css({height:env.itemHeight+"px"});}
updateButtonsState(env);$.each(env.launchOnLoad,function(i,fn){fn();});if(env.params.autoSlide){window.setTimeout(function(){env.autoSlideInterval=window.setInterval(function(){goToStep(env,getRelativeStep(env,"next"));},env.params.autoSlideInterval);},env.params.delayAutoSlide);}});});};function initButtonsEvents(env){env.$elts.nextBtn.add(env.$elts.prevBtn).bind("enable",function(){var $this=$(this).unbind("click").bind("click",function(){goToStep(env,getRelativeStep(env,($this.is(".next")?"next":"prev")));stopAutoSlide(env);}).removeClass("disabled");if(env.params.combinedClasses){$this.removeClass("next-disabled previous-disabled");}}).bind("disable",function(){var $this=$(this).unbind("click").addClass("disabled");if(env.params.combinedClasses){if($this.is(".next")){$this.addClass("next-disabled");}else if($this.is(".previous")){$this.addClass("previous-disabled");}}}).hover(function(){$(this).toggleClass("hover");});};function initPagination(env){env.$elts.pagination=$('<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>')[((env.params.paginationPosition=="outside")?"insertAfter":"appendTo")](env.$elts.carousel).find("p");env.$elts.paginationBtns=$([]);env.$elts.content.children("li").each(function(i){if(i%env.params.dispItems==0){env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<a role="button"><span>'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</span></a>').data("firstStep",i));}});env.$elts.paginationBtns.each(function(){$(this).appendTo(env.$elts.pagination);});env.$elts.paginationBtns.slice(0,1).addClass("active");env.launchOnLoad.push(function(){env.$elts.paginationBtns.click(function(e){goToStep(env,$(this).data("firstStep"));stopAutoSlide(env);});});};function initAddress(env){if(env.params.useAddress&&$.isFunction($.fn.address)){$.address.init(function(e){var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1]){goToStep(env,pathNames[1]-1);}else{$.address.value('/'+env.params.adressIdentifier+'/1');}}).change(function(e){var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1]){goToStep(env,pathNames[1]-1);}});}else{env.params.useAddress=false;}};function goToStep(env,step){env.params.callback(step);transition(env,step);env.steps.first=step;updateButtonsState(env);if(env.params.useAddress){$.address.value('/'+env.params.adressIdentifier+'/'+(step+1));}};function getRelativeStep(env,position){if(position=="prev"){if((env.steps.first-env.params.dispItems)>=0){return env.steps.first-env.params.dispItems;}else{return((env.params.loop)?(env.steps.count-env.params.dispItems):false);}}else if(position=="next"){if((env.steps.first+env.params.dispItems)<env.steps.count){return env.steps.first+env.params.dispItems;}else{return((env.params.loop)?0:false);}}};function transition(env,step){switch(env.params.effect){case"no":if(env.params.direction=="vertical"){env.$elts.content.css("top",-(env.itemHeight*step)+"px");}else{env.$elts.content.css("left",-(env.itemWidth*step)+"px");}
break;case"fade":if(env.params.direction=="vertical"){env.$elts.content.hide().css("top",-(env.itemHeight*step)+"px").fadeIn(env.params.animSpeed);}else{env.$elts.content.hide().css("left",-(env.itemWidth*step)+"px").fadeIn(env.params.animSpeed);}
break;default:if(env.params.direction=="vertical"){env.$elts.content.stop().animate({top:-(env.itemHeight*step)+"px"},env.params.animSpeed,env.params.slideEasing);}else{env.$elts.content.stop().animate({left:-(env.itemWidth*step)+"px"},env.params.animSpeed,env.params.slideEasing);}
break;}};function updateButtonsState(env){if(getRelativeStep(env,"prev")!==false){env.$elts.prevBtn.trigger("enable");}else{env.$elts.prevBtn.trigger("disable");}
if(getRelativeStep(env,"next")!==false){env.$elts.nextBtn.trigger("enable");}else{env.$elts.nextBtn.trigger("disable");}
if(env.params.pagination){env.$elts.paginationBtns.removeClass("active").filter(function(){return($(this).data("firstStep")==env.steps.first)}).addClass("active");}};function stopAutoSlide(env){if(!!env.autoSlideInterval){window.clearInterval(env.autoSlideInterval);}};})(jQuery);;
/*
jquery.combobox
version 0.1.2.7

Copyright © 2007,2008 Minel Pather|Ahura Mazda|jquery.sanchezsalvador.com
Dual licensed under MIT and GPL licences:
	* www.opensource.org/licenses/mit-license.php
	* www.gnu.org/licenses/gpl.html
*/
jQuery.fn.combobox =
	function(styles, options)
	{
		var _context = this;
		// create a combobox class instance instead of jQuery.fn.combobox which is a namespace.
		this.combobox = new Function();
		
		// Style Settings that determine the look of the control
		var styleSettings =
		{		
			comboboxContainerClass: null,
			comboboxValueContentContainerClass: null,
			comboboxValueContentClass: null,
			comboboxDropDownButtonClass: null,
			comboboxDropDownClass: null,
			comboboxDropDownItemClass: null,
			comboboxDropDownItemHoverClass: null,
			comboboxDropDownGroupItemHeaderClass: null,
			comboboxDropDownGroupItemContainerClass: null
		};
		
		// Option settings that determine the functionality of the control
		var optionSettings =
		{
			animationType: "slide",
			animationSpeed: "fast", // can be "fast", "slow", or a number in milliseconds
			width: 100,
			controlWidth: 16
		};
		
		if (styles)
		{
			jQuery.extend(styleSettings, styles);
		}
		
		if (options)
		{
			jQuery.extend(optionSettings, options);
		}
		
		//#start public events
		
		///<summary>
		///	Called whenever the user selects a different item in the list.
		///	By default, event is not called if it has not been assigned.
		///</summary>
		this.combobox.onChange = null;
		
		//#end public events
		
		//#start private functions
		
		///<summary>
		///	Returns the Combobox internal instance
		///</summary>
		function getInstance(context)
		{
			return context[0].internalCombobox;
		}

		// All make*Function(context) functions, create wrappers around the internal Combobox functions
		// and makes the function element specific.
		function makeRemoveFunction(context)
		{
			return function()
			{
				getInstance(context).remove();
			};
		}
		
		function makeUpdateFunction(context)
		{
			return function()
			{
				getInstance(context).update();
			}
		}
		
		function makeUpdateSelectionFunction(context)
		{
			return function()
			{
				getInstance(context).updateSelection();
			}
		}
		
		function makeAddRangeFunction(context)
		{
			return function(dataSource)
			{
				getInstance(context).addRange(dataSource);
			}
		}
					
		//#end private functions
		
		//#start exposed public methods
				
		// Add functionality to the combobox namespace
		jQuery.fn.extend(
			this.combobox,
			{
				addRange: makeAddRangeFunction(_context),
				remove: makeRemoveFunction(_context),
				update: makeUpdateFunction(_context),
				updateSelection: makeUpdateSelectionFunction(_context)
			});
			
		//#end exposed public methods
		
		return this.each(
			function()
			{
				// Create a new instance of the Combobox Class, intialising it with the DOM element to operate on and
				// attach the instance to the DOM
				this.internalCombobox = new ComboboxClass(this);
				
				// Call the instance to initialise itself
				this.internalCombobox.initialise();
				
				///<summary>
				///		a state-based class that is performs all functions necessary for the Combobox to work
				///</summary>
				function ComboboxClass(elementDOM)
				{
					//#start 'private' variables
					
					// This class can operate on N amount of elements depending how combobox() is called
					// for example $("select").combobox() could return multiple Selects.
					// This variable should always be a Select JQuery element.
					// TODO: Check if select control is used
					var _originalElementJQuery = jQuery(elementDOM);
					var _containerJQuery = null;
					var _containerDefaultStyle = "background-color:#fff;border-left: solid 2px #777;border-top: solid 2px #777;border-right: solid 1px #ccc;border-bottom: solid 1px #ccc;";
					var _containerEnforcedStyle = "padding:0;";
					var _dropDownListJQuery = null;
					var _dropDownListEnforcedStyle = "list-style-type:none;min-height:15px;padding-top:0;margin:0;overflow:auto";
					var _dropDownListDefaultStyle = "cursor:default;padding:2px;background:#fff;border-right:solid 1px #000;border-bottom:solid 1px #000;border-left:solid 1px #aaa;border-top:solid 1px #aaa;";
					var _dropDownListItemEnforcedStyle = "display:block;";
					var _dropDownListItemDefaultStyle = "cursor:default;padding-left:2px;font-weight:normal;font-style:normal;";
					var _dropDownListGroupItemContainerEnforcedStyle = "list-style-type:none;";
					var _dropDownListGroupItemContainerDefaultStyle = "padding-left:10px;margin-left:0;";
					var _dropDownListGroupItemHeaderEnforcedStyle = "";
					var _dropDownListGroupItemHeaderDefaultStyle = "font-style:italic;font-weight:bold;";
					var _dropdownListMaximumHeight = 300; // default max height: 300px
					var _valueContentContainerJQuery = null;
					var _valueContentContainerEnforcedStyle = "position:relative;overflow:hidden;";
					var _valueContentJQuery = null;
					var _valueContentEnforcedStyle = "float:left;position:absolute;cursor:default;overflow:hidden;";
					var _valueContentDefaultStyle = "padding-left:3px;";
					var _dropDownButtonJQuery = null;
					var _dropDownButtonDefaultStyle = "overflow:hidden;width:16px;height:18px;color:#000;background:#D6D3CE;font-family:arial;font-size:8px;cursor:default;text-align:center;vertical-align:middle;";
					var _dropDownButtonEnforcedStyle = "background-repeat:no-repeat;float:right;";
					var _dropDownButtonDefaultUnselectedStyle = "padding-left:0px;padding-top:1px;width:12px;height:13px;border-right:solid 2px #404040;border-bottom:solid 2px #404040;border-left:solid 2px #f0f0f0;border-top:solid 2px #f0f0f0";
					var _dropDownButtonDefaultSelectedStyle = "padding-left:1px;padding-top:3px;width:12px;height:13px;border:solid 1px #808080";
					var _dropDownButtonDefaultCharacter = "&#9660;"; //down-arrow character
					var _lastItemSelectedJQuery = null;
					var _lastItemHoveredJQuery = null;
					var _lastValue = null;
					var _downdownListPositionIsInverted = false;
					var _maximumItemLength = 0;
					var _dropDownListOffset = null;
					var _dropDownListHeight = 0;
					var _dropDownButtonImageDimension = null;
					var _valueContentContainerImageDimension = null;
					var _valueContentMaximumHeight = null;
					
					//#end 'private' variables
					
					//#start 'private' methods
					
					///<summary>
					/// Function extension to String.
					///	Replaces the placeholder tags '{0}...{n}' with the parameters based on ordinal position of the parameters
					///	Example: String.format("The quick {0} fox {2} over the lazy {1}.", "brown", "Dog", "jumps");
					///	Output:	The quick brown fox jumps over the lazy Dog.
					///</summary>
					String.format =
						function()
						{
							var currentString = null;
							if (arguments.length != 0)
							{
								currentString = arguments[0];
								for (var argumentIndex = 1; argumentIndex < arguments.length; argumentIndex++)
								{
									var modifiedString = new RegExp('\\{' + (argumentIndex - 1) + '\\}','gm');
									currentString = currentString.replace(modifiedString, arguments[argumentIndex]);
								}
							}
							
							return currentString;
						};
						
					///<summary>
					///	Returns the value from a string that has 'px' embedded.
					///	This function is normally used when working with CSS values.
					///	Note: returns null if the extension is not 'px', i.e. it may be 'em', 'pt', etc.
					///</summary>
					function getPixelValue(object)
					{
						var pixelValue = null;
						
						if (object)
						{
							if (object.substr(-2, 2) == "px")
							{
								pixelValue = object.substr(0, (object.length - 2));
							}
						}
						
						return pixelValue;
					}

					///<summary>
					///	Sets the width of an element taking into consideration any borders and padding.
					///	Works exactly like Internet Explorers Box Model, where the padding and border is considered
					//	part of the width. For the purposes of this control, it is required in certain circumstances.
					///	Example:
					///	 <div id="container" style="width: 150px; border:solid 2px #000"></div>
					///		jQuery('#container').width(); // 150px
					///		jQuery('#container').outerWidth(); // 154px (2px border on the left and right)
					///		setInnerWidth(jQuery('#container'), 120);
					///		jQuery('#container').width(); // 116px
					///		jQuery('#container').outerWidth(); // 120px (2px border on the left and right)
					///</summary>				
					function setInnerWidth(elementJQuery, width)
					{
						var differenceWidth = (elementJQuery.outerWidth() - elementJQuery.width());
						
						//console.log("outerWidth:",elementJQuery.outerWidth(),"elementJQuery width:",elementJQuery.width(),"width:",width,"differenceWidth:",differenceWidth);
						
						elementJQuery.width(width - differenceWidth);
					}
					
					///<summary>
					///	Sets the height of an element taking into consideration any borders and padding.
					///	Works exactly like Internet Explorers Box Model, where the padding and border is considered
					//	part of the height. For the purposes of this control, it is required in certain circumstances.			
					///</summary>				
					function setInnerHeight(elementJQuery, height)
					{
						var differenceheight = (elementJQuery.outerHeight() - elementJQuery.height());
						
						
						// TODO: FIX THIS
						//elementJQuery.height(height - differenceheight);
						elementJQuery.height(18);
					}
					
					///<summary>
					/// Applies CSS styling from a string that contains multiple style styleSettings
					///	Example: "background-color:#fff;color:#0f0;border:solid 1px #00f;"
					///</summary>			
					function applyMultipleStyles(elementJQuery, multipleCSSStyles)
					{
						var stylePairArray = multipleCSSStyles.split(";");
						if (stylePairArray.length > 0)
						{
							for (var stylePairArrayIndex = 0; stylePairArrayIndex < stylePairArray.length; stylePairArrayIndex++)
							{
								var stylePair = stylePairArray[stylePairArrayIndex];
								var splitStylePair = stylePair.split(":");
								
								elementJQuery.css(splitStylePair[0], splitStylePair[1]);
							}
						}
					}
					
					///<summary>
					///	Calculates the width and height of an image from its URL
					///</summary>
					function getImageDimension(imageURL)
					{
						var dimension = new Object();
						dimension.width = 0;
						dimension.height = 0;
						
						sizingImageJQuery = jQuery("<img style='border:none;margin:0;padding:0;'></img>");
						sizingImageJQuery.attr("src", imageURL);
						
						_containerJQuery.append(sizingImageJQuery);
						
						dimension.width = sizingImageJQuery.width();
						dimension.height = sizingImageJQuery.height();
						
						sizingImageJQuery.remove();

						return dimension;
					}
				
					///<summary>
					///	Calculates the background image size for an JQuery element if it has a CSS background-image set.
					///</summary>
					function calculateIndividualImageDimension(jqueryElement)
					{
						var dimension = null;
						var backgroundImageURL = jqueryElement.css("background-image");
						// Depending on the browser, the URL of the background-image sometimes is padded with extra characters
						backgroundImageURL = backgroundImageURL.replace("url(", "", "gi");
						backgroundImageURL = backgroundImageURL.replace('"', '', "gi");
						backgroundImageURL = backgroundImageURL.replace('\"', '', "gi");
						backgroundImageURL = backgroundImageURL.replace(")", "", "gi");
						
						if (backgroundImageURL != "none")
						{
							dimension = getImageDimension(backgroundImageURL);
						}
						
						return dimension;
					}
					
					///<summary>
					///	Calculates the background image size for the value display and drop down button.
					///	These dimensions are used for control states, normal, pressed [, and hover]
					///</summary>
					function calculateImageDimensions()
					{
						_dropDownButtonImageDimension = calculateIndividualImageDimension(_dropDownButtonJQuery);
						_valueContentContainerImageDimension = calculateIndividualImageDimension(_valueContentContainerJQuery);
					}
					
					///<summary>
					///	Changes the visual of the value container to indicate a state.
					///	If the background-image is set and does not contain additional images for states,
					///	then the image is not changed for the different states. The Select for Safari works like this.
					///	The image states are stored below each other
					///	NOTE: This is different from the Drop Down Button where the images are stored side by side.
					/// for example
					///	A value container has a width of 275 pixels and a height of 35 pixels.
					///	The background-image is set to valuebackground.gif.
					///	valuebackground.gif is 70 pixels in height. The 'pressed' state image is at pixel height 35 in the image.
					///	States are:
					///	Normal = 0
					///	Pressed = 1
					///</summary>
					function setValueContentContainerState(state)
					{
						if (styleSettings.comboboxValueContentContainerClass)
						{
							// Only process buttomn states if a background-image has been set
							if (_valueContentContainerImageDimension != null)
							{
								var height = _valueContentContainerJQuery.height();
								var offset = (state * height);
								
								// Check if the image is higher than the set height.
								// This signifies that the image file contain different images below each other for different
								// states.
								if (_valueContentContainerImageDimension.height > offset)
								{
									var background_positionCSS = String.format("0px -{0}px", offset);
									_valueContentContainerJQuery.css("background-position", background_positionCSS);
								}
							}
						}
					}
					
					///<summary>
					///	Changes the visual of the drop down button to indicate a state.
					///	If the background-image is not set, then the default style is applied.
					///	If the background-image is set and does not contain additional images for states,
					///	then the image is not changed for the different states. The Select for Safari works like this.
					///	The image states are stored side by side: for example
					///	A drop-down button has a width of 16 pixel. The background-image is set to button.gif
					///	Button.gif is 32 pixels wide. The 'pressed' state image is at pixel position 16 in the image.
					///	States are:
					///	Normal = 0
					///	Pressed = 1
					///</summary>
					function setDropDownButtonState(state)
					{
						if (styleSettings.comboboxDropDownButtonClass)
						{
							// Only process buttomn states if a background-image has been set
							if (_dropDownButtonImageDimension != null)
							{
								var width = _dropDownButtonJQuery.width();
								var offset = (state * width);
								
								// Check if the image is wider than the set width.
								// This signifies that the image file contain different images next to each other for different
								// states.
								if (_dropDownButtonImageDimension.width > offset)
								{
									var background_positionCSS = String.format("-{0}px 0px", offset);
									_dropDownButtonJQuery.css("background-position", background_positionCSS);
								}
							}
						}
						else
						{
							var style = _dropDownButtonDefaultUnselectedStyle;
							
							if (state == 1)
							{
								style = _dropDownButtonDefaultSelectedStyle;
							}
							
							applyMultipleStyles(_dropDownButtonJQuery, style);
						}			
					}
					
					///<summary>
					///	Changes the visual appearance of the controls to represent the current state.
					///	States are:
					///	Normal = 0
					///	Pressed = 1
					///</summary>
					function setControlVisualState(state)
					{
						setValueContentContainerState(state);
						
						setDropDownButtonState(state);
					}
					
					///<summary>
					/// Builds the elements that make up the always visible portion of the control.
					///	The equivalent of a Textbox-type element.
					/// Also creates the DropDownButton
					///</summary>
					function buildValueContent()
					{
						// A container for the Display Value and DropDownButton. A container is required as the child elements
						// are floated
						var valueContentContainerHTML = "";
						if (styleSettings.comboboxValueContentContainerClass)
						{
							valueContentContainerHTML = String.format("<div class='{0}' style='{1}'></div>", styleSettings.comboboxValueContentContainerClass, _valueContentContainerEnforcedStyle);
						}
						else
						{
							valueContentContainerHTML = String.format("<div style='{0}'></div>", _valueContentContainerEnforcedStyle);
						}
						
						// Create the equivalent of the select 'textbox' where the current selected value is shown
						var valueContentHTML = "";
						if (styleSettings.comboboxValueContentClass)
						{
							valueContentHTML = String.format("<div class='{0}' style='{1}'></div>", styleSettings.comboboxValueContentClass, _valueContentEnforcedStyle);
						}
						else
						{
							valueContentHTML = String.format("<div style='{0}'></div>", _valueContentEnforcedStyle + _valueContentDefaultStyle);
						}
						
						var dropdownButtonHTML = "";
						if (styleSettings.comboboxDropDownButtonClass)
						{
							dropdownButtonHTML = String.format("<div class='{1}' style='{0}'></div>",_dropDownButtonEnforcedStyle, styleSettings.comboboxDropDownButtonClass);
						}
						else
						{
							dropdownButtonHTML = String.format("<div style='{0}'>{1}</div>", (_dropDownButtonEnforcedStyle + _dropDownButtonDefaultStyle), _dropDownButtonDefaultCharacter);
						}
						
						_valueContentJQuery = jQuery(valueContentHTML);
						_dropDownButtonJQuery = jQuery(dropdownButtonHTML);
						_valueContentContainerJQuery = jQuery(valueContentContainerHTML);
						
						_valueContentContainerJQuery.appendTo(_containerJQuery);
						_valueContentJQuery.appendTo(_valueContentContainerJQuery);
						_dropDownButtonJQuery.appendTo(_valueContentContainerJQuery);
						
						calculateImageDimensions();
						
						_valueContentMaximumHeight = getPixelValue(_valueContentJQuery.css("max-height"));
					
						// Set control to normal state
						setControlVisualState(0);
					}
					
					///<summary>
					///	Build a drop down list element populating it will values, text, styles and class
					///	depending on the source value type. The source value (childJQuery) can be an option or
					///	and optgroup element.
					///</summary>
					function buildDropDownItem(childJQuery)
					{
						var dataItemHTML = "";
						var dataItemClass = null;
						var dataItemText = "";
						var dataItemTitle = "";
						var dataItemValue = null;
						var elementRel = childJQuery.attr('rel');
						var dataItemStyle = "";
						var dataItemType = "option";
						var childElement = childJQuery[0];
						
						if (childElement.title)
						{
							if (childElement.title != "")
							{
								dataItemTitle = childElement.title;
							}
						}
						
						
						if (childJQuery.is('option'))
						{
							if (childElement.dataText)
							{
								dataItemText = childElement.dataText;
							}
							else
							{
								dataItemText = childJQuery.text();
							}
							dataItemValue = childJQuery.val();
							
							if (styleSettings.comboboxDropDownItemClass)
							{
								dataItemClass = styleSettings.comboboxDropDownItemClass;
								dataItemStyle = _dropDownListItemEnforcedStyle;
							}
							else
							{
								dataItemStyle = (_dropDownListItemEnforcedStyle + _dropDownListItemDefaultStyle);
							}
							
							if (dataItemClass)
							{						
								dataItemHTML = String.format("<li style='{0}' class='{1}'>{2}</li>", dataItemStyle, dataItemClass, dataItemText);
							}
							else
							{
								dataItemHTML = String.format("<li style='{0}'>{1}</li>", dataItemStyle, dataItemText);
							}
							
						}
						else
						{
							if (childJQuery[0].dataText)
							{
								dataItemText = childJQuery[0].dataText;
							}
							else
							{
								dataItemText = childJQuery.attr('label');
							}
							dataItemValue = childJQuery.attr('class');
							
							dataItemType = "optgroup";
							
							if (styleSettings.comboboxDropDownGroupItemHeaderClass)
							{
								dataItemClass = styleSettings.comboboxDropDownGroupItemHeaderClass;
								dataItemStyle = _dropDownListGroupItemHeaderEnforcedStyle;
							}
							else
							{
								dataItemStyle = (_dropDownListGroupItemHeaderEnforcedStyle + _dropDownListGroupItemHeaderDefaultStyle);
							}
							
							if (dataItemClass)
							{						
								dataItemHTML = String.format("<li><span style='{0}' class='{1}'>{2}</span></li>", dataItemStyle, dataItemClass, dataItemText);
							}
							else
							{
								dataItemHTML = String.format("<li><span style='{0}'>{1}</span></li>", dataItemStyle, dataItemText);
							}
						}
						
						var dataItemJQuery = jQuery(dataItemHTML);
						
						// The element's style is set to inline for the calculation of the true width
						// The element is then reset to its enforced style (display:block) later
						dataItemJQuery.css("display", "inline");
						
						// if there's a rel property, we assume it's for a fragrence to add a swatch color
						if(elementRel != undefined && elementRel != ""){
						  var currentHTML = dataItemJQuery.html();
						  dataItemJQuery.html("<span class='swatch' style='background-color:#"+elementRel+"'> </span>" + currentHTML)
						}
						
						
						// Store the value with the DOMElement which is persisted with the Browser
						dataItemJQuery[0].dataText = dataItemText;
						dataItemJQuery[0].dataValue = dataItemValue;
						dataItemJQuery[0].dataType = dataItemType;
						if (dataItemTitle == "")
						{
							dataItemTitle = dataItemText
						}
						dataItemJQuery[0].title = dataItemTitle;
						
						return dataItemJQuery;
					}
					
					///<summary>
					///	Recusively build the drop down list elements based on the options and optgroups contained
					///	with the original Select element
					///</summary>
					function recursivelyBuildList(parentJQuery, childrenOptionsJQuery)
					{
						childrenOptionsJQuery.each(
							function()
							{
								var childJQuery = jQuery(this);
								var builtDropDownItemJQuery = buildDropDownItem(childJQuery);
								parentJQuery.append(builtDropDownItemJQuery);
								
								// Calculate the true width of the item taking into consideration the offset from the left-edge
								// of the drop-down list.
								// Get the left offset of the DropDown list container and subtract that from the builtDropDownItemJQuery left offset
								//	to get the distance the builtDropDownItemJQuery is from its container
								var offsetLeft = builtDropDownItemJQuery.offset().left;
								
								offsetLeft -= _dropDownListOffset.left;
								
								if (offsetLeft < 0)
								{
									offsetLeft = 0;
								}
								
								var width = (offsetLeft + builtDropDownItemJQuery.outerWidth());
								if (width > _maximumItemLength)
								{
									//alert("new maximum width! old width: "+ _maximumItemLength+" new max width: "+ width)
									_maximumItemLength = width;
								}
								
								// Set the enforced style of display:block after the width has been calculated.
								applyMultipleStyles(builtDropDownItemJQuery, _dropDownListItemEnforcedStyle);
								
								if (childJQuery.is('optgroup'))
								{
									var dataGroupItemHTML = "";
									if (styleSettings.comboboxDropDownGroupItemContainerClass)
									{
										dataGroupItemHTML = String.format("<ul style='{0}' class='{1}'></ul>", _dropDownListGroupItemContainerEnforcedStyle, styleSettings.comboboxDropDownGroupItemContainerClass);
									}
									else
									{
										dataGroupItemHTML = String.format("<ul style='{0}'></ul>", (_dropDownListGroupItemContainerEnforcedStyle + _dropDownListGroupItemContainerDefaultStyle));
									}
									
									var dataGroupItemJQuery = jQuery(dataGroupItemHTML);
									builtDropDownItemJQuery.append(dataGroupItemJQuery);
									
									// If not an option, then the child of a Select must be an optgroup element
									recursivelyBuildList(dataGroupItemJQuery, childJQuery.children());
								}
							});
					}
					
					///<summary>
					/// Creates an unordered list of values from the original Select control
					///</summary>
					function buildDropDownList()
					{
						var originalElementChildrenJQuery = _originalElementJQuery.children();
						_lastItemSelectedJQuery = null;
						_lastValue = null;

						// If the Drop Down List container already exists, recreate only the items,
						// else create the container and the items as well.
						if (_dropDownListJQuery)
						{
							// Clear out any existing children elements
							_dropDownListJQuery.empty();
						}
						else
						{
							var dropDownHTML = "";
							if (styleSettings.comboboxDropDownClass)
							{
								dropDownHTML = String.format("<ul class='{0}' style='{1}'></ul>", styleSettings.comboboxDropDownClass, _dropDownListEnforcedStyle);
							}
							else
							{
								dropDownHTML = String.format("<ul style='{0}'></ul>", (_dropDownListEnforcedStyle + _dropDownListDefaultStyle));
							}
							
							_dropDownListJQuery = jQuery(dropDownHTML);
							// Create the equivalent of the drop down list where the all the values are shown
							_dropDownListJQuery.appendTo(_containerJQuery);
							
							// Enable the Drop Down List to be able to receive focus and key events
							_dropDownListJQuery.attr("tabIndex", 0);
						}
						
						// Create the internal list of values if they exist
						if (originalElementChildrenJQuery.length > 0)
						{
							_maximumItemLength = 0;
							_dropDownListOffset = _dropDownListJQuery.offset();
								
							recursivelyBuildList(_dropDownListJQuery, originalElementChildrenJQuery);
						}
						
						// Check if the max-height has been set as a CSS setting
						// If it has, determine if the current height of the dropdown list does not exceed it and if 
						// it does, reset the height to match the setting.
						var maximumHeight = getPixelValue(_dropDownListJQuery.css("max-height"));
										
						// Only use the maximum height if it has been set correctly
						if (maximumHeight)
						{
							_dropdownListMaximumHeight = maximumHeight;
						}
						
						var dropdownListHeight = _dropDownListJQuery.height();
						if (dropdownListHeight > _dropdownListMaximumHeight)
						{
							_dropDownListJQuery.height(_dropdownListMaximumHeight);
						}
						
						// Store the height because the browser flashes (FF) when accessing this function
						_dropDownListHeight = _dropDownListJQuery.height();
					}
					
					///<summary>
					///	Adjust the width of the DropDown list based on the widest item or the set width (options), whichever
					///	is larger.
					///</summary>
					function updateDropDownListWidth()
					{
						//Drop down list element
						var dropdownListWidth = _containerJQuery.outerWidth();
						if (dropdownListWidth < _maximumItemLength)
						{
							dropdownListWidth = _maximumItemLength;
						}
						
						_dropDownListJQuery.width(dropdownListWidth);
					}
					
					///<summary>
					/// Repositions the display value based on height of the element.
					///	Note: the height will only have meaning if the display value element has text
					///</summary>
					function positionDisplayValue()
					{
						// Set the height to the default and allow it to fill the height to accomodate the content
						_valueContentJQuery.height("auto");
						var displayValueHeight = _valueContentJQuery.outerHeight();
						var displayContainerHeight = _valueContentContainerJQuery.height();
						
						// Check if the developer wants to clip the content within a region
						if (_valueContentMaximumHeight)
						{
							// Set the height of the content to the maximumContentHeight if it is less
							// than the current height of the content
							if (_valueContentMaximumHeight < displayValueHeight)
							{
								displayValueHeight = _valueContentMaximumHeight;
								_valueContentJQuery.height(displayValueHeight);
							}
						}
						
						var difference = ((displayContainerHeight - displayValueHeight) / 2);
						
						if (difference < 0)
						{
							difference = 0;
						}
						
						//TODO: add other alignments for the user, such as left, top, middle, bottom, etc
						_valueContentJQuery.css("top", difference);
					}
					
					///<summary>
					///	Applies custom layout position and sizing to the controls
					///</summary>
					function applyLayout()
					{
						_containerJQuery.width(optionSettings.width);
						
						// Removes any units and retrieves only the value of width
						var controlWidth = _containerJQuery.width();
						setInnerWidth(_valueContentContainerJQuery, controlWidth);
						
						var displayValueWidth = (_valueContentContainerJQuery.width() - _dropDownButtonJQuery.outerWidth());
						setInnerWidth(_valueContentJQuery, displayValueWidth);
						var dropDownButtonHeight = _dropDownButtonJQuery.outerHeight();
						setInnerHeight(_valueContentContainerJQuery, dropDownButtonHeight);
						
						_dropDownListJQuery.css("position", "absolute");
						_dropDownListJQuery.css("z-index", "20000");
						
						updateDropDownListWidth();
						
						// Position the drop down list correctly, taking the main display control border into consideration
						var currentLeftPosition = _dropDownListJQuery.offset().left;
						var leftPosition = (currentLeftPosition - (_containerJQuery.outerWidth() - _containerJQuery.width()));
						_dropDownListJQuery.css("left", leftPosition + 1);
						
						_dropDownListJQuery.hide();
					}

					///<summary>
					///		Sets the value both internally and visually to the user
					///</summary>
					function setContentDisplay()
					{
						var valueHasChanged = false;
						var originalElement = _originalElementJQuery[0];
						var dataItemJQuery;
						
						if (originalElement.length > 0)
						{
							//var selectedText = originalElement[originalElement.selectedIndex].text;
							var selectedDropDownListItemJQuery = jQuery("li[dataValue='" + _originalElementJQuery.val() + "']", _dropDownListJQuery);
							
							_valueContentJQuery.html(selectedDropDownListItemJQuery[0].dataText);
							_valueContentJQuery.attr("title", selectedDropDownListItemJQuery[0].title);
							
							// Reposition the display value based on height of the element after the text has changed
							positionDisplayValue();
							
							if (_lastValue)
							{
								if (_lastValue != _originalElementJQuery.val())
								{
									valueHasChanged = true;
								}
							}
							
							_lastValue = _originalElementJQuery.val();
							
							//  If the selected value has changed since the last click, fire the onChange event
							if (valueHasChanged)
							{
								// Check if the onChange event is being consumed, otherwise it will be undefined
								if (_context.combobox.onChange)
								{
									_context.combobox.onChange();
								}
							}
							
							// If _lastItemSelectedJQuery has been set, remove the highlight from it, before setting it to the current
							// value
							if (_lastItemSelectedJQuery)
							{
								toggleItemHighlight(_lastItemSelectedJQuery, false);
							}
							
							// Find the DropDown Item Element that corresponds to the current value in the Select element
							_lastItemSelectedJQuery = selectedDropDownListItemJQuery;
							
							toggleItemHighlight(_lastItemSelectedJQuery, true);
						}
					}
					
					///<summary>
					///	Forces the a drop down list item to be visible on screen.
					///	This applies to containers that have scrollbars and elements within it
					///	are out of vision.
					///	Only scrolls an item into place if it not visible on screen.
					///</summary>
					function scrollDropDownListItemIntoView(dropdownListItemJQuery)
					{
						//TODO: Not working correctly in IE.
						// Moving up does not immediately show the hidden item above
						if (dropdownListItemJQuery)
						{
							if (_dropDownListHeight >= _dropdownListMaximumHeight)
							{
								var offset = dropdownListItemJQuery.offset();

								// Only scroll if the item is below the height of the ddl
								// or above the top of it or the height of a DDL item
								if (
										(offset.top > _dropDownListHeight)
										||
										(offset.top <= dropdownListItemJQuery.outerHeight())
									 )
								{
									dropdownListItemJQuery[0].scrollIntoView();
								}
							}
						}			
					}
					
					///<summary>
					///	Highlights/Unhighlights a specific option.
					///	If a class is not set, then the background and foreground colours are inverted
					///</summary>
					function toggleItemHighlight(elementJQuery, isHighlighted)
					{
						if (elementJQuery)
						{
							if (styleSettings.comboboxDropDownItemHoverClass)
							{
								if (isHighlighted)
								{
									elementJQuery.addClass(styleSettings.comboboxDropDownItemHoverClass);
								}
								else
								{
									elementJQuery.removeClass(styleSettings.comboboxDropDownItemHoverClass);
								}
							}
							else
							{
								if (isHighlighted)
								{
									elementJQuery.css("background", "#000");
									elementJQuery.css("color", "#fff");
								}
								else
								{
									elementJQuery.css("background", "");
									elementJQuery.css("color", "");
								}
							}
						}
					}

					///<summary>
					///	Builds the Outermost control and swaps out the original Select element.
					///	The Select element then becomes an hidden control within.
					///</summary>
					function buildContainer()
					{
						var containerHTML = "";
						if (styleSettings.comboboxContainerClass)
						{
							containerHTML = String.format("<div class='{0}' style='{1}'></div>", styleSettings.comboboxContainerClass, _containerEnforcedStyle);
						}
						else
						{
							containerHTML = String.format("<div style='{0}' style='{1}'></div>", _containerDefaultStyle, _containerEnforcedStyle);
						}
						_containerJQuery = jQuery(containerHTML);
						_originalElementJQuery.before(_containerJQuery);
						_containerJQuery.append(_originalElementJQuery);
						_originalElementJQuery.hide();
						
						// Allow the custom jquery.combobox be able to receive focus and key events
						_containerJQuery.attr("tabIndex", 0);
					}
					
					///<summary>
					///	Converts an existing Select element to a JQuery.combobox.
					///	The Select element is kept and updated accordingly, but visually is represented
					///	by other richer HTML elements
					///</summary>
					this.initialise =
						function ()
						{
							buildContainer();
							
							buildValueContent();
							
							buildDropDownList();
							
							applyLayout();
							
							bindEvents();
							
							setContentDisplay();
						};
					
					///<summary>
					///	Focus must be set to the DropDown list element only after it has shown.
					///	This is due to IE executing the Blur event before the list has immediately shown
					///</summary>
					function postDropDownListShown()
					{
						_dropDownListJQuery.focus();
						scrollDropDownListItemIntoView(_lastItemSelectedJQuery);
					}

					///<summary>
					///	Focus set to the Combobox Container
					///</summary>
					function setAndBindContainerFocus()
					{
						_containerJQuery.focus();
						bindContainerClickEvent();
					}
					
					///<summary>
					///	Slides up the DropDownlist when it is to be placed above the CB
					///</summary>
					function slideUp(newTop)
					{
						_dropDownListJQuery.animate(
							{
								height: "toggle",
								top: newTop
							},
							optionSettings.animationSpeed,
							postDropDownListShown);
					}
					
					///<summary>
					///	Slides closed the DropDownlist when it is placed above the CB.
					///	Binds the CB Container click event after the DDL is hidden to avoid a bug in IE
					///	where the click event fires re-opening the DDL.
					///</summary>
					function slideDown(newTop)
					{
						_dropDownListJQuery.animate(
							{
								height: "toggle",
								opacity: "toggle",
								top: newTop
							},
							optionSettings.animationSpeed,
							setAndBindContainerFocus);
					}
					
					///<summary>
					///	Toggles the slide with a fade and returning execution to the callback function when down
					///</summary>
					function slideToggle(callback)
					{
						_dropDownListJQuery.animate(
							{
								height: "toggle",
								opacity: "toggle"
							},
							optionSettings.animationSpeed,
							callback);
					}
					
					///<summary>
					///	Get the proposed top position of the drop down list container.
					///	Also sets whether the drop down list is inverted. Inverted means that the
					///	list is shown above the container as opposed to the normal position of below the combobox 
					///	container
					///</summary>
					function getDropDownListTop()
					{
						var comboboxTop = _containerJQuery.position().top;
						var dropdownListHeight = _dropDownListJQuery.outerHeight();
						var comboboxBottom = (comboboxTop + _containerJQuery.outerHeight());
						var windowScrollTop = jQuery(window).scrollTop();
						var windowHeight = jQuery(window).height();	
						var availableSpaceBelow = (windowHeight - (comboboxBottom - windowScrollTop));
						var dropdownListTop;

						// Set values to display dropdown list below combobox as default				
						dropdownListTop = comboboxBottom;
						_downdownListPositionIsInverted = false;

						// Check if there is enough space below to display the full height of the drop down list
						if (availableSpaceBelow < dropdownListHeight)
						{
							// There is no available space below the combobox to display the dropdown list
							// Check if there is available space above. If not, then display below as default
							if ((comboboxTop - windowScrollTop)> dropdownListHeight)
							{
								// There is space above
								dropdownListTop = (comboboxTop - dropdownListHeight);
								_downdownListPositionIsInverted = true;
							}
						}
						
						return dropdownListTop;
					}
					
					///<summary>
					///	Hides/Shows the list of values.
					///	The method of display or hiding is specified as optionSettings.animationType.
					///	This method also changes the button state
					///</summary>					
					function toggleDropDownList(isShown)
					{
						if (isShown)
						{
							if (_dropDownListJQuery.is(":hidden"))
							{
								// Remove the click event from the container because when the dropdown list is shown
								// and the container is clicked, the dropdownlist blur event is fired which hides the control
								// and the container click is fired after which will show the list again (error);
								unbindContainerClickEvent();
								
								// Remove the highlight from the last item hovered before the DDL was retracted
								toggleItemHighlight(_lastItemHoveredJQuery, false);
								
								// When the DropDown list is shown, highlist the current value in the list
								toggleItemHighlight(_lastItemSelectedJQuery, true);
				
								setControlVisualState(1);
								
								var dropdownListTop = getDropDownListTop();
								_dropDownListJQuery.css("top", dropdownListTop);
								_dropDownListJQuery.css("left", _containerJQuery.position().left);
								
								switch (optionSettings.animationType)
								{
									case "slide":
										if (_downdownListPositionIsInverted)
										{
											var comboboxTop = _containerJQuery.position().top;
											var containerHeight = _containerJQuery.outerHeight();

											_dropDownListJQuery.css("top", (comboboxTop - containerHeight));

											slideUp(dropdownListTop);
										}
										else
										{
											slideToggle(postDropDownListShown);
										}
										break;
										
									case "fade":
										_dropDownListJQuery.fadeIn(optionSettings.animationSpeed, postDropDownListShown);
										break;
										
									default:
										// Bug: if show() is used and postDropDownListShown() is immediately after,
										// the focus hides the DropDownList. Show(1, xxx) uses a callback which seems to work
										_dropDownListJQuery.show(1, postDropDownListShown);
								}
							}
						}
						else
						{
							if (_dropDownListJQuery.is(":visible"))
							{
								setControlVisualState(0);
								
								switch (optionSettings.animationType)
								{
									case "slide":
										if (_downdownListPositionIsInverted)
										{
											comboboxTop = _containerJQuery.position().top;
											dropdownListHeight = _dropDownListJQuery.height();

											slideDown(comboboxTop - _containerJQuery.outerHeight());
										}
										else
										{
											slideToggle(setAndBindContainerFocus);
										}
										break;
										
									case "fade":
										_dropDownListJQuery.fadeOut(optionSettings.animationSpeed, setAndBindContainerFocus);
										break;
										
									default:
										_dropDownListJQuery.hide();
										setAndBindContainerFocus();
								}
							}
						}
					}
					
					///<summary>
					///	Sets the internal select element (original) to match the visually changes made by the user.
					///	This ensures that any legacy code working with the original select is kept up to date with changes
					/// Either selectedIndex or selectedValue can be used, not both at the same time.
					///</summary>
					function setOriginalSelectItem(selectedIndex, selectedValue)
					{
						var originalElementDOM = _originalElementJQuery[0];
						
						if (selectedValue == null)
						{
							originalElementDOM.selectedIndex = selectedIndex;
						}
						else
						{
							originalElementDOM.value = selectedValue;
						}
						
						// Fire the OnChange event for the original select element
						if (originalElementDOM.onchange)
						{
							originalElementDOM.onchange();
						}
						
						setContentDisplay();
						_originalElementJQuery.change();
					}

					///<summary>
					///	Selects a value from the list of options from the original Select options.
					///	Does not use JQuery Selectors ':last' and ':first' because they take optgroup elements into
					///	account.
					///</summary>					
					function selectValue(subSelector)
					{
						var originalElement = _originalElementJQuery[0];
						var currentIndex = originalElement.selectedIndex;
						var newIndex = -1;
						// {select}.length returns the array size of the options. Does not count optgroup elements
						var optionCountZeroBased = originalElement.length - 1;
						
						switch (subSelector)
						{
							case ":next":
								newIndex = currentIndex + 1;
								if (newIndex > optionCountZeroBased)
								{
									newIndex = optionCountZeroBased;
								}
								break;
							
							case ":previous":
								newIndex = currentIndex - 1;
								if (newIndex < 0)
								{
									newIndex = 0;
								}

								break;
								
							case ":first":
								newIndex = 0;
								
								break;
								
							case ":last":
								newIndex = optionCountZeroBased;
								
								break;
						}

						setOriginalSelectItem(newIndex, null);
						
						scrollDropDownListItemIntoView(_lastItemSelectedJQuery);
					}
					
					///<summary>
					///	Returns true if the DropDownList visible on screen, else false
					///</summary>
					function isDropDownVisible()
					{
						return _dropDownListJQuery.is(":visible");
					}
					
					///<summary>
					/// Bind all items to mouse events except for UL elements
					/// and LI elements that are option group labels
					///</summary>			
					function bindItemEvents()
					{
						jQuery("li", _dropDownListJQuery).not("ul").not("span").not("[dataType='optgroup']").each(
							function()
							{
								var itemJQuery = jQuery(this);
								itemJQuery.click(
									function(clickEvent)
									{
										// Stops the click event propagating to the Container and the Container.onClick firing
										clickEvent.stopPropagation();
										
										dropdownList_onItemClick(itemJQuery);
									});
								
								itemJQuery.mouseover(
									function()
									{
										dropdownList_onItemMouseOver(itemJQuery);
									});
									
								itemJQuery.mouseout(
									function()
									{
										dropdownList_onItemMouseOut(itemJQuery);
									});
							});			
					}

					///<summary>
					///		Bind the dropdown list control blur event to a function
					///</summary>
					function bindBlurEvent()
					{
						_dropDownListJQuery.blur(
							function(blurEvent)
							{
								blurEvent.stopPropagation();
								
								dropdownList_onBlur();
							});
					}
					
					///<summary>
					///	Bind the click event of the container to a function
					///</summary>
					function bindContainerClickEvent()
					{
						_containerJQuery.click(
							function()
							{
								container_onClick();
							});
					}

					///<summary>
					///	Remove the binding of a custom function from the container's click event
					///</summary>
					function unbindContainerClickEvent()
					{
						_containerJQuery.unbind("click");
					}
								
					///<summary>
					///		Bind this control to the events to custom functions
					///</summary>
					function bindEvents()
					{
						_containerJQuery.keydown(
							function(keyEvent)
							{
								keyEvent.preventDefault();
								container_onKeyDown(keyEvent)
							});
							
						bindContainerClickEvent();
							
						bindBlurEvent();
							
						bindItemEvents();
					}				
					
					//#end 'private' functions
					
					//#start private events
					
					///<summary>
					///	If the drop down list is retracted, it is shown,
					///	else if shown, it is retracted
					///</summary>
					function container_onClick()
					{
						if (_dropDownListJQuery.is(":hidden"))
						{
							toggleDropDownList(true);
						}
						else
						{
							toggleDropDownList(false);
						}
					}
					
					///<summary>
					///	Fires when the drop down list loses focus.
					///	On Blur, the drop down list is retracted
					///</summary>
					function dropdownList_onBlur()
					{
						if (_dropDownListJQuery.is(":visible"))
						{
							toggleDropDownList(false);
						}
					}
					
					///<summary>
					///	Retrieves the value of the item clicked, sets the content to that value
					///	and retracts the drop-down list
					///</summary>
					function dropdownList_onItemClick(itemJQuery)
					{
						setOriginalSelectItem(null, itemJQuery[0].dataValue); 
						
						toggleDropDownList(false);
					}
					
					///<summary>
					///	Highlights the Drop Down List item currently under the mouse.
					///	Removes the highlist from the previous selected item as well.
					///</summary>
					function dropdownList_onItemMouseOver(itemJQuery)
					{
						// An item may be selected from the previous selection and will require
						// to be set to normal.
						// TODO: find a better method of matching _lastItemSelectedJQuery to itemJQuery and optimising the removal
						// of the class, instead of removing it consistently
						toggleItemHighlight(_lastItemSelectedJQuery, false);
						
						toggleItemHighlight(_lastItemHoveredJQuery, false);
						
						toggleItemHighlight(itemJQuery, true);
					}
					
					///<summary>
					///		Removes the highlight from the selected item
					///</summary>
					function dropdownList_onItemMouseOut(itemJQuery)
					{
						//toggleItemHighlight(itemJQuery, false);
						_lastItemHoveredJQuery = itemJQuery;
					}
					
					///<summary>
					///	Handles the keyboard navigation aspect of the combobox.
					///	Note: Does not jump to item if the first letter is pressed.
					///</summary>
					//TODO: Correctly support page-up and page-down, esp. with scrolling
					function container_onKeyDown(keyEvent)
					{
						switch (keyEvent.which)
						{
							case 33:
								//Page Up
							case 36:
								//Home
								selectValue(":first");
								break;
							
							case 34:
								//Page Down
							case 35:
								//End
								selectValue(":last");
								break;

							case 37:
								//Left
								selectValue(":previous");
								break;
								
							case 38:
								//Up
								if (keyEvent.altKey)
								{
									// alt-up
									// If DDL is hidden, then it is shown and vice-versa
									toggleDropDownList(!(isDropDownVisible()));
								}
								else
								{
									selectValue(":previous");
								}
								break;

							case 39:
								//Right
								selectValue(":next");
								break;
								
							case 40:
								//Down
								if (keyEvent.altKey)
								{
									// alt-down
									// If DDL is hidden, then it is shown and vice-versa
									toggleDropDownList(!(isDropDownVisible()));
								}
								else
								{
									selectValue(":next");
								}
								break;
								
							case 27:
							case 13:
								// Escape
								toggleDropDownList(false);
								break;

							case 9:
								// Tab
								//TODO: Support alt-tab
								//TODO: Does not truly leave the Combobox if the DropDown is visible
								_dropDownListJQuery.blur();
								
								// This is required in Internet Explorer as the blur() order is different
								jQuery(window)[0].focus();
								
								break;
						}
					}
					//#end private events
					
					//#start public methods
					
					///<summary>
					///	Updates the combobox with the current selected item.
					///	This function is called if the original Select element selection has been changed
					///</summary>
					this.updateSelection = 
						function()
						{
							setContentDisplay();
						};
						
					///<summary>
					///	The Drop Down List Container will already have been created.
					///	This function recreates the items and binds the events to them.
					///	Thereafter, the current selection is set.
					///</summary>
					this.update =
						function()
						{
							buildDropDownList();
							updateDropDownListWidth();
							bindItemEvents();
							setContentDisplay();
						};
						
					///<summary>
					///	Removes the jquery.combobox leaving the original select element
					///</summary>					
					this.remove =
						function()
						{
							//Move the original element to a position before the jquery.combobox			
							_containerJQuery.before(_originalElementJQuery);
							_containerJQuery.remove();
							
							// Remove the internal object property from the DOM
							//TODO: next statement does not work in Internet Explorer 6.
							//delete _originalElementJQuery[0].internalCombobox;
							_originalElementJQuery[0].internalCombobox = null;
							
							_originalElementJQuery.show();
						};
						
					///<summary>
					///	Adds a range of options into the combobox.
					///	Using this function bypasses the browsers restriction of adding
					///	html as text values. This allows customisation of the display text
					///	Format of dataSource
					///	[
					///		{
					///			value: object, // usual a unique string value
					///			text: object,  // can be normal text or html
					///			title: string  // optional
					///		}
					///	]
					///	Note: Still in development
					///</summary>
					this.addRange =
						function(dataSource)
						{
							if (dataSource)
							{
								var originalOptions = _originalElementJQuery[0].options;
								var optionTotal = originalOptions.length;
								for (optionIndex in dataSource)
								{
									var option = dataSource[optionIndex];
									var optionElement = document.createElement("option");
									optionElement.value = option.value;
									optionElement.text = option.text;
									// Store the raw text data. Option.text removes all HTML content
									optionElement.dataText = option.text;
									if (option.title)
									{
										optionElement.title = option.title;
									}
									
									originalOptions[optionTotal + optionIndex] = optionElement;
								}
								
								_originalElementJQuery.combobox.update();
							}
						};
					
					//#end public methods
					
				}
			});
	}
/*
TODOS:
- look to moving functions to outside the context and use a state based object to track individual elements [0]
*/
;
/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */

;(function($) {
	
$.fn.extend({
	autocomplete: function(urlOrData, options) {
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);
		
		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };
		
		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;
		
		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);
	
	var blockSubmit;
	
	// prevent form submit in opera when selecting with return key
	$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});
	
	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// a keypress means the input has focus
		// avoids issue where input had focus before the autocomplete was applied
		hasFocus = 1;
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {
		
			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEUP:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageUp();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEDOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageDown();
				} else {
					onChange(0, true);
				}
				break;
			
			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
				if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					event.preventDefault();
					blockSubmit = true;
					return false;
				}
				break;
				
			case KEY.ESC:
				select.hide();
				break;
				
			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	});
	
	
	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;
		
		var v = selected.result;
		previousValue = v;
		
		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				var seperator = options.multipleSeparator.length;
				var cursorAt = $(input).selection().start;
				var wordAt, progress = 0;
				$.each(words, function(i, word) {
					progress += word.length;
					if (cursorAt <= progress) {
						wordAt = i;
						return false;
					}
					progress += seperator;
				});
				words[wordAt] = v;
				// TODO this should set the cursor to the right position, but it gets overriden somewhere
				//$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
				v = words.join( options.multipleSeparator );
			}
			v += options.multipleSeparator;
		}
		
		$input.val(v);
		hideResultsNow();
		$input.trigger("result", [selected.data, selected.value]);
		return true;
	}
	
	function onChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		
		var currentValue = $input.val();
		
		if ( !skipPrevCheck && currentValue == previousValue )
			return;
		
		previousValue = currentValue;
		
		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};
	
	function trimWords(value) {
		if (!value)
			return [""];
		if (!options.multiple)
			return [$.trim(value)];
		return $.map(value.split(options.multipleSeparator), function(word) {
			return $.trim(value).length ? $.trim(word) : null;
		});
	}
	
	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		if (words.length == 1) 
			return words[0];
		var cursorAt = $(input).selection().start;
		if (cursorAt == value.length) {
			words = trimWords(value)
		} else {
			words = trimWords(value.replace(value.substring(cursorAt), ""));
		}
		return words[words.length - 1];
	}
	
	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$(input).selection(previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else {
							$input.val( "" );
							$input.trigger("result", null);
						}
					}
				}
			);
		}
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			
			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});
			
			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};
	
	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				row = row.split("|");
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 10,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
    scroll: true,
    scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;
	
	function matchSubset(s, sub) {
		if (!options.matchCase) 
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (options.matchContains == "word"){
			i = s.toLowerCase().search("\\b" + sub.toLowerCase());
		}
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};
	
	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}
	
	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;
		
		// track all options for minChars = 0
		stMatchSets[""] = [];
		
		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
			
			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;
				
			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] ) 
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};
			
			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}
	
	// populate any existing data
	setTimeout(populate, 25);
	
	function flush(){
		data = {};
		length = 0;
	}
	
	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}				
				return csub;
			} else 
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};
	
	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;
	
	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);
	
		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
	            active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
			    $(target(event)).addClass(CLASSES.ACTIVE);            
	        }
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});
		
		if( options.width > 0 )
			element.css("width", options.width);
			
		needsInit = false;
	} 
	
	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
        var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
        if(options.scroll) {
            var offset = 0;
            listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
            if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
            } else if(offset < list.scrollTop()) {
                list.scrollTop(offset);
            }
        }
	};
	
	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}
	
	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}
	
	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}
	
	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
            if(options.scroll) {
                list.scrollTop(0);
                list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});
				
                if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
                    list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
                }
                
            }
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.fn.selection = function(start, end) {
	if (start !== undefined) {
		return this.each(function() {
			if( this.createTextRange ){
				var selRange = this.createTextRange();
				if (end === undefined || start == end) {
					selRange.move("character", start);
					selRange.select();
				} else {
					selRange.collapse(true);
					selRange.moveStart("character", start);
					selRange.moveEnd("character", end);
					selRange.select();
				}
			} else if( this.setSelectionRange ){
				this.setSelectionRange(start, end);
			} else if( this.selectionStart ){
				this.selectionStart = start;
				this.selectionEnd = end;
			}
		});
	}
	var field = this[0];
	if ( field.createTextRange ) {
		var range = document.selection.createRange(),
			orig = field.value,
			teststring = "<->",
			textLength = range.text.length;
		range.text = teststring;
		var caretAt = field.value.indexOf(teststring);
		field.value = orig;
		this.selection(caretAt, caretAt + textLength);
		return {
			start: caretAt,
			end: caretAt + textLength
		}
	} else if( field.selectionStart !== undefined ){
		return {
			start: field.selectionStart,
			end: field.selectionEnd
		}
	}
};

})(jQuery);;

$(document).ready(function() {
  
     // Registration
	// force only one word, no spaces for input field

	$('#edit-profile-OneWord').keyup(function() {
	    var $th = $(this);
	    $th.val( $th.val().replace(/[^a-zA-Z0-9\-]/g, function(str) { return ''; } ) );
	});

	
	// add all to cart submit

	$('a#add_all').click(function() {
		var element = this;
		var $wrapper = $(element).parents('.flag-wrapper');
		if ($wrapper.is('.flag-waiting')) {
		  // Guard against double-clicks.
		  return false;
		}
		$wrapper.addClass('flag-waiting');
		$("form.jcart-addall").submit();
		//$wrapper.removeClass('flag-waiting');
	 }); 


  // navigation tabs in header
  //$('.nav-item-inner').hide();
  
  $('#navbar-inner>ul>li').hover(function(){
    $(this).addClass('sfHover');
    //$(this).children('.nav-item-inner').slideDown('fast');
  },function(){
    //$(this).children('.nav-item-inner').slideUp('fast',function(){
      $(this).removeClass('sfHover');
    //});
      
  });


  /* Activate first tab */
  $('.tabLink:first').addClass('tabLinkOn');
  $('.tabDiv:first').css('visibility','visible');

  /* Controls tab switching primarily on Product and Shop pages */  
  $('.tabLink').click(function() {

    $(this).hasClass('tabLinkOn') ? ett = 1 : ett = 0;

    $('.tabLink').removeClass('tabLinkOn');

    $('.tabDiv').css('visibility','hidden');

    if (ett == '0') {

      $(this).addClass('tabLinkOn');
      $('#'+$(this).attr('title')).css('visibility','visible');

    }

  });
  

  $('#footer-middle-inner select').change(function() {
    
    fragrance = '';
    fragrance = $('select#best-smellers').val() ;
    window.location = '/shop/all-products/?' +fragrance;
    
  });
    
  // pager form submit handler (not always called because it is a one-field form)
  $("form[name='frm_pager']").submit(function() {
		var field_val="0";
		var formvals = frm.serializeArray();
		jQuery.each(formvals, function(i, field) {
			if (field.name=="page") {
				field_val=field.value;
			}
		});
		pager_goto_page_val(field_val);
  }); 

  // pager form enter key event
  $("form[name='frm_pager']").keydown(function(event) {
	  if (event.keyCode == '13') {
		 event.preventDefault(); // cancel auto-submit
		 pager_goto_page_val(event.currentTarget.page.value)
	   }
  });


  // jcart interaction
  $('.cart-state').live('click', function(event){

  	$('#cart-placemat').hasClass('open') ? st = 1 : st = 0;

	if (st == 0 || $(this).hasClass('form-submit') || $(this).hasClass('big-button')) {

		$('#jcartCart').show();
    	$('#cart-placemat').addClass("open");

	} else {

		$('#jcartCart').hide();
    	$('#cart-placemat').removeClass("open");

	}
  });

  // add carousels to pages
  if($(".giant-fma-container").length > 0){
    $(".giant-fma-container").carousel({
      pagination: true,
      loop: true,
      effect: "fade",
      autoSlide: true,
      autoSlideInterval: 7543
    });
  }

  if($(".product-carousel-container").length > 0){
    $(".product-carousel-container").carousel({
      dispItems: 3,
      slideEasing: "easeInOutCubic",
      animSpeed: "slow"
    });
  }
  
  if($(".working-here-slideshow").length > 0){
    $(".working-here-slideshow").carousel({
      pagination: true,
      loop: true,
      effect: "fade",
      autoSlide: true,
      autoSlideInterval: 7543
    });
  }
 
  $('#comment-form').submit(function(){
	  if ($('#edit-comment').val() == '') {
		  $('#comment-form > div').prepend('<div class="error">please enter a review.</div>');
		  return false;
	  }
  });


  // turns the title of input fields into 'placeholder' text that disappears when the field gets focus
  if( $("#edit-search-theme-form-1,#edit-keep-in-touch-theme-form-1,#search-form .input-text").length > 0 ){
    $("#edit-search-theme-form-1,#edit-keep-in-touch-theme-form-1,#search-form .input-text").each(function(index){
      if ($(this).attr("title").length > 0) {
        $(this).attr("value",$(this).attr("title"));
        $(this).addClass('placeholder-text');
        $(this).focus(function() {
          if ($(this).attr("value") == $(this).attr("title")) {
            $(this).attr("value","");
            $(this).removeClass('placeholder-text');
          }
          return false;
        });
      }
    });
  }

  // attach autocomplete jquery plugin for search suggestions
  var searchTerms = ["omop all floor microfiber mop pad","omop wood floor care kit","squirt + mop hard floor cleaner","hand wash new","method laundry detergent - 25 loads updated","method laundry detergent - 50 loads","squeaky green kids 3-in-1 shampoo","squeaky green HE compatible laundry detergent","squeaky green dryer cloths","hand wash refill","moisturizing hand wash","dryer cloths","multi-surface cleaner","cucumber bundle","fabric softener","natural moisturizing hand wash","tub \'n tile bathroom cleaner","multi-surface wipes","best in glass cleaner","all purpose dilutable cleaner","squeaky green baby body lotion","squeaky green baby bubbly bath","squeaky green baby hair + body wash","squeaky green diaper cream","squeaky green kids body wash","daily shower spray","tub + tile flushable wipes","le scrub bathroom cleaner","lil\' bowl blu","tub n\' tile bathroom cleaner","natural moisturizing body bar","natural moisturizing body wash","foaming hand wash","dish soap","smarty dish detergent","foaming hand wash refill","stainless steel microfiber cloth","stainless steel microfiber cloth","steel for real stainless steel polish","steel for real wipes","wood for good surface cleaner","wood for good surface wipes","method reusable market tote","squeaky green book","cleans like a mother tee","flying bottle tee","Mens \"cleans like a mother\" t-shirt","Mens \"method\" t-shirt","method bottle tree tee","the method method tee","aroma sticks","glass candle","mini soy glass candle set","bathroom cleaning kit","kitchen cleaning kit","bundle of joy kit","pretty in pink kit","squeaky green free + clear laundry kit","french lavender kit","cucumber kit","pink grapefruit kit","free of dyes + perfumes kit","spring cleaning kit","cucumber kitchen kit","daily granite kit","french lavender kitchen kit","free of dyes + perfumes kitchen kit","pink grapefruit kitchen kit","steel for real kit","daily granite cleaning kit","steel for real cleaning kit","the method book + multi-surface spray kit","gel hand wash kit","free of dyes + perfumes gel hand wash kit","foaming hand wash kit","hand wash 5-pack","sweet water laundry kit","free + clear laundry kit","baby laundry kit","crisp apple squeaky green kit","fuzzy peach squeaky green kit","almond","almond flower","citrus leaf","coconut cream + honey","crisp apple","cucumber","cucumber + aloe","free of dyes + perfumes","french lavender","fresh air","fuzzy peach","lemon ginger","mint","olive leaf","orchard blossom","peony blossom","rice milk + mallow","water flower","water lily + aloe","white tea","ylang ylang","eucalyptus mint","free + clear","green tea + aloe","mandarin mango","pink grapefruit","refresh mint","sea minerals","sweet water","water flower","spiced pear","frosted fir","fabric","glass + windows","leather","floor","stone + granite","tile, tub + toilet","wood","stainless steel","bathroom","bedroom","kids room","living room","office","kitchen","laundry","cleaning kits","multi-surface sprays","cleaning wipes","bathroom cleaners","dish cleaners","floor cleaners","specialty cleaners","hand wash","hand wash refills","body wash","laundry kits","detergent","dryer cloths","fabric softeners","baby gift kits","bubbly bath","shampoo + body wash","diaper cream + lotion","refills","all products","summer selections","laundry","surprise me!","everything else","kits + gifts","free + clear","t-shirts, books + more","babies + kids","hands + bodies","home cleaning","crowd pleasers","featured","kits","behind the bottle","cradle to cradle","EPEA","MBDC","DfE","B corp","biodiesel","no animal testing","greensourcing","blue collar sustainability","formulation process","green chemistry","carbon modeling","preservatives","sustainable packaging","climate consciousness","responsible ingredient sourcing","method cares","dirty ingredients list","fragrances","natural","transparency","people against dirty"];

  $("#edit-search-theme-form-1").autocomplete(searchTerms,{
    matchContains: true,
    selectFirst: false
  });
  
  
  // replace select dropdowns with custom styleable markup
  $('select#best-smellers,select#my-item-id,select#fragrance').combobox( 
    {
      comboboxContainerClass: "comboboxContainer",
      comboboxValueContentContainerClass: "comboboxValueContainer",
      comboboxValueContentClass: "comboboxValueContent",
      comboboxDropDownClass: "comboboxDropDownContainer",
      comboboxDropDownButtonClass: "comboboxDropDownButton",
      comboboxDropDownItemClass: "comboboxItem",
      comboboxDropDownItemHoverClass: "comboboxItemHover",
      comboboxDropDownGroupItemHeaderClass: "comboboxGroupItemHeader",
      comboboxDropDownGroupItemContainerClass: "comboboxGroupItemContainer"
    },
    {
      animationType: "slide",
      width: 180
    });
    
    $('select[name="my-item-qty"]').combobox( 
      {
        comboboxContainerClass: "comboboxContainer",
        comboboxValueContentContainerClass: "comboboxValueContainer",
        comboboxValueContentClass: "comboboxValueContent",
        comboboxDropDownClass: "comboboxDropDownContainer",
        comboboxDropDownButtonClass: "comboboxDropDownButton",
        comboboxDropDownItemClass: "comboboxItem",
        comboboxDropDownItemHoverClass: "comboboxItemHover",
        comboboxDropDownGroupItemHeaderClass: "comboboxGroupItemHeader",
        comboboxDropDownGroupItemContainerClass: "comboboxGroupItemContainer"
      },
      {
        animationType: "slide",
        width: 35
      });
      
      $('select#room').combobox( 
        {
          comboboxContainerClass: "comboboxContainer",
          comboboxValueContentContainerClass: "comboboxValueContainer",
          comboboxValueContentClass: "comboboxValueContent",
          comboboxDropDownClass: "comboboxDropDownContainer",
          comboboxDropDownButtonClass: "comboboxDropDownButton",
          comboboxDropDownItemClass: "comboboxItem",
          comboboxDropDownItemHoverClass: "comboboxItemHover",
          comboboxDropDownGroupItemHeaderClass: "comboboxGroupItemHeader",
          comboboxDropDownGroupItemContainerClass: "comboboxGroupItemContainer"
        },
        {
          animationType: "slide",
          width: 100
        });
 
		// fab 5 vote form
		 $('.pds-vote-button').click(function() {
			$("#content-header H1").html( $("#pad-fabfive-postvote-header").html() );

			$("#content-node .content P").html(  $("#pad-fabfive-postvote-copy").html() );
			try {
				Cufon.replace("#content-header H1");
			} catch (e) {}
		 });


	// * Analytics events
	// post review
    $('.node-type-product #comment-form').submit(function() {
		try {
			// get upc from cart form
			var itemId = $("#my-item-id").val();
			if (itemId && itemId !="") {
				_gaq.push(['_trackEvent', 'Prod-Review', itemId, 'prod_details', 1]);
			}
		} catch (e) { }
	});
	// post blog comment
    $('.node-type-blog #comment-form').submit(function() {
		try {
			var articleTitle = $("H1").html();
			// remove html tags
			var re = /(<([^>]+)>)/gi;
			articleTitle = articleTitle.replace(re, "");

			if (articleTitle && articleTitle !="") {
				_gaq.push(['_trackEvent', 'Blog-Comment', articleTitle, 'blog', 1]);
			}
		} catch (e) { }
	});
	// track all outbound links + pdf downloads in page content sections automatically 
	//						(footer links etc are manually tagged)
	$('#content A').click(function(event) {
		try {
			var myhost = window.location.hostname;

			var target = $(this).attr("href");
			var section ="unknown"
			if (typeof _siteSection!="undefined") {
				section =_siteSection;			// set in page.tpl footer
			} 

			if (typeof target!="undefined" && target!=null && target!="#" && target!="") {
				if (target.substr(0,4)=="http" && target.search(myhost) < 0) {		// if not a local link
					try {
						_gaq.push(['_trackEvent', 'Exit-Link', target, section]);
					} catch (e) {}

				} else if (target.toLowerCase().indexOf(".pdf")==target.length-4) {
					// track pdf download
					var path = target.split("/");
					var file = path[path.length-1];
					try {
						_gaq.push(['_trackEvent', 'File-Download', file, section]);
					} catch (e) {}
				}
			}
		} catch(e) {}
	});

	
	// press room
	
          $('#pr-more-press').hide();
          
          $('#pr-more-press-link').click(function() {
			if($(this).parent().next().is(':visible')) {
				$(this).parent().next().hide();
				$('#plusMore').css('background-position','0 0');
			} else {
				$(this).parent().next().slideDown('fast');
				$('#plusMore').css('background-position','0 -9px');
			}
		});
	
	// scrolling
	
	$('#scroll-write-review').click(function(){
		$.scrollTo('#comment_box', 900, {easing:'swing'})
	});
	
	
});

// pager form
function pager_goto_page_val(field_val) {
	var page=0;
	try { 
		page = parseInt(field_val,10); 
	} catch (err) {}	
	var newpage = (page >0) ? page-1:0;		//drupal page numbering starts at 0

	var newurl = location.pathname + $.query.set('page', newpage).toString();
	location.href = newurl;
	return false;
}


var addNewEvent;

if (document.addEventListener) {
	addNewEvent= function(element, type, handler) {
		element.addEventListener(type, handler, false);
	};
} else if (document.attachEvent) {
	addNewEvent= function(element, type, handler) {
		element.attachEvent("on" + type, handler);
	};
} else {
	addNewEvent= new Function;
}
;
