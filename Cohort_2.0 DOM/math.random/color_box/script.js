// let h1 = document.querySelector("h1");

// h1.addEventListener("click", () => {
//   h1.innerHTML = "let's goo!!!";

//   h1.style.color = "red";
//   h1.style.backgroundColor = "blue";
// });

//math.random()

// let a = Math.floor(Math.random() * 100);
// console.log(a);

let button = document.querySelector("button");
let box = document.querySelector("#box");

button.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${r},${g},${b})`;
});
