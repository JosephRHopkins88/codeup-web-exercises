"use strict";

var oddNumber = 0;

while (oddNumber !== "You are never going to come up with this.") {
    oddNumber = parseFloat(prompt("Please enter a number between 1 and 50."));
    if (oddNumber % 2 === 1 || (oddNumber > 0&& oddNumber < 50)) {break;}
}

for (var i = 1; i < 50, i+=2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping number : " + oddNumber);
        continue;
    }
    console.log(i);
}