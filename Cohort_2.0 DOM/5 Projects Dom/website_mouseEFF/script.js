let elem = document.querySelectorAll(".elem");

elem.forEach((e) => {
  //   console.log(e.children[1]);
  let img = e.children[1];

  e.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });
  e.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });

  e.addEventListener("mousemove", function (dets) {
    img.style.left = dets.clientX + "px";
  });
});
