import React, { Component } from "react";
import "../../sass/Sec5.scss";
import DlBtns from "./DlBtns/DlBtns";
import Inputs from "./Inputs/Inputs";
import PhoneImg from "./PhoneImg/PhoneImg";
import Title from "./Title/Title";

class Sec5 extends Component {
  render() {
    return (
      <div className="sec__5">
        <Title />
        <Inputs />
        <DlBtns />
        <PhoneImg />
      </div>
    );
  }
}

export default Sec5;
