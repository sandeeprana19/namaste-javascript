// EP-15 | Asynchronous JavaScript & EVENT LOOP from scratch 🔥
/*
// USE CASE 1:
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
*/

/*
// USE CASE 2:
console.log("Start");

document.getElementById("btn").addEventListener('click',function cb(){
  console.log("Callback")
})

console.log("End");
*/

/*
// USE CASE 3:
console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("http://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
*/
