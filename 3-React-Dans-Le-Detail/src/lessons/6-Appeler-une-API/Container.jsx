import {useEffect, useState} from "react";
import spinner from './spinner.svg'

export default function Container(){

    const [APIState, setAPIState] = useState({
        loading: false,
        error: false,
        data: undefined
    });

    useEffect(() => {
        setAPIState({...APIState, loading: true})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res);
                //catch only bad address and network issues if no throw error ourselves
                if(!res.ok) throw new Error(`Error : ${res.status}`)
                return res.json()
            })
            .then(data => {
                console.log(data);
                setAPIState({error: false, data: data, loading: false});
            })
            .catch((e) => {
                console.log(e.message)
                setAPIState({error: true, data: undefined, loading: false});
            })
    }, []);

    let content;
    if(APIState.loading) content = <img src={spinner} alt="icône de chargement"/>
    else if(APIState.error) content = <p>Une erreur est survenue...</p>
    else if(APIState.data?.length === 0) content = <p>Aucun résultat...</p>
    else if(APIState.data?.length > 0) {
        content = <ul>
            {APIState.data.map(item => (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.phone}</span>
                </li>
            ))}
        </ul>
    }

    return(
        <>
            <h1>Appeler une API</h1>
            {content}
        </>
    )
}