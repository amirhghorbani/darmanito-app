import React from 'react'
import styles from '../MultiStepsForm.module.scss'


export const Names = ({formData, navigation, setForm}) => {
    const {fullName, id, phone, storeName} = formData;
    return (
        <div className={styles.container}>

            <p>عضویت به عنوان <strong>داروخانه</strong></p>

            <div>
                <label>نام و نام خانوادگی موسس</label>
                <input onChange={setForm} type='text' name='fullName' value={fullName}  />
            </div> 
            <div>
                <label>شماره نظام پزشکی (فقط عدد)</label>
                <input onChange={setForm} type='text' name='id' value={id}  />
            </div>
            <div>
                <label>نام داروخانه / فروشگاه</label>
                <input onChange={setForm} type='text' name='storeName' value={storeName}  />
            </div>
            <div>
                <label>شماره داروخانه</label>
                <input onChange={setForm} type='text' name='phone' value={phone}  />
            </div>

            <input type='submit' onClick={() => navigation.next()} value='مرحله بعد' />
        </div>
    )
}

