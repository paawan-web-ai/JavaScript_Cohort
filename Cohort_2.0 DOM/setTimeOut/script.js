// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// let time = setInterval(() => {
//   console.log("yo");
// }, 3000);

// setTimeout(() => {
//   clearInterval(time);
// }, 10000);

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  h1.innerHTML = "changing user...";
  setInterval(() => {
    h1.innerHTML = "Hello I'm Paawan";
  }, 2000);
});
