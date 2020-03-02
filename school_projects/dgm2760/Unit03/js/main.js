"use strict";

	var correctNum = Math.floor((Math.random() * 15) + 1);
	// document.getElementById("guess").innerHTML = correctNum;
	var button = document.getElementById("button"), totalGuesses = 0;

function guessNumber() {
	var guessedNum = document.getElementById("guessedNum").value;;
	var guessMessage = '';

	if (guessedNum < 1 || guessedNum > 15) {
		guessMessage = 'Your guess is out of range! Guess again!';
	} else if (guessedNum < correctNum) {
		guessMessage = 'Your guess was Too Low! Guess again!';
	} else if (guessedNum > correctNum) {
		guessMessage = 'Your guess was Too High! Guess again!';
	} else if (guessedNum == correctNum) {
		guessMessage = 'You are Correct!';
	} 
	document.getElementById("feedback").innerHTML = guessMessage;
  
	//Calculate # of tries the user makes
	totalGuesses += 1;
	document.getElementById("totalGuesses").innerHTML = totalGuesses;



	//Return user with the appropriate award ribbon
	if (guessMessage == "You are Correct!" && totalGuesses <= 3) {
		var pathToImage = "blue_ribbon_1st_place_cutout-r879e60071d9b423986631315bb5b3742_x7saj_8byvr_540.jpg";
		var awardImage = document.createElement("IMG");
		awardImage.setAttribute('src', pathToImage);
		document.getElementById("award-image").appendChild(awardImage);

	} else if (guessMessage == 'You are Correct!' && totalGuesses > 3 && totalGuesses <=6) {
		var pathToImage = "2ndplace.jpg";
		var awardImage = document.createElement("IMG");
		awardImage.setAttribute('src', pathToImage);
		document.getElementById("award-image").appendChild(awardImage);
	} else if (guessMessage == 'You are Correct!' && totalGuesses > 6) {
		var pathToImage = "3rd-place-ribbon.jpg";
		var awardImage = document.createElement("IMG");
		awardImage.setAttribute('src', pathToImage);
		document.getElementById("award-image").appendChild(awardImage);

	}

	console.log(pathToImage);


	return guessMessage;
  	

}




