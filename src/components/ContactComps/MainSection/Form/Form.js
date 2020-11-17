import React, { Component } from "react";
import styles from "./Form.module.scss";
import Modal from '../../../../containers/Modal/Modal';

class Form extends Component {
  state = {
    fields: {},
    errors: {},
    danger: {},
    show: false
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let danger = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "نام را وارد نکرده اید";
      danger["name"] = "1px solid red";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "از حروف معتبر استفاده کنید";
        danger["name"] = "1px solid red";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "ایمیل را وارد نکرده اید";
      danger["email"] = "1px solid red";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "ایمیل اشتباه است";
        danger["email"] = "1px solid red";
      }
    }

    if (!fields["textarea"]) {
      formIsValid = false;
      errors["textarea"] = "متن را وارد نکرده اید";
      danger["textarea"] = "1px solid red";
    }

    this.setState({ errors: errors });
    this.setState({ danger: danger });
    return formIsValid;
  }

  clearState = () => {
    this.setState({fields : {
      name : '',
      email : '',
      textarea : ''
    }})
  }
 
  onSubmit = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      this.showModal();
    }
};

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  showModal = () => {
    setTimeout(() => {
      this.setState({show : true},this.clearState())
    }, 2000);
    
  }
  hideModal = () => {
    this.setState({show : false});
  }




  render() {
    return (
      <div className={styles.form}>
        <Modal
        header='ارسال موفق'
        text='پیام شما با موفقیت ارسال گردید'
        show={this.state.show} 
        handleClose={this.hideModal} />
        <form onSubmit={this.onSubmit}>
          <label>
            نام و نام خانوادگی
            <input
              style={{ border: this.state.danger["name"] }}
              type="text"
              name="name"
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
            />
            <span style={{ color: "red", marginTop: "5px" }}>
              {this.state.errors["name"]}
            </span>
          </label>

          <label>
            ایمیل یا شماره همراه
            <input
              style={{ border: this.state.danger["email"] }}
              type="text"
              name="email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red", marginTop: "5px" }}>
              {this.state.errors["email"]}
            </span>
          </label>

          <label>
            پیام شما
            <textarea
              style={{ border: this.state.danger["textarea"] }}
              type="text"
              name="textarea"
              onChange={this.handleChange.bind(this, "textarea")}
              value={this.state.fields["textarea"]}
            />
            <span style={{ color: "red", marginTop: "5px" }}>
              {this.state.errors["textarea"]}
            </span>
          </label>
          <input type="submit" value="ارسال پیام" />
        </form>
      </div>
    );
  }
}

export default Form;
