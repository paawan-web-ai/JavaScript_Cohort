//2 print only even numbers from 1 to 20 use a loop and condition to print only even ones.

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// for (let i = 2; i < 21; i += 2) {
//   console.log(i);
// }

// --------------------------------------

//3 print number from 10 to 1 reverse loop with a decrement

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// --------------------------------------

//4 print the word "Yes" 5 times repeat using a loop

// for (let i = 1; i <= 5; i++) {
//   console.log("yes");
// }

// --------------------------------------

//5 print  whether numbers from 1 to 10 are even or odd ,For each number, check: even -> "Even" , else -> "odd"

// for (let i = 1; i <= 10; i++) {
//   i % 2 === 0 ? console.log(`${i} - even`) : console.log(`${i} - odd`);
// }

// ------------------------------------

//6 ask user for a number and say if it's positive or negative , use prompt() and a conditional

// let number = prompt("enter a number");

// while (number !== null) {
//   number = parseInt(number);

//   if (number > 0) console.log("Positive Number");
//   else if (number < 0) console.log("Negative Number");
//   else console.log("Number is Zero");

//   number = prompt("Enter a Number");
// }

// ------------------------------------

// 7. ask user's age and check if eligible to vote
// If age >= 18 -> "Eligible", else -> "Not Eligible"

let age = prompt("Enter age");

if (age === null) {
  console.log("you cancelled it");
} else if (age.trim() === "") {
  console.log("write properly");
} else {
  age = Number(age.trim());

  if (isNaN(age)) console.log("please number dede");
  else {
    if (age < 0) {
      console.log("Invalid age");
    } else if (age >= 18) {
      console.log("eligible");
    } else {
      console.log("not eligible");
    }
  }
}
