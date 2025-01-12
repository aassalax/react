export default function Card({id, changeTitle}){

    console.log("Props of Card component : ",id)

    function handleClick(){
        changeTitle("an updated title :)")
    }

    return(
        <>
            <div>Voici la carte : {id}</div>
            <button onClick={handleClick}>Update title</button>
        </>
    )
}