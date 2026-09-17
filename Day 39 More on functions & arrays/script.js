// functions sayHello() that prints hello js

// function sayHello(name) {
//   console.log("hello", name);
// }

// function add(val) {
//   sayHello(val);
// }
// add("js");

//------------------------------

// function sayHello(name) {
//   console.log("hello " + name);
// }
// function user(val) {
//   val("js");
// }
// user(sayHello);

//------------------------------------------

//create a function add(a,b) that returns their sum and log the result.

// function add(a, b) {
//   return a + b;
// }
// function operator(a, b, num) {
//   console.log(num(a, b));
// }
// operator(12, 3, add);

//-----------------------------
// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 2));

//-------------------------------------

// functions  prints greets

// function greet(name) {
//   return "hi " + name;
// }
// console.log(greet("aloo"));

//-----------------------------------------

// use rest parameters to make a function that adds unilimited numbers

// function add(...num) {
//   let number = 0;
//   num.forEach(function (val) {
//     number += val;
//   });
//   console.log(number);
// }
// add(1, 2, 3);

//---------reduce--------------

// function add(...num) {
//   return num.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// }
// add(1, 2, 3);

//--------------forloop

// function add(...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log(sum);
// }
// add(1, 2, 3);

// create an IIFE that prints "I run instantly!"

// (function () {
//   console.log("I run instantly!");
// })();

//-----------------------------------------------

// make a nested function where the inner one prints a variable from the outer one.

// function outer() {
//   let val = "harsh";
//   return function () {
//     console.log(val);
//   };
// }
// let inner = outer();
// inner();

//---------------------------------------

// use a for loop to print all elements of an arrayy

// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// create an  object person with keys name,age,and city, and print each key's value.

let person = {
  name: "harsh",
  age: 28,
  city: "bhopal",
};

// for in  loop

// for (let key in person) {

//key
//   console.log(key);

//values
// console.log(obj[key]);
// }

//-------------------------------------

// use setTimeout() to log "time's up!" after 2 seconds

// setTimeout(() => {
//   console.log("time's up!");
// }, 2000);
