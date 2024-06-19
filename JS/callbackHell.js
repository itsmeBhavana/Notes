// Callback Hell
const cart = ["shoes", "pants", "kurta"];

//Here, we have an API that creates an order. And then we have procceToPayments().
//Once the order is created, then only we can proceed to payment.
//There is dependency in between them. We can manage this dependency in our code using Callback functions.

app.createOrder(cart, function () {
  app.proceedToPayment();
});
// we have given this callback function, proceedToPayment() to createOrder api.
// Now, it is the responsibility of the createOrder api to create an order and call the function, proceedToPayments back.
// after the payment is successful, let's say we need to show our orderSummary page. we have showOrderSummary() for that.
//and that inturn should update to wallet.

app.createOrder(cart, function() {
    app.proceedToPayment(function(){
        app.showOrderSummary( function() {
            app.updateToWallet();
        })
    })
})


