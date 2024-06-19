# Call
- Call, Apply and bind methods are used to borrow functions. This concept is known as function borrowing.
- We can borrow functions from other objcts and use it with the data of other objects.
- Each and every method in JS has access to special functions called call, apply and bind.
- In call, the first argument is going to be reference. In other words, what we "this" to be pointing to.
- Object.functionName.call(referenceOfObject);
- We can pass in any extra arguments that are required aswell.
- Object.functionName.call(referenceOfObject, arg1, arg2);

# Apply
- The only difference between call and apply method is the way the arguments are passed.
- The first argument will be reference and the rest of the arguments as array list.
- Object.functionName.apply(referenceOfObject, [arg1, arg2]);

# Bind
- This is similar to call.
- But, the difference is it returns a copy of the method that can be invoked later.
