// EP-03 | Creating a Promise, Chaining & Error Handling

// USE CASE 1:
const cart = ["shoe", "pant", "kurta"];

const promise = createOrder(cart); // orderId

console.log(promise);

// Consumer
promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";

    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}
