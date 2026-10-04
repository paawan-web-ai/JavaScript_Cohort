let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.height = "50px";
  div.style.width = "50px";

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let round = Math.floor(Math.random() * 360);

  div.style.backgroundColor = `rgb(${r},${g},${b})`;

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  div.style.top = x + "%";
  div.style.left = y + "%";
  div.style.rotate = r + "deg";

  main.appendChild(div);
});
