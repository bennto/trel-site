import React from 'react'
import styles from './spoiler.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Spoiler( {type, title, children}) {

    let application = "";
    const [active, show] = React.useState(false);
    function toggle(){
        show(!active);
    }

    if (type == "engineering") { application = "https://forms.gle/c5hXnPrkDokGZNNcA"} 
    else if (type == "communications") { application = "https://forms.gle/kk7UeL3ZoE4pyYDd8"} 
    else if (type == "finance") { application = "https://forms.gle/GkA9vBhGShS2MU5L7" } 
    else if (type == "outreach") { application = "https://forms.gle/eARiAzQVNS9Mjr3m6" } 
    else { application = null }

    return (
        <div className={`${styles.spoiler} ${application ? "" : styles.disabled}`}>
            <button onClick={toggle}>{ title }</button>
            <p style={{display: active?"block":"none"}}>{ children }</p>
            <br />
            {/* <a href={application} target="_blank" style={{display: active?"block":"none"}} className={utilStyles.textbutton}>{application ? "Apply" : "Application Coming Soon"}</a> */}
        </div>
    )
}