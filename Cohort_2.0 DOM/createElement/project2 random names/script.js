let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
  "I love coding.",
  "Today is sunny.",
  "Keep moving forward.",
  "Practice makes progress.",
  "I am learning JavaScript.",
  "Never give up.",
  "Small steps matter.",
  "Code every day.",
  "Believe in yourself.",
  "Hard work pays off.",
  "Stay focused.",
  "Learn something new.",
];

btn.addEventListener("click", () => {
  let p = document.createElement("p");

  let a = Math.floor(Math.random() * arr.length);

  //   console.log(arr[a]);

  p.innerHTML = arr[a];

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  p.style.top = y + "%";
  p.style.left = x + "%";

  let r = Math.floor(Math.random() * 100);

  p.style.rotate = r + "deg";

  let s = Math.floor(Math.random() * 50);

  p.style.fontSize = s + "px";

  main.appendChild(p);
});
