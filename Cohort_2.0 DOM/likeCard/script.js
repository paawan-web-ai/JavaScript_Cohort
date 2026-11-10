let img = document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick", function () {
  i.style.color = "red";
  i.style.opacity = 1;
  i.style.transform = "translate(-50%,-50%)  scale(1)";

  let r = Math.floor(Math.random() * 90);

  setTimeout(() => {
    i.style.opacity = 0;
    i.style.transform = `translate(-50%, -50%) translateY(-200px) rotate(${r + "deg"}) scale(1.5)`;
  }, 550);

  setTimeout(() => {
    i.style.rotate = "0";
    i.style.transform = "translate(-50%, -50%) translateY(0px) scale(1)";
  }, 1200);
});
