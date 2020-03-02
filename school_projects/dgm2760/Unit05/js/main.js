"use strict";

//Create an array of 3 items that gets displayed to the webpage
var trees = ["Pine", "Aspen", "Willow"];
var element = "";
var i;
for (i = 0; i < trees.length; i++) {
    element += trees[i] + "<br>";
}

//Get all elements by ids from event listeners
document.getElementById("tree-types").innerHTML = element;
document.getElementById("redwood").addEventListener("click", addRedwood);
document.getElementById("pear").addEventListener("click", addPear);
document.getElementById("remove-first").addEventListener("click", removeFirstIndex);
document.getElementById("remove-second").addEventListener("click", removeSecIndex);
document.getElementById("remove-last").addEventListener("click", removeLastIndex);
document.getElementById("sort").addEventListener("click", sortList);
document.getElementById("lowercase").addEventListener("click", lowercase);
document.getElementById("third-element").addEventListener("click", getThirdElement);
document.getElementById("fourth-element").addEventListener("click", getFourthElement);

function getNumOfElements() {
    var totalNumOfElements = trees.length;
    document.getElementById("num-elements").innerHTML = totalNumOfElements + " Tree(s) Total";
    return totalNumOfElements;
}

function addRedwood() {
    trees.push("Redwood");
    var element = "";
    var i;
    for (i = 0; i < trees.length; i++) {
        element += trees[i] + "<br>";
    }
    document.getElementById("tree-types").innerHTML = element;
    getNumOfElements();
}

function addPear() {
    trees.unshift("Pear");
    var element = "";
    var i;
    for (i = 0; i < trees.length; i++) {
        element += trees[i] + "<br>";
    }
    document.getElementById("tree-types").innerHTML = element;
    getNumOfElements();
}

function removeFirstIndex() {
    if (trees.length >= 1) {
        trees.shift();
        var element = "";
        var i;
        for (i = 0; i < trees.length; i++) {
            element += trees[i] + "<br>";
        }
        document.getElementById("tree-types").innerHTML = element;
        getNumOfElements();

    } else {
        document.getElementById("message").innerHTML = "ERROR - There's no first tree to remove from the list.";
    }
}
function removeSecIndex() {
    if (trees.length >= 2) {
        trees.splice(1,1);
        var element = "";
        var i;
        for (i = 0; i < trees.length; i++) {
            element += trees[i] + "<br>";
        }
        document.getElementById("tree-types").innerHTML = element;
        getNumOfElements();
    } else {
        document.getElementById("message").innerHTML = "ERROR - There's no second tree to remove from the list.";
    }
}
function removeLastIndex() {
    if (trees.length != 0) {
        trees.pop();
        var element = "";
        var i;
        for (i = 0; i < trees.length; i++) {
            element += trees[i] + "<br>";
        }
        document.getElementById("tree-types").innerHTML = element;
        getNumOfElements();
    } else {
        document.getElementById("message").innerHTML = "ERROR - There's no tree to remove from the list.";
    }
}
function sortList() {
    trees.sort();
    var element = "";
    var i;
     for (i = 0; i < trees.length; i++) {
        element += trees[i] + "<br>";
    }
    document.getElementById("tree-types").innerHTML = element;
    getNumOfElements();
}
function lowercase() {
    var element = "";
    var i;
    for(var i = 0; i < trees.length; i++) {
        element += trees[i].toLowerCase() + "<br>";
    }
    document.getElementById("tree-types").innerHTML = element;
    getNumOfElements(); 
}
function getThirdElement() {
    if (trees.length >= 3) { 
        var element = trees[2];
        document.getElementById("message").innerHTML = element;  
        getNumOfElements();
    } else {
        document.getElementById("message").innerHTML = "ERROR - There's no third tree to remove from the list.";
    }
    
}
function getFourthElement() {
    if (trees.length >= 4) { 
    var element = trees[3];
    document.getElementById("message").innerHTML = element;
    getNumOfElements();
    } else {
        document.getElementById("message").innerHTML = "ERROR - There's no fourth tree to remove from the list.";
    }
}

getNumOfElements();



