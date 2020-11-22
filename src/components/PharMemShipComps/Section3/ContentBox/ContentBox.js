import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Section3.module.scss';


function ContentBox({ image, title, to }) {
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={image} alt='img' />
                </div>
                <div className={styles.contentText}>
                    <h5>{title}</h5>
                    <p>مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم </p>
                </div>
                <div className={styles.btn}>
                    <Link to={to}><button>ثبت نام </button></Link>
                </div>
            </div>  
        </div>
    )
}

export default ContentBox
