import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// import dangerIcon from '../../../assets/images/danger-icon.svg'

function Form() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
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
          <input
            type="text"
            name="fullname"
            style={errors.fullname ? borderDanger : null}
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.fullname && <p style={dangerStyle}>نام معتبر نیست</p>}
        </div>

        <div>
          <label>
            شماره نظام پزشکی <span style={{ color: "#1894FF" }}>(فقط عدد)</span>
          </label>
          <input
            type="text"
            name="id"
            style={errors.id ? borderDanger : null}
            ref={register({ required: true })}
          />
          {errors.id && <p style={dangerStyle}>شماره معتبر نیست</p>}
        </div>

        <div>
          <label>نام داروخانه / فروشگاه</label>
          <input
            type="text"
            name="storename"
            style={errors.storename ? borderDanger : null}
            ref={register({ required: true })}
          />
          {errors.storename && <p style={dangerStyle}>نام معتبر نیست</p>}
        </div>

        <div>
          <label>شماره داروخانه</label>
          <input
            type="text"
            name="phone"
            style={errors.phone ? borderDanger : null}
            ref={register({ required: true })}
          />
          {errors.phone && <p style={dangerStyle}>شماره معتبر نیست</p>}
        </div>

        <div>
          <label>شهر</label>
          <input
            type="text"
            name="city"
            style={errors.city ? borderDanger : null}
            ref={register({ required: true })}
          />
          {errors.city && <p style={dangerStyle}>شهر معتبر نیست</p>}
        </div>

        <div>
          <label>منطقه</label>
          <input
            type="text"
            name="area"
            style={errors.area ? borderDanger : null}
            ref={register({ required: true })}
          />
          {errors.area && <p style={dangerStyle}>منطقه معتبر نیست</p>}
        </div>

        <div style={{ flexGrow: "1", width: "100%" }}>
          <label>آدرس دقیق</label>
          <input
            style={{ width: "100%" }}
            type="text"
            name="address"
            style={errors.address ? borderDanger : null}
            ref={register({ required: true })}
          />
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
            <input
              type="text"
              name="begin"
              className={styles.firstTime}
              style={errors.begin ? borderDanger : null}
              ref={register({ required: true })}
            />
            <input
              type="text"
              name="end"
              className={styles.secondTime}
              style={errors.end ? borderDanger : null}
              ref={register({ required: true })}
            />
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
