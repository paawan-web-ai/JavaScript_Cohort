//HOF GREET FUNCTION

// function greet(name) {
//   console.log("Hello " + name);
// }
// function user(callback) {
//   callback("paawan");
// }
// user(greet);

//----------------------------------------

// Create a function calculate that accepts two numbers and a function as arguments.

// function alloo(a, b) {
//   console.log(a + b);
// }
// function calculate(a, b, operation) {
//   operation(a, b);
// }

// calculate(2, 2, alloo);

// /----------------------------------------

// 2. Create your own map()
// Create a function called myMap that takes an array and a callback.
// expected : [2, 4, 6, 8]

function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

const result = myMap(numbers, function (num) {
  return num * 2;
});

console.log(result);

// 1st time:
// arr[i] = 1
// num = 1
// 1 × 2 = 2

// 2nd time:
// arr[i] = 2
// num = 2
// 2 × 2 = 4

// 3rd time:
// arr[i] = 3
// num = 3
// 3 × 2 = 6

// 4th time:
// arr[i] = 4
// num = 4
// 4 × 2 = 8
