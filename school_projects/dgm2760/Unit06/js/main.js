"use strict";
function hideStory() {
    document.getElementById("story").style.visibility = "hidden";
}

//Get users input from each textarea element and push them onto 3 arrays (noun, adjective, and verb array)
function getStory() {
    //get nouns
    let nounString = document.getElementById("nouns").value.toLowerCase();
    let adjString = document.getElementById("adjectives").value.toLowerCase();
    let verbString = document.getElementById("verbs").value.toLowerCase();

    //Split string into 3 arrays
    let nounArr = nounString.split(/\s+/);
    let adjArr = adjString.split(/\s+/);
    let verbArr = verbString.split(/\s+/);


    //set each index and insert into div for the story
    document.getElementById("noun1").innerHTML = nounArr[0];
    document.getElementById("noun2").innerHTML = nounArr[1];
    document.getElementById("noun3").innerHTML = nounArr[2];
    document.getElementById("noun4").innerHTML = nounArr[3];
    document.getElementById("noun5").innerHTML = nounArr[4];
    document.getElementById("noun6").innerHTML = nounArr[5];
    document.getElementById("noun7").innerHTML = nounArr[6];

    document.getElementById("adj1").innerHTML = adjArr[0];
    document.getElementById("adj2").innerHTML = adjArr[1];
    document.getElementById("adj3").innerHTML = adjArr[2];

    document.getElementById("verb1").innerHTML = verbArr[0];
    document.getElementById("verb2").innerHTML = verbArr[1];

    document.getElementById("story").style.visibility = "visible";

}

hideStory();



