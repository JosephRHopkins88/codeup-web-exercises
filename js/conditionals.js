"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (parameter) {
    if (parameter === "blue") {
        return "Blue is the color of the sky.";
    } else if (parameter === "red") {
        return "Strawberries are red.";
    } else if (parameter === "cyan") {
        return "I don't know anything about cyan.";
    } else {
        return "I do not know anything about the color " + parameter + ".";
    }

    // switch(color) {
    // case 'red':
    //     alert("Strawberries are red!");
    //     break;
    // case 'orange':
    //     alert("Oranges are orange!")
    //     break;
    // case 'yellow':
    //     alert("Bananas are yellow!");
    //     break;
    // case 'green':
    //     alert("Grass is green!");
    //     break;
    // case 'blue':
    //     alert("The sky is blue!");
    //     break;
    // case 'indigo':
    //     alert("I do not know much about indigo!");
    //     break;
    // case 'violet':
    //     alert("Violets are violet?");
    //     break;
//}





}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
 /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

if (randomColor === "blue") {
    console.log ("Blue is the color of the sky.");
} else if (randomColor === "red") {
    console.log ("Strawberries are red.");
} else {
    console.log ("I do not know anything about the color " + randomColor + ".");
}

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

switch (randomColor) {
    case "red":
        console.log("Strawberries are red.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    case "yellow":
        console.log("Bananas are yellow.");
        break;
    case "green":
        console.log("Grass is green.");
        break;
    case "blue":
        console.log("The sky is blue.");
        break;
    case "indigo":
        console.log("I do not know much about indigo.");
        break;
    case "violet":
        console.log("Are violets violet?")
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("Pick a color red, orange, yellow, green, blue, indigo or violet.").toLocaleLowerCase(); //sets up the prompt to get the color from the user
var myText = analyzeColor(color); //calls analyzeColor function and stores the retunred string in a variable named mytext
alert(myText); //shows an alert with the string stored in the myText variable

// switch(color) {
//     case 'red':
//         alert("Strawberries are red!");
//         break;
//     case 'orange':
//         alert("Oranges are orange!")
//         break;
//     case 'yellow':
//         alert("Bananas are yellow!");
//         break;
//     case 'green':
//         alert("Grass is green!");
//         break;
//     case 'blue':
//         alert("The sky is blue!");
//         break;
//     case 'indigo':
//         alert("I do not know much about indigo!");
//         break;
//     case 'violet':
//         alert("Violets are violet?");
//         break;
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//create a lucky number variable
//var luckyNumber = Math.floor(Math.random() * 6);
//create a function to calculate
function calculateTotal (luckyNumber, originalPrice) {
    if (luckyNumber === 0) {
        return originalPrice;
    } else if (luckyNumber === 1) {
        return originalPrice - (originalPrice * .1);
    } else if (luckyNumber === 2) {
        return originalPrice-(originalPrice * .25);
    } else if (luckyNumber === 3) {
        return originalPrice-(originalPrice * .35);
    } else if (luckyNumber === 4) {
        return originalPrice-(originalPrice * .5);
    } else if (luckyNumber === 5) {
        return originalPrice - (originalPrice * 1);
    }
}

console.log(calculateTotal(5,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(3,100))
console.log(calculateTotal(2,100));

// function calculateTotal(parameter) {
//     if (parameter === 0) {
//         console.log("Sorry no discount.");
//     } else if (parameter === 1) {
//         console.log("Congratulations you have received a 10% discount!");
//     } else if (parameter === 2) {
//         console.log("Congratulations you have received a 25% discount!");
//     } else if (parameter === 3) {
//         console.log("Congratulations you have received a 35% discount!");
//     } else if (parameter === 4) {
//         console.log("Congratulations you have received a 50% discount!");
//     } else {
//         console.log("Congratulations you have received a 100% discount!");
//     }
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal (luckyNumber, originalPrice) {
    if (luckyNumber === 0) {
        return originalPrice;
    } else if (luckyNumber === 1) {
        return originalPrice - (originalPrice * .1);
    } else if (luckyNumber === 2) {
        return originalPrice-(originalPrice * .25);
    } else if (luckyNumber === 3) {
        return originalPrice-(originalPrice * .35);
    } else if (luckyNumber === 4) {
        return originalPrice-(originalPrice * .5);
    } else if (luckyNumber === 5) {
        return originalPrice - (originalPrice * 1);
    }
}
var randomLuckyNumber = Math.floor(Math.random() * 6);
alert(calculateTotal(randomLuckyNumber,100) + " lucky number was: " + randomLuckyNumber);
randomLuckyNumber = Math.floor(Math.random() * 6);
alert(calculateTotal(randomLuckyNumber,100) + " lucky number was: " + randomLuckyNumber);
randomLuckyNumber = Math.floor(Math.random() * 6);
alert(calculateTotal(randomLuckyNumber,100) + " lucky number was: " + randomLuckyNumber);
randomLuckyNumber = Math.floor(Math.random() * 6)
alert(calculateTotal(randomLuckyNumber,100) + " lucky number was: " + randomLuckyNumber);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
if(confirm("Would you like to enter a number?")) {
    var myNum = parseInt(prompt("Please enter the number:"));
    if (!isNaN(myNum)) {
        alert("The number is:" + isNumberEvenOrOdd(myNum));
        alert("The number plus 100 is: " + numberPlus100(myNum));
        alert("The number is: " + isNumberNegativeOrPositive(myNum));
    } else {
        alert("You must enter a number. Please try again.");
    }
}

function isNumberEvenOrOdd(theNumber) {
    if (theNumber % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

function numberPlus100(theNumber) {
    return theNumber + 100;
}

function isNumberNegativeOrPositive(theNumber) {
    if (theNumber < 0) {
        return "negative";
    } else if (theNumber > 0) {
        return "positive";
    } else {
        return "neither";
    }
}