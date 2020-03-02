//Javascript Document
"use strict";

function getSongName() {
	var trackList = [];
	trackList[0] = 'amclassical_beethoven_fur_elise.mp3';
	trackList[1] = 'amclassical_jesu_joy_of_mans_desiring.mp3';

	return trackList;
};

//Get all variables
var songUrls = getSongName();
var currentSong = songUrls[0];

var track1 = new Audio('amclassical_beethoven_fur_elise.mp3');
var track2 = new Audio('amclassical_jesu_joy_of_mans_desiring.mp3');
var playBtn = document.querySelector('img.playbtn');
var pauseBtn = document.querySelector('img.pausebtn');
var skipBtn = document.querySelector('img.skipbtn');

function getSongInfo() {
	if (currentSong !== null) {
	
		//Track 1 & 2 objects with their dynamic information
		var track1Info = {
			title: "Für Elise",
			artist: "Beethoven",
			album: "Two-part Invention in E",
		}
		var track2Info = {
			title: "Jesu, Joy of Man's Desiring",
			artist: "Bach",
			album: "Jesu, Joy of Man's Desiring",
		}
		if (currentSong === songUrls[0]) {
			document.getElementById("titleInfo").innerHTML = track1Info.title;
			document.getElementById("artistInfo").innerHTML = track1Info.artist;
			document.getElementById("albumInfo").innerHTML = track1Info.album;
		} else if (currentSong === songUrls[1]) {
			document.getElementById("titleInfo").innerHTML = track2Info.title;
			document.getElementById("artistInfo").innerHTML = track2Info.artist;
			document.getElementById("albumInfo").innerHTML = track2Info.album;
		}
	}
}

// Build a function that on click of the play button it plays music
playBtn.addEventListener('click', function(){
	if (currentSong === songUrls[0]) {
		track1.play();
	} else if (currentSong === songUrls[1]) {
		track2.play();
	}
	console.log(songUrls); 
});

// Build a function that on click of the pause button it pauses the music
pauseBtn.addEventListener('click', function(){
	if (currentSong === songUrls[0]) {
		track1.pause();
	} else if (currentSong === songUrls[1]) {
		track2.pause();
	}
	console.log(songUrls); 
});

// Build a function that on click of skip it will skip to next song
skipBtn.addEventListener('click', function(){
	if (currentSong === songUrls[0]) {
		track1.currentTime = 0;
		currentSong = songUrls[1];
		track1.pause();
		track2.play();
		getSongInfo();
	} else if (currentSong === songUrls[1]) {
		track2.currentTime = 0;
		currentSong = songUrls[0];
		track2.pause();
		track1.play();
		getSongInfo();
	} 
	console.log(songUrls);
})


