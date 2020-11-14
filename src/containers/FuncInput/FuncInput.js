import React, { useState } from "react";

import Modal from '../Modal/Modal';

import DangerIcon from "../../assets/images/danger-icon.svg";

import styles from './FuncInput.module.scss';


// import "../../../assets/sass/Sec5.scss";

function FuncInput() {
  const [input, setInput] = useState("");
  const [inputIsValid, setInputIsValid] = useState(null);
  const [show, setShow] = useState(false);

  const changeHandler = (event) => {
    const inputVal = event.target.value;
    setInput(inputVal);
    console.log(inputVal);

    if (input.length !== 10) {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

  const modalShow = () => {
    setTimeout(() => {
      setShow(true)
    }, 2000);
  }
  const hideModal = () => {
    setShow(false);
  }

  const dangerText = (
    <div style={{ display: "flex" }}>
      <img src={DangerIcon} alt="danger" />
      <p
        style={{
          color: "red",
          fontSize: "12px",
          fontWeight: "lighter",
          marginRight: "13.5px",
        }}
      >
        شماره همراه صحیح نیست
      </p>
    </div>
  );

  return (
    <div className={styles.input}>
      <Modal header='ثبت نام با موفقیت انجام شد' text='برای اعلام توضیحات با شما تماس خواهیم گرفت' show={show} handleClose={hideModal}/>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="شماره همراه را وارد کنید"
          onChange={changeHandler}
          value={input}
          className={
            inputIsValid !== null ? (inputIsValid ? styles.success : styles.danger) : ""
          }
        />
        <button onClick={inputIsValid ? modalShow : null}>ثبت نام سریع</button>
      </div>
      {inputIsValid !== null ? (!inputIsValid ? dangerText : "") : ""}
    </div>
  );
}

export default FuncInput;
