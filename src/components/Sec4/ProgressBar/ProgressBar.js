import React from 'react'
import DirectSign from '../../../assets/images/Component 12 – 1.png'
import CheckSign from '../../../assets/images/check-mark.png'

function ProgressBar() {
    return (
        <div className='progress__bar'>
             <img src={DirectSign} alt='icon' />
             <div className='v__line'></div>
             <img src={DirectSign} alt='icon' />
             <div className='v__line'></div>
             <img src={CheckSign} alt='icon' />
        </div>
    )
}

export default ProgressBar
