import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.scss";

function Form() {

  return (
    <div className={styles.container}>
      <form>

        <div>
          <label>نام و نام خانوادگی موسس</label>
          <input type="text" name='fullname' />
        </div>

        <div>
          <label>
            شماره نظام پزشکی <span style={{ color: "#1894FF" }}>(فقط عدد)</span>
          </label>
          <input type="text" name='id' />
        </div>

        <div>
          <label>نام داروخانه / فروشگاه</label>
          <input type="text" name='storename' />
        </div>

        <div>
          <label>شماره داروخانه</label>
          <input type="text" name='phone' />
        </div>

        <div>
          <label>شهر</label>
          <input type="text" name='city' />
        </div>

        <div>
          <label>منطقه</label>
          <input type="text" name='area'/>
        </div>

        <div style={{ flexGrow: "1", width: "100%" }}>
          <label>آدرس دقیق</label>
          <input style={{ width: "100%" }} type="text" name='address' />
        </div>

        <div>
          <label>ساعات کاری</label>
          <div className={styles.check}>
            <div className={styles.daily}>
              <input
                className={styles.radio}
                type="radio"
                value="روزانه"
                name="time"
              />
              <span>روزانه</span>
            </div>
            <div className={styles.allday}>
              <input
                className={styles.radio}
                type="radio"
                value="شبانه روزی"
                name="time"
              />
              <span>شبانه روزی</span>
            </div>
          </div>
        </div>

        <div>
            <label>
                ساعت کاری   
            </label>
            <div className={styles.hours}>
                <input type='time' className={styles.firstTime} />
                <input type='time' className={styles.secondTime} />
            </div>
        </div>

        <div>
            <input type='file' className={styles.file_input} name='file' />
        </div>

        <div>
            <Link>
            <input className={styles.subBtn} type='submit' value='مرحله بعد' />
            </Link>
        </div>
      
      </form>
    </div>
  );
}

export default Form;
