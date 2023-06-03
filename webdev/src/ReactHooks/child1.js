import { useContext } from "react";
import { context } from "./useContext";

// we can access the data from the context provider by using the useContext hook and pass the arg as createContext name

const Increment = () => {
// here we are accessing the {count, setcount} using useContext(context name)
    const {count, setCount} = useContext(context);

    const incr = () => {
        setCount(count + 1);
    }

    return (
    
        <button onClick={incr}>+</button>

    );

}


export default Increment;

