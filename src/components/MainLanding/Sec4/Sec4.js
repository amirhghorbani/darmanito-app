import React, { Component } from "react";
import styles from './Sec4.module.scss';

import DlBtns from "./DlBtns/DlBtns";
import Inputs from "./Inputs/Inputs";
import PhoneImg from "./PhoneImg/PhoneImg";
import Title from "./Title/Title";

class Sec4 extends Component {

  state = {
    
  }

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

export default Sec4;
