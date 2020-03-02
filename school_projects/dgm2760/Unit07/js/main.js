//Javascript document
/*jslint browser: true */

"use strict";
function hideOutput() {
    document.getElementById("oven").style.visibility = "hidden";
    document.getElementById("cart").style.visibility = "hidden";
}

hideOutput();

//Create pizza object
var pizza = {
    type : "",
    topping : "",
    size : "",
    setPizzaProps: function() {
        document.getElementById("size").innerHTML = pizza.size;
        document.getElementById("type").innerHTML = pizza.type;
        document.getElementById("topping").innerHTML = pizza.topping;
        document.getElementById("oven").style.visibility = "visible";
        document.getElementById("pizza-ingredient").innerHTML = "Time to eat! The oven is: ";
    },

    setIngredientsProps: function() {
        if (pizza.type == 'thin' && pizza.size == 'small') {
            document.getElementById("flour").innerHTML = '1 cup';
        } else if ((pizza.type == 'thick' && pizza.size == 'small') || (pizza.type == 'thin' && pizza.size == 'large')) {
            document.getElementById("flour").innerHTML = '2 cups';
        } else if (pizza.type == 'thick' && pizza.size == 'large') {
            document.getElementById("flour").innerHTML = '4 cups';
        }
        document.getElementById("cart").style.visibility = "visible";
        document.getElementById("toppings").innerHTML = pizza.topping;
    }


};









