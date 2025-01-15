import {useEffect, useState} from "react";

export default function Container(){

    const [count, setCount] = useState(0);

    /*useEffect(() => {
        console.log("After first creation and after each MAJ");
    });*/ //if no deps pass, effect will be trigger each time

    /*useEffect(() => {
        console.log("After first creation");
    }, []);*/ //if empty deps pass, effect will be trigger each time

    useEffect(() => {
        console.log("After first creation & after each maj of count");
    }, [count]); //if deps pass, effect will be trigger on init and maj of deps

    console.log("MAJ count : ",count);

    return(
        <>
            <h1>Le hook useEffect</h1>
            <button onClick={() => setCount(count+1)}>+1</button>
        </>
    )
}