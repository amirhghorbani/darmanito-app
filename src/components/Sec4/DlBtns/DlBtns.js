import React from 'react'
import BazarBtn from '../../../assets/images/bazar-btn.svg'
import SibBtn from '../../../assets/images/sib-btn.svg'

import styles from '../Sec4.module.scss'


function DlBtns() {
    return (
        <div className={styles.download__btns}>
            <a href=''><img src={BazarBtn} /></a>
            <a href=''><img src={SibBtn} /></a>
        </div>
    )
}

export default DlBtns
