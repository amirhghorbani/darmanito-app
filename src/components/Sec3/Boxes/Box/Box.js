import React from 'react'


function Box({ src, text, className }) {
    return (
        <div className={className}>
            <img src={src} alt='box' />
            <p>{text}</p>
        </div>
    )
}

export default Box
