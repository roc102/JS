// var (Functional Scope):

function varExample() {
  if (true) {
    var localVar = "I am a var variable";
    console.log(localVar); // Output: I am a var variable
  }
  console.log(localVar); // Output: I am a var variable
}

varExample();
console.log(localVar); // Throws ReferenceError: localVar is not defined

function letExample() {
  if (true) {
    let locallet = "I am a let variable";
    console.log(localVar); // Output: I am a let variable
  }
  console.log(locallet); // Throws ReferenceError: localVar is not defined
}

letExample();
console.log(locallet); // Throws ReferenceError: localVar is not defined
