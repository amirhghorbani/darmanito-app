import React from 'react'

// import '../../assets/sass/Footer.scss'
import styles from './Footer.module.scss'

import Logo from '../../assets/images/header-logo.svg'
import InstaLogo from '../../assets/images/Icons - Facebook Copy.svg'
import FacebookLogo from '../../assets/images/Icons - Facebook Copy 2.svg'
import LinkedInLogo from '../../assets/images/linkedin.svg'
import sibDlImg from '../../assets/images/apple-black-dl-icon.svg'
import bazarDlImg from '../../assets/images/bazar-black-dl-icon.svg'

function Footer() {
    return (
        <div className={styles.sec__8}>
            <div className={styles.sec8__1}>
                <img src={Logo} alt='logo' />

                <div className={styles.sec__8__text}>
                    <p>سوپر اپلیکیشن حوزه درمان و سلامت</p>
                    <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
                </div>

                <div className={styles.sec__8__icons}>
                    <a href=''><img src={LinkedInLogo} alt='icon' /></a>
                    <a href=''><img src={FacebookLogo} alt='icon' /></a>
                    <a href=''><img src={InstaLogo} alt='icon' /></a>
                </div>
            </div>
        
            <div className={styles.sec8__2}>
                <p>خدمات درمانیتو</p>
                <ul>
                    <li><a href='#'>داروخانه آنلاین</a></li>
                    <li><a href='#'>فروشگاه آنلاین</a></li>
                    <li><a href='#'>ویزیت آنلاین</a></li>
                    <li><a href='#'>پرونده پزشکی</a></li>
                </ul>
            </div>        

            <div className={styles.sec8__2}>
                <p>صفحات درمانیتو</p>
                <ul>
                    <li><a href='#'>تماس باما</a></li>
                    <li><a href='#'>درباره ما</a></li>
                    <li><a href='#'>سوالات متداول</a></li>
                    <li><a href='#'>قوانین و شرایط</a></li>
                </ul>
            </div> 
        
            <div className={styles.sec8__btn}>
                <p>دانلود درمانیتو</p>
                <div className={styles.btns}>
                    <a href='#'>
                        <img src={sibDlImg} alt='image'/>
                    </a>
                    <a href='#'>
                        <img src={bazarDlImg} alt='image'/>
                    </a>
                </div>
            </div>
        
        </div>
    )
}

export default Footer
