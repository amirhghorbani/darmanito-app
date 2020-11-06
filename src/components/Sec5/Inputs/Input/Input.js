import React, { Component } from "react";

import DangerIcon from "../../../../assets/images/danger-icon.svg";

class Input extends Component {
  state = {
    input: "",
    inputIsValid: null,
  };

  changeHandler = (event) => {
    this.setState({ input: event.target.value });
    if (this.state.input.length !== 10) {
      this.setState({ inputIsValid: false });
    } else {
      this.setState({ inputIsValid: true });
    }
  };

  render() {
    const dangerText = (
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

    return (
      <div>
        <div className="input">
          <input
            type="text"
            placeholder="شماره همراه را وارد کنید"
            onChange={this.changeHandler}
            className={
              this.state.inputIsValid !== null
                ? this.state.inputIsValid
                  ? "success"
                  : "danger"
                : ""
            }
          />
          <button>بفرست</button>
        </div>
        {this.state.inputIsValid !== null
          ? !this.state.inputIsValid
            ? dangerText
            : ""
          : ""}
      </div>
    );
  }
}

export default Input;
