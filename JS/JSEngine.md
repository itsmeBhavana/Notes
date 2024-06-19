# JS Engine
- JS can run anywhere
- From smartphones to smart watches to light bulbs and robots.
- All of this is possible bacause of JS Runtime Environments.
- JS Runtime Environment is like a big container that has everything to run JS Code.
- It comprises of 
  - a JS Engine
  - A set of APIs to connect to the outer env
    - setTimeout
    - Console
    - localStorage
    - These APIs are implemented differently in different JSREs like browser and Node.js
  - Event loop
  - Callback queue
  - Microtask queue
- JS Engine is the heart of the JS Runtime env
- Browsers have JSRE
- Node.js has JSRE
- Let's say you need to run JS inside water cooler, all you need is JSRE

# Types of JS Engines
- Charka: Internet explorer, MS Edge
- Spider Monkey: Firefox
- JSCore: Safari
- V8: Chrome, Node.js, Deno

- we can create our own JS Engine
- For that, we need to follow the standards of ECMA Script.
- **ECMA Script is a governing body for JS language**

# What was the first JS Engine that was built?
- It was built by the creater of JS itself, Brendon Eich
- He created JS and also JS Engine when he was working at Netscape.
- The Engine was evolved a lot and now it is called Spider Monkey which is used in Firefox.

# JSEngine Architechture
- JS Engine is not a machine.
- JS Engine takes code as the input.
- This code goes through three major steps:
  - Parsing
    - Code which we write is broken down into Tokens. 
    - Eg: Tokens generated fro let a=7; are let, a, =, 7
    - And there exists someting called Syntax Tree. It take the code and converts it to AST, Abstract Syntax tree.
    - astexplorer.net
    - AST is then forwarded to compilation stage.
  - Compilation
  - Execution
    - Compilation and Execution go hand in hand.
    - After Parsing, AST goes to the Interpretor which converts High Level Code to Byte Code and Code moves to the execution step.
    - While it is doing so, it takes the help of the compiler to optimize the code.
    - While the interprettor executes the code, the compiler  also tries to compile the code as much as it can.
    - Not just one phase process. But can happen in multiple phases.
    - The job of the compiler is to optimize the code as much as it can on the runtime.
    - In some JS Engines there is something called AOT, Ahead of Time Compilation.
    - In this case, the compiler takes the code and compiles as much as it can and sends the Byte Code to the Execution phase.
    - Execution is not possible without two major components, Memory Heap and Call Stack.
    - Memory Heap is a place where all the memory is stored. It is constantly in sync with Call Stack, GC and a lot of other things. It is place where all the variables and functions are assigned memory.

# Interpretter
- Executes the code line by line in the order.
- Interpreter is fast.
- It does not wait for the code to be compiled and is executed line by line. 

# Compiler
- Whole code is compiled even before executing and forms a new code which is optimized version of the original code.
- The new code runs fast and has a lot of performance improvements.
- Compiler makes the code efficient.

# Is JS Interpreted language or Compiled language?
- JS can behave like an intrepretted language aswell as a compiled language.
- When JS was initially created by Brendon Eich, the JS Engine that he created uses an interpretor to execute the code.
- It majorly run on browsers and browsers cannot wait for the code to be compiled before running or executing everything.
- So back tehn, JS was interpreted language.
- But in today's world most of the browsers and most of the JS Engines use Interpretor + Compiler.
- So, it depends on JS Engine whether it is purely interpreted or JIT Compiled.
  
# Garbage Collector
- It tries to clear up the space in Memory Heap whenever possible.
- Eg., whenever some function is not being used or we cleat the timeout.
- So basically, it collects the Garbage and sweeps it.
- There is something called **Mark and Sweep Algorithm**.
- And Compiler uses various optimization techniches while compiling the code.
  - Inling
  - Copy Elision
  - Inline Caching

# Fastest JS Engine
- Goggle's V8
- It's interpretor is called Ignition.
- Turbofan is called Optimizing Compiler.
- Both the Ignition Interpretor and TurboFan Compiler make your code run very fast.
- It also has a Garbage Collector called Orinoco which uses Mark and Sweep Algorithm.
- They also have a Garbage Collector called Oil pan which is used for other purposes.