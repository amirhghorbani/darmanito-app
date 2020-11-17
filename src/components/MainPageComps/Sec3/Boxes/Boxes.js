import React from 'react'
import Box from './Box/Box'
import PharmImg from '../../../../assets/images/pharmacy.svg'
import MarketImg from '../../../../assets/images/market.svg'
import StethoscopeImg from '../../../../assets/images/stethoscope.svg'

import styles from '../Sec3.module.scss'

function Boxes() {
    return (
        <div className={styles.boxes}>
            <Box className={styles.box} src={PharmImg} text='داروخانه' />
            <Box className={`${styles.box} ${styles.deactive}`} src={MarketImg} text='فروشگاه' />
            <Box className={`${styles.box} ${styles.deactive}`} src={StethoscopeImg} text='ویزیت آنلاین' />
            <Box className={`${styles.box} ${styles.deactive}`} src={StethoscopeImg} text='ویزیت آنلاین' />

        </div>
    )
}

export default Boxes
