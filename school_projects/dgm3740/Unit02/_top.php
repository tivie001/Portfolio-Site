<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Fill Me In">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Cabot Cruises - <?php echo $title; ?></title>
    <link href="css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">

</head>
<body onload="getNav()">
    <div id="headerWrapper">
        <header class="clearfix" style="text-align: left">
            <figure class="logo">
                <img id="logo"
                     alt="logo"
                     src="images/cabot-cruises-logo.png"
                     srcset="images/cabot-cruises-logo1x.png 1x,
                         images/cabot-cruises-logo2x.png 2x,
                         images/cabot-cruises-logo3x.png 3x">
             </figure>

            <p class="phone-num" style="text-align: right">
                <i class="fas fa-phone"></i>
                <a href="tel:8011234567">801-123-4567</a>
            </p>
        </header>
    </div>
    <div id="navWrapper">
         <nav class="nav">
             <button id="hamburgerBtn" onclick="expandMenu()">&#9776;</button>
             <ul id="menu" class="hide">
                 <li class="menu-item" id="home">
                   <a href="index.php">Home</a>
                 </li>
                 <li class="menu-item" id="cruises">
                   <a href="cruises.php">Cruises</a>
                 </li>
                 <li class="menu-item has-children">
                   <a href="#">Agents
                     <span class="dropdown-icon"></span>
                   </a>
                   <ul class="sub-menu">
                     <li class="menu-item">
                       <a href="agents_1.php">Jennifer Hodges</a>
                     </li>
                     <li class="menu-item">
                       <a href="agents_2.php">Declan Asher</a>
                     </li>
                   </ul>
                 </li>
                 <li class="menu-item">
                   <a href="bookings.php">Book</a>
                 </li>
                 <div class="search-container">
                     <form action="/action_page.php">
                         <input type="search" placeholder="Search.." name="search">
                         <button type="submit"><i class="fas fa-search"></i></button>
                     </form>
                 </div>
            </ul>

         </nav>
    </div>
    <main>