import React from 'react';
import Statistics from './Satistics/Statistics';
import styles from './Section2.module.scss';

function Section2() {
    return (
        <div className={styles.section2}>
            <div className={styles.container}>
                <Statistics text='تعداد کاربران درمانیتو' />
                <Statistics text='تعداد داروخانه و مراکز' />
                <Statistics text='تعداد داروخانه و مراکز' />
            </div>
            
        </div>
    )
}

export default Section2
