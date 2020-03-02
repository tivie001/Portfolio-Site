/*jslint browser:true */
"use strict";

function addTotalUsage(value) {
	var annualUsageKw = 0, dailyUsageKw = 0, i = 0, x = 0;
	var monthsUsed = document.getElementById(value).getElementsByTagName('input');

	for (i = 0; i < monthsUsed.length; i++) {
		x = Number(monthsUsed[i].value);
		annualUsageKw += x;
	}
	dailyUsageKw = annualUsageKw / 365;
	return dailyUsageKw;
}


function sunZone() {
	var hours; 
	var selectedZone = document.forms.solarForm.zone.selectedIndex;
	selectedZone += 1;

switch(selectedZone) {
	case 1:
		hours = 6;
		break;
	case 2:
		hours = 5.5;
		break;
	case 3:
		hours = 5;
		break;
	case 4: 
		hours = 4.5;
		break;
	case 5:
		hours = 4.2;
		break;
	case 6:
		hours = 3.5;
		break;
	default: 
		hours = 0;
	}
	return hours;
}


function calcPanelInfo() {
	var panelSelected = document.forms.solarForm.panel.selectedIndex;
	var panelOptions = document.forms.solarForm.panel.options;
	var totalPower = panelOptions[panelSelected].value;
	var panelName = panelOptions[panelSelected].text;
	var x = [totalPower, panelName];
	console.log(x);
	return x;
}

function calculateSolar() {
	var dailyUsageKw = addTotalUsage('mpc');
	var totalSunHrs = sunZone();
	var kWNeeded = dailyUsageKw / totalSunHrs;
	var badWeatherIncluded = kWNeeded * 1.25;
	var realWattsNeeded = badWeatherIncluded * 1000;

	var panelInfo = calcPanelInfo();
	var panelOut = panelInfo[0];
	var panelName = panelInfo[1];

	var numOfPanelsNeeded = Math.ceil(realWattsNeeded / panelOut);


	var feedbackInfo = "";
	feedbackInfo += "<p>Based on your daily average use of " + Math.round(dailyUsageKw) + " kWh, you will need to purchase " + numOfPanelsNeeded + " " + panelName + " solar panels to offset 100% of your electrical bill.</p>";
	feedbackInfo += "<h2>Additional Details</h2>";
	feedbackInfo += "<p>Your daily average electricity consumption is: " + Math.round(dailyUsageKw) + "kWh per day.</p>";
	feedbackInfo += "<p>Based on the zone you live in, the average amount of sunshine hours you recieve per day is: " + totalSunHrs + " hrs.</p>";
	feedbackInfo += "<p>Realistic watts needed per hour due to bad weather is: " + Math.round(badWeatherIncluded) + " watts/hour.</p>";
	feedbackInfo += "<p>The panel you selected: " + panelName + " " + "generates about " + panelOut + " watts per hour.</p>";

	document.getElementById('feedback').innerHTML = feedbackInfo;
}

