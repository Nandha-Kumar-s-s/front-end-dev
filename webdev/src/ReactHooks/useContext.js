import { useState,createContext } from "react";
import Increment from "./child1";
import Decrement from "./child2";

/* In React.js, useContext is a hook that allows you to access the value of a context directly without the need for intermediate components. 
It is a part of the Context API, which provides a way to pass data through the component tree without manually passing props down at every level.
The useContext hook takes a context object as its argument and returns the current value of that context. 
It allows you to subscribe to a context within a functional component.
*/ 

// first we need to create a context for providing the data

export const context = createContext(null);

const UseContext = () => {
  const [count,setCount] = useState(0);


// <context.Provider will provide the data within the context.Provider . every child element within will access the data
  return(
    <context.Provider value={{count,setCount}}>

    <>
     
    <p>count: {count}</p>
    <Increment />
    <Decrement/>
    
    </>


    </context.Provider>
  ) ;
}

export default UseContext;