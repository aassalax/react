import useCallAPI from "./hooks/useCallAPI.js";
import spinner from "./spinner.svg";

export default function Container() {

    const {catData, error, loading} = useCallAPI()

    console.log(catData, error, loading);

    let content;
    if (loading & !error) content = <img src={spinner} alt="icône de chargement"/>
    else if(error) content = <p>Une erreur est survenue...</p>
    else if(catData) content = <img src={catData[0].url} alt="Image de chat"/>

    return (
        <>
            <h1>Créer un Hook personnalisée</h1>
            {content}
        </>
    )
}