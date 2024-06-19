# Promise object has 2 things.
- PromiseState - Pending/Fulfilled/Rejected 
  - This brings a lot of trust in the transaction.
- PromiseResult - undefined/...
# Promise object is immutable.
- We cannot modify the promise object making it trustworthy.
  
# Definition of a Promise
- A Promise is an object representing the eventual completion or failure of an asynchronous operation.
- Placeholder for a certain period of time until we receive value from an asynchronous operatiom.
- A container for a future value. Future value - value that it will have in the future once the promise is resolved.
  
# Promise Chaining
- We handle this type of situations using Promise Chaining
  app.createOrder(cart, function() {
    app.proceedToPayment(function(){
        app.showOrderSummary( function() {
            app.updateToWallet();
        })
    })
})