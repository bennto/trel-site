import styles from './datetodate.module.scss'

export default function DateToDate({ from, to, isEnded }) {
    const [start_action, start_date] = splitDate(from);
    const [end_action, end_date] = splitDate(to);

    return (
        <>
        <div className={styles.container}>
            <div className={`${styles.end} ${isEnded ? styles.disabled : ""}`}>
                <h4>{start_action}</h4>
                <p>{start_date}</p>
            </div>
            <svg width="119" height="12" viewBox="0 0 119 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M118 5.99999L-1.36885e-06 5.99999M118 5.99999L112.989 1.00003M118 5.99999L112.989 10.9999" stroke="white"/>
            </svg>
            <div className={`${styles.end} ${isEnded ? styles.disabled : ""}`}>
                <h4>{end_action}</h4>
                <p>{end_date}</p>
            </div>
        </div>
        </>
    )
}

function splitDate(input) {
    const action = input.split(' ')
    const date = action.splice(-3, 3).join(' ');
    return [action.join(' '), date]
}