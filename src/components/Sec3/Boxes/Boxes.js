import React from 'react'
import Box from '../Boxes/Box/Box'
import '../../../assets/sass/Boxes.scss'
import PharmImg from '../../../assets/images/pharmacy.svg'
import MarketImg from '../../../assets/images/market.svg'
import StethoscopeImg from '../../../assets/images/stethoscope.svg'

function Boxes() {
    return (
        <div className='sec__3__boxes'>
            <Box className='sec__3__box' src={PharmImg} text='داروخانه' />
            <Box className='sec__3__box deactive' src={MarketImg} text='فروشگاه' />
            <Box className='sec__3__box deactive' src={StethoscopeImg} text='ویزیت آنلاین' />
        </div>
    )
}

export default Boxes
