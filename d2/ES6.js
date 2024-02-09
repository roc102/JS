/*
        ES6 (ECMAScript 2015) introduced new features to JavaScript, like arrow functions for shorter syntax, 
        template literals for easier string formatting, and let/const for better variable handling. 
        It also added classes for object-oriented programming, modules for better code organization, and promises for 
        handling asynchronous operations more effectively.
*/

// Traditional function
function greet() {
  return `Hello!`;
}

// Arrow function

const greet1 = () => `Hello!`;

const greet = (name) => `Hello, ${name}!`;

// Object destructuring

const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const { name, age, email } = user;

console.log(name); // "Alice"
console.log(age); // 30
console.log(email); // "alice@example.com"

// Array destructuring

const coordinates = [40.7128, -74.006];
const [latitude, longitude] = coordinates;

console.log(latitude); // 40.7128
console.log(longitude); // -74.0060

function getCoordinates() {
  return [40.7128, -74.006];
}

const [lat, long] = getCoordinates();

console.log(lat); // 40.7128
console.log(long); // -74.0060

//   Spread Operator:    expand elements of an iterable (like an array or string )

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4 , 5 ,6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
