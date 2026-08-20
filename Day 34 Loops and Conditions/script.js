//8 print multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

//---------------------------------------------

//9 count how many numbers between 1 and 15 are greater than 8 loop and count conditionally

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     sum++;
//   }
// }
// console.log(`numbers greater than 8 - ${sum}`);

//---------------------------------------------

// Ask user for password  and  print access status hardcoded correct password campare with user input

// let user = prompt("enter password");
// let password = "javascript";

// if (user === null) console.log("You cancelled it");
// else if (user.trim() === "") console.log("write properly");
// else {
//   if (password === user) {
//     console.log("Correct password");
//   } else {
//     console.log("Incorrect password");
//   }
// }

//----------2---------------

// let user = prompt("enter password");
// let pass = "harsh";

// while (pass !== user) {
//   if (user === null) console.log("you cancelled it");
//   else if (user.trim() === "") console.log("write properly");
//   else {
//     if (pass === user) {
//       break;
//     } else {
//       console.log("Incorrect password");
//     }
//   }
//   user = prompt("enter password");
// }
// console.log("Correct Password");

// Level 2 - slightly tougher but logical

// 11 allow only 3 attempts to enter correct password if user gets it right early, stop if not => account locked

// let user = prompt("enter password");
// let pass = "java";
// let attempt = 0;

// while (attempt <= 3) {
//   attempt++;
//   if (pass === user) {
//     console.log("Correct Password");
//     break;
//   } else {
//     console.log("Incorrect password");
//   }

//   if (attempt === 3) {
//     console.log("Account Locked");
//     break;
//   }

//   user = prompt("enter password");
// }

//---------------2-----------------

let pass = "java";
let attempts = 0;
let value = false;
let user = prompt("enter password");
attempts++;

if (pass === user) value = true;

while (pass !== user) {
  if (attempts === 3) {
    console.log("Account Locked");
    break;
  }

  user = prompt("enter password");
  if (pass === user) value = true;
  attempts++;
}

if (value === true) console.log("account opened");
