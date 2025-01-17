import {memo} from "react";

export default memo(function Card({txt, customLog}){

    console.log("RENDER");

    //memo permet de ne pas re-render le component si c'est props ne sont pas modifié lors du rerender du parent

    customLog()

    return(
        <div>
            <p>Carte</p>
            <p>{txt}</p>
        </div>
    )
})