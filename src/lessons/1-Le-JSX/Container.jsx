import './Container.css'

export default function Container(){
    const txt = 'Hello world from container'
    return(
        <>
            <p>{txt}</p>
            <button onClick={() => console.log("click!")}>Click me !</button>
        </>
    )
}