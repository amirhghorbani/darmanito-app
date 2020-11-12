import React from 'react'
// import '../../../assets/sass/HeaderTitle.scss'

import styles from '../HeaderTitle/HeaderTitle.module.scss'

function HeaderTitle({ text }) {
    return (
    <p className={styles.bold}>{text}</p>
    )
}

export default HeaderTitle
