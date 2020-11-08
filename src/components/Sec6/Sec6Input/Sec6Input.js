import React, { useState } from "react";

import DangerIcon from "../../../assets/images/danger-icon.svg";

import styles from '../../Sec6/Sec6.module.scss'

import "../../../assets/sass/Sec5.scss";

function Sec6Input() {
  const [input, setInput] = useState("");
  const [inputIsValid, setInputIsValid] = useState(null);

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
    <div className={styles.sec__6__input}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="شماره همراه را وارد کنید"
          onChange={changeHandler}
          value={input}
          className={
            inputIsValid !== null ? (inputIsValid ? styles.success : styles.danger) : ""
          }
        />
        <button>ثبت نام سریع</button>
      </div>
      {inputIsValid !== null ? (!inputIsValid ? dangerText : "") : ""}
    </div>
  );
}

export default Sec6Input;
