import {useEffect, useState} from "react";

export default function useCallAPI(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [catData, setCatData] = useState();

    const apiUrl = "https://api.thecatapi.com/v1/images/search"

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                console.log(response);
                if(!response.ok) throw new Error()
                return response.json()
            })
            .then(data => {
                console.log(data);
                setCatData(data)
                setLoading(false)
            })
            .catch(e => {
                console.log(e);
                setError(true)
            })
    }, []);

    return {catData, error, loading}

}