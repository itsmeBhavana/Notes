- scope is directly related to the lexical environment
- lexical environment is the local memory along with the lexical env of the parent.
- lexaical literally means in hierarchy or in sequence.


function a() {
    var b=10;
    c();
    function c() {
        console.log();
    }
}
a();
console.log(b);

- In the above code, function c is lexically inside function a()
- function a()'s lexical parent is Global Scope.
- Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
- The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
-  The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. 
-  If a variable is not found anywhere, then we say that the variable is not present in the scope chain.

