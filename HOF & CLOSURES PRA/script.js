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

// function myMap(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4];

// const result = myMap(numbers, function (num) {
//   return num * 2;
// });

// console.log(result);

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

//-----------------------------

//creating your own filter()

// let number = [1, 2, 3, 4, 5, 6, 7, 8];

// // function myFilter(arr, callback) {
// //   let result = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (callback(arr[i])) {
// //       result.push(arr[i]);
// //     }
// //   }
// //   return result;
// // }

// // const result = myFilter(number, function (num) {
// //   return num % 2 === 0;
// // });
// // console.log(result);

//-----------------------------------------

// Function that returns a function
// Create a function:

// function multiplier(x) {
//   return function (m) {
//     return x * m;
//   };
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// The return function goes into double and triple, yes.

//---------------------------------------------
// HOF challenge ⭐
// Create a function called operate:

// function operate(a, b, operation) {
//   console.log(operation(a, b));
// }

// operate(10, 5, (a, b) => a + b);
// // 15
// operate(10, 5, (a, b) => a - b);
// // 5
// operate(10, 5, (a, b) => a * b);
// // 50
// operate(10, 5, (a, b) => a / b);
// // 2

//------------------------------------------

// 1. Basic closure
// What will this output?

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// const fn = outer();
// fn();

//---------------------------------------

// 2. Counter
// Create a createCounter() function:

// function createCounter() {
//   let x = 0;

//   function increament() {
//     return (x += 1);
//   }
//   return increament;
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//-----------------------------------------------

// 3. Multiple closures
// What is the output?

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
