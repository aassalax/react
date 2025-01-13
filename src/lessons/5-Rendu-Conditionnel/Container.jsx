import {useState} from "react";
import "./Container.css"

export default function Container(){

    const isLogged = true
    let content

    if(isLogged) content = "Vous etes connecté"
    else content = "Vous n'êtes pas connecté"

    const [validation, setValidation] = useState(false)

    return(
        <>
            <h2>Rendu conditionnel :</h2>
            <p>{content}</p>

            <form>
                <label htmlFor="consent">Acceptez-vous ?</label>
                <input
                    onClick={() => setValidation(!validation)}
                    type="checkbox"
                />
                <p
                    className={`${validation ? 'success' : 'danger'}`}
                    //style={{color: `${validation ? "lightgreen" : "red"}`}}
                >
                    {`${validation ? "Vous pouvez envoyer le form" : 
                        "Vous devez cocher la case"}`}
                </p>
                {validation ? <p>TRUE</p> : <p>FALSE</p>}
            </form>

            {validation && <button>Click me !</button>}
        </>
    )

}
/* METHODE 1
export default function Container(){

    const isLogged = false

    if(isLogged){
        return(
            <>
                <h2>Rendu conditionnel :</h2>
                <p>Vous etes connecté</p>
            </>
        )
    }
    else {
        return(
            <>
                <h2>Rendu conditionnel :</h2>
                <p>Vous n'êtes pas connecté</p>
            </>
        )
    }

}*/
