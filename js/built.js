/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
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
 * Copyright Â© 2001 Robert Penner
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
 */;/*

Quicksand 1.3

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

 */

(function($) {
  $.fn.quicksand = function(collection, customOptions) {
    var options = {
      duration : 750,
      easing : 'swing',
      attribute : 'data-id',        // attribute to recognize same items within source and dest
      adjustHeight : 'auto',        // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it
                                    // before or after the animation, false leaves height constant
      adjustWidth : false,         // 'dynamic' animates width during shuffling (slow), 
                                    // 'auto' adjusts it before or after the animation, false leaves width constant
      useScaling : false,           // enable it if you're using scaling effect
      enhancement : function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
      selector : '> *',
      atomic : false,
      dx : 0,
      dy : 0,
      maxWidth : 0,
      retainExisting : false         // disable if you want the collection of items to be replaced completely by incoming items.
    };
    $.extend(options, customOptions);

    // Got IE and want scaling effect? Kiss my ass.
    if ($.browser.msie || (typeof ($.fn.scale) == 'undefined')) {
      options.useScaling = false;
    }

    var callbackFunction;
    if (typeof (arguments[1]) == 'function') {
      callbackFunction = arguments[1];
    } else if (typeof (arguments[2] == 'function')) {
      callbackFunction = arguments[2];
    }

    return this.each(function(i) {
      var val;
      var animationQueue = []; // used to store all the animation params before starting the animation;
      // solves initial animation slowdowns
      var $collection;
      if (typeof(options.attribute) == 'function') {
        $collection = $(collection);
      } else {
        $collection = $(collection).filter('[' + options.attribute + ']').clone(); // destination (target) collection
      }
      var $sourceParent = $(this); // source, the visible container of source collection
      var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
      var sourceWidth = $(this).css('width'); // used to keep  width and document flow during the animation
      var destHeight, destWidth;
      var adjustHeightOnCallback = false;
      var adjustWidthOnCallback = false;
      var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
      var offsets = []; // coordinates of every source collection item
      var $source = $(this).find(options.selector); // source collection items
      var width = $($source).innerWidth(); // need for the responsive design

      // Replace the collection and quit if IE6
      if ($.browser.msie && parseInt($.browser.version, 10) < 7) {
        $sourceParent.html('').append($collection);
        return;
      }

      // Gets called when any animation is finished
      var postCallbackPerformed = 0; // prevents the function from being called more than one time
      var postCallback = function() {
        $(this).css('margin', '').css('position', '').css('top', '').css('left', '').css('opacity', '');
        if (!postCallbackPerformed) {
          postCallbackPerformed = 1;

          if (!options.atomic) {
            // hack: used to be: $sourceParent.html($dest.html()); 
            // put target HTML into visible source container  
            // but new webkit builds cause flickering when replacing the collections
            var $toDelete = $sourceParent.find(options.selector);
            if (!options.retainExisting) {
              $sourceParent.prepend($dest.find(options.selector));
              $toDelete.remove();
            } else {
              // Avoid replacing elements because we may have already altered items in significant
              // ways and it would be bad to have to do it again. (i.e. lazy load images) 
              // But $dest holds the correct ordering. So we must re-sequence items in $sourceParent to match.
              var $keepElements = $([]);
              $dest.find(options.selector).each(function(i) {
                var $matchedElement = $([]);
                if (typeof (options.attribute) == 'function') {
                  var val = options.attribute($(this));
                  $toDelete.each(function() {
                    if (options.attribute(this) == val) {
                      $matchedElement = $(this);
                      return false;
                    }
                  });
                } else {
                  $matchedElement = $toDelete.filter(
                    '[' + options.attribute + '="'+ 
                    $(this).attr(options.attribute) + '"]');
                }
                if ($matchedElement.length > 0) {
                  // There is a matching element in the $toDelete list and in $dest
                  // list, so make sure it is in the right location within $sourceParent
                  // and put it in the list of elements we need to not delete.
                  $keepElements = $keepElements.add($matchedElement);
                  if (i === 0) {
                    $sourceParent.prepend($matchedElement);
                  } else {
                    $matchedElement.insertAfter($sourceParent.find(options.selector).get(i - 1));
                  }
                }
              });
              // Remove whatever is remaining from the DOM
              $toDelete.not($keepElements).remove();
            }

            if (adjustHeightOnCallback) {
              $sourceParent.css('height', destHeight);
            }
            if (adjustWidthOnCallback) {
              $sourceParent.css('width', sourceWidth);
            }
          }
          options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
          if (typeof callbackFunction == 'function') {
            callbackFunction.call(this);
          }
        }

        if (false === options.adjustHeight) {
          $sourceParent.css('height', 'auto');
        }

        if (false === options.adjustWidth) {
          $sourceParent.css('width', 'auto');
        }
      };

      // Position: relative situations
      var $correctionParent = $sourceParent.offsetParent();
      var correctionOffset = $correctionParent.offset();
      if ($correctionParent.css('position') == 'relative') {
        if ($correctionParent.get(0).nodeName.toLowerCase() != 'body') {
          correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
          correctionOffset.left += (parseFloat($correctionParent.css('border-left-width')) || 0);
        }
      } else {
        correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
        correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
        correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
        correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
      }

      // perform custom corrections from options (use when Quicksand fails to detect proper correction)
      if (isNaN(correctionOffset.left)) {
        correctionOffset.left = 0;
      }
      if (isNaN(correctionOffset.top)) {
        correctionOffset.top = 0;
      }

      correctionOffset.left -= options.dx;
      correctionOffset.top -= options.dy;

      // keeps nodes after source container, holding their position
      $sourceParent.css('height', $(this).height());
      $sourceParent.css('width', $(this).width());

      // get positions of source collections
      $source.each(function(i) {
        offsets[i] = $(this).offset();
      });

      // stops previous animations on source container
      $(this).stop();
      var dx = 0;
      var dy = 0;
      $source.each(function(i) {
        $(this).stop(); // stop animation of collection items
        var rawObj = $(this).get(0);
        if (rawObj.style.position == 'absolute') {
          dx = -options.dx;
          dy = -options.dy;
        } else {
          dx = options.dx;
          dy = options.dy;
        }

        rawObj.style.position = 'absolute';
        rawObj.style.margin = '0';

        if (!options.adjustWidth) {
          rawObj.style.width = (width + 'px'); // sets the width to the current element
          // with even if it has been changed
          // by a responsive design
        }

        rawObj.style.top = (offsets[i].top- parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
        rawObj.style.left = (offsets[i].left- parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';

        if (options.maxWidth > 0 && offsets[i].left > options.maxWidth) {
          rawObj.style.display = 'none';
        }
      });

      // create temporary container with destination collection
      var $dest = $($sourceParent).clone();
      var rawDest = $dest.get(0);
      rawDest.innerHTML = '';
      rawDest.setAttribute('id', '');
      rawDest.style.height = 'auto';
      rawDest.style.width = $sourceParent.width() + 'px';
      $dest.append($collection);
      // Inserts node into HTML. Note that the node is under visible source container in the exactly same position
      // The browser render all the items without showing them (opacity: 0.0) No offset calculations are needed, 
      // the browser just extracts position from underlayered destination items and sets animation to destination positions.
      $dest.insertBefore($sourceParent);
      $dest.css('opacity', 0.0);
      rawDest.style.zIndex = -1;

      rawDest.style.margin = '0';
      rawDest.style.position = 'absolute';
      rawDest.style.top = offset.top - correctionOffset.top + 'px';
      rawDest.style.left = offset.left - correctionOffset.left + 'px';

      if (options.adjustHeight === 'dynamic') {
        // If destination container has different height than source container the height can be animated,
        // adjusting it to destination height
        $sourceParent.animate({ height : $dest.height() }, options.duration, options.easing);
      } else if (options.adjustHeight === 'auto') {
        destHeight = $dest.height();
        if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
          // Adjust the height now so that the items don't move out of the container
          $sourceParent.css('height', destHeight);
        } else {
          // Adjust later, on callback
          adjustHeightOnCallback = true;
        }
      }

      if (options.adjustWidth === 'dynamic') {
        // If destination container has different width than source container the width can be animated, 
        // adjusting it to destination width
        $sourceParent.animate({ width : $dest.width() }, options.duration, options.easing);
      } else if (options.adjustWidth === 'auto') {
        destWidth = $dest.width();
        if (parseFloat(sourceWidth) < parseFloat(destWidth)) {
          // Adjust the height now so that the items don't move out of the container
          $sourceParent.css('width', destWidth);
        } else {
          // Adjust later, on callback
          adjustWidthOnCallback = true;
        }
      }

      // Now it's time to do shuffling animation. First of all, we need to identify same elements within
      // source and destination collections
      $source.each(function(i) {
        var destElement = [];
        if (typeof (options.attribute) == 'function') {
          val = options.attribute($(this));
          $collection.each(function() {
            if (options.attribute(this) == val) {
              destElement = $(this);
              return false;
            }
          });
        } else {
          destElement = $collection.filter('[' + options.attribute + '="' + $(this).attr(options.attribute) + '"]');
        }
        if (destElement.length) {
          // The item is both in source and destination collections. It it's under different position, let's move it
          if (!options.useScaling) {
            animationQueue.push({
              element : $(this), dest : destElement,
              style : {
                top : $(this).offset().top,
                left : $(this).offset().left,
                opacity : ""
              },
              animation : {
                top : destElement.offset().top - correctionOffset.top,
                left : destElement.offset().left - correctionOffset.left,
                opacity : 1.0
              }
            });
          } else {
            animationQueue.push({
              element : $(this), dest : destElement,
              style : {
                top : $(this).offset().top,
                left : $(this).offset().left,
                opacity : ""
              },
              animation : {
                top : destElement.offset().top - correctionOffset.top,
                left : destElement.offset().left - correctionOffset.left,
                opacity : 1.0,
                scale : '1.0'
              }
            });
          }
        } else {
          // The item from source collection is not present in destination collections.  Let's remove it
          if (!options.useScaling) {
            animationQueue.push({
              element : $(this),
              style : {
                top : $(this).offset().top,
                left : $(this).offset().left,
                opacity : ""
              },
              animation : {
                opacity : '0.0'
              }
            });
          } else {
            animationQueue.push({
              element : $(this),
              animation : {
                opacity : '0.0',
                style : {
                  top : $(this).offset().top,
                  left : $(this).offset().left,
                  opacity : ""
                },
                scale : '0.0'
              }
            });
          }
        }
      });

      $collection.each(function(i) {
        // Grab all items from target collection not present in visible source collection
        var sourceElement = [];
        var destElement = [];
        if (typeof (options.attribute) == 'function') {
          val = options.attribute($(this));
          $source.each(function() {
            if (options.attribute(this) == val) {
              sourceElement = $(this);
              return false;
            }
          });

          $collection.each(function() {
            if (options.attribute(this) == val) {
              destElement = $(this);
              return false;
            }
          });
        } else {
          sourceElement = $source.filter('[' + options.attribute + '="' + $(this).attr(options.attribute) + '"]');
          destElement = $collection.filter('[' + options.attribute + '="' + $(this).attr(options.attribute) + '"]');
        }

        var animationOptions;
        if (sourceElement.length === 0 && destElement.length > 0) {

          // No such element in source collection...
          if (!options.useScaling) {
            animationOptions = {opacity : '1.0'};
          } else {
            animationOptions = {opacity : '1.0', scale : '1.0'};
          }

          // Let's create it
          var d = destElement.clone();
          var rawDestElement = d.get(0);
          rawDestElement.style.position = 'absolute';
          rawDestElement.style.margin = '0';

          if (!options.adjustWidth) {
            // sets the width to the current element with even if it has been changed by a responsive design
            rawDestElement.style.width = width + 'px'; 
          }

          rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
          rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';

          d.css('opacity', 0.0); // IE

          if (options.useScaling) {
            d.css('transform', 'scale(0.0)');
          }
          d.appendTo($sourceParent);

          if (options.maxWidth === 0 || destElement.offset().left < options.maxWidth) {
            animationQueue.push({element : $(d), dest : destElement,animation : animationOptions});
          }
        }
      });

      $dest.remove();
      if (!options.atomic) {
        options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
        for (i = 0; i < animationQueue.length; i++) {
          animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
        }
      } else {
        $toDelete = $sourceParent.find(options.selector);
        $sourceParent.prepend($dest.find(options.selector));
        for (i = 0; i < animationQueue.length; i++) {
          if (animationQueue[i].dest && animationQueue[i].style) {
            var destElement = animationQueue[i].dest;
            var destOffset = destElement.offset();

            destElement.css({
              position : 'relative',
              top : (animationQueue[i].style.top - destOffset.top),
              left : (animationQueue[i].style.left - destOffset.left)
            });

            destElement.animate({top : "0", left : "0"}, 
                                options.duration, 
                                options.easing, 
                                postCallback);
          } else {
            animationQueue[i].element.animate(animationQueue[i].animation, 
                                              options.duration, 
                                              options.easing,
                                              postCallback);
          }
        }
        $toDelete.remove();
      }
    });
  };
})(jQuery);
;// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// loads up livereload for dev
var loadReload = function() {

    var lr = document.createElement("script");
        lr.type = "text/javascript";
        lr.src = "//localhost:35729/livereload.js";

    if (jQuery('#global_footer')) {
        jQuery('#global_footer').append(lr);
        console.log('livereload is locked and loaded!!');
    }
}
;jQuery(document).ready(function($){

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
	
});;jQuery(document).ready(function($) {

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