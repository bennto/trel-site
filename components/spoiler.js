import React from 'react'
import styles from './spoiler.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Spoiler( {type, title, children}) {

    let application = "";
    const [active, show] = React.useState(false);
    function toggle(){
        show(!active);
    }

    return (
        <div className={styles.spoiler}>
            <button onClick={toggle}>{ title }</button>
            <p style={{display: active?"block":"none"}}>{ children }</p>
            {/* <a href={application} target="_blank" style={{display: active?"block":"none"}} className={utilStyles.textbutton}>{application ? "Apply" : "Application Closed"}</a> */}
        </div>
    )
}