import React from 'react'

import styles from '../../Sec3.module.scss'

function ProgressStep( { title, text } ) {
    return (
        <div className={styles.progress_step}>
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    )
}

export default ProgressStep
