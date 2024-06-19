- React Element at the end of the day is a JS Object.
- And when we do root.rendor, it takes the above JS object, converts to the HTML amd push it to the browser.
- HTML will be replaced with the coded changes.
- At first, React elements were created like this.
  - const heading = React.createElement(
    "h1",
    { id : "heading"},
    "Namaste React"
    );
- But the above code is not developer friendly
- So, developers at FB developed something called JSX.
- JSX is a convention to combine html and js. But, it not not combination of html and js.
- const jsxHeading = <h1 id="heading">Namste React using JSX</h1>
- Browsers do not understand the above jsx code. They only understand ECMAScript ES6.
- This code is transpiled before it reaches the JS Engine.
- Parcel gives the responsibility of transpiling the jsx to Babel.
- Babel is created by FB.
- jsx=>**transpiles it to** React.createElement=>React Element~js object=>HTML Element(render)
- Babel converts jsx to React Element.
- If you want to write jsx in multiple lines, then we need to wrap it in round brackets so that babel can understand the start and end of jsx.
- **JSX is NOT HTML inside JS.**
- **JSX is a HTML like or XML like syntax**
- jsxHeading is a React Element

# Who do we write code for. Developers or Machines?
- First from developers and then for machines

# React Components
- Everything is a component in React
- Should start with Capital letter.
  - Class based components - uses js classes
  - Functional components - uses js functions
  ## React Functional Compoenent
  - Normal JS function which returns some jsx. This jsx is React Element.
  - We can also say that RFC is a normal JS function that returns a React Element.
  - const fn = () => true;
  - const fn2 = () => {
    return true;
    }
  - Both fn and fn2 are same.
  - const fn3 = () => {
    return <p>namaste js</p>
    }
  - const fn4 = () => (<p>namste js</p>);
  - fn3 and fn4 are the same.
  ## Rendering the Functional components
  - root.render(<HeadingComponent />);
# jsx sanitizes the data that comes from API before giving to the babel.
- jsx skips the line of code if there is malicious data in that line of code.
- jsx makes the React code most readable.