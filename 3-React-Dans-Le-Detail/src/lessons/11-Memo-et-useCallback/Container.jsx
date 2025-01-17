import Card from "./Card.jsx";
import {useCallback, useState} from "react";

export default function Container(){

    // Utiliser useCalback et memo() pour les gros composant avec beaucoup de calcul

    const [count, setCount] = useState(0)

    // Ici custom log est une fonction
    // ce n'est pas un type premitif cela va etre considerer comme un parametre changeant a chaque re-render
    /*function customLog() {
        console.log('Bonjour')
    }*/
    //-------------EXAMPLE---------------
    /*let obj1, obj2, obj3, obj4;

    obj1 = {a:5}
    obj2 = {a:5}
    obj3 = 'test'
    obj4 = 'test'


    console.log("compare obj1 & obj2", obj1===obj2) // FALSE
    console.log("compare obj3 & obj4", obj3===obj4) // TRUE
    */
    //------------------------------------------

    //useCallback est comme memo() pour des fonction
    // fais reference a une fonction dans le cache
    // cette reference sera toujours la meme a chaque re-render
    const customLog = useCallback(()=> console.log("Hello"), [])


    return(
        <div>
            <Card txt={"test"} customLog={customLog}></Card>
            <button onClick={() => setCount(count+1)}>
                Incr
            </button>
        </div>
    )
}
