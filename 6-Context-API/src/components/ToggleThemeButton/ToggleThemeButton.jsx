import './ToggleThemeButton.css'
import sun from '../../assets/react.svg'
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider.jsx";

export default function ToggleThemeButton(){

    const {toggleTheme, darkMode} = useContext(ThemeContext)

    return(
        <button className="toggle-theme-btn" onClick={toggleTheme}>
            <span>Go {darkMode ? 'Light' : 'Dark'}</span>
            <img src={sun} alt="toggle icone"/>
        </button>
    )
}