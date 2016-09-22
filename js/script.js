// Obfuscate mail address for spam bots
var myAddr = document.getElementById("myaddr");
var obfuscateMail = "<a href=\"mail" + "to:" + new Array("johntgarrison","gmail.com").join("@") + "\">" + new Array("johntgarrison","gmail.com").join("@") + "</" + "a>"
myAddr.innerHTML = obfuscateMail;

// JQuery ~ Change .active class on navbar list elements on click
$(function() {
   $(".nav-element").click(function() {
      // remove classes from all
      $(".nav-element").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});

// Add responsive class to navbar when user clicks on collapse icon

function navCollapse() {
	var navbar = document.getElementById("navbar-list");
	if (navbar.className === "navbar-regular") {
		navbar.classList.add("responsive");
	} else {
		navbar.className = "navbar-regular";
	}
}

// Smooth Scroll
function smoothScroll(eID) {

	function currentYPosition() {
    	// Firefox, Chrome, Opera, Safari
    	if (self.pageYOffset) return self.pageYOffset;
    	// Internet Explorer 6 - standards mode
    	if (document.documentElement && document.documentElement.scrollTop)
        	return document.documentElement.scrollTop;
    	// Internet Explorer 6, 7 and 8
    	if (document.body.scrollTop) return document.body.scrollTop;

    	return 0;
	}

	function elmYPosition(eID) {
    	var elm = document.getElementById(eID);
    	var y = elm.offsetTop;
    	var node = elm;

    	while (node.offsetParent && node.offsetParent != document.body) {
        	node = node.offsetParent;
       		y += node.offsetTop;
    	} 

    	return y;
	}

    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }

    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;

    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }

    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}