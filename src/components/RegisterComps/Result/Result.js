import React, { useState } from "react";
import styles from "./Result.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "../../../containers/Modal/Modal";

function Result() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const { data } = location.state;

  const backHandler = () => {
    history.push({
      pathname: "/register_page",
      data,
    });
  };

  const showModal = () => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  };
  const hideModal = () => {
    setShow(false);
    history.push("/darmanito-app");
  };
  const submitHandler = () => {
    showModal();
  };

  return (
    <div className={styles.container}>
      <Modal
        header="ثبت نام موفق"
        text="اطلاعات شما ثبت گردید"
        show={show}
        handleClose={hideModal}
      />
      <div className={styles.header}>
        <div className={styles.photo}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pharmacy-1733124-1475501.png"
            width="80px"
            alt="store"
          />
        </div>
        <div className={styles.headerText}>
          <p>نام داروخانه</p>
          <p>{data.storename}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p>نام داروخانه</p>
          <p>{data.storename}</p>
        </div>
        <div>
          <p>شماره داروخانه</p>
          <p>{data.phone}</p>
        </div>
        <div>
          <p>شهر</p>
          <p>{data.city}</p>
        </div>
        <div>
          <p>منطقه</p>
          <p>{data.area}</p>
        </div>
        <div>
          <p>ساعت کاری</p>
          <p>{data.time}</p>
        </div>
      </div>
      <div className={styles.address}>
        <p>آدرس دقیق</p>
        <p>{data.address}</p>
      </div>
      <hr />
      <div className={styles.footer}>
        <div>
          <p>نام و نام خانوادگی موسس</p>
          <p>{data.fullname}</p>
        </div>
        <div>
          <p>شماره پزشکی</p>
          <p>{data.id}</p>
        </div>
      </div>
      <div className={styles.btns}>
        <button type="button" onClick={backHandler}>
          ویرایش اطلاعات
        </button>
        <button onClick={submitHandler}>تکمیل ثبت نام</button>
      </div>
    </div>
  );
}

export default Result;
