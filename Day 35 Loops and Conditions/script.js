// 11 allow only 3 attempts to enter correct password if user gets it right early, stop if not-> "account locked"

// let userPass = prompt("enter password");
// let password = "javascript";
// let attempts = 0;

// while (attempts < 3) {
//   attempts++;
//   if (password === userPass) {
//     console.log("Correct Password");
//     break;
//   } else {
//     console.log("Incorrect password");
//   }

//   if (attempts === 3) {
//     console.log("Account Locked");
//     break;
//   }

//   userPass = prompt("enter password");
// }

///////////////////2///////////////////

// let attempts = 0;
// let userPass = prompt("enter password");
// let password = "java";
// let value = false;

// while (attempts < 3) {
//   attempts++;
//   if (password === userPass) {
//     value = true;
//     break;
//   } else {
//     console.log("Wrong password");
//   }

//   if (attempts === 3) {
//     console.log("account locked");
//     break;
//   }

//   userPass = prompt("enter password");
// }

// if (value === true) console.log("Correct Password");

// 12 Ask user for words  until they type "stop". count how many times the typed "yes"
// loop until "stop" is typed . count "yes"

// let words = prompt("enter word");
// let count = 0;

// while (words !== "stop") {
//   if (words === "yes") {
//     count++;
//   } else {
//     console.log(words);
//   }

//   if (words === "stop") break;

//   words = prompt("enter word");
// }
// console.log(`you stopped ${count}`);

//13 print numbers divisible by 7 from 1 to 50 user modulo % and loop

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i <= 50) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//14 sum of all Odd numbers from 1 to 30 add only Odd numbers . print final sum.

// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//15 keep asking number until user enters an even number use while loop stop only if input is even

// let num = +prompt("enter a number");

// while (num % 2 !== 0) {
//   if (num % 2 === 0) {
//     break;
//   } else {
//     console.log(num);
//   }
//   num = +prompt("enter a number");
// }
// console.log(`even number: ${num}`);

//16 print numbers between two user inputs input start and end using prompt()-> print all between

// let num1 = +prompt("enter first no.");
// let num2 = +prompt("enter second no.");

////1/////

// for (let i = num1; i <= num2; i++) {
//   console.log(i);
// }

////2/////

// let i = num1;
// while (i <= num2) {
//   console.log(i);
//   i++;
// }

//17 print only first 3 odd numbers from 1 to 20 use loop stop with break after 3 odd prints

// let count = 0;

// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }
//   if (count === 3) break;
// }
