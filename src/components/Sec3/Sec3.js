import React from 'react'
import styles from '../Sec3/Sec3.module.scss'
import Boxes from './Boxes/Boxes'
import HeaderTitle from './HeaderTitle/HeaderTitle'

import ProgressBar from './ProgressBar/ProgressBar'
import ProgressSteps from './ProgressSteps/ProgressSteps'

function Sec3() {
    return (
        <div className={styles.sec3}>
            <HeaderTitle text='سرویس های درمانیتو' />
            <div className={styles.content}>
               <Boxes />
               <div className={styles.progress_content}>
               <h4>داروخانه آنلاین</h4>
                <p>شما با درمانیتو میتونید نسخه و دارو خودتون رو اول برای تمام داروخانه های اطراف خودتون و اگر پیدا نشد در تمام داروخانه ها ارسال کنید و در کمترین زمان دارو شما پیدا میشود</p>
                <div className={styles.progress}>
                  <ProgressBar />
                  <ProgressSteps />  
                </div>   
               </div>
            </div>
        </div>
    )
}

export default Sec3;
