import styles from './infosession.module.scss'
import Link from 'next/link'

export default function InfoSession({ when, zoom, ended }) {
    const [day, time] = splitDate(when);

    return (
        <>
        <div className={styles.infosession}>
            {ended ? (
                <>
                    <div className={ $styles.dates, $styles.unavailable}>
                        <h4>{{day}}</h4>
                        <p>{{time}}</p>
                    </div>
                    <div className={styles.ended}>
                        session ended
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.dates}>
                        <h4>{{day}}</h4>
                        <p>{{time}}</p>
                    </div>
                    <div className={styles.zoomlink}>
                        <Link href={{zoom}}>
                            <a className={styles.externalLink}>open zoom</a>
                        </Link>
                    </div>
                </>
            )}
        </div>
        </>
    )
}

function splitDate(input) {
    const action = input.split(' ')
    const date = action.splice(-4, 4).join(' ');
    return [action.join(' '), date]
}