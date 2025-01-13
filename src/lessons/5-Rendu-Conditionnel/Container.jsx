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

}