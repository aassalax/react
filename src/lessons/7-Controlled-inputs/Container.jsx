import {useState} from "react";

export default function Container(){

    const [state, setState] = useState("")

    function handleInput(e){
        setState(e.target.value)
    }

    return (
        <>
            <h2>Controlled input : (using state)</h2>
            <label htmlFor="pseudo">Votre pseudo :</label>
            <input type="text" value={state} onChange={handleInput}/>
            {!state && <p>Veuillez completer votre pseudo</p>}
            <p>Votre pseudo : {state}</p>
        </>
    )
}