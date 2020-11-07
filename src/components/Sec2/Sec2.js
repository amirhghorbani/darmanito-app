import React from 'react'
import '../../assets/sass/Sec2.scss'
import Sec2ImgBack from '../../assets/images/Card Bacground.svg'
import Sec2ImgDoc from '../../assets/images/Card-doc.svg'
import Sec2ImgPlay from '../../assets/images/Card-play.svg'
import ContentText from './ContentText/ContentText'

function Sec2() {
    return (
        <div className="sec__2">
            <div className='sec2__img__box'>
                    <img src={Sec2ImgBack} alt='img' />
                    <img className='sec2__carddoc' alt='img' src={Sec2ImgDoc} />
                    <img src={Sec2ImgPlay} alt='img' /> 
            </div> 
            <ContentText />
        </div>
    )
}

export default Sec2
