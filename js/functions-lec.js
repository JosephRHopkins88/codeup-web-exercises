"use strict";
// Immediately Invoked Function Expression (IIFE's)

(function () {

    console.log("Hello World.");

    console.log(parseInt("17 dogs."));

    var whatIsTheWord = prompt("What is your favorite, work appropriate word?");

    console.log(whatIsTheWord);



    function addThisWordToInputString(inputString)
    {
        return inputString + "ThisWord";
    }

    console.log(addThisWordToInputString("Before this word: "));


    function addThisWordToInputStringUsingVar(inputString)
    {
        var outputString = inputString + "ThisWord";
        return outputString;
    }

    console.log(addThisWordToInputStringUsingVar("Before this word: "));



    function name (input1,input2,input3)
    {
        //do code

        //return value if needed
    }

    function addThreeNumbers(num1,num2,num3)
    {
        return num1+num2+num3;
    }

    addThreeNumbers(12,13,14);


    function addThreNumbersAfterTheyAreDividedByTwo(num1,num2,num3)
    {
        var halfNum1 = num1/2;//3
        var halfNum2 = num2/2;//4
        var halfNum3 = num3/2;//5
        var halfsAddedTogether = halfNum1+halfNum2+halfNum3;//12
        return halfsAddedTogether;
    }
    addThreNumbersAfterTheyAreDividedByTwo(6,8,10); //12

    addThreNumbersAfterTheyAreDividedByTwo(10,12,14);//18

    function addTenToUserInputNumber()
    {
        var mynum = prompt(parseInt("Enter your number"));
        return 10 + mynum;
    }

    function addInputToUserEnteredNumber(inputNumber)
    {
        var mynum = prompt(parseInt("Enter your number"));
        return inputNumber + mynum;
    }

    console.log(addInputToUserEnteredNumber(13));


    function makePhoneNumber()
    {
        var f3 = getFirstThree();
        var s3 = getSecondThree();
        var f4 = getFinalFour();

        return f3 + "-" + ss3 + "-" + f4;
    }

    function getFirstThree()
    {
        var fnum = GetANumber("1st");
        var snum = GetANumber("2nd");
        var gnum = GetANumber("3rd");
        return fnum + snum + gnum;
    }

    function GetANumber(numberLabel)
    {
        return prompt("Please enter the " + numberLabel + " number now:");
    }

    function getSecondThree()
    {
        var fnum = GetANumber("4th");
        var snum = GetANumber("5th");
        var gnum = GetANumber("6th");
        return fnum + snum + gnum;
    }

    function getFinalFour()
    {
        var fnum = GetANumber("7th");
        var snum = GetANumber("8th");
        var gnum = GetANumber("9th");
        var hnum = GetANumber("10th");
        return fnum + snum + gnum + hnum;
    }

    var myPrice = getPrice(1);
    function getPrice(productNumber)
    {
        var thePrice = 0;
        if(productNumber==1)
        {
          thePrice = 10;
          //get logged in user id
            //see if user has any discounts
            //se if user has credits
            //
        }
        else
        {
            thePrice = 20;
        }

        return thePrice*.9;
    }


    function encryptFile(filePath)
    {
        //do all encryption steps and send out the encrypted file path
    }

//let's define a function
    function doTheThing(input) {
        var output = input + " was pulled into the function. Now it is this concatenated string. :)";
        return output;
    }

    console.log(doTheThing("Hot dog"));

    function addTwoNumbers(x, y) {
        return x + y;
    }

    console.log(addTwoNumbers(17, 18));

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



    var myString="";
    var myString="Hello";
    //now myString says Hello in it
    myString = "hi";
    //no myString says hi in it
    myString += " Joe";
    //now myString = hi Joe

    //the += is a short hand for this statement setup

    myString = myString + " Joe";

    var myNum = 2;
    myNum = 3;
    //myNum is currently 3
    myNum+=1;
    //myNum = 4 right now

    myNum *=2;
    //myNum now equals 8;
    //myNum = myNum * 2;



















// Global vs Local Variables

    var _global = "Earth";

    console.log(global);
    function getGlobalAndLogIt(){
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
