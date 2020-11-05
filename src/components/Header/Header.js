import React, { Component } from "react";

import "../../sass/Header.scss";

import Logo from "../../assets/images/header-logo.svg";
import DropDown from "../../assets/images/dropdown-icon.svg";
import DropUp from "../../assets/images/dropup-icon.svg";

const dropDiv = (
  <div className="header__dropmenu">
    <button>دانلود مستقیم درمانیتو</button>
    <hr />
    <div className="dropmenu__items">
      <h3>صفحه اصلی</h3>
      <ul>
        <li>
          <a href="">عضویت در داروخانه ها</a>
        </li>
        <li>
          <a href="">درباره ما</a>
        </li>
        <li>
          <a href="">تماس با ما</a>
        </li>
        <li>
          <a href="">سوالات متداول</a>
        </li>
        <li>
          <a href="">قوانین و شرایط</a>
        </li>
      </ul>
    </div>
  </div>
);

class Header extends Component {
  state = {
    isClicked: true,
    show: false,
  };

  iconchangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="header">
        <div className="header__logos">
          <a href="#">
            <img src={Logo} alt="header" />
          </a>
          <a onClick={this.iconchangeHandler} href="#">
            <img src={this.state.isClicked ? DropDown : DropUp} alt="header" />
          </a>
        </div>
        {this.state.show ? dropDiv : null}
      </div>
    );
  }
}

export default Header;
