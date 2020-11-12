import React from 'react'
import HeaderTitle from '../../Sec3/HeaderTitle/HeaderTitle'

import CheckIcon from '../../../../assets/images/services-check-icon.svg'
import PathIcon from '../../../../assets/images/services-path-icon.svg'
import EasyIcon from '../../../../assets/images/services-easy-icon.svg'
import SearchIcon from '../../../../assets/images/services-search-icon.svg'



import styles from '../Sec2.module.scss';

function ContentText() {
    return (
        <div className={styles.content}>
            <HeaderTitle text='درمانیتو چی هست ؟'/>
            <p className={styles.light}>درمانیتو یک سوپر اپلیکیشن هست که سعی داره با سرویس های متفاوتش رونده درمان شما رو سریعتر کنه ، شما با درمانیتو میتونید نسخه خودتون رو برای تمام داروخانه های اطراف خودتون بفرستید</p>
            <div className={styles.services}>
               <div>
                    <div className={styles.box}>
                        <img src={CheckIcon} alt='icon' />
                    </div>
                    <p>جستجو سریع</p>
               </div> 
               
               <div>
                  <div className={styles.box}>
                    <img src={PathIcon} alt='icon' />
                  </div> 
                  <p>به صرفه</p>
               </div>
                
                <div>
                    <div className={styles.box}>
                        <img src={EasyIcon} alt='icon' />
                    </div>
                    <p>راحت</p>
                </div>
                
                <div>
                   <div className={styles.box}>
                        <img src={SearchIcon} alt='icon' />
                   </div> 
                    <p>جستجو سریع</p>
                </div>
                

            </div>
        </div>
    )
}

export default ContentText
