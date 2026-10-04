// let h1 = document.createElement("h1");

// document.querySelector("body").appendChild(h1);

// h1.innerHTML = "hello";

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  //   let h1 = document.createElement("h1");
  // h1.innerHTML = "Hello js";
  // document.querySelector("body").appendChild(h1);

  let btn = document.createElement("button");

  btn.classList.add("btn");

  btn.innerHTML = "click button";

  document.querySelector("body").appendChild(btn);
});
