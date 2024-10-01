// EP-14 | Callback Functions in JS ft. Event Listeners 🔥

// What is a Callback Function in JavaScript
/*
// USE CASE 1:
function x(y) {}

x(function y() {});
*/

/*
// USE CASE 2:
setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
*/

// Deep about Event Listeners
/*
// USE CASE 3:
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked");
});
*/

/*
// USE CASE 4:
let count = 0;

document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked", ++count);
});
*/

// USE CASE 5:
/*
function attachEventListeners() {
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}

attachEventListeners();
*/
