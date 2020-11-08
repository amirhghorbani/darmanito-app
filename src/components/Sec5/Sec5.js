import React, { Component } from "react";
import styles from '../Sec5/Sec5.module.scss';

import DlBtns from "./DlBtns/DlBtns";
import Inputs from "./Inputs/Inputs";
import PhoneImg from "./PhoneImg/PhoneImg";
import Title from "./Title/Title";

class Sec5 extends Component {
  render() {
    return (
      <div className={styles.sec5}>
        <div className={styles.whole}>
          <div className={styles.right}>
            <Title />
            <Inputs />
            <DlBtns />
          </div>
          <PhoneImg />
        </div>
      </div>
    );
  }
}

export default Sec5;
