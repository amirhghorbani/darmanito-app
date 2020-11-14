import React from "react";
import List from "./List/List";
import styles from "./Section2.module.scss";


function Section2() {


  return (
    <div className={styles.section2}>
      <List />
        <hr />
      <List />
        <hr />
      <List />
        <hr />
      <List />
        <hr />
    </div>
  );
}

export default Section2;
