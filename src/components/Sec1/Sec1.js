import React from "react";

import Sec1Img from "../Sec1/Sec1-img/Sec1Img";

import styles from '../Sec1/Sec1.module.scss'

import Sec1Content from "./Sec1-content/Sec1Content";

function Sec1() {
  return (
    <div className={styles.sec1}>
      <Sec1Img />
      <Sec1Content />
    </div>
  );
}

export default Sec1;
