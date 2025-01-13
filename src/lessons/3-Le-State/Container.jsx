import {useState} from "react";

export default function Container() {

    const [count, setCount] = useState(0);
    console.log("count : ", count);

    function handleClick(){
        setCount(count + 1);
    }


    return(
        <>
            <h1>Le State</h1>
            <p>Count : {count}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}