import React from 'react'

function ProgressStep( { title, text } ) {
    return (
        <div className='progress__step'>
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    )
}

export default ProgressStep
