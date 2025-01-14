import {useState} from "react";
import Card from "./Card";

export default function Container(){
    const [title, setTitle] = useState("Les props :");

    return (
        <>
            <p>{title}</p>
            <Card id={42} changeTitle={setTitle}/>
        </>
    )
}