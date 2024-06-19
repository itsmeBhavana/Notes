# Let and Const
- Let and Const are hoisted differently in JS.
- Its memory is allocated at place different than which cannot be accessed before initialization.
- Temporal dead zone exists until a variable is declared and assigned a value.
- window.variable or this.variable will not give value of variable defined using let and const.

# var vs let vs const
- const is stricted than let. Always use const.
- let is stricter than var. Use let when you cant use const.
- const variable declaration and initialisation must be done on the same line. Otherwise it leads to syntax error.
- Initialising variables at the top is good idea, helps shrinks TDZ to zero.

# Three types of error
- referenceError - given ehen variable has no memory allocation
  - console.log(x);
    let a=10;
    var b=100;
  - console.log(a);
    let a=10;
- typeError - given ehen we change the type that is not supposed to be changed.
  - const a=100;
    a=1000;
- syntaxError - 
  - const a;