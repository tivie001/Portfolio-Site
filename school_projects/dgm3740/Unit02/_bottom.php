</main>
        <div id="largeFooter">
            <div id="footerWrapper">
                <div class="footer-column">
                    <h2>Contact Us</h2>
                    <a href="https://g.page/santacruzwharf?share" target="_blank">
                        <p><i class="fas fa-map-pin"></i>
                            21 Municipal Wharf Santa Cruz, CA 95060
                        </p>
                    </a>
                    <h2>Phone</h2>
                    <p><a href="tel:8011234567">
                        <i class="fas fa-phone"></i>
                        801-123-4567</a>
                    </p>
                    <h2>Hours of Operation</h2>
                    <p><i class="fas fa-calendar-alt"></i>Monday – Friday 9am – 4pm</p>
                </div>
                <div id="customFooterHeight" class="footer-column">
                    <h2>News Letter</h2>
                    <input id="subscribeEmail" type="email" placeholder="user@example.com" required>
                    <button id="subscribeBtn">Subscribe</button>
                </div>
                <div id="footer-column-full" class="footer-column">
                    <h2>Why Cabot Cruises</h2>
                    <p>
                        Cabot Cruises is a travel agency providing the best cruise
                        deals on our online travel website. We can help you with all
                        inclusive vacations including discounted cruises.
                    </p>
                    <p>
                        We do not sell travel to residents of Delaware, Iowa,
                        Florida, Hawaii and Washington state because those states
                        are just weird. If you are a resident of one of these states,
                        call your congressman and tell them to change the
                        regulations.
                    </p>
                </div>
            </div>
        </div>
        <footer id="subFooter1">
                <i class="fab fa-facebook-square" id="facebookIcon"></i>
                <i class="fab fa-instagram" id="instaIcon"></i>
                <i class="fab fa-pinterest-square" id="pinterestIcon"></i>
                <i class="fab fa-twitter-square" id="twitterIcon"></i>
                <i class="fab fa-youtube-square" id="youTubeIcon"></i>
        </footer>
        <footer id="subFooter2">
                &copy; Tyler Ivie &bull; <a id="websiteUrl" href="https://www.theiviedesign.com" target="_blank">theiviedesign.com</a>
        </footer>
</body>
</html>
<script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
</script>
<script src="slick/slick.min.js"></script>
<script>
    $(document).ready(function() {
        $('.sliders').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            cssEase: 'ease-out',
            autoplay: true,
            autoplaySpeed: 5000,
        })
    });

    function expandMenu() {
        document.getElementById("menu").classList.toggle("hide");
    }

    let menuItems = document.querySelectorAll('li.has-submenu');
    Array.prototype.forEach.call(menuItems, function(el, i){
        el.addEventListener("mouseover", function(event){
            this.className = "has-submenu open";
            clearTimeout(timer);
        });
        el.addEventListener("mouseout", function(event){
            timer = setTimeout(function(event){
                document.querySelector(".has-submenu.open").className = "has-submenu";
            }, 1000);
        });
    });
    function getNav() {

    	let url = location.href;

    	if (url.includes("?")) {
    		var urlResults = url.split('?');
    		var newUrl = urlResults[0];

    		var result = newUrl.split('/');
    		var numOfElements = result.length;
    		var pageName = result[numOfElements - 1];
    	} else if (url.includes("#")) {

    		var urlResults = url.split('#');
    		var newUrl = urlResults[0];

    		var result = newUrl.split('/');
    		var numOfElements = result.length;
    		var pageName = result[numOfElements - 1];

    	} else {
    		var result = url.split('/');
    		var numOfElements = result.length;
    		var pageName = result[numOfElements - 1];
    	}

    	let listItems = document.querySelectorAll("ul#menu li a");
    	let home = "index.php";
    	let cruises = "cruises.php";
    	let agents_1 = "agents_1.php";
    	let agents_2 = "agents_2.php";
    	let bookings = "bookings.php";

    	var i;
    	for (i = 0; i < listItems.length; i++) {

    		var currentPage = listItems[i].getAttribute("href");
            let agentsClass = listItems[2].parentNode.className="menu-item has-children";

    		if(home == pageName) {
    			listItems[0].parentNode.className="menu-item active";
    		}

    		if(cruises == pageName) {
    			listItems[1].parentNode.className="menu-item active";
    		} else {
    			listItems[i].parentNode.className="menu-item";
    		}

    		if(agents_1 == pageName || agents_2 == pageName) {
    			listItems[2].parentNode.className= agentsClass + " active";
    		} else {
    			listItems[i].parentNode.className=agentsClass;
    		}

    		if(bookings == pageName) {
                listItems[5].parentNode.className="menu-item active";
            } else {
                listItems[i].parentNode.className="menu-item";
            }

    	}
    }


</script>