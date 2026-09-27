// // creating your own filter()

// let numbers = [1, 2, 3, 4, 5, 6];

// function myFilter(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const result = myFilter(numbers, function (num) {
//   return num % 2 === 0;
// });
// console.log(result);

// Function that returns a function
// Create a function:

// function multiplier(x) {
//   return function (m) {
//     return x * m;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(2));
// console.log(triple(3));

// // The return function goes into double and triple, yes.

// function operator(a, b, operator) {
//   console.log(operator(a, b));
// }

// operator(10, 4, (a, b) => a + b);

//basic closures

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }

// const fn = outer();
// fn();

// counter closures

// function createCounter() {
//   let x = 0;

//   function increament() {
//     return (x += 1);
//   }

//   return increament;
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

//multiple closures
//what is the output

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

// ----------------------------------------------------------------------------------

// Challenge 4 — Private balance
// Create a function called createBankAccount().
// It should work like this:

// const account = createBankAccount();

// console.log(account.deposit(100));  // 100
// console.log(account.deposit(50));   // 150
// console.log(account.withdraw(30));  // 120
// console.log(account.withdraw(20));  // 100

// Requirements:

// The balance should start at 0.
// balance must be private.
// The outside code should NOT be able to directly access balance.
// deposit(amount) adds money.
// withdraw(amount) removes money.
// Both methods should remember the same balance.

// Think first: What variable needs to be inside the closure?

// solution:-

function createBankAccount() {
  let balance = 1000;

  function deposit(add) {
    return (balance += add);
  }

  function withdrawal(minus) {
    return (balance -= minus);
  }
  return { deposit, withdrawal };
}

const amount = createBankAccount();

console.log(amount.deposit(100));
console.log(amount.withdrawal(100));
