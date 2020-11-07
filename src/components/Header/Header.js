import React, { Component } from "react";

import styles from "../Header/Header.module.scss";

// import "../../sass/Header.scss";

import Logo from "../../assets/images/header-logo.svg";
import DropDown from "../../assets/images/dropdown-icon.svg";
import DropUp from "../../assets/images/dropup-icon.svg";

/* dropdown menu jsx code */
const dropDiv = (
  <div className={styles.dropmenu}>
    <button>دانلود مستقیم درمانیتو</button>
    <hr />
    <div className="dropItems">
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

  iconchangeHandler = (event) => {
    event.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.items}>
          <a href="#">
            <img src={Logo} alt="header" />
          </a>
          <a
            className={styles.dropIcon}
            onClick={this.iconchangeHandler}
            href="#"
          >
            <img src={this.state.isClicked ? DropDown : DropUp} alt="header" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="">صفحه اصلی</a>
              </li>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">تماس باما</a>
              </li>
              <li>
                <a href="">عضویت داروخانه ها</a>
              </li>
            </ul>
          </nav>

          <button className={styles.download__btn}>دانلود درمانیتو</button>
        </div>

        {/* dropdown menu in mobile devices only */}
        {this.state.show ? dropDiv : null}
      </div>
    );
  }
}

export default Header;
