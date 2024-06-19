- JS is a synchronous single threaded language.
- Browser has something called callstack
- Callstack can do only one thing at a time and is present in JS engine.
- All the code of JS is executed inside callstack.
- Whenever any JS program is running, a GEC is created.
- GEC is pushed inside the callstack.
1.  function a() {
    console.log("a");
    }

    a();
    console.log("End");
    - a() will be pushed inside call stack.
    - a will be printed in the console.
    - a() will be popped out of the stack.
    - End is printed onto the console.
    - GEC pops off the call stack.
- A call stack does not have a timer.
- Browser comprises of  
  - JS Engine
  - Local Storage
  - Timer
  - URL bar
  - bluetooth access
  - Geolocation access
  - also shows movie suggestions
- In the call stack, we need access to all the powers of browsers.
- We can access them using web APIs
  - setTimeout()
  - DOM APIs
  - fetch() gives access to external servers
  - localStorage()
  - console
  - loaction
- All the above are a part of browser.
- Browser gives access to all the features through web APIs using window object.
- All the web APIs are wrapped up inside the window object.
2. console.log("Start")
   setTimeout(function cb() {
    console.log("Callback");
   },5000)
   console.log("End");
   - Start is printed on the console.
   - A callback is registered in web APIs and starts a timer of 5000ms
   - End is printed on the console.
   - GEC is popped off the stack.
   - Once 5000ms is passed, we need cb function inside the call stack.
   - When the timer expires, the cb is placed in callback queue.
   - Event loop is like a Gate Keeper. It checks if something is present in the call back queue and sends it inside the call stack.
   - And the call stack immediately executes cb.
   - Callback will be logged inside the console.
3. console.log("Start");
   document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback");
   });
   console.log("End");
   - Start is printed on the console.
   - DOM API is called and fetches something from the sourec code.
   - A callback is registered inside the web APIs environment and click event is attached to it.
   - End is printed on the console.
   - GEC is popped off the stack.
   - cb() just sits in the web API env until we explicitly remove it or close the browser.
   - When the user clicks on the button, the cb() is placed in the callback queue and waits for its turn to get executed.
   - Event loop has just one job: It's job is to continuously monitor the callstack and callback queue. 
   - If the Event loop finds the call stack empty, it takes the cb from callback queue and pushes into the callstack.
   - And the callback method is quickly executed.
   - Why do we need a callback queue? When the user continuously clicks on the button, all the cb will be placed inside the callback queue waiting to be executed. Because there will be a lot of timers, event listeners etc inside the code, we need something called callback queue.
4. console.log("Start");
   setTimeout(function cbT(){
    console.log("CB SetTimeout");
   }, 5000);
   fetch("https://api.netflixx.com")
   .then(function cbF(){
    console.log("CB Netflix");
   });
   //10000000 lines of code.
   console.log("End");
   - GEC is pushed inside the callstack.
   - Start is printed on the console.
   - setTimeout will register the cbT() inside the web API env, and we have a timer of 5000ms started.
   - fetch makes a network call
   - It registers cbF() into the web APIs env.
   - Once the APIs are received by fetch, cbF is ready to execute.
   - cbF is pushed inside the microtask queue.
   - cbF has a higher priority.
   - CAllback queue is also called a Task queue.
   - cbT is pushed inside callback queue
   - Once the 1000000 lines of code are executed, end will be printed onto the console.
   - GEC will be popped off the stack.
   - Microtask queue has a higher priority than Callback queue.
   - cbF is pushed inside the call stack
   - CB Netflix is printed on the console and the cbF() will popped off the callstack.
   - cbT is pushed inside the call stack
   - CB SetTimeOut is printed on the console and cbT() will be popped off the callstack.
   - What can be placed inside the microTask queue?
     - All the callback functions that comes through the promises and Mutation observer.
     - Mutation Observer: continuously checks if there is a mutation in the DOM tree. If there is a mutation, it executes some callback function.
   - Tasks from the callback queue are only executed only once all the tasks from microtask queue are executed.
   - Startvation of task inside Callback queue: Let's say task inside microtask queue creates another task and so on, then task inside callback queue should wait for all the tasks inside microtask queue to get completed.