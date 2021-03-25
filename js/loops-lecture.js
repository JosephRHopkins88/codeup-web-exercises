// var slices = 8;
// while (slices > 0) {
//     console.log("I'll have a slice!");
//     slices = slices - 1;
//     console.log("Now there's " + slices + " slices left!");
//     if (slices <= 2) {
//         console.log("The pizza is almost gone...");
//     }
// }
// console.log("No more pizza :(");
// console.log("Maybe ice cream now :)");

//Pseudocode

// ask the user for input
// get the user input
// declare a user input variable
// store user input in the variable
// declare a variable to store the total (accumulator)
// add the cost of the new item to the total
// keep storing the new totals in the accumulator
// tell the user how to end the program (sentinel value)
// loop back around and do it all again, over and over, until the user tells us to stop

// var priceOfItem = parseFloat(prompt("Enter the price of you first item"));
//
// alert("The price of your item was $" + priceOfItem);
//
// var totalCost = priceOfItem;
// var userInput = "";
// //create a sentinel value
// while (userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Ok. Your final total is $" + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost +priceOfItem;
//         alert("Your total now is $" + totalCost.toFixed(2));
//     }
// }

// var counter = 8;
// while (counter >= 0) {
//     console.log(counter);
//     counter = counter -1;
// }
