import { useState } from "react";


const UseState = () =>{

    const initial = {
        count: 0
    }
// useState is used for state management in the react app
// whennever the state changes the react re render all the element 

    console.log("state changed so it is rendered");
    const [count , setCount] = useState(initial.count)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)

    }

    const reset = () =>{
        setCount(initial.count)
    }

    return(

        <>
        <h1>simple useState program</h1>
        <h2>count: {count} </h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        </>


    )
}


export default UseState;