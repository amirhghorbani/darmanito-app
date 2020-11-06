import React, { Component } from "react";

import headerStyle from '../Header/Header.module.scss'

// import "../../sass/Header.scss";

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
      <div className={headerStyle.header}>
        <div className={headerStyle.header__logos}>
          <a href="#">
            <img src={Logo} alt="header" />
          </a>
          <a className={headerStyle.dropIcon} onClick={this.iconchangeHandler} href="#">
            <img src={this.state.isClicked ? DropDown : DropUp} alt="header" />
          </a>
          <nav>
            <ul>
              <a href=''><li>صفحه اصلی</li></a>
              <a href=''><li>درباره ما</li></a>
              <a href=''><li>تماس باما</li></a>
              <a href=''><li>عضویت داروخانه ها</li></a>
            </ul>
          </nav>
         
            <button className={headerStyle.download__btn}>دانلود درمانیتو</button>
          
        </div>
        {this.state.show ? dropDiv : null}
      </div>
    );
  }
}

export default Header;
