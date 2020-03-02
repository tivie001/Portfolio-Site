<?php $title="Book a Cruise"; include '_top.php';?>

    <div id="mainWrapper">
        <h1 id="newsHeader">Book a Cruise</h1>
        <div class="form-body">
            <form class="form-class" action="thanksPage.html" method="get">
                <div class="infoCard">
                    <h3>Customer Information</h3>
                    <div class="inputDiv">
                        <label for="fullName">Full Name*</label>
                        <input required type="text" id="fullName" name="firstname" placeholder="John Doe">
                        <label for="phoneNum">Phone Number*</label>
                        <input required type="text" id="phoneNum" name="phonenum" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                        <label for="email">Email Address</label>
                        <input type="text" id="email" name="email" placeholder="johndoe@example.com">
                        <label for="email">Street Address</label>
                        <input type="text" id="address" name="email" placeholder="Street Name">
                        <label for="email">City</label>
                        <input type="text" id="city" name="email" placeholder="Address City">
                        <label for="zipCode">Zip Code</label><br>
                        <input type="text" id="zipCode" name="email" placeholder="12345">
                        <p id="stateHeader">State</p>
                        <select id="state" name="state">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <p id="colorHeader">Cruise Selection</p>
                        <select id="color" name="color">
                            <option value="black">Mediterranean</option>
                            <option value="white">Asian (China & Japan)</option>
                            <option value="blue">Alaskan</option>
                            <option value="red">Hawaiian</option>
                            <option value="green">Caribbean</option>
                        </select>
                    </div>
                </div>
                <div class="infoCard">
                    <h3>Payment Information</h3>
                    <div class="inputDiv">
                        <label for="cardname">Name on Card*</label>
                        <input required type="text" id="cardName" name="cardname" placeholder="John Peter Doe">
                        <label for="cardnum">Card Number*</label>
                        <input required type="number" id="cardNum" name="cardnum" placeholder="XXXXXXXXXXXX" pattern="[0-9]{4}[0-9]{4}[0-9]{4}">
                        <label for="expdate">Expiration Date*</label>
                        <input required type="month" id="expDate" name="expdate">
                    </div>
                </div>
                <input type="submit" id="submitBtn" value="BOOK CRUISE">
            </form>
            <div class="form-cruise-box">
                <img src="images/form-cruise-pic.jpg" class="form-cruise-img" alt="portrait image of travel agent Jennifer Hodges">
            </div>
        </div>
    </div>

<?php include '_bottom.php';?>

