//Javascript document
/*jslint browser: true */

"use strict";

//Create question object
var answer = {
    option1 : "Billy",
    option2 : "Stephen",
    option3 : "Grant",
    option4 : "Leonardo",
    correct: 3,

    //display answer method
    displayOptions: function() {

        document.getElementById("option1").innerHTML = answer.option1;
        document.getElementById("option2").innerHTML = answer.option2;
        document.getElementById("option3").innerHTML = answer.option3;
        document.getElementById("option4").innerHTML = answer.option4;
    },

    //calc the correct answer method
    calcCorrectAnswer: function(x) {
        if (x == answer.correct) {
            document.getElementById("feedback").innerHTML = "You are correct!";
            document.getElementById("feedback").style.color = "green";
        } else {
            document.getElementById("feedback").innerHTML = "Sorry! Try Again!";
            document.getElementById("feedback").style.color = "red";
        }
    }


};









