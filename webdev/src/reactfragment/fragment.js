import React from 'react';

/* React Fragments, also known as the <>...</> syntax or the React.Fragment component, 
provide a way to group multiple React elements without adding an additional node to the HTML output.
The main purpose of React Fragments is to solve the problem of returning multiple elements in a React component's render method. 
In React, when you want to return multiple elements from a component, you typically need to wrap them in a single parent element. 
However, sometimes adding an extra wrapping element can interfere with the desired layout or styling or can result in invalid HTML structure.
React Fragments allow you to return multiple elements without introducing an extra wrapper element. 
You can use the <>...</> syntax or the <React.Fragment>...</React.Fragment> syntax to enclose multiple elements as siblings within a single fragment. 
Fragments serve as an invisible wrapper and do not render any extra HTML tags or elements to the output. */

const Fragments = () => {
  return (
    <>
      <h2>Hello guys</h2>
      <h3>React Fragments are useful! for wrap up the element without using the parent element</h3>
    </>
  );
};

export default Fragments;
