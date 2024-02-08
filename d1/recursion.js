// factorial using function,

function factorialIterative(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i; // 120
  }
  return fact;
}

// function call
console.log("Factorial using Function: ", factorialIterative(5)); // Output: 120

// Factorial using Recursion

function factorialRecursive(n) {
  if (n == 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorialRecursive(n - 1); // recursive call
  }
}

console.log("Factorial using Recursion: ", factorialRecursive(5)); // Output: 120
