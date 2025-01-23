import {Link} from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="p-2 text-center bg-slate-300">
            <Link to="/" className="mx-2 text-md font-semibold">Home</Link>
            <Link
                to="/contact"
                className="mx-2 text-md font-semibold"
                state={{txt:"State"}}
            >Contact</Link>
        </nav>
    )
}