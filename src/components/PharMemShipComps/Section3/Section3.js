import React from 'react'
import ContentBox from './ContentBox/ContentBox';
import HealthTwo from '../../../assets/images/health__two_color-img.svg';
import PhoneShop from '../../../assets/images/phoneShop-img.svg'

import styles from './Section3.module.scss';

function Section3() {
    return (
        <div className={styles.section3}>
            <h4>در درمانیتو چه خدمات ارائه خواهید داد؟</h4>
            <p>خدمت مورد نظر خود را برای ثبت نام انتخاب کنید</p>

            <div className={styles.content}>
                <ContentBox image={HealthTwo} title='داروخانه' />
                <ContentBox image={PhoneShop} title='فروشگاه آرایشی و بهداشتی' />
            </div>
            
        </div>
    )
}

export default Section3
