// EP-01 | Callback Hell

/*
// USE CASE 1:
console.log("Namaste");

console.log("JavaScript");

console.log("Season 2");
*/

/*
// USE CASE 2:
console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Season 2");
*/

/*
// Callback hell example
// USE CASE 1:
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
*/

/*
// Inversion of control example
// USE CASE 1:
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});
*/
