import React, { useMemo,useState ,useEffect} from 'react';

const UseMemo = ({ a, b }) => {

  const [count, setCount] = useState(0);
  

  const increment = () =>{
    setCount(count + 1);
  }
  useEffect(()=>{
    console.log("every component is render whenever the state changes");
  })

// useMemo is used for memorize the true function and is mostly used for slow function 

  const memoizedValue = useMemo(() => {
    console.log('using useMemo hooks it should executed only when the dependencies change ');
    return a + b;
  }, [a, b]);
  
// here the initialItems array is slow function atleast it takes 3 sec to render 
// whenever the state change every element re render it causing performance error while handling with slow function 
// by handling this issue we using useMemo. note: it occupies memory it is only used for true function 
// useMemo also return the value
// useMemo render the function only when the dependencies changes

  const initialItems = new Array(29_99_999).fill(0).map((_,i) =>{
    return {
        id: i,
        isSelected: i === 29_99_998,
    }
  });
  const [items] = useState(initialItems);
  const selectedItem = items.find((item) => item.isSelected);
 /* const selectedItem = useMemo(() => {
    items.find((item) => item.isSelected)
    },
    [],
  )
*/

  
  return (
    <div>
      <p>count:{count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <p>selectedItem:{selectedItem?.id}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default UseMemo;
