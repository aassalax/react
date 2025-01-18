import './Container.css'
import styles from './Container.module.css'

export default function Container(){

    //Sous le capot, Vite & react vont creer un objet ici styles a partir de notre module CSS
    // Les propriété auront des hash afin d'éviter tout clash CSS dans l'app
    console.log(styles);

    return(
        <>
            {/*<h1 className="title">Les modules CSS</h1>*/}
            <h1 className={styles.title}>Les modules CSS</h1>
            <h2 className={styles.title}>Test</h2>
            <h2 className="title">Test</h2>
        </>
    )
}