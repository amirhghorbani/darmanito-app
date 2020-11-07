import React from 'react'
import styles from '../Sec1.module.scss'
import Sec1Buttons from './Sec1-buttons/Sec1Buttons'

function Sec1Content() {
    return (
        <div className={styles.content}>
            <h2>اپلیکیشن درمانیتو</h2>
            <p>سوپر اپلیکیشن حوزه درمان و سلامت</p>
            <Sec1Buttons />
        </div>
    )
}

export default Sec1Content
