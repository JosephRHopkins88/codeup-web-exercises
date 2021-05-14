// array iteration methods

// .forEach()
// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function (item, index){
//     output = output + "<p>" + item + " is at index " + index + "</p>";
//     $("#output").html(output);
// });

// prices.forEach((function (item, index) {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output = output + "<p>Item number " + (index + 1) + ". Price: $" + item + ". Tax: $" + tax + ". Total: $" + total + "</p>";
//     $("#output").html(output);
// }));

// prices.forEach((function (price, index) {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index+1}. Price: $${price}. Tax: $${tax}. Total $${total}</p>`;
//     $("#output").html(output);
// }));

let output = "";
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let pricesAfterTax = [];

pricesAfterTax = prices.map(function (price){
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

pricesAfterTax.forEach(function (item){
    output = output + "<p>" + item + "</p>";
    $("#output").html(output);
});

let things = ["book", "pencil", "marker", "eraser"];
let pluralThings = things.map((thing, index) => {
    if (index === 0) {
        output = "<p>You must bring the following items:</p>";
    }
        output += `<p>${thing}s</p>`;
    $("#output").html(output);
});