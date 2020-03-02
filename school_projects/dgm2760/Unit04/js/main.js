"use strict";

//Build a function that generates a random integer using a value as the upper limit
var month = Math.floor((Math.random() * 12) + 1);
var day = Math.floor((Math.random() * 30) + 1);
var fortune = Math.floor((Math.random() * 5) + 1);

function getFortune() {

//Month name generator
var mon;
switch (month) {
    case 1:
        mon = "January";
        break;
    case 2:
        mon = "February";
        break;
    case 3:
        mon = "March";
        break;
    case 4:
        mon = "April";
        break;
    case 5:
        mon = "May";
        break;
    case 6:
        mon = "June";
        break;
    case 7:
        mon = "July";
        break;
    case 8:
    	mon = "August";
    	break;
    case 9:
    	mon = "September";
    	break;
    case 10:
    	mon = "October";
    	break;
    case 11:
    	mon = "November";
    	break;
    case 12:
    	mon = "December";
    	break;
}

//Fortune  name generator
var name;
switch (fortune) {
    case 1:
        name = "win the lottery for $1,000,000,000,000!";
        break;
    case 2:
        name = "get pregnant with quadruplets!";
        break;
    case 3:
        name = "lose your house and life to human killer roaches! ;)";
        break;
    case 4:
        name = "find your long lost lover!";
        break;
    case 5:
        name = "have a monkey might fly out of your butt!";
        break;
}

	 
	document.getElementById("month").innerHTML = mon;
	document.getElementById("day").innerHTML = day;
	document.getElementById("fortune").innerHTML = name;
	
	return mon;
	return name;


}

getFortune();






