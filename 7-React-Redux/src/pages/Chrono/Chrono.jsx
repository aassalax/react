import {useDispatch, useSelector} from "react-redux";
import {reset, startChrono} from "../../features/chrono.js";

export default function Chrono(){

    const chrono = useSelector(state => state.chrono)
    const dispatch = useDispatch()

    return(
        <div>
            <p className="text-2xl text-slate-100 mb-2">Valeur du chrono : {chrono.value}</p>
            <button className="p-2 rounded bg-slate-100 min-w-[125px]" onClick={()=> dispatch(startChrono())}>Démarrer</button>
            <button className="p-2 rounded bg-slate-100 min-w-[125px] ml-3" onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}