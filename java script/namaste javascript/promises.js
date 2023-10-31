const cart = ["shoes", "pants", "kurtas"];
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
//   whatever we need to pass down the chain, we need to reutrn it from above (top of the chain)
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successfull");
  });
}

function validateCart(cart) {
  return true;
}
