import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    const [resource, setResource] = useState("posts");

    console.log("render every time when the state changes");

/* The useEffect hook is a powerful feature in React that allows you to perform side effects in functional components. 
Side effects include data fetching, subscriptions, or manually changing the DOM.
The useEffect hook takes two parameters: a callback function and an optional array of dependencies. 
The callback function is executed after the component renders and re-renders, and it can perform various side effects. 
The dependencies array is used to specify the values that the effect depends on. If any of the dependencies change, the effect will be re-executed.
*/


// useEffect perform all the lifecycle method such willmount , willupdate , willunmount

  //  useEffect(()=>{
  //      console.log("render only the dependies change");
  //  },[])

    // [] empty dependicies will run only one time for initial mounting 
    // with out dependicies array run everytime when the state changes 
    // [resource] with value re render that particular state is changed

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(json => console.log(json))

        return () => alert("hey this is executed when the component is unmount")
    },
    [resource])

    return (
        <div>
            <button onClick={ () => setResource('posts')}>posts</button>
            <button onClick={ () => setResource('users')}>users</button>
            <button onClick={ () => setResource('comments')}>comments</button>
            <h1>{resource}</h1>
        </div>
    );
};

export default UseEffect;
