1. Variable declarations are scanned and are made undefined
2. Function declarations are scanned and are made available
3. In JS, before the code is executed, the variables get initialized to undefined.
4. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
5. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. 
6. Therefore it is possible to call a function before initializing it.
7. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
8. Variable declarations are scanned and are made undefined
9. Function declarations are scanned and are made available