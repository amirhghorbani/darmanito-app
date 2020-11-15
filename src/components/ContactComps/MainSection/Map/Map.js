import React from 'react'
import styles from './Map.module.scss'
import MapImg from '../../../../assets/images/map-image.svg'

function Map() {
    return (
            <div className={styles.map}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src={MapImg} alt='image' />
                    </div>
                    <div className={styles.mapContent}>
                        <div className={styles.contentContainer}>
                            <div className={styles.right}>
                                <div className={styles.email}>
                                    <p>ایمیل</p>
                                    <h6>info@nahiraTech.com</h6>  
                                </div>
                                <div className={styles.phone}>
                                    <p>شماره ثابت</p>
                                    <h6>۰۲۱-۴۴۲۱۹۶۷۱</h6> 
                                </div>
                            </div>
                            <div className={styles.left}>
                                <p>آدرس</p>
                                <p>تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن‌بست پنجم، پلاک 15، واحد 1</p>
                            </div>
                        </div>   
                    </div>
                </div>    
            </div>
    )
}

export default Map
