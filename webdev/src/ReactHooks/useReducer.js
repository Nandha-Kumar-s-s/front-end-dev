import { useReducer } from "react";


//useReducer is a hook that is used for state management 
// it is an alternative to useState

//useReducer - reducers

//const array1 = [1,2,3,4];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
//console.log (array1.reduce(reducer))

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer,5));
// 5 is the inital value 

// useReducer(reducer , initialState)

// the reducer function  return the newState 
// newState = reducer(currentState , action)
// useReducer returns a pair of values . [newState ,dispatch]

const initialState = 0;

const reducer = (state, action) =>{
// the reducer func takes two parameter one is the current state and another one is action and return the newState depending on action 
    switch (action) {
        case 'increment':
            return state + 1;            
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const UseReducer = () =>{
   const [count , dispatch] = useReducer(reducer, initialState)
// array destructing useReducer returns the current state is count and the dispatch reducer fuction 

const inc = () =>{
    dispatch('increment') // here dispatch is reducer func it passes the current state and the action as parameter 
    // its seem like this reducer(state, action) it will automatically dispatch the current state
}

const dec = () =>{
    dispatch('decrement')
}

const reset = () =>{
    dispatch('reset')
}

    return(
        <>
        <p>count:{count} </p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>reset</button>
        
        </>

    );
}

export default UseReducer;