// scope hai ke aap apne created variables and functions kaha tak use kar skte ho
//scope - functional scope, global scope and block scope

//function scope - function ke andar hi use ho sakti hai

// function abcd() {
//   var a = 12;
// }
// console.log(a);

//global scope - poore code mein kahi bhi use ho skti hai
//agar code kisi bhi {} ke andar nahi hai to aapka code global hai

// var a = 12;

//block scope - {} curly braces mein hi use ho sakti hai

// -------------------------------------

//execution context

// js sabse pahle jaise hi aapka function dekhta hai sabse pahle js banaata hai excution context , ye ek process hai jo ki do different pharses mein chalta hai, memory phase and doosre ka naam execution phase

//js - lexical scoping - ki app kaha par physically available ho ye poori tareeke se depend krata hai ki app kya access kr paage
// it can access anywhere inside abcd()
// function abcd() {
//   let a = 12;
//   function defg() {
//     console.log(a);
//   }
//   defg();
// }
// abcd();

// dynamic scoping-> kaha se call kr rhe ho uspe depend krega ki kya value milegi
// let a = 12;
// function abcd() {
//   console.log(a);
// }

// function defg() {
//   let a = 13;
//   abcd();
// }
// defg();

// closures - hote hai functions jo ki kisi parent fnc ke andar ho aur andar waala function return ho raha ho , and returning function use kre parent function ka koi variable
// private variables
// global pollution

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// how variables are preservered

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }
// let fnc = abcd();
// fnc();

// function countForMe() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }
// let count = countForMe();
// count();
// count();
// count();

// let count2 = countForMe();
// count2();
// count2();
// count2();
// count2();

function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(click);
    } else {
      console.log("click end!");
    }
  };
}
let click = clickLimiter();
click();
click();
click();
click();
click();
//click end
click();
