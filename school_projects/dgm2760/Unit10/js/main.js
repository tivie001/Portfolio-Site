/*jslint browser:true */
"use strict";

//Build an array of all anchors
var tempArray = document.querySelectorAll('ul#primaryNavigation li a');
var parentList = document.createElement("UL");
document.getElementById('smallNavArea').appendChild(parentList);

//Extract the href from each anchor
//Extract the link name from each anchor
//Create and add elements to a page
var i;
for (i = 0; i < tempArray.length; i++) {
	var href = tempArray[i].getAttribute("href");
	var text = tempArray[i].text;

	var item = document.createElement("LI");
	var anchor = document.createElement("A");
	anchor.setAttribute('href', href);
	anchor.innerHTML = text;
	parentList.appendChild(item);
	item.appendChild(anchor);
}


// var secItem = document.createElement("LI");
// var secAnchor = document.createElement("A");
// secAnchor.setAttribute('href', aboutHref);
// secAnchor.innerHTML = aboutText;
// parentList.appendChild(secItem);
// secItem.appendChild(secAnchor);

// var thirdItem = document.createElement("LI");
// var thirdAnchor = document.createElement("A");
// thirdAnchor.setAttribute('href', locationHref);
// thirdAnchor.innerHTML = locationText;
// parentList.appendChild(thirdItem);
// thirdItem.appendChild(thirdAnchor);


// var fourthItem = document.createElement("LI");
// var fourthAnchor = document.createElement("A");
// fourthAnchor.setAttribute('href', productsHref);
// fourthAnchor.innerHTML = productsText;
// parentList.appendChild(fourthItem);
// fourthItem.appendChild(fourthAnchor);


// var fifthItem = document.createElement("LI");
// var fifthAnchor = document.createElement("A");
// fifthAnchor.setAttribute('href', servicesHref);
// fifthAnchor.innerHTML = servicesText;
// parentList.appendChild(fifthItem);
// fifthItem.appendChild(fifthAnchor);


