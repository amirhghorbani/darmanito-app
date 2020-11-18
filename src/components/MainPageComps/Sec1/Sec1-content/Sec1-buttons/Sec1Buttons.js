import React from 'react'
import styles from '../../Sec1.module.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Sec1Buttons() {
    return (
        <div className={styles.btns}>
            <button className={styles.btn1}>دانلود مستقیم اپ</button>
            <Link style={{width: '100%'}} to='/register_pharmacy'><button className={styles.btn2}>عضویت داروخانه ها</button></Link>
        </div>
    )
}

export default Sec1Buttons

