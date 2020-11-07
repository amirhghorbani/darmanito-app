import React from 'react'
import '../../assets/sass/Support.scss'
import HeadPhone from '../../assets/images/support-icon.svg'

function Support() {
    return (
        <div className='sec__7'>
            <div className='sec__7__text'>
                <p>پشتیبانی درمانیتو</p>
                <p>پاسخگویی در روزهای کاری از ۹ صبح تا ۹ شب</p>
            </div>
            <div className='sec__7__support'>
                <img src={HeadPhone} alt='headphone' />
                <p>پشتیبانی : ۳۴۲۱۴۴۲۳ - ۰۲۱</p>
            </div>
        </div>
    )
}

export default Support
