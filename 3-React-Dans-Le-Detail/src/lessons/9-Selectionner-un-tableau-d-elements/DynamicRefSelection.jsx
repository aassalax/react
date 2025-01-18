import {useRef, useState} from "react";
import {nanoid} from "nanoid";

export default function DynamicRefSelection() {

    const [fruits, setFruits] = useState([
        {id: nanoid(8), value: 'Fraise'},
        {id: nanoid(8), value: '🙃'},
        {id: nanoid(8), value: '🥭'},
    ])

    function deleteFruit(fruitToDeleteId){
        setFruits(fruits
            .filter(fruit => fruit.id !== fruitToDeleteId)
        )
    }

    function addFruit(){
        setFruits([...fruits,{id:nanoid(8), value:'Tomato'}])
    }

    const fruitsRef = useRef([])

    function handleRefs(element){
        if(element) {
            fruitsRef.current.push(element)
        }
        else {
            fruitsRef.current.shift()
        }
        console.log(fruitsRef);
    }

    return (
        <div>
            <h1>Selectionner des elements dynamiques</h1>
            <ul>
                {fruits.map(fruit => (
                        <li
                            ref={handleRefs}
                            onClick={() => deleteFruit(fruit.id)}
                            key={fruit.id}>
                            {fruit.value}
                        </li>
                    )
                )}
            </ul>
            <button onClick={addFruit}>Ajouter une tomate</button>
        </div>
    )
}