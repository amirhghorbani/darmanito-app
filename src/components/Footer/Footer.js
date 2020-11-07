import React from 'react'
import '../../assets/sass/Footer.scss'
import Logo from '../../assets/images/header-logo.svg'

import InstaLogo from '../../assets/images/Icons - Facebook Copy.svg'
import FacebookLogo from '../../assets/images/Icons - Facebook Copy 2.svg'
import LinkedInLogo from '../../assets/images/linkedin.svg'
function Footer() {
    return (
        <div className='sec__8'>
            <img src={Logo} alt='logo' />

            <div className='sec__8__text'>
                <p>سوپر اپلیکیشن حوزه درمان و سلامت</p>
                <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
            </div>
            
            <div className='sec__8__icons'>
                <a href=''><img src={LinkedInLogo} alt='icon' /></a>
                <a href=''><img src={FacebookLogo} alt='icon' /></a>
                <a href=''><img src={InstaLogo} alt='icon' /></a>
            </div>
        </div>
    )
}

export default Footer
