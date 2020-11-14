import React from 'react'
import styles from './PageHeader.module.scss';

function PageHeader({text}) {
    return (
        <div className={styles.container}>
            <p>{text}</p>
        </div>
    )
}

export default PageHeader
