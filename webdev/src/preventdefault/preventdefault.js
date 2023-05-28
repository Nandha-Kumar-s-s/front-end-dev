import React from 'react';

const MyLink = () => {
  const handleClick = (event) => {
    //preventDefault() is used to prevent the default behaviour here you can see using a anchor tag 
    event.preventDefault(); // Prevents the default link navigation
    console.log('Link clicked, but default behavior prevented.');
  };

  return (
    <a href="https://www.google.com" onClick={handleClick}>
      Click Me
    </a>
  );
};

export default MyLink;
