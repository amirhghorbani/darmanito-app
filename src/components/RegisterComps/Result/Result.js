import React from 'react'
import styles from './Result.module.scss';

function Result() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.photo}>
                    <img src='' alt />
                </div>
                <div className={styles.headerText}>
                    <p>نام داروخانه</p>
                    <p>نام داروخانه</p>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <p>نام داروخانه</p>
                    <p>داروخانه رسالت</p>
                </div>
                <div>
                    <p>شماره داروخانه</p>
                    <p>۰۲۱-۴۴۲۱۹۶۷۱</p>
                </div>
                <div>
                    <p>شهر</p>
                    <p>تهران</p>
                </div>
                <div>
                    <p>منطقه</p>
                    <p>جیحون</p>
                </div>
                <div>
                    <p>ساعت کاری</p>
                    <p>شبانه روزی</p>
                </div>
            </div>
            <div className={styles.address}>
                <p>آدرس دقیق</p>
                <p>تهران ، میدان امام حسین ، خیابان دماوند ،  کوچه حسینی</p>
            </div>
        <hr />

            <div className={styles.footer}>
                <div>
                    <p>نام و نام خانوادگی موسس</p>
                    <p>ایرج حسینی</p>
                </div>
                <div>
                    <p>پزشکی</p>
                    <p>د-۳۲۴۵</p>
                </div>
            </div>
        
            <div className={styles.btns}>
                <button>ویرایش اطلاعات</button>
                <button>تکمیل ثبت نام</button>
            </div>
        </div>
    )
}

export default Result
