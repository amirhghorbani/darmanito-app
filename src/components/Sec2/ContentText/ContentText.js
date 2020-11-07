import React from 'react'
import HeaderTitle from '../../Sec3/HeaderTitle/HeaderTitle'
import '../../../assets/sass/ContentText.scss'

function ContentText() {
    return (
        <div className='content__text'>
            {/* <p className='bold'>درمانیتو چی هست ؟</p> */}
            <HeaderTitle text='درمانیتو چی هست ؟'/>
            <p className='light'>درمانیتو یک سوپر اپلیکیشن هست که سعی داره با سرویس های متفاوتش رونده درمان شما رو سریعتر کنه ، شما با درمانیتو میتونید نسخه خودتون رو برای تمام داروخانه های اطراف خودتون بفرستید</p>
        </div>
    )
}

export default ContentText
