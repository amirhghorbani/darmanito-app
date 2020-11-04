import React, { Component } from 'react'

 class Input extends Component {

    state = {
        input : '',
        inputIsValid : null
    }

    changeHandler = (event) => {
        this.setState({input : event.target.value});
        if (this.state.input.length !== 10) {
            this.setState({inputIsValid : false}) 
        } else {
            this.setState({inputIsValid : true})
        }
    }
     
    render() {
        return (
            <div className='input'>
                <input type='text' 
                 placeholder='شماره همراه را وارد کنید'
                 onChange={this.changeHandler}
                 className={this.state.inputIsValid !== null ? (this.state.inputIsValid ? 'success' : 'danger') : ''}
                 />
                <button>بفرست</button>
            </div>
        )
    }
}

export default Input
