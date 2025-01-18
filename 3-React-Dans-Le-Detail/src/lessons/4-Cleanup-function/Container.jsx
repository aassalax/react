import Card from "./Card.jsx";
import {useState} from "react";

export default function Container(){

    const [showCard, setShowCard] = useState(true)

    return(
        <>
            <h1>Cleanup function</h1>
            <button onClick={() => setShowCard(!showCard)}>Montrer/Cacher la carte</button>
            {showCard && <Card />}
        </>
    )
}