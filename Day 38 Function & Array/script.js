//Pure Function ek aisa function
//same input = same output
//koi side effect nahi hoga

// let a = 12;
// function abcd(val) {
//   console.log(val + 2);
// }
// abcd(a);

//--------------------------------

//impure function
//same input = different output(o/p) ho skta hai
//koi na koi side effect ho skta hai

// let a = 12;
// function abcd(val) {
//   a = Math.random() + val;
//   console.log(a);
// }
// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);

// let a = 12;
// function abcd(val) {
//   console.log(Math.random() + val);
// }
// abcd(12);
// abcd(12);
// abcd(12);
// abcd(12);

// closure -> ek  function hai jo return karta hai function but returning function jo hai wo parent fnc ka koi variable use karega

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// abcd();

// return

// function abcd(v) {
//   return 12 + v;
// }
// let val = abcd(23);
// console.log(val);

//------------------------------------------

// first class fncs => functions ko values ki tarah treat kar sakte hai

// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("hey");
// });

//------------------------------------------

//Higher ordered function hota hai jo ki return  kare function ya fir accept kare ek function apne parameter mein

// function abcd() {
//   return function () {
//     console.log("hello hof");
//   };
// }
// abcd()();

//------------------------------------------

//closures -> ek fnc jo return kare ek aur  function aur return hone waala function humesha use karega parent fnc  ka koi variable

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }
// abcd()();

//------------------------------------------

// lexical scoping

// function abcd() {
//   let a = 12;
//   function defg() {
//     let b = 10;
//     function ghij() {
//       let c = 13;
//     }
//   }
// }

// 1 what's the difference between function declaration and expression in terms of  hoisting?

//fnc declaration / fnc statement

// abcd();
// function abcd() {
//   console.log("hello");
// }

// fnc expression

// abcd();
// let abcd = function () {
//   console.log("hello");
// };

//-------------------

// let multiply = (a, b) => {
//   return a * b;
// };
// let m = multiply(2, 2);
// console.log(m);

//----------------------

// use rest parameter to accept any number of  scores and  return the total

// function getScore(...score) {
//   let total = 0;
//   score.forEach((val) => {
//     total = total + val;
//   });
//   console.log(total);
// }
// getScore(10, 12, 14, 18);

//-------------------------------

// function checkAge(age) {
//   if (age < 18) return "too young";
//   return "Allowed";
// }
// console.log(checkAge(12));

//-------------------------------

//convert the function into pure function

// let total = 0;
// function addToTotal(num) {
//   total += num;
// }

//pure

// let total = 0;
// function addToTotal(num) {
//   let newtotal = total;
//   newtotal += num;
//   console.log(newtotal);
// }
// addToTotal(12);

//---------------------------------

// what is closure? when is it created??

// function abcd() {
//   let val = 0;
//   return function () {
//     console.log(val);
//   };
// }
// abcd()();

// gusse the output

//1

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter = outer();
// counter();
// counter();

//2

// function outer(val) {
//   let count = val;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter = outer(2);
// counter();
// counter();

//--------------------------------------

// what is the use of IIFE? Name one real-world use case.

// let shery = (function () {
//   let score = 0;
//   return {
//     getScore: function () {
//       console.log(score);
//     },
//     setScore: function (val) {
//       score = val;
//     },
//   };

// })();

//--------------------------------------

// write a BMI Calculator

// function bmi(weight, height) {
//   return weight / (height * height);
// }
// console.log(bmi(90, 1.676).toFixed(2));

//---------------------------------------

//create a reusable discount calculator (HOF)

// function discountPrice(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }

// let twenty = discountPrice(20);
// twenty(1000);

//Arrays

// let arr = [1, 2, 3, 4, 5, 6];
// arr[5];

//----------------------------------------

// ways of creating arrays  in js

//1 let arr = [1,2,3,4,5,6]

//2 let arr2 = new Array();


//--------------------------------------------

