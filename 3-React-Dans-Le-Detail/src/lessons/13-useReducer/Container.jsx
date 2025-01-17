import {useReducer} from "react";

export default function Container(){

    const [count, dispatch] = useReducer(reducer,0)

    function reducer(state, action){
        switch (action.type){
            case 'increment' :
                return state + action.payload
        }
    }

    return(
        <div>
            <h1>Valeur du compteur : {count}</h1>
            <button onClick={() => dispatch({type:'increment', payload: 5})}>Incrémenter</button>
        </div>
    )
}