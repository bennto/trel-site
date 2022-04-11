import React from 'react'
import styles from './spoiler.module.scss'
//import utilStyles from '../styles/utils.module.scss'

export default function Spoiler( {title, children}) {

    const [active, show] = React.useState(false);
    function toggle(){
        show(!active);
    }

    return (
        <div className={`${styles.spoiler}`}>
            <button onClick={toggle}>{ title }</button>
            <p style={{display: active?"block":"none"}}>{ children }</p>
            <div style={{ display: active?"block":"none", height: "10px" }}></div>
        </div>
    )
}