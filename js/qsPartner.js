)//Start QuidsiHelper
var QuidsiHelper = {};
QuidsiHelper.extend = function (destination, source) {
    for (var property in source) {
        if (destination[property]) {
            continue;
        }
        destination[property] = source[property];
    }
    return destination;
};
QuidsiHelper.clone = function (matrix) {
    if (typeof (matrix) == "function") {
        return new matrix();
    }
    else if (typeof (matrix) == "object") {
        var cloning = new Object();
        for (var member in matrix) {
            switch (typeof (matrix[member])) {
                case "object":
                    cloning[member] = clone(matrix[member]);
                    break;
                default:
                    cloning[member] = matrix[member];
            }
        }
        return cloning;
    }
    else {
        var cloning = matrix;
        return cloning;
    }
}
QuidsiHelper.getWindowWidth = function (objWindow) {
    if (objWindow.innerWidth) {
        return Math.min(objWindow.innerWidth, objWindow.document.documentElement.clientWidth);
    }
    else {
        return objWindow.document.documentElement.clientWidth;
    }
}

QuidsiHelper.getWindowHeight = function (objWindow) {
    if (objWindow.innerHeight) {
        return Math.min(objWindow.innerHeight, objWindow.document.documentElement.clientHeight);
    }
    else {
        return objWindow.document.documentElement.clientHeight;
    }
}

QuidsiHelper.getDocumentScrollTop = function (objDocument) {
    return Math.max(objDocument.documentElement.scrollTop, objDocument.body.scrollTop);
}

QuidsiHelper.getDocumentScrollLeft = function (objDocument) {
    return Math.max(objDocument.documentElement.scrollLeft, objDocument.body.scrollLeft);
}

QuidsiHelper.getDocumentWidth = function (objDocument) {
    return objDocument.documentElement.scrollWidth;
}

QuidsiHelper.getDocumentHeight = function (objDocument) {
    return objDocument.documentElement.scrollHeight;
}

QuidsiHelper.maxZIndex = function () {
    var zIndex = 0;
    var elments = document.getElementsByTagName("*");
    for (var i = 0; i < elments.length; i++) {
        if (jQuery(elments[i]).css("z-index")) {
            if (zIndex < parseInt(jQuery(elments[i]).css("z-index"))) {
                zIndex = jQuery(elments[i]).css("z-index");
            }
        }
    }
    return parseInt(zIndex);
}

QuidsiHelper.BindEvent = function (element, type, listener) {
    if (window.addEventListener) {
        element.addEventListener(type, listener, false);
    }
    else if (window.attachEvent) {
        element.attachEvent('on' + type, listener);
    }
}
QuidsiHelper.userAgent = navigator.userAgent.toLowerCase();
QuidsiHelper.browser = {
    version: (QuidsiHelper.userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
    safari: /webkit/.test(QuidsiHelper.userAgent),
    opera: /opera/.test(QuidsiHelper.userAgent),
    msie: /msie/.test(QuidsiHelper.userAgent) && !/opera/.test(QuidsiHelper.userAgent),
    mozilla: /mozilla/.test(QuidsiHelper.userAgent) && !/(compatible|webkit)/.test(QuidsiHelper.userAgent)
};
//End QuidsiHelper

//Start QuidsiList
function QuidsiList() {
    this.data = new Array();
}
QuidsiList.prototype.count = function () {
    return this.data.length;
}

QuidsiList.prototype.indexOf = function (item) {
    var index = -1;
    for (var i = this.count(); i >= 0; ) {
        if (this.data[--i] == item) {
            index = i;
            break;
        }
    }
    return index;
}
QuidsiList.prototype.contain = function (item) {
    return this.indexOf(item) == -1 ? false : true;
}
QuidsiList.prototype.add = function (item) {
    if (this.contain(item)) {
        return;
    }
    this.data.push(item);
}
QuidsiList.prototype.removeAt = function (index) {
    for (var i = index; i < this.count() - 1; i++) {
        this[i] = this[i + 1];
    }
    return this.data.pop();
}
QuidsiList.prototype.item = function (index) {
    if (index >= 0 && index <= this.count() - 1) {
        return this.data[index]
    }
}
QuidsiList.prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index != -1) {
        return this.removeAt(index);
    }
    return null;
}
//End QuidsiList

//Start QuidsiMaskPopup
function QuidsiMaskPopup(param) {
    this.targetWindow = param["targetWindow"] || window;
    this.elementKey = new Array();
    this.element = new Object();
    this.style = new Object();
    this.cssClass = new Object();

    this.elementKey.push("maskSpan");
    this.elementKey.push("maskDiv");
    this.element["maskSpan"] = this.targetWindow.document.createElement("span");
    this.element["maskDiv"] = this.targetWindow.document.createElement("div");
    this.element["maskDiv"].setAttribute("class", "maskBackground");
    this.element["maskDiv"].setAttribute("className", "maskBackground");
    this.style["maskDiv"] = { zIndex: QuidsiHelper.maxZIndex() + 1, display: "block" };
}
QuidsiMaskPopup.prototype.setStyle = function () {
    this.element.maskDiv.style.zIndex = this.style["maskDiv"]["zIndex"];
    this.element.maskDiv.style.display = this.style["maskDiv"]["display"];
}

QuidsiMaskPopup.prototype.setSize = function () {
    this.element.maskDiv.style.width = "100%";
    this.element.maskDiv.style.height = Math.max(QuidsiHelper.getWindowHeight(this.targetWindow), QuidsiHelper.getDocumentHeight(this.targetWindow.document)) + "px";
}

QuidsiMaskPopup.prototype.setPosition = function () {
    this.element.maskDiv.style.left = "0px";
    this.element.maskDiv.style.top = "0px";
}
QuidsiMaskPopup.prototype.build = function () {
    this.element.maskSpan.appendChild(this.element.maskDiv);
    this.targetWindow.document.body.appendChild(this.element.maskSpan);
}
QuidsiMaskPopup.prototype.bindEvent = function () {
    var me = this;
    QuidsiHelper.BindEvent(this.targetWindow, "resize", function () { me.setSize(); });
}
QuidsiMaskPopup.prototype.show = function () {
    this.setSize();
    this.setStyle();
    this.build();
    this.setPosition();
    this.bindEvent();
}
QuidsiMaskPopup.prototype.close = function () {
    this.targetWindow.document.body.removeChild(this.element.maskSpan);
}
//End QuidsiMaskPopup

//Start QuidsiPopup
function QuidsiPopup(param) {
    this.targetWindow = param["targetWindow"] || window;
    this.elementKey = new Array();
    this.config = new Object();
    this.element = new Object();
    this.callBack = new Object();
    this.cssClass = new Object();
    this.style = new Object();
    this.size = new Object();
    this.position = new Object();
    this.action = new Object();
    this.actionData = new Object();

    if (param.showMask) {
        this.config["showMask"] = param.showMask;
        this.mask = new QuidsiMaskPopup({ targetWindow: this.targetWindow });
    }
    this.config["title"] = param.title;
    this.config["content"] = param.content;
    this.config["language"] = param["language"] || "en-us";
    this.config["autoSize"] = false;
    this.config["moveable"] = !!param["moveable"];
    this.callBack["closeCallBack"] = param.closeCallBack;

    this.size["width"] = param.width || 300;
    this.size["height"] = param.height || 180;

    this.position["top"] = param.top;
    this.position["left"] = param.left;
    this.init();
}

QuidsiPopup.language = new Object();

QuidsiPopup.language["en-us"] = new Object();
QuidsiPopup.language["en-us"]["ok"] = "OK";
QuidsiPopup.language["en-us"]["cancel"] = "Cancel";
QuidsiPopup.language["en-us"]["close"] = "Close";
QuidsiPopup.language["en-us"]["yes"] = "Yes";
QuidsiPopup.language["en-us"]["no"] = "No";

QuidsiPopup.prototype.init = function () {
    this.action["hasShow"] = false;
    this.action["isMoving"] = false;

    this.actionData["moveStart"] = null;
    this.actionData["moveEnd"] = null;

    this.elementKey.push("popupSpan");
    this.elementKey.push("popupDiv");
    this.elementKey.push("popupBorderTop");
    this.elementKey.push("popupBorderBottom");
    this.elementKey.push("popupContent");

    this.elementKey.push("closeDiv");
    this.elementKey.push("headerDiv");

    this.elementKey.push("contentDiv");
    this.element["popupSpan"] = this.targetWindow.document.createElement("span");
    this.element["popupDiv"] = this.targetWindow.document.createElement("div");
    this.element["popupBorderTop"] = this.targetWindow.document.createElement("div");
    this.element["popupBorderBottom"] = this.targetWindow.document.createElement("div");

    this.element["popupContent"] = this.targetWindow.document.createElement("div");
    this.element["popupContent"].setAttribute("class", "stickyTooltipContent");
    this.element["popupContent"].setAttribute("className", "stickyTooltipContent");

    this.element["headerDiv"] = this.targetWindow.document.createElement("h2");
    this.element["headerDiv"].setAttribute("class", "stickyTooltipTitle");
    this.element["headerDiv"].setAttribute("className", "stickyTooltipTitle");

    this.element["closeDiv"] = this.targetWindow.document.createElement("div");
    this.element["closeDiv"].setAttribute("class", "QuidsiCloseBtn");
    this.element["closeDiv"].setAttribute("className", "QuidsiCloseBtn");
    this.style["closeDiv"] = { position: "absolute", right: "8px", top: "6px" };
    this.element["closeDiv"].innerHTML = "close [x]";

    this.element["contentDiv"] = this.targetWindow.document.createElement("div");
    this.element["contentDiv"].setAttribute("class", "iframeContent");
    this.element["contentDiv"].setAttribute("className", "iframeContent");

    this.style["popupDiv"] = { position: "absolute" };

    this.style["popupDiv"]["zIndex"] = QuidsiHelper.maxZIndex() + 3;
}

//initBackground
QuidsiPopup.prototype.initBackground = function () { }
//initContent
QuidsiPopup.prototype.initContent = function () { }
//setStyle
QuidsiPopup.prototype.setStyle = function () {
    for (var i = this.elementKey.length - 1; i > 0; i--) {
        var key = this.elementKey[i];
        if (!this.style[key]) {
            continue;
        }
        for (var styleItem in this.style[key]) {
            try {
                this.element[key].style[styleItem] = this.style[key][styleItem];
            }
            catch (e)
			{ }
        }
    }
}
QuidsiPopup.prototype.setClass = function () {
    for (var i = this.elementKey.length - 1; i > 0; i--) {
        var key = this.elementKey[i];
        if (!this.cssClass[key]) {
            continue;
        }
        try {
            this.element[key].className = this.cssClass[key];
        }
        catch (e)
		{ }
    }
}
//setSize
QuidsiPopup.prototype.setSize = function () {
    this.element.popupDiv.style["width"] = (parseInt(this.size.width) + 16) + "px";
    this.element.popupDiv.style["height"] = this.size.height + "px";
}
//setSize with URL iframe
QuidsiPopup.prototype.setUrlSize = function () {
    this.element.popupDiv.style["height"] = this.size.height + "px";
}
//setPosition
QuidsiPopup.prototype.setPosition = function () {
    if (this.position.top) {
        this.element.popupDiv.style["top"] = this.position.top + "px";
    }
    else {
        var availHeight = QuidsiHelper.getWindowHeight(this.targetWindow);
        var availTop = 0;
        if (availHeight - this.size.height > 0) {
            availTop = (availHeight - this.size.height) / 2 + QuidsiHelper.getDocumentScrollTop(this.targetWindow.document);
            this.element.popupDiv.style["top"] = availTop + "px";
        }
        else {
            availTop = 20 + QuidsiHelper.getDocumentScrollTop(this.targetWindow.document);
            this.element.popupDiv.style["top"] = availTop + "px";
            if (this.config["showMask"]) {
                this.mask.setSize();
            }
        }
    }
    if (this.position.left) {
        this.element.popupDiv.style["left"] = this.position.left + "px";
    }
    else {
        var availWidth = QuidsiHelper.getWindowWidth(this.targetWindow);
        var availLeft = 0;
        if (availWidth - this.size.width > 0) {
            availLeft = (availWidth - this.size.width) / 2 + QuidsiHelper.getDocumentScrollLeft(this.targetWindow.document);
        }
        this.element.popupDiv.style["left"] = availLeft + "px";
    }
}
//build
QuidsiPopup.prototype.build = function () {
    this.element["popupBorderTop"].innerHTML = "<div class=\"stickyTooltipTopLeft\"> </div><div class=\"stickyTooltipTopRight\"> </div><div class=\"clear\"> </div>";
    this.element["popupBorderTop"].setAttribute("class", "stickyTooltipTop");
    this.element["popupBorderTop"].setAttribute("className", "stickyTooltipTop");
    this.element["popupDiv"].appendChild(this.element["popupBorderTop"]);

    if (this.config["title"] != "") {
        this.element["headerDiv"].innerHTML = this.config["title"];
        this.element["popupContent"].appendChild(this.element["headerDiv"]);
    }
    this.element["popupContent"].appendChild(this.element["contentDiv"]);
    this.element["popupContent"].appendChild(this.element["closeDiv"]);
    this.element["popupDiv"].appendChild(this.element["popupContent"]);

    this.element["popupSpan"].appendChild(this.element["popupDiv"]);
    try {
        this.targetWindow.document.body.appendChild(this.element["popupSpan"]);
    }
    catch (ex) {
        //alert(this.targetWindow.document.body.innerHTML);
        //alert(ex.message);
    }

    this.element["popupBorderBottom"].innerHTML = "<div class=\"stickyTooltipBtmLeft\"> </div><div class=\"stickyTooltipBtmRight\"> </div><div class=\"clear\"> </div>";
    this.element["popupBorderBottom"].setAttribute("class", "stickyTooltipBtm");
    this.element["popupBorderBottom"].setAttribute("className", "stickyTooltipBtm");
    this.element["popupDiv"].appendChild(this.element["popupBorderBottom"]);
}
//buildContent
QuidsiPopup.prototype.buildContent = function () { }
//bindEvents
QuidsiPopup.prototype.bindEvents = function () {
    var me = this;
    var QuidsiPopupClose = function(){
        me.close();
        if (me.callBack.closeCallBack) {
            me.callBack.closeCallBack();
        }
    }
    QuidsiHelper.BindEvent(this.element["closeDiv"], "click", function () {
        QuidsiPopupClose();
    });
    //close the hopup windows whenever users click outside of them
    if(me.config.showMask){
        QuidsiHelper.BindEvent(this.mask.element["maskDiv"], "click", function () {
            QuidsiPopupClose();
        });
    }
    if (me.config["moveable"]) {
        QuidsiHelper.BindEvent(this.element["headerDiv"], "mousedown", function (event) {
            me.action["isMoving"] = true;
            me.actionData["moveStart"] = { left: event.clientX, top: event.clientY };
            me.element["headerDiv"].style["cursor"] = 'move';
        });
        QuidsiHelper.BindEvent(this.targetWindow.document, "mousemove", function (event) {
            if (me.action["isMoving"]) {
                var srcelement = event.srcelement || event.target;
                me.actionData["moveEnd"] = { left: event.clientX, top: event.clientY };
                var targetLeft = parseInt(me.element.popupDiv.style["left"]) + event.clientX - me.actionData["moveStart"].left;
                var targetTop = parseInt(me.element.popupDiv.style["top"]) + event.clientY - me.actionData["moveStart"].top;
                if (targetLeft >= 0 && targetLeft <= QuidsiHelper.getDocumentWidth(me.targetWindow.document) - me.element.popupDiv.clientWidth) {
                    me.element.popupDiv.style["left"] = targetLeft + "px";
                }
                else {
                    me.action["isMoving"] = false;
                    me.element["headerDiv"].style["cursor"] = 'auto';
                }
                if (targetTop >= 0 && targetTop <= QuidsiHelper.getDocumentHeight(me.targetWindow.document) - me.element.popupDiv.clientHeight) {
                    me.element.popupDiv.style["top"] = targetTop + "px";
                }
                else {
                    me.action["isMoving"] = false;
                    me.element["headerDiv"].style["cursor"] = 'auto';
                }
                me.actionData["moveStart"] = me.actionData["moveEnd"];
            }
        });
        QuidsiHelper.BindEvent(this.targetWindow.document, "mouseup", function () {
            me.action["isMoving"] = false;
            me.element["headerDiv"].style["cursor"] = 'auto';
        });
    }
}
QuidsiPopup.prototype.bindContentEvents = function () { }
//show
QuidsiPopup.prototype.show = function () {
    this.initBackground();
    //	this.init();
    //	this.initContent();
    this.setStyle();
    this.setClass();
    this.setSize();
    this.setPosition();
    this.bindEvents();
    this.bindContentEvents();
    this.build();
    this.buildContent();
    if (this.config.showMask) {
        this.mask.show();
    }
}
QuidsiPopup.prototype.showModalDialog = function () {
    this.show();
    this.mask.show();
}
//close
QuidsiPopup.prototype.close = function () {
    this.targetWindow.document.body.removeChild(this.element.popupSpan);
    if (this.config["showMask"]) {
        this.mask.close();
    }
}
//addCallBack
QuidsiPopup.prototype.addCallBack = function (elementKey, listener) {
    elementKey = elementKey.toLowerCase();
    if (this.element[elementKey]) {
        this.callBack[elementKey].add(listener);
    }
}
//removeCallBack
QuidsiPopup.prototype.removeCallBack = function (elementKey, listener) {
    elementKey = elementKey.toLowerCase();
    if (this.element[elementKey]) {
        this.callBack[elementKey].remove(listener);
    }
}
//End QuidsiPopup

//Start QuidsiHtmlPopup
function QuidsiHtmlPopup(param) {
    this.base = new QuidsiPopup(param);
    QuidsiHelper.extend(this, this.base);
    this.initContent();
}
QuidsiHtmlPopup.prototype.initContent = function () {
    this.element["contentDiv"].innerHTML = this.config["content"];
}
QuidsiHtmlPopup.prototype.bindContentEvents = function () { }
QuidsiHtmlPopup.prototype.buildContent = function () {
    var me = this;
    me.size.height = me.element["popupContent"].offsetHeight + me.element["popupBorderTop"].offsetHeight + me.element["popupBorderBottom"].offsetHeight;
    me.setSize();
    me.setPosition();
}
//End QuidsiHtmlPopup





jQuery(function () {
    quidsiPartnerInfo.partnerCode = "methodhome";
    quidsiPartner.syncSession(quidsiPartner.initPage, 5000, quidsiPartner.initPage);
    $('#my-item-id').change(function () {
        var sku = this.options[index].value;
        $("#price").text("$" + quidsiPartner.skusPrice[sku].toFixed(2));
    });
});


//Start quidsiPartner

var quidsiPartner = {
    cartItemList: null,
    quidsiItemList: null,
    product: null,
    productSkuList: null,
    zipCode: null,
    isSkuPage: false,
    isProductPage: false,
    timeOutArray: [],
    noItemTimer: null,
    itmePrice: null,
    skusPrice: null,


    initPage: function () {
        quidsiPartner.getCartInfo(quidsiUI.showCartInfo);
        quidsiPartner.getItemsPrice();
    },


    getCallbackWithTimeOut: function (fn, timeOut, timeOutFn) {
        if (!fn) return function () { };
        if (!timeOut) return fn;
        timeOutFn = timeOutFn || function () { };

        quidsiPartner.timeOutArray.push({ timeOutFn: timeOutFn, called: false });

        var index = quidsiPartner.timeOutArray.length - 1;

        var callBackTimer = setTimeout(function () {
            quidsiPartner.timeOutArray[index].called = true;
            quidsiPartner.timeOutArray[index].timeOutFn();
        }, timeOut);

        return function () {
            if (!quidsiPartner.timeOutArray[index].called) {
                clearTimeout(callBackTimer);
                fn();
            }
        };
    },

    syncSession: function (fn, timeOut, timeOutFn) {
        if (!quidsiPartner.checkPartnerInfo()) return;

        fn = quidsiPartner.getCallbackWithTimeOut(fn, timeOut, timeOutFn);

        var checkNeedSyncUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=CheckNeedSyncSession&partnerCode=" + quidsiPartnerInfo.partnerCode + "&callback=?";

        jQuery.getJSON(checkNeedSyncUrl, function (data) {
            if (!data.needSync) { fn(); return; }

            var getSessionUrl = "http://" + data.globalSite + "/Services/PublishingPartnerService.aspx?method=GetGlobalSession&partnerCode=" + quidsiPartnerInfo.partnerCode + "&callback=?";
            jQuery.getJSON(getSessionUrl, function (data) {
                var syncSessionUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=UpdateSession&partnerCode=" + quidsiPartnerInfo.partnerCode + "&session=" + data.session + "&callback=?";
                jQuery.getJSON(syncSessionUrl, fn);
            });
        });
    },


    getCartInfo: function (fn, timeOut, timeOutFn) {
        if (!quidsiPartner.checkPartnerInfo()) return;

        fn = quidsiPartner.getCallbackWithTimeOut(fn, timeOut, timeOutFn);

        var getCartUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=GetCartInfo&partnerCode=" + quidsiPartnerInfo.partnerCode + "&callback=?";
        jQuery.getJSON(getCartUrl, function (data) {
            if (data && data.itemList) {
                quidsiPartner.cartItemList = data.itemList;
                quidsiPartner.quidsiCartItemList = data.quidsiItemList;
            }
            fn();
        });
    },

    getProductInfo: function (sku, divTagId, fn, timeOut, timeOutFn) {
        if (!quidsiPartner.checkPartnerInfo()) return;

        fn = quidsiPartner.getCallbackWithTimeOut(fn, timeOut, timeOutFn);

        var getProductUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=GetProductInfo&partnerCode=" + quidsiPartnerInfo.partnerCode + "&sku=" + sku + "&callback=?";
        jQuery.getJSON(getProductUrl, function (data) {
            if (data && data.skuList) {
                quidsiPartner.itmePrice = "$" + data.skuList[0].price;
                jQuery("#" + divTagId).html(quidsiPartner.itmePrice);
            }
            fn();
        });
    },

    addToCart: function (sku, qty, fn, timeOut, timeOutFn) {
        if (!quidsiPartner.checkPartnerInfo()) return;

        fn = quidsiPartner.getCallbackWithTimeOut(fn, timeOut, timeOutFn);

        var addToCartUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=AddToCart&partnerCode=" + quidsiPartnerInfo.partnerCode + "&sku=" + sku + "&quantity=" + qty + "&callback=?";
        jQuery.getJSON(addToCartUrl, function (data) {
            if (data && data.itemList) {
                quidsiPartner.cartItemList = data.itemList;
                quidsiPartner.quidsiCartItemList = data.quidsiItemList;
                quidsiUI.showCartInfo();
                quidsiPartner.openMiniCart();
                fn();
            }
        });
    },

    openMiniCart: function () {
        $('.top-cart #jcartCart').show();
        $('.top-cart #cart-placemat').addClass("open");
    },

    closeMiniCart: function () {
        $('.top-cart #jcartCart').hide();
        $('.top-cart #cart-placemat').removeClass("open");
    },

    updateQuantity: function (basketId, qty) {
        if (!quidsiPartner.checkPartnerInfo()) return;
        if (qty < 1) {
            quidsiPartner.removeItem(basketId);
        }
        else {
            var updateUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=UpdateItemQty&partnerCode=" + quidsiPartnerInfo.partnerCode + "&basketId=" + basketId + "&quantity=" + qty + "&callback=?";

            jQuery.getJSON(updateUrl, function (data) {
                if (data && data.itemList) {
                    quidsiPartner.cartItemList = data.itemList;
                    quidsiPartner.quidsiCartItemList = data.quidsiItemList;
                    quidsiUI.showCartInfo();
                    quidsiPartner.openMiniCart();
                }
            });
        }
        quidsiUI.showCartInfo();
        quidsiPartner.openMiniCart();
    },

    getItemsPrice: function () {
        if (!quidsiPartner.checkPartnerInfo()) return;

        var skuId = new Array();
        var options = $('#my-item-id option');
        for (var i = 0; i < options.length; i++) {
            skuId[i] = options.eq(i).val();
        }
        var skusPrice = new Array();
        var getProductUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=GetProductInfo&partnerCode=" + quidsiPartnerInfo.partnerCode + "&skuList=" + skuId.join(',') + "&callback=?";
        jQuery.getJSON(getProductUrl, function (data) {
            if (data && data.skuList) {
                for (var i = 0; i < data.skuList.length; i++) {
                    if (data.skuList[i] == undefined) {
                        continue;
                    }
                    var skulist = data.skuList[i];
                    for (var j = 0; j < skuId.length; j++) {
                        if (skulist.sku == skuId[j])
                            skusPrice[skuId[j]] = skulist.price;
                    }
                }
                quidsiPartner.skusPrice = skusPrice;
                var selectedsku = skuId[0];
                $("#product-detail-price").text("$" + skusPrice[selectedsku].toFixed(2));
            }
        });
    },

    removeItem: function (basketItemId, fn, timeOut, timeOutFn) {
        if (!quidsiPartner.checkPartnerInfo()) return;

        fn = quidsiPartner.getCallbackWithTimeOut(fn, timeOut, timeOutFn);

        var addToCartUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/Services/PublishingPartnerService.aspx?method=RemoveItem&partnerCode=" + quidsiPartnerInfo.partnerCode + "&basketItemId=" + basketItemId + "&callback=?";
        jQuery.getJSON(addToCartUrl, function (data) {
            if (data && data.itemList) {
                quidsiPartner.cartItemList = data.itemList;
                quidsiPartner.quidsiCartItemList = data.quidsiItemList;
                fn();
                quidsiPartner.openMiniCart();
            }
        });
    },

    getCartStatus: function () {
        var arr = document.cookie.match(new RegExp("(^| )quidsiCartStatus=([^;]*)(;|$)"));
        if (arr != null)
            return unescape(arr[2]);
        return null;
    },

    setCartStatus: function (status) {
        var exdate = new Date();
        exdate.setFullYear(exdate.getFullYear() + 1);
        document.cookie = "quidsiCartStatus=" + escape(status) + ";path=/; expires=" + exdate.toUTCString();
    },

    checkPartnerInfo: function () {
        return quidsiPartnerInfo
            && quidsiPartnerInfo.partnerCode && quidsiPartnerInfo.partnerCode != ""
            && quidsiPartnerInfo.quidsiSite && quidsiPartnerInfo.quidsiSite != "";
    },

    recordVisitorFromPartner: function () {
        var quidsirecordVisitorUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/shoppingcart!RecordVisitorFromPartner.qs?PartnerCode=" + quidsiPartnerInfo.partnerCode + "&random=" + Math.random();
        jQuery.getJSON(quidsirecordVisitorUrl);
    },

    redirectQuidsiSite: function () {
        var quidsiCheckoutUrl = "http://" + quidsiPartnerInfo.quidsiSite + "/shoppingcart.qs?partnerCode=" + quidsiPartnerInfo.partnerCode;
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var referLink = document.createElement('a');
            referLink.href = quidsiCheckoutUrl;
            referLink.attachEvent("onclick", function () { checkoutTracking(quidsiCheckoutUrl); });
            document.body.appendChild(referLink);
            referLink.click();
        }
        else {
            checkoutTracking(quidsiCheckoutUrl);
            location.href = quidsiCheckoutUrl;
        }
    },

    checkout: function () {
        quidsiPartner.recordVisitorFromPartner();
        setTimeout("quidsiPartner.redirectQuidsiSite()", 500);
    }
}

//End quidsiPartner

function checkoutTracking(url) {
    //if (_gaq) _gaq.push(['_link', url]);
}

//Start quidsiUI

var quidsiUI = {
    quickShopHopup: null,
    notifyMeHopup: null,
    zipCodeHopup: null,
    checkoutHopup: null,
    hopupCloseTimer: null,
    autoSlideInterval: 3000,
    autoSlideTimer: null,
    autoRedirectTimer: null,

    handleRemoveItem: function (basketItemId) {
        quidsiPartner.removeItem(basketItemId, quidsiUI.showCartInfo);
    },

    showCartInfo: function () {
        var cartItemsHtml = "";
        var subTotal = 0;
        var itemTotal = 0;

        if (quidsiPartner && quidsiPartner.cartItemList != null) {
            for (var i = 0; i < quidsiPartner.cartItemList.length; i++) {
                var item = quidsiPartner.cartItemList[i];

                var priceString = "$" + item.price.toFixed(2);

                var sampleItemPrice = item.price * item.qty;
                subTotal += item.price * item.qty;
                itemTotal += item.qty;

                cartItemsHtml += '                      <tr>';
                cartItemsHtml += '							<td style="width:45px; overflow:hidden;word-wrap: break-word; word-break:break-all;"><img alt="" src="' + item.imageUrl + '" /></td>';
                cartItemsHtml += '							<td class="jcart-item-name"><a href="' + item.partnerPDPUrl + '">' + item.brandName + ' ' + item.productShortName + '</a></td>';
                cartItemsHtml += '							<td class="jcart-item-qty"><input id="jcart-item-id-' + item.basketItemId + '" type="text" name="jcart_item_qty[ ]" size="2" onkeyup="quidsiPartner.updateQuantity(\'' + item.basketItemId + '\',this.value)" value="' + item.qty + '" /></td>';
                cartItemsHtml += '							<td class="jcart-item-price"><span>$' + sampleItemPrice.toFixed(2) + '</span></td>';
                //cartItemsHtml += '							<td class="jcart-item-delete"><a class="jcart-remove" href="javascript:void(0);" onclick="quidsiUI.handleRemoveItem(' + item.basketItemId + ');"><img alt="remove" src="http://methodhome.com/sites/all/themes/zen/zen/images/btn-remove-item.png" /></a></td>';
                cartItemsHtml += '							<td class="jcart-item-delete"><a class="jcart-remove" href="javascript:void(0);" onclick="quidsiUI.handleRemoveItem(' + item.basketItemId + ');">X</a></td>';
                cartItemsHtml += '                      </tr>';
            }
        }

        subTotalString = "$" + subTotal.toFixed(2);

        var cartHtml = "";
        cartHtml += '	<div id="cart-placemat">';
        cartHtml += '		<div id="jcart">';
        if(itemTotal > 0) {
        	cartHtml += '           <div id="jcartMenu" class="jcartNotEmpty">';
        } else {
	        cartHtml += '           <div id="jcartMenu">';
        }
        cartHtml += '		        <a href="javascript:void(0);" style="background-image:url(http://methodhome.com/sites/all/themes/zen/zen/images/btn-view-cart.png);" class="view-cart-link cart-state" onclick="quidsiUI.partnerCartInit()">(' + itemTotal + ')</a>';
        cartHtml += '		    </div>';
        cartHtml += '		    <div id="jcartCart" style="display: none">';
        cartHtml += '			    <form id="jcart-inner">';
        cartHtml += '			        <fieldset>';
        cartHtml += '		                <p class="header">';
        cartHtml += '		                    <span class="header-text">' + itemTotal + '&nbsp;item' + (itemTotal == 1 ? '' : 's') + ' in your cart</span>';
        cartHtml += '		                    <a href="#" class="jcart-close-button cart-state" onclick="return false;"><img src="http://methodhome.com/images/btn-close-cart.png" alt="Close" style="width: 17px;height: 16px;"></a>';
        cartHtml += '		                </p>';
        cartHtml += '			            <table>';
        cartHtml += '				            <tbody>';
        cartHtml += '				                <tr>';
        cartHtml += '                                   <th colspan="2">products</th>';
        cartHtml += '				                    <th class="jcart-item-qty">qty</th>';
        cartHtml += '				                    <th class="jcart-item-price">price</th>';
        cartHtml += '				                    <th></th>';
        cartHtml += '				                </tr>';

        if (quidsiPartner.cartItemList && quidsiPartner.cartItemList.length > 0) {
            cartHtml += cartItemsHtml;
        }
        else
            cartHtml += '					        <tr><td colspan="5" class="empty">Your cart is empty!</td></tr>';

        cartHtml += '					            <tr>';
        cartHtml += '					                <td colspan="3" class="subtotal"><span id="jcart-subtotal">subtotal</span></td>';
        cartHtml += '				                    <td colspan="2"><strong>' + subTotalString + '</strong></td>';
        cartHtml += '			                    </tr>';
        cartHtml += '				            </tbody>';
        cartHtml += '				        </table>';
        cartHtml += '			            <p class="jcart-footer">';
        cartHtml += '			                <input id="jcart-checkout" name="jcart-checkout" class="jcart-button form-submit" type="button" value="check out now with soap.com ›" onclick="quidsiUI.showTransitionHopup()" target="_blank" />';
        cartHtml += '		                    <span id="jcart-throbber">&nbsp;</span>';
        cartHtml += '		                </p>';
        cartHtml += '	                </fieldset>';
        cartHtml += '	            </form>';
        cartHtml += '	        </div>';
        cartHtml += '	    </div>';
        cartHtml += '   </div>';

        jQuery(".top-cart").html(cartHtml);
        quidsiUI.partnerCartInit();

        quidsiUI.showmethodCartByStatus();

        //when no items in the cart, the cart remains open for 4 seconds and then animates to collapsed position
        if (quidsiPartner.cartItemList.length == 0 && quidsiPartner.getCartStatus() == "expand") {
            quidsiPartner.noItemTimer = setTimeout(function () {
                quidsiPartner.setCartStatus("collapse");
                quidsiUI.collapsemethodCart();
            }, 4000);
        }
    },

    showTransitionHopup: function () {
        if (!quidsiPartner.cartItemList || quidsiPartner.cartItemList.length < 1)
            return;

        var hopupHtml = '';
        hopupHtml += '<div id="soapTransitionPanel" style="font-family:lucida grande,lucida sans unicode,tahoma,verdana,arial,sans-serif">';
        hopupHtml += '	<div class="transitionTitle">Brilliant! You\'re now headed to Soap.com, the online destination for method shoppers</div>';
        hopupHtml += '	<div class="loadingBar"></div>';
        hopupHtml += '	<div class="transitionNewBuyerBanner"></div>';
        hopupHtml += '	<div class="transitionLink"><a href="javascript:clearTimeout(quidsiUI.autoRedirectTimer);quidsiPartner.checkout();void(0);">Click here if you\'re not redirected to soap.com in 5 seconds… </a></div>';
        hopupHtml += '</div>';

        var htmlPopupPara = { width: 400, height: null, top: null, left: null, title: '', content: hopupHtml, showMask: true, language: 'en-us', closeCallBack: function () {
            clearTimeout(quidsiUI.autoRedirectTimer);
        }
        };
        var transitionHopup = new QuidsiHtmlPopup(htmlPopupPara);
        transitionHopup.show();
        quidsiUI.autoRedirectTimer = setTimeout("quidsiPartner.checkout()", 5000);
    },

    createCheckoutHopup: function () {
        var hopupHtml = '';
        hopupHtml += '<div id="soapCheckoutPanel">';
        hopupHtml += '	<div class="checkoutTitle">READY TO CHECKOUT?</div>';
        hopupHtml += '	<div class="checkoutContent">Click checkout to purchase at BeautyBar.com, the online shopping destination for method.com users.</div>';
        hopupHtml += '</div>';

        var htmlPopupPara = { width: 286, height: null, top: -52, left: -186, title: '', content: hopupHtml, showMask: false, language: 'en-us', closeCallBack: null };
        quidsiUI.checkoutHopup = new QuidsiHtmlPopup(htmlPopupPara);
        quidsiUI.checkoutHopup.element["popupDiv"].setAttribute("class", "soapCheckoutHopup");
        quidsiUI.checkoutHopup.element["popupDiv"].setAttribute("className", "soapCheckoutHopup");
        quidsiUI.checkoutHopup.show();
        quidsiUI.checkoutHopup.element["popupDiv"].style["height"] = "auto";
        jQuery(".soapCheckoutHopup").appendTo("#soapmethodCart .orderSummary");
        quidsiUI.checkoutHopup.isHover = false;
        jQuery(".soapCheckoutHopup").hover(
				    function () {
				        quidsiUI.showCheckoutHopup();
				    },
				    function () {
				        quidsiUI.closeCheckoutHopup();
				    }
			    );
        jQuery(".soapCheckoutHopup").click(
			function () {
			    quidsiUI.showTransitionHopup();
			}
		);
    },

    removeCheckoutHopup: function () {
        if (jQuery(".soapCheckoutHopup").length >= 1 && !quidsiUI.checkoutHopup.isHover)
            jQuery(".soapCheckoutHopup").hide();
    },

    showCheckoutHopup: function () {
        if (jQuery(".soapCheckoutHopup").length < 1) {
            quidsiUI.createCheckoutHopup();
        }
        else {
            jQuery(".soapCheckoutHopup").show();
            quidsiUI.checkoutHopup.isHover = true;
        }
        clearTimeout(quidsiUI.hopupCloseTimer);
    },

    closeCheckoutHopup: function () {
        if (jQuery(".soapCheckoutHopup").length >= 1) {
            quidsiUI.checkoutHopup.isHover = false;
            quidsiUI.hopupCloseTimer = setTimeout("quidsiUI.removeCheckoutHopup()", 200);
        }
    },

    optionDefaultButton: function (e, buttonId) {
        if (e.keyCode && e.keyCode == 13) {
            var button = document.getElementById(buttonId);
            if (button.disabled == "") {
                button.click();
            }
            return false;
        }
    },

    initCommonDropdownList: function () {
        jQuery(".dropDownSelect").click(function () {
            if (jQuery(this).children("ul").css("display") == "none") {
                jQuery(".dropDownSelect ul").hide();
                jQuery(this).children("ul").show();
            }
            else {
                jQuery(this).children("ul").css("display", "none");
            }
        });

        jQuery(".dropDownSelect ul li").click(function () {
            var ListTitle = jQuery(this).children("a").html();
            jQuery(this).parent().find("li").removeClass("selected");
            jQuery(this).addClass("selected");
            jQuery(this).parent().parent().children(".dropDownSelectContent").html(ListTitle);

            quidsiUI.showHideQuickShopOutOfStock();

            jQuery("#soapQuickShopMultipleAddToCartMessage").hide();
            jQuery("#soapQuickShopMultipleAddToQuidsiCartMessage").hide();
        });

        jQuery(".dropDownSelect ul").hover(
				function () {
				},
				function () {
				    jQuery(this).css("display", "none");
				}
			);


        var ListTitle = jQuery(".dropDownSelect ul").children("li:first").find("a").html();
        jQuery(".dropDownSelect .dropDownSelectContent").html(ListTitle);
        quidsiUI.showHideQuickShopOutOfStock();
    },

    showHideQuickShopOutOfStock: function () {
        var selectedSku = quidsiUI.getQuickShopSelectedSkuInfo();
        if (!selectedSku || !selectedSku.instock) {
            jQuery("#quickShopAddToCartBox").hide();
            jQuery("#PDPHopupOutOfStock").show();
            quidsiUI.closeQuickShopNotifyMe();
        }
        else {
            jQuery("#quickShopAddToCartBox").show();
            jQuery("#PDPHopupOutOfStock").hide();
        }
    },

    getQuickShopSelectedSkuInfo: function () {
        var selectedLi = jQuery(".dropDownSelect ul li").filter(".selected");
        if (selectedLi.length == 0)
            selectedLi = jQuery(".dropDownSelect ul li").eq(0);
        var sku = selectedLi.attr("skuCode");

        for (var i = 0; i < quidsiPartner.productSkuList.length; i++) {
            if (quidsiPartner.productSkuList[i].sku.toLowerCase() == sku.toLowerCase())
                return quidsiPartner.productSkuList[i];
        }
        return null;
    },

    showmethodCartByStatus: function () {
        if (!quidsiPartner.getCartStatus() && quidsiPartner.cartItemList && quidsiPartner.cartItemList.length > 0) {
            quidsiPartner.setCartStatus("expand");
        }

        if (quidsiPartner.getCartStatus() == "expand") {
            quidsiUI.expandmethodCart();
        }
        else if (quidsiPartner.getCartStatus() == "collapse") {
            quidsiUI.collapsemethodCart();
        }
        else {
            jQuery(".soapmethodCart").hide();
        }
    },

    expandCollapsemethodCart: function () {
        if (quidsiPartner.getCartStatus() == "expand") {
            quidsiPartner.setCartStatus("collapse");
        }
        else {
            quidsiPartner.setCartStatus("expand");
        }
        quidsiUI.showmethodCartByStatus();
    },

    expandmethodCart: function () {
        clearTimeout(quidsiPartner.noItemTimer);
        jQuery("#soapWidgetSlider").slideDown(1000, function () {
            var newButtonHtml = jQuery(".soapmethodCart").find(".bagButtonBox").html().replace("Hide", "Show");
            jQuery(".soapmethodCart").find(".bagButtonBox").html(newButtonHtml);
            jQuery(".soapmethodCart").find(".bagButtonBox").removeClass("closedCartBox");
        });
    },

    collapsemethodCart: function () {
        jQuery("#soapWidgetSlider").slideUp(500, function () {
            var newButtonHtml = jQuery(".soapmethodCart").find(".bagButtonBox").html().replace("Show", "Hide");
            jQuery(".soapmethodCart").find(".bagButtonBox").html(newButtonHtml);
            jQuery(".soapmethodCart").find(".bagButtonBox").addClass("closedCartBox");
        });
    },

    startRightSlide: function (scroller) {
        var animationStop = jQuery(scroller).attr("animationStop");
        var scrollNumber = Number(jQuery(scroller).attr("scrollNumber"));
        var canLoop = jQuery(scroller).attr("canLoop");
        var canAutoScroll = jQuery(scroller).attr("canAutoScroll");
        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");
        if (animationStop == "true") {
            jQuery(scroller).attr("animationStop", "false");

            var slidewidth = jQuery(slidingContainer).width() / jQuery(slidingContainer).find("td").length * scrollNumber;
            if (canLoop == "true") {
                quidsiUI.cloneScrollerNode(scroller, "before");
                jQuery(slidingContainer).css("left", -slidewidth + "px");
            }
            var leftSlideWidth = "+=" + slidewidth + "px";
            jQuery(slidingContainer).animate(
					{ left: leftSlideWidth },
					"slow",
					function () {
					    if (canLoop == "true") {
					        quidsiUI.removeClonedNode(scroller, "last");
					    }
					    else {
					        quidsiUI.checkSliderButtons(scroller);
					    }
					    jQuery(scroller).attr("animationStop", "true");
					}
				);
        }
    },

    startLeftSlide: function (scroller) {
        var animationStop = jQuery(scroller).attr("animationStop");
        var scrollNumber = Number(jQuery(scroller).attr("scrollNumber"));
        var canLoop = jQuery(scroller).attr("canLoop");
        var canAutoScroll = jQuery(scroller).attr("canAutoScroll");
        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");
        if (animationStop == "true") {
            jQuery(scroller).attr("animationStop", "false");
            var slidewidth = (jQuery(slidingContainer).width() / jQuery(slidingContainer).find("td").length) * scrollNumber;
            var rightSlideWidth = "-=" + slidewidth + "px";

            if (canLoop == "true")
                quidsiUI.cloneScrollerNode(scroller, "after");
            jQuery(slidingContainer).animate(
					{ left: rightSlideWidth },
					"slow",
					function () {
					    if (canLoop == "true") {
					        quidsiUI.removeClonedNode(scroller, "first");
					        jQuery(slidingContainer).css("left", "0");
					    }
					    else {
					        quidsiUI.checkSliderButtons(scroller);
					    }
					    if (canAutoScroll == "true")
					        quidsiUI.autoSlideTimer = setTimeout(quidsiUI._startLeftSlide(scroller), quidsiUI.autoSlideInterval);
					    jQuery(scroller).attr("animationStop", "true");
					}
			   );
        }
    },

    cartLeftRightSlide: function (scroller, ifAutoScroll, ifLoop, scrollNumber) {
        jQuery(scroller).attr("canAutoScroll", (ifAutoScroll != undefined) ? ifAutoScroll : "false");
        jQuery(scroller).attr("canLoop", (ifLoop != undefined) ? ifLoop : "false");
        jQuery(scroller).attr("scrollNumber", (scrollNumber != undefined) ? scrollNumber : 1);
        jQuery(scroller).attr("autoSlideAvailable", "false");
        jQuery(scroller).attr("animationStop", "true"); //to make sure the animation is finished before scrolling

        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");
        slidingContainer.css("left", "0");

        if (jQuery(scroller).attr("canAutoScroll") == "true")
            quidsiUI.autoSlideTimer = setTimeout(quidsiUI._startLeftSlide(scroller), quidsiUI.autoSlideInterval);

        var flag = (jQuery(slidingContainer).parent("div").width() < jQuery(slidingContainer).width());
        if (flag) {
            parentName = scroller.replace("Scroller", "");
            quidsiUI.checkSliderButtons(scroller);
            if (jQuery(scroller).attr("canAutoScroll") == "true") {
                jQuery(scroller).mouseover(
						function () {
						    clearTimeout(quidsiUI.autoSlideTimer);
						    jQuery(scroller).attr("canAutoScroll", "false");
						}
						).mouseout(
						function () {
						    if (jQuery(scroller).attr("autoSlideAvailable")) quidsiUI.autoSlideTimer = setTimeout(quidsiUI._startLeftSlide(scroller), quidsiUI.autoSlideInterval);
						    jQuery(scroller).attr("canAutoScroll", "true");
						}
						);
            }
        }
        quidsiUI.cartInitSliderButtons(scroller);
    },

    _startLeftSlide: function (scroller) {
        return function () {
            quidsiUI.startLeftSlide(scroller);
        }
    },

    cloneScrollerNode: function (scroller, mode) {
        var scrollNumber = Number(jQuery(scroller).attr("scrollNumber"));
        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");
        clearTimeout(quidsiUI.autoSlideTimer);

        for (i = 1; i <= scrollNumber; i++) {
            fromObj = (mode == "after") ? jQuery(slidingContainer).find("td:nth-child(" + i + ")") : jQuery(slidingContainer).find("td:nth-child(" + (jQuery(slidingContainer).find("td").length - i + 1) + ")");
            toObj = jQuery(slidingContainer).find("tr");
            if (mode == "after") {
                fromObj.clone().appendTo(toObj);
            }
            else if (mode == "before") {
                fromObj.clone().prependTo(toObj);
            }
        }
    },

    removeClonedNode: function (scroller, mode) {
        var scrollNumber = Number(jQuery(scroller).attr("scrollNumber"));
        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");
        for (i = 1; i <= scrollNumber; i++) {
            removeObj = (mode == "first") ? jQuery(slidingContainer).find("td:first") : jQuery(slidingContainer).find("td:last");
            removeObj.remove();
        }
    },

    changeSliderClass: function (flag, id, className) {
        if (flag) {
            jQuery(id).removeClass();
            jQuery(id).addClass(className);
        }
    },

    getPositionLeft: function (id) {
        return jQuery(id).css("left").replace('px', '').replace('pt', '');
    },

    checkSliderButtons: function (scroller) {
        var slidingContainer = jQuery(scroller).find(".horizontalSlide").find("table");

        var leftBtnName = jQuery(slidingContainer).parent().find("#" + jQuery(scroller).attr("id") + "LeftBtn");
        var rightBtnName = jQuery(slidingContainer).parent().find("#" + jQuery(scroller).attr("id") + "RightBtn");

        var maxSlidingWidth = jQuery(slidingContainer).parent("div").width() - jQuery(slidingContainer).width();
        var flag = (quidsiUI.getPositionLeft(jQuery(slidingContainer)) > maxSlidingWidth);
        var canLoop = (jQuery("scroller").attr("canLoop") == "true") ? true : false;
        if (flag || canLoop)
            quidsiUI.changeSliderClass(true, rightBtnName, "rightAutoSlider");
        else
            quidsiUI.changeSliderClass(true, rightBtnName, "rightAutoSliderNull");
        var flag = (quidsiUI.getPositionLeft(jQuery(slidingContainer)) < 0);
        if (flag || canLoop)
            quidsiUI.changeSliderClass(true, leftBtnName, "leftAutoSlider");
        else
            quidsiUI.changeSliderClass(true, leftBtnName, "leftAutoSliderNull");
    },

    cartInitSliderButtons: function (scroller) {
        var leftBtnName = jQuery(scroller).find("#" + jQuery(scroller).attr("id") + "LeftBtn");
        var rightBtnName = jQuery(scroller).find("#" + jQuery(scroller).attr("id") + "RightBtn");
        leftBtnName.mouseover(
				function () {
				    if (!jQuery(this).hasClass("leftAutoSliderNull"))
				        quidsiUI.changeSliderClass(true, this, "leftAutoSliderHover");
				}
			).click(
				function () {
				    if (!jQuery(this).hasClass("leftAutoSliderNull")) {
				        quidsiUI.startRightSlide(scroller);
				        jQuery(scroller).attr("autoSlideAvailable", false);
				    }
				}
			).mouseout(
				function () {
				    if (!jQuery(this).hasClass("leftAutoSliderNull"))
				        quidsiUI.changeSliderClass(true, this, "leftAutoSlider");
				}
			);
        rightBtnName.mouseover(
				function () {
				    if (!jQuery(this).hasClass("rightAutoSliderNull"))
				        quidsiUI.changeSliderClass(true, this, "rightAutoSliderHover");
				}
			).click(
				function () {
				    if (!jQuery(this).hasClass("rightAutoSliderNull")) {
				        quidsiUI.startLeftSlide(scroller);
				        jQuery(scroller).attr("autoSlideAvailable", false);
				    }
				}
			).mouseout(
				function () {
				    if (!jQuery(this).hasClass("rightAutoSliderNull"))
				        quidsiUI.changeSliderClass(true, this, "rightAutoSlider");
				}
			);
    },

    cartInitSlide: function () {
        var methodsoapCart = document.getElementById("soapmethodCart");
        methodsoapCart.style.top = quidsiUI.getPartnerScrollTop() + (quidsiUI.getPartnerDocumentHeight() - methodsoapCart.offsetHeight) + "px";
        quidsiUI.movingCartSlide();
    },

    movingCartSlide: function () {
        var methodsoapCart = document.getElementById("soapmethodCart");
        var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
        var cartSlideMinHeight = 0;

        yMenuFrom = (parseInt(methodsoapCart.style.top, 10) < cartSlideMinHeight) ? cartSlideMinHeight : parseInt(methodsoapCart.style.top, 10);
        yMenuTo = quidsiUI.getPartnerScrollTop() + quidsiUI.getPartnerDocumentHeight() - methodsoapCart.offsetHeight;
        if (yMenuTo < 0) yMenuTo = 0;
        timeoutNextCheck = 100;
        if (yMenuFrom != yMenuTo) {
            yOffset = Math.abs(yMenuTo - yMenuFrom);
            if (yMenuTo < yMenuFrom) yOffset = -yOffset;
            methodsoapCart.style.top = yMenuFrom + yOffset + "px";
            timeoutNextCheck = 1;
        }
        setTimeout("quidsiUI.movingCartSlide()", timeoutNextCheck);
    },

    getPartnerScrollTop: function () {
        if (typeof (window.pageYOffset) == "number") {
            return window.pageYOffset;
        }
        else if (typeof (document.documentElement.scrollTop) == "number") {
            return document.documentElement.scrollTop;
        } else {
            return 0;
        }
    },

    getPartnerDocumentHeight: function () {
        if (self.innerHeight) {
            return self.innerHeight;
        } else if (document.documentElement.clientHeight) {
            return document.documentElement.clientHeight;
        } else {
            return 0;
        }
    },

    getPartnerMaxZIndex: function () {
        var zIndex = 0;
        var elments = document.getElementsByTagName("*");
        for (var i = 0; i < elments.length; i++) {
            if (elments[i].style.zIndex) {
                if (zIndex < parseInt(elments[i].style.zIndex)) {
                    zIndex = elments[i].style.zIndex;
                }
            }
        }
        return parseInt(zIndex);
    },

    partnerCartInit: function () {
        jQuery("#soapmethodCart").css("z-index", "999999");
        quidsiUI.cartLeftRightSlide("#soapWidgetSlider", false, false, 3);
    },

    blockMultiClick: function (button, time) {
        if (!time || time == "") {
            time = 500;
        }
        button.disabled = 'disabled';
        setTimeout(function () { button.disabled = ""; }, 500);
    }
}


//End quidsiUI