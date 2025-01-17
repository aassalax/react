import {useRef} from "react";

export default function Container(){

    const inputsRef = useRef([])

    function addInputsRef(el){
        //console.log(el)
        if(el && !inputsRef.current.includes(el)){
            inputsRef.current.push(el)
        }
        console.log(inputsRef);
    }

    return(
        <div>
            <h1>Selectionner un tableau d'élèments</h1>
            <input ref={addInputsRef} type="text"/>
            <input ref={addInputsRef} type="text"/>
            <input ref={addInputsRef} type="text"/>
        </div>
    )
}