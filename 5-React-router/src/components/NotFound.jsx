import {Link} from "react-router-dom";

export default function NotFound(){

    return(
        <div>
            <p className="text-4xl font-semibold text-center pt-10">
                Page not found !
            </p>
            <div className="text-center">
                {/*<a> works but trigger a page reloading on redirection*/}
                {/*<a href="/">Back to home page</a>*/}
                {/*Is recommended to use Link*/}
                <Link to="/">Back to Home page</Link>
            </div>
        </div>
    )
}