let btn = document.querySelector(".button");
let h2 = document.querySelector("h2");
let downloading = document.querySelector("p");
let innerdownloading = document.querySelector(".inner-download");

let grow = 0;

btn.addEventListener("click", () => {
  h2.innerHTML = "Downloading...";

  btn.style.opacity = 0.5;
  btn.style.pointerEvents = "none";

  let num = Math.floor(Math.random() * 100);

  let downloadTime = setInterval(() => {
    grow++;
    downloading.innerHTML = grow + "%";
    innerdownloading.style.width = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(downloadTime);
    h2.innerHTML = "Downloaded";
    console.log("Downloaded in", (num * 100) / 1000, "seconds");
  }, num * 100);
});
