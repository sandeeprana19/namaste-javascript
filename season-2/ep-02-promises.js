// EP-02 | Promises

/*
// USE CASE 1:
// Before promise:
const cart = ["shoes", "pant", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

// After promise:
const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});
*/

/*
// USE CASE 2:
const GITHUB_API = "  https://api.github.com/users/sandeeprana19";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});
*/

/*
// USE CASE 3:
const cart = ["shoes", "pant", "kurta"];

// By using callback hell which is also known as pyramid of doom
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// By using promise with function declaration
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWalletBalance();
  });
*/

/*
// USE CASE 4:
const cart = ["shoes", "pant", "kurta"];

// By using callback hell which is also known as pyramid of doom
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// By using promise with arrow function
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then(() => updateWalletBalance());
*/
