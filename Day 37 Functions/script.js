//rest parameter

// function abcd(a, b, c, ...d) {
//   console.log(a, b, c, d);
// }

// abcd(12, 23, 12312, 312, 2312);

//-------------------------------

//hoisting

// console.log(a);
// var a = 12;

// abcd();
// function abcd() {
//   console.log("hello");
// }

// abcd();
// let abcd = () => {
//   console.log("hello");
// };

//-------------------------------------------

//destructed

// function abcd({ name, age }) {
//   console.log(name);
// }
// abcd({ name: "harsh", age: 28 });

//----------------------------------

//default

// function abcd(a, b, c = 0) {
//   console.log(a, b, c);
// }
// abcd(1, 2);

//-------------------------------------

//nested function

// function abcd() {
//   function defg() {
//     console.log("defg chala");
//   }
//   defg();
// }
// abcd();

//---------------------------------------------

//scope chain

// let a = 12;
// function abcd() {
//   let b = 13;
//   function defg() {
//     console.log(b);
//   }
//   defg();
// }
// abcd();

//------------------------------

//IIFE

// (function () {
//   console.log("hello");
// })();

//-----------------------------------

//Higher order

//hof-> ek aisa fnc jo ki return karde ek aur fuction
// ya too wo fnc accept karle ek aur fnc parameter mein

//1

// function abcd(){
//     return function(){

//     }
// }

//2

//this abcd is higher ordered function

// function abcd(val1) {
//   val1();
// }
// abcd(function () {});

//------------------------------------------

// callback

// function abcd(a) {}
// // this abcd agrument is function this is called callback
// abcd(function () {});

