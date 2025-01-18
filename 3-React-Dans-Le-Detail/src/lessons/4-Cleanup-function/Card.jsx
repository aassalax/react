import './Card.css'
import {useEffect, useState} from "react";

export default function Card(){

    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("Effet");
        return () => console.log('cleanup function')
    });

    // Mount => effect
    // Re-render => cleanup-function + effect
    // UnMount => cleanup-function

    return(
        <div className='card'>
            <p>Voici la carte et son state : {state}</p>
            <button onClick={()=> setState(state+1)}> Increment </button>
        </div>
    )
}