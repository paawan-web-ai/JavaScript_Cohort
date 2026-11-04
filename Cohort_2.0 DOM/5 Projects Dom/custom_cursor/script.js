let cursor = document.querySelector(".cursor");

body = document.querySelector("body").addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
