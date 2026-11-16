let div = document.querySelector("div");
let sounds = {
  s: "./sound/A0.mp3",
  d: "./sound/A1.mp3",
  f: "./sound/A3.mp3",
  j: "./sound/C5.mp3",
  k: "./sound/Ds2.mp3",
  l: "./sound/Fs1.mp3",
};

document.querySelector("body").addEventListener("keydown", (e) => {
  div.innerText = e.key;

  if (sounds[e.key]) {
    new Audio(sounds[e.key]).play();
  }
});
