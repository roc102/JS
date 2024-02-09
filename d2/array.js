// Arrays and array methods (map, filter, reduce)

// Map:
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];
const productNames = products.map((product) => product.name); // ["Product 1", "Product 2", "Product 3"]

// Filter:
const num1 = [1, 2, 3, 4, 5];
const evens = num1.filter((num) => num % 2 === 0); // [2,4]

// Filtering out inactive users from a list:
const users = [
  { id: 1, name: "User 1", isActive: true },
  { id: 2, name: "User 2", isActive: false },
  { id: 3, name: "User 3", isActive: true },
];
const activeUsers = users.filter((user) => user.isActive);

// [{ id: 1, name: "User 1", isActive: true }, { id: 3, name: "User 3", isActive: true }]

// Reduce:
const num2 = [1, 2, 3, 4, 5];
const sum = num2.reduce((acc, curr) => acc + curr, 0); // 15

/*
          Initial state:

          acc (accumulator): 0 (initial value provided in reduce method)
          curr (current element): 1 (first element of the array)

          First iteration:

          acc: 0 (initial value)
          curr: 1 (first element of the array)
          Operation: acc + curr = 0 + 1 = 1

          Second iteration:

          acc: 1 (result of the previous operation)
          curr: 2 (second element of the array)
          Operation: acc + curr = 1 + 2 = 3

          Third iteration:

          acc: 3 (result of the previous operation)
          curr: 3 (third element of the array)
          Operation: acc + curr = 3 + 3 = 6

          Fourth iteration:

          acc: 6 (result of the previous operation)
          curr: 4 (fourth element of the array)
          Operation: acc + curr = 6 + 4 = 10

          Fifth iteration:

          acc: 10 (result of the previous operation)
          curr: 5 (fifth element of the array)
          Operation: acc + curr = 10 + 5 = 15
          
          Final result: 15 (value of acc after processing all elements)
*/

// Calculating total price from an array of items:
const items = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
];
const totalPrice = items.reduce((acc, item) => acc + item.price, 0); // 60
