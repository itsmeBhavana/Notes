//Consuming Promises
const cart = ["shoes", "pants", "kurta"];

//Method1 - givivng callback to a function
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});
//This is not usually a goog practise to give the responsibility of the callback function to another function.

//Method2 - attaching a callback to promise object.
createOrder(cart); //createOrder api takes in cart and gives out orderId. This returns a Promise.
const promise = createOrder(cart);
//promise is a JS object will empty data {data: undefined} since at the time promise is returned it has no data and it takes
// time for execution. once, the execution is done, data fill be filled {data: ...};
// As soon as the data is filled, callback function is called.

// Promise Chaining
// We handle this type of situations using Promise Chaining
app.createOrder(cart, function () {
  app.proceedToPayment(function () {
    app.showOrderSummary(function () {
      app.updateToWallet();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    updateWalletBalance(paymentInfo);
  });
// when we attach a lot of then in a promise chain, we need to make sure that result is passed down in the promise chain
// ALWAYS REMEMBER TO RETURN THE RESULT
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
// this can also be written using Arrow functions
// We can avoid return if we are using arrow functions
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
