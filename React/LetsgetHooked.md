# Why React?
- Everything React does can be done with HTML, CSS and JS. Then why React?
- The beauty of using any library or framework is that it makes developer experience very easy.
- It allows you to write less code and do more on a web page.
- React gives you super powers so that you build large scale production ready, performant applications.
- React makes your coding experience very fast and also optimizes somethings on webpage so that things happen very fast.
- React usually keeps data layer insync with the UI layer.

# Best Practices
- All the source code is put under src folder.
- Make a seperate file for every component inside components folder
- Avoid too much nesting
- Try to name the file same as the name of the component(It's just a developer lingo)
- Never ever keep any hard coded data in the component files.
- They keep the hardcoded data in either utils or config folder.
- Usually constants kept in the util folder are used across multiple components.

# Types of exports/imports
- There are two types of exports and imports
  - Default export/import
    - export default Component;
    - import Component from "path";
  - Named export/import
    - export const Component;
    - import {Component} from "path";  
- **Can we use Named export and default export together?**
# React Hooks
- A Normal JS function given by react
- Hook is basically a utlility function.
- Written by FB developers
- 2 very important React hooks
  - useState - super powerful variables
  - useEffect
- We import the hooks as named imports
- scope of state variable is its component.
  ## useState
  - Whenever the state variable updates, React re-renders the component.
# Why is React fast?
- Because it can do faster and efficient DOM Manipulations
- Diffing Algorithm
- Virtual DOM

# Diff Algorithm
- React uses Reconciliation algorithm(also known as React fibre).
- It can find out the differnce between VDOMs and update the UI.
- Diff algo finds the difference between updated VDOM and prev VDOM
- React Fibre has come up in React16 which is a new algo to update the DOM.
- Let's say a ResContainer has 7 Restaurants and when a button is clicked, it results in only 3 retaurants.
- Diff algorithm finds the difference between prev VDOM and updated VDOM and updates the DOM with only the difference.
- 

# VDOM
- VDOM is a representation of actual DOM.
- console.log(<Body />) prints the VDOM onto the console.
- It is basically a JS object.

# React Fibre
- It is an ongoing reimplementation of React's core algorithm.
- The goal of React fibre is ti increase its suitability for areas like animations, layout and gestures.
- Its headline is incremental rendering: The ability to split rendering work into chunks and spread it over multiple frames.
- 