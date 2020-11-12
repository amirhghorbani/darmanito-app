import React from 'react'
import HealthDocImg from '../../../../assets/images/health-doc.svg'

import styles from '../Sec5.module.scss'

function Sec5Img() {
    return (
        <div className={styles.sec__5__img}>
            <img src={HealthDocImg} alt='doc' />
        </div>
    )
}

export default Sec5Img
