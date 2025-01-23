import {Link, NavLink} from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="p-2 text-center bg-slate-300">
            <NavLink
                to="/"
                className={({isActive}) => `${isActive && "bg-amber-300"} mx-2 text-md font-semibold`}
            >Home</NavLink>
            <Link
                to="/contact"
                className="mx-2 text-md font-semibold"
                state={{txt:"State"}}
            >Contact</Link>
        </nav>
    )
}