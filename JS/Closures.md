# Closure
- Function along with its lexical scope forms a Closure.
  Eg: function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    y();
  }
  x();
- A Closure gives access to all the variables of its parent function even after the parent function is returned or executed.
- The function keeps a refernece to the outer scope which preserves the scope chain throughout the time.
  Eg: function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    return y;
  }
  var z=x();
  console.log(z);
  //......
  z();