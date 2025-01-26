import {useSelector} from "react-redux";

export default function FruityCart(){

    const fruityCart = useSelector(state => state.fruitsCart)

    function getTotalPrice() {
        return fruityCart.cart.reduce((acc,item) => acc + item.price * item.quantity,0)
    }

    return(
        <div className="bg-slate-100 rounded">
            <p className="text-1xl border-b p-5 border-slate-400">Youir FruityCart</p>

            <ul>
                {fruityCart.cart.length === 0 && <p className="px-5 py2 text-xl font-semibold">Grab a fruit...</p>}
                {fruityCart.cart.map(item => (
                    <li key={item.id}
                        className="px-5 py-2 text-xl"
                    >
                        <span className="font-semibold mr-2">{item.quantity}</span>
                        <span>{item.name}</span>

                    </li>
                ))}
            </ul>

            <p className="text-xl p-5 border-t border-slate-400">Total price :<span className="font-semibold ml-2"> ${getTotalPrice()}</span></p>
        </div>
    )
}