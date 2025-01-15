/*
1- Toujours executer les hooks au plus haut niveau de la fonction.
Ne pas coder d'appelle de hooks dans des conditions, des boucles etc...

2- Toujours executer les hooks dans un composant ou un hook personnalisé
Afin de garder la logique dans un environnement React.
*/

//1er rendu
//[0,1,2]
//s1 s2 s3

//2eme rendu
//[1,1,2]
//s1 s3
//s3 prend la valeur du second state

//set<monState> peut etre appellé de n'importe ou en revanche
//La règle ne concerne que la déclaration useState()

import {useState} from "react";

export default function Container() {

    const [s1, sets1] = useState(0);
    console.log("s1 : ",s1);
    if (s1 < 1) {
        const [s2, sets2] = useState(1);
        console.log("s2 : ",s2);
    }
    const [s3, sets3] = useState(2);
    console.log("s3 : ",s3);
    //3Executions de useState()

    return (
        <>
            <h1>La règle des hooks</h1>
            <button onClick={() => sets1(1)}>Change s1 state</button>
        </>
    )
}