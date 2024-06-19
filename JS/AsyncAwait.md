# Notes

- What is Async?
  - async is a keyword used to create async functions
  - It always returns a Promise

- Async and Await combo is used to handle promises.
- Await can only be used inside an async function.
- JS Engine was waiting for the promise to resolve which does not happen in the case of promiseObject.then()
- In the case of promiseObject.then(), callback function will be pushed into the callback queue and will be executed at the end and printed.

- It is not as easy as it sounds
- It is still true that JS waits for none. So, JS engine does not technically wait.
- So, when the execution is at await, it will check if the promise is resolved or not.
- If not, the async function temporarily suspends for x sec. (It moves out of call stack)
- After x sec, it comes back into the call stack and gets executed from where it left.

## fetch()
- fetch calls returns a Promise