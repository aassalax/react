import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../features/users.js";
import spinner from './spinner.svg'

export default function Users(){

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(users);

    let content;

    if(!users.data && !users.loading && !users.errors){
        dispatch(getData())
    }
    else {
        if (users.loading) content = <img src={spinner} alt="chargement..."/>
        else if (users.error) content = <p className="text-red-300">Une erreur est survenue</p>
        else if (users.data) content = (
            <ul>
                {users.data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        )
    }

    return (
        <>
            <h1>Users list :</h1>
            {content}
        </>
    )
}