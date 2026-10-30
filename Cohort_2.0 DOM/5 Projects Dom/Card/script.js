let btn = document.querySelector(".btn-container button");
let h5 = document.querySelector("h5");

let num = 0;

btn.addEventListener("click", () => {
  //   if (btn.innerHTML === "Add Friend") {
  //     btn.innerHTML = "UnFriend";
  //     btn.style.backgroundColor = "red";
  //   } else {
  //     btn.innerHTML = "Add Friend";
  //     btn.style.backgroundColor = "seagreen";
  //   }

  if (num === 0) {
    btn.innerHTML = "UnFriend";
    btn.style.backgroundColor = "red";
    h5.innerHTML = "Friends";
    h5.style.color = "seagreen";
    // Birthday celebration 🎉
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 40,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    });
    num++;
  } else {
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "seagreen";
    h5.innerHTML = "Stranger";
    h5.style.color = "Red";
    num--;
  }
});
