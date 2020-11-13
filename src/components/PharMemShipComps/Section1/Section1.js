import React from 'react'
import Sec5Input from '../../../containers/Sec5Input/Sec5Input'
import PharmBoxInfo from './PharmBoxInfo/PharmBoxInfo';
import PharmBoxInfoSm from './PharmBoxInfoSm/PharmBoxInfoSm';

import styles from './Section1.module.scss';

function Section1() {
    return (
        <div className={styles.section1}>
            <div className={styles.content}>
                <h3>شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h3>
                <p>
                با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید
                </p>
                    <Sec5Input />
            </div>
            
            <div className={styles.pharmInformation}>
                <PharmBoxInfo />
                <PharmBoxInfoSm />
                <PharmBoxInfoSm attribute='flex-end'/>
            </div>
        </div>
    )
}

export default Section1
