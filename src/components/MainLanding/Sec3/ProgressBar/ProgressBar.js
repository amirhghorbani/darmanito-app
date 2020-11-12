import React from 'react'
import DirectSign from '../../../assets/images/Component 12 – 1.png'
import CheckSign from '../../../assets/images/check-mark.png'

import styles from '../../Sec3/Sec3.module.scss';

function ProgressBar() {
    return (
        <div className={styles.progress_bar}>
             <img src={DirectSign} alt='icon' />
             <div className={styles.v__line}></div>
             <img src={DirectSign} alt='icon' />
             <div className={styles.v__line}></div>
             <img src={CheckSign} alt='icon' />
        </div>
    )
}

export default ProgressBar
