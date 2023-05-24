# front-end-dev
 it's for learning purpose on daily basics

## what is JSX?

jsx stands for javascriptXML.it is an extension to js syntax that allows you to write HTML code within js
it is mostly used in react 
the purpose of jsx is to provide a more concise way to define the struct and appearance of ui.instead of manually creating and manipulating DOM ele using js ,jsx allows you to describe the desired ui hierachy using html syntax
eg react.createElement('div' ,"hi")

## How react work under the hood?

react maintain a tree aslike html. the html has the dom is like a node
we can modify each node then it reflect in screen by using react its create a virtual dom it does not affect the screen cause it take a snapshot of virtual dom and then it compare with the actual dom the only updated content will reflect 

## what is package.json ?

it is a file used in node.js projects to specify various details about the project ,dependencies, and metadata

### project info

info about the name,version,description,author,license

### dependencies

it includes a section where you define the external libraries and modules the modules such are the node mod

### scripts

is used for start the app
test the app
build the app

### config

for additional config 

## package-lock.json?

it serves as a record of the exact versions of all the dependencies install in a project.this file is automatically created and updated whenever you run the npm i 
### dependency version locking 

the primary purpose its locks down the exact version of installed package,including their sub dep.this guarantees that everyone working on the project uses the same versions of the dep 
### rebuild

rebuild the same exact version in future

## why so many modules under the node modules?

cause each modules have its own dependencies and each dep will have a chid dep it create a dep tree for runing the react app smoothly without error that's why we seen so many mod in node mod folder

## react app runs?

### app setup
the first step is setting up the development by installing the dep
### component rendering
in react the ui is built using comp.comp are in a tree like struct where each comp can contain the child comp.
### entry point 
index.js this file serves as the starting point of the app and is res for rendering the top lvl comp into dom.
when the app is loaded the entry point calls the reactdom.render()
fun passing the top lvl comp and target dom element where the app should be rendered

## key folder and files created by react app?
### src/ folder for your app code
index.js is for rendering the root comp and mount it into the dom
app.js these files contains comp
index.css is for styling purpose
### public/
index.html is the main file loaded by browser
### node modules/
this folder is created by npm depends on dependencies
### package.json 
holds the metadata and dependencies
## npm install?
run npm i it triggers a series of steps to install the project dependencies specified in the package.json file
1.read package json file to determine the dependencies
2.resolve dependency tree
3.fetch package from npm registry
4.extract the fetched package and install it in node-modules folder
