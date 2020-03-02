"use strict";
promptFunction();
function promptFunction() {
	var firstName = prompt("Please enter your first name");

	if (firstName !== null) {
	    document.getElementById("name").innerHTML = firstName;
	}
}

var date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();
