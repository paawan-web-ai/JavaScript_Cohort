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
