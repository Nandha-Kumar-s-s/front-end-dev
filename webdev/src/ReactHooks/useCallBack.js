import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

// useCallback() is similar to useMemo the only difference is it not return the value 
// useCallback() memorize te callback function whenever the dependencies changed the callback function triggered
  const increment = useCallback(() => {
    console.log("the callback function is executed only one's is not re render again");
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = () =>{
    setCount(prevCount => prevCount - 1);
  }

  console.log("every time render when the state change");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseCallback;
