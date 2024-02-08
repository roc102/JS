/*
 loops ( for executing repetitive tasks )
 */

const userAge = 17;
const discountAge = 18;

userAge >= discountAge;

// Loops(For Loop)

for (let i = 1; i <= 5; ++i) {
  console.log(`3 x ${i} = ${3 * i}`);
}

// While Loop

let countdown = 5;
while (countdown > 0) {
  console.log(countdown); //
  countdown--;
}
console.log("Go!");

// Do-While Loop

let i = 5;
do {
  console.log(i);
  i--;
} while (0 > 0);
console.log("exit");

// For...in Loop (for objects)

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// For...of Loop (for arrays and iterable objects):

const shoppingCart = ["item1", "item2", "item3"];
for (let item of shoppingCart) {
  console.log(`Adding ${item} to cart.`);
}

// functions
