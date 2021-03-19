"use strict";
// Immediately Invoked Function Expression (IIFE's)

(function () {

    console.log("Hello World.");

    console.log(parseInt("17 dogs."));

    var whatIsTheWord = prompt("What is your favorite, work appropriate word?");

    console.log(whatIsTheWord);

//let's define a function
    function doTheThing(input) {
        var output = input + " was pulled into the function. Now it is this concatenated string. :)";
        return output;
    }

    console.log(doTheThing("Hot dog"));

    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(17, 18));

// Let's make a "bad" function...
    function logToConsole(info) {
        return console.log(info + " is something important to keep in mind.");
    }

    var needThisForLater = logToConsole("Bengal Tigers are endangered");

    console.log(needThisForLater);

// In the defense of console.logging during functions
    function addingToString(str) {
        var finalString = str + " is a string."
        //console.log(typeof finalString);
        finalString += " And if it wasn't originally a string it sure is now!";
        //console.log(finalString);
        return finalString;
    }

    alert(addingToString("Antelope"));

// Global vs Local Variables

    var global = "Earth"

    console.log(global);

    function getGlobalAndLogIt() {
        var local = "Neptune";
        console.log(global);
        console.log(local);
    }

    getGlobalAndLogIt();
//console.log(local);

// Another way to define functions
    var coolGuyFunction = function (string) {
        return string + ", but with sunglasses. B)";
    }

    console.log(coolGuyFunction("skunk"));
})();
