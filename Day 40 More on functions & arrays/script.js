// write a higher-order function runTwice(fn) that takse another function and executes it two times

// function runTwice(fn) {
//   fn(function (val1) {
//     val1(function (val3) {
//       val3();
//       val3();
//     });
//   });
// }
// runTwice(function (val) {
//   val(function (val2) {
//     val2(function () {
//       console.log("hello");
//     });
//   });
// });

// ------------------------------------------------

// create on pure function that always returns the same output for given input, and one impure function using a global variable.

//pure function => ek fnc jo ki same arguments milne pe same answer de and koi side effect na kare

// function abcd(a, b) {
//   console.log(a + b);
// }
// abcd(1, 2);
// abcd(1, 2);

// impure function =>

// let global = 0;
// function impure(a, b) {
//   global++;
//   console.log(a + global);
// }
// impure(2);
// impure(2);

//-------------------------------------------------

// write a function that uses object destructuring inside parameters to exptract and print name and age

// function abcd({ name, age }) {
//   console.log(name, age);
// }
// abcd({ name: "harsh", age: 28 });

//-----------------------------------------------------

// let obj = {
//   name: "harsh",
//   fnc: function () {
//     console.log(this);
//   },
//   fnc2: () => {
//     console.log(this);
//   },
// };

// obj.fnc();
// obj.fnc2();

//---------------------------------------------

//given an array of numbers , use map() to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newarr = arr.map(function (val) {
//   return val * val;
// });

// console.log(newarr);

//--------------------------------

// use filter() to get only even number from an array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = arr.filter((val) => {
//   if (val % 2 === 0) {
//     return true;
//   }
// });
// console.log(result);

//----------------------------------------

// use reduce() to  find the total salary from an array of numbers [1000,2000,3000]

// let number = [1000, 2000, 3000];

// let total = number.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// console.log(total);

//----------------------------------------

//create an object user and test the behaviour of object. freeze() and object.seal() by adding/changing keys.

// let user = {
//   name: "harsh",
//   age: 27,
//   email: "h@h.h",
// };
// freeze => wont change and add value

// Object.freeze(user);
// user.name = "ldfjsldjfakls";

// seal=> can change value but cant add a new value
// Object.seal(user);

// user.name = "harshita";
// user.social = "instalgram";

// console.log(user);

//--------------------------------------------

// create a nested object (user -> address -> city) and access the city name inside it.

let obj = {
  user: {
    name: "harsh",
    address: {
      city: "bhopal",
    },
  },
};

let { city } = obj.user.address;

console.log(city);
