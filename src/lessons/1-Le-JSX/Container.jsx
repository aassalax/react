import './Container.css'

export default function Container(){
    const txt = 'Hello world from container'
    function handleClick(){
        console.log("click!!")
    }

    return(
        <>
            <p>{txt}</p>
            <button onClick={handleClick}>Click me !</button>
        </>
    )
}

/*
* onClick={() => console.log("click!")}
* OKAY si juste une ligne
* sinon préféré la création d'une function
* */