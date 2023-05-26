# front-end-dev
 It's for learning purpose on daily basics

## What is JSX?

JSX stands for javascriptXML.It is an extension to JS syntax that allows you to write HTML code within JS
It is mostly used in react 
The purpose of JSX is to provide a more concise way to define the structure and appearance of UI.Instead of manually creating and manipulating DOM elements using JS ,JSX syntax allows you to describe the desired UI hierachy using HTML syntax
eg react.createElement('div' ,"hi")

## How react work under the hood?

React maintain a tree like HTML. The HTML has the DOM is like a node. 
We can modify each node then it reflect in screen by using react its create a virtual DOM it does not affect the screen cause it take a snapshot of virtual DOM and then it compare with the actual DOM the only updated content will reflect 

## What is package.json ?

It is a file used in node.js projects to specify various details about the project ,dependencies, and metadata

### Project info

Info about the name,version,description,author,license

### Dependencies

It includes a section where you define the external libraries and modules. the modules such are node modules

### Scripts

Is used for start the app
Test the app
Build the app

### Config

For additional config 

## package-lock.json?

It serves as a record of the exact versions of all the dependencies install in a project.this file is automatically created and updated whenever you run the npm i 

### Dependency version locking 

The primary purpose its locks down the exact version of installed package,including their sub dependencies.This guarantees that everyone working on the project uses the same versions of the dependencies 

### Rebuild

Rebuild the same exact version in future

## Why so many modules under the node modules?

Cause each modules have its own dependencies and each dependencies will have a chid dependencies it create a dependencies tree for runing the react app smoothly without error that's why we seen so many modules in node modules folder

## React app runs?

### app setup
The first step is setting up the development by installing the dep
### Component rendering
In react the UI is built using component.component are in a tree like structure where each component can contain the child component.
### entry point 
index.js this file serves as the starting point of the app and is response for rendering the top level component into DOM.
When the app is loaded the entry point calls the reactDom.render()
function passing the top level component and target DOM element where the app should be rendered

## Key folder and files created by react app?
### src/ folder for your app code
index.js is for rendering the root component and mount it into the DOM
app.js these files contains component
index.css is for styling purpose
### public/
index.html is the main file loaded by browser
### node modules/
This folder is created by npm depends on dependencies
### package.json 
Holds the metadata and dependencies
## npm install?
run npm i it triggers a series of steps to install the project dependencies specified in the package.json file
1.read package json file to determine the dependencies
2.resolve dependency tree
3.fetch package from npm registry
4.extract the fetched package and install it in node-modules folder
