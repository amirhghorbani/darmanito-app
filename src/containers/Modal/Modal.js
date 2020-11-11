import React from 'react'

import ModalImg from '../../assets/images/modal-img1.svg';
import './Modal.scss'

const Modal = ({handleClose, show, header, text}) =>  {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
                <section className="modal-main">
                    <img src={ModalImg} alt='icon' />
                    <div className='text'>
                    <h5>{header}</h5>
                    <p>{text}</p>  
                    </div>
                    
                <button onClick={handleClose}>برگشت</button>
            </section>
            
        </div>
    )
}

export default Modal
