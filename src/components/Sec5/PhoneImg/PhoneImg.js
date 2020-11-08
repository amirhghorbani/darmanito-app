import React from 'react'
import PhonePic from '../../../assets/images/phone.svg'
import styles from '../Sec5.module.scss'

function PhoneImg() {
    return (
        <div className={styles.phone__img}>
            <img src={PhonePic} />
        </div>
    )
}

export default PhoneImg
