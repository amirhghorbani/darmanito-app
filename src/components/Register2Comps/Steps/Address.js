import React from 'react'
import styles from '../MultiStepsForm.module.scss'

export const Address = ({formData, navigation, setForm}) => {

    const {city, area, time, address} = formData;

    return (
        <div className={styles.container}>

            <p>عضویت به عنوان <strong>داروخانه</strong></p>

            <div>
                <label>شهر</label>
                <input onChange={setForm} type='text' name='city' value={city}  />
            </div> 
            <div>
                <label>منطقه</label>
                <input onChange={setForm} type='text' name='area' value={area}  />
            </div>
            <div>
                <label>ساعت کاری</label>
                <div className={styles.check}>
                    <div className={styles.daily}>
                        <input onChange={setForm} 
                        className={styles.radio}type='radio' name='time' value='روزانه'  />
                        <span>روزانه</span>
                    </div>
                    <div className={styles.allday}>
                        <input className={styles.radio} onChange={setForm} type='radio' name='time' value='شبانه روزی'  />
                        <span>شبانه روزی</span>
                    </div> 
                </div>   
            </div>
            <div>
                <label>آدرس</label>
                <input onChange={setForm} type='text' name='address' value={address}  />
            </div>

            <input type='submit' onClick={() => navigation.next()} value='مرحله بعد' />
        </div>
    )
}
