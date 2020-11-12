import React, { Component } from "react";

import Modal from '../../containers/Modal/Modal'

import DangerIcon from "../../assets/images/danger-icon.svg";

import styles from '../../components/MainLanding/Sec4/Sec4.module.scss'


const DangerText = () =>  (
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

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inputIsValid: null,
      show: false
    };
    this.changeHandler = this.changeHandler.bind(this);  
  }
  
  changeHandler = (event) => {
    const { value } = this.state;
    const pattern = /(\+98|0)?9\d{8}/;
    this.setState({ value : event.target.value,
                  inputIsValid: pattern.test(value)
    }); 
    
  };

  showModal = () => {
    setTimeout(() => {
      this.setState({show : true})
    }, 2000);
    
  }
  hideModal = () => {
    this.setState({show : false});
  }


  render() {

    const {inputIsValid} = this.state;

    return (
      <div>
        <Modal
          header='ارسال موفق'
          text='لینک دانلود برای شما ارسال شد'
          show={this.state.show} 
          handleClose={this.hideModal} />

          <div className={styles.input}>
          <input
            value={this.state.value}
            type="text"
            placeholder="شماره همراه را وارد کنید"
            onChange={this.changeHandler}
            className={inputIsValid !== null ? (inputIsValid ? styles.success : styles.danger) : ''}
          />
          <button type='button' onClick={inputIsValid ? this.showModal : null}>بفرست</button>
          </div>
        
          {inputIsValid !== null
          ? !inputIsValid
            ? <DangerText />
            : ""
          : ""}
      </div>
    );
  }
}

export default Input;
