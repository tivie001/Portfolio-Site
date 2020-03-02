/*jslint browser:true */
"use strict";

function validateForm() {
	var name; var phone; var payment; var card; var vehicle;
	var i;
	var status = true;

	var requiredFields = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];
	for (i = 0; i < requiredFields.length; i++) {
		document.getElementById(requiredFields[i]).className = "normal";
	}

	//Validate Full Name
	name = document.forms.myForm.fullName.value;
	if (name === "" || name === null){
		status = false;
		document.getElementById('fullName').className = "error";
	}

	//Validate Phone Number
	phone = document.forms.myForm.phoneNumber.value;
	phone = phone.replace(/-/g, '');
	if (phone.length < 10 || phone.length > 15){
		status = false;
		document.getElementById('phoneNumber').className = "error";
	}

	//Validate Payment Method
	payment = document.getElementsByName('payMethod');
	var checkedButton = false;
	for (i = 0; i < payment.length; i++) {
		if (payment[i].checked) {
			checkedButton = true;
			break;
		}
	}
	if (checkedButton === false){
		status = false;
		document.getElementById('payMethod').className = "error";
	}

	//Validate Credit Card Number
	card = document.forms.myForm.ccNumber.value;
	card = card.replace(/ /g, '');
	if (card.length !== 15){
		status = false;
		document.getElementById('ccNumber').className = "error";
	}

	//Validate Vehicle Type
	vehicle = document.forms.myForm.vehicle.selectedIndex;
	if (vehicle === 0){
		status = false;
		document.getElementById('vehicle').className = "error";
	}

	//Show Error message if status is false
	if (status === false) {
		document.getElementById('formProblems').className = "showErrorMsg";
	}

	return status;
}