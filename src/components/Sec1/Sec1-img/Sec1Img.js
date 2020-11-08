import React from 'react'
import DocImg from '../../../assets/images/sec1-doctor.svg'
import DocBackg from '../../../assets/images/doc-background.svg'

import styles from '../Sec1.module.scss'

function Sec1Img() {
    return (
        <div className={styles.image}>
            <img src={DocBackg} alt='sec1' />
            <img src={DocImg} alt='sec1' />
        </div>
        
    )
}

export default Sec1Img

