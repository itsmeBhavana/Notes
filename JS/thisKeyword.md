# this in a global space
-  this represents global object.
-  global object is different for different environments.
  - global object in browsers is window. 
  - global object in node.js is global.
- console.log(this); outputs window object
  
# this in function scope
-  function x() {
-  console.log(this);
-  }
-  x{} also outputs window object.
-  **both the this are not the same**
  
# this behaves differntly in strict mode and non-strict mode.
- In the case of strict mode, the above codes return window object and undefined.
- In the case of non-strict mode, the above codes return window object and window object.
- If the value of this keyword is undefined or null, JS will replace the this keyword with global object only in **non-strict mode**

# What is the value of this keyword inside a function?
- The value of this keyword inside a function is null or undefined.
- But, the undefined is replaced by global object only when strict mode is not applied.(**this substitution** will take place);
- But, even in strict mode, it all depends on how the function is called.
- x() returns undefined.
- But, window.x() returns window object.

# this inside object method
## What is a Method?
- When we use a function inside an object, it is called a Method.
- const obj={
  a:10,
  x: function () {
    console.log(this);
  }// x is a method.
}
obj.x() returns obj object

const obj ={
    a:10,
    x: function() {
        console.log(this.a)
    }
}
obj.x() returns 10

# Call, apply, bind methods(sharing methods)
- the value of this can be modified using call, apply and bind methods.
## overriding the value of this keyword using call()
const student() = {
    name: "Akshay",
    printName: function() {
        console.log(this.name); 
    }
}
student.printName();

const student2() = {
    name: "Deepika"
}
**student.printName.call(student2);**
This line replaces the this value in printName method of student object with student2 object.

# value of this in the context of arrow function
- arrow functions do not have a this binding associated to it.
- The value of this keyword is the value of its enclosing lexical context.
  const obj = {
    a:10,
    x: () => {
      console.log(this);
    }
  }
  obj.x() prints window object.
  The obj is lexically present in the global space.
  lexical meaning: How is it written? How is the object lexically present inside the code.
  # value of this in the nested arrow function.
  const obj2 = {
    a:10,
    x: function() {
      const y = () => {
        console.log(this);
      }
      y();
    }
  }
  obj.x() prints obj2 object.

# this inside DOM elements => reference to HTML element.
<button onClick="alert(this.tagName)">Click Me</button>
- this prints alert with text BUTTON.