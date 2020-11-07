import React from 'react'
import '../../assets/sass/Sec4.scss'
import ProgressBar from './ProgressBar/ProgressBar'
import ProgressSteps from './ProgressSteps/ProgressSteps'


function Sec4() {
    return (
        <div className="sec__4">
            <div className='sec__4__header'>
                <h4>داروخانه آنلاین</h4>
                <p>شما با درمانیتو میتونید نسخه و دارو خودتون رو اول برای تمام داروخانه های اطراف خودتون و اگر پیدا نشد در تمام داروخانه ها ارسال کنید و در کمترین زمان دارو شما پیدا میشود</p>
            </div>
            <div className='sec__4__content'>
                <ProgressBar />
                <ProgressSteps />
            </div>
        </div>
    )
}

export default Sec4
