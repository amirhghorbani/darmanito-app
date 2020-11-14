import React from 'react';
import styles from './Section1.module.scss';

import PharmIcon from '../../../assets/images/pharmacy.svg';
import ShopIcon from '../../../assets/images/market.svg';
import StethscopeIcon from '../../../assets/images/stethoscope.svg';

function Section1() {
    return (
        <div className={styles.section1}>
            <div className={styles.title}>
                <h5>سوال شما درباره کدوم سرویس هست؟</h5>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <img src={PharmIcon} alt='icon' />
                    <p>داروخانه</p>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <img src={ShopIcon} alt='icon' />
                    <p>داروخانه</p>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <img src={StethscopeIcon} alt='icon' />
                    <p>ویزیت آنلاین</p>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <img src={StethscopeIcon} alt='icon' />
                    <p>ویزیت آنلاین</p>
                </div>
            </div>

        </div>
    )
}

export default Section1
