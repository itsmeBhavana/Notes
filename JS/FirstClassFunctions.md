# Function Statement aka Function Declaration
function a() {
    console.log("a called");
}

# Function Expression
var b = function() {
    console.log(b);
}

**The main difference between Function Statement and Function expression is hoisting**
- when a() and b() are called before declaring, it results in "a called. Uncaught error: b is not a function"

# Anonymous Function
function() {

}
- function with no name
- According to ECMAScript specification, a function should always have a name.
- So, Anonymous functions are used where functions are used as values.
var b = function() {
    console.log(b);
}
# Named Function Expression
var b = function xyz() {
    console.log("b called");
}
xyz() results in an error.

# Difference between Parameters and Functions
var b = function (param1, param2){

}

b(arg1, arg2);

# First Class Functions | First Class Citizens
- The ability to use functions as values &
- can be passed inside as an argument as another function &
- can be returned from the functions is called First Class Functions.
var b = function(param1) {
    return function xyz() {

    }
}
console.log(b());
O/P: function xyz() {

}

# Arrow functions
- let, const and Arrow functions are introduced in ES6, 2015