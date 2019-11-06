const myButton = document.querySelector("#button")
myButton.addEventListener('click', clickButton)

function clickButton() {
  console.log("clicked!");
}

const myBody = document.querySelector('body');

console.log(myBody.style)
const myOtherButton = document.querySelector("#button")
myOtherButton.addEventListener('click', changeColors)

var mode = 0;


function changeColors() {
  if (mode == 0) {
  console.log("colors changed");
  myBody.style.color = "aqua";
  myBody.style.backgroundColor = "black";
  mode = 1;
} else {
    myBody.style.color = "white";
  myBody.style.backgroundColor = "crimson";
  mode = 0;
}
}

