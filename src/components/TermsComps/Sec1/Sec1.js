import React from 'react'
import styles from './Sec1.module.scss';

function Sec1() {
    return (
        <div className={styles.sec1}>
            <h5>کاربران باید این توافق‌نامه را مطالعه و سپس اقدام به عضویت و ... نمایند</h5>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h4>
                    قوانین عضویت
                    حساب کاربری                 
                    </h4>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <h4>
                    قوانین داروخانه              
                    </h4>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <h4>
                    قوانین فروشگاه               
                    </h4>
                </div>
                <div className={`${styles.box} ${styles.deactive}`}>
                    <h4>
                    قوانین
                    مشاوره آنلاین                  
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Sec1
