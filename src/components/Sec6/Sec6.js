import React from 'react'

// import '../../assets/sass/Sec6.scss'

import styles from '../Sec6/Sec6.module.scss'

import Sec6Img from './Sec6Img/Sec6Img'
import Sec6Input from './Sec6Input/Sec6Input'
import Sec6Text from './Sec6Text/Sec6Text'

function Sec6() {
    return (
        <div className={styles.sec__6}>
            <div className={styles.content__6}>
                <Sec6Text />
                <Sec6Input />
            </div>
            <Sec6Img />
            
        </div>
    )
}
 
export default Sec6
