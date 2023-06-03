import { useContext } from "react";
import { context } from "./useContext";

// we can access the data from the context provider by using the useContext hook and pass the arg as createContext name


const Decrement = ( ) =>{

// here we are accessing the {count, setcount} using useContext(context name)
    const {count, setCount} = useContext(context);
    
    const dec = () =>{
        setCount(count + 1);
    }


    return(
        <button onClick={dec}>-</button>
    );
}

export default Decrement;