import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import { Address } from './Steps/Address'
import { Names } from './Steps/Names'
import { Result } from './Steps/Result'

const defaultData = {
    fullName : '',
    id : '',
    storeName : '',
    phone : '',
    city : '',
    area : '',
    time : '',
    address : ''
}

const steps = [
    {id : "names"},
    {id : "address"},
    {id : "result"}
]

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep : 0
    });
    const props = {formData, navigation, setForm};

    switch (step.id) {
        case "names":
            return <Names {...props} />
        case "address" :
            return <Address {...props} />
        case "result" :
            return <Result {...props} />
        default:
            break;
    }


    return (
        <div>

        </div>
    )
}
