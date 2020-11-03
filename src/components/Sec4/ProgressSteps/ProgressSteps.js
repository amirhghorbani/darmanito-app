import React from 'react'
import ProgressStep from './ProgressStep/ProgressStep'

function ProgressSteps() {
    return (
        <div className='progress__steps'>
            <ProgressStep 
            title='قدم اول'
            text='وارد بخش ارسال عکس نسخه بشید عکس و توضیحات نسخه رو وارد کنید'
             />
            <ProgressStep
             title='قدم دوم'
             text='بعد از ارسال عکس نسخه، شما باید آدرس محل خودتون رو وارد کنید'
            />
            <ProgressStep
             title='قدم سوم'
             text='اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید' 
            />
        </div>
    )
}

export default ProgressSteps
