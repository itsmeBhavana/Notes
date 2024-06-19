 # Problems that we encounter due to Callbacks

 ## Callback Hell
   - When a function is passed in another function as an argument, it becomes a Callback function.
   - Callbacks come useful if you want to perform extra functionality to already existing function.
   - But when callback functions themselves start taking in other functions as callbacks, then the mess that you are left with is called callback hell.
   - Also called as Pyramid of Doom.
   - Callback hell leads to unreadable code. Hence unmaintainable code.
- 
  
 ## Inversion of Control
   - When we pass a function to other function as a callback, we are giving the called function the control of whether to even call it or not or to call it in the wrong context.
   - For example, a success callback is called when an error occurs inside a called function.
   - This type of giving up of control over our functions is called Inversion of Control.