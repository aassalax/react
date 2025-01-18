import {useState} from "react";

export default function Container() {

    const [withFragment, setWithFragment] = useState(true);

    function switchMode(){
        setWithFragment(!withFragment);
    }

    if (withFragment) {
        return (
            <>
                <p>Hello I am using fragment</p>
                <p>Inspect code into your browser to see the difference</p>
                <button onClick={switchMode}>Switch to Div</button>
            </>
        )
    }

    return (
        <div className='cela-alourdi-le-dom'>
            <p>Hello I am not using fragment</p>
            <p>Inspect code into your browser to see the difference</p>
            <button onClick={switchMode}>Switch to Fragment</button>
        </div>
    )
}