// JavaScript Document

function getNav() {

	var url = location.href;

	if (url.includes("?")) {
		// Remove any trailing GET information from the URL (?)
		var urlResults = url.split('?');
		var newUrl = urlResults[0];

		// Split the URL string into an array and keep the last part (page.php)
		var result = newUrl.split('/');
		var numOfElements = result.length;
		var pageName = result[numOfElements - 1];
	} else if (url.includes("#")) {
		// Remove any extra Within page link information from the URL (#)
		var urlResults = url.split('#');
		var newUrl = urlResults[0];

		// Split the URL string into an array and keep the last part (page.php)
		var result = newUrl.split('/');
		var numOfElements = result.length;
		var pageName = result[numOfElements - 1];

	} else {
		// Split the URL string into an array and keep the last part (page.php)
		var result = url.split('/');
		var numOfElements = result.length;
		var pageName = result[numOfElements - 1];
	}

	// Once you do, you need to assign a class. While you are at it, check to see if it is a sub menu and assign a class to the parent.
	var listItems = document.querySelectorAll("ul#mainmenu li a");
	var home = "index.php";
	var tool = "location.php";
	var drill = "drill.php";
	var hammer = "hammer.php";

	// Assign a class name to the link
	var i; 
	for (i = 0; i < listItems.length; i++) {
		var currentPage = listItems[i].getAttribute("href");

		if(home == pageName) {
			listItems[0].parentNode.className="parent";
		}

		// Assign a class name of the parent (if applicable)
		if(drill == pageName) {
			listItems[2].parentNode.className="active";
			listItems[1].parentNode.className="parent";
		} else {
			listItems[i].parentNode.className="";
		}

		if(hammer == pageName) {
			listItems[3].parentNode.className="active";
			listItems[1].parentNode.className="parent";
		} else {
			listItems[i].parentNode.className="";
		}

		if(tool == pageName) {
			listItems[4].parentNode.className="parent";
		}
	}
}






