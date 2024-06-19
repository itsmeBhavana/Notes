# Block
- Grouping up multiple statements where JS expects multiple statements.
- Code inside curly bracket is called block.

# Scope
- Scope of a var or a function is a place where these are accessible.

# Block Scope
- What all var and functions we can access inside the block.
- let and const are block scoped.
- var is global scoped.
- Block values are stored in seperate memory then global.
- They are stored in block.

# Shadowing
- Providing same name to the variable as of those variable present in the outer scope.
## var
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
Console: 10
20
30
10
Block: 20, 30
Global: 10

## let and const
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
Console: 10
20
30
10
100
Script: 100
Block: 20, 30
Global: 10


# Illegal Shadowing
- We can shadow let using let and const using const.
- But, we cannot shadow let using a var. It is called Illegal Shadowing.
Eg: let a=10
{
    var a=100;
    console.log(a);
}
## But, the below example is not Illegal Shadowing
let a=10;
function x() {
    var a=100;
    console.log(a);
}