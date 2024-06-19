// Creating a Promise
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
console.log(promise);
promise.then(function (orderId) {
  console.log(orderId);
  return orderId;
  //proceedToPayment(orderId);
})
.then(function() {
   return proceedToPayment(orderId);

})
.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
});

//Producing a Promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // resolve and reject are the functions given by the JS
    //create order
    //validate cart
    //order id
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment() {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCart() {
  return true;
}

//All the browser errors should be handled
// When we push errored code to production, user will never be able to see the error.