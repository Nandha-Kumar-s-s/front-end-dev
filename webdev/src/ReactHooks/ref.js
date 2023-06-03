import React, { useRef } from 'react';

/* In React, a ref is a way to gain direct access to a DOM element or a React component instance created by a component. 
It allows you to interact with the underlying DOM or component directly, bypassing the usual data flow in React.
Refs are primarily used when you need to perform imperative actions, such as accessing the value of an input field, triggering animations,
focusing an element, or integrating with third-party libraries that require direct DOM access. */

const UseRef = () => {
  const inputRef = useRef("hi there");

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  const getInput = () => {
    console.log(inputRef.current.value); // Access input value
  };

  return (
    <div>
      <h3>useRef is used</h3>
      <p>Initial Value: {inputRef.current}</p>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
      <button onClick={getInput}>Get Input Value</button>
    </div>
  );
};

export default UseRef;
