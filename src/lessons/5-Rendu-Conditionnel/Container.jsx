export default function Container(){

    const isLogged = false
    let content

    if(isLogged) content = "Vous etes connecté"
    else content = "Vous n'êtes pas connecté"

    return(
        <>
            <h2>Rendu conditionnel :</h2>
            <p>{content}</p>
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
