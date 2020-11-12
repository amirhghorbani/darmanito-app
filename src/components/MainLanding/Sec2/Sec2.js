import React from 'react'

import styles from '../Sec2/Sec2.module.scss';

import Sec2ImgBack from '../../../assets/images/Card Bacground.svg'
import Sec2ImgDoc from '../../../assets/images/Card-doc.svg'
import Sec2ImgPlay from '../../../assets/images/Card-play.svg'
import ContentText from './ContentText/ContentText'

function Sec2() {
    return (
        <div className={styles.sec2}>
            <div className={styles.image}>
                    <img src={Sec2ImgBack} alt='img' />
                    <img className={styles.cardDoc} alt='img' src={Sec2ImgDoc} />
                    <img src={Sec2ImgPlay} alt='img' /> 
            </div> 
            <ContentText />
        </div>
    )
}

export default Sec2
