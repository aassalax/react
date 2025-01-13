import {useRef, useState} from "react";

export default function Container(){

    const [state, setState] = useState("")

    function handleInput(e){
        setState(e.target.value)
    }

    const emailRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log(emailRef.current.value)
    }
    return (
        <>
            <h2>Controlled input : (using state)</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pseudo">Votre pseudo :</label>
                <input type="text" id="pseudo" value={state} onChange={handleInput}/>
                {!state && <p>Veuillez completer votre pseudo</p>}
                <p>Votre pseudo : {state}</p>

                <label htmlFor="email">Votre Email :</label>
                <input type="email" id="email" ref={emailRef}/>

                <button>Envoyer</button>
            </form>
        </>
    )
}