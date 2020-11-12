import React from 'react'

import styles from './Support.module.scss'

import HeadPhone from '../../../assets/images/support-icon.svg';

function Support() {
    return (
        <div className={styles.sec__7}>
            <div className={styles.content__7}>
                <div className={styles.sec__7__text}>
                    <p>پشتیبانی درمانیتو</p>
                    <p>پاسخگویی در روزهای کاری از ۹ صبح تا ۹ شب</p>
                </div>
                <div className={styles.sec__7__support}>
                    <img src={HeadPhone} alt='headphone' />
                    <p>پشتیبانی : ۳۴۲۱۴۴۲۳ - ۰۲۱</p>
                </div>
            </div>
        </div>
    )
}

export default Support
