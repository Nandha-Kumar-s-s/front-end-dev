import React, { useReducer } from 'react';

const initial = {
    count: 0,
    count2:10
}

// in this example we are passing the initial state as object 

// Reducer function
const reducer = (state, action) => {
//using a switch statement for different operation
// the reducer func takes two parameter one is the current state and another one is action and return the newState depending on action 

  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.value };
    case 'DECREMENT':
      return {...state, count: state.count - action.value };
    case 'INCREMENT2':
      return {...state, count2: state.count2 + action.value };
    case 'DECREMENT2':
      return {...state, count2: state.count2 - action.value };
    case 'RESET':
      return initial;
    default:
      throw new Error('Invalid action');
  }
};

// Component using useReducer
const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initial);
// array destructing useReducer returns the current state is count and the dispatch reducer fuction 

// here dispatch is reducer func it passes the current state and the action as parameter 
// its seem like this reducer(state, action) it will automatically dispatch the current state

// in dispatch we are passing action as object
  const increment = () => {
    dispatch({ type: 'INCREMENT' , value: 1 });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' , value: 1 });
  };

  const increment2 = () => {
    dispatch({ type: 'INCREMENT2' , value: 5 });
  };

  const decrement2 = () => {
    dispatch({ type: 'DECREMENT2' , value: 5 });
  };


  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Count2: {state.count2}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment2}>Increment2</button>
      <button onClick={decrement2}>Decrement2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseReducer2;
