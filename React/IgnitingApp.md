# npm
- npm init will create a file called package.json
- package.json is a configuration file for npm
- npm manages packages|dependencies that we install in our system.
- npm takes care of version of the packages installed.


# Bundler is the most important package in React.
- Bundler bundles or packages our app properly so that it can be shipped to production.
- create-react-app behind the scenes uses WebPack bundler and babel transpiler.
- Examples of bundlers: Parcel, Webpack, Vite
  
- Installation: npm install -D parcel
- There are 2 types of dependencies when we install.
  - Dev dependency: used in development env
  - Normal Dependency: used in both dev and prod env
- we get package-lock.json
- we get node_modules.
**Blog Idea: What is the difference between dev dependency and Normal dependency**
**Blog Idea: Taking a few minutes in my life to appreciate the beauty of create-react-app**

**post Idea: ^ and ~ in package.json**

"devDependencies" : {
    "parcel": "^2.8.3" 
}
- ^(caret) automatically updates the parcel's version 
- ~(tilde) automatically upgrades to the major version

- package.json: keeps a track of what version of package is currently installed into our system | approx version
- package-lock.json: keeps track of exact version of dependency that is installed | accurate version
- It is very important to put package.json nd package-lock.json into git repositories.


"parcel": {
    "version": ...,
    "integrity": **conatins a hash**,
    ....
}
## It is working on my local. I dont know how it broke on production?
- To avoid that, package-lock.json keeps a hash to verify whatever is there on my dev machine is the same version that is being deployed onto production.

## node_modules - collection of dependencies
- code that is installed from npm 
- node_modules is like database and contains actual data or dependencies that our project needs.
  - Transitive dependencies:
    - Parcel needs other packages to function. Like babel. Babel is called transitive dependency. 
- Put /node_modules in .gitignore to avoid its addition to github. 
- Because, it we have package and package-lock, we can regenerate our node modules.
- Just click npm install.
- Whatever can be regenerated should not be put on git.

## npx parcel index.html
- npm is used to install a package
- npx is used to execute a package
- This command creates a server like localhost:1234 and hosts our app onto it.
- It is a bad idea to use React is cdn because it is costly due to network calls.
- It becomes way easier if we have react in our node modules and use it whenever needed.

## import
- import React from "react"
- "react" is coming from node_modules

## Parcel is a beast - React is not the only thing that is making the app fast
- Dev build
- Local Server
- HMR - Hot Module Replacement 
  - When you change something in the code and save it, parcel automatically updates the code in the browser. 
  - No page reload necessary.
  - Every time you hit the next save, build time will be reduced due to caching
- File Watching Algorithm - written in C++
- Caching - Faster builds
- Image optimization
- Minification 
- Bundling
- Compress
- uses other libraries to do all these ~ distributes work to all those libraries.
- **consistent hashing**
- code splitting
- Differential Bundling - support older browsers - differnt bundle for different type of older browsers
  - <script type="module"> parcel automatically generates nomodule fallback for older browsers.
- Diagnostic
- Error Handling
  - runs some diagnostics and gives better error handling 
  - UI will be displayed. But, errors will be shown in console.
- By default, server opens at HTTP. But, if something needs to be tested at HTTPS, parcel enables that too
- Tree Shaking
  - remove unused code
- Why is parcel fast? .parcel-cache
- Different dev and prod bundles - prod build takes slightly more time than dev build.
  
# build
- generates a dev build and puts it up in dist folder.
npx parcel build index.html
- takes more time for prod build - will be fast, performant and optimized 
- /dist, /.parcel-cache should be put in .gitignore

# How to make app compatible for older versions of the broser 
- we will use browsersList
- present in node_modules
- We have to tell in versions should the app be compatible
- in package.json
- we give array of browsers
- It will definitely work in specified browsers.
- It may or maynot work in browsers that are not specified.
- refer **browserslist** website - amazing website
- **Govt website should have 99% of overall website coverage**