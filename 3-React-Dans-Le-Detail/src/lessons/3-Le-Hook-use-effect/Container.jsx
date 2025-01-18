import {useEffect, useState} from "react";

export default function Container(){

    const [count, setCount] = useState(0);

    /*useEffect(() => {
        console.log("After first creation and after each MAJ");
    });*/ //if no deps pass, effect will be trigger each time

    /*useEffect(() => {
        console.log("After first creation");
    }, []);*/ //if empty deps pass, effect will be trigger when mount

    useEffect(() => {
        console.log("After first creation & after each maj of count");
    }, [count]); //if deps pass, effect will be trigger on init and maj of deps

    //Lexique :
    // Render => exectution of a componant (l.3 see "function")
    // The first render of a component is call : the Mount
    // The nth render is often call re-render => MAJ the Virtual-DOM
    // Virtual DOM => Is manage by React
    // Commit => Step when passing from virtual DOM to (real) DOM
    // When commit step :
        // 1- Mount or Re-render (MAJ)
        // 2- Execution of useEffect
    // Unmount => Destruction of a component already present in the DOM

    console.log("MAJ count : ",count);

    return(
        <>
            <h1>Le hook useEffect</h1>
            <button onClick={() => setCount(count+1)}>+1</button>
        </>
    )
}