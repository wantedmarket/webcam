var oXxxpanded = namespace("xxxpanded.user");

function localStorageNameIsSupported() {
    var testKey = "test";

    try {
        localStorage.setItem(testKey, "1");
        localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

function isMobile() {
    var el = $(document.createElement("div"));
    el.addClass("desktop-only");
    $("body").append(el);

    return el.css("display") === "none";
}

function getClassName(thing) {
    if (thing === null) return "[object Null]"; // special case
    return Object.prototype.toString.call(thing);
}

const DisplayHiddenElement = function (sElementName) {
    $(sElementName).show();
};

const HideDisplayElement = function (sElementName) {
    $(sElementName).hide();
};
function initSearch() {
	  var options = {
	    onShow: function() {
	      if ($(".navbar_holder").is(":visible")) {
	        $(".navbar_holder").hide();
	      }
	    }
	  };

	  // $('#search-btn').search(options);
	}

function initNamespace() {
  oXxxpanded.isUser = $("#content")[0].hasAttribute("data-user");
}

function initUserMainOptions() {
  var content = $("#content");
  oXxxpanded.isUser = content[0].hasAttribute("data-user");
  // UserMainOptions.userAccountDropDown();
  // UserMainOptions.userNavigationControllerSetup();
}

function initDocumentReady() {
  initSearch();
  initUserMainOptions();
  initNamespace();
}

$(document).ready(initDocumentReady);