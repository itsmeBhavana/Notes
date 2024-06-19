# Why React?
- Everything React does can be done with HTML, CSS and JS. Then why React?
- The beauty of using any library or framework is that it makes developer experience very easy.
- It allows you to write less code and do more on a web page.
- React gives you super powers so that you build large scale production ready, performant applications.
- React makes your coding experience very fast and also optimizes somethings on webpage so that things happen very fast.

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
