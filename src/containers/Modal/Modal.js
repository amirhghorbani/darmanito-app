import React from 'react'

import ModalImg from '../../assets/images/modal-img1.svg';
import styles from './Modal.module.scss'

const Modal = ({handleClose, show, header, text}) =>  {

    const showHideClassName = show ? `${styles.modal} ${styles.dBlock}`: `${styles.modal} ${styles.dNone}`;

    return (
        <div className={showHideClassName}>
                <section className={styles.modal_main}>
                    <img src={ModalImg} alt='icon' />
                    <div className={styles.text}>
                    <h5>{header}</h5>
                    <p>{text}</p>  
                    </div>
                    
                <button className={styles.modal_btn} onClick={handleClose}>برگشت</button>
            </section> 
        </div>
    )
}

export default Modal
