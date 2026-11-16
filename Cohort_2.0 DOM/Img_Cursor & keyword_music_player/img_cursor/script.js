let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (e) => {
  //   console.log(e);
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
