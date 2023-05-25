import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

//const Counter = ({initial}) => {
const Counter = (params) =>{

//params is inbuild react features which takes the what ever parameter is passed to the component
//object destructing which extracts the key which we want.....
const {initial} = params;

  // Declare a state variable using the useState hook
  //we can also write this as
  //const[count,setCount] = useState(params.initial); 
  //if we not extract the key by using object destructing
  
  const[count,setCount] = useState(initial);
  // The 'count' variable represents the current state value,
  // and 'setCount' is a function used to update the state value.

  // Event handler function to increment the count
  const increment = () =>{
    setCount(count + 1);
  }

  // Event handler function to decrement  the count
  const decrement = () =>{
    setCount(count - 1);
  }

  // Event handler function to reset the count
  const reset = () =>{
    setCount(initial);
  }

{/*The useEffect hook is used to manage side effects in functional components. 
Side effects are actions that occur outside of the component rendering, such as data fetching, subscriptions, or interacting with the DOM. 
The useEffect hook allows you to perform these side effects and handle their lifecycle within your components.

The useEffect hook takes two arguments: a callback function and an optional dependency array.

The callback function is the main body of the effect and contains the code that will be executed when the component renders or when the dependencies change.
It can contain asynchronous code, event listeners, or any other logic related to the side effect you want to perform.
*/}

  useEffect(()=>{
    // Side effect logic
    console.log('component is rendered');
  },[count])

//[count] is a dependencies array we are passing a count variable 
{/*The count are optional dependencies. They determine when the effect should be re-executed. 
If any of the dependencies change between renders, the effect will run again. 
If the dependency array is empty ([]), the effect will only run once, on the initial render. */}

  return (
    <div className="App">
{/* logical operator && render the single element or component */}
   {count % 2 === 0 && <h1>COUNTER: {count}</h1>}
{/* conditional rendering in reactjs we using ternary operator {condition ? (true):(false)} */}
   {count % 2 === 0 ?(<p>count is even</p>):<p>count is odd</p>}


{/*Whenever setCount is called, React re-renders the component, updating the displayed count */}

   <button onClick={increment}>+</button>
   <button onClick={decrement}>-</button>
   <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
