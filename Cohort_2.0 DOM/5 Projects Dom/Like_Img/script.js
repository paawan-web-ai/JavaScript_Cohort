let container = document.querySelector(".container");
let i = document.querySelector(".container p>i");

container.addEventListener("dblclick", () => {
  i.style.transform = "translate(-50%, -50%) scale(1)";
  i.style.opacity = 0.8;
  setTimeout(() => {
    i.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
  setTimeout(() => {
    i.style.opacity = 0;
  }, 900);
});
