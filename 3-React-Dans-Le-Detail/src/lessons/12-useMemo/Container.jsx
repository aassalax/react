import Calculation from "./Calculation.jsx";
import {useState} from "react";

export default function Container(){

    const [count, setCount] = useState(0)
    return(
        <>
            <h1>useMemo</h1>
            <button onClick={() => setCount(count+1)} > Incr</button>
            <Calculation/>
        </>
    )
}