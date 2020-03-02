"use strict";
// function promptFunction() {
// 	var firstName = prompt("Please enter your first name");

// 	if (firstName !== null) {
// 	    document.getElementById("name").innerHTML = firstName;
// 	}
// }

function resizeWindow() {
	var winWidth = window.outerWidth;
	var winHeight = window.outerHeight;
	var leftOffset = window.screenX;
	var rightOffset = window.screenY;
	var winLocation = window.location;
	var docTitle = document.title;
	var lastUpdated = document.lastModified;



	document.getElementById("outerWidth").innerHTML = "Window's width is: " + winWidth;
	document.getElementById("outerHeight").innerHTML = "Window's height is: " + winHeight;
	document.getElementById("loffset").innerHTML = "Window's offset from the left edge is: " + leftOffset;
	document.getElementById("roffset").innerHTML = "Window's offset from the top is: " + rightOffset;
	document.getElementById("url").innerHTML = "The pages URL is: " + winLocation;
	document.getElementById("title").innerHTML = "Document title is " + docTitle;
	document.getElementById("updated").innerHTML = "This is document was last updated at " + lastUpdated;

}

resizeWindow();


