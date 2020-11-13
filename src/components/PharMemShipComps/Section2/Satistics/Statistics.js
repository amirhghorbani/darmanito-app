import React from 'react'
import styles from '../Section2.module.scss'

function Statistics({text}) {
    return (
        <div className={styles.statistic}>
            <p>{text}</p>
            <p>120,000</p>
        </div>
    )
}

export default Statistics
