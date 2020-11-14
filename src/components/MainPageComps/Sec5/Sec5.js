import React from 'react'

// import '../../assets/sass/Sec6.scss'

import styles from './Sec5.module.scss'

import Sec5Img from './Sec5Img/Sec5Img'
import Sec5Text from './Sec5Text/Sec5Text'
import FuncInput from '../../../containers/FuncInput/FuncInput'

function Sec5() {
    return (
        <div className={styles.sec__5}>
            <div className={styles.content__5}>
                <Sec5Text />
                <FuncInput />
            </div>
            <Sec5Img />
            
        </div>
    )
}
 
export default Sec5;
