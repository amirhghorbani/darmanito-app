import React, { Component } from 'react'
import styles from './Form.module.scss';

class Form extends Component {
    render() {
        return (
            <div className={styles.form}>
                <form>
                    <label>
                        نام و نام خانوادگی
                        <input type="text" name="name" />
                    </label>

                    <label>
                        ایمیل یا شماره همراه    
                        <input type="email" name="email" />
                    </label>

                    <label>
                        پیام شما    
                        <textarea type="text" name="textarea" />
                    </label>

                    <input type='submit' value='ارسال پیام' />
                </form> 
            </div>
        )
    }
}

export default Form
