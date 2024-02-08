/*
functions and their purpose in organizing and reusing code.

In a restaurant, the chef can be seen as a function. The chef takes in ingredients (parameters), 
follows a recipe (function body), and produces a dish (return value). 
This allows the restaurant to offer a variety of dishes without having to reinvent the cooking process each time.

*/

/*
Scenario:

You are developing a web application for a car rental service. 
The application allows users to search for available cars based on their preferences such as location, date, and type of car. 
You want to implement a function that filters the list of available cars based on the user's input.

*/

//  Functions and Their Purpose in Organizing and Reusing Code

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Call the function
greet("Alice"); // Output: Hello, Alice!

/*

    var and let scope in functions

*/

function calculateRectangleArea(length, width) {
  return length * width;
}

// Example usage
const area = calculateRectangleArea(5, 10);
console.log("Area:", area); // Output: Area: 50

// shopping real life example

function calculateTotalCost(items) {
  let totalCost = 0; // 1700
  for (let item of items) {
    totalCost = totalCost + item.price * item.quantity;
  }
  return totalCost;
}

// Example usage
const shoppingCart = [
  { name: "T-shirt", price: 200, quantity: 2 },
  { name: "Jeans", price: 500, quantity: 1 },
  { name: "Shoe", price: 800, quantity: 1 },
];

const totalCost = calculateTotalCost(shoppingCart);
console.log("Total Cost:", totalCost); // Output: Total Cost: 1700

// recursion
