import {useRef, useState} from "react";

export default function Container(){

    const [state, setState] = useState(0)
    const countRef = useRef(0)
    console.log(countRef)

    function incrementRef(){
        countRef.current++
        console.log(countRef)
    }

    return(
        <>
            <h2>Le hook useRef() :</h2>
            <p>La valeur du state : {state}</p>
            <p>La valeur de la ref : {countRef.current}</p>
            <button onClick={incrementRef}>Incrementer la ref</button>
            <button onClick={() => setState(state + 1)}>Incrementer le state</button>
        </>
    )
}