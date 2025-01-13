import './Container.css'
import log from "eslint-plugin-react/lib/util/log.js";

export default function Container(){

    function handleClick(){
        console.log("click!")
    }

    function handleClickWithParam(param){
        console.log("param : ", param)
    }

    function handleClickWithEventObject(e){
        console.log('event : ',e)
    }

    return(
        <>
            {/*Avec fonction anonyme : OK pour une ligne de code*/}
            <button onClick={() => console.log("click")}>Click me</button>

            {/*On préfère utilisé une fonction séparée*/}
            <button onClick={handleClick}>Click me</button>

            {/*Si on veux passer une argument
            il faut obligatoirement passé par une fonction anonyme*/}
            <button onClick={() => handleClickWithParam(42)}>Click me</button>

            {/*Si on veux passer l'objet d'évenement*/}
            <button onClick={handleClickWithEventObject}>Click me</button>
            <button onClick={e => handleClickWithEventObject(e)}>Click me</button>
        </>
    )
}