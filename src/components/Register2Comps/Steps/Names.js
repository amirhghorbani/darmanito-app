import React from 'react'
import styles from '../MultiStepsForm.module.scss'
import { useForm } from 'react-hook-form'


export const Names = ({formData, navigation, setForm}) => {
    const {register, errors, handleSubmit} = useForm();
    const {fullName, id, phone, storeName} = formData;
    const onSubmit = () => navigation.next();

    return (
        <div className={styles.container}>
            <p>عضویت به عنوان <strong>داروخانه</strong></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>نام و نام خانوادگی موسس</label>
                    <input className={errors.fullName ? styles.danger : null} onChange={setForm} type='text' name='fullName' value={fullName} ref={register({required : true})}  />
                    {errors.fullName && <span>نام معتبر نیست</span>}
                </div> 
                <div>
                    <label>شماره نظام پزشکی (فقط عدد)</label>
                    <input className={errors.id ? styles.danger : null} onChange={setForm} type='text' name='id' value={id} ref={register({required : true})}  />
                    {errors.fullName && <span>شماره پزشکی معتبر نیست</span>}
                </div>
                <div>
                    <label>نام داروخانه / فروشگاه</label>
                    <input className={errors.storeName ? styles.danger : null} onChange={setForm} type='text' name='storeName' value={storeName}  ref={register({required : true})}/>
                    {errors.fullName && <span>نام معتبر نیست</span>}
                </div>
                <div>
                    <label>شماره داروخانه</label>
                    <input className={errors.phone ? styles.danger : null} onChange={setForm} type='text' name='phone' value={phone}  ref={register({required : true})}/>
                    {errors.fullName && <span>شماره تلفن معتبر نیست</span>}
                </div>

                <input type='submit' value='مرحله بعد' />
            </form>
            
        </div>
    )
}

