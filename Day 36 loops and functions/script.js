// 18 ask user 5 numbers. count how many are positive use loop + condition + counter.

// let count = 0;
// for (let i = 1; i < 6; i++) {
//   let num = +prompt("enter number");
//   if (num >= 0) count++;
// }
// console.log(count);

// 19 ATM simulator - allow 3 withdrawals start  with 1000 balance. ask withdrawal amount 3 times. if enough balance -> deduct else -> print "insufficient balance"

// let balance = 1000;
// let count = 0;
// let flag = false;
// while (balance > 0 && count !== 3) {
//   let withdrawal = +prompt("enter withdrawal");
//   count++;

//   if (withdrawal < 0) break;

//   if (balance >= withdrawal) {
//     balance -= withdrawal;
//     console.log(balance);
//   } else {
//     flag = true;
//     break;
//   }
//   if (balance <= 0) break;
// }

// if (flag === true) console.log("Insufficient Amount");

// console.log(`Balance is ${balance}`);

// 'do...while' in javascript

let i = 1;
do {
  console.log(i);
  i++;
} while (i < 10);
