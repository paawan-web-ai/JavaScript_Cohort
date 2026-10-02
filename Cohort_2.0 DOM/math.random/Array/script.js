// let arr = ["vendant", "abhi", "souvik", "sumit", "ankit", "satwik"];

// let i = Math.floor(Math.random() * arr.length);

// console.log(arr[i]);

const arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "RR",
    primary: "pink",
    secondary: "blue",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "DC",
    primary: "blue",
    secondary: "red",
  },
  {
    team: "PBKS",
    primary: "red",
    secondary: "silver",
  },
  {
    team: "GT",
    primary: "navy",
    secondary: "gold",
  },
  {
    team: "LSG",
    primary: "blue",
    secondary: "orange",
  },
];

let box = document.querySelector("#box");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

(box,
  body.addEventListener("click", () => {
    let i = Math.floor(Math.random() * arr.length);
    //math.random only gives number
    // console.log(i);
    h1.innerText = arr[i].team;

    box.style.backgroundColor = arr[i].primary;
    body.style.backgroundColor = arr[i].secondary;
  }));
