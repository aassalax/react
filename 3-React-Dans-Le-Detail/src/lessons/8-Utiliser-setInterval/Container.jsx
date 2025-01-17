import {useEffect, useState} from "react";

export default function Container(){

    const [count, setCount] = useState(0)

    useEffect(() => {

        //setInterval renvoit un ID qui peut etre clear
        const intervalID = setInterval(() => {
            //setCount(count+1)
            // Ne fonctionne pas car problème de closure JS
            // const count = 0 lors du mount et setInterval et executer qu'une fois
            // car le tableau des dependances de useEffect est empty
            //------------------------------------------------------
            // Pour incrementer count avec set count il faut
            // donner une fontion a la fonction useCount()
            // Afin d'utiliser toujours le state le plus récent
            setCount(state => state + 1)
        }, 1000)

        return () => clearInterval(intervalID)
    }, []);
    return(
        <>
            <h1>Utiliser setInterval</h1>
            <p>Valeur du count : {count}</p>
        </>
    )
}