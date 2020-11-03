import React from 'react'
import '../../sass/Sec7.scss'
import HeadPhone from '../../assets/images/support-icon.svg'

function Sec7() {
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

export default Sec7
