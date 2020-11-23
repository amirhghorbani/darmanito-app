import React, {useState} from 'react'
import Modal from '../../../containers/Modal/Modal';
import styles from './Result.module.scss'

export const Result = ({formData, navigation}) => {
    const {fullName, storeName, id, phone, city, area, address, time} = formData;
    const [show, setShow] = useState(false);
    const showModal = () => {
        setTimeout(() => {
          setShow(true);
        }, 2000);
      };
      const hideModal = () => {
        setShow(false);
      };
      const submitHandler = () => {
        showModal();
      };
    
    return (
        <div className={styles.container}>
            <div className={styles.rigth}>
            <div className={styles.resultContent}>
                <div>
                    <p>نام داروخانه</p>
                    <p>{storeName}</p>
                </div>
                <div>
                    <p>شماره داروخانه</p>
                    <p>{phone}</p>
                </div>
                <div>
                    <p>شهر</p>
                    <p>{city}</p>
                </div>
                <div>
                    <p>منطقه</p>
                    <p>{area}</p>
                </div>
                <div>
                    <p>ساعت کاری</p>
                    <p>{time}</p>
                </div>
                <div style={{width : "100%"}}>
                    <p>آدرس دقیق</p>
                    <p>{address}</p>
                </div>

                <hr style={{width : "100%", borderColor : 'black', opacity : '.1'}}/>

                <div>
                    <p>نام و نام خانوادگی موسس</p>
                    <p>{fullName}</p>
                </div>
                <div>
                    <p>شماره نظام پزشکی</p>
                    <p>{id}</p>
                </div>
            </div>
            <div className={styles.btns}>
                <button onClick={() => navigation.go('names')}>ویرایش اطلاعات</button>
                <button onClick={submitHandler}>تکمیل ثبت نام</button>
            </div>
            <Modal header='ثبت نام موفق' text="اطلاعات با موفقیت ثبت گردید" show={show} handleClose={hideModal} />

            </div>
            <div className={styles.left}>
               
            </div>
        </div>
    )
}
