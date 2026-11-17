// let allh1 = document.querySelectorAll("h1");

// allh1[0].innerHTML = "bye1";

// allh1.forEach(function (e) {
//   //   console.log(e.innerText);
// });

let allbtn = document.querySelectorAll(".elem button");

allbtn.forEach(function (e) {
  //   console.log(e.childNodes[3]);
  //   console.log(e.innerHTML);
  e.addEventListener("click", function () {
    if (e.innerHTML === "Add Friend") {
      e.innerHTML = "unFriend";
    } else {
      e.innerHTML = "Add Friend";
    }
  });
});
