- Everything in JS happens in Execution Context
  
  ## Execution Context
  - Execution context is like a big box and it has 2 components in it.
    - Memory Component|Variable Environment: This is a place where all the variables and functions are stored as key-value pairs.
    - Code Component|Thread of Execution: This is the place where code is executed one line at a time. It is like a thread that is executed one line at a time.
  
## JS is a Synchronous Single Threaded language - It executes one line at a time in a specific order.
  - Single Threaded: JS can execute only one command at a time.
  - Synchronous: JS executes in a specific order.


# Call Stack
- All of this happens in a call stack.
- At the bottom of the call stack, we have GEC. Whenever a JS program is run, call stack is populated with GEC.
- And whenever the function is invoked, a new Execution context say E1 is created and pushed in the call stack. 
- Once we are done withe execution, E1 will be popped off and the control is returned back to GEC.
- After everything thing is executed, GEC is also popped off the stack.
- **Call stack maintains the order of execution of execution contexts.**
- Call stack is also known as
  - Execution context stack
  - Program stack
  - Control Stack
  - Runtime stack
  - Machine Stack