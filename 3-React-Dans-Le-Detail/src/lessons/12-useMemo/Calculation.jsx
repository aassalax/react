import {useMemo, useState} from "react";

export default function Calculation(){

    const [temperature, setTemperature] = useState(0)

    function celciusToFarenheit(degree){
        console.log("ce calcul pourrait etre vraiment plus couteux et serait execute a chaque rerender du composant ou de son parent");
        return degree * 1.8 + 32
    }

    const expensiveCalculation = useMemo(() => celciusToFarenheit(temperature),[temperature])

    return(
        <div>
            <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
            <h1>Valeur de {temperature} degres celcius en Farenheit : {expensiveCalculation}</h1>
        </div>
    )
}