import React from 'react'
import styles from './spoiler.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Spoiler( {type, title, children}) {

    let application = "https://docs.google.com/forms/d/e/1FAIpQLScHv1a3RnDwjKsOldkD9GakO-5dSSqNM5nqAXbgVJSgmiCHDQ/viewform?usp=sf_link";
    const [active, show] = React.useState(false);
    function toggle(){
        show(!active);
    }

    return (
        <div className={`${styles.spoiler} ${application ? "" : styles.disabled}`}>
            <button onClick={toggle}>{ title }</button>
            <p style={{display: active?"block":"none"}}>{ children }</p>
            <a href={application} target="_blank" style={{display: active?"block":"none"}} className={utilStyles.textbutton}>{application ? "Apply" : "Application Coming Soon"}</a>
        </div>
    )
}