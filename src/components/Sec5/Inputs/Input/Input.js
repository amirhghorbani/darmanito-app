import React, { Component } from 'react'

 class Input extends Component {
     
    render() {
        return (
            <div className='input'>
                <input type='text' placeholder='شماره همراه را وارد کنید'/>
                <button>بفرست</button>
            </div>
        )
    }
}

export default Input
