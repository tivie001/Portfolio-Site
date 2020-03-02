<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>09 - Menu Activation</title>
<link href="css/styles.css" rel="stylesheet" type="text/css">

</head>

<body onload="getNav()">
<h1>Company Name</h1>
<nav>
<ul id="mainmenu">
<li class="active"><a href="index.php?name=fish">HOME</a></li>
<li><a href="#">TOOLS</a>
	<ul>
		<li><a href="drill.php">Drill</a></li>
		<li><a href="hammer.php">HAMMER</a></li>
	</ul>
</li>

<li><a href="location.php#name">LOCATION</a></li>


<div class="keepOpen"></div>
</ul>
</nav>

