import {useSelector} from "react-redux";

export default function Counter(){

    const counter = useSelector(state => state.counter)

    return(
        <div className="text-slate-100 text-3xl">Counter value: {counter.value}</div>
    )
}