"use strict"

var mainHeader = function () {
    document.querySelector("#main-header").style.innerHTML = "Hello World";
    this.innerHTML = "JavaScript is Cool"
}

var headerText = document.querySelector("#main-header");

headerText.addEventListener("click", mainHeader);