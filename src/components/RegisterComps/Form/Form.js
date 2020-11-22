import React from "react";
import styles from "./Form.module.scss";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

// import dangerIcon from '../../../assets/images/danger-icon.svg'

function Form() {
  const history = useHistory();
  const location = useLocation();
  const data = location.data;
  console.log( data );
  const { register, errors, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    setTimeout(() => {
      history.push("/result_page", { data });
    }, 2000);
  };
  const dangerStyle = { color: "red", fontSize: "12px", margin: "0" };
  const borderDanger = { border: "1px solid red" };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>نام و نام خانوادگی موسس</label>
          <Controller as='input' name='fullname' control={control} style={errors.fullname ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.fullname}  />
          {errors.fullname && <p style={dangerStyle}>نام معتبر نیست</p>}
        </div>

        <div>
          <label>
            شماره نظام پزشکی <span style={{ color: "#1894FF" }}>(فقط عدد)</span>
          </label>
          <Controller as='input' name='id' control={control} style={errors.id ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.id}  />
          {errors.id && <p style={dangerStyle}>شماره معتبر نیست</p>}
        </div>

        <div>
          <label>نام داروخانه / فروشگاه</label>
          <Controller as='input' name='storename' control={control} style={errors.storename ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.storename}  />
          {errors.storename && <p style={dangerStyle}>نام معتبر نیست</p>}
        </div>

        <div>
          <label>شماره داروخانه</label>
          <Controller as='input' name='phone' control={control} style={errors.phone ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.phone}  />
          {errors.phone && <p style={dangerStyle}>شماره معتبر نیست</p>}
        </div>

        <div>
          <label>شهر</label>
          <Controller as='input' name='city' control={control} style={errors.city ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.city}  />
          {errors.city && <p style={dangerStyle}>شهر معتبر نیست</p>}
        </div>

        <div>
          <label>منطقه</label>
          <Controller as='input' name='area' control={control} style={errors.area ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.area}  />
          {errors.area && <p style={dangerStyle}>منطقه معتبر نیست</p>}
        </div>

        <div style={{ flexGrow: "1", width: "100%" }}>
          <label>آدرس دقیق</label>
          <Controller as='input' name='address' control={control} style={errors.address ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.address}  />
          {errors.address && <p style={dangerStyle}>آدرس معتبر نیست</p>}
        </div>

        <div>
          <label>ساعات کاری</label>
          <div className={styles.check}>
            <div
              className={styles.daily}
              style={errors.time ? borderDanger : null}
            >
              <input
                className={styles.radio}
                type="radio"
                value="روزانه"
                name="time"
                ref={register({ required: true })}
              />
              <span>روزانه</span>
            </div>
            <div
              className={styles.allday}
              style={errors.time ? borderDanger : null}
            >
              <input
                className={styles.radio}
                type="radio"
                value="شبانه روزی"
                name="time"
                ref={register({ required: true })}
              />
              <span>شبانه روزی</span>
            </div>
          </div>
        </div>

        <div>
          <label>ساعت کاری</label>
          <div className={styles.hours}>
            <Controller as='input' className={styles.firstTime} name='begin' control={control} style={errors.begin ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.begin}  />
            <Controller as='input' className={styles.secondTime} name='end' control={control} style={errors.end ? borderDanger : null} rules={{required : true}} defaultValue={data === undefined ? '' : data.end}  />
          </div>
        </div>

        <div>
          <input type="file" className={styles.file_input} name="picture" />
        </div>

        <div>
          <input className={styles.subBtn} type="submit" value="مرحله بعد" />
        </div>
      </form>
    </div>
  );
}

export default Form;
