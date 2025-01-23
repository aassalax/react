import './ToggleThemeButton.css'
import sun from '../../assets/react.svg'

export default function ToggleThemeButton(){


    return(
        <button className="toggle-theme-btn">
            <span>Go Dark</span>
            <img src={sun} alt="toggle icone"/>
        </button>
    )
}