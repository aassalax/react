import './Content.css'
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider.jsx";

export default function Content(){

    const {darkMode} = useContext(ThemeContext)

    return(
        <div className="container">
            <h1>You are in {darkMode ? 'Dark' : 'Light'} mode</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet aperiam atque aut consectetur debitis delectus deserunt eaque earum eligendi exercitationem expedita harum inventore maxime molestias mollitia, nesciunt nihil nobis numquam omnis praesentium, quisquam ratione recusandae tempore voluptate voluptatibus. A aspernatur ex impedit nisi perspiciatis! Deleniti ex fugiat in iure nemo odit quas rerum, temporibus? Aperiam commodi distinctio, doloribus explicabo fuga illo magnam necessitatibus, quasi quos similique, unde vel. Animi atque eaque ex inventore nostrum optio. At, blanditiis commodi cupiditate debitis doloremque dolorum enim fugit impedit maxime minus nam porro quidem repellat repellendus, rerum sit tempora unde ut voluptatum.</p>
        </div>
    )
}