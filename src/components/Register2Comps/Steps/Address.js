import React from "react";
import styles from "../MultiStepsForm.module.scss";
import { useForm } from "react-hook-form";

export const Address = ({ formData, navigation, setForm }) => {
  const { register, errors, handleSubmit } = useForm();
  const { city, area, address } = formData;
  const onSubmit = () => navigation.next();

  return (
    <div className={styles.container}>
      <p>
        عضویت به عنوان <strong>داروخانه</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>شهر</label>
          <input className={errors.city ? styles.danger : null} onChange={setForm} type="text" name="city" value={city} ref={register({required : true})} />
          {errors.city && <span>شهر معتبر نیست</span>}
        </div>
        <div>
          <label>منطقه</label>
          <input className={errors.area ? styles.danger : null} onChange={setForm} type="text" name="area" value={area} ref={register({required : true})} />
          {errors.area && <span>منطقه معتبر نیست</span>}
        </div>
        <div>
          <label>ساعت کاری</label>
          <div className={styles.check}>
            <div className={styles.daily} style={errors.time ? {border : '1px solid red'} : null} >
              <input
                onChange={setForm}
                className={styles.radio}
                type="radio"
                name="time"
                value="روزانه"
                ref={register({required : true})}
              />
              <span>روزانه</span>
            </div>
            <div className={styles.allday} style={errors.time ? {border : '1px solid red'} : null}>
              <input
                className={styles.radio}
                onChange={setForm}
                type="radio"
                name="time"
                value="شبانه روزی"
                ref={register({required : true})}
              />
              <span>شبانه روزی</span>
            </div>
          </div>
        </div>
        <div>
          <label>آدرس</label>
          <input
            onChange={setForm}
            className={errors.address ? styles.danger : null}
            type="text"
            name="address"
            value={address}
            ref={register({required : true})}
          />
          {errors.address && <span>آدرس معتبر نیست</span>}
        </div>

        <input
          type="submit"
          value="مرحله بعد"
        />
      </form>
    </div>
  );
};
